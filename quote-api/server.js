const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, createElement, generateId } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//Gets all quotes unless a query paramter is defined (e.g. ?person=Grace Hopper)
app.get('/api/quotes', (req, res, next) => {
    const personId = req.query.person;
    let personArray = [];
    if (personId) {
        personArray = quotes.filter(quote => quote.person === personId);
        const quotesObject = Object.create(null);
        quotesObject.quotes = personArray;
        res.send(quotesObject);
    } else {
        res.send({
            quotes: quotes
          });
    }
});

//Gets Random Quote only
app.get('/api/quotes/random', (req, res, next) => {
    const randomQuote = getRandomElement(quotes);
    res.send({
        quote: randomQuote
    });
});

//Posts new quotes 
app.post('/api/quotes', (req, res, next) => {
    const newQuote = createElement(req.query);
    if (newQuote) {
      quotes.push(newQuote);
      const quotesObject = Object.create(null);
      quotesObject.quote = newQuote;
      res.status(201).send(quotesObject);
    } else {
      res.status(400).send();
    }
});

//Delete by id
app.delete('/api/quotes/:id', (req, res, next) => {
    const quote = quotes.find(quote => quote.id === req.params.id);
    if (quote) {
      const index = quotes.indexOf(quote);
      quotes.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  });

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`)
})
