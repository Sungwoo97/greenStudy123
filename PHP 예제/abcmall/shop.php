<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/inc/header.php');

$search_where = '';

$cate_code = $_GET['cate_code'] ?? '';

if($cate_code){
  // $search_where = $search_where." and cate LIKE '$cates%'";
  $search_where .= " and cate LIKE '%$cate_code%'";
}

//데이터의 개수 조회
$page_sql = "SELECT COUNT(*) AS cnt FROM products WHERE 1=1 $search_where";
$page_result = $mysqli->query($page_sql);
$page_data = $page_result->fetch_assoc();
$row_num = $page_data['cnt'];

//페이지네이션 
if(isset($_GET['page'])){
  $page = $_GET['page'];
}else{
  $page = 1;
}

$list = 9;
$start_num=($page-1)*$list;
$block_ct = 5;
$block_num = ceil($page/$block_ct); //$page1/5 0.2 = 1

$block_start = (($block_num-1)*$block_ct) + 1;
$block_end = $block_start + $block_ct - 1;

$total_page = ceil($row_num/$list); //총75개 10개씩, 8
$total_block = ceil($total_page/$block_ct);

if($block_end > $total_page ) $block_end = $total_page;

 
$sql = "SELECT * FROM products WHERE 1=1 $search_where ORDER BY pid DESC LIMIT $start_num, $list"; //products 테이블에서 모든 데이터를 조회

$result = $mysqli->query($sql); //쿼리 실행 결과


while($data = $result->fetch_object()){
  $dataArr[] = $data;
}

