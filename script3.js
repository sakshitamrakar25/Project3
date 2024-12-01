function generate(){
    var quotes={
         "-Aristotle":"It is during our darkest moments that we must focus to see the light.",
         "- Ralph Waldo Emerson":"Do not go where the path may lead; go instead where there is no path and leave a trail.",
         "-Mother Teresa":"In this life we cannot do great things. We can only do small things with great love." 
        
    }
    var authors=Object.keys(quotes);
    var author=authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}