const character = document.querySelector('.character');
console.log(character);
let degree = 0;
let ani;
loop();
function loop(){
  const rotation = (degree*Math.PI)/180;
  const Xvalue = Math.cos(rotation)*100 - 50;
  const Yvalue = Math.sin(rotation)*100 - 50;
  degree += 1;
  character.style.left =`${Xvalue}px`;
  character.style.top = `${Yvalue}px`;
  console.log(character.style.getPropertyValue("left"));
  requestAnimationFrame(loop);
}
