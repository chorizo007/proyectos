<?php
$servidor = "192.168.3.181";
$usuario = "nicolas";
$contrasena = "1234";
$base_datos = "pacofiesta";

$conn = new mysqli($servidor, $usuario, $contrasena, $base_datos);

if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM coches";
    $result = $conn->query($sql);

    // Mostrar los datos en la tabla
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $imagen_path = '../imagenes/coches/' . $row['id_coches'] . '.png';
            if (file_exists($imagen_path)) {
                $imagen_binario = file_get_contents($imagen_path);
                $imagen_base64 = base64_encode($imagen_binario);
                $imagen_base64 = "data:image/png;base64," . $imagen_base64;
            } else {
                $imagen_base64 = '';
            }
            echo "<tr>";
            echo "<td contenteditable='false' class='hidden'>" . $imagen_base64 . "</td>";
            echo "<td contenteditable='false'>" . $row['id_coches'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['categoria'] . "</td>";
            echo "<td contenteditable='false'>" . $row['matricula'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['marca'] . "</td>";
            echo "<td contenteditable='false'>" . $row['modelo'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['preciohora'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['nPlazas'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['opciones'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['zona'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['disponibilidad'] . "</td>";
            echo "<td contenteditable='false' class='hidden'>" . $row['puntos'] . "</td>";
            echo "<td><button class='editar boton'>Edit</button></td>";
            echo "<td><input type='checkbox' class='seleccionar'></td>";
            echo "<td contenteditable='false' class='hidden'>NO editado</td>";
            echo "</tr>";
        }
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents("php://input"), true);
    if (isset($requestData['data'])) {
        $data = $requestData['data'];

        // Itera sobre los datos y realiza las inserciones/actualizaciones en la base de datos
        foreach ($data as $row) {
            $foto = $row['columna0'];
            $columna1 = $row['columna1'];
            $columna2 = $row['columna2'];
            $columna3 = $row['columna3'];
            $columna4 = $row['columna4'];
            $columna5 = $row['columna5'];
            $columna6 = $row['columna6'];
            $columna7 = $row['columna7'];
            $columna8 = $row['columna8'];
            $columna9 = $row['columna9'];
            $columna10 = $row['columna10'];
            $columna11 = $row['columna11'];

            $sql = "INSERT INTO coches (id_coches, categoria, matricula, marca, modelo, preciohora, nPlazas, opciones, zona, disponibilidad, puntos) 
                        VALUES ('$columna1', '$columna2', '$columna3', '$columna4', '$columna5', '$columna6', '$columna7', '$columna8', '$columna9', '$columna10', '$columna11')
                        ON DUPLICATE KEY UPDATE 
                        categoria = '$columna2',
                        matricula = '$columna3', 
                        marca = '$columna4', 
                        modelo = '$columna5',
                        preciohora = '$columna6', 
                        nPlazas = '$columna7', 
                        opciones = '$columna8', 
                        zona = '$columna9', 
                        disponibilidad = '$columna10',
                        puntos = '$columna11'";
            if ($conn->query($sql) === TRUE) {
                echo 'fila actualizada';
                if (!empty($foto)) {
                    $img_file = '../imagenes/coches/' . $columna1 . ".png";
                    $f = fopen($img_file, "w") or die("error al subir la imagen");
                    fwrite($f, base64_decode(explode(",", $foto, 2)[1]));
                    fclose($f);
                    echo 'foto editada';
                } else {
                    echo "sin imagen";
                }
            } else {
                echo "FILA NO ACTUALIZADA";
            }
        }
        echo 'Datos guardados correctamente';
    } else {
        echo 'Datos no recibidos correctamente';
    }
} else {
    echo 'Método no permitido';
}

$conn->close();
