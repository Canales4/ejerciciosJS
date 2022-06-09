//Punto 1
let sus = (s) =>{
    let sC = Array.from(s);
    for (let i = 0; i < sC.length; i++) {
        if(sC[i] == 'a'){
            sC[i] = 'o'
        }else if(sC[i] == 'A'){
            sC[i] = 'O';
        }
    }
    s=sC.join("");
    console.log(s);
}

sus('MAcaRRoNes');

//Punto 2
let aca = (s)=>{
    if(s.startsWith('aca')){
        console.log('Empieza por aca');
    }else{
        console.log('No empieza por aca');
    }
    
}

aca('academia');
aca('escuela');

//Punto 3

let hol = (s)=>{
    console.log(s.repeat(3));
}

hol('Hola ');
