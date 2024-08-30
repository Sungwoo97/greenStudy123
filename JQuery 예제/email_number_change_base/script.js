$(function(){
  const selectDomain = $('.select_domain');
  const emailDomain = $('.email_domain');
  const unitPrice = Number($('.unitprice').attr('data-price'));
  const minusBtn = $('#minus');
  const plusBtn = $('#plus');
  const count = $('.count');
  const total = $('.total');

  $('.number').number( true );

  //selectDomain 값이 변경되면 할 일
  selectDomain.change(function(){
    let selectedValue = $(this).val();
    if(selectedValue === '직접입력'){
      emailDomain.val('')
      emailDomain.focus();
    }else{
      emailDomain.val(selectedValue);
    }
  });


//plusBtn을 클릭하면 수량을 1씩 올리고 합계를 변경한다
  plusBtn.click(function(){
    let qty = Number(count.text()); 
    count.text(++qty);
    total.text( (qty*unitPrice).toLocaleString());  
  });
  minusBtn.click(function(){
    let qty = Number(count.text()); 
    if(qty > 1){
      count.text(--qty);
      total.text((qty * unitPrice).toLocaleString()); 
    }else{
      alert('수량은 최소 1개 이상이어야 합니다');
    }
     
  });

});