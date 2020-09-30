<template>
  <b-form-group
    id="search"
    class="search"
    label-sr-only
    label="Search"
    label-for="inputSearch"
  >
    <b-input-group class="input-search">
      <b-form-input
        id="inputSearch"
        ref="inputSearch"
        type="search"
        autocomplete="off"
        :autofocus="autofocus"
        :size="size"
        :value="searchText"
        @input="searchChange"
        @keydown.down="searchDown"
        @keydown.tab="searchDown"
        @keydown.up="searchUp"
        @keydown.shift.tab="searchUp"
        @keydown.enter.prevent="selectSearch"
        @keydown.right="selectSearch"
        @keydown.escape.prevent="clearSearch"
        @blur="clearSearch"
        @focus="searchForResults"
      />
      <b-input-group-append>
        <b-button variant="outline-primary" pill class="btn-search" @click="selectSearch">
          FILTER
        </b-button>
      </b-input-group-append>
      <div class="searchtext d-flex align-items-center">
        <span class="searched">{{ searchText }}</span>
        <span class="suggestion">{{ searchSuggestionsText }}</span>
      </div>
    </b-input-group>
    <b-list-group v-if="searchResults.length > 0" class="resultList">
      <b-list-group-item
        v-for="(result, index) in searchResults"
        :key="result.id + result.kind"
        class="result"
        :active="index === selectedResult"
        :to="`/apps/${result.id}`"
      >
        {{ result.name }}
      </b-list-group-item>
    </b-list-group>
  </b-form-group>
</template>

<script>

export default {
  props: {
    size: {
      type: String,
      default: undefined
    },
    autofocus: {
      type: Boolean,
      default: undefined
    }
  },
  data: () => ({
    selectedResult: -1,
    searchText: '',
    searchResults: []
  }),
  computed: {
    searchSuggestions () {
      return this.$services.searchService.autoSuggest(this.searchText).map(result => result.suggestion)
    },
    searchSuggestionsFullText () {
      return this.searchSuggestions.length && this.selectedResult === -1 ? this.searchSuggestions[0] : ''
    },
    searchSuggestionsText () {
      const regEx = new RegExp(this.searchText, 'i')
      return this.searchSuggestionsFullText.replace(regEx, '')
    }
  },
  methods: {
    searchChange (text) {
      this.searchText = text
      this.selectedResult = -1
      this.searchForResults()
    },
    searchDown (event) {
      if (!this.searchText) { return }
      event.preventDefault()
      this.selectedResult = Math.min(this.selectedResult + 1, this.searchResults.length - 1)
      this.updateSearchTextWithResult(this.selectedResult)
    },
    searchUp () {
      if (!this.searchText) { return }
      this.selectedResult = Math.max(0, this.selectedResult - 1)
      this.updateSearchTextWithResult(this.selectedResult)
    },
    clearSearch (event) {
      const isClickOnResult = event.relatedTarget && event.relatedTarget.className.includes('result')
      if (isClickOnResult) { return }
      this.selectedResult = -1
      this.searchResults = []
      this.$refs.inputSearch.blur()
    },
    selectSearch () {
      if (!this.searchText) { return }
      event.preventDefault()
      if (this.selectedResult >= 0 && this.searchResults[this.selectedResult]) {
        const result = this.searchResults[this.selectedResult]
        this.$router.push(`/apps/${result.id}`)
      } else {
        this.selectAutoCompleteOption()
      }
    },
    selectAutoCompleteOption () {
      this.searchText = this.searchSuggestionsFullText
      if (this.searchResults) { this.selectedResult = 0 }
      this.searchForResults()
    },
    searchForResults () {
      this.searchResults = this.$services.searchService.search(this.searchText)
    },
    updateSearchTextWithResult (i) {
      if (this.searchResults.length) {
        this.searchText = this.searchResults[i].name
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .search {
    position: relative;
    margin: 0;
    .input-search {
      color: black;
      border: 1px solid #FCE4DE;
      border-radius: 2rem;
      background-color: $white;
      padding: 0.5rem 0.5rem 0.5rem 0;
      &:focus-within {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }

      input {
        border-radius: 2rem;
        border: none;
        outline: none;
        box-shadow: none;
        padding: 0 0.5rem 0 1rem;
        background: transparent;
        color: transparent;
        z-index: 2;
      }

      .btn-search {
        padding: 0.4rem 2.8rem;
        text-align: center;
      }

      .searchtext {
        font-size: 1rem;
        z-index: 1;
        position: absolute;
        padding: 0 0.5rem 0 1rem;
        top: 0;
        bottom: 0;
        width: 100%;
        .searched {
          color: #000000;
        }

        .suggestion{
          color: #b3b0b0;
        }
      }
    }
    .resultList {
      position: absolute;
      top: 3.45rem;
      z-index: 2;
      color: #415564;
      width: 100%;
      @include media-breakpoint-up(md) {
        width: 80%;
      }
    }
  }

  .search--reduced {
    .input-search {
      padding: 0.3rem 0.3rem 0.3rem 0;

      .form-control {
        height: calc(1em + 0.75rem + 2px);
      }

      .btn-search {
        padding: 0.2rem 2rem;
      }
    }
  }
</style>
