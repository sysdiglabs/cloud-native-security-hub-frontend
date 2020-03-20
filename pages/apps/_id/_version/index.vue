<template>
  <div>
    <Header />
    <div class="lines" />
    <b-container class="content">
      <b-row>
        <b-col>
          <h1 class="title">
            {{ appName }}
          </h1>
          <div class="versions">
            <h2 class="version-title">
              Available Versions
            </h2>
            <b-dropdown
              id="version-selector"
              :text="`Version ${currentVersion}`"
              class="version-selector m-md-2"
              :disabled="appVersions.length <= 1"
              variant="outline-primary"
            >
              <b-dropdown-item
                v-for="version in versionsWithoutCurrent"
                :key="version"
                :class="{current: version === currentVersion}"
                :to="`/apps/${appId}/${version}`"
                class="version"
              >
                Version {{ version }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <b-tabs
            class="tabs"
            fill
            justified
            content-class="tabs-content mt-3"
          >
            <b-tab
              v-for="resource in appResources"
              :key="resource.kind"
              :title="resource.kind.split(/(?=[A-Z])/).join(' ')"
              class="tab"
              lazy
            >
              <AppPresentation class="app-presentation" :resource="resource" />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppPresentation from '@/components/AppPresentation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCanonicalForApp } from '@/infrastructure/Canonical'

export default {
  components: {
    AppPresentation,
    Header,
    Footer
  },
  async fetch ({ store, params }) {
    await store.dispatch('getAppAndResourcesByVersion', { id: params.id, version: params.version })
  },
  computed: {
    ...mapState({
      appResources: state => state.appResources,
      app: state => state.app
    }),
    appId () {
      return this.app.id
    },
    appName () {
      return this.app.name
    },
    appVersions () {
      return this.app.availableVersions
    },
    currentVersion () {
      return this.$route.params.version || this.appVersions[this.appVersions.length - 1]
    },
    versionsWithoutCurrent () {
      return this.appVersions.filter(version => version !== this.currentVersion)
    }
  },
  methods: {
    copy (text) {
      navigator.clipboard.writeText(text)
    }
  },
  head () {
    return {
      title: `${this.appName} PromCat version ${this.$route.params.version}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.appName} prometheus details` }
      ],
      link: [
        {
          rel: 'canonical',
          href: getCanonicalForApp(this.appId, this.appVersions, this.currentVersion)
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 40px;
}
.versions {
  margin-bottom: 32px;
  ::v-deep .version-selector {
    margin: 0 !important;

    .btn {
      background-color: transparent;
      border: 1px solid $secondary;
      color: $primary;
      width: 320px;
      height: 48px;
      text-align: left;
      &:hover {
        border: 1px solid $primary;
      }
      &:after {
        float: right;
        color: $primary;
        margin-top: 10px;
      }
    }
    .dropdown-item {
      color: $primary;
      padding: 0.375rem 0.75rem;
      &:hover {
        background-color: $primary;
        color: white;
      }
    }
    .dropdown-menu {
      border: 1px solid $primary;
      width: 320px;
      height: 48px;
    }
  }
  .version-title {
    text-transform: uppercase;
    font-size: $font-L;
    line-height: 19px;
    letter-spacing: 1px;
    &:after {
      content: " ";
      border-top: 2px solid $primary;
      margin-top: $separator-margin;
      margin-bottom: $separator-margin;
      display: block;
      max-width: $separator-width;
    }
  }
}
.tabs {
  ::v-deep .nav-tabs {
    border-bottom: 1px solid $secondary;
    .nav-link {
      text-transform: uppercase;
      font-size: $font-L;
      line-height: 19px;
      letter-spacing: 1px;
      color: $secondary;
      text-align: center;
      padding-bottom: 16px;
      &:hover {
        border: none;
        color: $primary;
      }
      &:focus {
        border-color: $primary;
      }
      &.active {
        color: black;
        border-color: $primary;
        border-style: solid;
        border-width: 0 0 8px 0;
        padding-bottom: 16px;
      }
    }
  }
}
.app-presentation {
  ::v-deep .markdown {
    font-size: 18px;
    line-height: 24px;
  }
}
.lines {
  background-image: url(~assets/images/lines-right-int.svg);
  background-position: top right;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 250px;
  margin-top: -2.5rem;
}
.content {
  margin-top: 4rem;
  margin-bottom: 2rem;
  min-height: calc(100vh - var(--footer-height) - var(--header-height) - var(--header-margin));
  ::v-deep {
    h2 {
      color: black;
      font-size: $font-L;
      line-height: 19px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 40px;
      &:after {
        content: " ";
        border-top: 2px solid $primary;
        margin-top: $separator-margin;
        margin-bottom: $separator-margin;
        display: block;
        max-width: $separator-width;
      }
    }
    h3 {
      color: black;
      font-size: $font-L;
      font-weight: $weight-bold;
      line-height: 19px;
      letter-spacing: 1px;
      margin-top: 40px;
      &:after {
        content: " ";
        border-top: 1px solid black;
        margin-top: $separator-margin;
        margin-bottom: $separator-margin;
        display: block;
        max-width: $separator-width;
      }
    }
    .maintainers {
      .maintainers-title {
        display: inline-block;
        margin-right: 1rem;
      }
      .maintainer {
        font-weight: $weight-bold;
      }
    }
  }
}
</style>
