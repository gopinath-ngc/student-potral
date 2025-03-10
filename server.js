const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Dummy data for demonstration purposes
const students = [
    { regno: '12345', password: 'password1' },
    { regno: '67890', password: 'password2' }
];

app.get('/', (req, res) => {
    res.send('Student Portal Backend');
});

app.post('/login', (req, res) => {
    const { regno, password } = req.body;
    const student = students.find(stu => stu.regno === regno && stu.password === password);

    if (student) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid registration number or password');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
