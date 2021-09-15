const app = new Vue({
    el: '#app', //detecto el id = app
    data:{//en data abro un objeto, para trabajar con datos
       titulo: 'Hola mundo con Vue',
       frutas: [
           {nombre:'Manzana', cantidad:10},
           {nombre:'Pera', cantidad:15},
           {nombre:'Banana', cantidad:0}
        ],
        nuevaFruta: '' //si al inspeccionar en console pongo "app.nuevaFruta" se muestra lo que ingresa por el input
    },
    methods: {
       agregarFruta(){
           this.frutas.push({
               nombre: this.nuevaFruta, cantidad: 20
           })
       }   
    }
})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html