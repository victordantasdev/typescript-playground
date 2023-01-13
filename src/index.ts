import express from 'express';
import { sum } from "./utils/sum";

const PORT = Number(process.argv?.[2]) || 4000;
const app = express();

app.listen(PORT, () => { console.log(`server running on http://localhost:${PORT}`) });

app.get('/', (req, res) => {
  const { query } = req;
  const a = Number(query?.a);
  const b = Number(query?.b);

  if (Object.keys(query || {}).length) {
    res.send({ result: sum(a, b) });
    return;
  }

  res.send({
    message: 'You can pass numbers as query params to be summed',
    example: '/?a=35&b=7'
  })
})
