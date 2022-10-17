<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <H2>Alert files</H2>
    <Download
      v-for="alert in kindPrometheus"
      :key="alert.kind"
      class="download mr-2"
      :data="alert.data"
      :filename="`${resource.app} ${alert.kind} alert.yaml`"
    >
      Import into {{ alert.kind }}
    </Download>
    <H2>Alert details</H2>
    <prism
      v-for="config in kindPrometheus"
      :key="`${config.name}`"
      language="yaml"
      :code="config.data"
      :filename="`${config.name}`"
    />
  </div>
</template>

<script>
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
    kindPrometheus () {
      return this.resource.configurations.filter(configuration => configuration.kind === 'Prometheus')
    }
  }
}
</script>
