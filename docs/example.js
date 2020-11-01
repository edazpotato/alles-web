// Copyright (c) 2020 Edazpotato
var id = {};
var user = {};
var displayingProfile = false;
var formEls = document.getElementsByTagName("form");
for (var i=0, el; el = formEls[i]; i++) {
	el.addEventListener("submit", handleSubmit)
}
function handleSubmit(e) {
	e.preventDefault();
	if (e.target.id == "nametagForm") {
		var nametag = document.getElementById("nametag").value;
		var split = nametag.split("#")
		var name = split[0];
		var tag = split[1];
		alles.nametag(name, tag).then(function(res){
			id = res;
			getUserData();
			console.log("Nametagged!")
		});
	} else if (e.target.id == "usernameForm") {
		var username = document.getElementById("username").value;
		alles.username(username).then(function(res){
			id = res;
			getUserData();
			console.log("Usernamed!")
		});
	} else {
		id = {id: document.getElementById("id").value};
		getUserData();
		console.log("Ided!")
	}

}
function getUserData() {
	if (id.err) {
		return alert("An error occured: " + id.err)
	}
	alles.user(id.id).then(function(res){
		user = res;
		updateProfile();
	});
}
function updateProfile() {
	if (user.err) {
		return alert("An error occured: " + user.err)
	}
	var plus = "";
	var titleText = "This user doesn't have Alles+ :(";
	if (user.plus) {
		plus = "plus";
		titleText = "✨ This user has Alles+ ✨";
	}
	var nametag = user.name + "#" + user.tag;
	var username = "";
	if (user.username != null) {
		username = user.username ;
	} else {
		username = user.id
	}
	var nickname = user.name;
	if (user.nickname != null) {
		nickname = user.nickname;
	}
	var avatarUrl = "https://avatar.alles.cc/" + user.id;
	var el = document.getElementById("user");
	el.innerHTML = '<section clas="card"><img src="'+avatarUrl+'" class="avatar '+plus+'" title="'+titleText+'"/><aside class="words"><h1>'+nickname+' ('+nametag+')</h1><h4>@'+username+'</h4><p></p><p>'+user.id+'</p<</aside></section>';
}
