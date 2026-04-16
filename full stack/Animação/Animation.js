let canvas = document.getElementById('animacao');
let ctx = canvas.getContext('2d');

var retangulo1 = {
    x : 0,
    y : 40,
    largura : 20,
    altura : 10,
    cor : 'red',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect (this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

var retangulo2 = {
    x : 0,
    y : 100,
    largura : 20,
    altura : 10,
    cor : 'red',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect (this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

var retangulo3 = {
    x : 0,
    y : 170,
    largura : 20,
    altura : 10,
    cor : 'red',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect (this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

var retangulo4 = {
    x : 0,
    y : 230,
    largura : 20,
    altura : 10,
    cor : 'red',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect (this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

var garoto = {
    x : 0,
    y : 0,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'garoto.png.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 1*this.raio, 1*this.raio);
        ctx.closePath();
    }
}


function animacao(){
    ctx.clearRect(0,0,400,400)
    if (retangulo1.x <= 0){
        aux1 = 1;
    }
    if (retangulo1.x >= 270){
        aux1 = -1;
    }
    retangulo1.x = retangulo1.x + aux1*1;
    retangulo1.desenha();

    
    if (retangulo2.x <= 0){
        aux2 = 1;
    }
    if (retangulo2.x >= 270){
        aux2 = -1;
    }
    retangulo2.x = retangulo2.x + aux2*3;
    retangulo2.desenha();

    if (retangulo3.x <= 0){
        aux3 = 1;
    }
    if (retangulo3.x >= 270){
        aux3 = -1;
    }
    retangulo3.x = retangulo3.x + aux3*1;
    retangulo3.desenha()

    if (retangulo4.x <= 0){
        aux4 = 1;
    }
    if (retangulo4.x >= 270){
        aux4 = -1;
    }
    retangulo4.x = retangulo4.x + aux4*3
    retangulo4.desenha()

    garoto.desenha();
    requestAnimationFrame(animacao)
}

animacao();

document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);

    garoto.x = x_mouse - garoto.raio / 2;
    garoto.y = y_mouse - garoto.raio / 2;

    if (garoto.x < 0) {
    garoto.x = 0;
    }
    if (garoto.x + garoto.raio > canvas.width) {
    garoto.x = canvas.width - garoto.raio;
    }

    if (garoto.y < 0) {
    garoto.y = 0;
    }
    if (garoto.y + garoto.raio > canvas.height) {
    garoto.y = canvas.height - garoto.raio;
    } 
    })

