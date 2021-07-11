import { app } from './app';
const port = 3000;
export const runningMessage = `Node app running at http://localhost:${port}`;

app.listen(port, () => {
    console.log(runningMessage);
});