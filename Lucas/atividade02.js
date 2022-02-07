            //  0 1 2 3 4 5 6 7 8 9 
let numero = [1,2,3,4,5,6,7,8,9,10]
//let soma =Number(numero[0]) + Number(numero[1]) + Number(numero[3]) + Number(numero[4]) + Number(numero[5])
//console.log(soma)
//let somar =Number(numero[6]) + Number(numero[7]) + Number(numero[8]) + Number(numero[9]) 
//console.log(soma)
somametade1=0
somametade2=0
for(i=0; i < 5; i++){
    somametade1= somametade1 + numero[i]
}
console.log( somametade1)
for(i=0; i < 10; i++){
    somametade2= somametade2 + numero[i]
}
console.log( somametade2)

for(soma = somametade1 + somametade2){
console.log()
}