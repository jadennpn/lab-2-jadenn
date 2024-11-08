bear.addEventListener('click',function(){
    pagetitle.innerHTML = "Mother Nature Photography"
    console.log("bear");
    document.body.classList.remove("sheep");
    document.body.classList.remove("Moose");
    document.body.classList.remove("wolf");
    document.body.classList.remove("elk");
    document.body.classList.add('bear');
    document.getElementById('banner').src="bear.webp";
    document.getElementById('banner').alt="Black Bear";
} )
moose.addEventListener('click',function(){
    pagetitle.innerHTML = "Mother Nature Photography"
    console.log("Moose");
    document.body.classList.remove('sheep');
    document.body.classList.remove('bear');
    document.body.classList.remove('wolf');
    document.body.classList.remove('elk');
    document.body.classList.add('moose');
    document.getElementById('banner').src="moose.webp";
    document.getElementById('banner').alt="Moose";
} )
wolf.addEventListener('click',function(){
    pagetitle.innerHTML = "Mother Nature Photography"
    console.log("wolf");
    document.body.classList.remove('sheep');
    document.body.classList.remove('bear');
    document.body.classList.remove('Moose');
    document.body.classList.remove('elk');
    document.body.classList.add('wolf');
    document.getElementById('banner').src="wolf.webp";
    document.getElementById('banner').alt="Wolf";
} )
elk.addEventListener('click',function(){
    pagetitle.innerHTML = "Mother Nature Photography"
    console.log("elk");
    document.body.classList.remove('sheep');
    document.body.classList.remove('bear');
    document.body.classList.remove('Moose');
    document.body.classList.remove('wolf');
    document.body.classList.add('elk');
    document.getElementById('banner').src="elk.webp";
    document.getElementById('banner').alt="elk";
} )
