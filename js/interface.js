/*
    File: interface.js
    Author: Ross Kett
    Usage: Place any event listeners or event-like listeners inside this document.
 */

/*
    This is the standard ready format.
    When all DOM elements are loaded, allow JS interaction with said elements.
*/
$(function() {
    // Ensure that page caching is disabled.
    $.ajaxSetup({
        cache: false
    });

    // First call of randomQuote().
    randomQuote();

    // Invokes randomQuote() whenever button is clicked.
    $("#button-random").on('click', function() {
        randomQuote();
    }); 
});
