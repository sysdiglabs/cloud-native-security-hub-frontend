<template>
  <component :is="resource.kind" :resource="resource" />
</template>

<script>
import Alert from '@/components/AppPresentation/Alert'
import Description from '@/components/AppPresentation/Description'
import ExporterConfig from '@/components/AppPresentation/ExporterConfig'
import Dashboard from '@/components/AppPresentation/Dashboard'
import RecordingRule from '@/components/AppPresentation/RecordingRule'

export default {
  components: {
    Alert,
    Description,
    ExporterConfig,
    Dashboard,
    RecordingRule
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>
