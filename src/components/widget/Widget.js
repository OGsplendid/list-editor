export default class Widget {
  constructor(element) {
    this.element = element;
    this.addButton = this.element.querySelector('.create');

    this.showPopup = this.showPopup.bind(this);
    this.addButton.addEventListener('click', this.showPopup);
  }

  static createHTML(name, price) {
    return `
      <li class="product">
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

  showPopup() {
    this.element.closest('.application').querySelector('.popup').classList.remove('hidden');
  }
}
