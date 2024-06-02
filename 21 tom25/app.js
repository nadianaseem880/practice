
// let userName="nadia"
// alert("username")
// let num=34
// alert(num)
// let isstudent= false
// console.log(isstudent)
// let userName1="kjl"
// alert("kjl")

// let userName="nadia naseem"
// alert("userName")
// let num=34
// alert(num)
// let mypapar=false
// console.log(mypapar)
// let num1=2+2
// alert(num1)

// let num2=6;
// let newnum2=++num2;
// console.log(num2)

let q1="java is a programing language"
let q2= "html means hyper text programing lanuage"
let q3="css is extrnal"
let q4="CSS means style caecade"
let q5=" css is use for colouring"


let a1="yes"
let a2="yes"
let a3="yes"
let a4="no"
let a5="yes"

let score=0
let total=5
alert("anwer the following question yes/no")

const response1=prompt(q1)
const response2=prompt(q2)
const response3=prompt(q3)
const response4=prompt(q4)
const response5=prompt(q5)

if(response1 === a1) {
    score++
}
if(response2=== a2) {
    score++
}
 
if(response3 === a3) {
    score++
}
 
if(response4 === a4) {
    score++
}
 
if(response5 === a5) {
    score++
}
 
 let percent=score/total*100
 alert(percent)