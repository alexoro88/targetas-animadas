const log = console.log
// Pongo todas las targetas en una constante 
// para despues aplicarle un forEach
const cards = document.querySelectorAll('.card')

// pongo un listener a todas las tarjetas para cuando pase el mouse
// se le ponga a esa targeta la clase 'active'
cards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        // llamo a la funcion clearClass q borra la clase 'active'
        // a la targeta q lo tengo para asignarsela a la nueva tarjeta
        // y no se repitan varias targetas con la misma clase
        clearClass();
        // asigno la clase active a la nueva targeta 
        item.classList.add('active')
    })
})

// funcion clearClass q borra la clase 'active' a la antigua targeta
function clearClass() {
    cards.forEach(item=>{
        item.classList.remove('active')
    })
}