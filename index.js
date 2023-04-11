let count=0;
let countEL= document.getElementById('count-el');
let saveEL= document.getElementById('saved');
let totalEL= document.getElementById('total');

let prevTotal=0;

function increment(){
    count++;
    countEL.innerText=count;
    
}

function save(){
    if (count!==0){
    total();
    saveEL.textContent+=" - "+ count;
    count=0;
    countEL.innerText=0;
    }
    else
        return;
}

function total(){
    
    let newTotal = parseInt(totalEL.innerText) + count;
    totalEL.innerText= newTotal;
    console.log(newTotal);
    return;
}

function clearNow(){
    count=0;
    countEL.innerText=0;
    saveEL.innerText=0;
    totalEL.innerText=0;
    console.log(count);
}