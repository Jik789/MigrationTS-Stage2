import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { ISourceFull, IData } from '../../types/interfaces';

class App {
    view: AppView;
    controller: AppController;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
        ?.querySelector('.sources')
        ?.addEventListener('click', (e) => this.controller.getNews(e, (data?: IData) => this.view.drawNews(data)));
        this.controller.getSources((data?: ISourceFull) => this.view.drawSources(data));
    }
}

export default App;
