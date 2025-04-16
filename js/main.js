document.getElementById('color').addEventListener('input', function(event){
    let color = event.target.value

    document.getElementById('codeWarna').textContent = color
    document.getElementById('colorOutput').style.backgroundColor = color
})