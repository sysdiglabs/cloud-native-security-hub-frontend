<template>
  <div>
    <markdown :header-level-start="2" :content="resource.data" />
    <maintainers :maintainers="resource.maintainers" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import Maintainers from '@/components/Maintainers'

export default {
  components: {
    Markdown,
    Maintainers
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>
