import { shallowMount } from '@vue/test-utils'
import Markdown from '@/components/Markdown'

const content = '# hello, markdown!'
const tag = 'span'
const expectedHTML = `<${tag} class="markdown"><h2>hello, markdown!</h2></${tag}>`

describe('Markdown', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Markdown, {
      propsData: {
        content,
        tag,
        headerLevelStart: 2
      }
    })
  })

  it('translates markdown to HTML inside the tag', () => {
    expect(wrapper.html()).toEqual(expectedHTML)
  })
})
