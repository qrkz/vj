$(function () {
    var vpH = Math.round( window.innerHeight );
    var dragFlag = 0;
    var navH = Math.round( $("#handle").outerHeight() );
    var navPos = vpH - navH;
    var dragLL = Math.round(vpH * 0.8);
    var dragUL = Math.round(vpH * 0.2);

    var $draggable = $('#footer').draggabilly({
        axis: 'y', handle: '#handle'
    });
    var draggie = $('#footer').data('draggabilly');

    $(window).on('resize', function(){
        vpH = Math.round( window.innerHeight );
        navH = Math.round( $("#handle").outerHeight() );
        navPos = vpH - navH;
        $draggable.draggabilly('setPosition', 0, navPos);
    });

    $draggable.on('dragEnd', function (event, pointer) {
        var dragPosY = Math.round(draggie.position.y);

        if (dragFlag === 0) {
            if (dragPosY > dragLL) {
                $draggable.draggabilly('setPosition', 0, navPos);
                dragFlag = 0;
            }
            if (dragPosY < dragLL) {
                $draggable.draggabilly('setPosition', 0, 0);
                dragFlag = 1;
            }
        } else if (dragFlag === 1) {
            if (dragPosY > dragUL) {
                $draggable.draggabilly('setPosition', 0, navPos);
                dragFlag = 0;
            }
            if (dragPosY < dragUL) {
                $draggable.draggabilly('setPosition', 0, 0);
                dragFlag = 1;
            }
        }

        $("#handle").text(vpH+"|"+navH+"|"+dragUL+"|"+dragLL+"|"+dragFlag);
    });

    $draggable.on( 'dragMove', function( event, pointer ) {
        var dragPosY = Math.round(draggie.position.y);

        if(dragFlag === 0)
        {
            if(dragPosY>dragLL){
                $("#footer #handle").css({"box-shadow":"inset #cf0 0 2px"});
                $("#footer").css({"box-shadow":"#cf0 0 2px 15px"});
            }
            if(dragPosY<dragLL){
                $("#footer #handle").css({"box-shadow":"inset #0ff 0 2px"});
                $("#footer").css({"box-shadow":"#0ff 0 2px 35px"});
            }
        }
        else if(dragFlag === 1)
        {
            if(dragPosY>dragUL){
                $("#footer #handle").css({"box-shadow":"inset #cf0 0 2px"});
                $("#footer").css({"box-shadow":"#cf0 0 2px 15px"});
            }
            if(dragPosY<dragUL){
                $("#footer #handle").css({"box-shadow":"inset #0ff 0 2px"});
                $("#footer").css({"box-shadow":"#0ff 0 2px 45px"});
            }
        }
    });


});