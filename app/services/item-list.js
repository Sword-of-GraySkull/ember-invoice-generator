import Service from '@ember/service';
import { A } from '@ember/array';
import { computed } from '@ember/object';

export default Service.extend({
  items: null,
  object: null,

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
    console.log(this.items);

  },

  updateItem(index, prop, value) {
    let newArr = this.get('items');
    newArr.forEach((_item, i) => {
      console.log('blas', _item, i, index)
      if(i === Number(index)) {
        _item.set(prop, prop !== 'itemName' ? Number(value):value);
        newArr[index] = _item;
      }
    })

    this.set('items', newArr);
    console.log(this.get('items'));
    // console.log(this.items);
  }

  // removeItem(item) {
  //   this.items.removeObject(item);
  // }
});
