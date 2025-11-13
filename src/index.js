"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3009;
app.get('/', (req, res) => {
    res.send('Hello Yo');
});
app.listen(port, () => {
    console.log(`Example app: http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map