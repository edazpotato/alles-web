# alles-web
A teeny-tiny Alles User API (Horizon) wrapper for WEB Javascript (not node.js)

[Live demo](https://edazpotato.github.io/alles-web "Click to see a live demo of the library's capabilities!")

There are two versions of this library: Synchronous and Asynchronous.
The difference between the two is that Synchronous is blocking and has good browser support wheras Asynchronous is not blocking, returns a promise but has worse browser support.

## Instalation

### Self hosting
Download the version of the library that you wish to use:
- [Synchronous](https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web-sync.js)
- [Asynchronous](https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web-async.js)

### CDN
You can use the library from the CDN to get started quickly, but self hosting is recomened.
  ```html
  <!-- Synchronous -->
  <script src="https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web-sync.js"></script>
  <!-- Asynchronous -->
  <script src="https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web-async.js"></script>
  ```

## Usage

After you've included the script, you can easily use any of the APIs

### Synchronous
Standard version of the library. If you're unsure which version to use, use this one.

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

### Asynchronous

Exactly the same as synchronous but methods return a Promise insted of being blocking

##### name + tag > id
```js
var id = alles_a.nametag(name, tag);
```
example:
```js
console.log(alles_a.nametag("Edaz", "6521"));
```

##### custom username > id
```js
var id = alles_a.username(customName);
```
example:
```js
console.log(alles_a.username("Archie"));
```

##### id > user data
```js
var userData = alles_a.user(userId);
```
example:
```js
console.log(alles_a.user("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d"));
```
