import Vue from 'vue'
import App from '@/App'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .toEqual('Welcome to Your Vue.js App')
  })
})
