
$('select').formSelect();

$('select').change(function(){
  updateProgress();
})
$('input').change(function(){
  updateProgress();
})

var availableTags = [
  "ActionScript",
  "AppleScript",
  "Asp",
  "BASIC",
  "C",
  "C++",
  "Clojure",
  "COBOL",
  "ColdFusion",
  "Erlang",
  "Fortran",
  "Groovy",
  "Haskell",
  "Java",
  "JavaScript",
  "Lisp",
  "Perl",
  "PHP",
  "Python",
  "Ruby",
  "Scala",
  "Scheme"
];
$( "#category" ).autocomplete({
  data: { availableTags },
  change: function( event, ui ) {
    updateProgress();
  }
});

// 1~5만 선택할 수 있는 input
$( "#experience" ).spinner({
  max: 5,
  min: 1,
  change: function( event, ui ) {
    updateProgress();
  }
});

$('#experience').on('input',function(){
  let userInput = $(this).val();
  if(userInput !== '' && isNaN(userInput)){
    alert('숫자만 입력하세요');
    $(this).val('');
    $(this).focus();
  }
});

// yyyy-mm-dd 형색으로, 이전 일자는 선택 불가, 이후 2주 동안만 선택
let now = new Date();
let minD = new Date(now.setDate(now.getDate()+1));
let maxD = new Date(now.setDate(now.getDate()+14));
console.log(minD , maxD);
$('#start').datepicker({
  format: 'yyyy-mm-dd',
  minDate: minD,
  maxDate: maxD
});

$( "#start" ).change(function(){
  updateProgress();
})



$( "input[type='radio']" ).checkboxradio();

$( "input[type='radio']" ).change(function(){
  updateProgress();
})

// $( "#progress" ).progressbar( "value", 20 );

function updateProgress(){
  const itemCount = $('.fields').length;
  let itemCompleted = 0;
  let progress = 0;

  let item1 = $('#location').val();
  let item2 = $('#category').val();
  let item3 = $('#experience').val();
  let item4 = $('#start').val();
  let item5 = $("input[type='radio']:checked").val();


  if(item1) itemCompleted++;
  if(item2) itemCompleted++;
  if(item3) itemCompleted++;
  if(item4) itemCompleted++;
  if(item5) itemCompleted++;


  progress = itemCompleted * (100 / itemCount);
  $('.percent span').text(progress);
  $('#progress .bar').animate({width : progress +'%'});
  if(progress === 100){
    $( "form > button" ).prop( "disabled", false );
    $('.percent').addClass('completed');
  }else{
    $( "form > button" ).prop( "disabled", true );
    $('.percent').removeClass('completed');
  }
}