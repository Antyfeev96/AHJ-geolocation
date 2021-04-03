/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
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
        this.getCoords();
        this.body.querySelector('textarea').value = '';
      }
    });
  }

  createDate() {
    this.date = new Date();
    this.dailyFormatter = new Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
    });
    this.yearFormatter = new Intl.DateTimeFormat('ru', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    return `${this.yearFormatter.format(this.date)} ${this.dailyFormatter.format(this.date)}`;
  }

  getCoords() {
    if (navigator.geolocation) {
      return navigator
        .geolocation
        .getCurrentPosition((pos) => this.positionDetected(pos), (err) => this.positionError(err));
    }
  }

  positionDetected(position) {
    const { timestamp, coords } = position;
    const { latitude, longitude, accuracy } = coords;
    console.log(`
    Координаты успешно получены
    Время: ${timestamp}
    Ширина: ${latitude}
    Долгота: ${longitude}
    Точность позиции +- ${accuracy} метров
    `);
    this.coords = `[${latitude.toFixed(5)}, ${longitude.toFixed(5)}]`;
    this.layout.renderMessage(this.text, this.createDate(), this.coords);
  }

  positionError(error) {
    console.log(`
      Определить геопозицию не удалось.
      Ошибка: ${error.message}
      Код ошибки: ${error.code}
    `);
  }
}
