const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');


// ROUTE 1: GET All the Notes Using : GEt"/api/auth/getuser" .Login REquired
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {

        console.error(error.message);
        res.status(500).send("Internal Sever Error");
    }

})

// ROUTE 2: Add new Notes Using : POST"/api/auth/addnote" .Login REquired

router.post('/fetchallnotes', fetchuser, [
    body('title', 'Enter Valid title').isLength({ min: 3 }),
    body('description', 'Enter Atleast 5 Characters in description').isLength({ min: 5 }),], async (req, res) => {
        try {
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Notes({
                title, description, tag, user: req.user.id

            })
            const savedNote = await note.save()
            res.json(savedNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Sever Error");

        }
    })

// ROUTE 3: Update an existing note Using : PUT"/api/auth/updatenote" .Login REquired
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    //Create a newNote Object
try {
    const newNote = {};
    if (title) (newNote.title = title);
    if (description) (newNote.description = description);
    if (tag) (newNote.tag = tag);

    //Find the note to be updated and update it

    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(404).send("NOt Found") }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");

    }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    res.json({ note });
  }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }

})

//ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote".Login required 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        // Find the note to be delete and delete it 
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");

        }

        note = await Notes.findByIdAndDelete(req.params.id)

        res.json({ "Success": "Note has been deleted", note: note });
   } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }
})
    module.exports = router


