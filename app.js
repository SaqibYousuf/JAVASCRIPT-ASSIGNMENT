// chap 1
alert("Wellcome")
alert("Error! Please enter a valid password.")
alert("Welcome to JS Land " +"\r\n" + "Happy Coding! "  )

// chap 2
var username;
var myName = "Saqib Yousuf";

var message ="Hello World ";
alert(message)

alert("Jhone Doe")
alert("15 year old")
alert("Certified Mobile application Development") 

alert("pizza \r\n pizz \r\n piz \r\n pi \r\n p" )

var email = "Saqibyousuf001@gmail.com"
alert("My email address is " + email)

var book = "A smarter way to learn JavaScript"
alert ("I am trying to leran form the Book " + book)

document.write("Yah! I can write HTML content through JavaScript");

alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ")
// chap 3
var age = 19;
alert("I am " + age +" year old" )

var visits = 1;
alert("You have visited this site " + visits +" times" )

var birthYear = 2000;
document.write("<h1> My birth year is " + birthYear  +  "<br>  data type of my declared variable is number <br> <br> " )

var name = prompt('Enter Your Name')
var product = prompt('Which product you want')
var quantity = prompt('how much')

document.write("<h1>" + name +  "  odered " + quantity + product+"(s)" + " On XYZ Clothing store" )

// chap 4
var name = "Saqib";
fathername= "Yousuf";
age = 19;

document.write("<h1> Rules for naming JS variable </h1> <br><br>" + "variable names can only contain numbers $ and _. for example:$my_1stVariable <br>" +
"Variale must begin with a letter $ or _ . For example: $name._name or name <br>" + "Variable names are case senstive <br>" +
"Variable names should not be JS keywords" )

// chap 5
// === Assignment 5 
// Task 1 ===

var number1 = 7;
var number2 = 5;
var sum = a+b;

document.write("the sum of " + number1 + " and " + number2 + " is " + sum +"<br>")

// task 2


var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("Sum of " + number1 + " and " +number2 + " is " +  ((+number1)+(+number2)) )

var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("<br> Subtraction of " + number1 + " and " +number2 + " is " +  (number1-number2) )

var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("<br> MUltiplication of " + number1 + " and " +number2 + " is " +  (number1*number2) ) 

var number1 = prompt("enter your first number")
var number2 = prompt("enter your second number")
document.write("<br> division of " + number1 + " by " +number2 + " is " +  (number1/number2) ) 

// task 3
var number1 = "";
document.write("value after variable declaration is " + number1 +"<br>")
number1 = 5;
document.write("initial value: "+number1 + "<br>" )

var number1 = ++number1;
document.write("after increment "+number1 + "<br>" )

var number2 = 7;
var number3 = number1 + number2;
document.write("value after addition is:" + number3 + "<br>")

var number3 = --number3;
document.write("value after decrement is:" + number3+ "<br>" )

var number4 = number3%3;
document.write("remainder is:" + number4 +"<br> <br>")

// Task 4

var Price = 600;
var Qty = 5;
var totalprice = Price*Qty;
document.write("total cost to buy " + Quantity + " tickets to a movie is " + totalprice +"PKR"+ "<br> <br>" )

// Task 5 

var number_table = 4;
document.write(number_table + "x" + "1" + "= " + number_table*1 + "<br>" )
document.write(number_table + "x" + "2" + "= " + number_table*2 + "<br>" )
document.write(number_table + "x" + "3" + "= " + number_table*3 + "<br>" )
document.write(number_table + "x" + "4" + "= " + number_table*4 + "<br>" )
document.write(number_table + "x" + "5" + "= " + number_table*5 + "<br>" )
document.write(number_table + "x" + "6" + "= " + number_table*6 + "<br>" )
document.write(number_table + "x" + "7" + "= " + number_table*7 + "<br>" )
document.write(number_table + "x" + "8" + "= " + number_table*8 + "<br>" )
document.write(number_table + "x" + "9" + "= " + number_table*9 + "<br>" )
document.write(number_table + "x" + "10" + "= " + number_table*10 + "<br> <br>" )

// Task 6

var cel = 25;
var intoFarh =  (cel*9/5) + 32;
document.write(cel +"°C is " +  intoFarh + "°F" + "<br>")
var ferh = 70;
var intoCel = (ferh-32) * 5/9;
document.write(ferh +"°F is " +  intoCel + "°C" + "<br> <br>")

