<?php
$title = "상품등록";
$summernote_css = "<link href=\"https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.css\" rel=\"stylesheet\">";
$summernote_js = "<script src=\"https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js\"></script>";

include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/header.php');

//대분류 조회 (step = 분류의 단계)
$sql = "SELECT * FROM category WHERE step = 1";
// sql의 문장에 문제가 없으면 실행하고 문제가 있다면 실행을 중지하고 실행 후 에러가 무엇인지 출력
$result = $mysqli->query($sql) or die('query error :'.$mysqli->error);
while($data = $result->fetch_object()){ //조회된 값들마다 할 일, 있으면 $data할당
  $cate1[] = $data; //$cate1 배열에 $data 할당
}
?>
  <div class="container">
    <h1>상품등록</h1>
    <table class="table">
      <tbody>
        <tr>
          <th scope="row">카테고리 선택</th>
          <td>
            <div class="row">
              <div class="col-md-4">
                <select class="form-select" id="cate1" aria-label="대분류 선택">
                  <option selected>대분류 선택</option>
                  <?php
                    foreach($cate1 as $c1){ 
                  ?>
                  <option value="<?= $c1->code ?>"><?= $c1->name ?></option>
                  <?php
                    }
                  ?>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-select" id="cate2" aria-label="중분류 선택">
                  <option selected>대분류를 먼저 선택하세요</option>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-select" id="cate3" aria-label="Default select example">
                  <option selected>중분류를 먼저 선택하세요</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">제품명</th>
          <td><input type="text" class="form-control" name="name" ></td>
        </tr>
        <tr>
          <th scope="row">배송비</th>
          <td><input type="text" class="form-control w-25" name="delivery_fee" ></td>
        </tr>
        <tr>
          <th scope="row">제품가격</th>
          <td><input type="text" class="form-control w-25" name="price" ></td>
        </tr>
        <tr>
          <th scope="row">세일가격</th>
          <td><input type="text" class="form-control w-25" name="sale_price" ></td>
        </tr>
        <tr>
          <th scope="row">세일비율</th>
          <td><input type="text" class="form-control w-25" name="sale_ratio" ></td>
        </tr>
        <tr>
          <th scope="row">전시옵션</th>
          <td>
              <input class="form-check-input" type="checkbox" value="1" id="ismain" name="ismain">
              <label class="form-check-label" for="ismain">메인</label>
              <input class="form-check-input" type="checkbox" value="1" id="isnew" name="isnew">
              <label class="form-check-label" for="isnew">신제품</label>
              <input class="form-check-input" type="checkbox" value="1" id="isbest" name="isbest">
              <label class="form-check-label" for="isbest">베스트</label>
              <input class="form-check-input" type="checkbox" value="1" id="isrecom" name="isrecom">
              <label class="form-check-label" for="isrecom">추천</label>
          </td>
          </tr>
          <tr>
          <th scope="row">위치지정</th>
          <td>
            <select class="form-select w-25" name="locate" aria-label="상품 노출 위치 지정">
              <option selected>위치지정</option>
              <option value="0">지정안함</option>
              <option value="1">1번 위치</option>
              <option value="2">2번 위치</option>
            </select>
          </td>
        </tr>
        <tr>
          <th scope="row">판매종료일</th>
          <td>
            <input type="text" class="form-control w-25" name="sale_end_date" id="datepicker">
           </td>
          </tr>
          <tr>
            <th scope="row">상세설명</th>
            <td>
              <div id="content"></div>
            </td>
          </tr> 
          <tr>
            <th scope="row">썸네일</th>
            <td>
              <input type="file" accept="image/*" class="form-control w-50" name="thumbnail">
            </td>
          </tr>   
          <tr>
            <th scope="row">추가이미지</th>
            <td>
              <input type="file" multiple accept="image/*" name="upfile[]" id="upfile" class="visually-hidden">
              <button type="button" class="btn btn-primary btn-sm" id="addImage">이미지 추가</button>
              <div id="addedImages"></div>
            </td>
          </tr>                
        </tbody>
      </table>
    </div>
  <script>
    $('#addImage').click(function(){
      $('#upfile').trigger('click');
    });
    $('#upfile').change(function(){
      let files = $(this).prop('files');
      console.log(files);
      Array.from(files).forEach(file => {
        attachFile(file);
      });
      // for(let i = 0; i<files.length; i++){
      //   attachFile(files[i]);
      // }
      // files.forEach((item)=>{
      //   attachFile(item);
      // });
    });

    function attachFile(file){
      
      //빈 객체(폼) 생성
      let formData = new FormData();  //폼 전송 X(submit 이벤트 X) 파일 전송
      // 이미지 첨부
      formData.append('savefile', file); // input type="file" name="savefile" value="file"
      console.log(formData);
      $.ajax({
        url: 'product_image_save.php',
        data:formData,
        cashe: false,   //이미지 정보를 부라우저 저장, 안한다
        contentType : false,  //전송되는 데이터 타입지정, 안한다
        processData: false, //전송되는 데이터 처리(해석), 안한다
        dataType: 'json', //product_image_save.php가 반환하는 값의 타입
        type: 'POST',   //파일 정보를 전달하는 방식
        success:function(returned_data){ //product_image_save.php와 연결되면 할일
          console.log(returned_data);

          if(returned_data.result === 'size'){
            alert('10MB 이하만 첨부할 수 있습니다.');
            return;   //아무것도 없는 것을 반환
          }else if(returned_data.result === 'Image'){
            alert('이미지만 첨부할 수 있습니다.');
            return;   //아무것도 없는 것을 반환
          }else if(returned_data.result === 'error'){
            alert('첨부실패, 관리자에게 문의하세요.');
            return;   //아무것도 없는 것을 반환
          }else{   //파일 첨부가 성공하면
            let html = `
            <div class="card" style="width: 18rem;">
              <img src="../upload/${returned_data.savefile}" class="card-img-top" alt="...">
              <div class="card-body">
                <button type="button" class="btn btn-danger btn-sm">삭제</button>
              </div>
            </div>
            `;
            $('#addedImages').append(html);
          }
        }
      });

    }

      //카테고리 페이지의 대분류가 변경될 때
    $('#cate1').change(function(){
      makeOption($(this), 2, '중분류', $('#cate2'));
    });
    //카테고리 페이지의 중분류가 변경될 때
    $('#cate2').change(function(){
      makeOption($(this), 3, '소분류', $('#cate3'));
    });
 

    async function makeOption(e,step,category,target){
      let cate = e.val();

      let data = new URLSearchParams({
        cate:cate,
        step:step,
        category:category
      });


      try{
        const response = await fetch('printOption.php',{
          method:'post',
          headers: { //전송되는 데이터의 타입
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body:data
        });
        if(!response.ok){ //연결에러가 있다면
          throw new Error('연결에러');
        }
        const result = await response.text(); //응답의 결과를
        target.html(result);
        
      }catch(error){
        console.log(error);
      }
  }

  $( "#datepicker" ).datepicker({
  dateFormat: "yy-mm-dd"
  });
  $('#content').summernote({
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
</script>
<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/footer.php');
?>