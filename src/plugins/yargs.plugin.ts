import yargs, { boolean } from "yargs";
const {hideBin} = require ('yargs/helpers')



export const yarg = yargs(hideBin(process.argv))
.option(
    'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Multiplication table"
    },
)
.option(
    'l', {
        alias:'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    }
).option(
    's', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    }
).
option(
    'n', {
        alias: 'name',
        type: 'string',
        default: 'tabla.txt',
        describe: 'File name'
    }
).
option(
    'd', {
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'File destination'
    }
).
check(
    (yarg, option)=>{
        const value = yarg.b;
        if(value<0){
            throw new Error("Base must me positve")
        }
        else{
            return true
        }
    }
)
.parseSync();
