module.exports = {
  HTML:function(title='',text='', num=''){
    var html= `
<!doctype html>
<html lang="ko">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

<script src="https://cdn.tiny.cloud/1/tmp6b6lmrc0lwnbetfnznc8pifm2wizrsqyholsicrqddu1w/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

<script>
      tinymce.init({
      selector: "textarea#editor",
      skin: "bootstrap",
      plugins: "lists, link, image, media",
      toolbar:
        "h1 h2 bold italic strikethrough blockquote bullist numlist backcolor | link image media | removeformat help",
      menubar: true,
      language: "ko_KR",
        forced_root_block : false
        });
</script>


    <title>write your issue</title>
  </head>

  <body>

<form action="/read/editProcess" method="post">
    <div class="container mt-4 mb-4">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8">
          <a href="/"><h1 class="h2 mb-4">Go back to Home</h1></a>
          <label>Describe the issue in detail</label>
          <input type="hidden" value="${num}" name="id">
          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">  &nbsp;&nbsp; Title  &nbsp;&nbsp;</span>
            
            <input type="text" class="form-control" name= "title" aria-label="Sizing example input" value="${title}" aria-describedby="inputGroup-sizing-lg">
          </div>
          <div class="form-group">
             <textarea name = "text" id="editor">${text}</textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
</form>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
`
    return html;
  }
}