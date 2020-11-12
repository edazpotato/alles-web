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

