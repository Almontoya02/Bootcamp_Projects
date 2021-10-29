var listask=document.getElementById("listasks");



function callApi2(){

    listask.replaceChildren();
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        console.log(data)
    for (let index = 0; index < data.data.length; index++) {
        var btndelete= document.createElement("span")
        btndelete.classList.add("material-icons")
        btndelete.innerHTML="delete";
        btndelete.onclick= ()=> deleteTask(data.data[index].id,data.data[index].value)
        var task = document.createElement("div");
        task.classList.add("task")
        task.innerHTML=data.data[index].value;
        task.append(btndelete)
        task.appendChild(document.createElement("hr"))
        console.log(data.data[index].id)
        listask.appendChild(task)
    }

    });

}

function addTask(){
    listask.replaceChildren();
    let task=document.getElementById("task-item").value;

    $.post("https://immense-plateau-68535.herokuapp.com/add",
    {
        todoitem: task+"- Alejo2"
    },
    function(data){
        console.log(data)
    });
    callApi2();
}
callApi2();

function deleteTask(id,userName){
    listask.replaceChildren();
    nameAlejo= "-"+userName.split("-").pop();

    if(nameAlejo == "- Alejo"){

        $.post("https://immense-plateau-68535.herokuapp.com/remove",
        {
            todoitemId:id,
            userName:userName
        },
        function(data){
            console.log(data)
        });
        callApi2();
    }else{
        alert("No se puede eliminar, no es tu tarea")
        callApi2();
    }

}



