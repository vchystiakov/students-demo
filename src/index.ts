// import express,Request,Response modules
import express, { Request, Response } from 'express';
//creating app
const app = express();
//setting port where will be our server(application)
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  let message = 'Hello INCUBATOR.com!';
  res.send(message);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
