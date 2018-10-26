<?php
// Database connection by using PHP PDO
$username = 'root';
$password = '';
$connection = new PDO('mysql:host=localhost;dbname=crud_ajax', $username, $password); // Create object of PDO class by connecting to MySQL database

if (isset($_POST["action"])) { // Check value of $_POST["action"] variable value is set to not
    // For load all data
    if ($_POST["action"] == "Load") {
        $statement = $connection->prepare("SELECT * FROM customers ORDER BY id DESC");
        $statement->execute();
        $result = $statement->fetchAll();
        $output = '';
        $output .= '
            <table class="table table-bordered">
                <tr>
                    <th width="40%">First Name</th>
                    <th width="40%">Last Name</th>
                    <th width="40%">Update</th>
                    <th width="40%">Delete</th>
                <tr>
        ';

        if ($statement->rowCount() > 0) {
            foreach ($result as $row) {
                $output .= '
                    <tr>
                        <td>' . $row["first_name"] . '</td>
                        <td>' . $row["last_name"] . '</td>
                        <td><button type="button" class="btn btn-warning btn-xs update" id="' . $row["id"] . '">Update</button></td>
                        <td><button type="button" class="btn btn-danger btn-xs delete" id="' . $row["id"] . '">Delete</button></td>
                    </tr>
                ';
            }
        } else {
            $output = '
                <tr>
                    <td align="center">Data Not Found</td>
                </tr>
            ';
        }
        $output .= '</table>';
        echo $output;
    }

    // This code for create new record
    if ($_POST["action"] == "Create") {
        $statement = $connection->prepare("
            INSERT INTO customers(first_name, last_name)
            VALUES(:first_name, :last_name)
        ");
        $result = $statement->execute(
            array(
                ':first_name' => $_POST["firstName"],
                ':last_name' => $_POST["lastName"]
            )
        );
        if (!empty($result)) {
            echo "Data Inserted";
        }
    }

    // For fetching single customer data for display in modal
    if ($_POST["action"] == "Select") {
        $output = array();
        $statement = $connection->prepare("
            SELECT * FROM customers WHERE id='". $_POST["id"] ."' LIMIT 1
        ");
        $statement->execute();
        $result = $statement->fetchAll();
        foreach ($result as $row) {
            $output["first_name"] = $row["first_name"];
            $output["last_name"] = $row["last_name"];
        }
        echo json_encode($output);
    }

    if ($_POST["action"] == "Update") {
        $statement = $connection->prepare("
            UPDATE customers SET first_name = :first_name, last_name = :last_name
            WHERE id = :id
        ");
        $result = $statement->execute(
            array(
                ':first_name' => $_POST["firstName"],
                ':last_name' => $_POST["lastName"],
                ':id' => $_POST["id"]
            )
        );
        if (!empty($result)) {
            echo 'Data Updated';
        }
    }

    if($_POST["action"] == "Delete") {
        $statement = $connection->prepare("
            DELETE FROM customers WHERE id = :id
        ");
        $result = $statement->execute(
            array(
                ':id' => $_POST["id"]
            )
        );
        if (!empty($result)) {
            echo 'Data Deleted';
        }
    }

}
