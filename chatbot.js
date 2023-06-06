
const firstPertanyaan = document.getElementById('firstPertanyaan');
const firstContentPertanyaan = document.getElementById('firstContentPertanyaan');

const timeQuestion = document.getElementById('timeQuestion');
const timeAsk = document.getElementById('timeAsk');

const contentPertanyaan = document.getElementById('contentPertanyaan');
const contentJawaban = document.getElementById('contentJawaban');

/* MENGKLONING CONTENT*/

const originalElementPertanyaan = document.getElementById('contentPertanyaan');
const clonedElementPertanyaan = originalElementPertanyaan.cloneNode(true);

const originalElementJawaban = document.getElementById('contentJawaban');
const clonedElementJawaban = originalElementJawaban.cloneNode(true);


/* MENGKLONING CHAT*/
const originalPertanyaan = document.getElementById('chatPertanyaan');
const clonedPertanyaan = originalPertanyaan.cloneNode(true);

const originalJawaban = document.getElementById('chatJawaban');
const clonedJawaban = originalJawaban.cloneNode(true);

const botSay = (data) => {
  return [
    `Hi. Nama saya Fabot, siapa nama kamu?`,/*0*/
    `hallo ${data?.nama}, usia kamu berapa ya?`,/*1*/
    `ohh ${data?.usia}, kalo hobi kamu apa ya?`,/*2*/
    `ihhh sama dong aku juga hobi ${data?.hobi}, btw kamu udah punya pacar belum?`,/*3*/
  ]
}

const userSay = (data) => {
  return [
   `Hi nama saya ${data?.nama}`,/*0*/
   `saya masih berusia ${data?.usia} tahun`,/*1*/
   `hobi yang paling saya sukai adalah ${data?.hobi}`,/*2*/
  ]
}

contentPertanyaan.style.display = "none";
contentJawaban.style.display = "none";

firstPertanyaan.innerHTML = botSay()[0];

let init = 0;

function botStart(data) {
  init++
  
  console.log(`masuk ke init ${init} 😎`)
  
  const jawaban = document.getElementById('jawaban');
  const jawabanValue = jawaban.value;
  
  const clonedTextJawaban = clonedElementJawaban.querySelector('#textJawaban');
  const clonedTextPertanyaan = clonedElementPertanyaan.querySelector('#TextPertanyaan');
  
  const clonedTimeQuestion = clonedElementPertanyaan.querySelector('#timeQuestion');
  const originalTimeQuestion = originalElementPertanyaan.querySelector('#timeQuestion');
  const clonedTimeAsk = clonedElementJawaban.querySelector('#timeAsk');
  
  startTime();
   clonedTimeQuestion.innerHTML = timeQuestion.innerHTML;
   clonedTimeAsk.innerHTML = timeAsk.innerHTML;
   
  const barier = document.querySelector('.barier');
  barier.style.display = "block";
  originalPertanyaan.style.display = "none";
  
  if (init === 1) {
  console.log({ nama: jawaban.value });
  userDelay({ nama: jawaban.value });
  
  barier.style.display = "block";
  contentJawaban.style.display = "block";
  textJawaban.innerHTML = userSay({ nama: jawabanValue })[0];
  
  textLoad();
   
  setTimeout(() => {
   
   originalTimeQuestion.innerHTML = timeQuestion.innerHTML;
  
    barier.style.display = "none";
    contentPertanyaan.style.display = "block";
    clonedTextPertanyaan.innerHTML = botSay({ nama: jawabanValue })[1];
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    textMengetik.innerHTML = "Online";
  }, 4000);
}


  if (init === 2) {
  console.log({ usia: jawaban.value })
  botDelay({ usia: jawaban.value })
  
  barier.style.display = "block";
  clonedTextJawaban.innerHTML = userSay({ usia: jawabanValue })[1];
   
  document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
  
  textLoad();
  
  setTimeout(() => {
    
    barier.style.display = "none";
    clonedTextPertanyaan.innerHTML = botSay({ usia: jawabanValue })[2];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    textMengetik.innerHTML = "Online";
  }, [4000]);
}


  else if (init === 3) {
    console.log({ hobi: jawabanValue })
    userDelay({ hobi: jawabanValue })
   
    barier.style.display = "block";
    clonedTextJawaban.innerHTML = userSay({ hobi: jawabanValue })[2];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementJawaban.cloneNode(true));
    
    textLoad();
    
    setTimeout(() => {
     
    barier.style.display = "none";
    clonedTextPertanyaan.innerHTML = botSay({ hobi: jawabanValue })[3];
    
    document.getElementById('contentPertanyaan').appendChild(clonedElementPertanyaan.cloneNode(true));
     
    document.querySelector('#timeQuestion').scrollIntoView({ behavior: 'smooth' });
     
    textMengetik.innerHTML = "Online";
    }, [4000]);
  }
}


function botDelay(pertanyaanBot) {
  jawaban.value = "";
  
  textPertanyaan.innerHTML = botSay(pertanyaanBot)[init];
}

function userDelay(jawabanUser) {
  jawaban.value = "";
  
  textJawaban.innerHTML = userSay(jawabanUser)[init];
}

const textMengetik = document.querySelector('.status');

const textLoad = () => {
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik";
 },[0])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik.";
 },[1000])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik..";
 },[1800])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik...";
 },[2400])
 setTimeout(() => {
  textMengetik.innerHTML = "Mengetik....";
 },[3400])
}

/*kode validasi JAM*/

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  timeAsk.innerHTML = `${h}.${m}`;
  timeQuestion.innerHTML = `${h}.${m}`;
}

function checkTime(i) {
  if (i < 10) {
  i = "0" + i;
   }
  return i;
 }

/*kode validasi tanggal*/

const currentDate = new Date();
const d = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const y = currentDate.getFullYear();

const date = document.querySelector('.date');

const monthNames = [
  "Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember",
  ]

date.innerHTML = `${d} ${monthNames[monthIndex]} ${y}`;


/*JAVASCRIPT CODE BACKGROUND ANIMATION*/

function hujan(){
   let amount = 20;
   let container = document.querySelector('.container');
   let i = 0;
   while(i < amount){
    let drop = document.createElement('i');
    
    let size = Math.random() * 4;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -50;
    let duration = Math.random() * 17;
    
    drop.style.width = 1 + size+'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay+'s';
    drop.style.animationDuration = 9 + duration + 's';
    container.appendChild(drop);
    i++
   }
  }
  
 hujan();