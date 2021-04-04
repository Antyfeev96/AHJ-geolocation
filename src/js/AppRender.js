/* eslint-disable max-len */
export default class AppRender {
  constructor() {
    this.body = document.body;
  }

  init() {
    this.messagesEl = document.createElement('div');
    this.messagesEl.className = 'messages';
    this.textareaEl = document.createElement('textarea');
    this.textareaEl.className = 'textarea';
    this.body.append(this.messagesEl);
    this.body.append(this.textareaEl);
  }

  renderMessage(text, date, coords) {
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.textEl = document.createElement('div');
    this.textEl.className = 'message__text';
    this.textEl.textContent = text;
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'message__timestamp';
    this.timestampEl.textContent = date;
    this.coordsEl = document.createElement('div');
    this.coordsEl.className = 'message__coords';
    this.coordsEl.textContent = coords;
    this.messageEl.append(this.textEl, this.timestampEl, this.coordsEl);
    this.messagesEl.append(this.messageEl);
  }

  renderError() {
    this.errorEl = document.createElement('div');
    this.errorEl.className = 'error';
    this.errorTitleEl = document.createElement('div');
    this.errorTitleEl.className = 'error__title';
    this.errorTitleEl.textContent = 'Что-то пошло не так';
    this.errorTextEl = document.createElement('div');
    this.errorTextEl.className = 'error__text';
    this.errorTextEl.textContent = `
      К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо
      введите данные вручную.
    `;
    this.pEl = document.createElement('p');
    this.pEl.textContent = 'Широта и долгота через запятую';
    this.errorTextareaEl = document.createElement('textarea');
    this.errorTextareaEl.className = 'error__textarea';
    this.buttonsEl = document.createElement('div');
    this.buttonsEl.className = 'buttons';
    this.cancelButtonEl = document.createElement('button');
    this.cancelButtonEl.className = 'buttons__button';
    this.cancelButtonEl.id = 'cancel';
    this.cancelButtonEl.textContent = 'Отмена';
    this.okButtonEl = document.createElement('button');
    this.okButtonEl.className = 'buttons__button';
    this.okButtonEl.id = 'ok';
    this.okButtonEl.textContent = 'ОК';
    this.buttonsEl.append(this.cancelButtonEl, this.okButtonEl);
    this.errorEl.append(this.errorTitleEl, this.errorTextEl, this.pEl, this.errorTextareaEl, this.buttonsEl);
    this.body.append(this.errorEl);
  }
}
