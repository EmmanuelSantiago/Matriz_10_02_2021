
const matrix = [];
for (i = 0; i <= 5; i++ ){
    let info = [];
    for(j = 0; j <= 5; j++){
        info.push(i*j);
    }
    matrix[i] = info;
}
console.log(matrix);

const matriz = [];
let bandera = true, relleno = null;
for (let i = 0; i <= 8; i++) {
    let data = new Array(11).fill(relleno,0,11);
    for (let x = 0; x <= 10; x++) {
        if(i==3 && bandera){
            data = new Array(5).fill(relleno,0,6);
            data.unshift(relleno,'Emmanuel',['Santiago', 'Forero'],33, 8*100);
            bandera = false;
        }
    }
    matriz[i] = data;
}
console.log(matriz);
 