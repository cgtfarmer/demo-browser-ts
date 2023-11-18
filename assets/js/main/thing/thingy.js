import Dealio from '../blah/dealio.js';
export default class Thingy {
    static doTheThing(value) {
        console.log('meow2');
        if (value < 0)
            throw new Error('Value must not be negative');
        return Dealio.doTheThing() + ' and things';
    }
}
