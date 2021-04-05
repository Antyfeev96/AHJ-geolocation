/* eslint-disable no-useless-escape */
export default class CoordsHandler {
  split(data) {
    this.data = data;
    this.data = data.replace(/\s+/g, '');
    let arr = this.data.split(',');
    arr = arr.map((string) => string.replace(/[\[\]']+/g, ''));
    return arr;
  }
}
