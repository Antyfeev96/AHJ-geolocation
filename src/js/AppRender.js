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
}
