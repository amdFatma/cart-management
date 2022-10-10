import Cart from '@/views/Cart.vue';

describe('Cart component', () => {
  it('a le hook `name`', () => {
    expect(Cart.name).toEqual('Cart');
  });
  it('a les bons composants', () => {
      expect(typeof Cart.components.CartComponent).toEqual('function');
      expect(typeof Cart.components.DeliveryMethodComponent).toEqual('function');
  });
});





