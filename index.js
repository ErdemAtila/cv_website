/* -1- Anımation for "Skills" section*/
let skillsBackground = $('.skill-background-div');
skillsBackground.animate({width: '80%'},700);

setTimeout (function () {
  let skillOneOnground = $('.skill-div-one');
  skillOneOnground.animate({width:'76%'},700);

  let skillTwoOnground = $('.skill-div-two');
  skillTwoOnground.animate({width: '66%'},700);

  let skillThreeOnground = $('.skill-div-three');
  skillThreeOnground.animate({width: '70%'},700);
}, 700)
/*Ending of "Skills" section -1- */
