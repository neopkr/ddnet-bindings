import * as path from 'path';
import express, { Request, Response } from 'express';

const app = express();

// Set Use for ExpressApp

// Static for CSS JS
app.use(express.static(path.join(__dirname, '../static')));

// Set engine
app.set('view engine', 'ejs');

// Set pages
// Routes
app.get('/', (req: Request, res: Response) => {
  res.render("index");
})

app.get('/commands', (req: Request, res: Response) => {
  res.render("commands");
})


app.get('/binds', (req: Request, res: Response) => {
  res.render("binds");
})

app.listen(8080, () => {
  console.log("Running Server [::]:8080 ; http://localhost:8080/");
})
