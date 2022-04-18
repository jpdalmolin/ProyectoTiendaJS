//FUNCION QUE SE EJECUTA CUANDO SE CARGA EL DOM
$(document).ready(function () {
    if("CARRITO" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("CARRITO"));
        for (const literal of arrayLiterales) {
            carrito.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
        }
        console.log(carrito);
        carritoUI(carrito);
    }
    $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
    //MOSTRAR ELEMENTO OCULTO INMEDIATAMENTE
    //$('#productosContenedor').show();
    //OCULTAR ELEMENTO VISIBLE INMEDIATAMENTE
    //$('#productosContenedor').hide();
});
//FUNCION QUE SE EJECUTA CUANDO SE CARGA TODA LAS IMAGENES DE LA APLICACION
window.addEventListener('load',()=>{
    //ELIMINAR ELEMENTO DEL DOM
    $('#indicadorCarga').remove();
    //MOSTRAR ELEMENTO CON UN FADE
    $('#productosContenedor').fadeIn("slow",()=>{ console.log('ANIMACION FINALIZADA')});
    //OCULTAR ELEMENTO CON UN FADE
    //$('#productosContenedor').fadeOut(600);
})
//INSTANCIAR OBJETOS Y ASOCIAR A ARRAY GLOBAL
productos.push(new Producto(1, "PANIFICADO1", 65, categorias[0], 1, "https://robohash.org/AB6.png?set=set3&size=150x150"));
productos.push(new Producto(2, "PANIFICADO2", 130, categorias[0], 1, "https://robohash.org/AB6.png?set=set3&size=150x150"));
productos.push(new Producto(3, "PANIFICADO3", 150, categorias[0], 1, "https://robohash.org/AB6.png?set=set3&size=150x150"));
productos.push(new Producto(4, "FIAMBRE1", 60, categorias[1], 1, "https://robohash.org/40A.png?set=set3&size=150x150"));
productos.push(new Producto(5, "FIAMBRE2", 60, categorias[1], 1, "https://robohash.org/40A.png?set=set3&size=150x150"));
productos.push(new Producto(6, "FIAMBRE3", 60, categorias[1], 1, "https://robohash.org/40A.png?set=set3&size=150x150"));
productos.push(new Producto(7, "LACTEO1", 75, categorias[2], 1, "https://robohash.org/0UA.png?set=set3&size=150x150"));
productos.push(new Producto(8, "LACTEO2", 75, categorias[2], 1, "https://robohash.org/0UA.png?set=set3&size=150x150"));
productos.push(new Producto(9, "LACTEO3", 75, categorias[2], 1, "https://robohash.org/0UA.png?set=set3&size=150x150"));
productos.push(new Producto(10, "CARNE1", 100, categorias[3], 1, "https://robohash.org/JYL.png?set=set3&size=150x150"));
productos.push(new Producto(11, "CARNE2", 100, categorias[3], 1, "https://robohash.org/JYL.png?set=set3&size=150x150"));
productos.push(new Producto(12, "CARNE3", 100, categorias[3], 1, "https://robohash.org/JYL.png?set=set3&size=150x150"));
//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
productosUI(productos, '#productosContenedor');
//DEFINIR EVENTOS SOBRE LA INTEFAZ GENERADA (LLEVAR A FUNCION productosUI SI QUEREMOS QUE FUNCIONE CON EL FILTRO)
//$('.btn-compra').on("click", comprarProducto);
//GENERAR OPCIONES PARA FILTRAR POR CATEGORIA
selectUI(categorias,"#filtroCategorias");
//DEFINIR EVENTOS SOBRE EL SELECT GENERADO
$('#filtroCategorias').change(function (e) { 
    //OBTENEMOS EL NUEVO VALOR DEL SELECT
    const value = this.value;
    //console.log(value);
    //FILTRAMOS EL ARRAY DE PRODUCTOS
    //const filtrados = productos.filter(producto => producto.categoria == value);
    //console.log(filtrados);
    //GENERAMOS NUEVAMENTE LA INTERFAZ DE PRODUCTOS CON LOS FILTRADOS
    //productosUI(filtrados, '#productosContenedor');
    /*FIX CON OPCION 'TODOS' EN EL SELECT
    if(value == 'TODOS'){
        productosUI(productos, '#productosContenedor');
    }else{
        const filtrados = productos.filter(producto => producto.categoria == value);
        productosUI(filtrados, '#productosContenedor');
    }
    */
    //SOLUCION CON ANIMACIONES
    $('#productosContenedor').fadeOut(600,function(){
        //EL FILTRO SE REALIZA UNA VEZ OCULTO EL CONTENEDOR
        if(value == 'TODOS'){
            productosUI(productos, '#productosContenedor');
        }else{
            const filtrados = productos.filter(producto => producto.categoria == value);
            productosUI(filtrados, '#productosContenedor');
        }
        //MOSTRAR UNA VEZ GENERADOS LOS PRODUCTOS
        $('#productosContenedor').fadeIn();
    });
});
//BOTON DE OFERTAS EJEMPLO SLIDE 
$("#btn-oferta1").click(function (e) { 
   //MOSTRAR OFERTA CON SLIDEDOWN
   //$("#oferta1").slideDown();
   //MOSTRAR/OCULTAR OFERTA CON TOGGLE
   //$("#oferta1").toggle();
   //MOSTRAR/OCULTAR OFERTA CON SLIDETOGGLE
   $("#oferta1").slideToggle();
});
//CONTENEDOR DE OFERTA EJEMPLO ANIMACION CON ANIMATE
/*
$("#oferta2").animate({
    margin:'30px',
    opacity: 0.4,
    fontSize: "2em",
    width: 500
}, 1000,()=>{
    $("#oferta2").slideUp(1000);
});
*/
//BOTON DE OFERTAS EJEMPLO ANIMACION CON ANIMATE
$("#oferta2").animate({
    margin:'30px',
    opacity: 0.4,
    fontSize: "2em",
    width: 500
}, 1000).delay(1000).slideUp(1000);
           
