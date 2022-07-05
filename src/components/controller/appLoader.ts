import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'c36a6417dad5462e86a9db72d00bf315', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
