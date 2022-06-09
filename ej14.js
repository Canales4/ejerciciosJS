// Punto 1
let comidaBasura = ['🍔','🌯','🍣','🍕','🍜','🍱','🍙','🍘','🥩'];
let pizza = false;
for (let i = 0; i < comidaBasura.length; i++) {
    if(comidaBasura[i] === '🍕'){
        pizza = true;
    } else if(pizza){
        comidaBasura[i] = '🍺';
    }
    
}

console.log(comidaBasura);

// Punto 2
let pizzasLocas = ['🍕', '🍕','🍍','🍕','🍕'];
let nPinias = 0;
for (let i = 0; i < pizzasLocas.length; i++) {
    if(pizzasLocas[i] === '🍍'){
        nPinias++;
    }
}
console.log('Hay '+nPinias+' piñas');

// Punto 3
let pizzasLocas2 = ['🍕', '🍕','🍍','🍕','🍕'];
let nPinias2 = 0;
for (let i = 0; i < pizzasLocas2.length; i++) {
    if(pizzasLocas2[i] === '🍍'){
        pizzasLocas2.splice(i, 1);
        nPinias2++;
    }
}
console.log('Nos hemos comido '+nPinias2+' piñas');
console.log(pizzasLocas2);

// Punto 4
let prefieroChampinones = ['🍓', '🍋','🍓','🍋','🍓'];
for (let i = 0; i < prefieroChampinones.length; i++) {
    if(prefieroChampinones[i] === '🍓'){
        prefieroChampinones[i] = '🍄';
    }
    
}
console.log(prefieroChampinones);

// Punto 5
let picante = ['🌶','🥛','🌶','🥛','🌶','🥛'];
let picante2 = [];
for (let i = 0; i < picante.length; i++) {
    if(picante[i] === '🌶'){
        picante2.push('🌶');
        picante2.push('🥵');
        picante2.push('🥛');
    }
}
picante = picante2;
picante2=[]; 
console.log(picante);

// Punto 6
let cartas = ['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];
let cartas2=[];
for (let i = 0; i < cartas.length; i++) {
    if(cartas[i] === '🎴' && cartas[i+1] === '🎴'){
        cartas2.push('🎴');
        cartas2.push('🃏');
    }else{
        cartas2.push(cartas[i]);
    }
}
cartas=cartas2;
cartas2=[];
console.log(cartas);

