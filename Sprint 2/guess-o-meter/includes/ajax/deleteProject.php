<?php
  //this script deletes projects and all features releated to the project from the database.
  include_once '../db.inc.php';
  session_start();

  $sql = "DELETE FROM tb_projects
                WHERE project_id = :projectid";
  $statement = $dbh->prepare($sql);
  $statement->bindParam(':projectid', $_POST['projectid'], PDO::PARAM_STR);
  $statement->execute();

  $sql = "DELETE FROM tb_features
          WHERE project_id = :projectid";
  $statement = $dbh->prepare($sql);
  $statement->bindParam(':projectid', $_POST['projectid'], PDO::PARAM_STR);
  $statement->execute();

  //Closing DB Connection
  $dbh = null;
  $statement = null;
 ?>
