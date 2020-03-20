<template functional>
  <b-btn variant="primary" pill :class="[ data.class, data.staticClass]" :download="props.filename" :href="`data:text/plain;charset=utf-8,${encodeURIComponent(props.data)}`">
    <slot />
  </b-btn>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      default: undefined
    }
  }
}
</script>
