let count = document.querySelector('#counter');
let dec = document.querySelector('#dec');
let reset = document.querySelector('#reset');
let inc = document.querySelector('#inc');
let c = 0;
dec.addEventListener('click',()=>{
    c--;
    count.textContent = c;
});
reset.addEventListener('click',()=>{
    c = 0;
    count.textContent = c;
});
inc.addEventListener('click',()=>{
    c++;
    count.textContent = c;
});