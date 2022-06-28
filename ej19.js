function changeImage(){
    if (document.getElementById('imgChanging').src.match('card-back.png')){
        document.getElementById('imgChanging').src = 'card-front.png';
    } else {
        document.getElementById('imgChanging').src = 'card-back.png';
    }
}