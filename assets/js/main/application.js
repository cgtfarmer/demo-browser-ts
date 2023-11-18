import Thingy from './thing/thingy.js';
import Dealio from '/demo-browser-ts/assets/js/main/blah/dealio.js';
export default class Application {
    static getInstance() {
        if (this.singleton == null) {
            this.singleton = new Application();
        }
        return this.singleton;
    }
    constructor() {
    }
    start() {
        console.log('meow1');
        Thingy.doTheThing(5);
        Dealio.doTheThing();
    }
}
Application.getInstance().start();
