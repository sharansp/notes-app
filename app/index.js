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
    handler: function(input){
        console.log('list notes')
    }
})

yargs.command({
    command:'read',
    describe:'read notes',
    handler: function(input){
        console.log('read notes')
    }
})

// console.log(yargs.argv)
yargs.parse()
