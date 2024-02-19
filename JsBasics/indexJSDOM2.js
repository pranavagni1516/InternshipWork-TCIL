// function clcik(){
//     console.log('i have clicked');
// }
// document.addEventListener('click' ,clcik);

// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){console.log(event)});

let myDiv = document.createElement('div');

for(let i=0;i<100;i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    newElement.addEventListener('click',function(event){console.log(`I have clicked the para ${i}`)});

    myDiv.appendChild(newElement);
}


document.body.appendChild(myDiv);