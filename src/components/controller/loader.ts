type OptionIntterface = Record<string, string>;

enum notLoad {
  clientErrorUnauthorized = 401,
  clientErrorNotFound,
}

class Loader {
    public baseLink: string;
    public options: OptionIntterface;

    constructor(baseLink: string, options: OptionIntterface) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: {endpoint: string, options?: OptionIntterface},
        callback:<T>(data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === notLoad.clientErrorUnauthorized || res.status === notLoad.clientErrorNotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: OptionIntterface, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: <T>(data: T) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then((e) => this.errorHandler(e))
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
