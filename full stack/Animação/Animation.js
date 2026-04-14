let canvas = document.getElementById('animacao');
let ctx = canvas.getContext('2d');

let bola = {
    x: 0,
    y: 100,
    raio: 20,
    img: new Image(),
    desenha: function(){
        this.img.src = "cachorro.jpg";
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;


    bola.x = x_mouse - bola.raio;
    bola.y = y_mouse - bola.raio;

    if (bola.x < 0) bola.x = 0;
    if (bola.y < 0) bola.y = 0;

    if (bola.x + 2*bola.raio > canvas.width)
        bola.x = canvas.width - 2*bola.raio;

    if (bola.y + 2*bola.raio > canvas.height)
        bola.y = canvas.height - 2*bola.raio;
});