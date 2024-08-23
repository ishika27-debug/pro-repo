var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var flag = 0
btn.addEventListener("click",function(){
    if (flag == 0){
    istatus.innerHTML = "friends"
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    flag = 1
    } else{
        istatus.innerHTML = "Mutual Friend"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
    flag = 0
    }

})
