
function method1(name){

    console.log(name);

}
method1("Alejandro");

function method2(num1,num2){
    console.log("Suma:", (Number(num1)+Number(num2)));
}
method2(2,3);

function method3(num1,num2){
    console.log("Resta:", (Number(num1)-Number(num2)));
}
method3(2,3);

function method4(num1,num2){

    if(typeof num1 === 'number' &&  typeof num2 === 'number'){
        console.log("Multiplicación:", (Number(num1)*Number(num2)));
    }else{
        console.log("No es posible realizar la operación")
    }
}
method4("sad",3);
method4(2,3);

function method5(num1,num2){
    console.log("División:", (Number(num1)/Number(num2)));
}
method5(2,3);

function area(radio){
    let circleArea=Math.PI*Math.pow(radio,2)
    console.log("Area:"+circleArea+" m^2")
}

area(2);

function metersTokilometers(meters){
    console.log(meters+" a km es:"+meters/1000+"km");
}

metersTokilometers(2);

function CelsiusToF(celcius){
    let Faren= (celcius*9/5)+32;

    console.log(celcius+" a Fahrenheit es: "+Faren+" F")
}
CelsiusToF(20);

function lists(list){
    let higher=0;
    let less=999999;
    for (let index = 0; index < list.length; index++) {

        if(list[index]>=higher){
            higher=list[index];
        }else if(list[index]<=less){
            less=list[index];
        }
    }
    console.log("mayor: "+higher+"/menor: "+less)
}

const list1 = [10,4,2,20,5];
const list2 = [0,0,0,1,0];
const list3 =[-13,10,9,8,0,2000,-1]
lists(list1);
lists(list2);
lists(list3);

function exponent(base,exponente){
  console.log("valor exponencial: "+Math.pow(base,exponente))
}
exponent(3,3);

function petition(){
    let times =prompt("ingrese la cantidad de veces");

    if(times==null || times =="" || !Number.isInteger(Number(times))){
        alert("Ingrese información valida");
    }else{
        
        let countrys=[];
        for (let index = 0; index < times; index++) {
            let country=prompt("Ingrese país");
            if(country==null || country ==""){
                alert("Ingrese información valida");
                break;
            }else{
             countrys[index]=country;
            }
        }

        for (let index = 0; index < countrys.length; index++) {
            
            alert(countrys[index]+" número de letras "+ countrys[index].length)
            
        }
    }
    
}

petition();
