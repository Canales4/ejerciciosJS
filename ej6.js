//Punto 1
let s3 = (n1,n2,n3)=>{
    res=n1+n2+n3;
    return res;
}
console.log(s3(2,3,2));

//Punto 2
let escNom = (nom, ap1, ap2)=>{
    res = nom + " " + ap1 + " " + ap2;
    console.log(res);
}
escNom( 'JuanC', 'Canales', 'Linares');

//Punto 3
let nGt=(n1,n2)=>{
    if(n1>n2){
        console.log(n1);
    }else if(n2>n1){
        console.log(n2);
    }else{
        console.log("Son iguales");
    }
}
nGt(3,23);