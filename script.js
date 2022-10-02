var user=document.getElementById("user");
var pass=document.getElementById("pass");
var login=false;
var btn=document.getElementById("btn");
var list=document.getElementById("list");
var count=0;
var todos;
var table=document.createElement('table')
var thead=document.createElement('thead')
var tbody=document.createElement('tbody');
table.appendChild(thead)
table.appendChild(tbody)
document.getElementById('body').appendChild(table)
//table creation
var checkbox=[];
function createTable(){
       for(let i=1;i<201;i++){
        let row = document.createElement('tr');
        let row_data = document.createElement('td');
        checkbox[i]=document.createElement('input')
        checkbox[i].type="checkbox"
        checkbox[i].addEventListener('change',test)
        row_data.appendChild(checkbox[i])
        let row_2_data_2= document.createElement('td');
        var request=new XMLHttpRequest();
        request.open("GET","https://jsonplaceholder.typicode.com/todos")
        request.onreadystatechange=function(){
            if(this.readyState==4 & this.status==200){            
            todos=JSON.parse(this.responseText);
            row_2_data_2.innerHTML = todos[i-1].title;
            if(todos[i-1].completed==true){
                checkbox[i].disabled=true
                checkbox[i].checked=true                 
            }           
            }
        }
        request.send();
        row.appendChild(row_data);
        row.appendChild(row_2_data_2);
        tbody.appendChild(row);            
    }
}
createTable()
//redirecting to main page
function validate(){
    if(user.value == "admin" && pass.value == "12345"){
        login=true
        display(login)    
    }  
    else{
        login=false;
        display(login)
    }   
}
 function display(log){
    if(log){
        window.location.href = "main.html";
    }else{
        alert("invalid username or password")
    }
}
//completion of 5 tasks
function test(){
    let p= new Promise((resolve,reject)=>{
        if(this.checked==true){
            count++
            if(count==5){
                resolve()
            }
            
        }else{
            count--
            if(count!=5){
                reject()
            }
            
        }
    })
    
    p.then((message)=>{
        alert("Congrats. 5 Tasks have been Successfully Completed")
    }).catch((message)=>{
       
    })
}

