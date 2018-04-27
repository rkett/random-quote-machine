$(window).ready(function() {
    // Window is ready.
    console.log("Window is ready."); // XXX
});


$("#new-quote-button").on('click', function() {
    console.log("Button Pressed");

    $.getJSON(
        json = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[post_per_page]=1", 
        function(json) {
            let html    = "";
            let link    = "";
            let title   = "";
            let content = "";

            console.log(json);
            
            link    = "<a href=" + json[0].link + "></a";
            title   = "<p>" + json[0].title + "</p>";
            content = json[0].content; 
            html    = html + title + content;

            $(".message").html(html);
    });


});