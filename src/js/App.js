import AppController from './AppController';
import AppRender from './AppRender';
import CoordsHandler from './CoordsHandler';

const app = new AppController(new AppRender(), new CoordsHandler());
app.init();
