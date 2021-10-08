function saludar(name){

    alert("Hellooooooooooooooooooooo "+name);
}

function sayHiToAnyPerson(){
    const personName = prompt("Ingrese nombre","nombre");
    if(personName==null){
        saludar("No ingresó nombre we");
    }
    else{
        saludar(personName);
    }

}

sayHiToAnyPerson();