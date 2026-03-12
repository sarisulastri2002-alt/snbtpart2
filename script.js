const nama = localStorage.getItem("namaPeserta");

if(!nama){
window.location.href="login.html";
}

document.getElementById("namaPeserta").innerText = "Peserta : " + nama;
const questions = [
{
question:"Akar-akar persamaan kuadrat x² – 5x + 6 = 0 adalah…",
options:["3","4","5","6"],
answer:"3"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
},
{
question:"Jika (x – 2) faktor dari x³ – 4x² + ax – 6 maka a adalah…",
options:["3","4","5","6"],
answer:"4"
}
];

let currentQuestion = 0;
let score = 0;
let userAnswers = {};

let time = 90*60;
let timerInterval=null;

// ================= TIMER =================
function startTimer(){

const timerDisplay=document.getElementById("timer");
if(!timerDisplay) return;

timerInterval=setInterval(()=>{

let m=Math.floor(time/60);
let s=time%60;

timerDisplay.innerText=
m+":"+String(s).padStart(2,"0");

time--;

if(time<0){
clearInterval(timerInterval);
showResult();
}

},1000);

}

// ================= SAVE ANSWER =================
function saveAnswer(){

let selected=document.querySelector(
'input[name="answer"]:checked'
);

if(selected){
userAnswers[currentQuestion]=selected.value;
}

}

// ================= LOAD QUESTION =================
function loadQuestion(){
  window.scrollTo(0,0);
let q=questions[currentQuestion];

document.getElementById("questionNumber").innerText=
currentQuestion+1;

let progress=
((currentQuestion+1)/questions.length)*100;

document.getElementById("progress").style.width=
progress+"%";

let container=document.getElementById("question-container");

container.innerHTML=`
<h3>${q.question}</h3>
${q.options.map(opt=>`
<div>
<label>
<input type="radio"
name="answer"
value="${opt}"
${userAnswers[currentQuestion]===opt?"checked":""}>
${opt}
</label>
</div>
`).join("")}
`;

renderSidebar();

}

// ================= SIDEBAR =================
function renderSidebar(){

let sidebar=document.getElementById("questionSidebar");

if(!sidebar) return;

sidebar.innerHTML=questions.map((_,index)=>{

let cls="nav-number";

if(index===currentQuestion) cls+=" nav-active";
if(userAnswers[index]) cls+=" nav-done";

return `
<div class="${cls}"
onclick="gotoQuestion(${index})">
${index+1}
</div>
`;

}).join("");

}

// ================= NAVIGASI =================
function gotoQuestion(index){

saveAnswer();
currentQuestion=index;
loadQuestion();

}

// ================= BUTTON =================
document.getElementById("nextBtn").onclick=()=>{

saveAnswer();

saveAnswer();

if(currentQuestion < questions.length - 1){
currentQuestion++;
loadQuestion();
}else{
showResult();
}

if(currentQuestion<questions.length-1){
currentQuestion++;
loadQuestion();
}else{
showResult();
}

};

document.getElementById("prevBtn").onclick=()=>{

saveAnswer();

if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}

};

// ================= RESULT + REVIEW =================
function showResult(){

clearInterval(timerInterval);

let benar=0;
let salah=0;
let kosong=0;

questions.forEach((q,index)=>{

let user=userAnswers[index];

if(!user){
kosong++;
}
else if(user===q.answer){
benar++;
}
else{
salah++;
}

});

let skor = benar;

document.body.innerHTML=`

<div style="max-width:800px;margin:60px auto;text-align:center">

<h1>Ujian Selesai</h1>

<h2 style="margin-top:20px">
Skor Kamu
</h2>

<h1 style="font-size:48px;color:#2563eb">
${skor} / ${questions.length}
</h1>

<div style="
display:flex;
justify-content:center;
gap:30px;
margin:30px 0;
font-size:18px">

<div>Benar : <b style="color:green">${benar}</b></div>

<div>Salah : <b style="color:red">${salah}</b></div>

<div>Kosong : <b>${kosong}</b></div>

</div>

<button onclick="showReview()" style="
padding:12px 25px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
cursor:pointer;
margin-right:10px">

Lihat Pembahasan

</button>

<button onclick="location.reload()" style="
padding:12px 25px;
background:#2563eb;
border:none;
border-radius:8px;
cursor:pointer">

Kerjakan Lagi

</button>



</div>

`;

}

function showReview(){
  

let html=`
<div style="max-width:800px;margin:50px auto">

<h2 style="text-align:center">
Pembahasan Soal
</h2>
`;

questions.forEach((q,index)=>{

let user=userAnswers[index];
let correct=q.answer;

let status="❌ Salah";
let color="red";

if(user===correct){
status="✔ Benar";
color="green";
}

html+=`

<div style="
margin:25px 0;
padding:18px;
border-radius:10px;
box-shadow:0 0 6px rgba(0,0,0,0.1)">

<h4>Soal ${index+1}</h4>

<p>${q.question}</p>

<p>
Jawaban kamu :
<b style="color:${user===correct ? 'green':'red'}">
${user || "-"}
</b>
</p>

<p>
Jawaban benar :
<b style="color:green">${correct}</b>
</p>

<p style="color:${color}">
Status : ${status}
</p>

</div>

`;

});

html+=`</div>`;

document.body.innerHTML=html;

}

// ================= INIT =================
loadQuestion();
renderSidebar();
startTimer();