function generateHtml()  {
return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="./style/style.css">
  <title>My Team</title>
</head>
<body>
  
  <div class="container-fluid">
    <div class="row">
        <div class="col-12 jumbotron mb-5 bg-success" style="height: 100px;"">
            <h1 class="text-center text-white">My Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="row team-area col-12 d-flex justify-content-center">
            <!-- Manager card -->
<div class="card" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">Name</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> Manager</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email: <a href=""></a></li>
          <li class="list-group-item">Office number: </li>
      </ul>
  </div>
</div>

<!-- Engineer card -->

<div class="card" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">Name</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID:</li>
          <li class="list-group-item">Email: <a href=""></a></li>
          <li class="list-group-item">Github: </li>
      </ul>
  </div>
</div>

<!-- Intern card -->

<div class="card" style="width: 18rem;">
<div class="card-header bg-primary text-white">
    <h2 class="card-title">Name</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> Intern</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID:</li>
        <li class="list-group-item">Email: <a href=""></a></li>
        <li class="list-group-item">School: </li>
    </ul>
</div>
</div>
</div>
        </div>
    </div>
</div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
`
}