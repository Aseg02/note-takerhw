import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

import uniq from 'uniq';

export default (app) => {
  app.get('/api/notes', (_req, res) => {
    res.sendFile(join(__dirname, '../db/db.json'));
  });
  app.post('/api/notes', (req, res) => {
    let db = readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let userNote = {
      title: req.body.title,
      text: req.body.text,

      id: uniq(),
    };
 
    db.push(userNote);
    writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });   
  }