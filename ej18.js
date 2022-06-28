function juego(){
    document.open();
    document.write("<h1>✂📝🌚Que comiente el Juego✂📝🌚</h1>");
    document.write("<h2>Es al mejor de 3 rondas:</h2>");
    document.write("<button onclick=\"play('✂')\">✂</button>");
    document.write("<button onclick=\"play('📝')\">📝</button>");
    document.write("<button onclick=\"play('🌚')\">🌚</button>");
    document.close();
}

let puntos = 0;
let cont = 1;

function play(s){
    let arr = ['✂','📝','🌚'];
    let ico = arr[Math.floor(Math.random() * arr.length)];

    if( cont <= 3){
        if(ico === '✂'){
            //La maquina tiene tijeras
            document.body.innerHTML += '<h2>Ronda '+cont+':</h2>';
            if(s === '✂'){
                document.body.innerHTML += '<h3>EMPATE</h3>';
            }else if(s === '📝'){
                document.body.innerHTML += '<h3>PERDEMOS</h3>';
            }else if(s === '🌚'){
                document.body.innerHTML += '<h3>GANAMOS +1</h3>';
                puntos++;
            }
            cont++;
        }else if(ico === '📝'){
            //La maquina tiene papel
            document.body.innerHTML += '<h2>Ronda '+cont+':</h2>';
            if(s === '✂'){
                document.body.innerHTML += '<h3>GANAMOS +1</h3>';
                puntos++;
            }else if(s === '📝'){
                document.body.innerHTML += '<h3>EMPATE</h3>';
            }else if(s === '🌚'){
                document.body.innerHTML += '<h3>PERDEMOS</h3>';
            }
            cont++;
        }else if(ico === '🌚'){
            //La maquina tiene piedra
            document.body.innerHTML += '<h2>Ronda '+cont+':</h2>';
            if(s === '✂'){
                document.body.innerHTML += '<h3>PERDEMOS</h3>';
            }else if(s === '📝'){
                document.body.innerHTML += '<h3>GANAMOS +1</h3>';
                puntos++;
            }else if(s === '🌚'){
                document.body.innerHTML += '<h3>EMPATE</h3>';
            }
            cont++;
        }
    }else{
        if(puntos >= 2){
            document.body.innerHTML += '<h1>FINAL DEL JUEGO HAS GANADOO!</h1>';
            document.body.innerHTML += '<h1>Puntos: '+ puntos + '</h1>';
        }else{
            document.body.innerHTML += '<h1>HAS PERDIDO!!</h1>';
            document.body.innerHTML += '<h2>PARA VOLVER A JUGAR PULSA (F5)</h2>';
            document.body.innerHTML += '<h1>Puntos: '+ puntos + '</h1>';
        }
        
    }
}