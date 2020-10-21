// alles-web.js
// Copyright (c) 2020 Edazpotato
window.alles = (function () {
  function getJson(url) {
    var json;
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onreadystatechange = function () {
      if (req.readyState === 4 && req.status === 200) {
        json = JSON.parse(xhr.responseText);
      }
    }
    req.send();
    return json;
  }
  var alles = {
    nametag: function(name, tag) {
      return;
    },
    username: function(username) {
      return;
    },
    user: function(username) {
      return;
    }
  }
  return alles;
});
