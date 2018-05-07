/*
    File: interface.js
    Author: Ross Kett
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

    $("#button-random").on('click', function() {
        randomQuote();
    }); // Invokes randomQuote() whenever button is clicked.
});
