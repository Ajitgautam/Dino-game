let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add('jump');
        setTimeout(function () {
            dino.classList.remove('jump');
        }, 300)
    }
}


setInterval(function(){
    let dinoTop = parseFloat(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseFloat(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if(dinoTop >= 150 && cactusleft >= 0 &&  cactusleft <= 50){
        alert('Try Again')
    }
},10)

document.addEventListener('keydown', jump);