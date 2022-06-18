@extends('template')
@section('titulo', 'Novo Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas - COVID-19')
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
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4" style="color:#007bb1"><i class="bi bi-file-earmark-text-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#007bb1"><b>Artigos</b></h6>
            </div>
            <div class="col-md-6 col-12">
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
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4" style="color:#ff7925"><i class="bi bi-award-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#ff7925"><b>Qualis A</b></h6>
            </div>
            <div class="col-md-6 col-12">
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
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4" style="color:#009e39"><i class="bi bi-slash-circle-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#009e39"><b>Tecnologias</b></h6>
            </div>
            <div class="col-md-6 col-12">
              <p class="display-5 pt-3">564</p>
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
            <div class="col-md-6 col-12 text-center">
              <h5 class="card-title display-4" style="color:#e21a2a"><i class="bi bi-chat-square-quote-fill"></i></h5>
              <h6 class="card-subtitle mb-2" style="color:#e21a2a"><b>PLN</b></h6>
            </div>
            <div class="col-md-6 col-12">
              <p class="display-5 pt-3">72</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="row mt-5">

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-6">
    <h4>Publicações por data (n = 2147)</h4>
    <p class="text-muted small">Este gráfico apresenta a quantidade de artigos coletados por data de publicação. Dados foram coletados no <a href="https://infoms.saude.gov.br/extensions/evidencias_covid/evidencias_covid.html">Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas - COVID-19</a>.</p> 
    <canvas class="my-4 w-100" id="g1" width="900" height="450"></canvas>
  </div>

 <!-- grafico -->
 <div class="col-12 my-2 col-xl-6">
    <h4>Relevância das publicações</h4>
    <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver que boa parte dos dados utilizados nessa base veio de meios de publicação sem grande impacto científico.</p>
    <canvas class="my-4 w-100" id="g15" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-6">
    <h4>Publicações por Qualis (652/2147)</h4>
    <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos periódicos com base nos estratos Qualis (para mais informações acesse o site da <a href="https://sucupira.capes.gov.br/sucupira/public/consultas/coleta/veiculoPublicacaoQualis/listaConsultaGeralPeriodicos.jsf">CAPES</a>). <strong>[MELHOR] <= A1, A2, A3, A4, B1, B2, B3, B4, C => [PIOR]</strong></p>
    <canvas class="my-4 w-100" id="g2" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-6">
    <h4>Publicações por fator de impacto (1145/2147)</h4>
    <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos periódicos com base na pontuação JCR - Journal Citation Reports (para mais informações acesse o site da <a href="https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/">JCR Clarivate</a>). <strong>Quanto maior, melhor</strong>.</p>
    <canvas class="my-4 w-100" id="g3" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-6">
    <h4>Publicações por média de citações (últimos 3 anos)</h4>
    <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos periódicos com base na média de citações dos últimos três anos (para mais informações acesse o site da <a href="https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/">JCR Clarivate</a>).<strong>Quanto maior, melhor</strong>.</p>
    <canvas class="my-4 w-100" id="g35" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-6">
    <h4>Publicações por h-index (1145/2147)</h4>
    <p class="text-muted small">Este gráfico apresenta a distribuição de artigos avaliados no painel com base nos periódicos de publicação. Aqui podemos ver a distruição dos artigos com base h-index da revista (para mais informações acesse o site da <a href="https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/">JCR Clarivate</a>).</p>
    <canvas class="my-4 w-100" id="g4" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-6">
    <h4>Tecnologias mais citadas (20)</h4>
    <p class="text-muted small">Este gráfico apresenta as "tecnologias" mais citadas com base nas informações disponíveis no <a href="https://infoms.saude.gov.br/extensions/evidencias_covid/evidencias_covid.html">Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas</a>.</p> 
    <canvas class="my-4 w-100" id="g5" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xxl-6">
    <h4>Tecnologias em artigos com impacto (20)</h4>
    <p class="text-muted small">Este gráfico apresenta as "tecnologias" mais citadas com base nas informações disponíveis no <a href="https://infoms.saude.gov.br/extensions/evidencias_covid/evidencias_covid.html">Painel de Evidências Científicas sobre Tratamento Farmacológico e Vacinas</a>. Foram filtradas apenas artigos publicados em periódicos.</p> 
    <canvas class="my-4 w-100" id="g6" width="900" height="450"></canvas>
  </div>

  <!-- grafico -->
  <div class="col-12 my-2 col-xl-12">
    <h4>Análise do processamento de linguagem natural (72)</h4>
    <p>
      <span style="background:#ffa500" class="p-1 px-3 m-2 rounded"> </span> Tendência desfavorável/neutro
      <span style="background:#1e90ff" class="p-1 px-3 m-2 rounded"> </span> Tendência favorável
    </p>
    <p class="text-muted small">Esta análise indica tendências os resultados das análises de sentimento obtidas das técnicas de processamento de linguagem natural (PLN) dos artigos. Barras laranjas indicam tendências negativas/neutras, enquanto as azuis indicam positivas.</p> 
    <canvas class="my-4 w-100" id="g8" width="900" height="450"></canvas>
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