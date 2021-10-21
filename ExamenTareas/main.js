var listask=document.getElementById("listasks");



function callApi2(){

    listask.replaceChildren();
    $.get("https://immense-plateau-68535.herokuapp.com/list",function(data){
        console.log(data)
    for (let index = 0; index < data.data.length; index++) {

        var task = document.createElement("div");
        task.classList.add("task")
        task.innerHTML=data.data[index];
        task.appendChild(document.createElement("hr"))
        console.log(data.data[index])
        listask.appendChild(task)
    }

    });

}

function addTask(){
    listask.replaceChildren();
    let task=document.getElementById("task-item").value;

    $.post("https://immense-plateau-68535.herokuapp.com/add",
    {
        todoitem: task+"-  Alejandro"
    },
    function(data){
        console.log(data)
    });
    callApi2();
}


