# Hell Let Loose Artillery Calculator
Calculator for the Artillery in the Game Hell Let Loose

Meant to be used with your Numpad, either while the Game is running or directly

In order to send Keystrokes to the WebApp a keylogger on a node.js server is utilized


## Try it out now!
Visit [the github page](https://ospinner.github.io/hll-calculator/#/) to use the Calculator right now

## Basic Functionality
- WebApp using React+Typescript and TailwindCSS to create the Calculator
- Server using Keylogger.js, ExpressJS and WebSocket to send keypresses directly to the WebApp

## Use Numberkeys ingame
In order to be able to use your numbers ingame to type into the calculator you have to start the server
make sure you have [node](https://nodejs.dev/download) installed

- clone the repository
- open a cmd in the directory
- cd ./keylogger
- npm i
- node server.js
