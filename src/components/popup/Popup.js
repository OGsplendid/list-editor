import Widget from '../widget/Widget';

export default class Popup {
  constructor(element) {
    this.element = element;
    this.widget = new Widget(document.querySelector('.widget'));

    this.cancelButton = this.element.querySelector('.cancel-button');

    this.createDataRow = this.createDataRow.bind(this);
    this.element.addEventListener('submit', this.createDataRow);

    this.cancelAdding = this.cancelAdding.bind(this);
    this.cancelButton.addEventListener('click', this.cancelAdding);
  }

  createDataRow(e) {
    e.preventDefault();

    const id = performance.now();
    const name = this.element.querySelector('.input-name').value;
    const price = this.element.querySelector('.input-price').value;

    const clearedName = name.trim();
    const clearedPrice = parseInt(price.trim(), 10);

    if (!Popup.dataIsValid(clearedName, clearedPrice)) {
      return;
    }
    this.element.reset();
    this.element.classList.add('hidden');
    this.widget.addProduct({
      id,
      name: clearedName,
      price: clearedPrice,
    });
    this.widget.clearDOM();
    this.widget.renderTable();
  }

  static dataIsValid(name, price) {
    if (name.length === 0 || Number.isNaN(price)) {
      return false;
    }
    return true;
  }

  cancelAdding(e) {
    e.preventDefault();
    this.element.reset();
    this.element.classList.add('hidden');
  }
}
