let notes = [{id: 0, title: '1', text: '1'}, {id: 1, title: '2', text: '2'}, {id: 2, title: '3', text: '3'}];
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
        
    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        let i = notes.indexOf(note => note.id === deleteID);
        notes.splice(i, 1);
        res.status(200).send(notes);
    }
};
