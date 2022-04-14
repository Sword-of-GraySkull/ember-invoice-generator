import Service from '@ember/service';
import { A } from '@ember/array';

export default Service.extend({
  items: null,
  object: null,
  total: 0,

  init() {
    this._super(...arguments);
    this.set('items', A([]));

  },

  // items: [
  //   {qu: 1,
  //   ra: 1,
  // am: 10},
  // {qu: 1,
  //   ra: 1,
  // am: 10},
  // ]

  addItem(item) {
    this.items.pushObject(item);
    // console.log(this.items);
    this.set('total', this.get('total')+Number(item.amount));
  },

  updateItem(index, prop, value) {
    let newArr = this.get('items');
    let total = 0;
    newArr.forEach((_item, i) => {
      // console.log('blas', _item, i, index)
      if(i === Number(index)) {
        _item.set(prop, prop !== 'itemName' ? Number(value):value);
        newArr[index] = _item;
      }
      total += Number(_item.amount);
    })

    this.set('items', newArr);
    this.set('total', total);
    // console.log(this.get('items'));
    // console.log(this.items);
  }

  // removeItem(item) {
  //   this.items.removeObject(item);
  // }
});