// Task 7

document.write("<h1> Shopping Cart</h1>")
var price1 = 650;
var qty1 = 3;
var price2 = 100;
var qty2 = 7;
var shipCharge = 100;
var ttlCost =  (price1 * qty1) + (price2 * qty2);
document.write("Price of item 1 is " + price1 +"<br>")
document.write("Quantity of item 1 is " + qty1+"<br>")
document.write("Price of item 2 is " + price2+"<br>") 
document.write("Quantity of item 2 is " + qty2+"<br> <br>")
document.write("total cost of your order is " + ttlCost+"<br> <br>")

// Task 8
var ttlMarks = 980;
var obt_Marks = 804;
var percentage = (obt_Marks/ttlMarks) * 100;
document.write("total marks:" + ttlMarks + "<br>")
document.write("marks obtain:" + obt_Marks + "<br>")
document.write("percentage:" + percentage + "<br>")

// chap 6-9
var a = 10
document.write("the value of a is " + a +"<br> <br>")

var a =  ++a 
document.write("The value  of ++a is " + a +"<br>" )
document.write("now the value of a is " + a +"<br> <br>" )

var a = a++
document.write("The value  of a++ is " + a +"<br> " )
var a =  ++a
document.write("Now the value of a is " + a +"<br> <br>" )

var a = --a
document.write("The value  of a++ is " + a +"<br> " )
document.write("Now the value  of a is " + a +"<br> <br> " )

var a = a--
document.write("The value  of a++ is " + a +"<br> " )
var a = --a
document.write("Now the value  of a is " + a +"<br> <br> " )

// question 2 
var a = 2;
document.write("a: " +a)
var b = 1; 
document.write("<br> b: " +b)
var result = --a - --b + ++b + b--;
document.write("<br> The result is: " + result )

// question 3
var name = prompt("Please enter your name: ")
document.write(" <br> Welcome to my js assignment  " + name + "<br>")

// question 5
var number = prompt("please enter your number:")

for( var i = 1; i <= 10; i++) {
    if (number != 0) {
        document.write(number + "x" + i + "=" + number*i + "<br>")

    } else {

            document.write("5" + "X" + i + "=" + 5*i +"<br>")

    }

}

// chap 9 - 11
// task 1
var city= prompt("Write your City name: ")
if (city=== "karachi") {
    alert("Welcome To City Of Lights")
}

// task 2 
var gender= prompt("Enter Your Gender: ")
if (gender=== "male" ) {
    alert(" Good Morning Sir")
} else if (gender=== "female") {
    alert(" Good Morning Ma'am")
}else {
    alert("Good Morning")
}

// task 3
var signal=prompt("Enter Signal Color")
if (signal=== "red") {
    alert("Must Stop")
} else if(signal=== "yellow") {
    alert("Ready to Move")
} else if(signal=== "green"){
    alert("Now Move")
}

// task 4 
var fuel= prompt("Enter your fuel in litre")
if (fuel <= "0.25" ) {
    alert("Please refill the fuel in your car")
}

// task 5
//  a
var a= 4; 
if (++a=== 5){ 
    alert("given condition for variable a is true");
 }

// b
var b= 82;
 if (b++=== 83)
 {
      alert("given condition for variable b is true");
 }

// c
var c= 12; 
if (c++=== 13){ 
    alert("condition 1 is true"); 
} 
if (c=== 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){
     alert("condition 3 is true"); 
} 
if(c=== 14) {
     alert("condition 4 is true"); 
}

// d
var materialCost= 20000; 
var laborCost= 2000;
var totalCost= materialCost + laborCost; 
if (totalCost=== laborCost + materialCost){
     alert("The cost equals"); 
}

// e
if (true){
     alert("True"); 
    } if (false){
         alert("False"); 
        }

// f
if("car" < "cat"){ 
    alert("car is smaller than cat"); 
} 

// task 6
var Maths= prompt("Please Enter Your Obtained Marks In Maths: ");
var Physics= prompt("Please Enter Your Obtained Marks In Physics: ");
var Chemistry= prompt("Please Enter Your Obtained Marks In Chemistry: ");    
var Obtained_marks= (+Maths) + (+Physics) + (+Chemistry);
var total_marks= 300;
var percetage= (Obtained_marks / total_marks) * 100 ;

