const app = new Vue({
    el: "#app",
    data:{
        titulo : 'GYM de Vue.js',
        tareas: [],
        nuevaTarea: '',
    },
    methods:{
        agregarNuevaTarea(){
            if(this.nuevaTarea){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado:false
            });
            this.nuevaTarea='';
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
            }

        },
        cambiarEstado(index){
            this.tareas[index].estado = true;
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        },
        eliminar(index){
            this.tareas.splice(index,1);
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosDB = JSON.parse( localStorage.getItem('gym-vue'));
        if(datosDB === null)
        {
            this.tareas = [];

        }else{
            this.tareas = datosDB;
        }
    }
})