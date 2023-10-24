function positiveSum(array) {
    let contador = 0;
    array.map((num) => {
    if( num >= 0){
    contador = num + contador;
    }
    })
    return contador;
}
module.exports = positiveSum;