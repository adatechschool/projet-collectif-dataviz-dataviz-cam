
const barCanvas = document.getElementById('myChart');
new Chart(barCanvas, {
  type: 'bar',
  data: {
    labels: ['Agriculture', 'Eau potable', 'Activités Industrielles', 'Electricité'],
    datasets: [{
      label: '% eau consommée ',
      data: [43, 42, 7, 8],
      backgroundColor: ['blue'],
      borderWidth: 1,
      borderColor: 'black',
    }]
  },
  options: {
    color: 'black',
    scales: {
      x: {
        ticks: {
          color: 'black',
        },
        grid: {
          color: 'black',
        }
      },
      y: {
        beginAtZero: true,
        color: 'black',
        fontsSize: 25,
        ticks: {
          color: 'black'
        },
        grid: {
          color: 'black',
        }
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black',
        }
      },
      title: {
        display: true,
        text: 'Consommation en eau ',
        color: 'black',
        font: {
          size: 35
        }
      }
    }
  }
});


function recupData() {
  let datas = [];
  let dates = [];
  fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques_tr?bss_id=BSS001TMCR&size=100&fields=date_mesure,profondeur_nappe&sort=desc")
    .then(res => res.json())
    .then(données => {
      //console.log(données)
      for (let i = 0; i < données.data.length; i++) {
        datas.push(données.data[i].profondeur_nappe);
        dates.push(données.data[i].date_mesure);
      }
      //console.log(datas)
      const ctx = document.getElementById('graphe-nappe');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates.reverse(),
          datasets: [{
              label: 'profondeur de l\'eau au point de mesure en mètres toutes les 3 heures',
              data: datas.reverse(),
              borderWidth: 1,
              borderColor: 'black',
              backgroundColor: 'blue'
            }],
        },
        options: {
          responsive: true,
          color: 'black',
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 14,
                  weight: 'bold',
                }
              }
            },
            title: {
              display: true,
              text: 'Nappe de Villeurbanne',
              color: 'black',
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              reverse: true,
              ticks: {
                color: 'black'
              },
              grid: {
                color: 'blue'
              }
            },
            x: {
              ticks: {
                color: 'black'
              },
              grid: {
                color: 'blue'
              }
            }
          }
        }
      })
    }); 
}

recupData();

