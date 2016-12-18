$(function () {

  var container = $('#container');
  var bird = $('#bird');
  var pole = $('.pole');
  var pole_1 = $('#pole_1');
  var pole_2 = $('#pole_2');
  var score = $('#score');
  var speed_span = $('#speed');
  var restart_btn = $('#restart_btn');

  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var pole_initial_position = parseInt(pole.css('right'));
  var pole_initial_height = parseInt(pole.css('height'));
  var bird_left = parseInt(bird.css('left'));
  var bird_height = parseInt(bird.height());
  var speed = 10;

  //SOME OTHER DECLARATIONS

  var go_up = false;

  setInterval(function(){

    var pole_current_position = parseInt(pole.css('right'));

    if(pole_current_position > container_width){
      var new_height = parseInt(Math.random() * 100);

      //change the pole's height
      pole_1.css('height', pole_initial_height + new_height);
      pole_2.css('height', pole_initial_height + new_height);

      //Increase speed
      speed = speed + 1;
      speed_span.text(speed);

      pole_current_position = pole_initial_position;
    }

    pole.css('right', pole_current_position + speed);

    if (go_up === false) {
      go_down();
    }
  }, 40);

  $(document).on('keydown', function (e) {
    var key = e.keyCode;
    if(key === 32 && go_up === false){
      go_up = setInterval(up, 50);
    }
  });

  $(document).on('keyup', function (e) {
    var key = e.keyCode;
    if(key === 32){
      clearInterval(go_up);
      go_up = false;
    }
  });

  function go_down() {
    bird.css('top', parseInt(bird.css('top')) + 5);
  }

  function up() {
    bird.css('top', parseInt(bird.css('top')) - 10);
  }


});
