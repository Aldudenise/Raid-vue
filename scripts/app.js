const app = new Vue({
    el: '#app',
    data: {
        personajeSeleccionado: null,
        listadoPersonajes: []
    },
    methods: {
        crearPersonaje: function(personaje){
            this.listadoPersonajes.push(personaje);
        },
        editarPersonaje: function(personajeEditado){
            this.listadoPersonajes.splice(this.personajeSeleccionado.index, 1, personajeEditado);
            this.personajeSeleccionado = null;
        },
        borrarPersonaje: function(index){
            this.listadoPersonajes.splice(index, 1);
        },
        habilitarEdicion: function(personaje){
            this.personajeSeleccionado = personaje;
        },
        inHabilitarEdicion: function(){
            this.personajeSeleccionado = null;
        }
    },
    beforeMount(){
        this.listadoPersonajes = [
        {
            nombre: 'Noto',
            descripcion: 'Te desaprueba 5 veces antes de que toques la mesa de examen',
            genero: 'Masculino',
            clase: 'Asesino'
        },
        {
            nombre: 'Fran',
            descripcion: 'No le gusta que le digan 🌭',
            genero: 'Masculino',
            clase: 'Barbaro'
        }];
    }
})