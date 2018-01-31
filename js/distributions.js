$(document).ready(function(){
    $.ajax({
        url: "distributions.php",
        method: "GET",
        success: function(data) {
            console.log(data);
            
            var ika = [];
            var sukupuoli = [];
            var kokemus = [];
            var ohjelmointi = [];
            var frontend = [];
            var backend = [];
            var natiivi = [];
            var hybridi = [];
            var relaatio = [];
            var nosql = [];

            
            //Tietojen lisääminen listoihin
            for(var i in data) {
                ika.push(data[i].age);
                sukupuoli.push(data[i].gender);
                kokemus.push(data[i].experience_years);
                ohjelmointi.push(data[i].programming);
                frontend.push(data[i].web_frontend);
                backend.push(data[i].web_backend);
                natiivi.push(data[i].mobile_native);
                hybridi.push(data[i].mobile_hybrid);
                relaatio.push(data[i].relational_database);
                nosql.push(data[i].nosql_database);
            }
            //Ohjelmointitaitojen tiedot
            //Tämän avulla saan tehtyä toistolauseella pylväskaaviot
            var ohjelmointitaidot = [
                { nimi: ohjelmointi, label:'Ohjelmointi yleisellä tasolla', ctx:$('#programmingChart'), vari: "#5cd38c"},
                { nimi: frontend, label:"Web Frontend", ctx:$('#frontendChart'), vari: "#aa94d0"},
                { nimi: backend, label:"Web Backend", ctx:$('#backendChart'), vari: "#e85e68"},
                { nimi: natiivi, label:"Natiivi mobiili", ctx:$('#nativeChart'), vari: "#116ebf"},
                { nimi: hybridi, label:"Hybridi mobiili", ctx:$('#hybridChart'), vari: "#ffa96b"},
                { nimi: relaatio, label:"Relaatiotietokannat", ctx:$('#relationalChart'), vari: "#2a6061"},
                { nimi: nosql, label:"NoSQL-tietokannat", ctx:$('#nosqlChart'), vari: "#e61d35"}
            ];
            
            //Ikäkaavion tiedot
            var chartdataAge = {
                labels: ['15-30', '31-50', '51-65'],
                datasets :
                    [{
                        label: 'Ikä',
                        data: [countInArrayBetween(ika, 15, 30),
                            countInArrayBetween(ika, 31, 50),
                            countInArrayBetween(ika, 51, 65)],
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"]
                    }]
            };
            
            //Sukupuolikaavion tiedot
            var chartdataGender = {
                labels: ['Mies', 'Nainen'],
                datasets :
                    [{
                        label: 'Sukupuoli',
                        data: [countInArray(sukupuoli, '1'), countInArray(sukupuoli, '2')],
                        backgroundColor: ["#3e95cd", "#E85E68"]
                    }]
            };
            
            //Kokemuskaavion tiedot
            var chartdataExperience = {
                labels: ['0-5', '6-10', '11-15', 'Yli 15'],
                datasets :
                    [{
                        data: [countInArrayBetween(kokemus, 0, 5),
                            countInArrayBetween(kokemus, 6, 10),
                            countInArrayBetween(kokemus, 11, 15),
                            countInArrayBetween(kokemus, 16, 50)],
                        backgroundColor: ["#9fc3ff", "#3f88ff", "#0c55cc", "#08357f"]
                    }]
            };
            
            //Canvas elementtien id:t
            var ctxAge = $("#ageChart");
            var ctxGender = $("#genderChart");
            var ctxExperience = $("#experienceChart");

            //Kaavioiden tekeminen
            var doughnutGraphAge = new Chart(ctxAge, {
                type: 'doughnut',
                data: chartdataAge,
                options: {
                    title:{
                        display: true,
                        text: 'Ikä',
                        fontSize: 16
                    }
                }
            });
            
            var doughnutGraphGender = new Chart(ctxGender, {
                type: 'doughnut',
                data: chartdataGender,
                options: {
                    title:{
                        display: true,
                        text: 'Sukupuoli',
                        fontSize: 16
                    }
                }
            });
            
            var doughnutGraphExperience = new Chart(ctxExperience, {
                type: 'doughnut',
                data: chartdataExperience,
                options: {
                    title:{
                        display: true,
                        text: 'Kokemus',
                        fontSize: 16
                    }
                }
            });
            
            //Ohjelmointitaidoista pylväskaaviot for-toistolauseella
            for (i = 0; i < ohjelmointitaidot.length; i++){
                var label = ohjelmointitaidot[i].label;
                var chartdata = {
                labels: ['1', '2', '3', '4' ,'5'],
                datasets :
                    [{
                        label: label,
                        data: [countInArray(ohjelmointitaidot[i].nimi, '1'),
                            countInArray(ohjelmointitaidot[i].nimi, '2'),
                            countInArray(ohjelmointitaidot[i].nimi, '3'),
                            countInArray(ohjelmointitaidot[i].nimi, '4'),
                            countInArray(ohjelmointitaidot[i].nimi, '5')],
                        backgroundColor: ohjelmointitaidot[i].vari
                    }]
                };
                
                var ctx = ohjelmointitaidot[i].ctx;
                
                var graph = new Chart(ctx, {
                type: 'bar',
                data: chartdata,
                options: {
                    title:{
                        display: true,
                        text: ohjelmointitaidot[i].label,
                        fontSize: 16
                    },
                    scales: {
                       yAxes: [{
                           ticks: {
                               suggestedMin: 0,
                               suggestedMax: 20,
                               stepSize: 2
                           }
                       }]
                   }
                }
                });
            }
            
            //Funktio palauttaa halutun alkion määrän valitussa listassa
            function countInArray(array, what){
                var count = 0;
                for (var i = 0; i < array.length; i++){
                    if (array[i] === what){
                        count++;
                    }
                }
                return count;
            }
            //sama kuin ylempi mutta parametreiksi annetaan numerot joiden väliltä alkion pitää olla
            function countInArrayBetween(array, between1, between2){
                var count = 0;
                for (var i = 0; i < array.length; i++){
                    if (array[i] >= between1 && array[i] <= between2){
                        count++;
                    }
                }
                return count;
            }
        },
        error: function(data) {
            console.log(data);
        }
    });
});