const imagenes = document.querySelectorall('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburgueri = document.querySelector('.hamburger');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})
contenedorLight.addEventListener('click', (e)=>{
    if(e. target !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle ('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}