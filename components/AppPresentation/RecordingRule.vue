<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <maintainers :maintainers="resource.maintainers" />
    <Download
      class="download mr-2"
      :data="resource.data"
      :filename="`${resource.app}_RecordingRules.yaml`"
    >
      Import into Prometheus
    </Download>
    <prism
      language="yaml"
      :code="resource.data"
    />
  </div>
</template>

<script>
import Prism from '@/components/Prism'
import Markdown from '@/components/Markdown'
import Maintainers from '@/components/Maintainers'
import Download from '@/components/Download'

export default {
  components: {
    Prism,
    Markdown,
    Maintainers,
    Download
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>
