<?php
$title = "상품상세";
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/header.php');

$pid = $_GET['pid'];
if(!isset($pid)){
  echo "<script>
  alert('상품정보가 없습니다.');
  location.href = 'product_list.php';
  </script>";

}

$sql = "SELECT * FROM products WHERE pid= $pid";
$result = $mysqli->query($sql);
$data = $result->fetch_object();

$cate = $data->cate;
$cate1 = substr($cate, 0 ,5); 
$cate2 = substr($cate, 5 ,5) ;
$cate3 = substr($cate, 10 ,5) ;

$cateArr = array($cate1, $cate2, $cate3);

$cate_sql = "SELECT name FROM category WHERE code IN ('$cate1', '$cate2', '$cate3')";
$result = $mysqli->query($cate_sql);

$category_names = [];
while ($row = $result->fetch_object()) {
  $category_names[] = $row->name;
}
//배열 $category_names의 사이에 '/' 값을 추가
$category_display = implode(' / ', $category_names);  // js의 join



/*
$cate_name = '';
foreach($cateArr as $c1){
  echo $c1;
  if(!empty($c1)){
    $cate_sql = "SELECT * FROM category WHERE code='$c1'";
    $cate_result = $mysqli->query($cate_sql);
    $cate_data = $cate_result->fetch_object();
    $cate_name .= $cate_data->name;
  }
 }
*/

?>

  <div class="container">
    <h1>상품 상세</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">구분</th>
          <th scope="col">내용</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">제품명</th>
          <td><?= $data->name ?></td>
        </tr>
        <tr>
          <th scope="row">썸네일</th>
          <td> <img src="<?= $data->thumbnail; ?>" width="90" alt=""></td>
        </tr>
        <tr>
          <th scope="row">카테고리</th>
          <td> <?= $category_display; ?></td>
        </tr>
        <tr>
          <th scope="row">상세설명</th>
          <td><?= $data->content ?></td>
        </tr>
        <tr>
          <th scope="row">가격</th>
          <td><?= $data->price ?></td>
        </tr>
        <tr>
          <th scope="row">세일가</th>
          <td><?= $data->sale_price ?></td>
        </tr>
        <tr>
          <th scope="row">할인율</th>
          <td><?= $data->sale_ratio ?></td>
        </tr>
        <tr>
          <th scope="row">전시옵션</th>
            <td>
              <label class="form-check-label" for="ismain">메인</label>
              <input class="form-check-input" <?php echo $data->ismain ? 'checked' : ''; ?> type="checkbox"   disabled>
              
              <label class="form-check-label" for="isnew">신제품</label>
              <input class="form-check-input" <?php echo $data->isnew ? 'checked' : ''; ?> type="checkbox"   disabled>
              
              <label class="form-check-label" for="isbest">베스트</label>
              <input class="form-check-input" <?php echo $data->isbest ? 'checked' : ''; ?> type="checkbox"  disabled>
              
              <label class="form-check-label" for="isrecom">추천</label>
              <input class="form-check-input" <?php echo $data->isrecom ? 'checked' : ''; ?> type="checkbox"   disabled>
            </td>  
        </tr>
        <tr>
          <th scope="row">판매종료일</th>
          <td><?= $data->sale_end_date ?></td>
        </tr>
  
      </tbody>
    </table>
    <hr>
    <ul class="d-flex gap-3 justify-content-end list-unstyled">
      <li><button class="btn btn-secondary btn-sm" id="goback">상품 목록</button></li>
      <li><a href="" class="btn btn-secondary btn-sm">수정</a></li>
      <li><a href="" class="btn btn-danger btn-sm">삭제</a></li>
    </ul>
  </div>
  <script>
    $('#goback').click(function(){
      history.back();
    })
  </script>
<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/admin/inc/footer.php');
?>
