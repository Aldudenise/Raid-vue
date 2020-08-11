Vue.component('tabla', {
    props: {
        encabezados: {
            type: Array,
            required: true
        }
    },
    template: /* html */ `
        <table class="table mt-5">
            <thead>
                <th scope="col" v-for="titulo in encabezados">{{titulo}}</th>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    `
})