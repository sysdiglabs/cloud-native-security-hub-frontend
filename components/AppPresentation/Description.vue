<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },
  props: {
    resource: {
      type: Object,
      required: true
    }
  }
}
</script>
