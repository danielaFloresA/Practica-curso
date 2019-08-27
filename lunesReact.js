
// Ejercicio 1
let people = ['Steve', 'Pete', 'Mike','Nick'];
let imprimir = ['Marcos','inicio',...people];
console.log(imprimir);
//Ejercicio 2
let user = { name:'Steve', age:22 };
let details = { place : 'Romania', hobby : 'reading' };

console.log(`unir ${details.place} con ${details.hobby}`);

//Ejercicio 3
let user1 = { name : 'Pedro', lastname : 'Poveda', details : {phone: 4553120, dir:'direction 123'} };
const mostrar = (user1.details);
console.log(`${mostrar.phone} ${mostrar.dir}`)


//Ejercicio 4
const users = [
    {id : 11, nombre: 'Adam', edad: 23, grupo: 'editor'},
    {id : 47, nombre: 'John', edad: 28, grupo: 'admin'},
    {id : 85, nombre: 'William', edad: 34, grupo: 'editor'},
    {id : 97, nombre: 'Oliver', edad: 28, grupo: 'admin'}
];
//Nombres con las letras 'ohn'

let filtrar = users.filter(usuario => {
    if (usuario.nombre == 'John'){
        return usuario;
    } 
});
console.log(filtrar);


//Ejercicio 5
const euros = [29.76, 41.85, 46.5];
const promedio = euros.reduce((moneda, valAcum) => moneda += valAcum);
const dividido = euros.length;
console.log(promedio/dividido);


//Ejecicio 6
/*CLASS AUTO
tipo = String,
año = number,
hasSoat = boolean

CLASS TOYOTA
modelo= 'Toyota praus'
toString() todos los atributos.
*/
//Esta parte tengo dudas
/*class Auto {
    constructor(info){
        this.tipo : info.tipo;
        this.año : 1992;
        this.hasSoat : true
    }
}
getTipo(){
    get.tipo = this.tipo;
}
setTipo(){
    set.tipo = 'Toyota praus';
}
class Toyota extends Auto{
    constructor(info){
        super
    }
}*/
