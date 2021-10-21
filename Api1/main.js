var text=document.getElementById("chisteId");
var categoria=document.getElementById("categoriesDrop");
var cat=""

function callApi(){
    $.get("https://api.chucknorris.io/jokes/random",function(data){
        text.innerHTML=data.value;//text.value para inputs

    });
}

function callApi2(){
    $.get("https://api.chucknorris.io/jokes/categories",function(data){
        
    for (let index = 0; index < data.length; index++) {
        var option = document.createElement("li");
        option.onclick=()=>{onselect(data[index])};//
        var a = document.createElement("a");
        a.classList.add('dropdown-item');
        a.text=data[index];
        option.appendChild(a); 
        categoria.appendChild(option)

    }

    });
}

function onselect(categori){

    let b=document.getElementById("dropdownMenuButton1");
    cat=categori 
    b.innerHTML=cat
    
}

function callApiParameter(param){
    $.get("https://api.chucknorris.io/jokes/random?category="+param+"",function(data){
        text.innerHTML=data.value;//text.value para inputs

    });
}

function callApiParameter2(){

    callApiParameter(cat)
}

