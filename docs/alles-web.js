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
 // alles-web.js
window.alles = (function () {
	var allesResponseCodes = {
		"unknown": "An unknown error occured with the Alles API.",
		"alreadySet": "This value has already been set and cannot be updated.",
		"badAuthorization": "The user is not signed in, or the token/keys/credentials are incorrect.",
		"badRequest": "Not all the required parameters were sent.",
		"billing.invalidPlan": "This subscription plan cannot be subscribed to as it is not valid.",
		"billing.unregistered": "This account does not have billing set up.",
		"email.invalid": "This email address cannot be used because it is invalid.",
		"internalError": "Something went wrong with the server. Contact support if this continues.",
		"micro.post.invalidUrl": "The url is not valid so it cannot be posted.",
		"micro.post.length": "The post content does not meet the length requirements.",
		"micro.post.notAuthor": "This action cannot be performed on this post because the user is not the author of it.",
		"micro.post.parent": "This reply cannot be posted because the parent does not exist.",
		"missingResource": "The data that was requested does not exist.",
		"notFound": "The page or endpoint does not exist.",
		"plusOnly": "You must have Alles+ in order to make this request.",
		"profile.name.tooLong": "This name cannot be set because it is too long.",
		"profile.name.tooMany": "This name is used by too many other users.",
		"profile.name.tooShort": "This name cannot be set because it is too short.",
		"profile.nickname.tooLong": "This nickname cannot be set because it is too long.",
		"profile.nickname.tooShort": "This nickname cannot be set because it is too short.",
		"profile.tag.invalid": "This tag cannot be set because it is invalid. Tags must be 4-digit integers between 0001 and 9999.",
		"profile.tag.unavailable": "This tag cannot be set because another user with the same name is using the tag.",
		"profile.username.invalid": "This username cannot be set because it does not match the requirements.",
		"profile.username.tooLong": "This username cannot be set because it is too long.",
		"profile.username.tooShort": "This username cannot be set because it is too short.",
		"profile.username.unavailable": "This username cannot be set because it is already in use by another user.",
		"pulsar.unsupportedVersion": "The Pulsar client is not permitted to access the API, since it is an unsupported version.",
		"quickauth.badToken": "The QuickAuth token is invalid.",
		"quickauth.unregisteredRedirect": "The redirect url cannot be used for security reasons because it is not registered to the application.",
		"session.badToken": "The session token provided is invalid.",
		"user.follow.self": "Users cannot follow themselves.",
		"user.password.incorrect": "This password is incorrect.",
		"user.password.length": "This password does not meet the length requirements.",
		"user.password.same": "This password cannot be set because it is the same as the current password.",
		"user.signIn.credentials": "These credentials are incorrect and cannot be used to sign in.",
		"user.xp.notEnough": "The user does not have enough xp to perform this action.",
		"archie.needs.to.fucking.enable.cors": "The owner/developer of Alles (Archie) has been too lazy to enable cors on this api so you'll just have to wait for him get off his ass and enable it."
	}
	function APIResponse(res) {
		var response = new Promise(function(resolve, reject){
			res.catch(function(err){
				var code = "archie.needs.to.fucking.enable.cors";
				return reject({					
					status: "error",
					errorMessage: allesResponseCodes[code],
					errorCode: code,
					response: null
				});
			}).then(function(res){
				return res.json();
			}).catch(function(err){
				var code = "unknown";
				return reject({					
					status: "error",
					errorMessage: allesResponseCodes[code],
					errorCode: code,
					response: null
				});
			}).then(function(data){
				var status = "success";
				var errorMessage = null;
				var code = null;
				if (data && data.err) {
					status = "error";
					if (allesResponseCodes.hasOwnProperty(data.err)) {
						errorMessage = allesResponseCodes[data.err];
						code = data.err;
					} else {
						code = "unknown";
						errorMessage = allesResponseCodes[code];
					}
				}
				var responseObj = {
					status: status,
					errorMessage: errorMessage,
					errorCode: code,
					response: data
				}
				if (data.err){
					return reject(responseObj);
				} else {
					return resolve(responseObj);
				}
			});
		});
		return response;
	}
	function aGetJson(url) {
		var options = {
			method: 'get'
		}
		return APIResponse(fetch(url, options));
	}
	var api = {
		user: {
			nametag: function(name, tag) {
				var res = aGetJson("https://horizon.alles.cc/nametag/" + encodeURIComponent(name) + "/" + encodeURIComponent(tag));
				return res;
			},
			username: function(username) {
				var res = aGetJson("https://horizon.alles.cc/username/" + encodeURIComponent(username));
				return res;
			},
			id: function(id) {
				var res = aGetJson("https://horizon.alles.cc/users/" + encodeURIComponent(id));
				return res;
			}
		},
		spotify: {
			allesId: function(id) {
				 var res = aGetJson("https://spotify.alles.cc/alles/" + encodeURIComponent(id));
				 return res;
			},
			id: function(id) {
				var res = aGetJson("https://spotify.alles.cc/spotify/" + encodeURIComponent(id));
				return res;
			}
		},
		discord: {
			allesId: function(id) {
				 var res = aGetJson("https://discord.alles.cc/alles/" + encodeURIComponent(id));
				 return res;
			},
			id: function(id) {
				var res = aGetJson("https://discord.alles.cc/discord/" + encodeURIComponent(id));
				return res;
			}
		}
	}
	return api;
})();
