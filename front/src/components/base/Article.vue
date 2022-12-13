<template>
  <div class="Article">
    <div class="Article__image">
      <img alt="product image"
           :src="product.images[0].xsmall" />
    </div>
    <div class="Article__details">
      <div class="Article__detailsLeft">
        <div class="Article__detailsName">{{ product.name }}</div>
        <div class="Article__detailsRef">Réf: {{ product.reference }}</div>
        <div class="Article__detailsBtn" 
             @click="deleteCartArticle(product.reference)">
            Supprimer
        </div>
      </div>
      <div class="Article__detailsRight">
        <div class="Article__detailsPrice">{{ productPrice }} €</div>
        <div class="Article__detailsQuantity">
          <div class="Article__detailsQuantityBtn" 
                  :class="{ 'Article__detailsQuantity--disable' : product.qty === 1 }"
                  @click="decrementProductQuantity">-</div>
          <span class="Article__detailsQuantityValue">{{ product.qty }}</span>
          <div class="Article__detailsQuantityBtn" 
                  @click="incrementProductQuantity">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMxn from '@/mixins/modal';

export default {
    name: "Article",
    props: {
        product: Object,
    },
    mixins: [modalMxn],
    computed: {
        productPrice() {
            return this.product.price.base.amount * this.product.qty;
        }
    },
    methods: {
        decrementProductQuantity() {
            if (this.product.qty > 1) {
                this.product.qty -= 1;
            }
        },
        incrementProductQuantity() {
            this.product.qty += 1;
        },
        deleteCartArticle(reference) {
            this.modalMxn.openModal('confirm', {reference});
        }
    },
};
</script>

<style lang="scss" scoped>
.Article {
  padding: 15px 30px;
  background: white;
  display: flex;

  &:not(:last-child) {
    border-bottom: 1px solid #e8e8e8;
  }

  &__image {
    margin-right: 20px;
    max-width: 160px;

    img {
      width: 100%;
    }
  }

  &__details {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;

    &Name {
      margin-bottom: 8px;
    }

    &Ref {
      font-size: 12px;
    }

    &Btn {
      position: absolute;
      text-decoration: underline;
      cursor: pointer;
      bottom: 0;
    }

    &Quantity {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      align-items: center;

      &Value {
        margin: 20px;
      }

      &Btn {
        cursor: pointer;
        font-size: 20px;
      }

      &--disable {
        color: #b7b1b1;
      }
    }
  }

  @media (max-width: 768px) {
    .Article__details {
      flex-direction: column;

      &Left {
        margin-bottom: 15px;
      }

      &Name {
        font-size: 15px;
      }

      &Btn {
          position: relative;
      }
    }
  }
}
</style>
