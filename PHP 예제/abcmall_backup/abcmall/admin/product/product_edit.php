<?php
$title = "상품수정";
$summernote_css = "<link href=\"https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.css\" rel=\"stylesheet\">";
$summernote_js = "<script src=\"https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js\"></script>";

include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/header.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/category_func.php');

$pid = $_GET['pid'];
if(!isset($pid)){
  echo "<script>
  alert('상품정보가 없습니다.');
  location.href = 'product_list.php';
  </script>";

}
if(!isset($_SESSION['AUID'])){
  echo "
    <script>
      alert('관리자로 로그인해주세요');
      location.href = '../login.php';
    </script>
  ";
}


$sql = "SELECT * FROM products WHERE pid= $pid";
$result = $mysqli->query($sql);
$data = $result->fetch_object();

$cate = $data->cate;
$cate1_1 = substr($cate, 0 ,5); 
$cate2_1 = substr($cate, 5 ,5);
$cate3_1 = substr($cate, 10 ,5);


/*
$cate_sql = "SELECT name FROM category WHERE code IN ('$cate1', '$cate2', '$cate3')";
$result = $mysqli->query($cate_sql);

$category_names = [];
while ($row = $result->fetch_object()) {
  $category_names[] = $row->name;
}
//배열 $category_names의 사이에 '/' 값을 추가
$category_display = implode(' / ', $category_names);  // js의 join
*/
$addImages = [];

$addimg_sql = "SELECT * FROM product_image_table WHERE pid=$pid";
$addimg_result = $mysqli->query($addimg_sql);
//$addimg_data = $add_result->fetch_object();

while($addimg_data = $addimg_result->fetch_object()){
  $addImages[] = $addimg_data;
}  

$mysqli->close();

?>

