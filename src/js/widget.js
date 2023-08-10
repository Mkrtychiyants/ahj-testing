import { isValidInn, typeCheck } from './validators';

export default class InnOgrnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <form data-widget="innogrn-form-widget">
    <div class="icon_container">
    <img class="icon visa">
    <img class="icon mc">
    <img class="icon ae">
    <img class="icon discover">
    <img class="icon jcb">
    <img class="icon dinner">
    <img class="icon mir">
    </div>
      <div class="form-control">
          <input id="innorgn-input" data-id="innogrn-input" type="text" placeholder="411111111">
          <button data-id="innogrn-submit">Click to Validate</button>
      </div>
     
    </form>
    `;
  }

  static get inputSelector() {
    return '[data-id=innogrn-input]';
  }

  static get submitSelector() {
    return '[data-id=innogrn-submit]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));
  }

  onSubmit(evt) {
    // add event listeners here
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (isValidInn(String(inputEl.value))) {
      inputEl.classList.add('valid');
    } else {
      inputEl.classList.add('invalid');
    }
    document.querySelector(`img.${typeCheck(String(inputEl.value))}`).classList.toggle('active');
  }
}
