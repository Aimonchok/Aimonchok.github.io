function expence(a, b, c){
    return a - b - c
}

const button = document.getElementById("change");
button.addEventListener("click", function(){
    const a = parseFloat(document.getElementById("income").value)
    const b = parseFloat(document.getElementById("fare").value)
    const c = parseFloat(document.getElementById("forMeat").value)

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("output").textContent = "Сандарды туура жазыныз"
    } else {
        const output = expence(a, b, c);
        document.getElementById("output").textContent = `Сизде ушунча акча калат: ${output}`
    }
})


