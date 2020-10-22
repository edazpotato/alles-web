// alles-web.js
// Copyright (c) 2020 Edazpotato
window.alles_a = (function () {
  function aGetJson(url) {
    return fetch(url).then((res) => res.json());
  }
  var alles = {
	nametag: function(name, tag) {
      var res = aGetJson("https://horizon.alles.cc/nametag?name=" + encodeURIComponent(name) + "&tag=" + encodeURIComponent(tag));
      return res;
    },
    /* Gets an alles user id by their custom username but is async */
    username: function(username) {
      var res = aGetJson("https://horizon.alles.cc/username/" + encodeURIComponent(username));
      return res;
    },
    /* Gets an alles user data by their alles id but is async */
    user: function(id) {
      var res = aGetJson("https://horizon.alles.cc/users/" + encodeURIComponent(id));
      return res;
    }
    
  }
  return alles;
})();

