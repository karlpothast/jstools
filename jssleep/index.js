
let headerText = document.querySelector('.header-text');
let divTerminal = document.querySelector(".terminal");
let tbl1 = document.querySelector("#tbl1");
let txtSleepSeconds = document.querySelector("#txtSleepSeconds");

window.onload = async function() {
 setTitle("JS Sleep");


};

function setTitle(pageTitle) {
  document.title = pageTitle;
  headerText.innerText = pageTitle;
}


let btnDemoSleep = document.querySelector('#btnDemoSleep');
btnDemoSleep.addEventListener('click', async () => {

  tbl1.innerHTML = "";
  let seconds = txtSleepSeconds.value;
  let msg = 'Sleep ' + seconds + " seconds";
  addRow(msg);  
  await sleep(seconds);
  msg = "Done sleeping";
  addRow(msg);
})

function addRow(msg) {
    let row = tbl1.insertRow();
    let cell = row.insertCell();
    cell.textContent = msg;
}

async function sleep(seconds){
  var milliseconds = seconds * 1000;
  await new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function sleepMs(milliseconds){
  await new Promise(resolve => setTimeout(resolve, milliseconds))
}

