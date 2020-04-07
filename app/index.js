
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
    handler: function(argv){
        console.log('title\t', argv.title)
        console.log('body\t', argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove notes',
    handler: function(input){
        console.log('removing notes')
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
