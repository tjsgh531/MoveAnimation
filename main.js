const character = document.querySelector('.character');
let degree = 0;
loop();

function loop(){
  const rotation = (degree*Math.PI)/180;
  const Xvalue = window.innerWidth/2 + Math.cos(rotation)*100 - 50;
  const Yvalue = window.innerHeight/2 + Math.sin(rotation)*100 - 50;
  character.style.left = `${Xvalue}px`;
  character.style.top = `${Yvalue}px`;
  degree += 1;
  requestAnimationFrame(loop);
}
