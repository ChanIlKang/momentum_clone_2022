const quotes = [
    {
        quote: "All we have to decide is what to do with the time that is given us",
        author: "Gandalf"
    },
    {
        quote: "The two most powerful warriors are patience and time",
        author: "Leo Tolstoy"
    },
    {
        quote: "A man who dares to waste an hour of time has not discovered the value of life",
        author: "Charles Darwin"
    },
    {
        quote: "The most precious resource we all have is time",
        author: "Steve Jobs"
    },
    {
        quote: "We live and we die by time, and we must not commit the sin of turning our back on time",
        author: "Chuck Noland"
    },
    {
        quote: "One must still have chaos in oneself to be able to give birth to a dancing star",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything",
        author: "Mark Twain"
    },
    {
        quote: "Without music, life would be a mistak",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "He who has a why to live can bear almost any how",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "To live is to suffer, to survive is to find some meaning in the suffering",
        author: "Friedrich Nietzsche"
    },
]

const todayQuote = document.querySelector(".quote");
const author = document.querySelector(".author");

function drawQuote() {
    todayQuote.innerText = `${quotes[Math.floor(Math.random() * quotes.length)].quote}`;
    author.innerText = `${quotes[Math.floor(Math.random() * quotes.length)].author}`;
}

drawQuote();