// Import stylesheets
import "./style.css";

$(document).ready(function() {
  var modiduo = false;
  var modiquadra = false;
  var kopfImage = false;
  var zahlImage = false;

  $("#coinfrontQuadra").hide();
  $("#coinbackQuadra").hide();
  $("#coinfrontDuo").hide();
  $("#coinbackDuo").hide();
  $("#info").show();
  $("div.start").text("Startseite ");
  $("div.info").text("Wählen sie den gewünschten modus aus");

  //Duo Modus wurde ausgewählt
  $("button#modiduo").click(function() {
    modiquadra = false;
    modiduo = true;
    $("div.start").text("Duo Mode");
    $("div.info").text(
      "1. Bestimmen sie den gewünschten 'Wetteinsatz' 2. Setzen Sie auf Kopf oder Zahl? 3. 'Start'"
    );
    $("div.field").css({ border: "10px solid red" });
    $("div.duoGame1").css({ display: "block" });
    $("div.quadraGame1").css({ display: "none" });
  });

  //Quadra Modus wurde ausgewählt
  $("button#modiquadra").click(function() {
    modiduo = false;
    modiquadra = true;
    $("div.start").text("Quadra Mode");
    $("div.info").text(
      "1. Bestimmen sie den gewünschten 'Wetteinsatz' 2. Setzen Sie auf Kopf oder Zahl? 3. 'Start'"
    );
    $("div.field").css({ border: "10px solid orange" });
    $("div.quadraGame1").css({ display: "block" });
    $("div.duoGame1").css({ display: "none" });
  });

  //Duo button zum Setzen Player 1 (Duo)
  $("button#bntPlayer1DuoSetzen").click(function() {
    var player1KopfDuo = $("#inputPlayer1Duo").val();
    $("#einsatzPlayer1Duo").text(player1KopfDuo);
  });

  //Duo button zum Setzen Player 2 (Duo)
  $("button#bntPlayer2DuoSetzen").click(function() {
    var player2KopfDuo = $("#inputPlayer2Duo").val();
    $("#einsatzPlayer2Duo").text(player2KopfDuo);
  });

  //Quadra button zum Setzen Player 1 (Quadra)
  $("button#bntPlayer1QuadraSetzen").click(function() {
    var player1KopfQuadra = $("#inputPlayer1Quadra").val();
    $("#einsatzPlayer1Quadra").text(player1KopfQuadra);
  });

  //Quadra button zum Setzen Player 2 (Quadra)
  $("button#bntPlayer2QuadraSetzen").click(function() {
    var player2KopfQuadra = $("#inputPlayer2Quadra").val();
    $("#einsatzPlayer2Quadra").text(player2KopfQuadra);
  });

  //Quadra button zum Setzen Player 3 (Quadra)
  $("button#bntPlayer3QuadraSetzen").click(function() {
    var player3KopfQuadra = $("#inputPlayer3Quadra").val();
    $("#einsatzPlayer3Quadra").text(player3KopfQuadra);
  });

  //Quadra button zum Setzen Player 4 (Quadra)
  $("button#bntPlayer4QuadraSetzen").click(function() {
    var player4KopfQuadra = $("#inputPlayer4Quadra").val();
    $("#einsatzPlayer4Quadra").text(player4KopfQuadra);
  });

  //Es wird auf den Start Button gedrückt
  $("button#startbutton").click(function() {
    kopfImage = false;
    zahlImage = false;

    $(".coinfront").hide();
    $(".coinback").hide();

    //Random zahl 0 oder 1
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    var i = getRandomInt(2);
    console.log(i);

    //Wenn i = 0 kommt Kopf und wenn i = 1 kommt Zahl
    if (i == 0) {
      if (modiduo == true) {
        $("#coinfrontDuo").show();
        kopfImage = true;
      } else if (modiquadra == true) {
        $("#coinfrontQuadra").show();
        kopfImage = true;
      }
    } else if (i == 1) {
      if (modiduo == true) {
        $("#coinbackDuo").show();
        zahlImage = true;
      } else if (modiquadra == true) {
        $("#coinbackQuadra").show();
        zahlImage = true;
      }
    }

    //Duo Logik

    //Zahl kommt beim Münzwurf
    if (zahlImage == true) {
      //Player 1
      if ($("#zahlPlayer1Duo").is(":checked")) {
        var player1ZahlAuswahlDuo = $("#einsatzPlayer1Duo").text();
        $("#gewinnVerlustPlayer1Duo").text(player1ZahlAuswahlDuo);
      } else {
        var player1ZahlAuswahlDuo = $("#einsatzPlayer1Duo").text();
        $("#gewinnVerlustPlayer1Duo").text(-player1ZahlAuswahlDuo);
      }

      //Player 2
      if ($("#zahlPlayer2Duo").is(":checked")) {
        var player2ZahlAuswahlDuo = $("#einsatzPlayer2Duo").text();
        $("#gewinnVerlustPlayer2Duo").text(player2ZahlAuswahlDuo);
      } else {
        var player2ZahlAuswahlDuo = $("#einsatzPlayer2Duo").text();
        $("#gewinnVerlustPlayer2Duo").text(-player2ZahlAuswahlDuo);
      }
    }
    //Kopf kommt beim Münzwurf
    if (kopfImage == true) {
      //Player 1
      if ($("#kopfPlayer1Duo").is(":checked")) {
        var player1KopfAuswahlDuo = $("#einsatzPlayer1Duo").text();
        $("#gewinnVerlustPlayer1Duo").text(player1KopfAuswahlDuo);
      } else {
        var player1KopfAuswahlDuo = $("#einsatzPlayer1Duo").text();
        $("#gewinnVerlustPlayer1Duo").text(-player1KopfAuswahlDuo);
      }

      //Player 2
      if ($("#kopfPlayer2Duo").is(":checked")) {
        var player2KopfAuswahlDuo = $("#einsatzPlayer2Duo").text();
        $("#gewinnVerlustPlayer2Duo").text(player2KopfAuswahlDuo);
      } else {
        var player2KopfAuswahlDuo = $("#einsatzPlayer2Duo").text();
        $("#gewinnVerlustPlayer2Duo").text(-player2KopfAuswahlDuo);
      }
    }

    //Quadra Logik

    //Zahl kommt beim Münzwurf
    if (zahlImage == true) {
      //Player 1
      if ($("#zahlPlayer1Quadra").is(":checked")) {
        var player1ZahlAuswahlQuadra = $("#einsatzPlayer1Quadra").text();
        $("#gewinnVerlustPlayer1Quadra").text(player1ZahlAuswahlQuadra);
      } else {
        var player1ZahlAuswahlQuadra = $("#einsatzPlayer1Quadra").text();
        $("#gewinnVerlustPlayer1Quadra").text(-player1ZahlAuswahlQuadra);
      }

      //Player 2
      if ($("#zahlPlayer2Quadra").is(":checked")) {
        var player2ZahlAuswahlQuadra = $("#einsatzPlayer2Quadra").text();
        $("#gewinnVerlustPlayer2Quadra").text(player2ZahlAuswahlQuadra);
      } else {
        var player2ZahlAuswahlQuadra = $("#einsatzPlayer2Quadra").text();
        $("#gewinnVerlustPlayer2Quadra").text(-player2ZahlAuswahlQuadra);
      }

      //Player 3
      if ($("#zahlPlayer3Quadra").is(":checked")) {
        var player3ZahlAuswahlQuadra = $("#einsatzPlayer3Quadra").text();
        $("#gewinnVerlustPlayer3Quadra").text(player3ZahlAuswahlQuadra);
      } else {
        var player3ZahlAuswahlQuadra = $("#einsatzPlayer3Quadra").text();
        $("#gewinnVerlustPlayer3Quadra").text(-player3ZahlAuswahlQuadra);
      }

      //Player 4
      if ($("#zahlPlayer4Quadra").is(":checked")) {
        var player4ZahlAuswahlQuadra = $("#einsatzPlayer4Quadra").text();
        $("#gewinnVerlustPlayer4Quadra").text(player4ZahlAuswahlQuadra);
      } else {
        var player4ZahlAuswahlQuadra = $("#einsatzPlayer4Quadra").text();
        $("#gewinnVerlustPlayer4Quadra").text(-player4ZahlAuswahlQuadra);
      }
    }

    //Kopf kommt beim Münzwurf
    if (kopfImage == true) {
      //Player 1
      if ($("#kopfPlayer1Quadra").is(":checked")) {
        var player1KopfAuswahlQuadra = $("#einsatzPlayer1Quadra").text();
        $("#gewinnVerlustPlayer1Quadra").text(player1KopfAuswahlQuadra);
      } else {
        var player1KopfAuswahlQuadra = $("#einsatzPlayer1Quadra").text();
        $("#gewinnVerlustPlayer1Quadra").text(-player1KopfAuswahlQuadra);
      }

      //Player 2
      if ($("#kopfPlayer2Quadra").is(":checked")) {
        var player2KopfAuswahlQuadra = $("#einsatzPlayer2Quadra").text();
        $("#gewinnVerlustPlayer2Quadra").text(player2KopfAuswahlQuadra);
      } else {
        var player2KopfAuswahlQuadra = $("#einsatzPlayer2Quadra").text();
        $("#gewinnVerlustPlayer2Quadra").text(-player2KopfAuswahlQuadra);
      }

      //Player 3
      if ($("#kopfPlayer3Quadra").is(":checked")) {
        var player3KopfAuswahlQuadra = $("#einsatzPlayer3Quadra").text();
        $("#gewinnVerlustPlayer3Quadra").text(player3KopfAuswahlQuadra);
      } else {
        var player3KopfAuswahlQuadra = $("#einsatzPlayer3Quadra").text();
        $("#gewinnVerlustPlayer3Quadra").text(-player3KopfAuswahlQuadra);
      }

      //Player 4
      if ($("#kopfPlayer4Quadra").is(":checked")) {
        var player4KopfAuswahlQuadra = $("#einsatzPlayer4Quadra").text();
        $("#gewinnVerlustPlayer4Quadra").text(player4KopfAuswahlQuadra);
      } else {
        var player4KopfAuswahlQuadra = $("#einsatzPlayer4Quadra").text();
        $("#gewinnVerlustPlayer4Quadra").text(-player4KopfAuswahlQuadra);
      }
    }
    zahlImage = false;
    kopfImage = false;
  });
});
