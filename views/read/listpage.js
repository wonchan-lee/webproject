module.exports = {
  HTML:function(list){
        
    ///계산 목록으로 가는 link
    var j=0;
    var num = parseInt(list.length/9);
    var pageNum=``;
    while(j<num+1){
      j++;
      pageNum+=`<input type="button" onclick="
      fetch('page/?num=${j}').then(function(response){
        response.text().then(function(text){
          document.getElementById('article').innerHTML = text;
        })
      })"
      value="${j}"> &nbsp; &nbsp;`;
    }
    ///계산
    
    var html= `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.83.1">
    <title>Article List</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/album/">

    

    <!-- Bootstrap core CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">


    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
     #submit{
       border-top-left-radius: 0;
       border-bottom-left-radius: 0;
       border-top-right-radius: 0;
       border-bottom-right-radius: 0;
      
       position: relative;
       left: -1px;
       padding-left: 10.539px;
       padding-right: 10.539px;
     }
     #deletesubmit{
       border-top-left-radius: 0;
       border-bottom-left-radius: 0;
       position: relative;
       left: -2px;
       padding-left: 6px;
       padding-right: 6px;
     }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
  </head>
  <body>
    
<header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Follow on Twitter</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="/" class="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>Article List</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

<main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Article</h1>
        <p class="lead text-muted">hello</p>
        <p>
          <a href="/write/" class="btn btn-primary my-2" style="padding-top: 4px;">
          <!-- 펜 아이콘 -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16" style="margin-bottom: 2.1px;" >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
              </svg>
          &nbsp; Write Article</a>
          &nbsp;
          <a href="/" class="btn btn-secondary my-2" style="padding-top: 4px;">
          <!-- 집 아이콘 -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16" style="margin-bottom: 3px;">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
          </svg>
          &nbsp;Go to Home</a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="article">
              ${this.page(list, 1)}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div align="center" style="margin-top: 20px;">${pageNum}</div>

</main>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>


    <script src="dist/js/bootstrap.bundle.min.js"></script>

      
  </body>
</html>
    `
    return html;
  },
  
  
  page: function(list={}, num=0){
    console.log('test');
    console.log(list[10].text);
    
    
    var i=(num-1)*9;
    var test=
        `<!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <meta name="description" content="">
              <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
              <meta name="generator" content="Hugo 0.83.1">
              <title>Article List</title>

              <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/album/">




            </head>
            <body>
                    `;
    var img =``;
    // 목록 수
    var number = parseInt(list.length/9)+1;
    
    // 나머지 글 갯수
    var last = list.length%9;
    //
    var listnum=0;
    if(num == number){
      listnum = i+last;
    }else{
      listnum = num*9;
    }
    while(i<listnum){
      if(list[i].text.indexOf('<img src="') === -1){
        img = `<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>`+list[i].id+`</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Image</text></svg>`  
      }else{
        // 이미지 사이즈 360x225
        img = `<img  class="bd-placeholder-img card-img-top" width="100%" height="225" src="${list[i].text.substring(list[i].text.indexOf('<img src="')+10 ,list[i].text.indexOf('"',list[i].text.indexOf('<img src="')+10))}" style="border-bottom: 1px solid black;">`
      }
      test+=`<div class="col">
          <div class="card shadow-sm"> 
            ${img}
            <div class="card-body">
              <p class="card-text">`+list[i].title+`</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" onclick="window.location.href = '/read/page/?num=`+list[i].id+`'" class="btn btn-sm btn-outline-secondary">View</button>
                  <form action="/read/editPage" method="post">
                    <input type="hidden" name="num" value="`+list[i].id+`">
                    <input type="submit" value="Edit" class="btn btn-sm btn-outline-secondary" id="submit"></button>
                  </form>
                  <form action="/read/delete" method="post">
                    <input type="hidden" name="num" value="`+list[i].id+`">
                    <input type="submit" value="delete" class="btn btn-sm btn-outline-secondary" id="deletesubmit"></button>
                  </form>
                </div>
                <small class="text-muted">작성자: ${list[i].author} &nbsp; 조회수 : ${list[i].views}</small>
              </div>
            </div>
          </div>
        </div>`;
      i++;
    }
    test+=`
          </div>

  </body>
</html>`;
    return test;
  }
}