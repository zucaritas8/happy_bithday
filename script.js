let progress = 0;

function yes() {
    document.getElementById('box-sec').style.display = 'block';
            let progress = -1;
            const progressBar = document.getElementById("progress-bar");
            const errorMessage = document.getElementById("alertBox");
    function updateProgress() {
        if (progress < 26) {
            progress++;
            progressBar.style.width = progress + "%";
            progressBar.textContent = progress + "%";
            setTimeout(updateProgress, 100);
        } else {
            errorMessage.style.display = "block";
            progressBar.style.backgroundColor = "red";
        }
            }
            updateProgress();
}

function cancel() {
        document.getElementById('adds').style.display = 'none';
        document.getElementById('progress-bar').style.width = '0%';
}
function x() {
    document.getElementById('adds').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
}
function x2() {
    document.getElementById('adds2').style.display = 'none';
    document.getElementById('progress-bar2').style.width = '0%';
}

function no() {
    document.getElementById('box-sec2').style.display = 'block';
            let progress2 = -1;
            const progressBar2 = document.getElementById("progress-bar2");
            const errorMessage2 = document.getElementById("alertBoxA");
    function updateProgress2() {
        if (progress2 <= 99) {
            progress2++;
            progressBar2.style.width = progress2 + "%";
            progressBar2.textContent = progress2 + "%";
            setTimeout(updateProgress2, 100);
        } else {
            errorMessage2.style.display = "block";
            progressBar2.style.backgroundColor = "green";
        }
            }
            updateProgress2();
}

function next() {
    var seccion1 = document.getElementById('header');
    var seccion2 = document.getElementById('secondSec');

    // Eliminar la primera sección
    if (seccion1) {
        seccion1.remove();
    }

    // Mostrar la segunda sección
    if (seccion2) {
        seccion2.style.display = 'block';
    }
}

const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
const colors = [ "#04C2C9", "#FF0000", "#F9D423", "#4169E1"];
let particles = [];
let mousePos = { x: 0, y: 0 };
class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.98; // Shrink over time
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
function createExplosion(x, y) {
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 5 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const speedX = (Math.random() * 2 - 1) * 2;
    const speedY = (Math.random() * 2 - 1) * 2;
    particles.push(new Particle(x, y, size, color, speedX, speedY));
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter((particle) => {
    particle.update();
    particle.draw();
    return particle.size > 0.5;
  });
  requestAnimationFrame(animate);
}
function handleMouseMove(event) {
mousePos.x = event.clientX;
mousePos.y = event.clientY;
}
// Initialize
resizeCanvas();
animate();
// Event listeners
window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousemove", handleMouseMove);
// Create explosions at intervals
setInterval(() => {
createExplosion(mousePos.x, mousePos.y);
}, 50);

let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});