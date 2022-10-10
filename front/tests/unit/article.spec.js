import Article from '@/components/base/Article.vue';
import {shallowMount} from '@vue/test-utils';

const wrapper = shallowMount(Article, {
  propsData: {
    product: {
        "name": "Canapé-lit style scandinave 3 places gris clair",
        "price": {
        "base": {
        "amount": 699,
        "formatted": "699,00 €"
        },
        "sales": {
        "amount": 0,
        "formatted": "0,00 €"
        },
        "eco": {
        "amount": 10.5,
        "formatted": "10,50 €"
        }
        },
        "reference": "166174",
        "line": "Brooke",
        "slug": "canape-lit-style-scandinave-3-places-gris-clair-brooke",
        "stock": {
        "state": true
        },
        "images": [
        {
        "xsmall": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-200-16-1-166174_5.jpg",
        "small": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-350-16-1-166174_5.jpg",
        "medium": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-500-16-1-166174_5.jpg",
        "large": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-1000-16-1-166174_5.jpg"
        },
        {
        "xsmall": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-200-16-1-166174_7.jpg",
        "small": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-350-16-1-166174_7.jpg",
        "medium": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-500-16-1-166174_7.jpg",
        "large": "//cdn.maisonsdumonde.com/img/canape-lit-style-scandinave-3-places-gris-clair-1000-16-1-166174_7.jpg"
        }],
        "qty": 3
    },
    id: "166174"
  }
});

describe('Article component', () => {
  it('afficher les infos du produit', () => {
    const productName = wrapper.find('div[class="Article__detailsName"]').element.textContent;
    const productRef = wrapper.find('div[class="Article__detailsRef"]').element.textContent;
    const productQty = parseInt(wrapper.find('span[class="Article__detailsQuantityValue"]').element.textContent);
    expect(productName).toEqual(wrapper.vm.product.name);
    expect(productRef).toEqual('Réf: ' + wrapper.vm.product.reference);
    expect(productQty).toEqual(wrapper.vm.product.qty);
  });
});





