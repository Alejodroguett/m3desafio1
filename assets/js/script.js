document.getElementById("boton").addEventListener("click", mifuncion)

function mifuncion() {

    let cantidad = document.getElementById("cantidad").value
    let precio = Number(document.getElementById("price").textContent)
    let color = document.getElementById("getColor").value

    total.innerHTML = cantidad * precio
    
    cantFinal.innerHTML = Number(cantidad)

    colorFinal.style.backgroundColor = color
}