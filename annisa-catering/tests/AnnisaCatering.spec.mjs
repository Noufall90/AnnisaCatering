import { mount } from '@vue/test-utils'
import AnnisaCatering from '../components/AnnisaCatering.vue';


describe('AnnisaCatering', () => {
  it('renders correctly', () => {
    const wrapper = mount(AnnisaCatering)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the main heading', () => {
    const wrapper = mount(AnnisaCatering)
    expect(wrapper.find('h1').text()).toBe('Annisa Catering')
  })

  it('has the correct number of sections', () => {
    const wrapper = mount(AnnisaCatering)
    expect(wrapper.findAll('section').length).toBe(4)
  })

  it('includes footer', () => {
    const wrapper = mount(AnnisaCatering)
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('has correct number of images', () => {
    const wrapper = mount(AnnisaCatering)
    expect(wrapper.findAll('img').length).toBe(6)
  })
})
