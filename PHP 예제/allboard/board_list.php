<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/admin/inc/header.php');
?>
<select class="form-select" name="category" id="category" aria-label="Default select example" required>
  <option value="all" selected>전체 게시판</option>
  <option value="notice">공지사항</option>
  <option value="free">자유게시판</option>
  <option value="event">이벤트</option>
  <option value="qna">질문과답변</option>
</select>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">제목</th>
      <th scope="col">내용</th>
      <th scope="col">등록일</th>
    </tr>
  </thead>
  <tbody id="board-table-body">
    <?php
    //전체 게시판 조회
    $sql = "SELECT * FROM board ORDER BY regdate DESC";
    $result = $mysqli->query($sql);

    $list = '';
    while ($data = $result->fetch_object()) {
      $title = $data->title;
      // if (iconv_strlen($title) > 10) {
      //   $title = iconv_substr($title, 0, 10) . '...';
      // }
    ?>
      <tr>
        <th scope="row"><?= $data->bid ?></th>
        <td><?= $title ?></td>
        <td><?= $data->content ?></td>
        <td><?= $data->regdate ?></td>
      </tr>
    <?php
    }
    ?>
  </tbody>
</table>
<script>
  $('#category').change(function() {
    const selectedCategory = $(this).val();

    // 선택된 카테고리가 없으면 테이블을 초기화
    if (!selectedCategory) {
      $('#board-table-body').html('');
      return;
    }
    let data = ({
      category: selectedCategory
    })

    // AJAX 요청으로 선택된 카테고리의 데이터를 가져옴
    $.ajax({
      url: 'search_board.php',
      type: 'GET',
      data: data,
      dataType: 'json',
      success: function(data) {
        let rows = '';
        console.log(data);
        // 받아온 데이터를 테이블 행으로 변환
        data.forEach((row, idx) => {
          rows += `
            <tr>
              <th scope="row">${idx + 1}</th>
              <td>${row.title}</td>
              <td>${row.content}</td>
              <td>${row.regdate}</td>
            </tr>
          `;
        });
        // 테이블 바디에 새로운 행을 추가
        $('#board-table-body').html(rows);
      },
      error: function(xhr, status, error) {
        console.error('데이터 조회 오류:', error);
      }
    });
  });
</script>
<?php
include_once($_SERVER['DOCUMENT_ROOT'] . '/admin/inc/footer.php');
?>