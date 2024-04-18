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




var dob = "28 march 2004";
var dob2 = prompt("Enter Date of birth" , " 28 march 2004")
var now = new Date();
var pastDate = new Date(dob2);// will show day jo us date pr hoga i.e sun and time at 00 means raat ky baray baje jb 28 march huwi
console.log(dob);
console.log(now);
console.log(pastDate); 
