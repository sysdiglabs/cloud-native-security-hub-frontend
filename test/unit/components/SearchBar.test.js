import { shallowMount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar'
import Search from '@/components/Search'

describe('SearchBar should', () => {
  it('shows search and contribute button', () => {
    const wrapper = shallowMount(SearchBar)
    expect(wrapper.find('.contribute').attributes().href).toEqual('https://github.com/sysdiglabs/prometheus-hub-resources')
    expect(wrapper.find('.contribute').text()).toEqual('Contribute')
    expect(wrapper.find(Search).props()).toEqual({ autofocus: undefined, size: undefined })
  })
})
