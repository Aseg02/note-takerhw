import express, { static, urlencoded, json } from 'express';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(static('public'));
app.use(urlencoded({ extended: true }));
app.use(json());

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log(`Server available at localhost${PORT}`);
});