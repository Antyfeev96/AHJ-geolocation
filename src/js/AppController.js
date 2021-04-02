export default class AppController {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    this.layout.init();
    this.body = document.body;
  }

  addListeners() {
    this.body.addEventListener('keypress', (e) => {
      if (e.key !== 'Enter') return;
      
    });
  }
}
