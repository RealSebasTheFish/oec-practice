<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php 
        function readColumns($conn, $tablename, $columns) {
            $sql = "SELECT ";
            for ($i = 0; $i < count($columns); $i++) { 
                $sql .= $columns[$i];
                if ($i < count($columns) -1) {
                    $sql .= ", ";
                }
            }
            
            $sql .= " FROM " . $tablename;
            $result = $conn->query($sql);
            $returnarray = array();

            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    array_push($returnarray, $row);
                }
            }
            
            return $returnarray;
        }
    ?>
</head>
<body>
    <?php 
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "test";
        
        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
          die("Connection failed: " . $conn->connect_error);
        }

        $my_result = readColumns($conn, "users", ["*"]);
        $conn->close();

        echo json_encode($my_result);
    ?>
</body>
</html>