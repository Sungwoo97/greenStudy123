<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/header.php');

//관리자가 아니면 접속할 수 없도록 조건
if(!isset($_SESSION['AUID'])){
  echo "<script>
    alert('관리자로 로그인해주세요.');
    location.href = '../login.php';
  </script>";
}

//대분류 조회 (step = 분류의 단계)
$sql = "SELECT * FROM category WHERE step = 1";
// sql의 문장에 문제가 없으면 실행하고 문제가 있다면 실행을 중지하고 실행 후 에러가 무엇인지 출력
$result = $mysqli->query($sql) or die('query error :'.$mysqli->error);
while($data = $result->fetch_object()){ //조회된 값들마다 할 일, 있으면 $data할당
  $cate1[] = $data; //$cate1 배열에 $data 할당
}
$mysqli->close();
//  print_r($cate1);
?>
  <div class="container">
    <h1>카테고리</h1>
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
    <div class="btns mt-3">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cate1_modal">
        대분류 등록
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cate2_modal">
        중분류 등록
      </button>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cate3_modal">
        소분류 등록
      </button>
    </div>    

    <!-- Modal 1 -->
    <div class="modal fade" id="cate1_modal" tabindex="-1" aria-labelledby="cate1_modal" aria-hidden="true">
      <div class="modal-dialog">
        <form action="" data-step="1" class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">대분류 등록</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body row">
            <div class="col-md-6">
              <input type="text" class="form-control" name="code1" id="code1" placeholder="코드명을 입력하세요" pattern="A\d{4}" title="A로 시작하고 뒤에 네 자리 숫자가 와야 합니다. 예: A0001, A1234" required>
            </div>
            <div class="col-md-6">
              <input type="text" class="form-control" name="name1" id="name1" placeholder="분류명을 입력하세요" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="submit" class="btn btn-primary">등록</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal 2 -->
    <div class="modal fade" id="cate2_modal" tabindex="-1" aria-labelledby="cate2_modal" aria-hidden="true">
      <div class="modal-dialog">
        <form action="" data-step="2" class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">중분류 등록</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <select class="form-select" name="pcode2" id="pcode2" aria-label="대분류 선택">
              <option selected>대분류 선택</option>
              <?php
                foreach($cate1 as $c1){ 
              ?>
              <option value="<?= $c1->code ?>"><?= $c1->name ?></option>
              <?php
                }
              ?>
            </select>
            <div class="row mt-3">
              <div class="col-md-6">
                <input type="text" class="form-control" name="code2" id="code2" placeholder="코드명을 입력하세요" pattern="B\d{4}" title="B로 시작하고 뒤에 네 자리 숫자가 와야 합니다. 예: B0001, B1234" required>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" name="name2" id="name2" placeholder="분류명을 입력하세요" required>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="submit" class="btn btn-primary">등록</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Modal 3 -->
    <div class="modal fade" id="cate3_modal" tabindex="-1" aria-labelledby="cate3_modal" aria-hidden="true">
      <div class="modal-dialog">
        <form action="" data-step="3" class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">소분류 등록</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <select class="form-select" name="pcode3" id="pcode3" aria-label="대분류 선택">
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
              <div class="col-md-6">
                <select class="form-select" name="pcode4" id="pcode4" aria-label="중분류 선택">
                  <option selected>대분류를 먼저 선택하세요</option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <input type="text" class="form-control" name="code3" id="code3" placeholder="코드명을 입력하세요" pattern="C\d{4}" title="C로 시작하고 뒤에 네 자리 숫자가 와야 합니다. 예: C0001, C1234" required>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" name="name3" id="name3" placeholder="분류명을 입력하세요" required>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="submit" class="btn btn-primary">등록</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <script>
    //카테고리 페이지의 대분류가 변경될 때
    $('#cate1').change(function(){
      makeOption($(this), 2, '중분류', $('#cate2'));
    });
    //카테고리 페이지의 중분류가 변경될 때
    $('#cate2').change(function(){
      makeOption($(this), 3, '소분류', $('#cate3'));
    });
    // Modal 3 소분류 등록의 대분류가 변경될 때
    $('#pcode3').change(function(){
      makeOption($(this), 2, '중분류', $('#pcode4'));
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
      
    } catch(error){
      console.log(error);
    }
  }

    /*function makeOption(e, step, category, target){
      let cate = e.val();
      // console.log(cate, step, category, target);
      let data = {
        cate:cate,
        step:step,
        category:category
      }
      $.ajax({
        async:false, //printOption.php의 결과(result)가 있을때 이후 수행
        type:'post',  //요청의 타입을 post 방식
        data: data,
        dataType : 'html', // 서버로부터 반환되는 데이터의 형식
        url: "printOption.php", 
        success: function(result){
          target.html(result);
        },
        error: function(error){
          console.log(error);
          if(error.status === 404){
            alert('해당 페이지가 없습니다');
            // location.href = '404.php';
          }
        }
      }); //ajax
    }*/ //makeOption

    $('.modal-content').submit(function(e){
      e.preventDefault();
      let step = Number($(this).attr('data-step'));
      let pcode = $(`#pcode${step}`).val(); //부모코드
      let pcode1 = $(`#pcode${step+1}`).val();  //소분류 일때 부모코드
      let code = $(`#code${step}`).val();
      let name = $(`#name${step}`).val();
      console.log(pcode1);
      if(step > 1 && !pcode){
        alert('대분류를 선택하세요');
        return;
      }
      if(step > 2 && !pcode1){
        alert('중분류를 선택하세요');
        return;
      }
      if(pcode1){ //중분류가 있다면 
        pcode = pcode1;
      }
      category_save(step,pcode,code,name);
    })

    function category_save(step, pcode, code, name){
      //save_category.php
      let data = {
        name:name,
        pcode:pcode,
        code:code,
        step:step
      }
      console.log(data);
     
      $.ajax({
        async:false, //printOption.php의 결과(result)가 있을때 이후 수행
        type:'post',  //요청의 타입을 post 방식
        data: data,
        dataType : 'json', // 서버로부터 반환되는 데이터의 형식 성공 {'result' : 1} 실패 {'result' : 0} 실패 {'result' : -1}
        url: "save_category.php", 
        success: function(returned_data){
         //console.log(returned_data.result);
          if(returned_data.result == 1){
            alert('등록 완료');
            location.reload(); //새로고침
          }else if(returned_data.result == -1){
            alert('코드명 또는 분류명이 이미 사용중입니다.');
            location.reload();
          }else{
            alert('등록 실패');
          }
        },
        error: function(error){
          console.log(error);
        }
      });
    }

  </script>
<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/footer.php');
?>