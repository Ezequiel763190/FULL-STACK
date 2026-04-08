let canvas = document.getElementById('blocoCasa');
let ctx = canvas.getContext('2d');

//sol
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.arc(330,50,30,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'gray';
ctx.strokeStyle = 'gray';
ctx.fillRect(0,250,400,150);
ctx.strokeRect(0,250,400,150);
ctx.closePath();
	

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.strokeStyle = '#81491F';
ctx.fillRect(300,250,20,60);
ctx.strokeRect(300,250,20,60);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.strokeStyle = '#81491F';
ctx.fillRect(50,188,20,60);
ctx.strokeRect(50,188,20,60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(60,160,30,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.arc(310,230,30,0*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#81491F';
ctx.strokeStyle = '#81491F';
ctx.fillRect(130,118,120,130);
ctx.strokeRect(130,118,120,130);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#61BBFB';
ctx.strokeStyle = '#61BBFB';
ctx.fillRect(138,140,40,40);
ctx.strokeRect(138,140,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#61BBFB';
ctx.strokeStyle = '#61BBFB';
ctx.fillRect(202,140,40,40);
ctx.strokeRect(202,140,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#5F4525';
ctx.strokeStyle = '#5F4525';
ctx.fillRect(180,180,20,68);
ctx.strokeRect(180,180,20,68);
ctx.closePath();

// ctx.fillRect(130,118,120,130);
ctx.beginPath();
ctx.fillStyle = '#EC6E52';
ctx.moveTo(130,118);
ctx.lineTo(130+60,118-60);
ctx.lineTo(130+120,118);
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#598CFA';
ctx.strokeStyle = '#598CFA';
ctx.arc(0,230,40,1.5*Math.PI,0.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#598CFA';
ctx.strokeStyle = '#598CFA';
ctx.fillRect(0,230,40,200);
ctx.strokeRect(0,230,40,200);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#598CFA';
ctx.strokeStyle = '#598CFA';
ctx.fillRect(0,350,200,200);
ctx.strokeRect(0,350,200,200);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = '#598CFA';
ctx.strokeStyle = '#598CFA';
ctx.arc(200,400,50,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


let canvas2 = document.getElementById('blocoGeometria');
let ctx2 = canvas2.getContext('2d');

ctx2.beginPath();
ctx2.lineWidth = 4;
ctx2.strokeStyle = 'black';
ctx2.strokeRect(0,0,399,399);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#1201ff';
ctx2.fillRect(2,2,60,60);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'red';
ctx2.fillRect(338,2,60,60);
ctx2.closePath();

ctx2.beginPath();
ctx2.strokeStyle = 'green';
ctx2.moveTo(1,200);
ctx2.lineTo(398,200);
ctx2.stroke();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#00ffff';
ctx2.fillRect(2,159,40,40);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = '#00ffff';
ctx2.fillRect(357,159,40,40);
ctx2.closePath();

