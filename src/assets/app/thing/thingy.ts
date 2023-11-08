import Dealio from '@/blah/dealio.js';

export default class Thingy {

  private static readonly CONTAINER_ID: string = 'main';
  private static readonly CANVAS_ID: string = 'canvas';

  public static doTheThing(): void {
    console.log('meow2');
    Dealio.doTheThing();
  }
}
