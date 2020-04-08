const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {

    const notes = loadNotes()
    const isDuplicateNote = notes.filter(note => note.title === title)
    if(isDuplicateNote.length == 0){
        notes.push({title, body})
        saveNote(notes)
        console.log(chalk.green.inverse("New note added!"))
    }else{
        console.log(chalk.red.inverse("Note title already exists!"))
    }
}

const removeNote = (title) => {

    const notes = loadNotes()
    const updatedNotes = notes.filter(note => note.title !== title)

    if(notes.length>updatedNotes.length){
        console.log(chalk.red.inverse(`Note ${title} Removed!`))
        saveNote(updatedNotes)
    }else{
        console.log(chalk.red.inverse(`Note ${title} Doesn't exists!`))
    }
}

const readNote = (title) => {

    const notes = loadNotes()
    const notesToRead = notes.find(note => note.title == title)

    if(notesToRead){
        console.log(chalk.inverse(notesToRead.title+":\t"+notesToRead.body))
    }else{
        console.log(chalk.red.inverse(`Note ${title} Doesn't exists!`))
    }
}

const saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const listNotes = () => {
    const notes = fs.readFileSync('notes.json')
    const notesJson = JSON.parse(notes)
    notesJson.forEach(element => {
        console.log(chalk.yellow.inverse(element.title))
    });
}

const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch (error) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}