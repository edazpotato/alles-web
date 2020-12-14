/*
 *
 * Copyright 2020 Edazpotato
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
 * files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, 
 * modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software 
 * is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
 // example.js
var id = null;
var user = null;
var displayingProfile = false;
const notyf = new Notyf({
  duration: 4500,
  position: {
    x: 'right',
    y: 'bottom',
  },
  ripple: false,
  dismissible: true
});
document.addEventListener("DOMContentLoaded", function(){
	var formEls = document.getElementsByTagName("form");
	for (var i=0, el; el = formEls[i]; i++) {
		el.addEventListener("submit", handleSubmit);
	}
});
function handleError(err) {
	notyf.error(err.errorMessage);
	NProgress.done();
}
function handleSubmit(e) {
	e.preventDefault();
	NProgress.start();
	if (e.target.id == "nametagForm") {
		var nametag = document.getElementById("nametag").value;
		var split = nametag.split("#")
		var name = split[0];
		var tag = split[1];
		alles.user.nametag(name, tag).catch(function(err){
			handleError(err);
		}).then(function(res){
			user = res.response;
			updateProfile();
		});
	} else if (e.target.id == "usernameForm") {
		var username = document.getElementById("username").value;
		alles.user.username(username).catch(function(err){
			handleError(err);
		}).then(function(res){
			user = res.response;
			updateProfile();
		});
	} else if (e.target.id == "discordIdForm") {
		var discordId = document.getElementById("discordId").value;
		alles.discord.id(discordId).catch(function(err){
			handleError(err);
		}).then(function(res){
			NProgress.inc();
			alles.user.id(res.response.id).catch(function(err){
				handleError(err);
			}).then(function(res){
				user = res.response;
				updateProfile();
			});
		});
	} else {
		id = {id: document.getElementById("id").value};
		alles.user.id(id.id).catch(function(err){
			handleError(err);
		}).then(function(res){
			user = res.response;
			updateProfile();
		});
	}
}

function updateProfile() {
	console.log("Updating profile")
	NProgress.inc();
	if (user.err) {
		return alert("An error occured: " + user.err)
	}
	var plus = "";
	var titleText = "This user doesn't have Alles + :(";
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
	html = '<img src="'+avatarUrl+'" class="avatar '+plus+'" title="'+titleText+'"/><aside class="words"><h1 class="word">'+nickname+' ('+nametag+')</h1><h4 class="word">@'+username+'</h4><p class="word">'+user.id+'</p></aside>';
	html = '<a class="pfp-link" href="https://alles.cx/'+encodeURIComponent(user.id)+'" rel="noopener" target="_blank"><section clas="card">' + html + '</section></a>';
	el.innerHTML = html;
	displayingProfile = true;
	NProgress.done();
}
