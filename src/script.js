// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

$(document).ready( function () {
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('#market_table').DataTable({
            // responsive: true,
            scrollX: true
        });
    } else {
        $('#market_table').DataTable({
            "targets": 'no-sort',
            "bSort": false,
            "order": []
        });
        
    }
} );

function initCharts() {
    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line.prototype.draw = function() {
    let chart = this.chart;
    let ctx = chart.ctx;
    let _stroke = ctx.stroke;
    ctx.stroke = function() {
        ctx.save();
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 3;
        _stroke.apply(this, arguments);
        ctx.restore();
    };
    draw.apply(this, arguments);
    ctx.stroke = _stroke;
    };
    // BTC Chart
    const btcChart = document.getElementById('btc_chart');
    const ethChart = document.getElementById('eth_chart');
    const chzChart = document.getElementById('chz_chart');
    const filChart = document.getElementById('fil_chart');
    const adaChart = document.getElementById('ada_chart');

    const chartData = {
        btcData: [65, 49, 90, 86, 56, 65, 40],
        ethData: [65, 40, 56, 49,65, 90, 86],
        chzData: [56, 65, 86, 40,65, 90, 49],
        filData: [40, 86, 90, 65,65, 56, 49],
        adaData: [65, 49, 90, 86, 56, 65, 40],
    }


    const labels = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM']

    const getChartConfig = (chartType) => {
       const chartName = `${chartType}Data`

       if (chartName in chartData) {
           const data = {
               labels: labels,
               datasets: [{
                 label: chartType.toUpperCase(),
                 data: chartData[chartName],
                 fill: false,
                 borderColor: '#34D4E9',
                 borderWidth: 1.5,
                 tension: 0.1,
                 pointRadius: 0
               }]
             };
           const config = {
               type: 'line',
               data: data,
               options: {
                   responsive: true,
                   maintainAspectRatio: false,
                   scales:
                   {
                       y: {
                           display: false,
                           grid: {
                               drawBorder: false, // <-- this removes y-axis line
                               lineWidth: 0.5,
                               display: false
                           }
                       },
                       x: {
                           display: false,
                           grid: {
                               drawBorder: false, // <-- this removes y-axis line
                               lineWidth: 0.5,
                               display: false
                           }
                       }
                   },
                   plugins: {
                       legend: {
                           display: false
                       }
                   }
               },
             };
           return config; 
       }
    }

    new Chart(btcChart, getChartConfig('btc'));
    new Chart(ethChart, getChartConfig('eth'));
    new Chart(chzChart, getChartConfig('chz'));
    new Chart(filChart, getChartConfig('fil'));
    new Chart(adaChart, getChartConfig('ada'));
}

initCharts()