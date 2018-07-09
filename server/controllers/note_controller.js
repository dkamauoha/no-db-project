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
        const {title, note} = req.body;
        const updateID = parseInt(req.params.id);
        const i = notes.findIndex(e => e.id === updateID);
        let finalNote = notes[i]

        notes[i] = {
            id: finalNote.id,
            title: title || finalNote.title,
            note: note || finalNote.note
        }
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        let i = notes.indexOf(note => note.id === deleteID);
        notes.splice(i, 1);
        res.status(200).send(notes);
    }
};
