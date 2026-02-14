const valentineIntro = document.getElementById("valentineIntro");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const intro = document.getElementById("intro");
const heartbeat = document.getElementById("heartbeatSound");
const valHearts = document.getElementById("valHearts");

let noHoverCount = 0;

/* Floating hearts continuously */
setInterval(() => {
  const heart = document.createElement("div");
  heart.classList.add("valHeart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";
  valHearts.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 500);

/* NO Button runs away */
noBtn.addEventListener("mouseenter", () => {
  heartbeat.currentTime = 0;
  heartbeat.play();

  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  gsap.to(noBtn, {
    x: x,
    y: y,
    duration: 0.3
  });

  noHoverCount++;

  // Shrink after 5 attempts
  if (noHoverCount >= 5) {
    gsap.to(noBtn, {
      scale: 0.6,
      duration: 0.5
    });
  }
});

/* YES Button Click */
yesBtn.onclick = function() {

  // Rose explosion
  for (let i = 0; i < 30; i++) {
    const petal = document.createElement("div");
    petal.innerHTML = "🌹";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.top = "-20px";
    petal.style.fontSize = "20px";
    petal.style.animation = `fall ${4 + Math.random() * 4}s linear`;
    petal.style.zIndex = "7000";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
  }

  // Ring sparkle
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.innerHTML = "💍";
    sparkle.style.left = (window.innerWidth/2 + Math.random()*100 - 50) + "px";
    sparkle.style.top = (window.innerHeight/2 + Math.random()*100 - 50) + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }

  gsap.to(valentineIntro, {
    opacity: 0,
    duration: 2,
    onComplete: () => {
      valentineIntro.remove();
      intro.style.display = "flex";
      gsap.from(intro, { opacity: 0, duration: 2 });
    }
  });
};




const cities = [
  { name: "Varanasi", coords: [25.3176, 82.9739], images: ["assets/vns/vns1.jpg","assets/vns/vns2.jpg","assets/vns/vns3.jpg","assets/vns/vns4.jpg","assets/vns/vns5.jpg","assets/vns/vns6.jpg","assets/vns/vns7.jpg","assets/vns/vns8.jpg","assets/vns/vns9.jpg","assets/vns/vns10.jpg","assets/vns/vns11.jpg","assets/vns/vns12.jpg","assets/vns/vns13.jpg","assets/vns/vns14.jpg","assets/vns/vns15.jpg","assets/vns/vns16.jpg"], videos: [] },
  { name: "Rishikesh", coords: [30.0869, 78.2676], images: ["assets/rish/rish1.jpg","assets/rish/rish2.jpg","assets/rish/rish3.jpg","assets/rish/rish4.jpg","assets/rish/rish5.jpg","assets/rish/rish6.jpg","assets/rish/rish7.jpg","assets/rish/rish8.jpg"], videos: [] },
  { name: "Lucknow", coords: [26.8467, 80.9462], images: ["assets/lck2/lck1.jpg","assets/lck2/lck2.jpg","assets/lck2/lck3.jpg","assets/lck2/lck4.jpg","assets/lck2/lck5.jpg","assets/lck2/lck6.jpg","assets/lck2/lck7.jpg","assets/lck2/lck8.jpg","assets/lck2/lck9.jpg","assets/lck2/lck10.jpg","assets/lck2/lck11.jpg","assets/lck2/lck12.jpg","assets/lck2/lck13.jpg","assets/lck2/lck14.jpg","assets/lck2/lck15.jpg","assets/lck2/lck16.jpg","assets/lck2/lck17.jpg","assets/lck2/lck18.jpg","assets/lck2/lck19.jpg"], videos: [] },
  { name: "Jaipur", coords: [26.9124, 75.7873], images: ["assets/jp/jp1.jpg","assets/jp/jp2.jpg","assets/jp/jp3.jpg","assets/jp/jp4.jpg","assets/jp/jp5.jpg","assets/jp/jp6.jpg","assets/jp/jp7.jpg","assets/jp/jp8.jpg","assets/jp/jp9.jpg","assets/jp/jp10.jpg","assets/jp/jp11.jpg","assets/jp/jp12.jpg","assets/jp/jp13.jpg","assets/jp/jp14.jpg","assets/jp/jp15.jpg","assets/jp/jp16.jpg","assets/jp/jp17.jpg","assets/jp/jp18.jpg","assets/jp/jp19.jpg","assets/jp/jp20.jpg","assets/jp/jp21.jpg"], videos: [] },
  { name: "Pune", coords: [18.5204, 73.8567], images: ["assets/pun/bom1.jpg","assets/pun/bom2.jpg","assets/pun/bom3.jpg","assets/pun/bom4.jpg","assets/pun/bom5.jpg","assets/pun/bom6.jpg","assets/pun/bom7.jpg","assets/pun/bom8.jpg","assets/pun/bom9.jpg","assets/pun/bom10.jpg","assets/pun/bom11.jpg","assets/pun/bom12.jpg"], videos: [] },
  { name: "Mumbai", coords: [19.0760, 72.8777], images: ["assets/bom/bom13.jpg","assets/bom/bom14.jpg","assets/bom/bom15.jpg","assets/bom/bom16.jpg","assets/bom/bom17.jpg","assets/bom/bom18.jpg","assets/bom/bom19.jpg","assets/bom/bom20.jpg","assets/bom/bom21.jpg"], videos: [] },
  { name: "Delhi", coords: [28.7041, 77.1025], images: ["assets/del/dl1.jpg","assets/del/dl2.jpg","assets/del/dl3.jpg","assets/del/dl4.jpg","assets/del/dl5.jpg","assets/del/dl6.jpg","assets/del/dl7.jpg","assets/del/dl8.jpg","assets/del/dl9.jpg","assets/del/dl10.jpg","assets/del/dl11.jpg","assets/del/dl12.jpg","assets/del/dl13.jpg","assets/del/dl14.jpg","assets/del/dl15.jpg","assets/del/dl16.jpg","assets/del/dl17.jpg","assets/del/dl18.jpg","assets/del/dl19.jpg","assets/del/dl20.jpg","assets/del/dl21.jpg","assets/del/dl22.jpg","assets/del/dl23.jpg","assets/del/dl24.jpg","assets/del/dl25.jpg"], videos: [] },
  { name: "Mirzapur", coords: [25.1460, 82.5690], images: ["assets/mzp/mzp1.jpg","assets/mzp/mzp2.jpg","assets/mzp/mzp3.jpg","assets/mzp/mzp4.jpg","assets/mzp/mzp5.jpg","assets/mzp/mzp6.jpg","assets/mzp/mzp7.jpg","assets/mzp/mzp8.jpg","assets/mzp/mzp9.jpg","assets/mzp/mzp10.jpg","assets/mzp/mzp11.jpg","assets/mzp/mzp12.jpg","assets/mzp/mzp13.jpg","assets/mzp/mzp14.jpg"], videos: [] }
];

let currentCity = cities[0];

const map = L.map('map', { zoomControl:false }).setView([22.5,79],5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

let markers = [];

cities.forEach(city => {
  const marker = L.marker(city.coords).addTo(map);
  marker.on('click', () => travelToCity(city));
  markers.push(marker);
});

// START BUTTON

document.getElementById("startBtn").onclick = function() {

  gsap.to(intro, {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      intro.remove();
    }
  });

};




// TRAIN ICON
const trainIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
  iconSize: [40,40]
});

