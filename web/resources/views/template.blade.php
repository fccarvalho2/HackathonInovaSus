<!doctype html>
<html lang="pt-br">

<head>
  <title>@yield('titulo')</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.0-beta1 -->
  <link rel="stylesheet" href="{{ url('/css/bootstrap.min.css') }}">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css">
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <link href="{{ url('/css/dashboard.css') }}" rel="stylesheet">
</head>

<body>

  <header class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">

    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="{{ url('/') }}">Painel Inovasus (CoViD-19)</a>

    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
<!-- 
    <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Buscar" aria-label="Search" id="buscar" style="placeholder{color:white}"> -->
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <!-- <a class="nav-link px-3" href="#">Sair</a> -->

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mudar página
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="{{ url('/vm') }}">Varíola</a></li>
            <li><a class="dropdown-item" href="{{ url('/febreamarela') }}">Febrea amarela</a></li>
            <li><a class="dropdown-item" href="{{ url('/dengue') }}">Dengue</a></li>
            <li><a class="dropdown-item" href="{{ url('/zika') }}">Zika</a></li>
            <li><a class="dropdown-item" href="{{ url('/hiv') }}">HIV</a></li>
          </ul>
        </li>

      </div>
    </div>
  </header>
  <main class="container-fluid">
        @yield('conteudo')
  </div>

  <!-- Bootstrap JavaScript Libraries -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>

  <script src="https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>


  <script src="{{ url('/js/dashboard.js') }}"></script>

  <script src="{{ url('/js/script.js') }}"></script>

</body>

</html>