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

  renderMessage(text) {
    this.messageEl = document.createElement('div');
    this.messageEl.className = 'message';
    this.textEl = document.createElement('div');
    this.textEl.className = 'message__text';
    this.textEl.textContent = text;
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'message__timestamp';
  }

  createDate() {
    this.date = new Date();
  }
}
