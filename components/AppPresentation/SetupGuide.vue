<template>
  <div>
    <markdown :header-level-start="2" :content="resource.description" />
    <markdown :header-level-start="2" :content="installInstructions" />
    <H2>Setup files</H2>
    <Download
      v-for="config in resource.configurations"
      :key="config.name"
      class="download mr-2"
      :data="config.data"
      :filename="`${config.name}`"
    >
      {{ config.name }}
    </Download>
    <prism
      v-for="config in resource.configurations"
      :key="`${config.name}`"
      language="yaml"
      :code="config.data"
    />
  </div>
</template>

<script>
import Prism from '@/components/Prism'
import Markdown from '@/components/Markdown'
import Download from '@/components/Download'

export default {
  components: {
    Prism,
    Markdown,
    Download
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
  },
  computed: {
    installInstructions () {
      let instructions = ''
      instructions += '# Installing dashborads and alerts in Sysdig Monitor:\n'
      instructions += 'Run this command using your API-TOKEN:\n'
      instructions += '```bash\n'
      instructions += 'docker  run -it --rm \\ \n'
      instructions += '\tsysdiglabs/promcat-connect:0.1 \\ \n'
      instructions += '\tinstall \\ \n'
      instructions += '\t' + this.resource.appID + ':' + this.resource.appVersion[0] + '\\ \n'
      instructions += '\t-t YOUR-API-TOKEN \n'
      instructions += '```\n'
      return instructions
    }
  }
}
</script>
