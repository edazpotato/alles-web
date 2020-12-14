# alles-web V0.4
This is a wrapper for all the public information Alles API's. It's for use on the web (not node.js).

[Live demo](https://edazpotato.github.io/alles-web "Click to see a live demo of the library's capabilities!")

> If you tany method rejects with this error code: `archie.needs.to.fucking.enable.cors` it's because the Alles API developers have dropped (or not yet added) CORS support on that API. Go bug them about it on [thir discord server]().

## Instalation

### Self hosting
Download the library:
- [From github](https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web.js)

### CDN
You can use the library from the CDN to get started quickly, but self hosting is recomened.
  ```html
  <script src="https://raw.githubusercontent.com/edazpotato/alles-web/main/alles-web.js"></script>
  ```

## Usage

After you've included the script, you can easily use any of the APIs.
All the mothds return a pending promise, with an *APIResponse* object. If the request succeeds then the promise will resolve. If the request fails somehow (i.e. user isn't found), then the promise will reject. You'll get an *APIResponse* object either way, but but the *response* prop might be undefined if it rejects.
### API Reference

<details><summary>Methods</summary>

Methods are sorted by what service they intergrate with. `alles.user` methods intergrate with the core Alles User system, `alles.discord` methods intergrate with the Alles Discord Account linking system.
<details><summary>User methods</summary>
<details><summary>Alles User Name (different from Custom Username) + Alles User Tag > Alles userData</summary> 

```js
var userData = alles.user.nametag(name, tag);
```
example:
```js
alles.user.nametag("Edaz", "6521").catch(err=>console.error(err)).then(data=>console.log(data));
```
</details>
<details><summary>Alles Custom Username > Alles userData</summary>

```js
var userData = alles.user.username(customName);
```
example:
```js
alles.user.username("Archie").catch(err=>console.error(err)).then(data=>console.log(data));
```
</details>
<details><summary>Alles ID > Alles userData</summary>

```js
var userData = alles.user.id(userId);
```
example:
```js
alles.user.id("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d").catch(err=>console.error(err)).then(data=>console.log(data));
```
</details>
</details>
<details><summary>Discord methods</summary>
<details><summary>Alles ID > Alles discordData</summary>

```js
var discordData = alles.discord.allesId(allesId);
```
example:
```js
alles.discord.allesId("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d").catch(err=>console.error(err)).then(data=>console.log(data));
```
</details>
<details><summary>Discord ID > Alles discordData</summary> 

```js
var userData = alles.discord.id(discordId);
```
example:
```js
alles.discord.id("569414372959584256").catch(err=>console.error(err)).then(data=>console.log(data));
```
</details>
</details>
</details>
<details><summary>Response types</summary>

All methods return an `APIResponse` object, which looks like this:
<details><summary>APIResponse</summary>
		
```js
{
	"status": "",        // Either 'success' or 'error'. If it is 'success' continue as normal. If it is 'error' consider showing errorMessage to your users.
	"errorMessage": "",  // This will have a human-readable (english) error message (will be null if there was not an eror).
	"errorCode": "",     // This ill be the error code that corolates with the error message so that you can implemnt your own error messages or translate them
	"response": {}       // An object that contains the response from that request, such as a `userData` or `listeningData` object.
}
```
example:
```json
{
	"status": "success",
	"errorMessage": null,
	"errorCode": null,
	"response": {
		"id": "00000000-0000-0000-0000-000000000000",
		"name": "Archie",
		"tag": "0001",
		"nickname": "Archie",
		"username": "archie",
		"xp": {
			"total": 3994,
			"level": 4,
			"levelXp": 694,
			"levelXpMax": 1300,
			"levelProgress": 0.5338461538461539
		},
		"plus": true,
		"createdAt": "2020-02-28T23:06:08.000Z",
		"cachedAt": "2020-11-12T07:11:56.000Z"
	}
}
```
</details>
<details><summary>userData</summary>

```js
{
	"id": "",                       // Alles user ID.
	"name": "",                     // User's name, i.e. Name#Tag.
	"tag": "",                      // User's discriminator tag, i.e. Name#Tag.
	"nickname": "",                 // User's nickname (will be null if none exists).
	"username": ,                   // Custom username, i.e. @Archie (will be null if none exists).
		"xp": {                 // XP object.
		"total": 420,           // User's total Alles XP.
		"level": 1,             // User's Alles level.
		"levelXp": 420,         // How much xp the user has toward the next level.
		"levelXpMax": 1000,     // The ammount of XP required to reach the next level.
		"levelProgress": 0.420  // Number that represnts the user's progress towards leveling up.
	},
	"plus": false,                  // True if the user has Alles +, otherwise false.
	"createdAt": "",                // Timestamp of when the user first registered their Alles account.
	"cachedAt": ""                  // Timestamp of when this data was last cached by the server.
}
```
example:
```json
{
	"id": "fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d",
	"name": "Edaz",
	"tag": "6521",
	"nickname": "ΣDΛZ",
	"username": null,
	"xp": {
		"total": 954,
		"level": 1,
		"levelXp": 954,
		"levelXpMax": 1000,
		"levelProgress": 0.954
	},
	"plus": false,
	"createdAt": "2020-10-16T21:06:41.000Z",
	"cachedAt": "2020-11-12T06:56:57.000Z"
}
```
</details>
<details><summary>discordData</summary>

```js
{
	"alles": "",                   // Alles user ID.
	"discord": "",                 // Discord user ID.
	"createdAt": ""                // Timestamp of when the user first linkeed their Alles and Discord accounts.
}
```
example:
```json
{
	"alles": "fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d",
	"discord": "569414372959584256",
	"createdAt": "2020-10-28T03:11:21.000Z"
}
```
</details>
</details>
</details>
