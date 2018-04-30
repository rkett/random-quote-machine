$(window).ready(function() {

    // Window is ready.
    console.log("Window is ready."); // XXX
    randomQuote();
});

$("#new-quote-button").on('click', function() {

    // Button is clicked.
    console.log("Button Pressed"); // XXX
    randomQuote();
});

function randomQuote() {
    return (
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[post_per_page]=1", function() {
            // Get response.
        })
        .done(function(response, textStatus) {
            let html         = "";
            let link         = "";
            let name         = "";
            let content      = "";
            let height       = 0;
            let width        = 0;

            name         = "<p id='name'>" + response[0].title + "</p>";
            content      = response[0].content;
            html         = html + content + name;
            
            $(".message").css('opacity', '0');
            $(".message").html(html)
            $(".message").animate({
                opacity: "1"
            }, 1400);

            // On success of request.
            console.log("Successful attempt to obtain a single random quote from quotesondesign API.");
            console.log("Text Status: " + textStatus); // XXX
        })
        .fail(function(response, textStatus, errorThrown) {

            // On fail of request.
            console.log("Failure to obtain a single random quote from quotesondesign API.");
            console.log("Text Status: " + textStatus + " " + "HTTP Error Thrown: " + errorThrown); // XXX
        })
        .always(function(response, textStatus) {

            // On completion of whole request.
            console.log("Completed attempt to obtain a single random quote from quotesondesign API.");
            console.log("Text Status: " + textStatus); // XXX
        })
    );
}

