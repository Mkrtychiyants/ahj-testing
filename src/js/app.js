import InnOrgnFormWidget from './widget';

document.addEventListener('DOMContentLoaded', () => {
  const widget = new InnOrgnFormWidget(document.querySelector('#widget-container'));
  widget.bindToDOM();
});
