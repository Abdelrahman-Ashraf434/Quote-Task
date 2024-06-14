arrQuotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "― Mae West",
  },
];

let duplicatedRandomNumber = 0;
function randomQuote() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * arrQuotes.length);
  } while (duplicatedRandomNumber === randomNumber);
  duplicatedRandomNumber = randomNumber;
  let randomQuote = arrQuotes[randomNumber];
  document.getElementById("quote").innerHTML = randomQuote.quote;
  document.getElementById("author").innerHTML = randomQuote.author;
  console.log(randomNumber);
}
