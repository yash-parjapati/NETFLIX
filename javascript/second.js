// let numgame=25;
//     let userNumber=prompt("enter the  guess game number  :");
//     while(numgame != userNumber){
//         usernumber=prompt("enter the number is wrong , try again   :");
//     }
//     // console.log("congractulation you guess the right num")

//strings

// let obj = {
//     item: "pen",
//     prize:10,
// };
// let output=`the obj is ${obj.item} is ${obj.prize} rupe`;
// console.log(output);

// que 1

// let fullname=prompt("enter the username without space");
// let username = "@" +fullname +  fullname.length;
// console.log(username);

// array

// let heros="["yash","aman","amankhan","akash","uday" ,"navjot","keshve"];
// for(let i=0; i<heros.length; i++){
//     console.log(heros[i]);
// }

// que   1

// let arr=[414,427,383,372,371];
// let avrage;
// let sum = [414+427+383+372+371 ];
// avrage=sum/arr.length;
// console.log(avrage);
// // arr.length;

// function

// function myfun(msg){
//     console.log(msg);
// }
// myfun("i love lavu");

// let div=document.querySelector("div");
// div.oneclick =()=>{
//     console.log("this is one click");
// }

// let div=document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are inside box");
// }
// let modebtn=document.querySelector("#mode");

// let curmode="light";


// modebtn.addEventListener("click", () =>{
// if(curmode === "light"){
//     curmode="Dark";
//     document.querySelector("body").style.background="red";
// }
// else
// {
//     curmode="light";
//     document.querySelector("body").style.background="yellow";
// }
// console.log(curmode);
// });

// class and object

// const student={
//     marks:"438937",
//     fullname:"yash kumar",
//      printmarks: function(){
//         console.log("marks is = ", marks);
//      },
// };

// const karan = { 
//     salery:"50000",
// };

// karan.__proto__=student; 

// class toyotacar{
//    start(){
//     console.log("start");
//    }
//    stop(){
//     console.log("stop");
//    }
// }
// let oddi = new toyotacar();


// class user{
//     constructor(name , email){
//         this.name=name;
//         this.email=email;
//     }

// }
// let student1=new user("name","yash@gmail,coom");
// let student2=new user("aman","yash@gmail,coom");

// 

// function getdata(dataid,nextdata){
//     setTimeout(() => {
//         if(nextdata){
//             nextdata();
//         }
//         console.log("data",dataid);
//     }, 2000);
// }

// getdata(1,() =>{
//     getdata(2, () =>{
//         getdata(3);
//     });
// });

let promise = new Promise(
    (resolve,reject)=>{
        console.log("i am a promise");
    }
)