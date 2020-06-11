<template>
  <div v-if="maintainers.length > 0" class="maintainers">
    <h3 class="maintainers-title">
      Maintainers
    </h3>
    <markdown :header-level-start="2" :content="maintainers" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },
  props: {
    maintainers: {
      type: String,
      required: true
    }
  }
}
</script>
