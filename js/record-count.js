$(document).ready(function(){
    $.ajax({
        url: "record-count.php",
        method: "GET",
        success: function(data) {
            console.log(data);
            $("#recordCount").html("Vastauksia: " + 
                    data[0].record_count + " kpl");
        },
        error: function(data) {
            console.log(data);
        }
    });
});