$(document).ready(function(){
    $(".btn").on({
        click: function(){
            $('p').css("color", "red");
        }  
    });
});

function cambio(){
    const btn = document.getElementById('btn2');
    const p1 = document.getElementById('p1');

    btn.addEventListener('click', function onClick() {
        p1.style.color = 'blue';
    });
}
