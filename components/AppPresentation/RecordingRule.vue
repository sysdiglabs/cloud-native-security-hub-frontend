<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <maintainers :maintainers="resource.maintainers" />
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

export default {
  components: {
    Prism,
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
