# alles-web V0.2
This is a wrapper for all the CORS-enabled Alles API's. It's for use on the web (not node.js)

[Live demo](https://edazpotato.github.io/alles-web "Click to see a live demo of the library's capabilities!")

**All methods return a promise**

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

### API Reference

<details><summary>Methods</summary>
<details><summary>User methods</summary>
<details><summary>Alles name + Alles tag > Alles userData</summary> 

```js
var userData = alles.user.nametag(name, tag);
```
example:
```js
console.log(alles.user.nametag("Edaz", "6521"));
```
</details>
<details><summary>Alles custom username > Alles userData</summary>

```js
var userData = alles.user.username(customName);
```
example:
```js
console.log(alles.user.username("Archie"));
```
</details>
<details><summary>Alles ID > Alles userData</summary>

```js
var userData = alles.user.id(userId);
```
example:
```js
console.log(alles.user.id("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d"));
```
</details>
<details><summary>Discord ID > Alles discordData</summary>

```js
var userData = alles.user.discordId(discordId);
```
example:
```js
console.log(alles.user.discordId("569414372959584256"));
```
</details>
</details>
<details><summary>Spotify methods</summary>
<details><summary>Alles ID > listeningData</summary> 

```js
var listeningData = alles.spotify.id("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d");
```
example:
```js
console.log(alles.spotify.id("fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d"));
```
</details>
</details>
</details>
<details><summary>Responce types</summary>
All methods return an `APIResponce` object, which looks like this:
<details><summary>APIResponce</summary>
		
```js
{
	"status": "",        // Either 'success' or 'error'. If it is 'success' continue as normal. If it is 'error' consider showing errorMessage to your users.
	"errorMessage": "",  // This will have a human-readable (engligh) error message (will be null if there was not an eror).
	"responce": {}       // An object that contains the responce from that request, such as a `userData` or `listeningData` object.
}
```
example:
```json
{
	"status": "success",
	"errorMessage": null,
	"responce": {
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
	"id": "",                   // Alles user ID.
	"name": "",                 // User's name, i.e. Name#Tag.
	"tag": "",                  // User's discriminator tag, i.e. Name#Tag.
	"nickname": "",             // User's nickname (will be null if none exists).
	"username": ,               // Custom username, i.e. @Archie (will be null if none exists).
		"xp": {                     // XP object.
		"total": 420,           // User's total Alles XP.
		"level": 1,             // User's Alles level.
		"levelXp": 420,         // How much xp the user has toward the next level.
		"levelXpMax": 1000,     // The ammount of XP required to reach the next level.
		"levelProgress": 0.420  // Number that represnts the user's progress towards leveling up.
	},
	"plus": false,              // True if the user has Alles +, otherwise false.
	"createdAt": "",            // Timestamp of when the user first registered their Alles account.
	"cachedAt": ""              // Timestamp of when this data was last cached by the server.
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
<details><summary>listeningData</summary>

```js
{
	"alles": ""             // Alles user ID.
	"spotify": ""           // Spotify ID.
	"checkedAt": ""         // Timestamp of when the data was last checked with Spotify.
	"createdAt": ""         // Timestamp of when the user started listening to this song.
	"item": {               // Song object (null if the user isn't listening to anything right now)
		"id": ""            // Song ID.
		"name": ""          // Display name of the song.
		"playing": true     // True if the song is playing, false if it's paused.
		"progress": 123     // Number that indicates how far through the song the user is.
		"duration": 321     // Number that indicates the length of the song.
		"explicit": false   // True is the song is flaged as explicit, false if it isn't.
		"artists": [        // Array of objects with information about the song artists.
			{               // Artist object.
				"id": "",   // ID of the artist.
				"name": ""  // Display name of the artist.
			}
		]
	}
}
```
example:
```json
{
	"alles": "fbaf303e-8f5a-453e-aad6-6b7a0aea8a7d",
	"spotify": "j1q7eogtchl2avybqa78430ur",
	"checkedAt": "2020-11-12T06:59:46.000Z",
	"createdAt": "2020-10-28T03:11:21.000Z",
	"item": {
		"id": "0qcr5FMsEO85NAQjrlDRKo",
		"name": "Let It Go - From \"Frozen\"/Soundtrack Version",
		"playing": true,
		"progress": 1757,
		"duration": 223840,
		"explicit": false,
		"artists": [
			{
				"id": "73Np75Wv2tju61Eo9Zw4IR",
				"name": "Idina Menzel"
			}
		]
	}
}
```
</details>
</details>
</details>
