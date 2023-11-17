import Dealio from '@/main/blah/dealio';

export default class Thingy {

  public static doTheThing(value: number): string {
    console.log('meow2');

    if (value < 0) throw new Error('Value must not be negative');

    return Dealio.doTheThing() + ' and things';
  }
}
