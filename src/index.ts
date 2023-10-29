import express, { Request, Response, Application } from 'express';
function AddNumbers(a: number, b: number) {
  return a + b;
}

const app: Application = express();
const port = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
