let notes = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {title, note} = req.body;
        let finishedNote = {
            id: id,
            title: title,
            note: note
        }
        notes.push(finishedNote);
        id++;
        res.send(notes) 
    },
    read: (req, res) => {
        res.status(200).send(notes)
    },
    update: (req, res) => {
        let updateID = notes.findIndex((e) => {
            console.log('e', e);
            console.log('req.params.id',req.params.id);
            return e.id == req.params.id
        })
        console.log(updateID);
        notes[updateID] = {
            id: req.params.id,
            title: req.body.title || notes[updateID].title,
            note: req.body.note || notes[updateID].note
        }

        res.status(200).send(notes);
        // const updateID = parseInt(req.params.id);
        // const i = notes.findIndex(e => e.id === updateID);
        // let finalNote = notes[i]
        
        // notes[i] = {
        //     id: finalNote.id,
        //     title: title || finalNote.title,
        //     note: note || finalNote.note
        // }
     
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        let i = notes.indexOf(note => note.id === deleteID);
        notes.splice(i, 1);
        res.status(200).send(notes);
    }
};
