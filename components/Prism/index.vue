<template>
  <pre :class="`language-${language}`" class="prism">
    <b-btn v-if="copyToClipboard" variant="primary" pill class="prism-clipboard-button d-flex align-items-center justify-content-center" @click="copyCode"><Copy /><span>{{ copied ? 'Copied code' : 'Copy Code' }}</span></b-btn>
    <code ref="code" :class="`language-${language}`" v-html="codeWrapper" />
  </pre>
</template>

<script>
import 'prismjs'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import Copy from '~/assets/icons/copy.svg?inline'

export default {
  components: {
    Copy
  },
  props: {
    plugins: {
      type: Array,
      required: false,
      default: () => []
    },
    code: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      required: true
    },
    copyToClipboard: {
      type: Boolean,
      default: true
    },
    copiedTimeShown: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      codeWrapper: '',
      copied: false
    }
  },
  watch: {
    code () {
      this.render()
    },
    language () {
      this.render()
    },
    plugins () {
      this.render()
    }
  },
  created () {
    this.requireTheme(this.theme)
  },
  mounted () {
    this.render()
  },
  updated () {
    this.render()
  },
  methods: {
    requirePlugin (plugin) {
      if (global.Prism.plugins && global.Prism.plugins[plugin]) {
        return true
      }
      try {
        require(`prismjs/plugins/${plugin}/prism-${plugin}`)
        requirePluginCss(plugin)
      } catch (error) {
        console.error(error)
      }

      function requirePluginCss (plugin) {
        try {
          require(`prismjs/plugins/${plugin}/prism-${plugin}.css`)
        } catch (err) {}
      }
    },
    requireTheme (theme) {
      if (!theme) {
        return
      }
      try {
        require(`prismjs/themes/${theme}.css`)
      } catch (error) {
        console.error(error)
      }
    },
    requireLanguage (language) {
      try {
        require(`prismjs/components/prism-${this.language}`)
      } catch (error) {
        console.error(error)
      }
    },
    hasPlugin (plugin) {
      return this.plugins.includes(plugin)
    },
    render () {
      this.plugins.forEach((plugin) => {
        if (global.Prism.plugins && global.Prism.plugins[plugin]) {
          return true
        }
        this.requirePlugin(plugin)
      })

      this.$nextTick(() => {
        this.requireLanguage(this.language)
        const codeNormalizer = global.Prism.plugins.NormalizeWhitespace
        this.codeWrapper = codeNormalizer.normalize(this.code.replace(/\s+data-v-\S+="[^"]*"/g, ''))
        global.Prism.highlightElement(this.$refs.code)
      })
    },
    copyCode () {
      navigator.clipboard.writeText(this.code)
      this.copied = true
      if (this.copiedTimeShown) {
        setTimeout(() => { this.copied = false }, this.copiedTimeShown)
      }
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/prism/theme.scss';
::v-deep {
  @import '~/assets/scss/prism/theme.scss';
}
</style>
