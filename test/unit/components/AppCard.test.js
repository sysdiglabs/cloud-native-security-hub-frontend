import { shallowMount } from '@vue/test-utils'
import AppCard from '@/components/AppCard'
import { app } from '@/test/fixtures/App'

describe('AppCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(AppCard, {
      propsData: {
        app
      }
    })
  })

  it('shows app data', () => {
    expect(wrapper.find('.link').attributes().to).toEqual('/apps/' + app.id)
    expect(wrapper.find('.image').attributes().src).toEqual(app.icon)
    expect(wrapper.find('.description').text()).toEqual(app.shortDescription)
  })
})
