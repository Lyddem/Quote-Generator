 var quotes = ['The strength of a nation lies in the homes of its people -Abraham Lincoln',
 'The journey of a thousand miles begins with a single step -Chinese Proverb',
 'Everything is hard in the beginning -Misrak',
 'Make those at home happy, and those who are far will come -Chinese Proverb',
 'The more you sweat in peace, the less you bleed in war -multiple',
 'A lie that is all of a lie can be met with and fought outright; But a lie that is partly the truth is a harder matter to fight. -Tennyson',
 'We overestimate what we can achieve in the short-term and underestimate what we can achieve in the long-term  -Tim Hurson',
 'Nobody can make you feel inferior without your consent -Eleanor Roosevelt',
 'Give me six hours to chop down a tree and I will spend the first four sharpening the axe -Abraham Lincoln',
 ' ...but whatever you do, you have to keep moving forward -Martin Luther King Jr.',
 'Our greatest weakness lies in giving up. the most certain way to succeed is always to try just one more time -Thomas Edison',
 'He that is good for making excuses is seldom good for anything else -Benjamin Franklin',
 'Our greatest weakness lies in giving up. the most certain way to succeed is always to try just one more time -Thomas Edison',
 'We are what we believe we are -C.S. Lewis',
 'Your greatest strength is love -Harbhajan Singh',
 'Where there is a Will, there is a way',
 'Genius is one percent inspiration, ninety nine percent perspiration - Thomas Edison'
 ];


function newQuote(){
  //generate a random whole number
  var randomIndex = Math.floor(Math.random() * (quotes.length));

 //attach to the display
  document.getElementById('quoteDisplay').innerHTML = quotes[randomIndex];
}

$(document).ready(function(){
  var random = quotes[Math.floor(Math.random() * (quotes.length))];
 $('twitter-share-button').click(function(){
  $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(rand));
 });
});
