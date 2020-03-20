<template>
  <div v-if="maintainers.length > 0" class="maintainers">
    <h3 class="maintainers-title">
      Maintainers
    </h3>
    <span v-for="maintainer in maintainers" :key="maintainer.link" class="maintainer">
      <b-link :href="`${maintainer.link}`" target="_blank" rel="noopener,noreferrer,noindex,nofollow">
        {{ maintainer.name }}
      </b-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    maintainers: {
      type: Array,
      required: true
    }
  }
}
</script>
