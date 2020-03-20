import MiniSearch from 'minisearch'

export default class SearchService {
  constructor () {
    this.searchEngine = new MiniSearch({
      fields: ['name', 'shortDescription'],
      storeFields: ['id', 'name', 'kind'],
      searchOptions: {
        boost: { name: 2 },
        fuzzy: 0.2
      },
      extractField: (document, fieldName) => {
        const value = fieldName.split('.').reduce((doc, key) => doc && doc[key], document)
        return Array.isArray(value) ? value.join(' ') : value
      }
    })
  }

  search (text) {
    return this.searchEngine.search(text)
  }

  autoSuggest (text) {
    return this.searchEngine.autoSuggest(text)
  }

  initSearchEngine (documents) {
    return this.searchEngine.addAllAsync(documents)
  }
}
