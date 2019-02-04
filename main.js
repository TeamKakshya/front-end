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
    });//for the tab panel widget scroll down on click

    function change() {
      document.getElementsByClassName('options').style.display="block";
    }

    //show hidden input text for add notice
    $('.add_notice').on('click',show_add);
    function show_add() {
    $(".add_input").slideToggle();
  }//show show hidden input text for add notice

    //for taking the value of input text in input add events and add it in notice marquee
    $('.add_button').on('click',takevalue);
    function takevalue() {
      var test = $("#notice_input").val();
      $('.marks').append('<a href="#" target="_blank">'+test);
    };//for taking the value of input text in input add events and add it in notice marquee

    //show hidden input text for events
    $('.event_addbtn').on('click',show_eventadd);
    function show_eventadd() {
    $(".events_form").slideToggle();
  };//show show hidden input text for add notice

    //for taking the value of input text in input add events and add it in notice marquee
    $('.event_donebtn').on('click',take_event);
    function take_event() {
      var test_event = $(".event_text").val();
      var test_time= $(".event_time").val();
      // console.log(test_event);
      $('.events_only').append('<ul class="event 3"><a href="#"><li class="eventProg">'+test_event+'</li><li class="eventDay">@'+test_time+'</li></a></ul>');
    }//for taking the value of input text in input add events and add it in notice marquee

    //show hidden birthday text for events
    $('.birthday_addbtn').on('click',show_birthdayadd);
    function show_birthdayadd() {
    $(".birthday_form").slideToggle();
  }//show show hidden input text for add notice

    //for taking the value of input text in input add events and add it in notice marquee
    $('.birthday_donebtn').on('click',take_birthday);
    function take_birthday() {
      var test_birthday = $(".birthday_text").val();
      var test_date= $(".birthday_date").val();
      $(".birthday_panel").append('<ul class="list container " style="background-color:#ffff"><li class="photo"><img class="avatar" src="black.png" alt=""></li><li class="name">'+test_date+'</li></ul>');
    }//for taking the value of input text in input add events and add it in notice marquee



    //for chat toggles i.e from up to down
    $('.bUTTON').on('click',change_css );
    function change_css() {
        $('.collapse').slideToggle(200);
      };    //for chat toggles i.e from up to down

    //chat width fixed of tABS

     // var parentwidth = $(".collapse").width();
     // $(".tABS").toggleClass(".fixed").width(parentwidth);

     //for comment to toggle
     $('.comment_control').on('click',show_comment);
     function show_comment() {
       $('.comment_show').slideToggle();
     };

     $('.comment_submit').on('click',function () {
       var comment_value = $('.comment_content').val();
      alert(comment_value);
    });

});
