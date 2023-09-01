import dataIsInvalid from '../handlers/dataIsInvalid';
import Memory from '../memory/Memory';
import Tooltip from '../tooltip/Tooltip';

export default class App {
  constructor(element) {
    this.element = element;
    this.memory = new Memory();
    this.showBtn = this.element.querySelector('.create');
    this.popup = this.element.querySelector('.popup');

    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.element.addEventListener('click', this.onClick);
    this.popup.addEventListener('submit', this.onSubmit);
  }

  onClick(e) {
    if (e.target.classList.contains('cancel-button') || e.target.classList.contains('create')) {
      this.popup.classList.remove('being-edited');
      this.togglePopup();
      this.popup.reset();
      return;
    }

    const product = e.target.closest('.product');
    if (!product) {
      return;
    }

    const productId = product.getAttribute('data-id');
    const updated = this.memory.findProduct(productId);
    const { id, name, price } = updated;

    if (e.target.classList.contains('delete')) {
      this.memory.remove(id);
    } else if (e.target.classList.contains('update')) {
      this.popup.classList.add('being-edited');
      this.togglePopup();
      this.popup.name.value = name;
      this.popup.price.value = price;
      this.popup.setAttribute('id', id);
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const id = performance.now();
    const name = this.popup.name.value;
    const price = this.popup.price.value;

    const data = { id, name, price };

    if (dataIsInvalid(data)) {
      const { text, place } = dataIsInvalid(data);
      this.showTooltip(text, this.popup[place]);
      return;
    }

    if (this.popup.classList.contains('being-edited')) {
      data.id = Number(this.popup.getAttribute('id'));
      this.memory.replace(data);
      this.popup.reset();
      this.popup.classList.remove('being-edited');
    } else {
      this.memory.add(data);
    }
    this.popup.reset();
    this.togglePopup();
  }

  showTooltip(text, element) {
    this.tooltipFactory = new Tooltip();
    this.tooltipFactory.showTooltip(text, element);
  }

  togglePopup() {
    this.popup.classList.toggle('hidden');
  }
}
