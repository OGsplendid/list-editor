export default class Renderer {
  constructor() {
    this.products = document.querySelector('.products');
  }

  static createHTML(obj) {
    return `
      <li class="product" data-id="${obj.id}">
        <div class="name">${obj.name}</div>
        <div class="price">${obj.price}</div>
        <div class="tools">
          <span class="update">✎</span>
          <span class="delete">✕</span>
        </div>
      </li>
    `;
  }

  static clearDOM() {
    const products = document.querySelectorAll('.product');
    products.forEach((el) => el.remove());
  }

  addToDOM(obj) {
    const html = Renderer.createHTML(obj);
    this.products.insertAdjacentHTML('beforeend', html);
  }
}
