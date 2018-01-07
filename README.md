# The Montynode-project

## Description
A [Monty Hall problem](https://en.wikipedia.org/wiki/Monty_Hall_problem) demo.   

When using the API a complete game is run in one call.  

The game consists of the following steps:
- In search for Nessie an explorer arrives at the first lake
- A fisherman informs the player that Nessie is not in the second lake but it could be in the first or the third.
- The explorer switches to the third lake and searches for Nessie
- The result is presented 

When using the simulation a series of games are run and the statistics are presented.  

Is it true that two thirds of the time it is better to switch rather then staying?

## Requirements
git, a nodejs install and command-line knowledge

## Install
npm install

## Test
npm test

## Simulation
npm run sim

## Start server
npm start

## Run in development mode
Auto-restarts server on file save
npm run watch

## API use
http://localhost:3000/api/games/play
