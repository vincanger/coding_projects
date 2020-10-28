// Random Inspiration Generator by Vince Canger

const goodIdeas = {
    newHabit: ['Drinking a glass of water', 'A cold shower', 'A healthier breakfast', 'Keeping your phone in the other room'],
    inspireQuote: [
      'And even if it\'s sunday may i be wrong </br> for whenever men are right they are not young - <i>ee cummings</i>', 
      'I think of the self-actualizing man not as an ordinary man with something added, <br> but rather as the ordinary man with nothing taken away<br>  -<i>Abraham Maslow</i>', 
      'Remember that sometimes not getting what you want<br> is a wonderful stroke of luck<br> - <i>Dalai Lama XIV</i>', 
      ],
    somethingNice: ['Say something nice to someone', 'Call a friend', 'Talk with a stranger', 'Listen when someone else is talking']
}

function randNumber(num) {
    return Math.floor(Math.random() * num)
}

let counter = 0;

const populateQuote = () => {
    let personalWisdom = [];

    for(let prop in goodIdeas) {
      let randIndex = randNumber(goodIdeas[prop].length)

      switch(prop) {
        case 'newHabit':
          personalWisdom.push(`<div id="qtitle">Every morning try:</div> <div id="idea">${goodIdeas[prop][randIndex]}</div><br>`)
          break
        case 'inspireQuote':
          personalWisdom.push(`<div id="qtitle">Inspiring Quote:</div> <div id="idea">${goodIdeas[prop][randIndex]}</div><br>`)
          break
        case 'somethingNice':
          personalWisdom.push(`<div id="qtitle">Do this good deed:</div> <div id="idea">${goodIdeas[prop][randIndex]}</div>`)
          break
        default:
          personalWisdom.push('yoyoyoyo')
      }
    }

    let wiseString = personalWisdom.join("");

    if (counter > 0){
        document.getElementById('newQuote').innerHTML = 'Even More!'
    } else {
        document.getElementById('newQuote').innerHTML = 'Gimme More!';
    }
    counter++;

    return document.getElementById('randomQuote').innerHTML = wiseString;
}
document.getElementById('newQuote').addEventListener('click', populateQuote);

