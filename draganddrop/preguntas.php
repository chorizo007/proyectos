<?php
$servidor = "192.168.3.181";
$usuario = "nicolas";
$contrasena = "1234";
$base_datos = "pruebaspreguntas";

$conn = new mysqli($servidor, $usuario, $contrasena, $base_datos);

if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

$data = array();

$sql = "SELECT * FROM tablapreguntas";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $cont = 0;
    while ($row = $result->fetch_assoc()) {
        $data['pregunta'] = $row['pregunta'];
        $data['respuesta'] = $row['respuesta1'];
    }
}


header("Content-Type: application/json");
echo json_encode($data);


$conn->close();
