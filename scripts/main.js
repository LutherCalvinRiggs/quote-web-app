const quote = document.getElementById('quote');
    const speaker = document.getElementById('speaker');
    const date = document.getElementById('date'); 
    // const image = document.querySelector(img.transition-start);
    const button = document.getElementById('new-quote-button');
    const multiplier = quoteArray.length 

    function printError() {
        quote.textContent = 'Error: unequal array length.';
        speaker.textContent = '';
        date.textContent = '';
    }

    function getQuote(num){
        currentQuote = quoteArray[num];
        currentSpeaker = speakerArray[num];
        currentDate = dateArray[num];
    }

    function printQuote() {
        quote.textContent = currentQuote;
        speaker.textContent = currentSpeaker;
        date.textContent = currentDate;
    }

    function transition() {
        if (image) {
            image.className = image.transition-end
        }  
        return image;
    }

    function showQuote() {
        let num = Math.floor(Math.random()*multiplier);

        if (quoteArray.length === speakerArray.length && 
            speakerArray.length === dateArray.length && 
            dateArray.length === quoteArray.length){
            console.log(num);
            getQuote(num);
            printQuote();
        } else {
            printError();
        }
    }

    button.onclick = showQuote;