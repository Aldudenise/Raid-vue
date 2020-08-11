Vue.component('crearPersonaje', {
    data: function(){
        return {
            nuevoPersonaje: {
                nombre: '',
                descripcion: '',
                genero: '',
                clase: ''
            }
        }
    },
    methods: {
        onCreate: function(){
            this.$emit('on-create', this.nuevoPersonaje);
            this.nuevoPersonaje = {
                nombre: '',
                descripcion: '',
                genero: '',
                clase: ''
            }
        }
    },
    template: /* html */`
        <form @submit.prevent="onCreate">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nombre" v-model="nuevoPersonaje.nombre">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Descripcion" v-model="nuevoPersonaje.descripcion">
            </div>
            <div class="form-group">
                <input name="genero" class="form-check-input rpgui-radio" id="hombre" type="radio" value="Masculino" v-model="nuevoPersonaje.genero">
                <label for="hombre">Masculino</label><br/>
                <input name="genero" class="form-check-input rpgui-radio" id="mujer" type="radio" value="Femenino" v-model="nuevoPersonaje.genero">
                <label for="mujer">Femenino</label>
            </div>
            <div class="form-group">
                <input name="clase" class="form-check-input rpgui-radio" id="clase1" type="radio" value="Monje" v-model="nuevoPersonaje.clase">
                <label for="clase1">Monje</label><br/>
                <input name="clase" class="form-check-input rpgui-radio" id="clase2" type="radio" value="Barbaro" v-model="nuevoPersonaje.clase">
                <label for="clase2">Barbaro</label><br/>
                <input name="clase" class="form-check-input rpgui-radio" id="clase3" type="radio" value="Druida" v-model="nuevoPersonaje.clase">
                <label for="clase3">Druida</label><br/>
                <input name="clase" class="form-check-input rpgui-radio" id="clase4" type="radio" value="Asesino" v-model="nuevoPersonaje.clase">
                <label for="clase4">Asesino</label><br/>
                <input name="clase" class="form-check-input rpgui-radio" id="clase5" type="radio" value="Hechicero" v-model="nuevoPersonaje.clase">
                <label for="clase5">Hechicero</label><br/>
            </div>
            <div class="form-group">
                <input type="submit" class="btn rpgui-button golden btn-primary mb-2" value="Guardar" />
            </div>                
        </form>
    `
})