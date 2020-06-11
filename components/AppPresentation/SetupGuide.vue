<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <SysdigInstall
      :appId="resource.appID"
      :version="resource.appVersion[0]"
    />
    <Download
      v-for="config in resource.configurations"
      :key="config.name"
      class="download mr-2"
      :data="config.data"
      :filename="`${config.name}`"
    >
      {{ config.name }}
    </Download>
    <prism
      v-for="config in resource.configurations"
      :key="`${config.name}`"
      language="yaml"
      :code="config.data"
    />
  </div>
</template>

<script>
import Prism from '@/components/Prism'
import Markdown from '@/components/Markdown'
import Download from '@/components/Download'
import SysdigInstall from '@/components/SysdigInstall'

export default {
  components: {
    Prism,
    Markdown,
    Download,
    SysdigInstall
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>
