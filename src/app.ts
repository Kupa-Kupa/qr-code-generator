import express from 'express';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __dirname = fileURLToPath(path.dirname(import.meta.url));

// configure dotenv
require('dotenv').config();

import { router as indexRouter } from './routes/index.js';

/* ----- create express application with express() function ----- */
const app = express();

/* ----- set up view engine as ejs ----- */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ----- define where static files are located and where ejs should be looking ----- */
app.use(express.static(path.join(__dirname, 'public')));

/* ----- run middleware ----- */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log(`Server is running on port 3000... http://localhost:3000/`);
});
