const notesUtility = require('./notes')
const yargs  = require('yargs')

yargs.command({
    command:'add',
    describe:'adding notes',
    builder:{
        title:{
            describe: 'note title',
            demandOption:true,
            type:'string'    
        },
        body:{
            describe: 'body desc',
            demandOption:true,
            type:'string'    
        }
    },
    handler: argv => {
        notesUtility.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove notes',
    builder: {
        title:{
            describe:"Remove note",
            demandOption: true,
            type:"string"
        }
    },
    handler: argv => {
        notesUtility.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list notes',
    handler: function(){
        notesUtility.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read notes',
    builder: {
        title:{
            describe:"read note",
            demandOption: true,
            type:"string"
        }
    },
    handler: function(argv){
        notesUtility.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()
