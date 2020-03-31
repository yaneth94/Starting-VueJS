<template>
    <div class="container">
        <div class="cover">
            <div class="col-md-12">
                <h3>Productos</h3>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x100/000" />
                    </div>
                    <div class="col-md-12">
                        <h4>Titulo Producto 1</h4>
                        <p>Descipción del Producto</p>
                        <router-link :to="{name: 'producto', params:{id:1}}" class="btn btn-success btn-sm">Ver detalle</router-link>                                                
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x100/000" />
                    </div>
                    <div class="col-md-12">
                        <h4>Titulo Producto 2</h4>
                        <p>Descipción del Producto</p>
                        <router-link :to="{name: 'producto', params:{id:2}}" class="btn btn-success btn-sm">Ver detalle</router-link>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x100/000" />
                    </div>
                    <div class="col-md-12">
                        <h4>Titulo Producto 3</h4>
                        <p>Descipción del Producto</p>
                        <router-link :to="{name: 'producto', params:{id:3}}" class="btn btn-success btn-sm">Ver detalle</router-link>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <img src="http://placehold.it/200x100/000" />
                    </div>
                    <div class="col-md-12">
                        <h4>Titulo Producto 4</h4>
                        <p>Descipción del Producto</p>
                        <router-link :to="{name: 'producto', params:{id:4}}" class="btn btn-success btn-sm">Ver detalle</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<style>
    .cover{
        padding: 20px;
        margin: 40px 2px;
        border:1px solid #D2E0E6;
    }
</style>

