<template>
  <div>
    <b-img
      v-if="dashboard !== null"
      class="image"
      :src="`https://raw.githubusercontent.com/sysdiglabs/prometheus-hub-resources/${repoBranch}/resources/${dashboard.image}`"
      :alt="`${dashboard.name}`"
    />
    <markdown :header-level-start="2" :content="resource.description" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },
  props: {
    resource: {
      type: Object,
      required: true
    },
    resources: {
      type: Array,
      required: true
    }
  },
  computed: {
    dashboard () {
      const dashboardResource = this.resources.filter(resource => resource.kind === 'Dashboard')

      if (!dashboardResource || dashboardResource.length === 0) {
        return null
      }

      const dashboards = dashboardResource[0].configurations
        .filter(configuration => configuration.kind === 'Grafana')
        .map(({ image, name }) => ({ image, name }))
      return dashboards.length > 0 ? dashboards[0] : null // TODO default image here?
    },
    repoBranch () {
      return process.env.REPO_BRANCH === undefined ? 'master' : process.env.REPO_BRANCH
    }
  }
}
</script>
<style lang="css" scoped>
.image {
  width: 500px;
  float: right;
  margin-top: 55px;
  margin-left: 15px;
}
</style>
