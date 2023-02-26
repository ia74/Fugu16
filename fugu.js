const express = require('express');
const app = new express();

app.get('/*', (r, r2) => {
    r2.send('fugu 16 jailbreak enabled')
})

app.listen(3001)