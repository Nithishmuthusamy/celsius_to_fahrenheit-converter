
var input1=document.getElementsByClassName("input1")[0];
var input2=document.getElementsByClassName("input2")[0];
var fun=function(){
    var option1=document.getElementsByClassName("option1")[0].value;
var option2=document.getElementsByClassName("option2")[0].value;
var value=document.getElementsByClassName("input1")[0].value;
    if(option1!==option2)
    {
        if(option1==="Celsius"){
            value=(input1.value*1.8)+32;
        }
        else if(option1==="Fahrenheit"){
            value=(input1.value-32)*(5/9);
        }
    }
    input2.value=value;
}