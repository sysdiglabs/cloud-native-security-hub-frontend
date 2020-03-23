import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header'
import Search from '@/components/Search'

describe('Header', () => {
  let wrapper

  it('shows small search with brand', () => {
    wrapper = shallowMount(Header)

    expect(wrapper.find(Search).props()).toEqual({ autofocus: undefined, size: undefined })
  })

  it('shows hero title with big search', () => {
    wrapper = shallowMount(Header, {
      propsData: {
        hero: true
      }
    })

    expect(wrapper.find('.title').text()).toContain('Discover and share Prometheus best practices and configurations')
  })
})
