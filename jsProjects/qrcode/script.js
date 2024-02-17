let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let button = document.getElementById("genBut");

qrText.addEventListener('keydown',(e)=>{
    if(e.key ==='Enter'){
        e.preventDefault();
        button.click();
    }
});

button.addEventListener('click',(e)=>{
    e.preventDefault();
    qrGenerate();
});

function qrGenerate(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;    
}