import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer should', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Footer)
  })

  it('display as expected', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
