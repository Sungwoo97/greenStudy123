$( "#location" ).selectmenu({
  change: function( event, ui ) {
    updateProgress();
  }
});

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
  source: availableTags,
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
$( "#start" ).datepicker({
  dateFormat: "yy-mm-dd",
  minDate: new Date(),
  maxDate: "+2w",
});

$( "#start" ).change(function(){
  updateProgress();
})

$( "input[type='radio']" ).checkboxradio();

$( "input[type='radio']" ).change(function(){
  updateProgress();
})

// 진행률을 채우면 보이도록
$( "form button" ).button({
  disabled: true
});

$( "#progress" ).progressbar({
  
});

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
  console.log(item1, item2, item3, item4, item5);

  if(item1) itemCompleted++;
  if(item2) itemCompleted++;
  if(item3) itemCompleted++;
  if(item4) itemCompleted++;
  if(item5) itemCompleted++;
  console.log(itemCompleted);

  progress = itemCompleted * (100 / itemCount);
  $( "#progress" ).progressbar( "value", progress );
  $('.percent span').text(progress);
  if(progress === 100){
    $( "form button" ).button( "enable" );
  }
}