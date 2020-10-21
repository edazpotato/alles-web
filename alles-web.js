// alles-web.js
// Copyright (c) 2020 Edazpotato
window.alles = (function () {
  function getJson(url) {
    var json;
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        if (req.status === 200) {
          json = JSON.parse(req.responseText);
        } else {
          console.warn("An error with the Alles API occured :(")
          json = JSON.parse(req.responseText);
        }
      }
    }
    req.send();
    return json;
  }
  var alles = {
    /* Gets an alles user id by their name and tag */
    nametag: function(name, tag) {
      var res = getJson("https://horizon.alles.cc/nametag?name=" + encodeURIComponent(name) + "&tag=" + encodeURIComponent(tag));
      return res;
    },
    /* Gets an alles user id by their custom username */
    username: function(username) {
      var res = getJson("https://horizon.alles.cc/username/" + encodeURIComponent(username));
      return res;
    },
    /* Gets an alles user data by their alles id */
    user: function(id) {
      var res = getJson("https://horizon.alles.cc/users/" + encodeURIComponent(id));
      return res;
    }
  }
  return alles;
});