document.write("<h1> Marks Sheet </h1>")
document.write("<br> Total Marks: " + total_marks)
document.write("<br> Obtained Marks: " + Obtained_marks)
document.write("<br> Percentage: " + percetage)
if (percetage <= "100" && percetage >= "80" ) {
    document.write("<br> Grade: A+")
    document.write("<br> Remarks: Weldone")
}else if (percetage < "80" && percetage >= "70") {
    document.write("<br> Grade: A")
    document.write("<br> Remark: Good")
} else if (percetage < "70" && percetage >= "60") {
    document.write("<br> Grade: B")
    document.write("<br> Remakrs: You Need More Practice")
} else if (percetage < "60" && percetage >= "50") {
    document.write ("<br> Grade: C")
    document.write("<br> Remakrs: You Need More Practice")
} else if ( percetage < "50" && percetage >= "40") {
    document.write("<br> Grade: D ")
    document.write("<br> Remakrs: You Need More Practice") 
} else if (percetage < "40" && percetage >= "33") {
    document.write("<br> Grade: E")
    document.write("<br> Remakrs: You Need More Practice")
} else if (percetage < "33") {
    document.write("<br> Grade: F <br> Failed")
    document.write("<br> Remakrs: You Need More Practice")
}

// task 9
var number = prompt("Enter your number");
if (number % 2 === 0 ) {
    alert("number is even")
} else{
    alert("number is odd")
}

// task 10
var temperature = prompt("Enter Temperature of your city")
if (temperature > 40){
    alert( "It is too hot outside." )
} else if (temperature > 30){
    alert("Today's Weather is Normal")
} else if (temperature > 20) {
    alert("Today's Weather is cool")
} else {
    alert("Today's Weather is so cool")
}

// task 11
var first_number = prompt("Enter Your First Number");
var Operator = prompt("Enter Operator");
var Second_number = prompt("Enter Your Second Number") ;
if (Operator === "+") {
    alert((+first_number) + (+Second_number))
} else if (Operator === "-") {
    alert((+first_number) - (+Second_number))
} else if (Operator === "*") {
    alert((+first_number) * (+Second_number))
} else if (Operator === "/") {
    alert((+first_number) / (+Second_number))
} else if (Operator === "%") {
    alert((+first_number) / (+Second_number) * 100 + "%")
} else {
    alert("Operator not found")
}

// chap 12-13
// task 2
var integer1 = prompt("Enter your First number:")
var integer2 = prompt("Enter your second number:")
if(integer1 > integer2) {
    alert(integer1)
} else if (integer2 > integer1){
    alert(integer2)
}else if (integer1 === integer2){
    alert("first number is equal to second number")
}

// task 3
var number = prompt("Enter Your Number")
if (number > 0 ){
    alert("Number is Positive")
} else if (number == 0 ) {
    alert("Your number is zero")
} else if(number < 0) {
    alert("number is Negative")
}

// task 4
var vowels = '^[aieouAIEOU].*'
var input = prompt("Enter any Word") 
var check = input.match(vowels)
if (check){
    alert("this word is vowel")
} else {
    alert("this is not vowel")
}

// task 5
var correct_password = "123abc"
var enter_password = prompt("Please Enter your Password")
if (enter_password === correct_password){
    alert("Correct! The password you entered matches the original password")
} else if (enter_password !== correct_password){
    alert("Password is Incorrect")
}else {
    alert("please enter your password")
}

// task 6
var greeting; 
var hour = 13;
 if (hour < 18) { 
    greeting = "Good day"; 
 }else{ 
 greeting = "Good evening"; 
} 

// task 7
var time = prompt("Enter Time in 24hour clock format")
if (time >= "00:00" && time < "12:00"  ){
    alert("Good Morning")
} else if (time >= "12:00" && time < "17:00"  ){
    alert("Good Afternoon")
} else if (time >= "17:00" && time < "21:00"  ){
    alert("Good Evening")
} else if (time >= "21:00" && time < "23:59"  ){
    alert("Good Night")
} 
// Chapter 21-25
// task 1
var first_name = prompt("Enter Your First Name: ")
var Last_name = prompt("Enter Your Last Name: ")
var full_name = first_name + " " + Last_name;
alert("Welcome " + full_name );

