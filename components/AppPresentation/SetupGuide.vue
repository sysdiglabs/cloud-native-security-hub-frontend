<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <markdown :header-level-start="2" :content="installInstructions" />
    <div v-if="resource.configurations && resource.configurations.length > 0">
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
      return ''
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
