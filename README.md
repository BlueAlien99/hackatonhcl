# hackatonhcl

## navbar

In order to correctly include a navbar to a webpage:
* in `head` -> `<script src="navbar/navloader.js"></script>`
* in `body` -> `<script>loadNavbar('navbar', 1);</script>`

In `loadNavbar('navbar', 1)`:
* 1st parameter is a path to `navbar` folder
* 2nd paramter (optional) is position of a link that is active (green)

**PLEASE NOTE** that navbar **WILL NOT** be loaded if the webpage is opened as a local file. Please use *Live Server* extension for VS Code.