// task 2
var mobile = prompt("Enter Your Favourite Mobile Phone Name: ")
document.write("My Favorite phone is: "+mobile +"<br>") 
document.write("Length of string: " +mobile.length+"<br> <br>")

// task 3
var country = "Pakistani";
var n = country.indexOf("n")
document.write("String: "+country +"<br>")
document.write("inext of 'n': "+n+"<br><br>")

// task 4
var a = "Hello World";
var n = a.lastIndexOf("l");
document.write("String: "+a +"<br>")
document.write("inext of 'l': "+n+"<br><br>")

// task 5
var country = "Pakistani";
var n = country.charAt(3)
document.write("String: "+country +"<br>")
document.write("inext of 'n': "+n+"<br><br>")

// task 6
var first_name = prompt("Enter Your First Name: ")
var Last_name = prompt("Enter Your Last Name: ")
var full_name = first_name.concat(" " + Last_name)
alert("Welcome " + full_name );

// task 7
var city = "hyderabad"
var rep = city.replace("hyder" , "islam");
document.write("City: " + city + "<br>")
document.write("After replacement: " + rep + "<br>")

// task 8
var message = "Ali and Sami are best friends They play cricket and football together" ;
var replace = message.replace(/and/g, "&")
document.write(replace)

// task 9
var str = "472"
document.write("Value: "+ str + "<br>")
document.write("type: "+typeof(str) + "<br>")
var num = parseInt(str)
document.write("Value: "+ num + "<br>")
document.write("type: "+typeof(num) + "<br> <br>")

// task 10
var user = prompt("type a word to convert in capital: ")
var cap = user.toUpperCase();
document.write("User Inpur: " + user + "<br>")
document.write("Capital case: "+cap+ "<br> <br>")

// task 11
var user = prompt("Type a string: ")
var title_case = user.toLowerCase();
document.write("User Inpur: " + user + "<br>")
document.write("title case: "+title_case+ "<br> <br>")


// task 12
var number = 35.36;
var intostr =number.toString();
document.write("Number: "+intostr + "<br>")
document.write("Result: "+intostr.replace(".", "")+ "<br> <br>")

// task 13
var usr_name = prompt("enter your username: ")
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/ ;
if (usr_name.match(format)){
    alert("Enter a valid User Name")
}

// task 14
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var usr_input = prompt("Welcome to ABC Bakery,What do you want to order Sir/Ma'am?")
var items_odered = usr_input.toLowerCase();
for ( i = 0; i < items.length ; i++){
    if ( items[i] === items_odered) {
        document.write(items[i] + " is availabe at Index " + i + " in our bakery")

}else {
    document.write("Sorry not available")
}
}

// task 16
var university = "University of Karachi";
var arr = university.split("");
for (var i = 0 ; i < arr.length; i++){
    document.write(arr[i] +"<br>")
}

// task 17
var country = prompt("Enter your country name");
var countryLenght = country.length;
document.write("the last character is "+  country.charAt(countryLenght-1))

// task 18
var str = "The quick brown fox jumps over the lazy dog"
var intoLower = str.toLowerCase();
var count = intoLower.match(/the/g ).length;
document.write("There are " + count + " occurance(s) of 'the' ")

// Chapter 26-30
// task 1
var number = 3.45216;
var Floor = Math.floor(number);
var Round = Math.round(number);
var Ceil = Math.ceil(number)
document.write("Number: "+number +"<br>");
document.write("Floor: "+Floor+"<br>");
document.write("Round: " +Round+"<br>");
document.write("Ceil: "+Ceil+"<br>");

// task 2
var number = -3.45216;
var Floor = Math.floor(number);
var Round = Math.round(number);
var Ceil = Math.ceil(number)
document.write("Number: "+number +"<br>");
document.write("Floor: "+Floor+"<br>");
document.write("Round: " +Round+"<br>");
document.write("Ceil: "+Ceil+"<br><br>");

// task 3
var number = -3;
var absoulute = Math.abs(number);
document.write("The absolute value of "+ number + " is " +absoulute +"<br><br>")

// task 4
var number = Math.random();
var dice = (number*6) + (+1) ;
document.write("Random Dice Value: "+Math.floor(dice))

