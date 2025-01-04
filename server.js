const express = require('express');

const app = express();
app.use(express.json());

const notes = [
  { id: 1, title: '笔记 1', content: '这是笔记 1', likes: 0 },
  { id: 2, title: '笔记 2', content: '这是笔记 2', likes: 0 },
  { id: 3, title: '笔记 3', content: '这是笔记 3', likes: 0 },
  { id: 4, title: '笔记 4', content: '这是笔记 4', likes: 0 },
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

// Get notes list or search notes by content /notes?term='abc'
app.get('/notes', (req, res) => {
  const term = req.query.term;
  if (term) {
    const filteredNotes = notes.filter((note) => note.content.includes(term));
    res.json(filteredNotes);
  } else {
    res.json(notes);
  }
  // res.status(500).json({ message: '加载笔记列表出错' });
});

// Get one note by its id
app.get('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: '笔记不存在' });
  }
});

// POST create new note
app.post('/notes', (req, res) => {
  const note = req.body;
  note.id = notes.length + 1;
  notes.push(note);
  res.json(note);
});

// PUT update one note by its id
app.put('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    Object.assign(note, req.body);
    res.json(note);
  } else {
    res.status(404).json({ message: '笔记不存在' });
  }
});

// DELETE delete note by id
app.delete('/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    res.json({ message: '成功删除此条记录' });
  } else {
    res.status(404).json({ message: '笔记不存在' });
  }
});

// listen on port 8080
app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});
