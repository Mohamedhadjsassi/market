const submit=document.getElementById('submit')
submit.addEventListener('click',function(e){
    e.preventDefault()
const username=document.getElementById('username').value
const password=document.getElementById('password').value
var users=JSON.parse(localStorage.getItem("users"))
let test=false
for(i of users){
   if ((username==i.name) && (password==i.password) ){
       test=true
       break
   }
}

if(test){
    alert('welcome')
    localStorage.setItem('username', username);
    
   // window.location.href = 'index.html?test=true';
    window.location.href = 'products.html?test=true';
}
else {
    alert('you are not registred')
}



}



)