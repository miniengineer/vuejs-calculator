import { shallowMount, createLocalVue } from '@vue/test-utils';
import Calculator from '@/components/Calculator.vue';

describe('Calculator.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Calculator);
  });

  it('should append clicked number to the display and update the current state', () => {
    wrapper.vm.append("2");
    expect(wrapper.vm.current).toBe("2");
  });

  it('should append clicked number to the existing number in the current display', () => {
    wrapper.vm.current = "2";
    wrapper.vm.append("2");
    expect(wrapper.vm.current).toBe("22");
  });

  // it('should clear value (set to default empty string) when triggering clear method', () => {

  // });
})
