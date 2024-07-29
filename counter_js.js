let counterChg = 0;
let counterInc=0;
let counterTask=0;
let counterTotal=0;
const counterValueChg = document.getElementById('counter-value-chg');
const incrementBtnChg = document.getElementById('increment-btn-chg');
const decrementBtnChg = document.getElementById('decrement-btn-chg');
const resetBtnChg = document.getElementById('reset-chg');
const counterValueInc = document.getElementById('counter-value-inc');
const incrementBtnInc = document.getElementById('increment-btn-inc');
const decrementBtnInc = document.getElementById('decrement-btn-inc');
const resetBtnInc = document.getElementById('reset-inc');
const counterValueTask = document.getElementById('counter-value-task');
const incrementBtnTask = document.getElementById('increment-btn-task');
const decrementBtnTask = document.getElementById('decrement-btn-task');
const resetBtnTask = document.getElementById('reset-task');
const counterValueTotal=document.getElementById('counter-value-total');

// To increment the value of counter
incrementBtnChg.addEventListener('click', () => {
    counterChg++;
    counterTotal++;
    counterValueChg.innerHTML = counterChg;
    counterValueTotal.innerHTML=counterTotal;
});

incrementBtnInc.addEventListener('click', () => {
    counterInc++;
    counterTotal++;
    counterValueInc.innerHTML = counterInc;
    counterValueTotal.innerHTML=counterTotal;
});

incrementBtnTask.addEventListener('click', () => {
    counterTask++;
    counterTotal++;
    counterValueTask.innerHTML = counterTask;
    counterValueTotal.innerHTML=counterTotal;
});

// To decrement the value of counter
decrementBtnChg.addEventListener('click', () => {
    counterChg--;
    counterTotal--;
    counterValueChg.innerHTML = counterChg;
    counterValueTotal.innerHTML=counterTotal;
});

decrementBtnInc.addEventListener('click', () => {
    counterInc--;
    counterTotal--;
    counterValueInc.innerHTML = counterInc;
    counterValueTotal.innerHTML=counterTotal;
});

decrementBtnTask.addEventListener('click', () => {
    counterTask--;
    counterTotal--;
    counterValueTask.innerHTML = counterTask;
    counterValueTotal.innerHTML=counterTotal;
});

// To reset the counter to zero
resetBtnChg.addEventListener('click', () => {
    counterTotal-=counterChg;
    counterChg = 0;
    counterValueTotal.innerHTML=counterTotal;
    counterValueChg.innerHTML = counterChg;
});

resetBtnInc.addEventListener('click', () => {
    counterTotal-=counterInc;
    counterInc = 0;
    counterValueTotal.innerHTML=counterTotal;
    counterValueInc.innerHTML = counterInc;
});

resetBtnTask.addEventListener('click', () => {
    counterTotal-=counterTask;
    counterTask = 0;
    counterValueTotal.innerHTML=counterTotal;
    counterValueTask.innerHTML = counterTask;
});