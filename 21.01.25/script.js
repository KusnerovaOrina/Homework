const calendar = document.querySelector('#myFreeTime');

const config = {
    type:  'bar',
    data: {
        labels: [
            "Малювання",
            "Читання",
            "Тренування",
            "Прогулянка",
        ],
        datasets: [
            {
                label: "Витрачено часу",
                data: [ 0.5, 1, 2, 1.5],
                backgroundColor: [
                    "#CDB4DB",
                    "#FFC8DD",
                    "#FFAFCC",
                    "#aeb322",
                    "#ffaa00"
                ]
            }
        ]
    }
}

new Chart(calendar, config);
