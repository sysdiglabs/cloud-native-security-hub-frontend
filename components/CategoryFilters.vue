<template>
  <section class="filter-group categories">
    <h3 class="title text-uppercase">
      Select your category
    </h3>
    <b-form-group vertical class="filters w-100">
      <b-form-checkbox
        v-for="category in categories"
        :key="category"
        class="text-left filter"
        :class="{ checked: isSelectedCategory(category) }"
        :checked="isSelectedCategory(category)"
        @change="toggleCategory(category)"
      >
        {{ category }}
      </b-form-checkbox>
    </b-form-group>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['categories', 'isSelectedCategory'])
  },
  methods: {
    ...mapActions(['toggleCategory'])
  }
}
</script>

<style lang="scss" scoped>
$margin-top: 24px;
.categories {
  position: sticky;
  top: $margin-top;
  scrollbar-width: none;
  width: 240px;

  .filters {
    list-style-type: none;
    margin: 0;
    padding: 0;
    .filter {
      font-size: 18px;
      line-height: 24px;
      padding: 0.5rem 0 0.5rem 1rem;
      border-radius: 0.25rem;
      margin-top: 0.125rem;
      &.checked {
        background-color: #FCE4DE
      }
      ::v-deep {
        .custom-control-label {
          cursor: pointer;
          padding-left: 30px;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            border: 1px solid $primary;
            background-color: transparent;
            border-radius: 4px;
            padding-left: 0px;
          }
          &::after {
            position: absolute;
            top: 7px;
            left: 6px;
            content: "";
            width: 13px;
            height: 8px;
            border: 2px solid $primary;
            border-top: none;
            border-right: none;
            background: transparent;
            opacity: 0;
          }
        }
        .custom-control-input:checked + .custom-control-label::after {
          opacity: 1;
          transform: scale(1) rotate(-45deg);
          font-size: 13px;
        }
        .custom-control-label::before {
          border-color: $primary;
          box-shadow: none;
        }
      }
    }
  }
  .title {
    margin: 1rem 0 0.3rem 0;
    font-size: 1rem;
    padding: 16px 0 16px 0;

    &:before {
      content: " ";
      position:absolute;
      top: 0;
      height: 2px;
      width: 45px;
      background-color: $primary;
    }
  }
}
</style>
