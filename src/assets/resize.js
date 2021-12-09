import $ from 'jquery';

export default $(document).ready(function () {
    function widthResize () {
        console.log('바로 실행되는지 ?');
        var windowHeight = window.innerHeight;
        var height1 = document.getElementById("headerWrap").clientHeight;
        var k = windowHeight - height1;

        $("#perfectH_1").css('height',k+"px");
        $("#perfectH_2").css('height',k+"px");
        $("#perfectH_detail").css('minHeight',k+"px");
        $("#perfectH_3").css('minHeight',k+"px");
        $("#perfectH_4").css('minHeight',k+"px");
    }

    widthResize();

    $(window).on('ready', widthResize);    
    $(window).on('resize', widthResize);
});


// export default 'widthResize()';

