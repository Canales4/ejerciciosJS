let moneda = ()=>{
    let mon = Math.round(Math.random());
    if(mon === 1){
        return "Cruz";
    }else if(mon === 0){
        return "Cara";
    }
}

console.log(moneda());