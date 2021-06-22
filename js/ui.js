class UI{
    constructor(profile){
        this.profile = document.querySelector("#profile");
    }
    showProfile(user){
        this.profile.innerHTML = `
        
      <div class="row m-3">
        <div class="card col-md-3">
          <img src="${user.avatar_url}" class="img-fluid">
          <div class="card-body">
            <a href="#" class="btn btn-primary btn-block">View Profile</a>
          </div>
        </div>
        <div class="card col-md-8 ml-2">
        <div class="row">
        <span class="btn btn-primary text-white ml-1">public repos: ${user.public_repos}</span>
        <span class="btn btn-secondary text-white ml-1">public gists: ${user.public_gists}</span>
        <span class="btn btn-success text-white ml-1">followers: ${user.followers}</span>
        <span class="btn btn-info text-white ml-1">following: ${user.following}</span>
        </div>
        
        <br><br>
            <ul class="list-group">
                <li class="list-group-item">company: ${user.company}</li>
                <li class="list-group-item">website/blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.updated_at}</li>
            </ul>
        </div>
      </div>    
        `
    }

    show_alert(message){
      let div = document.createElement("div");
      div.className = "showalert bg-danger text-center";
      let container = document.querySelector(".container-fluid");
      let row = document.querySelector("#main_row");
      div.appendChild(document.createTextNode(message));
      container.insertBefore(div,row);
      setTimeout(function(){
        div.remove();
      },3000);
    }

    clear_profile(){
      this.profile.innerHTML="";
    }
}