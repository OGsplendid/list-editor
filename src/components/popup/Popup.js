export default class Popup {
  constructor(element) {
    this.element = element;
    this.data = null;

    this.cancelButton = this.element.querySelector('.cancel-button');

    this.createDataRow = this.createDataRow.bind(this);
    this.cancelAdding = this.cancelAdding.bind(this);

    this.element.addEventListener('submit', this.createDataRow);
    this.cancelButton.addEventListener('click', this.cancelAdding);
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  createDataRow(e) {
    e.preventDefault();

    const name = this.element.querySelector('.input-name').value;
    const price = this.element.querySelector('.input-price').value;

    const clearedName = name.trim();
    const clearedPrice = parseInt(price.trim(), 10);

    if (!Popup.dataIsValid(clearedName, clearedPrice)) {
      return;
    }
    this.element.reset();
    this.element.classList.add('hidden');
    this.data = {
      name: clearedName,
      price: clearedPrice,
    };
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
