var cor = '';
var r, g, b;
function mudaCor(){
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    // cor = `'rgb(${r}, ${g}, ${b})'`;
    cor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.getElementById('principal').style.backgroundColor = cor;
    console.log(cor);
}
