import Thingy from '@/main/thing/thingy.js';
import Dealio from '@/main/blah/dealio.js';

export default class Application {

  private static singleton: Application;

  public static getInstance(): Application {
    if (this.singleton == null) {

      this.singleton = new Application();
    }

    return this.singleton;
  }

  public constructor() {
  }

  public start(): void {
    console.log('meow1');

    Thingy.doTheThing(5);

    Dealio.doTheThing();
  }
}

Application.getInstance().start();