<template>
  <component :is="tag" v-if="content" class="markdown" v-html="htmlContent" />
</template>

<script>
import showdown from 'showdown'

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
        literalMidWordUnderscores: true
      })
      return converter.makeHtml(this.content)
    }
  }
}
</script>
