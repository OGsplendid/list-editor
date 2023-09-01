export default class Tooltip {
  constructor() {
    this.tooltips = [];
  }

  showTooltip(message, element) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = message;

    const id = performance.now();

    this.tooltips.push({
      id,
      element: tooltip,
    });

    const { bottom, left } = element.getBoundingClientRect();
    tooltip.top = `${bottom + 10}px`;

    document.querySelector('.popup').appendChild(tooltip);
  }
}
