// Get the button, quote, and author elements
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

// Predefined list of quotes
const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { quote: "It is not our abilities that show what we truly are… it is our choices.", author: "J.K. Rowling" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
    { quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The mind is everything. What you think you become.", author: "Buddha" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" }
];
 
let currentIndex = 0;
// Function to generate a random quote
function getRandomQuote() {
    // Get the current quote based on the currentIndex
    const selectedQuote = quotes[currentIndex];
    
    // Display the quote and author
    quoteEl.innerText = `"${selectedQuote.quote}"`;
    authorEl.innerText = `~ ${selectedQuote.author}`;
    
    // Increment the index to show the next quote
    currentIndex++;
    
    // If we've reached the end of the quotes array, reset to the beginning
    if (currentIndex === quotes.length) {
        currentIndex = 0;
    }
}
// Event listener for the button click
btnEl.addEventListener("click", getRandomQuote);
console.log(quotes.length);


// Fetch the first quote when the page loads
getRandomQuote();
