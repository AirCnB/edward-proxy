const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use('/listings/:id', express.static('public'));

app.get('/api/listings/:id/photos', (req, res) => {
  const { id } = req.params;
  const url = `http://ec2-13-59-102-97.us-east-2.compute.amazonaws.com/api/listings/${id}/photos`;
  axios.get(url)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(404).send('err'));
});

app.get('/api/listings/:id/bookings', (req, res) => {
  const { id } = req.params;
  const url = `http://ec2-34-203-218-92.compute-1.amazonaws.com/api/listings/${id}/bookings`;
  axios.get(url)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(404).send('err'));
});

app.get('/api/house/:id', (req, res) => {
  const { id } = req.params;
  const url = `http://ec2-18-222-220-204.us-east-2.compute.amazonaws.com/api/house/${id}`;
  axios.get(url)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(404).send('err'));
});

app.get('/:id/reviews', (req, res) => {
  const { id } = req.params;
  const url = `http://ec2-52-87-204-118.compute-1.amazonaws.com/${id}/reviews`;
  axios.get(url)
    .then(({ data }) => res.status(200).send(data))
    .catch(err => res.status(404).send('err'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
