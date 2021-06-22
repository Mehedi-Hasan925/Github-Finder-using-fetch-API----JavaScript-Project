let srchBtn = document.querySelector("#searchBtn");
let srchUser = document.querySelector("#searchUser");
let ui = new UI();

srchBtn.addEventListener("click",getData);
function getData(e){
    e.preventDefault();
    let srcText = srchUser.value;
    if(srcText!=""){
        //fetch api
        //alert(srcText);
        fetch(`https://api.github.com/users/${srcText}`)
                .then(result => result.json())
            
        .then((result)=>{
            console.log(result);
            if(result.message=="Not Found"){
                //show alert
                ui.show_alert("No data found");
                ui.clear_profile();
            }
            else{
                //show profile
                ui.showProfile(result);
            }
        })
    }
    else{
        //clear prpfile
        ui.clear_profile();
    }
}