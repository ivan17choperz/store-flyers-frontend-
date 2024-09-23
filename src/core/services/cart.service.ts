import { IProduct } from "../Interfaces/Product.interface";

export class CartService {
  private _products: IProduct[] = [];

  public addProductToCart(product: IProduct) {
    this._products.push(product);
    console.log(this._products);
  }

  public removeProductFromCart(product: any) {
    const index = this._products.indexOf(product);
    if (index > -1) {
      this._products.splice(index, 1);
    }
  }
  public updateQuantityProduct(product: any) {
    this._products.push(product);
  }

  public clearCart() {
    this._products = [];
  }

  public getProducts() {
    return this._products;
  }
}
