$(document).ready(function () {

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        navigation:true,
        navigationTooltips: ['About', 'Education', 'Experience', 'Skills', 'Awards'],
        showActiveTooltip: true,
        normalScrollElements: '.scrollable-element',
        onLeave: function(){
            $('.section [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        onSlideLeave: function(){
            $('.slide [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        afterSlideLoad: function(){
            $('.slide.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
        },
        afterLoad: function(){
            $('.section.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
        }});

    $('#moveSectionLeft').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSlideLeft();
    });

    $('#moveSectionRight').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSlideRight();
    });
});