// var studentData =[]
// function addStudent(){
//     var std ={
//         fi()rstName:prompt('Enter first Name'),
//         secondName:prompt('Enter second Name'),
//         age:prompt('Enter Age')
//     }
//     studentData.push(std)
//     console.log(studentData);
// }
// function checkStudent(){
//     var check = prompt('Enter check Student')
//     console.log(studentData[check].firstName,studentData[check].secondName);
// }

function userData(){
var name = document.getElementById('userName').value
var email = document.getElementById('userEmail').value
var password = document.getElementById('userPassword').value
localStorage.setItem('UserName',name)
 localStorage.setItem('UserEmail',email)
 localStorage.setItem('UserPassword',password)
 // console.log('Email',email.value);
 // console.log('Password',password.value);
}
 
function login() {
var eml =document.getElementById('loginEmail')
var pass =document.getElementById('loginPassword')

var localEml =localStorage.getItem('UserEmail')
var localPass =localStorage.getItem('UserPassword')

if(eml.value == localEml && pass.value == localPass){
    window.location.href = 'dashbord.html'
}else{
    alert('Invalid Email or Password')
}
}