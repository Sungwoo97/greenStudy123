$(function () {
  const container = $('#gallery');
  const loadMoreBtn = $('#load-more');
  const addItemCount = 10;
  let added = 0;
  let addData = [];

  container.masonry({
    // options
    itemSelector: '.gallery-item',
    columnWidth: 270,
    gutter: 10
  });

/*  fetch('./data/content.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
    return response.json();
  })
  .then((result) => {
    console.log(result);
  }); */
  
  $.getJSON( "./data/content.json", function( data ) {
    addData = data;

    addItems();
    /*var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
    */
  });
  function addItems(){
    let items = [];
    let slicedItems = addData.slice(added, added + addItemCount);
    added += addItemCount;
    $.each( slicedItems, function( key, val ) {
      let itemHTML = `<li class="gallery-item">
        <h3>${val.title}</h3>
        <img src="${val.images.thumb}" alt="${val.title}"></img>
        </li>`;
      items.push($(itemHTML).get(0));
    });
    console.log(items);
    container.append(items);
    //container.append(items); 
    if(added >= addData.length){
      loadMoreBtn.fadeOut();
    }
    // container.masonry({
    //   // options
    //   itemSelector: '.gallery-item',
    //   columnWidth: 200
    // }); 
    container.imagesLoaded( function() {
      // images have loaded
      console.log('imageload');
      container.masonry( 'appended', items );
    });
  }

  loadMoreBtn.on('click', addItems);
});
