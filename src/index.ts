#!/usr/bin/env node
import yargs from 'yargs/yargs'
const argv = yargs(process.argv.slice(2)).argv;

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
} else {
    console.log('Retreat from the xupptumblers!');
}
