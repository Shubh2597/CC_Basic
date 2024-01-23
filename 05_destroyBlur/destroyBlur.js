// Get the canvas element from the HTML document
const canvas = document.getElementById('my-canvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');
//Setting width & height to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//console.log(ctx);


let atoms = [];
//Try once update 'click' to 'mouse move'
canvas.addEventListener('mousemove', function (e) {
 for (let i = 0; i < 10; i++){
  atoms.push(new Atom(e.x, e.y))
  //console.log("hello");
 }
})

const animate = () => {
 atoms.forEach((atom, index) => {
  atom.draw();
  atom.updateSpeed();
  atom.updateSize();

  if (atom.radius < 0) {
   atoms.splice(index, 1);
  }
 });
 // Concept: Context Save & Context Restore
 ctx.save();
 ctx.fillStyle = 'rgba(255,255,255,0.2)';
 ctx.fillRect(0,0,canvas.width, canvas.height)
 ctx.restore();
// Concept End
 requestAnimationFrame(animate)
}
animate();

class Atom{
 constructor(x,y){
  this.x = x;
  this.y = y;
  this.radius = Math.random() * 8 + 2;
  this.speedX = Math.random() * 4-2; //-2 to 2
  this.speedY = Math.random() * 4 - 2;
 }

 updateSpeed() {
  this.x += this.speedX;
  this.y += this.speedY
 }

 updateSize() {
  this.radius -= 0.1;
 }
 draw() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fill();
 }
}