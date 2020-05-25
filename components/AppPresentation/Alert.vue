<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <maintainers :maintainers="resource.maintainers" />
    <Download
      v-for="alert in kindPrometheus"
      :key="alert.kind"
      class="download mr-2"
      :data="alert.data"
      :filename="`${resource.app} ${alert.kind} alert.yaml`"
    >
      Import into {{ alert.kind }}
    </Download>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import Maintainers from '@/components/Maintainers'
import Download from '@/components/Download'

export default {
  components: {
    Markdown,
    Maintainers,
    Download
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    kindPrometheus () {
      return this.resource.configurations.filter(configuration => configuration.kind === 'Prometheus')
    }
  }
}
</script>
