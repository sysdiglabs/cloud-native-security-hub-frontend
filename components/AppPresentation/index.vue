<template>
  <component :is="resource.kind" :resource="resource" :resources="resources" />
</template>

<script>
import Alert from '@/components/AppPresentation/Alert'
import Description from '@/components/AppPresentation/Description'
import SetupGuide from '@/components/AppPresentation/SetupGuide'
import Dashboard from '@/components/AppPresentation/Dashboard'
import RecordingRule from '@/components/AppPresentation/RecordingRule'

export default {
  components: {
    Alert,
    Description,
    SetupGuide,
    Dashboard,
    RecordingRule
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
  }
}
</script>
