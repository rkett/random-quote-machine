/*
    File: functions.js
    Author: Ross Kett
    Usage: Place any custom made functions in this document.
 */

/*
    Function: randomQuote()
    Intent: To obtain a random quote from quotesondesign and then insert said quote into the users view.
    return: [object] -- $.getJSON function, callback to .done() or .fail() with .always(). If it succeeds, sideffect
                        of return inserts HTML into CSS class ".message". Else, the function failed. Always will fire 
                        no matter circumstances. 
 */
function randomQuote() {
    return (
        $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[post_per_page]=1", function() {
            // Get response.
        })
        .done(function(response, textStatus) {
            let html           = "";
            let link           = "";
            let name           = "";
            let content        = "";
            let twitter_button = "";
            let height         = 0;
            let width          = 0;

            name           = "<p id='name'> -- " + response[0].title + "</p>";
            content        = response[0].content;
            html           = html + content + name;
            link           = link + response[0].link;

            // Needs refactor; Usage: cuts the <p> & </p> tags out of content by casting content to an array.
            twitter_content = "'" + response[0].content.slice(3,response[0].content.slice().length-6) + "'" + " -- " + response[0].title + " " + link;

            if (twitter_content.length >= 144){
                twitter_content = link;
            } // Else Twitter will auto-truncate the message.

            $(".message-body").html(html)
            $("#button-twitter").replaceWith('<div id="button-twitter" role="button"> <a class="fab fa-twitter fa-2x" href="https://twitter.com/intent/tweet?text=' + twitter_content + '"></a></div>');
            // On success of request.
        })
        .fail(function(response, textStatus, errorThrown) {

            // On fail of request.
        })
        .always(function(response, textStatus) {

            // On completion of whole request.
        })
    );
}