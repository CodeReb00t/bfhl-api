const express = require('express');
const bfhlRoute = require('./api/bfhl');

const app = express();
app.use(express.json());

// Mount /bfhl route
app.use('/bfhl', bfhlRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
