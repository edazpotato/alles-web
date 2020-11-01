// alles-web.js
// Copyright (c) 2020 Edazpotato
window.alles = (function () {
  function aGetJson(url) {
    var json = fetch(url).then((res) => res.json());
    if (json.err != undefined) {
      console.warn("An error occured while fetching data from the Alles API :(")
    }
    return json;
  }
  var alles = {
	nametag: function(name, tag) {
      var res = aGetJson("https://horizon.alles.cc/nametag/" + encodeURIComponent(name) + "/" + encodeURIComponent(tag));
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
