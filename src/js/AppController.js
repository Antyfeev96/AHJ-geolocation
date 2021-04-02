export default class AppController {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    this.layout.init();
    this.body = document.body;
    this.addListeners();
  }

  addListeners() {
    this.body.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.text !== '') {
        this.text = this.body.querySelector('textarea').value;
        this.layout.renderMessage(this.text, this.createDate(), this.getCoords());
        this.body.querySelector('textarea').value = '';
      }
    });
  }

  createDate() {
    this.date = new Date();
    this.formatter = new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    return this.formatter.format(this.date);
  }

  getCoords() {
    if (navigator.geolocation) {
      this.position = navigator
        .geolocation.getCurrentPosition(this.positionDetected, this.positionError);
      const { latitude, longitude, accuracy } = this.position.coords;
      this.coords = `${latitude}, ${longitude}, ${accuracy}`;
      return this.coords;
    }
    return 'Ошибка!';
  }

  positionDetected(position) {
    this.position = position;
    const { timestamp, coords } = this.position;
    const { latitude, longitude, accuracy } = coords;
    console.log(timestamp, latitude, longitude, accuracy);
  }

  positionError(error) {
    this.error = error;
    console.log(`
      Определить геопозицию не удалось.
      Ошибка: ${this.error.message}
      Код ошибки^ ${this.error.code}
    `);
  }
}
