let canvas = document.getElementById('animacao');
let ctx = canvas.getContext('2d');

let garoto = {
    x: 0,
    y: 0,
    largura: 40,
    altura: 60,
    img: new Image(),
    desenha: function(){
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

garoto.img.src = "garoto.png";


var retangulo1 = {
    x : 0,
    y : 0,
    largura: 30,
    altura: 20,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        ctx.closePath();
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400);
    if (retangulo1.x >= 270){
        aux = -1;
    }

    if (retangulo1.x <= 0){
        aux = 1
    }

    retangulo1.x = retangulo1.x + aux*3;
    retangulo1.desenha();
    garoto.desenha();
    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    garoto.x = x_mouse - garoto.largura / 2;
    garoto.y = y_mouse - garoto.altura / 2;

    if (garoto.x < 0) garoto.x = 0;
    if (garoto.y < 0) garoto.y = 0;

    if (garoto.x + garoto.largura > canvas.width)
        garoto.x = canvas.width - garoto.largura;

    if (garoto.y + garoto.altura > canvas.height)
        garoto.y = canvas.height - garoto.altura;
});
