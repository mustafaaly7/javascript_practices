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

function pass(btnElem){
    console.log(btnElem.innerHTML);
}











