/*
    File: interface.js
    Author: Ross Kett
    Data Modified: 04/30/2018
    Usage: Place any event listeners or event-like listeners inside this document.
 */

/*
    This is the standard ready format.
    When all DOM elements are loaded, proceed to allow JS interaction with said elements.
*/
$(function() {
    $.ajaxSetup({
        cache: false
    }); // Ensure that page caching is disabled.

    randomQuote(); // First call of randomQuote().

    $("#new-quote-button").on('click', function() {
        randomQuote();
    }); // Invokes randomQuote() whenever button is clicked.
});
