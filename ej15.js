let cont = 0;

function acierto(){
    let d1 = document.getElementById("md0");
    let d2 = document.getElementById("md1");
    let d3 = document.getElementById("md2");
    let d4 = document.getElementById("md3");
    let sc = document.getElementById("sc");

    if( cont === 0){
        d1.style.display = "none";
        d2.style.display = "block";
        cont++;
        sc.textContent = cont;
    }else if( cont === 1){
        d2.style.display = "none";
        d3.style.display = "block";
        cont++;
        sc.textContent = cont;
    }else if( cont === 2){
        d3.style.display = "none";
        cont++;
        sc.textContent = cont;
        d4.style.display = "block";
    }
}