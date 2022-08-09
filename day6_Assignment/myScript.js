
var date =new Date();
var day= date.getDate();
var month=date.getMonth()+1;
var year =date.getFullYear();
document.write("Today Date:"+0+day+"/"+0+month+"/"+year);
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = weekday[date.getDay()];
document.write("<br>Today Day:"+day);

var name = window.prompt("Enter Your Name ");
    document.body.style.backgroundColor ="green";
    document.body.style.fonrstyle ="arial";
    document.body.style.textshadow ="darkpink";
    document.write("<br>"+"Your Name is : " );
    document.write(name.fontcolor("pink"));

    const num1 = parseInt(prompt('Entre the first number'));
    const num2 = parseInt(prompt('Entre the second number'));
    const sum = num1+num2;
    document.write(`<br>The sum of ${num1} and ${num2} is ${sum}`);
    const multiplication = num1*num2;
    document.write(`<br>The multiplication of ${num1} and ${num2} is ${multiplication}`);
    const subtraction = num1-num2;
    document.write(`<br>The subtraction of ${num1} and ${num2} is ${subtraction}`);
    const division = num1/num2;
    document.write(`<br>The division of ${num1} and ${num2} is ${division}`);