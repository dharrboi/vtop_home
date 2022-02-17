const ctx = document.getElementById('chart-1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['BMAT102L', 'BPHY101L', 'BPHY101P', 'BCSE102L', 'BCSE101P', 'BSTS102P'],
        datasets: [{
            label: 'Minimum 75%',
            data: [88, 91, 78, 65, 98, 84],
            backgroundColor: [
                '#8367C7',
                '#2274A5',
                '#2274A5',
                '#FA824C',
                '#FA824C',
                '#3C91E6'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
