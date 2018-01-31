<?php
//setting header to json
//header('Content-Type: application/json');

//database
define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'programmer_query');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
    $viesti = "Virhe muodostaessa yhteyttä tietokantaan: " . $mysqli->error;
}

$ika = filter_input(INPUT_POST,'ika', FILTER_SANITIZE_NUMBER_INT);
$sukupuoli = filter_input(INPUT_POST,'sukupuoli', FILTER_SANITIZE_NUMBER_INT);
$kokemus = filter_input(INPUT_POST,'kokemus', FILTER_SANITIZE_NUMBER_INT);
$ohjelmointi = filter_input(INPUT_POST,'ohjelmointi', FILTER_SANITIZE_NUMBER_INT);
$frontend = filter_input(INPUT_POST,'frontend', FILTER_SANITIZE_NUMBER_INT);
$backend = filter_input(INPUT_POST,'backend', FILTER_SANITIZE_NUMBER_INT);
$natiivi = filter_input(INPUT_POST,'natiivi', FILTER_SANITIZE_NUMBER_INT);
$hybridi = filter_input(INPUT_POST,'hybridi', FILTER_SANITIZE_NUMBER_INT);
$relaatio = filter_input(INPUT_POST,'relaatio', FILTER_SANITIZE_NUMBER_INT);
$nosql = filter_input(INPUT_POST,'nosql', FILTER_SANITIZE_NUMBER_INT);


//query to get data from the table
$query = "INSERT INTO programmer_data VALUES('', '$ika', '$sukupuoli',"
        . "'$kokemus','$ohjelmointi', '$frontend', '$backend', '$natiivi',"
        . "'$hybridi', '$relaatio', '$nosql')";


if (!$mysqli->query($query)){
    $viesti = "Tietojen lisääminen tietokantaan ei onnistunut: " . $mysqli->error;
}
else{
    $viesti = "Tietojen lisääminen tietokantaan onnistui";
}

//close connection
$mysqli->close();

?>
<html>
    <head>
        <title>Ohjelmoijakysely</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <p class="navbar-brand">Ohjelmoijakysely</p>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="index.html">Kysely</a></li>
                        <li class="dropdown">
                            <a href="record-count.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tulokset <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="record-count.html">Vastauksien määrä</a></li>
                                <li><a href="distributions.html">Hajonnat</a></li>
                                <li><a href="averages.html">Keskiarvot</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>
        <div class="container">
            <h1>Ohjelmointikysely</h1>
            <p><?php print $viesti ?> <span class="glyphicon glyphicon-cloud"></span></p>
            
            <a class="btn btn-success" href="record-count.html">Tuloksiin</a>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </body>
</html>
