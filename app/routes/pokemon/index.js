import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service';

export default Route.extend({
  async model() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')

    // console.log(await response.json())'
    // null.name;


    const jsonData = await response.json();
    // return jsonData.results;
    let data = jsonData.results;
    data.forEach((item,i) => {
      item.id = i;
      data[i] = item;
    });

    return data;
  },


  setupController(controller, model) {
    this._super(controller, model);
    controller.set('pokeData', model);
    controller.search();

    // throw Error("mesaaaaaaaaaage");
  },

  // actions: {
  //   loading(controller, transition, originRoute) {
  //     controller.set('isLoading', true)

  //     // return true;
  //   }
  // },

  // resetController(controller, isExiting, model) {
  //   if(isExiting) {
  //     console.log("fail")
  //     controller.set('pokemonName', '');
  //   }
  // }


  // .then(res => {
  //   let data = res.json();
  //   return data;
  // })
  // .then(data => {
  //   let urlList = [];
  //   data.results.forEach((result, i) => {
  //     urlList[i] = result.url;
  //   })
  //   console.log(urlList)
  //   return data;
  // });
});
