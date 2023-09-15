let home_score=document.getElementById("home");
let guest_score=document.getElementById("guest");
let home_count=0;
let guest_count=0;
function home_1(){
    home_count+=1;
    home_score.innerText=home_count;
}
function home_2(){
    home_count+=2;
    home_score.innerText=home_count;
}
function home_3(){
    home_count+=3;
    home_score.innerText=home_count;
}
function guest_1(){
    guest_count+=1;
    guest_score.innerText=guest_count;
}
function guest_2(){
    guest_count+=2;
    guest_score.innerText=guest_count;
}
function guest_3(){
    guest_count+=3;
    guest_score.innerText=guest_count;
}
function newGame(){
    home_count=0;
    guest_count=0;
    home_score.innerText=home_count;
    guest_score.innerText=guest_count;
}
