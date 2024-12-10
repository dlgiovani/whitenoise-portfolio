// NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE 

// noise.js

export function drawNoise(ctx, canvas) {
  const width = canvas.width;
  const height = canvas.height;
  const imageData = ctx.createImageData(width, height);
  const buffer = new Uint32Array(imageData.data.buffer);
  let color;

  function animate() {
    for (let i = 0; i < buffer.length; i+=8) {
      color = Math.random();
      const c = color > .5 ? 255 : 0;
      buffer[i] = (255 << 24) | (c << 16) | (c << 8) | c;
    }
    ctx.putImageData(imageData, 0, 0);
    // requestAnimationFrame(animate);
    setTimeout(() => {
      requestAnimationFrame(animate)}, 80)
    }
  animate();
}

export function callSetTimeout(canvas) {
  setTimeout(() => {
    canvas.classList.add('noise-animate');
  }, 0);
}


// NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE NOISE