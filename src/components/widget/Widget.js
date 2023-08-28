export default class Widget {
  constructor(element) {
    this.element = element;
    this.productsArray = [];

    this.onItemClick = this.onItemClick.bind(this);
    this.element.addEventListener('click', this.onItemClick);
  }

  onItemClick(e) {
    e.preventDefault();

    const deletableItem = e.target.closest('.product');

    if (e.target.classList.contains('create')) {
      Widget.showPopup();
    } else if (e.target.classList.contains('update')) {
      this.updateItem(deletableItem);
    } else if (e.target.classList.contains('delete')) {
      this.deleteItem(deletableItem);
    }
  }

  deleteItem(item) {
    const id = +item.dataset.id;
    const index = this.productsArray.findIndex((el) => el.id === id);
    this.productsArray.splice(index, 1);
    this.renderTable();
  }

  updateItem(item) {
    const id = +item.dataset.id;
    const index = this.productsArray.findIndex((el) => el.id === id);
    const itemFromArray = this.productsArray[index];
    Widget.showPopup();
  }

  static showPopup() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('hidden');
  }

  static createHTML(id, name, price) {
    return `
      <li class="product" data-id=${id}>
        <div class="name">${name}</div>
        <div class="price">${price}</div>
        <div class="tools">
          <div class="update">\\</div>
          <div class="delete">x</div>
        </div>
      </li>
    `;
  }

  static addToTable(html) {
    const list = document.querySelector('.products');
    list.insertAdjacentHTML('beforeend', html);
  }

  addProduct(product) {
    const { id } = product;
    const index = this.productsArray.findIndex((el) => el.id === id);
    const itemFromArray = this.productsArray[index];
    if (itemFromArray) {
      this.productsArray[index] = itemFromArray;
      return;
    }
    this.productsArray.push(product);
    this.renderTable();
  }

  clearDOM() {
    const list = this.element.querySelectorAll('.product');
    list.forEach((el) => el.remove());
  }

  renderTable() {
    this.clearDOM();
    for (const item of this.productsArray) {
      const html = Widget.createHTML(item.id, item.name, item.price);
      Widget.addToTable(html);
    }
  }
}
