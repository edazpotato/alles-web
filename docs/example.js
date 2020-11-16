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
var id;
var user;
var song;
var spotifyIdVar;
var loadSpotifyData = false;
var displayingProfile = false;
const notyf = new Notyf({
  duration: 4500,
  position: {
    x: 'right',
    y: 'top',
  }
});
document.addEventListener("DOMContentLoaded", function(){
	var formEls = document.getElementsByTagName("form");
	for (var i=0, el; el = formEls[i]; i++) {
		el.addEventListener("submit", handleSubmit);
	}
	document.getElementById("spotify-toggle").addEventListener("change", function(e){
		loadSpotifyData = document.getElementById("spotify-toggle").checked;
		if (displayingProfile && loadSpotifyData) {
			getSpotify();
		}
	});
});
function handleSubmit(e) {
	e.preventDefault();
	try{clearTimeout(spotifyIdVar)}catch{}; // Clear timeout on spotify func if it exists
	NProgress.start();
	if (e.target.id == "nametagForm") {
		var nametag = document.getElementById("nametag").value;
		var split = nametag.split("#")
		var name = split[0];
		var tag = split[1];
		alles.user.nametag(name, tag).then(function(res){
			user = res.responce;
			getSpotify();
		});discordIdForm
	} else if (e.target.id == "usernameForm") {
		var username = document.getElementById("username").value;
		alles.user.username(username).then(function(res){
			user = res.responce;
			getSpotify();
		});
	} else if (e.target.id == "discordIdForm") {
		var discordId = document.getElementById("discordId").value;
		alles.user.discordId(discordId).then(function(res){
			NProgress.inc();
			alles.user.id(res.responce.id).then(function(res){
				user = res.responce;
				getSpotify();
			});
		});
	} else {
		id = {id: document.getElementById("id").value};
		alles.user.id(id.id).then(function(res){
			user = res.responce;
			getSpotify();
		});
	}
}

function getSpotify() {
	NProgress.inc();
	alles.spotify.id(user.id).then(function(data){
		song = data.responce.item;
		updateProfile();
	});
	if (loadSpotifyData) {
		spotifyIdVar = setTimeout(getSpotify, 2500);
	}
}

function updateProfile() {
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
	html = '<img src="'+avatarUrl+'" class="avatar '+plus+'" title="'+titleText+'"/><aside class="words"><h1>'+nickname+' ('+nametag+')</h1><h4>@'+username+'</h4><p>'+user.id+'</p></aside>';
	if (song) {
		artists = song.artists.map(function(artist){return artist.name;}).join(', ');
		html = html + '<aside class="song-container">Currently listening to <b>'+song.name+'</b> by <b>'+artists+'</b></aside>';
	}
	html = '<section clas="card">' + html + '</section>';
	el.innerHTML = html;
	displayingProfile = true;
	NProgress.done();
}
