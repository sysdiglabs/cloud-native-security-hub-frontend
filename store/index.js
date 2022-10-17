const resourcesOrder = ['Description', 'SetupGuide', 'Dashboard', 'Alert', 'RecordingRule']
const resourcesByOrder = (a, b) => resourcesOrder.indexOf(a.kind) - resourcesOrder.indexOf(b.kind)

const hasGrafanaDashboards = resource => resource.kind !== 'Dashboard' || (resource.configurations && resource.configurations.length > 0)
export const state = () => ({
  apps: [],
  app: {},
  appResources: [],
  selectedCategories: []
})

export const getters = {
  categories: state => [...new Set(state.apps.flatMap(app => app.keywords))]
    .sort((a, b) => a.localeCompare(b)),

  isSelectedCategory: state => category => state.selectedCategories.includes(c => c === category),

  apps: (state, getters) => {
    let apps = state.apps
    if (state.selectedCategories.length) {
      apps = apps.filter(app => app.keywords.includes(keyword => getters.isSelectedCategory(keyword)))
    }
    return apps
  }
}

export const mutations = {
  app (state, app) {
    state.app = Object.freeze(app)
  },
  apps (state, apps) {
    state.apps = Object.freeze(apps)
  },
  appResources (state, appResources) {
    state.appResources = Object.freeze(appResources)
  },
  selectCategory (state, category) {
    state.selectedCategories.push(category)
  },
  unSelectCategory (state, category) {
    state.selectedCategories = state.selectedCategories.filter(c => c !== category)
  }
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    // we get them in the init instead of the home to have them indexed for search
    const apps = await this.$services.contentService.getApps()
    commit('apps', apps)
  },

  initSearchEngine ({ state }) {
    this.$services.searchService.initSearchEngine([
      ...state.apps.filter(app => app.available)
    ])
  },

  async getAppAndResourcesByVersion ({ commit }, { id, version }) {
    const app = await this.$services.contentService.getApp(id)
    const appResources = await this.$services.contentService.getAppResourcesByVersion(id, version || app.availableVersions[0])
    // TODO 'Grafana' needs to be parametrized
    const promcatAppResources = appResources
      .filter(hasGrafanaDashboards)
      .map(resource => resource.kind === 'Dashboard'
        ? { ...resource, configurations: resource.configurations.filter(config => config.kind === 'Grafana') }
        : resource)
      .filter(hasGrafanaDashboards)

    commit('app', app)
    commit('appResources', promcatAppResources.sort(resourcesByOrder))
  },

  toggleCategory ({ commit, getters }, category) {
    if (getters.isSelectedCategory(category)) {
      commit('unSelectCategory', category)
    } else {
      commit('selectCategory', category)
    }
  }
}
