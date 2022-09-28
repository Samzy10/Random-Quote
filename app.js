//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: '"The best way to find yourself is to loose yourself in service to others."',
        person: 'Mahatma Ghandi'
    },
    {
        quote: '"If you want to live a happy life, tie it to a goal, not to people or things,"',
        person: 'Albert Einstein'
    },
    {
        quote: '"At his best, man is the noblest of all animals; separated from law and justice, he is the worst."',
        person: 'Aristotle'
    },
    {
        quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        person: 'Benjamin Franklin'
    },
    {
        quote: `"Your time is limited, so don't waste it living someone else's life"`,
        person: 'Steve Jobs'
    },
    {
        quote: '"It does not matter how slowly you go, as long as you do not stop."',
        person: 'Confucius'
    },
    {
        quote: '"Remember that not getting what you want is sometimes a wonderful stroke of luck"',
        person: 'Dalai Lama'
    },
    {
        quote: `"If you look at what you have in life, you'll always have more.
        if you look at what you don't have in life, you'll never have enough."`,
        person: 'Oprah Winfrey'
    },
    {
        quote: '"Our lives begins to end the day we become silent about things that matter."',
        person: 'Martin Luther King'
    },
    {
        quote: '"The journey of a thousand miles begins with one step."',
        person: 'Lao Tzu'
    }
];

btn.addEventListener("click", function (){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;

})