// Copyright (c) 2020 Edazpotato
var id = {};
var user = {};
var displayingProfile = false;
var formEls = document.getElementsByTagName("form");
for (var i=0, el; el = formEls[i]; i++) {
	el.addEventListener("submit", handleSubmit)
}
async function handleSubmit(e) {
	e.preventDefault();
	if (e.target.id == "nametagForm") {
		var nametag = document.getElementById("nametag").value;
		var split = nametag.split("#")
		var name = split[0];
		var tag = split[1];
		id = await alles.nametag(name, tag);
		
	} else if (e.target.id == "usernameForm") {
		var username = document.getElementById("username").value;
		id = await alles.username(username);
	} else {
id = document.getElementById("id").value;
}
getUserData();
}
async function getUserData() {
	if (id.err) {
		return alert("An error occured: " + id.err)
	}
	user = await alles.user(id.id);
	updateProfile();
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
	var username = user.name + "#" + user.tag;
	if (user.username != null) {
		username = user.username;
	}
	var avatarUrl = "https://avatar.alles.cc/" + user.id;
	var el = document.getElementById("user");
	el.innerHTML = '<section clas="card"><img src="'+avatarUrl+'" class="avatar '+plus+'" title="'+titleText+'"/><aside class="words"><h1>'+user.nickname+'</h1><h4>@'+username+'</h4><p></p><p>'+user.id+'</p<</aside></section>';
}
