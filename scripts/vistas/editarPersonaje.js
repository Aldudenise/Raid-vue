/*
* En index.html:
    <editar-usuario 
        :usuario="usuarioSeleccionado.data" --> le paso el data porque no necesito el indice, solo {nombre: '', apellido: ''}
        @on-edit="editarUsuario"
    ></editar-usuario>

* En app.js
    "editarUsuario()" --> usa el indice y los datos nuevos para guardar la edición
*/ 
Vue.component('editarPersonaje', {
    props: {
        personaje: {
            type: Object,
            required: true
        }
    },
    data: function(){
        return {
            personajeEditar: {}
        }
    },
    methods: {
        onEdit: function(){
            this.$emit('on-edit', this.personajeEditar);
        }
    },
    beforeMount(){
        // Antes del mount tomo lo que recibo de props
        // Lo duplico dentro del data así lo puedo editar sin modificar el array original
        // En este caso utilizo el operador "spread" 
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Sintaxis_Spread
        this.personajeEditar = {...this.personaje};
        // Se puede hacer también:
        // this.usuarioEditar = Object.assign({}, this.usuario)
        // this.usuarioEditar = JSON.parse(JSON.stringify(this.usuario))

        // Si simplemente asignamos con el "=" los cambios se van a ver reflejados directamente
    },
    template: /* html */ `
        <div class="edit inner rpgui-container">
            <form @submit.prevent="onCreate">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input 
                        id="nombre" 
                        type="text" 
                        class="form-control" 
                        placeholder="Nombre" 
                        v-model="personajeEditar.nombre"
                    >
                </div>
                <div class="form-group">
                    <label for="descripcion">Descripcion</label>
                    <input 
                        id="descripcion" 
                        type="text" 
                        class="form-control" 
                        placeholder="Descripcion" 
                        v-model="personajeEditar.descripcion"
                    >
                </div>
                <div class="form-group">
                    <input name="clase" class="form-check-input rpgui-radio" type="radio" id="monje" value="Monje" v-model="personajeEditar.clase">
                    <label for="monje">Monje</label><br/>
                    <input name="clase" class="form-check-input rpgui-radio" type="radio" id="barbaro" value="Barbaro" v-model="personajeEditar.clase">
                    <label for="barbaro">Barbaro</label><br/>
                    <input name="clase" class="form-check-input rpgui-radio" type="radio" id="druida" value="Druida" v-model="personajeEditar.clase">
                    <label for="druida">Druida</label><br/>
                    <input name="clase" class="form-check-input rpgui-radio" type="radio" id="asesino" value="Asesino" v-model="personajeEditar.clase">
                    <label for="asesino">Asesino</label><br/>
                    <input name="clase" class="form-check-input rpgui-radio" type="radio" id="hechicero" value="Hechicero" v-model="personajeEditar.clase">
                    <label for="hechicero">Hechicero</label><br/>
                </div>
                <div class="form-group">
                    <input name="genero" class="form-check-input rpgui-radio" type="radio" id="masculino" value="Masculino" v-model="personajeEditar.genero">
                    <label for="masculino">Masculino</label><br/>
                    <input name="genero" class="form-check-input rpgui-radio" type="radio" id="femenino" value="Femenino" v-model="personajeEditar.genero">
                    <label for="femenino">Femenino</label>
                </div>
            </form>
            <div class="modal-footer">
                <button class="btn btn-primary mr-0" @click="onEdit">Editar personaje</button>
            </div>
        </div>
    `
})