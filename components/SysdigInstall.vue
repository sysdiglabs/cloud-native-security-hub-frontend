<template>
  <div>
    <h2>Installing dashborads and alerts in Sysdig Monitor:</h2>
    <p>Run this command using your API-TOKEN:</p>
    <pre>
      <code>docker  run -it --rm \
          sysdiglabs/promcat-connect:0.1 \
          install \
          "{{ appId }}:{{ version }}" \
          -t YOUR-API-TOKEN</code>
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      required: true
    }
  }
}
</script>
