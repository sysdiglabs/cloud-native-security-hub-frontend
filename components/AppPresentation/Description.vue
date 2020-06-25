<template>
  <div>
    <b-img
      v-if="sysdigDashboardImage.length > 0"
      class="image"
      :src="`https://raw.githubusercontent.com/sysdiglabs/prometheus-hub-resources/${repoBranch}/resources/${sysdigDashboardImage[0].image}`"
      :alt="sysdigDashboardImage[0].name"
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
      type: Object,
      required: true
    }
  },
  computed: {
    sysdigDashboardImage () {
      const dashboardResource = this.resources.filter(resource => resource.kind === 'Dashboard')
      const sysdigDashboards = dashboardResource[0].configurations.filter(configuration => configuration.kind === 'Sysdig')
      return sysdigDashboards
    },
    repoBranch () {
      if (process.env.REPO_BRANCH === undefined) {
        return 'master'
      } else {
        return process.env.REPO_BRANCH
      }
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
