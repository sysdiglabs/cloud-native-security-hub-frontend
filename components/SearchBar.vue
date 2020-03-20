<template>
  <b-row class="search-bar-wrapper align-items-center" no-gutters>
    <b-col cols="12" md="8">
      <Search :class="{'search--reduced': reduced }" />
    </b-col>
    <b-col lg="3" class="d-none d-lg-block text-right mr-3 mr-xl-0">
      <b-btn pill class="contribute" variant="outline-primary" href="https://github.com/sysdiglabs/prometheus-hub-resources" target="_blank">
        Contribute
      </b-btn>
    </b-col>
  </b-row>
</template>

<script>
import Search from '@/components/Search'

export default {
  components: {
    Search
  },
  props: {
    reduced: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .search-bar-wrapper {
    font-size: 0.875rem;
    height: 80px;
    .contribute {
      text-transform: uppercase;
      padding: 0.6rem 2.6875rem;
    }
  }

  .search-bar--reduced {
    .contribute {
      padding: 0.2rem 1.5rem;
      background-color: $white;
      margin-left: 15px;
      &:hover {
        background-color: $primary;
      }
    }
  }
</style>
