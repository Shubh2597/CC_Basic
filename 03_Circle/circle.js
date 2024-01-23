// Get the canvas element from the HTML document
const canvas = document.getElementById('my-canvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');
//Setting width & height to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//console.log(ctx);


const degToRad = (deg) => {
 return (deg/180)*Math.PI
}


ctx.beginPath();
//Math.PI = Half Circle
//Math.PI*2 = Full Circle
ctx.arc(100, 100, 50, 0, degToRad(90));
//ctx.fill();
ctx.stroke();
