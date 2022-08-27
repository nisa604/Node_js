// const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command : 'remove',
    describe: "Removing a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);    // <======Here==============        
    }
})

yargs.command({
    command : 'list',
    describe: "Listing a Note",
    handler: function(argv){
        notes.listNotes();		
    }
})

yargs.parse()