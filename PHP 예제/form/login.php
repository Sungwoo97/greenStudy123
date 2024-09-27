<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>로그인</title>
</head>
<body>
  <h1>Login Form</h1>
  <form action="request.php" method="POST">
    <div>
      <label for="name">Name</label>
      <input type="text" name="mb-name" id="name" placeholder="Your name">
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="mb-email" id="email" placeholder="Your email">
    </div>
    <button>로그인</button>
  </form>
  <hr>
  <form action="search.php" method="GET">
    <input type="text" name="keyword">
    <input type="submit" value="검색">
  </form>
</body>
</html>