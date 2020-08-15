<html>
<head>
    <title>GO-RS</title>
    <link rel="stylesheet" type="text/css" href="/css/materialize.min.css">
</head>
    <body>
    <nav role="navigation">
        <div class="nav-fixed container">
        <a href="/" class="brand-logo">GO-RS</a>
        <a href="#" class="sidenav-trigger" data-target="nav-mobile">☰</a>
        <ul class="right hide-on-med-and-down">
            <li><a href="sass.html">Antrian</a></li>
            <li><a href="collapsible.html">Fasilitas</a></li>
            <li><a href="collapsible.html">Pengaturan</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
            <li><a href="sass.html">Antrian</a></li>
            <li><a href="collapsible.html">Fasilitas</a></li>
            <li><a href="collapsible.html">Pengaturan</a></li>
        </ul>
        </div>
    </nav>
    <div id="antrian" class="container">
        <div class="card">
            <div class="card-content">
            <span class="card-title">Card Title</span>
            <a href="#" class="btn" style="position: absolute; right: 15px; top: 15px;">Hadir</a>
            <p>Keluhan saya sering kelebihan sel darah putih yang harus dikeluarkan dibantu oleh dokter wanita.</p>
            <p>10-01-2020</p>
            </div>
            </div>
        </div>
    <div id="modal1" class="modal">
        <div class="modal-content">
        <div class="row">
            <div class="col s12">
            <ul class="tabs">
                <li class="tab col s3"><a class="active" href="#test1">Login</a></li>
                <li class="tab col s3"><a href="#test2">Registrasi</a></li>
            </ul>
            </div>
            <div id="test1" class="col s12">
            <form id='loginForm'>  
                <div class="input-field col s12">
                    <input id="emaill" name="email" type="email" class="validate">
                    <label for="emaill">Email</label>
                    <!-- <span class="helper-text" data-error="wrong" data-success="right">Masukan email dengan benar!</span> -->
                </div>         
                <div class="input-field col s12">
                    <input id="passwordl" name="password" type="password" class="validate">
                    <label for="passwordl">Password</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit">Login</button>
            </form>
            </div>
            <div id="test2" class="col s12">
                  <div class="row">
                    <form class="col s12" action="/hospital/register" method="post">
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="name" type="text" class="validate">
                        <label for="name">Nama</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="add" type="text" class="validate">
                        <label for="add">Alamat</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                        <input id="first_name" type="text" class="validate">
                        <label for="first_name">Kota</label>
                        </div>
                        <div class="input-field col s6">
                        <input id="last_name" type="text" class="validate">
                        <label for="last_name">Provinsi</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="phone" type="text" class="validate">
                        <label for="phone">Nomor Handphone</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="uname" type="text" class="validate">
                        <label for="uname">Username</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate">
                        <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="password" type="password" class="validate">
                        <label for="password">Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit">Daftar</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
        <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
        <script type="text/javascript" src="/js/materialize.min.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elems);
            })
        </script>
        <script>
            function createCookie(name, value, days) {
                var expires;

                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toGMTString();
                } else {
                    expires = "";
                }
                document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
            }
            function readCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
        document.addEventListener('DOMContentLoaded', function() {
            if (readCookie('api_token')==null) {
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems, {dismissible: false});
                let i = M.Modal.getInstance(elems[0]);
                i.open();
                M.Tabs.init(document.querySelectorAll('.tabs'));
            }
        });
        </script>
        <script>
            $('#loginForm').submit(function(e){
                 /* Get from elements values */
                 e.preventDefault();
                var values = $(this).serialize();
                $.ajax({
                    url: "/hospital/login",
                    type: "post",
                    data: values ,
                    success: function (response) {
                        createCookie("api_token", response, 100);
                        location.reload();
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(textStatus, errorThrown);
                    }
                });
            })
            $.ajax({
                url: url,
                method: "get",
                headers: {
                            "Authorization" : "Bearer "+readCookie('api_token')
                        },
                success: function (response) {
                    JSON.encode(response).forEach(patients => {
                    $(#antrian).append(`<div class="card">
                            <div class="card-content">
                            <span class="card-title">${patients.name}</span>
                            <a href="#" class="btn" style="position: absolute; right: 15px; top: 15px;">Hadir</a>
                            <p>${patients.keluhan}</p>
                            <p>${patients.created_at}</p>
                            </div>
                            </div>
                        </div>`)
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
        </script>
    </body>
</html>