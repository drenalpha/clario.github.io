const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight * 0.25;
const stars = [], STAR_COUNT = 150;

class Star {
  constructor(){ this.reset(); }
  reset(){
    this.x = Math.random()*width;
    this.y = Math.random()*height;
    this.size = Math.random()*2+1;
    this.speed = Math.random()*1+0.5;
    this.opacity = Math.random();
  }
  update(){ this.y+=this.speed; if(this.y>height) this.reset(); }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }
}
for(let i=0;i<STAR_COUNT;i++) stars.push(new Star());

function animate(){
  ctx.clearRect(0,0,width,height);
  stars.forEach(s=>{s.update(); s.draw();});
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize',()=>{
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight*0.25;
});
