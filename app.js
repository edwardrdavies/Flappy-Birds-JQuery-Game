$(function () {
  //Saving DOM objects to varibles
    var container = $('#container');
    var bird = $('#bird');
    var pole = $('#pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var speed = $('#speed');
    var restart_Btn = $('#restart_Btn');

    //Saving some initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.css('height'));
    var speed = 10;
});
