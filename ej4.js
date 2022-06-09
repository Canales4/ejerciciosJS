//Punto 1
let arrow = ()=>{
    return 'Juan Carlos';
}
console.log(arrow());

//Punto 2
function miFuncion(b = true){
    console.log(b);
}
miFuncion();

//Punto 3
let f=(...p)=>{
    p.forEach( element =>{console.log(element);});
}
f(1,2,3,4,5);