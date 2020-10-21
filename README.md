# alles-web
A teeny-tiny Alles User API (Horizon) wrapper for WEB Javascript (not node.js)


## Instalation
You can either self host [`alles-web.js`](https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web.js) or grab it from the CDN:
  ```html
  <script src="https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web.js"></script>
  ```

## Usage

After you've included the script, you can easily use any of the APIs

### Synchronous

#### name + tag > id
```js
var id = alles.nametag(name, tag);
```
example:
```js
var id = alles.nametag("Edaz", "6521");
```

#### custom username > id
```js
var id = alles.username(customName);
```
example:
```js
var id = alles.username("Archie");
```

### id > user data
```js
var userData = alles.user(userId);
```
example:
```js
var userData = alles.user("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d");
```

### Asynchronous

Exactly the same as synchronous but methods return a Promise insted of being blocking

#### name + tag > id
```js
var id = alles.a_anametag(name, tag);
```
example:
```js
var id = alles.a_nametag("Edaz", "6521");
```

#### custom username > id
```js
var id = alles.a_username(customName);
```
example:
```js
var id = alles.a_username("Archie");
```

### id > user data
```js
var userData = alles.a_user(userId);
```
example:
```js
var userData = alles.a_user("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d");
```
