# Navale

## Intro

This is a Battleship implementation, in a 3D voxel cube.

## Features

1. Meta game.

- on a 9x9x9 3D grid, players place their fleet.
- each player (max: 3) can see two faces of a cube.
- still turn based :  
  1. target random location : 
  2. ... 
  3. profit (if it hit)

Notes:
- each voxel in the meta-grid is a 32x32x32 chunk in the game rendering + simulation world

2. Rendering

// todo

3. Game loop

// todo

## Specs:

https://fr.wikipedia.org/wiki/Bataille_navale_(jeu)

## Tech stack

### Languages 

* Golang 
* Typescript

### libraries / technologies

* Babylonjs
* WebSocket (? not yet, single player only)
* Redux
* React mithril

## How to install

    npm ci
    npm run start

### Server (go)

  go get github.com/golang/protobuf/proto
  go get github.com/gorilla/websocket

### Client (js)
