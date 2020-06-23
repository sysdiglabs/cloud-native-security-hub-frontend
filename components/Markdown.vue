<template>
  <component :is="tag" v-if="content" class="markdown" v-html="htmlContent" />
</template>

<script>
import showdown from 'showdown'
import 'showdown-highlightjs-extension'

export default {
  props: {
    content: {
      type: String,
      default: undefined
    },
    tag: {
      type: String,
      default: 'div'
    },
    headerLevelStart: {
      type: Number,
      default: 1
    }
  },
  computed: {
    htmlContent () {
      const converter = new showdown.Converter({
        noHeaderId: true,
        headerLevelStart: this.headerLevelStart,
        openLinksInNewWindow: true,
        literalMidWordUnderscores: true,
        extensions: ['highlightjs']
      })
      return converter.makeHtml(this.content)
    }
  }
}
</script>
<style lang="css">
div.markdown pre {
  background-color:#f6f8fa;
  padding: 16px
}
</style>
