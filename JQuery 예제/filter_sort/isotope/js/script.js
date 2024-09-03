var $grid = $('.product_list').isotope({
  // options
  itemSelector: '.item',
  getSortData:{
    order : '[data-order] parseInt'
  }
});

var filters = {};

$('.filters').on( 'click', 'button', function() {
  let $button = $(this);
  // use filterFn if matches value
  var $buttonGroup = $button.parents();
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  console.log(filters);
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

$('#filter').change(function() {
  var filterValue = $(this).val();
  // use filterFn if matches value
  $grid.isotope({ filter: filterValue });
});

$('.sorts').on( 'click', 'button', function() {
  var sortType = $(this).attr('data-sort');
  // use filterFn if matches value
  doSort(sortType);
});
$('#sort').change(function() {
  var sortType = $(this).val();
  // use filterFn if matches value
  doSort(sortType);
});

function doSort(sortType){
  if(sortType === 'order:asc'){
    $grid.isotope({ sortBy: 'order', sortAscending: true });
  }else if(sortType === 'order:descending'){
    $grid.isotope({ sortBy: 'order', sortAscending: false });
  }else{
    $grid.isotope({ sortBy: 'random' });
  }
}
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

