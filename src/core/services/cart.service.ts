export class CartService {
  private _products: any[] = [];

  public addProductToCart(product: any) {
    this._products.push(product);
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
