//Punto 1
let anio = 0;
switch (anio) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;  
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;  
    default:
        console.log("No hay ni mas ni menos de 12 meses estas LOCO!!")
        break;
}

//Punto 2
let sn = "5"
switch (sn) {
    case "1":
        console.log( sn + " antes del parse "+ typeof sn);
        sn=parseInt(sn);
        console.log( sn + " despues del parse "+ typeof sn);
        break;
    case "2":
        console.log( sn + " antes del parse "+ typeof sn);
        sn=parseInt(sn);
        console.log( sn + " despues del parse "+ typeof sn);
        break;
    case "3":
        console.log( sn + " antes del parse "+ typeof sn);
        sn=parseInt(sn);
        console.log( sn + " despues del parse "+ typeof sn);
        break;
    case "4":
        console.log( sn + " antes del parse "+ typeof sn);
        sn=parseInt(sn);
        console.log( sn + " despues del parse "+ typeof sn);
        break;
    case "5":
        console.log( sn + " antes del parse "+ typeof sn);
        sn=parseInt(sn);
        console.log( sn + " despues del parse "+ typeof sn);
        break;
    default:
        console.log("Solo del 1 al 5");
        break;
}