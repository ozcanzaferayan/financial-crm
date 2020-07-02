var data = {
    labels: ["Spend", "Earned"],
    datasets: [{
        label: "Population (millions)",
        backgroundColor: ["rgba(91,37,245, 1)", "#dad7e9"],
        data: [65, 35]
    }]
};

var options = {
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
        labels: {
            fontColor: "rgba(0,0,0, 0.5)",
            boxWidth: 20,
            padding: 10
        }
    },
};


var ctx = document.getElementById('efficiency').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});