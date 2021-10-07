var number1 = 0;
var number2 = 0;
var result1=0;

function add(){
    number1= $("#number-1").val();
    number2= $("#number-2").val();
    result1= Number(number1)+Number(number2);
    console.log(result1);
}
function substract(){
    number1= $("#number-1").val();
    number2= $("#number-2").val();
    result1= Number(number1)-Number(number2);
    console.log(result1);
}
function result(){
    $("#result-text").val()=result1;
}