var data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
        label: 'Spending',
        backgroundColor: "rgba(91,37,245, 0.2)",
        data: [500, 300, 800, 150, 200, 150, 800, 200, 800, 100],
    }, {
        label: 'Arrival',
        backgroundColor: "rgba(91,37,245, 1)",
        data: [1000, 800, 1800, 1100, 1000, 800, 1800, 1600, 1800, 1200],
    }, ]
};

var options = {
    cornerRadius: 0,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
        labels: {
            fontColor: "rgba(0,0,0, 0.5)",
            boxWidth: 20,
            padding: 10
        }
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: true,
                color: "rgba(91,37,245, 0.03)"
            },
            ticks: {
                maxTicksLimit: 5,
            }
        }],
        xAxes: [{}]
    }
};


var ctx = document.getElementById('last_costs').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});