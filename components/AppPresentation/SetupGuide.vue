<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <markdown :header-level-start="2" :content="installInstructions" />
    <H2>Setup files</H2>
    <Download
      v-for="config in resource.configurations"
      :key="config.name"
      class="download mr-2"
      :data="config.data"
      :filename="`${config.name}`"
    >
      {{ config.name }}
    </Download>
    <H2>Setup details</H2>
    <b-tabs
      class="tabs-lowercase"
      fill
      justified
      content-class="tabs-content mt-3"
    >
      <b-tab
        v-for="config in resource.configurations"
        :key="`${config.name}`"
        :title="`${config.name}`"
        lazy
        class="tabs-lowercase"
      >
        <prism
          language="yaml"
          :code="config.data"
          :filename="`${config.name}`"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Prism from '@/components/Prism'
import Markdown from '@/components/Markdown'
import Download from '@/components/Download'

export default {
  components: {
    Prism,
    Markdown,
    Download
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
    ...mapState({
      appResources: state => state.appResources,
      app: state => state.app
    }),
    installInstructions () {
      let instructions = ''
      instructions += '# Installing dashboards and alerts in Sysdig Monitor:\n'
      instructions += '<i>Note: These instructions are only for on-prem customers and legacy environments. All these dashboards and alerts are available out-of-the-box in Sysdig monitor platform. '
      instructions += 'Here is the list of <a target="_blank" href="https://docs.sysdig.com/en/docs/sysdig-monitor/dashboards/dashboard-templates/">all the dashboards included in the platform</a>.</i>\n\n'
      instructions += 'Run this command using your API-TOKEN (-u argument is optional):\n'
      instructions += '```bash\n'
      instructions += 'docker  run -it --rm \\\n'
      instructions += '\tsysdiglabs/promcat-connect:0.1 \\\n'
      instructions += '\tinstall \\\n'
      instructions += '\t' + this.resource.appID + ':' + this.currentVersion + ' \\\n'
      instructions += '\t-t YOUR-API-TOKEN \\\n'
      instructions += '\t-u https://app.sysdigcloud.com/ \n'
      instructions += '```\n'
      return instructions
    },
    appVersions () {
      return this.app.availableVersions
    },
    currentVersion () {
      return this.$route.params.version || this.appVersions[this.appVersions.length - 1]
    }
  }
}
</script>
<style scoped lang="scss">
.tabs-lowercase{
    ::v-deep .nav-tabs {
    border-bottom: 1px solid $secondary;
    .nav-link {
      font-size: $font-L;
      line-height: 19px;
      letter-spacing: 0px !important;
      text-transform: lowercase !important;
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
</style>
