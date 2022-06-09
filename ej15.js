const d2 = document.getElementsByClassName("md1");
const d3 = document.getElementsByClassName("md2");
const sc = document.getElementsByClassName("sc");

function acierto(){
    let cont = 0;
    if(cont = 0){
        document.getElementById("md0").style.display = "none";
        d2.style.display = "block";
        cont++;
        sc++;
    }else if(cont = 1){
        d2.style.display = "none";
        d3.style.display = "block";
        cont++;
        sc++;
    }else if(cont = 2){
        d3.style.display = "none";
        sc++;
    }
}