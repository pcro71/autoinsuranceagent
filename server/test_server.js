const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/saveToFirestore', (req, res) => {
    console.log('Request received for /saveToFirestore');
    res.status(200).json({ message: "Test Successful" });
});

app.listen(PORT, () => {
    console.log(`Test Server is running on port ${PORT}`);
});
