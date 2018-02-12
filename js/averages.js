$(document).ready(function(){
    $.ajax({
        url: "averages.php",
        method: "GET",
        success: function(data) {
            console.log(data);
            
            //Ikä kaavion tiedot
             var chartdataAge = {
                datasets :
                    [{
                        label: 'Ikä',
                        data: [data[0].avg_age],
                        backgroundColor: ["#daa520"]
                    }]
            };
            
            //Ikä canvas elementin id
            var ctxAge = $("#ageChart");
            
            //Ikäkaavion tekeminen
            var barGraphAge = new Chart(ctxAge, {
                type: 'horizontalBar',
                data: chartdataAge,
                options: {
                    title:{
                        display: true,
                        text: "Ikä: " + Math.round(data[0].avg_age),
                        fontSize: 16
                    },
                    scales: {
                       xAxes: [{
                           ticks: {
                               suggestedMin: 15,
                               suggestedMax: 65
                           }
                       }]
                   }
                }
            });
            
            //Kokemus kaavion tiedot
            var chartdataExperience = {
                datasets :
                    [{
                        label: 'Kokemus',
                        data: [data[0].avg_experience_years],
                        backgroundColor: ["#3b5998"]
                    }]
            };
            
            //Kokemus canvas elementin id
            var ctxExperience = $("#experienceChart");
            
            //Kokemus kaavion tekeminen
            var barGraphExperience = new Chart(ctxExperience, {
                type: 'horizontalBar',
                data: chartdataExperience,
                options: {
                    title:{
                        display: true,
                        text: "Kokemus: " + Math.round(data[0].avg_experience_years),
                        fontSize: 16
                    },
                    scales: {
                       xAxes: [{
                           ticks: {
                               suggestedMin: 0,
                               suggestedMax: 50
                           }
                       }]
                    }
                }
            });
            
            //Ohjelmointiosaamis kaavion tiedot
            var chartdataProgramming = {
                labels: ['Ohjelmointi yleisellä tasolla', 'Web frontend', 
                    'Web backend', 'Natiivi mobiili', 'Hybridi mobiili', 
                    'Relaatiotietokannat', 'NoSQL-tietokannat'],
                datasets :
                    [{
                        data: [data[0].avg_programming, data[0].avg_web_frontend,
                            data[0].avg_web_backend, data[0].avg_mobile_native,
                            data[0].avg_mobile_hybrid, data[0].avg_relational_database,
                            data[0].avg_nosql_database],
                        backgroundColor: ["#5cd38c", "#aa94d0", "#e85e68",
                        "#116ebf", "#ffa96b", "#2a6061", "#e61d35"]
                    }
                ]
            };
            
            //Ohjelmointi canvas elementin id
            var ctxProgramming = $("#programmingChart");
            
            //Ohjelmointiosaamis kaavion tekeminen
            var barGraphProgramming = new Chart(ctxProgramming, {
                type: 'horizontalBar',
                data: chartdataProgramming,
                options: {
                    legend: {display: false},
                    title:{
                        display: true,
                        text: "Ohjelmointiosaaminen",
                        fontSize: 16
                    },
                    scales: {
                       xAxes: [{
                           ticks: {
                               suggestedMin: 0,
                               suggestedMax: 5,
                               stepSize: 0.5
                           }
                       }]
                   }
                }
            });
            
        },
        error: function(data) {
            console.log(data);
        }
    });
});