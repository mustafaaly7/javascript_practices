// var num =100.30123123;
// console.log(typeof num)
// // console.log(num.toFixed(3));
// var num1 = parseFloat(num)
// var num2 = parseInt(num)
// console.log(typeof num1 + num1.toFixed(3));
// console.log(typeof num2 + num2);




// var now = new Date().toString() 
// console.log(typeof now)
// console.log(now);
// console.log(now.slice(0,3));


// var now = new Date("17 april 2024")
// console.log(now);



// var now1 = new Date().toDateString(); // shows day and date 
// var now2 = new Date().toLocaleDateString(); // show only date
// var now3 = new Date().toTimeString();// time with global standard
// var now4 = new Date().toLocaleTimeString();// shows time only 
// var now5 = new Date().toLocaleString(); //shows both time and date with am pm


// console.log(now1);
// console.log(now2);
// console.log(now3);
// console.log(now4);
// console.log(now5);






// var dayOfweek = [ "sun" ,"mon","tue","thu","fri", "sat" ];
// var now = new Date().getDay();
// console.log(now);
// console.log(dayOfweek[now]);



// var months = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]
// var now = new Date().getMonth(); // shows month 0-11 
// console.log(now);
// console.log(months[now]);//make an array and put the names in there and use array to get the name of month i.e jan feb

// var now1 = new Date().getFullYear()// shows full year i.e 2024
// var now2 = new Date().getTime()  // shows millisecond from 1970 - current means change hota rahega
// var now3 = new Date().getMilliseconds()// shows milliseconds in a sec 0 - 999
// var now4 = new Date().getDate(); // shows date 1-31
// console.log(now1);
// console.log(now2);
// console.log(now3);
// console.log(now4);




// var dob = "28 march 2004";
// var dob2 = prompt("Enter Date of birth" , " 28 march 2004")
// var now = new Date();
// var pastDate = new Date(dob2);// will show day jo us date pr hoga i.e sun and time at 00 means raat ky baray baje jb 28 march huwi
// console.log(dob);
// console.log(now);
// console.log(pastDate); 




// HOW TO GET DIFFERENCE I.E YOUR AGE OR TIME DIFFEREnCE FROM ONE YEAR TO ANOTHER 
// var now = new Date();
// var dob = "28 july 2003";
// var pastDate = new Date(dob); // will show dob which is "28 july 2003"
// var pastDatemil = pastDate.getTime(); // 1970 - 2004 tk ky mili secs dikhaiga jo ruk chuke hain obv
// var nowMiliSec = now.getTime()// will show every mill sec from 1970 - current
// console.log("now Milli seconds" , nowMiliSec);
// console.log("date of birth ",dob);
// console.log("past date " ,pastDate);
// console.log("past date milli seconds",pastDatemil);

// var diff = nowMiliSec - pastDatemil; // NOW TIME 1970 TILL NOW (WHICH IS GREATER ) - TIME FROM 1970 -2004 (WHICH IS SMALLER VALUE)
// var result = diff / (1000* 60 * 60 * 24 * 365) // 1000 MILLI SEC * 60 SECONDS * 60 MINUTE *24 HOURS * 365 DAYS 
// console.log( Math.floor(result) , "years");


// --------> another example of how to get difference

// var date1 = prompt("Enter any date","28 july 2004")
// var date2 = prompt("Enter another date aswell ", "28 march 2003")
// var date1Millisec = new Date(date1).getTime();
// var date2Millisec = new Date(date2).getTime();
// console.log(date1Millisec);
// console.log(date2Millisec);
// var diff = date1Millisec - date2Millisec;
// var result = diff / (1000*60*60*24*365);
// console.log(Math.floor(result) + "years");





// --------------------> FUNCTION 
// SYNTAX
// function function_name(){
// block of codes/statements

// }
// -----> to call/invoke /trigger function
// Syntax
// FUNCTION_name()

// ------------> for example


// function abc(){
//     console.log("hi");
//     console.log("bye");
// }

// abc()


// function btn(imgElem){
//     var flag = false ; 
//     // console.log(imgElem.src);
//     // imgElem.src = "./images/on.jpg"
//     if( flag == false){
//         imgElem.src = "./images/on.jpg"
//         flag = true
// // console.log(flag);
// }else if (flag == true){
//         flag = false
//         imgElem.src = "./images/off.jpg"
//     }
// }

