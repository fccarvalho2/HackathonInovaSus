/* globals Chart:false, feather:false */

(() => {
    'use strict'
  
    feather.replace({ 'aria-hidden': 'true' })
  
    // gráfico - artigos por data ---------------------------------------
    const onde1 = document.getElementById('g1')
    const grafico1 = new Chart(onde1, {
      type: 'line',
      data: {
        labels: [
          'janeiro, 2020',
          'fevereiro, 2020',
          'março, 2020',
          'abril, 2020',
          'maio, 2020',
          'junho, 2020',
          'julho, 2020',
          'agosto, 2020',
          'setembro, 2020',
          'outubro, 2020',
          'novembro, 2020',
          'dezembro, 2020',
          'janeiro, 2021'
        ],
        datasets: [{
          data: [
            5,
            9,
            47,
            337,
            337,
            320,
            303,
            221,
            176,
            137,
            145,
            88,
            22
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

// gráfico 1,5 - ---------------------------------------
const onde15 = document.getElementById('g15')
const grafico15 = new Chart(onde15, {
  type: 'bar',
  data: {
    labels: 
      ["Total",
        "Com impacto (FI)",
        "Sem impacto (FI)",
        "Com Qualis",
        "Sem Qualis"
        ]
    ,
    datasets: [{
      data: 
        [2147,
          1145,
          1002,
          1364,
          783,
        ]
      ,
      lineTension: 0,
      backgroundColor: ['purple', '#007bff', '#FF0000', '#007bff', '#FF0000' ],
      fill: '#007bff',
      //borderColor: '#007bff',
      //borderWidth: 4,
      pointBackgroundColor: '#007bff'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
})

    // gráfico 2 - ---------------------------------------
    const onde2 = document.getElementById('g2')
    const grafico2 = new Chart(onde2, {
      type: 'bar',
      data: {
        labels: 
          ['A1','A2','A3','B1','A4','B2','C','B3','B4']
        ,
        datasets: [{
          data: 
            [303,140,126,96,83,15,12,5,3]
          ,
          lineTension: 0,
          backgroundColor: '#007bff',
          fill: '#007bff',
          //borderColor: '#007bff',
          //borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    // gráfico 3 - ---------------------------------------
    const onde3 = document.getElementById('g3')
    const grafico3 = new Chart(onde3, {
      type: 'bar',
      data: {
        labels: [1.3922,  2.6724,  3.9526,  5.2328,  6.513 ,  7.7932,
          9.0734, 10.3536, 11.6338, 12.914 , 14.1942, 15.4744, 16.7546,
         18.0348, 19.315 , 20.5952, 21.8754, 23.1556, 24.4358, 25.716 ],
        datasets: [{
          data: 
           [475., 275.,  97.,  54.,   8.,  13.,   6.,  11.,   4.,   0.,   1.,
            0.,  13.,   2.,   0.,   0.,   0.,   0.,   1.,  41.],
          lineTension: 0,
          backgroundColor: '#007bff',
          fill: '#007bff',
          //borderColor: '#007bff',
          //borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    // gráfico 4 - ---------------------------------------
    const onde4 = document.getElementById('g4')
    const grafico4 = new Chart(onde4, {
      type: 'bar',
      data: {
        labels: [
          3.  ,   28.46,   53.92,   79.38,  104.84,  130.3 ,  155.76,
            181.22,  206.68,  232.14,  257.6 ,  283.06,  308.52,  333.98,
            359.44,  384.9 ,  410.36,  435.82,  461.28,  486.74,  512.2 ,
            537.66,  563.12,  588.58,  614.04,  639.5 ,  664.96,  690.42,
            715.88,  741.34,  766.8 ,  792.26,  817.72,  843.18,  868.64,
            894.1 ,  919.56,  945.02,  970.48,  995.94, 1021.4 , 1046.86,
           1072.32, 1097.78, 1123.24, 1148.7 , 1174.16, 1199.62, 1225.08,
           1250.54, 1276.  
        ],
        datasets: [{
          data: [
            77, 131, 158, 122, 101, 132,  33,  85,   9,  16,   8,  15,   7,
             10,  11,   8,   5,   4,   0,   2,   1,   0,   1,   0,   5,   0,
              0,   4,   0,   0,   0,  16,   0,   0,   0,   0,   0,   0,   0,
              0,   0,   0,  39,   0,   0,   0,   0,   0,   0,   2
          ],
          lineTension: 0,
          backgroundColor: '#007bff',
          fill: '#007bff',
          //borderColor: '#007bff',
          //borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    // gráfico 5 - ---------------------------------------
    const onde5 = document.getElementById('g5');

    const grafico5 = new Chart(onde5, {
      type: 'bar',
      data: {
        labels: [
          "Hidroxicloroquina",
          "Tocilizumabe",
          "Lopinavir",
          "Ritonavir",
          "Remdesivir",
          "Cloroquina",
          "Corticosteroides",
          "Plasma convalescente",
          "Azitromicina",
          "Inibidores da Enzima Conversora da Angiotensina 2 (IECA 2)",
          "Antagonistas do Receptor da Angiotensina II",
          "Favipiravir",
          "Prednisona",
          "Umifenovir",
          "Imunoglobulina",
          "Heparina",
          "Oseltamivir",
          "Ribavirina",
          "Ivermectina",
          "Anakinra",
          "Vitamina D (25-hidroxivitamina D)",
          "Terapia celular",
          "Interferon",
          "Interferon alfa",
          "Dexametasona"
        ],
        datasets: [{
          data: [
            700,
            343,
            329,
            328,
            315,
            285,
            237,
            213,
            212,
            140,
            134,
            117,
            94,
            88,
            86,
            80,
            73,
            71,
            71,
            56,
            55,
            52,
            51,
            49,
            44
          ],
          backgroundColor: '#007bff'
        }]
      },
      options: {
        indexAxis: 'y',
        legend: {
          display: false
        },
        scales: {
          y: {
              beginAtZero: true
          }
        }
        
      }
    })

    // gráfico 6 - ---------------------------------------
    const onde6 = document.getElementById('g6')
    const grafico6 = new Chart(onde6, {
      type: 'bar',
      data: {
        labels: [
          "Hidroxicloroquina",
          "Tocilizumabe",
          "Ritonavir",
          "Lopinavir",
          "Remdesivir",
          "Cloroquina",
          "Plasma convalescente",
          "Azitromicina",
          "Corticosteroides",
          "Antagonistas do Receptor da Angiotensina II",
          "Inibidores da Enzima Conversora da Angiotensina 2 (IECA 2)",
          "Heparina",
          "Prednisona",
          "Favipiravir",
          "Umifenovir",
          "Imunoglobulina",
          "Anakinra",
          "Terapia celular",
          "Ribavirina",
          "Dexametasona",
          "Oseltamivir",
          "Interferon alfa",
          "Vitamina D (25-hidroxivitamina D)",
          "Interferon",
          "Darunavir"
        ],
        datasets: [{
          data: [283,
            171,
            147,
            146,
            146,
            116,
            101,
            99,
            85,
            64,
            64,
            52,
            50,
            50,
            36,
            35,
            33,
            30,
            28,
            26,
            23,
            22,
            21,
            21,
            20
          ],
          lineTension: 0,
          backgroundColor: '#007bff',
          fill: '#007bff',
          //borderColor: '#007bff',
          //borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            max:700,
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })


    // gráfico 8 - ---------------------------------------
const onde8 = document.getElementById('g8')
const grafico8 = new Chart(onde8, {
  type: 'bar',
  data: {
    labels: 
    ['nitazoxanide', 'tocilizumab', 'azithromycin', 'anakinra', 'apixaban', 'ivermectin', 'heparin', 'hydroxychloroquine', 'doxycycline', 'remdesivir', 'baricitinib', 'colchicine', 'methylprednisolone', 'sitagliptin', 'leflunomide', 'ruxolitinib', 'sarilumab', 'alteplase', 'argatroban', 'bivalirudin', 'chloroquine', 'midazolam', 'propofol', 'ketamine', 'cisatracurium', 'fentanyl', 'ribavirin', 'meropenem', 'atazanavir', 'dipyridamole', 'famotidine', 'ibuprofen', 'dexamethasone', 'tenofovir', 'prednisolone', 'estradiol', 'metformin', 'lopinavir', 'ritonavir', 'oseltamivir', 'natalizumab', 'ganciclovir', 'quercetin']
    ,
    datasets: [{
      data: 
      [2, 7, 5, 1, 1, 2, 2, 8, 2, 4, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      lineTension: 0,
      backgroundColor: '#007bff',
      fill: '#007bff',
      //borderColor: '#007bff',
      //borderWidth: 4,
      pointBackgroundColor: '#007bff'
    },
    {
      data:[0, -4, -6, 0, -1, -1, -6, -12, 0, -6, -1, 0, -3, 0, -1, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -3, -1, -1, -1],
      backgroundColor: '#ff0000'
    }
  ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
})


})() // fim
  