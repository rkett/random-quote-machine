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
            let html         = "";
            let link         = "";
            let name         = "";
            let content      = "";
            let height       = 0;
            let width        = 0;

            name         = "<p id='name'> -- " + response[0].title + "</p>";
            content      = response[0].content;
            html         = html + content + name;
            $(".message-body").html(html)

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