<div class="container">
  <h1><?= $title ?></h1>
  <form action="product_edit_ok.php" id="product_save" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="product_image" id="product_image_id" value="">
    <input type="hidden" name="pid"  value="<?= $pid ?>">
    <input type="hidden" name="contents" id="contents" value="">
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">카테고리 선택</th>
          <td>
            <div class="row">
              <div class="col-md-4">
                <select class="form-select" id="cate1" name="cate1" aria-label="대분류 선택" required>
                  <option selected>대분류 선택</option>
                  <?php
                    foreach($cate1 as $c1){
                      $selected = '';
                      if($c1->code === $cate1_1 ){
                        $selected = 'selected';
                      }
                  ?>
                  <option value="<?= $c1->code;?>" <?= $selected ?>><?= $c1->name;?></option>
                  <?php
                    }
                  ?>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-select" id="cate2" name="cate2" aria-label="Default select example">
                  <option selected value="">대분류를 먼저 선택하세요</option>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-select" id="cate3" name="cate3" aria-label="Default select example">
                  <option selected value="">중분류를 먼저 선택하세요</option>
                </select>
              </div>
            </div>
          </td>       
        </tr>
        <tr>
          <th scope="row">제품명</th>
          <td><input type="text" class="form-control" name="name" value="<?= $data->name ?>" required></td>       
        </tr>
        <tr>
          <th scope="row">배송비</th>
          <td><input type="text" class="form-control w-25" name="delivery_fee" value="<?= $data->delivery_fee ?>"></td>       
        </tr>
        <tr>
          <th scope="row">제품가격</th>
          <td><input type="text" class="form-control w-25" name="price" value="<?= $data->price ?>" required></td>       
        </tr>
        <tr>
          <th scope="row">세일가격</th>
          <td><input type="text" class="form-control w-25" name="sale_price" value="<?= $data->sale_price ?>"></td>       
        </tr>
        <tr>
          <th scope="row">세일비율</th>
          <td><input type="text" class="form-control w-25" name="sale_ratio" value="<?= $data->sale_ratio ?>"></td>       
        </tr>
        <tr>
          <th scope="row">전시옵션</th>
          <td>
            <label class="form-check-label" for="ismain">메인</label>
            <input class="form-check-input" <?= $data->ismain  == 1 ? 'checked' : '' ?> type="checkbox" value="1" name="ismain" id="ismain">
            
            <label class="form-check-label" for="isnew">신제품</label>
            <input class="form-check-input" <?= $data->isnew  == 1 ? 'checked' : '' ?> type="checkbox" value="1" name="isnew" id="isnew">
            
            <label class="form-check-label" for="isbest">베스트</label>
            <input class="form-check-input" <?= $data->isbest  == 1 ? 'checked' : '' ?> type="checkbox" value="1" name="isbest" id="isbest">
            
            <label class="form-check-label" for="isrecom">추천</label>
            <input class="form-check-input" <?= $data->isrecom  == 1 ? 'checked' : '' ?> type="checkbox" value="1" name="isrecom" id="isrecom">
          </td>       
        </tr>
        <tr>
          <th scope="row">위치지정</th>
          <td>          
            <select class="form-select w-25" name="locate" aria-label="상품 노출 위치 지정">
              
              <option value="0" <?= $data->locate == 0 ? 'selected' : '' ?>>지정안함</option>
              <option value="1" <?= $data->locate == 1 ? 'selected' : '' ?>>1번 위치</option>
              <option value="2" <?= $data->locate == 2 ? 'selected' : '' ?>>2번 위치</option>
            </select>
          </td>       
        </tr>
        <tr>
        <th scope="row">판매여부</th>
          <td>
              <select class="form-select w-25" aria-label="판매여부" name="status[<?= $data->pid; ?>]" id="status[<?= $data->pid; ?>]">
                <option value="-1" <?php if($data->status == -1){echo 'selected';}?>>판매중지</option>
                <option value="0" <?php if($data->status == 0){echo 'selected';}?>>대기</option>
                <option value="1" <?php if($data->status == 1){echo 'selected';}?>>판매중</option>
              </select>
            </td>
        </tr>  
        <tr>
          <th scope="row">판매종료일</th>
          <td>
            <input type="text" name="sale_end_date" id="datepicker" class="form-control w-25" value="<?= $data->sale_end_date ?>">
          </td>       
        </tr>          
        <tr>
          <th scope="row">상세설명</th>
          <td>
            <div id="content"><?= $data->content ?></div>
          </td>       
        </tr>          
        <tr>
          <th scope="row">썸네일</th>
          <td>
          <img src="<?= $data->thumbnail; ?>" width="90" alt="">
            <input type="file" accept="image/*" class="form-control w-50" name="thumbnail" value="" >
          </td>       
        </tr>          
        <tr>
          <th scope="row">추가이미지</th>
          <td>
            <input type="file" multiple accept="image/*" name="upfile[]" id="upfile" class="visually-hidden">
            <button type="button" class="btn btn-primary btn-sm" id="addImage">이미지 추가</button>
            <div id="addedImages" class="d-flex gap-3">
              <?php
              if(isset($addImages)){
                foreach($addImages as $img){
              ?>
              <div class="card" style="width: 9rem;" id="<?= $img->imgid ?>">
              <img src="/abcmall/admin/upload/<?= $img->filename ?>" class="card-img-top" alt="..." >
              <div class="card-body">                
                <button type="button" class="btn btn-danger btn-sm">삭제</button>
              </div>
            </div>
              <?php
                }
              }
              ?>
            </div>
          </td>       
        </tr>          
        
      </tbody>
    </table>
    <button class="btn btn-primary">상품등록</button>
  </form>
