$(function(){
    let jsDBCH = document.body.clientHeight;
    let jqDH = $(document).height();
    let jsSH = screen.height;
    let jsSAH = screen.availHeight;
    let jsWIH = window.innerHeight;
    let jsWOH = window.outerHeight;
    let jqWH = $(window).height();
    let jqWIH = $(window).innerHeight();
    let jqWOH = $(window).outerHeight();
    let jqBO = $("body").offset();
    let jqBOT = jqBO.top;
    displayRes();

    function displayRes(){
        $("#results").html( "jsDBCH = " + jsDBCH +
                            "<br/>jqDH = " + jqDH + 
                            "<br/>jsSH = " + jsSH +
                            "<br/>jsSAH = " + jsSAH +
                            "<br/>jsWIH = " + jsWIH +
                            "<br/>jsWOH = " + jsWOH +
                            "<br/>jqWH = " + jqWH +
                            "<br/>jqWIH = " + jqWIH +
                            "<br/>jqWOH = " + jqWOH +
                            "<br/>jqBOT = " + jqBOT +
                            "<br/>"
                            );
                            
    }
    $(window).on('resize', function(){
        jsDBCH = document.body.clientHeight;
        jqDH = $(document).height();
        jsSH = screen.height;
        jsSAH = screen.availHeight;
        jsWIH = window.innerHeight;
        jsWOH = window.outerHeight;
        jqWH = $(window).height();
        jqWIH = $(window).innerHeight();
        jqWOH = $(window).outerHeight();
        jqBO = $("body").offset();
        jqBOT = jqBO.top;

        displayRes();
    });
    $("#results").click(function(){
        jsDBCH = document.body.clientHeight;
        jqDH = $(document).height();
        jsSH = screen.height;
        jsSAH = screen.availHeight;
        jsWIH = window.innerHeight;
        jsWOH = window.outerHeight;
        jqWH = $(window).height();
        jqWIH = $(window).innerHeight();
        jqWOH = $(window).outerHeight();
        jqBO = $("body").offset();
        jqBOT = jqBO.top;

        displayRes();
    });
});