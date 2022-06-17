@extends('template')
@section('titulo', 'PUS')
@section('conteudo')

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
  <!-- <h1 class="h2">Painel SUS</h1>
  <div class="btn-toolbar mb-2 mb-md-0">
    <div class="btn-group me-2">
      <button type="button" class="btn btn-sm btn-outline-secondary">Compartilhar</button>
      <button type="button" class="btn btn-sm btn-outline-secondary">Exportar</button>
    </div>
    <!-- <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
      <span data-feather="calendar" class="align-text-bottom"></span>
      This week
    </button> 
  </div></div> -->

  <div class="row g-3 container-fluid my-4 text-muted">

    <!-- cada card -->
    <div class="col">
      <div class="card shadow" style="border-left:5px #007bb1 solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#007bb1"><i class="bi bi-file-earmark-text-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#007bb1"><b>Artigos</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">2147</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- cada card -->
     <div class="col">
      <div class="card shadow" style="border-left:5px #ff7925 solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#ff7925"><i class="bi bi-award-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#ff7925"><b>Qualis A</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">652</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow" style="border-left:5px #009e39 solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#009e39"><i class="bi bi-motherboard-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#009e39"><b>Tecnologias</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">652</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- cada card -->
    <div class="col">
      <div class="card shadow" style="border-left:5px #e21a2a solid">
        <div class="card-body">
          <div class="row">
            <div class="col-6 text-center">
              <h5 class="card-title display-4" style="color:#e21a2a"><i class="bi bi-chat-square-quote-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#e21a2a"><b>PLN</b></h6>
            </div>
            <div class="col-6">
              <p class="display-5 pt-3">70</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="row mt-5">

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por data</h4>
    <canvas class="my-4 w-100" id="g1" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por Qualis (652/2147)</h4>
    <canvas class="my-4 w-100" id="g2" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por fator de impacto</h4>
    <canvas class="my-4 w-100" id="g3" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Publicações por h-index</h4>
    <canvas class="my-4 w-100" id="g4" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Tecnologias mais citadas (20)</h4>
    <canvas class="my-4 w-100" id="g5" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-6 my-2 col-xxl-6">
    <h4>Tecnologias em artigos com impacto (20)</h4>
    <canvas class="my-4 w-100" id="g6" width="900" height="450"></canvas>
  </div>


</div>

<h2>Tabela</h2>
<div class="table-responsive">
  <table id="minha_tabela" class="table table-hover table-sm table-striped">
    <thead></thead>
    <tbody></tbody>
  </table>
</div>

@endsection