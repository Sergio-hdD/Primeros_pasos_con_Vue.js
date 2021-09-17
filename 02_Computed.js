const app = new Vue({//esta llave denota que es un array
    el: '#app', //detecto el id = app
    data:{//en data abro un objeto, para trabajar con datos
       mensaje: 'Hola, soy Sergio',
       contador: 0
    },
    computed:{//Se ejecuta cada vez que haya una modificación, permite hacer como el data, peron lógica
        traerInvertido(){//Se ejecuta sin necesidad de llamarlo en cada lugar, solo lo llamo donde quiero que retorne
            return this.mensaje.split('').reverse().join('');
            //el ".split('')" convierte la frase en un array de caracteres
            //el ".reverse()" invierte el array
            //por último con ".join('')" lo vuelvo a juntar una vez que está invertido
            //en el split y en el join le estoy pasando un string vacio (sin espacio), por ende separa y junta sin ningún criterio (de a un caracter)
        }
    }
})//instancio vue, es decir llamo a la librería que copie en el scrip "<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>" en el html