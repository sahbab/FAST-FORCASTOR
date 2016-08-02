<?php
  // Start the session
  session_start();
  if($_SESSION['logged-in'] != true) {
        header('Location: index.php');
        
      }  
  include_once './includes/db.inc.php';
  include_once './includes/features/select.inc.php';
  
  

?>
<?php include_once './includes/header.inc.php'; ?>

      <div class="row">
        <h1 class="col s5">List of Surveys </h1>

      </div>

      <div class="row">

        <div class="card col s10 offset-s1">
          <h2 class="center-align">Project: <?php echo $projectName; ?></h2>

          <ul id="feature-list" class="collection">
            <?php include_once './includes/surveys/show-surveys.php';  ?>
          </ul>

          <div class="0 valign-wrapper">
            <div class="col s7 offset-s1">
              <fieldset>
                 <legend>Add Survey:</legend>
                 <input placeholder="Add Survey Name:" id="featureName" type="text" />
                <textarea placeholder="Add Survey Description:" id="surveyDesc"></textarea>
              </fieldset>
              <br>
            </div>
            <button id="submit" class="btn col s2 offset-s1 valign">Add Survey</button>
          </div>


        </div>
      </div>

      <?php include_once './includes/footer.inc.php'; ?>