?>

        <section class="shop_grid_area section_padding_100">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="shop_sidebar_area">
                           
                            <div class="widget catagory mb-50">
                                <!--  Side Nav  -->
                                <div class="nav-side-menu">
                                    <h6 class="mb-0">Catagories</h6>
                                    <div class="menu-list">
                                        <ul id="menu-content2" class="menu-content collapse out">
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#women2">
                                                <a href="#">Woman wear</a>
                                                <ul class="sub-menu collapse show" id="women2">
                                                    <li><a href="#">Midi Dresses</a></li>
                                                    <li><a href="#">Maxi Dresses</a></li>
                                                    <li><a href="#">Prom Dresses</a></li>
                                                    <li><a href="#">Little Black Dresses</a></li>
                                                    <li><a href="#">Mini Dresses</a></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#man2" class="collapsed">
                                                <a href="#">Man Wear</a>
                                                <ul class="sub-menu collapse" id="man2">
                                                    <li><a href="#">Man Dresses</a></li>
                                                    <li><a href="#">Man Black Dresses</a></li>
                                                    <li><a href="#">Man Mini Dresses</a></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#kids2" class="collapsed">
                                                <a href="#">Children</a>
                                                <ul class="sub-menu collapse" id="kids2">
                                                    <li><a href="#">Children Dresses</a></li>
                                                    <li><a href="#">Mini Dresses</a></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#bags2" class="collapsed">
                                                <a href="#">Bags &amp; Purses</a>
                                                <ul class="sub-menu collapse" id="bags2">
                                                    <li><a href="#">Bags</a></li>
                                                    <li><a href="#">Purses</a></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#eyewear2" class="collapsed">
                                                <a href="#">Eyewear</a>
                                                <ul class="sub-menu collapse" id="eyewear2">
                                                    <li><a href="#">Eyewear Style 1</a></li>
                                                    <li><a href="#">Eyewear Style 2</a></li>
                                                    <li><a href="#">Eyewear Style 3</a></li>
                                                </ul>
                                            </li>
                                            <!-- Single Item -->
                                            <li data-toggle="collapse" data-target="#footwear2" class="collapsed">
                                                <a href="#">Footwear</a>
                                                <ul class="sub-menu collapse" id="footwear2">
                                                    <li><a href="#">Footwear 1</a></li>
                                                    <li><a href="#">Footwear 2</a></li>
                                                    <li><a href="#">Footwear 3</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="widget price mb-50">
                                <h6 class="widget-title mb-30">Filter by Price</h6>
                                <div class="widget-desc">
                                    <div class="slider-range">
                                        <div data-min="0" data-max="3000" data-unit="$" class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                                            <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                                            <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                            <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                        </div>
                                        <div class="range-price">Price: 0 - 1350</div>
                                    </div>
                                </div>
                            </div>

                            <div class="widget color mb-70">
                                <h6 class="widget-title mb-30">Filter by Color</h6>
                                <div class="widget-desc">
                                    <ul class="d-flex justify-content-between">
                                        <li class="gray"><a href="#"><span>(3)</span></a></li>
                                        <li class="red"><a href="#"><span>(25)</span></a></li>
                                        <li class="yellow"><a href="#"><span>(112)</span></a></li>
                                        <li class="green"><a href="#"><span>(72)</span></a></li>
                                        <li class="teal"><a href="#"><span>(9)</span></a></li>
                                        <li class="cyan"><a href="#"><span>(29)</span></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="widget size mb-50">
                                <h6 class="widget-title mb-30">Filter by Size</h6>
                                <div class="widget-desc">
                                    <ul class="d-flex justify-content-between">
                                        <li><a href="#">XS</a></li>
                                        <li><a href="#">S</a></li>
                                        <li><a href="#">M</a></li>
                                        <li><a href="#">L</a></li>
                                        <li><a href="#">XL</a></li>
                                        <li><a href="#">XXL</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="widget recommended">
                                <h6 class="widget-title mb-30">Recommended</h6>

                                <div class="widget-desc">
                                    <!-- Single Recommended Product -->
                                    <div class="single-recommended-product d-flex mb-30">
                                        <div class="single-recommended-thumb mr-3">
                                            <img src="img/product-img/product-10.jpg" alt="">
                                        </div>
                                        <div class="single-recommended-desc">
                                            <h6>Men’s T-shirt</h6>
                                            <p>$ 39.99</p>
                                        </div>
                                    </div>
                                    <!-- Single Recommended Product -->
                                    <div class="single-recommended-product d-flex mb-30">
                                        <div class="single-recommended-thumb mr-3">
                                            <img src="img/product-img/product-11.jpg" alt="">
                                        </div>
                                        <div class="single-recommended-desc">
                                            <h6>Blue mini top</h6>
                                            <p>$ 19.99</p>
                                        </div>
                                    </div>
                                    <!-- Single Recommended Product -->
                                    <div class="single-recommended-product d-flex">
                                        <div class="single-recommended-thumb mr-3">
                                            <img src="img/product-img/product-12.jpg" alt="">
                                        </div>
                                        <div class="single-recommended-desc">
                                            <h6>Women’s T-shirt</h6>
                                            <p>$ 39.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="shop_grid_product_area">
                            <div class="row">
                            <?php
                            // 변수명 $dataArr의 값을 foreach로 출력
                            if(isset($dataArr)){
                              foreach($dataArr as $item){
                                // 각 상품의 cate 컬럼의 값에서 5자리를 추출하여 변수명 $class에 할당
                                $class = substr($item->cate, 0, 5);
                                
                          
                            ?>
                                <!-- Single gallery Item Start -->
                                <div class="col-12 col-sm-6 col-md-4 single_gallery_item  wow fadeInUpBig <?= $class ?>"
                                    data-wow-delay="0.2s">
                                    <!-- Product Image -->
                                    <div class="product-img">
                                        <a href="product-details.php?pid=<?= $item->pid ?>" style="background-image:url(<?=$item->thumbnail ?>)"></a>
                                    </div>
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <h4 class="product-price"><?= $item->price ?></h4>
                                        <p><a href="product-details.php?pid=<?= $item->pid ?>"><?= $item->name ?></a></p>
                                        <!-- Add to Cart -->
                                        <a href="#" class="add-to-cart-btn">ADD TO CART</a>
                                    </div>
                                </div>
                              <?php
                                }
                              }
                              ?>
                            </div>
                        </div>

                        <div class="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s">
                            <nav aria-label="Page navigation">
                                <ul class="pagination pagination-sm">
                                    <li class="page-item active"><a class="page-link" href="#">01</a></li>
                                    <li class="page-item"><a class="page-link" href="#">02</a></li>
                                    <li class="page-item"><a class="page-link" href="#">03</a></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <?php
        include_once($_SERVER['DOCUMENT_ROOT'].'/abcmall/inc/footer.php');
        ?>