// task 5
var rand_number = Math.random();
var random = Math.floor((rand_number*2) + (+1));
document.write(random +"<br>")
if (random === 2){
    document.write("Random Coin Value Head <br>" )
}else if (random === 1){
    document.write("Random Coin Value Tail <br>" )
}

// task 6
var number = Math.random();
var randomNumber = (number*100)+ (+0.1);
document.write("random number between 1 and 100: "+Math.floor(randomNumber)) 

// task 8
var number = Math.random();
var scretnumbers = Math.floor( (number*10)+(+1));
document.write(scretnumbers)
var guess = prompt("Guess the number between 1 - 10: ");
if (guess === scretnumbers){
    alert("Congratulations User: ")
}else {
    alert("Try Again")
}

// Chapter 31-34
// task 1
var date = new Date();
document.write(date + "<br><br>")

// task 2
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date = new Date()
var thismonth =  months[date.getMonth()];

document.write("Current Month: " + thismonth +"<br><br>")

// task 3
var date = new Date();
var dateStr = date.toString();
var day = dateStr.slice(0,3);
document.write("Today Is "+day + "<br><br>")

// task 4
var date = new Date();
var dateStr = date.toString();
var day = dateStr.slice(0,3);
if (day === "Sun" || day === "Sat"){
        document.write("Its Fun Day "+ "<br><br>")
}

// task 5
var a = new Date();
var b = a.toString();
var date = b.slice(8,2);
var c = parseInt(date);
if (c <=15 ){
        document.write("The First Fifteen days of month "+ "<br><br>")
} else if (c >= 16){
    document.write("last Days Of Month" + "<br><br>")
}

// task 6
var date = new Date();
document.write("Curent Date: "+ date + "<br>")
var todaymili = date.getTime();
document.write("Milliseconds: "+todaymili+"<br>");
var todaymin = todaymili / (1000*60*60)
document.write("Minutes: "+todaymin+"<br><br>")

//  task 7
var date = new Date();
var time = date.getHours();
// document.write(time)
if (time < 12){
    alert("Its AM")
} else if (time >= 12 &&  time != 0) {
    alert("its PM")
}

// task 9
var date = new Date("June 18 2015");
var juneMili = date.getTime();
var todayDate = new Date();
var todayMili = todayDate.getTime()
var mili = todayMili - juneMili;
var days = mili/(1000*60*60*24)
document.write( Math.floor( days) + " days have passed since June 18 2015 <br><br>" )
// task 10
var date = new Date (" 2015" )
var refDate = new Date ("Sat Dec 2015 22:50:16")
var mili = date.getTime();
var refMili = refDate.getTime();
var diffmili = refMili - mili;
var sec = diffmili/(1000*60)
document.write(sec)

// chapter 35-38
// task 1 
function date () {
    var a = new Date()
    document.write(a);
}

date();

// task 2 
function FullName(){
   var firstName = prompt("enter your first name: ")
   var LastName = prompt("enter your last name: ")
   document.write(firstName+" " +LastName)


}
FullName();

// task 3
function sum (a,b){
    document.write((+a) + (+b))
}
var number = sum (prompt("enter first number") , prompt("enter second number"))

// task 4 
function calc (firstnumber,operator,secondnumber){
    if (operator === "+"){
        return (+firstnumber) +(+secondnumber)
    } else if (operator === "-"){
        return firstnumber - secondnumber
    } else if (operator === "/"){
        return firstnumber / secondnumber
    } else if (operator === "*"){
        return firstnumber * secondnumber
    } else{
        return "Operator Not Found"
    }
}

var answer = calc (prompt("enter your first number"),prompt("enter your operator"),prompt("enter your second number"))
document.write(answer)

// task 5
function sqaure (a){
    document.write(a * a)
}
var number = sqaure(prompt("enter your number: "))

// task 6
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 
var n = factorial(prompt("enter your number"))
document.write(n)

// task 7
function counting (start,end){
    for( var i = start ; i <=end ; i++){
        document.write(i + " ")
    }
}
var count = counting(prompt("counting starts at: "), prompt("counting ends at: "))

// task 8
function sqrhyp (base, perpendicular){
    var sqrHypotenuse = (base ) + (perpendicular )
    var Hypotenuse = Math.sqrt(sqrHypotenuse)
    document.write("Hypotenuse: "+Hypotenuse)
}
var hypotenuse = sqrhyp(Math.pow(prompt("value of base"),2),Math.pow(prompt("Value of Perpendicular"),2))