</div>
<script src="http://<?= $_SERVER['HTTP_HOST']?>/abcmall/admin/js/category_option.js"></script>
<script>


  $('#addImage').click(function(){
    $('#upfile').trigger('click');
  });

  $('#upfile').change(function(){
    let files = $(this).prop('files');
    console.log(files);

    for(let i = 0; i<files.length; i++){
      attachFile(files[i]);
    }

  });

  function attachFile(file){

    let formData = new FormData(); //페이지전환 없이, 폼전송없이(submit 이벤트 없이) 파일 전송, 빈폼을 생성
    formData.append('savefile',file); //<input type="file" name="savefile" value="file"> 이미지 첨부

    $.ajax({
      url:'product_image_save.php',
      data:formData,
      cache: false, //이미지 정보를 브라우저 저장, 안한다
      contentType:false, //전송되는 데이터 타입지정, 안한다.
      processData:false, //전송되는 데이터 처리(해석), 안한다.
      dataType:'json', //product_image_save.php이 반환하는 값의 타입
      type:'POST', //파일 정보를 전달하는 방법
      success:function(returned_data){ //product_image_save.php과 연결(성공)되면 할일
        console.log(returned_data);

        if(returned_data.result === 'size'){
          alert('10MB 이하만 첨부할 수 있습니다.');
          return;
        } else if(returned_data.result === 'image'){
          alert('이미지만 첨부할 수 있습니다.');
          return;   
        } else if(returned_data.result === 'error'){
          alert('첨부실패, 관리자에게 문의하세요');
          return;
        } else{ //파일 첨부가 성공하면
          let imgids = $('#product_image_id').val() + returned_data.imgid + ',';
          $('#product_image_id').val(imgids);
          let html = `
            <div class="card" style="width: 9rem;" id="${returned_data.imgid}">
              <img src="../upload/${returned_data.savefile}" class="card-img-top" alt="...">
              <div class="card-body">                
                <button type="button" class="btn btn-danger btn-sm">삭제</button>
              </div>
            </div>
          `;
          $('#addedImages').append(html);
        }
      }

    })
  } //Attachfile
  //$('#addedImages button');
  //변수.addEventListener('이벤트종류','대상',function(){})

  makeOption($('#cate1'), 2, '중분류', $('#cate2'));
  

  // 주시할 요소 식별
  const cate2 = document.querySelector("#cate2");

  // 콜백 함수를 지정한 새로운 MutationObserver 인스턴스 생성
  // observer 변수에 할당
  const cate2_observer = new MutationObserver(() => {
    $('#cate2 option').each(function(){
      if($(this).attr('value') == '<?= $cate2_1 ?>'){
        $(this).prop('selected', true);
      }
    });
    //생성 시기가 중요하다
    makeOption($('#cate2'), 3, '소분류', $('#cate3'));
  });

  //
  // 위 MutationObserver 인스턴스의 observe() 메서드를 호출
  // 주시할 요소와 옵션 객체 전달
  cate2_observer.observe(cate2, { childList: true });
  // 주시할 요소 식별
  const cate3 = document.querySelector("#cate3");

  // 콜백 함수를 지정한 새로운 MutationObserver 인스턴스 생성
  // observer 변수에 할당
  const cate3_observer = new MutationObserver(() => {
    $('#cate3 option').each(function(){
      if($(this).attr('value') == '<?= $cate3_1 ?>'){
        $(this).prop('selected', true);
      }
    });
    //생성 시기가 중요하다
    makeOption($('#cate2'), 3, '소분류', $('#cate3'));
  });

//
// 위 MutationObserver 인스턴스의 observe() 메서드를 호출
// 주시할 요소와 옵션 객체 전달
cate3_observer.observe(cate3, { childList: true });


  /*setTimeout(() => {
    $('#cate2 option').each(function(){
      console.log($(this));
    if($(this).attr('value') == '<?= $cate2_1 ?>'){
      $(this).attr('selected', 'selected');
    }
  })
  }, 200); */
  

  $('#addedImages').on('click','button', function(){
    let imgid = $(this).closest('.card').attr('id');
    //console.log(imgid);
    file_delete(imgid);
  });


  function file_delete(imgid){

    if(!confirm('정말 삭제할까요?')){      //조건이 false일때
      return false;//거짓 반환,종료      
    }

    let data = {
      imgid:imgid
    }
    $.ajax({
      async:false, //동기방식, image_delete.php의 결과를 받으면 진행      
      url:'image_delete.php',
      data:data, //삭제할 번호 data 객체를 전달
      type:'post', //data를 전달할 방식
      dataType:'json', //json형식이용해서, 객체로 받겠다.
      error:function(){
        //연결실패시 할일
      },
      success:function(returned_data){
        //연결성공시 할일, image_delete.php가 echo 출력해준 값을 매배견수 returend_data 받자
        if(returned_data.result == 'mine'){
          alert('본인이 작성한 제품의 이미지만 삭제할 수 있습니다.');
          return;
        } else if(returned_data.result == 'error'){
          alert('삭제 실패!');
          return;
        } else {
          $('#'+imgid).remove(); //요소(tag)를 삭제
        }
      }
    })
  }




  $( "#datepicker" ).datepicker({
    dateFormat: "yy-mm-dd"
  });

  let target = $('#content');
  target.summernote({
    height:300,
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']]
    ]
  });

  $('#product_save').submit(function(e){
    var markup = target.summernote('code');
    let content = encodeURIComponent(markup);
    $('#contents').val(markup);
  });

</script>
<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/footer.php');
?>
