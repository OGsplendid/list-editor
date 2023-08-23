import Widget from '../widget/Widget';
import Popup from '../popup/Popup';

export default class App {
  constructor(element) {
    this.element = element;
    this.productsArray = [];

    this.popup = new Popup(document.querySelector('.popup'));
    this.widget = new Widget(document.querySelector('.widget'));
  }

  addProduct(product) {
    this.productsArray.push(product);
  }

  renderTable() {
    if (this.popup.data) {
      this.productsArray.push(this.popup._data);
    }
    for (const item of this.productsArray) {
      for (const key in item) {
        const html = this.widget.createHTML(key, item[key]);
        this.widget.addToTable(html);
      }
    }
  }
}
