//for the tab panel widget scroll down on click
$(document).ready(function() {

    $('.tab-panels .tabs li').bind('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });
    function change() {
      document.getElementsByClassName('options').style.display="block";
    }

    $('.bUTTON').on('click',change_css );

    function change_css() {
        $('.collapse').slideToggle(200);
      }

    //chat width fixed of tABS

     // var parentwidth = $(".collapse").width();
     // $(".tABS").toggleClass(".fixed").width(parentwidth);


});