let trainMarker = L.marker(currentCity.coords, {icon:trainIcon}).addTo(map);

function travelToCity(city) {

  const start = currentCity.coords;
  const end = city.coords;

  const steps = 100;
  let i = 0;

  const interval = setInterval(()=>{
    let lat = start[0] + (end[0]-start[0])*(i/steps);
    let lng = start[1] + (end[1]-start[1])*(i/steps);
    trainMarker.setLatLng([lat,lng]);
    map.panTo([lat,lng], {animate:false});

    i++;
    if(i>steps){
      clearInterval(interval);
      currentCity = city;
      openMemory(city);
    }
  },20);
}

// MEMORY SYSTEM

const overlay = document.getElementById("memoryOverlay");
const slidesContainer = document.querySelector(".slides");
const videosContainer = document.querySelector(".videos");
const title = document.getElementById("memoryTitle");

let slideIndex = 0;
let slideshowInterval;

function openMemory(city){
  title.textContent = city.name;
  slidesContainer.innerHTML="";
  videosContainer.innerHTML="";

  city.images.forEach((img,i)=>{
    const image = document.createElement("img");
    image.src=img;
    if(i===0) image.classList.add("active");
    slidesContainer.appendChild(image);
  });

  city.videos.forEach(videoSrc=>{
    const video=document.createElement("video");
    video.src=videoSrc;
    video.controls=true;
    video.width=500;
    videosContainer.appendChild(video);
  });

  overlay.classList.add("active");
  startSlideshow();
  createHearts();
}

function startSlideshow(){
  const images=document.querySelectorAll(".slides img");
  slideIndex=0;
  slideshowInterval=setInterval(()=>{
    images[slideIndex].classList.remove("active");
    slideIndex=(slideIndex+1)%images.length;
    images[slideIndex].classList.add("active");
  },3000);
}

document.getElementById("closeMemory").onclick=function(){
  overlay.classList.remove("active");
  clearInterval(slideshowInterval);
};

// FLOATING HEARTS
function createHearts(){
  for(let i=0;i<20;i++){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"%";
    heart.style.animationDuration=(3+Math.random()*3)+"s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
  }
}
