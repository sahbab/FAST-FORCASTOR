<?php session_start(); ?>
<?php include_once './includes/header.inc.php'; ?>


    <div class="container center-align">
      <div class="row">

        <h1 class="col s5">Survery</h1>


      </div>

        <h4 id="surveyUrl" class="center-align"><?php echo $_SESSION['qr-url']; ?></h4>

        <img src="./includes/getQRCode.php" alt="qr code"/>



        <?php include_once './includes/footer.inc.php'; ?>
