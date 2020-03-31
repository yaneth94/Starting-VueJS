<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items" :key="item.id">
                {{ item.titulo }} - ${{ item.precio }} 
                <button class="btn badge badge-danger float-right" @click="removerItem(item)">
                       Eliminar
                </button>
            </li>
        </ul>
        <div class="card p-3 my-5">
            <h4 class="text-center">Total : ${{ total }}</h4>
        </div>
        <button :disabled="items.length === 0" @click="$emit('pagar')" class="btn btn-info form-control">
            Pagar Ahora
        </button>
    </div>
</template>
<script>
export default {
    name: 'Carrito',
    props: ['items'],
    computed:{
        total(){
            return this.items.reduce((acumulador,item) => acumulador + Number(item.precio),0);
        }
    },
    methods :{
        removerItem(item){
            this.$emit('remover-item',item)
        },
        
    }
}
</script>
