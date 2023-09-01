import Renderer from '../renderer/Renderer';

export default class Memory {
  constructor() {
    this.memory = [];
    this.renderer = new Renderer();
  }

  findProduct(id) {
    return this.memory.find((el) => el.id === Number(id));
  }

  add(data) {
    this.memory.push(data);
    this.render();
  }

  remove(id) {
    const index = this.memory.findIndex((el) => el.id === id);
    this.memory.splice(index, 1);
    this.render();
  }

  replace(data) {
    const index = this.memory.findIndex((el) => el.id === data.id);
    this.memory.splice(index, 1, data);
    this.render();
  }

  render() {
    Renderer.clearDOM();
    this.memory.forEach((el) => this.renderer.addToDOM(el));
  }
}
