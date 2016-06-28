# Zalgurl v1.0

An attempt at building a Matrixified URL obfuscator that doesn't break the history state.

![He comes](https://raw.githubusercontent.com/Flowdeeps/Zalgo-URL/master/assets/img/zalgo.gif)

## Caveat

PLEASE consider testing this in a private browser pane or window as it will spam your history out of existence. It *does* break the history state at the moment. I'm looking at ways of getting the state popped back to a reasonable url but am failing at the moment. I think I'm pushing up against XSS security measures here so it might not be possible to do without flash or some other awfully dodgy technology interfering.

## Installation
Clone this repository as the basis of your new project.

Remove the .git folder and then git init as a new project. You're good to go.

$npm install

$bower install

$grunt build

$grunt watch

I use python's SimpleHTTPServer for most front-end
projects which you can use by navigating to the folder
holding your index and typing:

$python -m SimpleHTTPServer

## License
MIT
