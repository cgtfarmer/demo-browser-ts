import Thingy from '@/thing/thingy.js';
import Dealio from '@/blah/dealio.js';

export default class Application {

  private static readonly CONTAINER_ID: string = 'main';
  private static readonly CANVAS_ID: string = 'canvas';

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

    Thingy.doTheThing();

    Dealio.doTheThing();
  }
}

Application.getInstance().start();
