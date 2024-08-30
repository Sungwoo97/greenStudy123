/* 
slideUp()
slideDown()
slideToggle()
*/

const question = $('.question');
const answer = $('.answer');

question.click(function(){
  $(this).next().slideToggle();
  $(this).next().siblings('div').slideUp();
});