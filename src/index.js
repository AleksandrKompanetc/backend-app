"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import express from 'express';
const app = express();
const port = 3011;
app.get('/', (req, res) => {
    res.send('Hello world! This is version 3.');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map