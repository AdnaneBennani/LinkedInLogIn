
var myUsername = document.getElementById("user")
var myPassword = document.getElementById("pass")
var signinbtn = document.getElementById("signin")
var Notifplace = document.getElementById("NotifBox")
var showpastext = document.querySelectorAll(".showtext")
var myloader = document.getElementById("loading")
var forgpass = document.getElementById("forgetpass")
var allpassinputs = document.querySelectorAll("input#pass")

let mylogin =  [
    {Username : "Admin" , Password  : "Admin12" , isAdmin : true},
    {Username : "User"  , Password  : "User12",   isAdmin : false},
    {Username : "User3" , Password  : "User123",  isAdmin : false}
]


signinbtn.addEventListener("click",()=>{
    event.preventDefault()
    if(myUsername.value !== "" || myPassword.value !== "" ){
        let Exist = false;
        for(let i = 0 ; i<mylogin.length;i++){
            if(myUsername.value === mylogin[i].Username && myPassword.value === mylogin[i].Password){
                Exist = true
                if(mylogin[i].isAdmin == true){
                    var role = "Admin"
                }
                break;
            }
        }
        if(Exist && role == "Admin"){
            Succesmsg("Success",`Vous etes connecte ${myUsername.value}`)
            myloader.style.display = 'flex'
            setTimeout(()=>{
                window.open("adminpage.html","_self")
            },4000)
        }else if(Exist){
            Succesmsg("Success",`Vous etes connecte ${myUsername.value}`)
            myloader.style.display = 'flex'
            setTimeout(()=>{
                window.open("page2.html","_self")
            },4000)
        }else{
            Errormsg("Error","Username ou password Incorrect")

        }
    }else{
        Errormsg("Error","Username ou password vide")
    }
    console.log(myUsername.value)
})


// showpastext.addEventListener("click",()=>{
//     event.preventDefault()
//     allpassinputs.forEach((input)=>{
//         if(input.type == "password"){
//             input.type = "text"
//             showpastext.innerHTML = "hide" 
//         }else{
//             input.type = "password" 
//             showpastext.innerHTML = "Show" 
//         }
//     })
// })

// forgpass.addEventListener("click",()=>{
//     event.preventDefault()
//     localStorage.setItem("Usernamereset",myUsername.value)
//     window.open("passwordreset.html","_self")
// })



function Errormsg(title,msg){
    event.preventDefault()

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
    event.preventDefault()

    let nf = document.createElement('div')
    nf.classList.add('NotifSuccess')
    nf.innerHTML = `<div class = "flexi"><h2>${title}</h2><i class="fa-solid fa-circle-info"></i></div>
    <p>${msg}</p>`
    Notifplace.appendChild(nf)
    setTimeout(()=>{
        nf.remove();
    },4000)
}

