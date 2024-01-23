// Get the canvas element from the HTML document
const canvas = document.getElementById('my-canvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');
//Setting width & height to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//console.log(ctx);


//Adding Event Listener
//Click Event
canvas.addEventListener('click', function (e) {
 
 //console.log(e.x, e.y) // It will show position of mouse
 
 //This will draw a rectangle whereever we click on screen
 ctx.beginPath();
 ctx.rect(e.x, e.y, 20, 20);
 ctx.fill();

})



//Mousemove (Many Many Times Function)

canvas.addEventListener('mousemove', function (e) {
 
 //console.log(e.x, e.y) // It will show position of mouse
 
 //This will draw a rectangle whereever we click on screen
 ctx.beginPath();
 ctx.rect(e.x, e.y, 20, 20);
 ctx.fill();

})

