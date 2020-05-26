<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <maintainers :maintainers="resource.maintainers" />
    <Download
      v-for="config in resource.configurations"
      :key="config.name"
      class="download mr-2"
      :data="config.data"
      :filename="`rules.yaml`"
    >
      Import into Prometheus
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
