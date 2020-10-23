# alles-web
A teeny-tiny Alles User API (Horizon) wrapper for WEB Javascript (not node.js)

[Live demo](https://edazpotato.github.io/alles-web "Click to see a live demo of the library's capabilities!")

**This library will always return a promise**

## Instalation

### Self hosting
Download the library:
- [Asynchronous](https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web.js)

### CDN
You can use the library from the CDN to get started quickly, but self hosting is recomened.
  ```html
  <script src="https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web.js"></script>
  ```

## Usage

After you've included the script, you can easily use any of the APIs

### Methods:

##### name + tag > id
```js
var id = alles.nametag(name, tag);
```
example:
```js
console.log(alles.nametag("Edaz", "6521"));
```

##### custom username > id
```js
var id = alles.username(customName);
```
example:
```js
console.log(alles.username("Archie"));
```

##### id > user data
```js
var userData = alles.user(userId);
```
example:
```js
console.log(alles.user("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d"));
```
