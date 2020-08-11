/*
* La modal se oculta/muestra directamente con un v-if sobre el index.html
* Emite un evento 'cerrar', podrá mejorarse detectando teclas o el click afuera de la modal
*/
Vue.component('modal', {
    props: {
        title: {
            type: String,
            default: 'Editar personaje'
        }
    },
    template: /* html */`
        <div class="contenedor-modal">
            <div class="modal d-block">
                <div class="modal-dialog framed" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <p class="modal-title" style="font-size: 180%; color: #FFFF00">{{title}}</p>
                                <button 
                                    type="button" 
                                    class="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close"
                                    @click="$emit('cerrar')"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <!-- 
                                    Con el slot "copio y pego" todo HTMl que escriban dentro de la etiqueta
                                    Ejemplo:
                                    <modal>
                                        <p> Contenido de la modal </p>
                                    </modal>
                                -->
                                <slot></slot>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    `
})