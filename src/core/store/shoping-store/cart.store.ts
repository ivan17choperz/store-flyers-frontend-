import { defineStore } from "pinia";
import { IProduct } from "../../Interfaces/Product.interface";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [] as IProduct[],
    total: 0,
  }),
  actions: {
    addProductToCart(product: IProduct) {
      const exitingProduct = this.products.find(
        (pro: IProduct) => pro.id_product === product.id_product
      );
      if (exitingProduct) return;

      this.products.push(product);
    },
    removeProductFromCart(product: IProduct) {
      const index = this.products.indexOf(product);
      if (index > -1) {
        this.products.splice(index, 1);
      }
    },
    updateQuantityProduct(product: IProduct) {
      const productInCart = this.products.find(
        (p) => p.id_product === product.id_product
      );
      console.log(productInCart);
    },
    clearCart() {
      this.products = [];
    },
  },
  getters: {
    cartTotal: (state) => state.products.length,
    cartProducts: (state) => state.products,
    cartTotalPrice: (state) => {
      let total = 0;
      state.products.forEach((product: IProduct) => {
        total += parseFloat(product.price) * (product.quantity ?? 1);
      });
      return total;
    },
  },
});
