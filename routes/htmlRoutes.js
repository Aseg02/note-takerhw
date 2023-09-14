import { join } from 'path';

export default (app) => {

  app.get('/notes', (req, res) => {
    res.sendFile(join(__dirname, '../public/notes.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../public/index.html'));
  })
};
