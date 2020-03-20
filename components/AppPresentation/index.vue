<template>
  <component :is="resource.kind" :resource="resource" />
</template>

<script>
import Alerts from '@/components/AppPresentation/Alerts'
import Description from '@/components/AppPresentation/Description'
import ExporterConfig from '@/components/AppPresentation/ExporterConfig'
import Dashboards from '@/components/AppPresentation/Dashboards'
import RecordingRules from '@/components/AppPresentation/RecordingRules'

export default {
  components: {
    Alerts,
    Description,
    ExporterConfig,
    Dashboards,
    RecordingRules
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>
