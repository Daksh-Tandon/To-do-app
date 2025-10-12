let btadd = document.getElementById("add");
let inp = document.getElementById("task");
let op = document.querySelector(".orderd");
let count = 0;
let log=document.getElementById("login");
let username = localStorage.getItem("username");
let box=document.querySelector(".box");

if (username) {
  document.querySelector("h1").textContent = `Welcome back, ${username}!`;
  log.textContent = "Logout";
  box.style.display="flex";
 
}
else{
    alert("pls login to use to do app");
    box.style.display="none";
}
log.addEventListener("click", () => {
  if (log.textContent === "Login") {
    let name = prompt("Enter your name to login:");
    let p=prompt("enter your password");
    if (name!="" && name.trim()!= "" && p.trim()!="") {
      localStorage.setItem("username", name.trim());
      localStorage.setItem("value",p.trim());
      document.querySelector("h1").textContent = `Welcome, ${name}!`;
      log.textContent = "Logout";
       box.style.display="flex";
    } else {
      alert("Please enter a valid name!");
    }
  } else {
    document.querySelector("h1").textContent = "Welcome to our To Do App";
     box.style.display="none";
    log.textContent = "Login";
    localStorage.removeItem("username");
    localStorage.removeItem("value");
    
  }
});

btadd.addEventListener("click", check);

function check() {
    if (inp.value.trim() === "") {
        alert("Please enter the text");
    } 
    else if (count >= 10) {
        alert("You have crossed the maximum number of tasks");
        inp.value = "";
    } 
    else {
        let li = document.createElement("li");
        li.innerText = inp.value;
        li.style.marginTop = "10px";
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        let del = document.createElement("button");
        del.id = "delete";
        del.addEventListener("click", () => {
            li.remove();
            count--;
        });
        li.appendChild(del); 
        op.appendChild(li);
        inp.value = "";
        count++;
  }
}
