// Get the canvas element from the HTML document
const canvas = document.getElementById('my-canvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');
//Setting width & height to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//console.log(ctx);

let atoms = [];

canvas.addEventListener('click', function (e) {
 for (let i = 0; i < 50; i++){
  atoms.push(new Atom(e.x, e.y))
  //console.log("hello");
 }
})

const animate = () => {
 atoms.forEach(
  atom => {
   atom.draw();
   atom.update();
 }
)
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

 update() {
  this.x += this.speedX;
  this.y += this.speedY
 }
 draw() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fill();
 }
}
