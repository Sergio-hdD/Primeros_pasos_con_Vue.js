const app = new Vue({//esta llave denota que es un array
    el: '#app', //detecto el id = app
    data:{//en data abro un objeto, para trabajar con datos
       titulo: 'Hola mundo con Vue',
       frutas: [
           {nombre:'Manzana', cantidad:10},
           {nombre:'Pera', cantidad:15},
           {nombre:'Banana', cantidad:0}
        ],
        nuevaFruta: '', //si al inspeccionar en console pongo "app.nuevaFruta" se muestra lo que ingresa por el input
        total: 0 //inicializo total en 0
    },
    methods: {
       agregarFruta(){
           this.frutas.push({
               nombre: this.nuevaFruta, cantidad: 20
           });
           this.nuevaFruta = '' //limpio el input
       }   
    },
    computed:{//Cada vez que haya una modificación
        sumarCantidades(){//Se ejecuta sin necesidad de llamarlo en cada lugar, solo lo llamo donde quiero que retorne
            this.total = 0 ; //Arranca en 0
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html