// toggle  BUTTON FUNCTION On show password Hide Password

// function pass(btnElem // this argument gets the compelete Html element jisme isko use krein to js){
// var password = document.getElementById("password")
// console.log(password.type , btnElem.innerHTML);
// if(password.type == "password"){
//     btnElem.innerHTML = "Hide"
//     password.type = "text"
// }else{
//     password.type = "password"
//     btnElem.innerHTML = "Show"
// }
// }






// function paraSet(aElem){
// // console.log(aElem)
// var para = document.getElementById("para")
// // console.log(para.innerHTML);
// if(aElem.innerHTML == "See More"){
//     para.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, repellendus atque voluptatibus explicabo tempora sint."
//     aElem.innerHTML = "See Less"
// }else{
//     aElem.innerHTML = "See More"
//     para.innerHTML = "Lorem ipsum dolor sit amet."
// }

// }

// function pass(btnElem){
//     var pass = document.getElementById("pass")
//     // console.log(btnElem.innerHTML , pass.value);
// if( btnElem.innerHTML == "Show"){
//     pass.type = "text"
//     btnElem.innerHTML = "Hide"
//     btnElem.style.backgroundColor ="red" // directly styling specific element using js or sirf function call hone pr krega ye work 
//     pass.style.backgroundColor = "black" // for styling background-color is written as backgroundColor ( camel case use hoga sirf )
//     pass.style.color = "white" // .style krke styling krskte hain ksi bh specific elemt ki via this argument or id or class html ki 

// }else{
//     pass.type = "password"
//     btnElem.innerHTML = "Show"
//     btnElem.style.backgroundColor ="blue"
//     pass.style.backgroundColor = "green"
//     pass.style.color = "yellow"

// }



// }

// function change(imgElem) {
//     console.log(imgElem.src);
//     if (imgElem.src == "file:///C:/Users/PC/Desktop/js%20practice/images/off.jpg") { // ye wala src important hai ig ye sir say puchna hay
//         imgElem.src = "./images/on.jpg"
//     } else {
//         imgElem.src = "./images/off.jpg"

//     }
// }




// how to style using classname in javascript


// function foo(){
// var head = document.getElementById("head")
// if(head.className == "show"){
//     head.className = "hide" // .classname get the class name from style.css and put all the properties of that into your element using js
// }else{
//     head.className = "show"
// }

// }


// function imgChange(imgElem){
// console.log(imgElem.src);
// if(imgElem.src == "file:///C:/Users/PC/Desktop/js%20practice/images/off.jpg"){
//     imgElem.className += "on" // ye dono classes ki properties upend / concade krdega / mix krdega
//     imgElem.src = "./images/on.jpg"

// }else{
//     imgElem.src = "./images/off.jpg"
// }

// }



// function imgChange(imgElem){
//     if(imgElem.className == "off"){
//         imgElem.className += " on" // for concading or chaning classes together use empty space or "spacebar" cuz it acts like a string and wont read if both the classes will be together withput space like a "onoff " instead do "on off" so they can be different classes
//     }else{
//         imgElem.className = "off"
//     }
// }




// function toggleImg() {
//     var image = document.getElementById("image")
//     // console.log("image", image.className)
//     // if (image.className == "show") {
//     //     image.className = "hidden"

//     // } else {
//     //     image.className = "show"

//     // }
//     var image = document.getElementById("image")
//     // console.log(image.className)
//     image.className += " border"
// }



// var para = document.getElementsByTagName("p") // means document / html mai sai jakai tag lekr aao 
// console.log(para.length);
// para[2].style.background = "red" // means 2nd index wale pr styling horhi hai 
//agr sb p tag pr krni hai same styling to loop lgegi 
// for(var i=0;i<para.length;i++){
    //     para[i].style.background = "red" // means "i" index wale pr styling horhi hai looping ki thru array length say km means last index tk 

    
// }

// ab agr sirf odd numbers pr styling krni hai tou

// for(i=0; i<para.length; i = i+2){
//     para[i].style.background = "green" // means sirf odd number  wale pr styling horhi hai 


// }



// now for even numbers wale p tagg pr styling ky liye 


// for(var i=0; i<para.length; i++){


//     if( i %2 === 1){
//         para[i].style.background = "red" // means 2nd index wale pr styling horhi hai 


//     }
// }