// task 9
function area (width= prompt("enter width"),height = prompt("enter Height")){
    var A = width * height
    document.write("Area of rectangle is "+A)

}
area();

// task 10
function palindrome(){
    var word = prompt("enter your word: ")
    var match = "";
    for(var i = word.length - 1; i >=0 ; i--){
        match += word[i]
    }

    if (match === word){
        document.write("this is palindrome word");
    }else {
        document.write("this is not palindrome")
    }
}
palindrome();

// task 11
function capital(a){
    var b = a;
    var uppercase = b.toUpperCase();
    document.write(uppercase)

} 
var str = capital(prompt("Write a sentence"))

// chap 38-42
// task 3
let a = 20;
let b = 20;
let c = 20;
let s = "";
let area = "";
function CalculateS() {
    s = ((+a) + (+b) + (+c))/2;
    console.log("S = " + (+s))

}
CalculateS()
function CalculateArea() {
 area = (s*(s-a)*(s-b)*(s-c))
 console.log("Area = " + (+area))

}
CalculateArea()

// task 4
let a = prompt("Enter Your Chemistry Marks")
let b = prompt("Enter Your Physics Marks")
let c = prompt("Enter Your Maths Marks")
function mainFunction(){
    Average()
    percentage()
    

}
function Average (){
    let Average = ((+a) + (+b) + (+c)) / 3;
    console.log("Average " + Average)
    
}

function percentage () {
    let totalMarks = 300
    let percentage = (((+a) + (+b) + (+c))/totalMarks)*100;
    console.log("Percentage " + percentage)
}
mainFunction()

// task 1
var a = 0
var b = 10
 
function increase(){
    while (a < b){
        console.log(a)
        a++

    }
    console.log(a)
}
increase()

// task 6
var sentence = "The quick brown fox jumps over the lazy dog"

function deleteVowel(){
   sentence = sentence.replace(/[aieouAIEOU]/g , "");
    console.log(sentence)
}
deleteVowel()

// task 8 
var distance = prompt("enter distance in KM")

function intoMeters() {
   distanceIntoMeter = distance*1000
    console.log(distance + "km " + " = " +  distanceIntoMeter + "m ")
}
intoMeters()

function intoFeet() {
    distanceIntoFeet = distance*3281
     console.log(distance + "km " + " = " +  distanceIntoFeet + "feet ")
}
intoFeet()

function intoInches() {
    distanceIntoInches = distance*39370
     console.log(distance + "km " + " = " +  distanceIntoInches + "Inches ")
}
intoInches()

function intoCentimeter() {
    distanceIntoCentimeter = distance*100000
     console.log(distance + "km " + " = " +  distanceIntoCentimeter + "Centimeter ")
}
intoCentimeter()




// chap 43-48
// task1
function task1() {
    alert('hi')
}

// task2
function task2(){
    alert('thanks for buying phone from us')
}
task 3

function Delete(){
    document.getElementById('Table').deleteRow(1)
}


// task 5
let a = 0; 
let vaLue = document.getElementById('vaLue')
function increase(){
a++
console.log(a)
console.log(vaLue.innerHTML = Number(a))
}
function decrease() {
    a--
    console.log(a)
console.log(vaLue.innerHTML = Number(a))

}

task 49-52

function expand(){
    var details =  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea voluptate corporis pariatur laborum rerum, quos hic voluptates recusandae odit? Magnam, ipsam iure. A expedita at nostrum natus, fugiat accusantium.';
document.getElementById("details").innerHTML = details
}

// chapter 58-67
// task 1 
var mainContent = document.getElementById("main-content")
console.log(mainContent)
console.log(mainContent.childNodes)

var render = document.getElementsByClassName('render')
console.log(render)

var firstName = document.getElementById('first-name').value = 'Saqib'
var lastName = document.getElementById('last-name').value = 'Yousuf'
var email= document.getElementById('email').value = 'Saqibyousuf001@gmail.com'


// task 2 
let type = document.getElementById('form-content')
console.log(type.nodeType)
let lastNameType  = document.getElementById('lastName')
console.log(lastNameType.nodeType)
console.log(lastNameType.childNodes)
let mainContent = document.getElementById('main-content')
console.log(mainContent.firstChild , mainContent.lastChild)












