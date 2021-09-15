const app = new Vue({
    el: '#app', //detecto el id = app
    data:{//en data abro un objeto, para trabajar con datos
       titulo: 'Hola mundo con Vue',
       frutas: [
           {nombre:'Manzana', cantidad:10},
           {nombre:'Pera', cantidad:15},
           {nombre:'Banana', cantidad:0}
        ]
    }
})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html