//  var arr = [[10,20,30],[40,50,60]]// multi dimensional array (2D array)
//  for(var i=0 ; i<arr.length; i++){ // nested loop 
//     for(var j=0 ; j<arr[i].length;j++)
//     console.log(arr[i][j]);
//  }



// during class practice



//search algortihm


// var userInput = prompt("enter Any fruit ")
// var arr = ["Apple", "Orange","Mango"]
// var flag = false ; 

// for(var i = 0 ; i<arr.length;i++){
// if(userInput.toLowerCase() === arr[i].toLowerCase()){
//     console.log("Yes we have that ");
//     flag = true
// break 

// }
// }
// if(flag === false ){
//     alert("Didnt Exist")
// }


// .replacement() method



// var para = "hello world, hello hello hello hello "
// var newPara = para.replace(/hello/g ,"n")
// alert(newPara )

// var userInput = prompt("Enter your name ")
// alert(userInput[0].toUpperCase()+userInput.slice(1).toLowerCase() )



// var arr2D = [[10,20,30],[40,50,60],[70,80,90]]
// for(var i = arr2D.length-1 ; i >=0 ;i--){
// for(var j= arr2D[i].length-1 ; j>=0 ; j--){
// console.log(arr2D[i][j]);
    
// }
// }


// saad malik 


// alert("Saad Malik")

// var arr=["Mamgo","Apple","Banana"];
// console.log(arr)
// for(i=0;i<=arr.length;i++)
//     {
//         console.log(arr[i])
//     }

//     var arr=["Mamgo","Apple","Banana"];
// // console.log(arr)
// for (i>=arr.length;i=0;i--){
//     console.log(arr[i])
// }


// var inp=prompt("Enter the Input")
// var arr=["mango","Banana","Apple"]

// var flag=false

// for (var i=0;i<arr.length;i++){
// if (inp.toLowerCase() === arr[i].toLowerCase()){
// console.log("EXIST");
// flag = true
// break

// }
// }
// if(flag == false){
//     console.log("User Not Exist")
// }






// var userCity = prompt("enter your city...").toLowerCase()
// var cities = ["karachi", "lahore", "multan"]

// var flag = false


// for (var i = 0; i < cities.length; i++) {
//     if (cities[i] == userCity) {
//         console.log("user city exists")
//         flag = true
//         break
//     }
//     console.log(cities[i])
// }

// if (flag === false) {
//     console.log("user city not exist ")
// }


// 12 may 2024 class work 


// var fruitsVeg = [["apple","mango","banana" ],["cucumber","potato","carrot"]]
// for(var i =0 ; i< fruitsVeg.length ; i++){
// console.log(fruitsVeg[i]);
// for(var j = fruitsVeg[i].length-1 ; j >=0 ;j--){
//     console.log(fruitsVeg[i][j]);
// }

// }


// var userName = prompt("Enter your username ")
// function user(user){
//     console.log(user);
// }


// user(userName)




// var greeting = prompt("hello nigga")
// function foo(salam){
//     console.log(salam);
// }
// var num = 99;

// function user(num1){
//     console.log(num1);
//     return num1;
// }
// var result = user(40)
// // console.log(result);






// There are two types of function 
// 1. predefined functions
// 2. userdefine functions
// there are two types of userdefined functions aswell
// a. parameterize function
// b. non parameterize function
// there are two types of parameterize function
// i . default parameterize
// ii . non -default parameterize
 


// ----------------------> E.g of default parameterize function

// function foo (num1 = 50, num2 = 60){
// console.log(num1 , num2);

// }

// foo(30) // means default value parameter mai deingey and still u can edit the value when passing the argument 
// // means default parameterize function mai parameter ki value jb default pass hogi tou woh just in case pass hogi





// we can also user prompt to give arguments (dynamic )
// E.g
// var userName = prompt("enter your name ")
// function foo(user){
//     console.log(user);
// }

// foo(userName) // means we pass the variable as the argument and used the prompt in it so its dynamic and changes everytime user refreshes the page


// -------------> hoister issue must discuss and make notes abt it at all cost ( we didnt studied it yet )
// let userName = "Mustafa"
//  function foo(){
//      console.log("1 Username ", userName);
//  userName = "ali"
// console.log("1 Username ", userName);

//  }
// foo()
//  console.log("2 Username " ,userName);



