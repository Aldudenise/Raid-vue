Vue.component('personajes', {
    props: {
        personajes: {
            type: Array,
            required: true
        }
    },
    methods: {
        borradoSeleccionado: function(index){
            this.$emit('on-delete', index);
        },
        edicionSeleccionada: function(personaje, index){
            // Creo un objeto para emitirlo
            const personajeSeleccionado = {
                index: index, // esto se puede resolver también con un ID dentro del object usuario
                data: personaje
            }
            this.$emit('on-edit', personajeSeleccionado);
        }
    },
    data: function(){
        return {
            encabezados: ['#', 'Nombre', 'Descripcion', 'Genero', 'Clase', 'Imagen', 'Acciones']
        }
    },
    template: /* html */ `
        <tabla :encabezados="encabezados">
            <tr v-for="(personaje, index) in personajes">
                <th scope="row">{{index}}</th>
                <td>{{personaje.nombre}}</td>
                <td>{{personaje.descripcion}}</td>
                <td>{{personaje.genero}}</td>
                <td>{{personaje.clase}}</td>
                <td><img :src="'img/' + personaje.clase + '-' + personaje.genero + '.png'" alt=""></td>
                <td>
                    <button class="btn btn-small btn-primary" @click="edicionSeleccionada(personaje, index)">Editar</button>
                    <button class="btn btn-small btn-danger" @click="borradoSeleccionado(index)">Borrar</button>
                </td>
            </tr>
        </tabla>
    `
})