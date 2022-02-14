

var modal = document.getElementById('myModal');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'block';
}

$('view-work').on('click', function(){
    const images = $('#images').position().top;

    $('html,body').animate({
        scrollTop:images
    },900);
}


