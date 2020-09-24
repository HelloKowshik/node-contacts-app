const express = require('express');
const morgan = require('morgan');
const contactRoutes = require('./contactRouter');

const app = express();
const PORT = process.env.PORT || 8585;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/contacts', contactRoutes);
app.get('*', (req, res) => {
    res.send('<h1>Invalid Route.</h1>');
})


app.listen(PORT, () => {
    console.log('Server is running at PORT: ', PORT);
})