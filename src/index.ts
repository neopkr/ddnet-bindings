import * as path from 'path';
import express, { Request, Response } from 'express';

const app = express();

// Set Use for ExpressApp

// Static for CSS JS
app.use(express.static(path.join(__dirname, '../static')));

// Set pages
// Routes
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
})

app.get('/commands', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views", "commands.html"));
})


app.get('/binds', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../views", "binds.html"));
})

app.listen(8080, () => {
  console.log("Running Server [::]:8080 ; http://localhost:8080/");
})
