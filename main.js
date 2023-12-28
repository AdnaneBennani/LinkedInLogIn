var myUsername = document.getElementById("user")
var myPassword = document.getElementById("pass")
var signinbtn = document.getElementById("signin")
var Notifplace = document.getElementById("NotifBox")
var showpastext = document.getElementById("showpasswordtext")
var myloader = document.getElementById("loading")

let mylogin =  [{
    Username : "Admin",
    Password : "Admin12"
},{
    Username :"User",
    Password :"User12"
},{
    Username :"User3",
    Password :"User123"
}
]


signinbtn.addEventListener("click",()=>{
    // event.preventDefault()
    // for(let i = 0 ; i<=mylogin.length;i++){
    //     if(myUsername.value === mylogin[i].Username && myPassword.value === mylogin[i].Password){
    //         if(mylogin[i].Username === "Admin"){
    //             Succesmsg("Success",`Vous etes connecte Mr ${mylogin[i].Username}`)
    //             myloader.style.display = 'flex'
    //             setTimeout(()=>{
    //                 // window.open("adminpage.html","_self")
    //             },4000)
    //         }
    //         else{
    //             Succesmsg("Success",`Vous etes connecte Mr ${mylogin[i].Username}`)
    //             myloader.style.display = 'flex'
    //             setTimeout(()=>{
    //                 // window.open("page2.html","_self")
    //             },4000)
    //         }
    //     }
    //     else{
    //         Errormsg("Error","Username ou password invalid")
    //     }
    // }
})

showpastext.addEventListener("click",()=>{
    event.preventDefault()
    if(myPassword.type == "password"){
        myPassword.type = "text"
        showpasswordtext.innerHTML = "hide" 
    }else{
        myPassword.type = "password" 
        showpasswordtext.innerHTML = "Show" 
    }
})

function Errormsg(title,msg){
    let nf = document.createElement('div')
    nf.classList.add('NotifError')
    nf.innerHTML = `<div class = "flexi"><h2>${title}</h2><i class="fa-solid fa-circle-info"></i></div>
    <p>${msg}</p>`
    Notifplace.appendChild(nf)
    setTimeout(()=>{
        nf.remove();
    },4000)
}

function Succesmsg(title,msg){
    let nf = document.createElement('div')
    nf.classList.add('NotifSuccess')
    nf.innerHTML = `<div class = "flexi"><h2>${title}</h2><i class="fa-solid fa-circle-info"></i></div>
    <p>${msg}</p>`
    Notifplace.appendChild(nf)
    setTimeout(()=>{
        nf.remove();
    },4000)
}

