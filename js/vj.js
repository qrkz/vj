$(function(){

    var viewHeight = $(window).height();
    //var viewWidth = $(window).width();
    var navHeight = viewHeight * 0.93;
    var dragFlag = 0;
    navHeight = Math.round(navHeight);

    for( var i = 0; i<25; i++){
        $("#content").append("<br/>Content<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.");
    }
    
    var $draggable = $('.draggable').draggabilly({
        axis: 'y', handle:'.handle'
    });
    
    $draggable.draggabilly('setPosition',0,viewHeight*0.93);

    var draggie = $('.draggable').data('draggabilly');

    $draggable.on( 'dragEnd', function( event, pointer ) {
        var dragPosY = Math.round(draggie.position.y);
        var navPos = Math.round(viewHeight*0.93);
        var dragUL = Math.round( (viewHeight*0.93) - (navPos*0.8) );
        var dragLL = Math.round( (viewHeight*0.93) - (navPos*0.2) );

        console.log("NP: "+viewHeight*0.93+"; DPY: "+dragPosY+"; DUL: "+dragUL+"; DLL: "+dragLL);

        if(dragFlag === 0)
        {
            if(dragPosY>dragLL){
                $draggable.draggabilly('setPosition',0,viewHeight*0.93);
                dragFlag = 0;
                $("#nav").css({"box-shadow":"#cf0 0 0"});
                console.log(dragPosY+"DPY > DLL"+dragLL+"; DF:"+dragFlag);
            }
            if(dragPosY<dragLL){
                $draggable.draggabilly('setPosition',0,0);
                dragFlag = 1;
                console.log(dragPosY+"DPY < DLL"+dragLL+"; DF:"+dragFlag);
            }
        }
        else if(dragFlag === 1)
        {
            if(dragPosY>dragUL){
                $draggable.draggabilly('setPosition',0,viewHeight*0.93);
                dragFlag = 0;
                $("#nav").css({"box-shadow":"#cf0 0 0"});
                console.log(dragPosY+"DPY > DLL"+dragLL+"; DF:"+dragFlag);
            }
            if(dragPosY<dragUL){
                $draggable.draggabilly('setPosition',0,0);
                dragFlag = 1;
                console.log(dragPosY+"DPY < DLL"+dragLL+"; DF:"+dragFlag);
            }
        }
    });

    $draggable.on( 'dragMove', function( event, pointer ) {
        var dragPosY = Math.round(draggie.position.y);
        var navPos = Math.round(viewHeight*0.93);
        var dragUL = Math.round( (viewHeight*0.93) - (navPos*0.8) );
        var dragLL = Math.round( (viewHeight*0.93) - (navPos*0.2) );

        console.log("NP: "+viewHeight*0.93+"; DPY: "+dragPosY+"; DUL: "+dragUL+"; DLL: "+dragLL);

        if(dragFlag === 0)
        {
            if(dragPosY>dragLL){
                $("#nav .handle").css({"box-shadow":"inset #cf0 0 2px"});
                $("#nav").css({"box-shadow":"#cf0 0 2px 15px"});
            }
            if(dragPosY<dragLL){
                $("#nav .handle").css({"box-shadow":"inset #0ff 0 2px"});
                $("#nav").css({"box-shadow":"#0ff 0 2px 35px"});
            }
        }
        else if(dragFlag === 1)
        {
            if(dragPosY>dragUL){
                $("#nav .handle").css({"box-shadow":"inset #cf0 0 2px"});
                $("#nav").css({"box-shadow":"#cf0 0 2px 15px"});
            }
            if(dragPosY<dragUL){
                $("#nav .handle").css({"box-shadow":"inset #0ff 0 2px"});
                $("#nav").css({"box-shadow":"#0ff 0 2px 45px"});
            }
        }
    });

    $(window).resize(function(){
        console.log("Resize!!");
        $draggable.draggabilly('setPosition',0,viewHeight*0.93);
    });
});