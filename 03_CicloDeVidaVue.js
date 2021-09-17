const app = new Vue({
    el: '#app', //detecto el id = app
    data:{//en data abro un objeto, para trabajar con datos
       saludo: 'Soy el ciclo de vida Vue',
    },
    beforeCreate(){
        console.log('Se ejecutó beforeCreate');
    },
    created(){
        //Se ejecuta cuando se crean los métodos, observadores y eventos pero aún no accede al DOM.
        //Aún no ha accedido al "el" que está en el New Vue({...
        //NOTA (a confirmar): DOM es el atributo (clave o variable), en este caso "saludo"
        console.log('Se ejecutó created');
    },
    beforeMount(){
        // Se ejecuta antes de insertar el DOM
        console.log('Se ejecutó beforeMount');
    },
    mounted(){
        // Se ejecuta al de insertar el DOM
        console.log('Se ejecutó mounted');
    },    
    beforeUpdate(){
        // Se ejecuta al detectar un cambio
        console.log('Se ejecutó beforeUpdate');
    },
    updated(){
        // Se ejecuta al realizar los cambios
        console.log('Se ejecutó updated');
    },    
    beforeDestroy(){
        // Se ejecuta antes de destruir la instancia
        console.log('Se ejecutó beforeDestroy');
    },
    destroyed(){
        // Se ejecuta al destruir la instancia
        console.log('Se ejecutó destroyed');
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    }

})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html