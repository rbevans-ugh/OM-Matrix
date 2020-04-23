function addFeatureMac() {

  var user
  // Here we're getting the user making the submission
  $.get("https://dev-omlc.azurewebsites.net/.auth/me", function (data) {
    for (var key in data[0]["user_claims"]) {
      var obj = data[0]["user_claims"][key];
      if (obj["val"].includes("microsoft")) {
        user = obj["val"];
        console.log('I got the user ' + user)
        // We should have gotten the user now.
        break;
      };
    }
    console.log("hi " + user);
    var idText = document.getElementById("featureName").value;
    var idText2 = document.getElementById("comments").value;
    var idText3 = document.getElementById("DF_PCT").value;
    var idText4 = document.getElementById("DF_Build").value;
    var idText5 = document.getElementById("IF_PCT").value;
    var idText6 = document.getElementById("IF_Build").value;
    var idText7 = document.getElementById("IS_PCT").value;
    var idText8 = document.getElementById("IS_Build").value;
    var idText9 = document.getElementById("PROD_PCT").value;
    var idText10 = document.getElementById("PROD_Build").value;
    var idText11 = document.getElementById("Debut_Build").value;
    if (document.getElementById("subscription").checked) {
      var idText1 = "Yes"
    } else {
      var idText1 = "No"
    };
    console.log(idText1);
    var idText12 = document.getElementById("newoutlook").value;
    if (document.getElementById("subscription").checked) {
      var idText12 = "Yes"
    } else {
      var idText12 = "No"
    };
    console.log(idText1);
    //var idText1 = document.getElementById("subscription").innerHTML
    console.log(idText, idText2);
    var data = {
      featureName: idText,
      comments: idText2,
      subscription: idText1,
      DF_PCT: idText3,
      DF_Build: idText4,
      IF_PCT: idText5,
      IF_Build: idText6,
      IS_PCT: idText7,
      IS_Build: idText8,
      PROD_PCT: idText9,
      PROD_Build: idText10,
      Debut_Build: idText11,
      new_outlook: idText12,
      auth_user: user,
    };
    //url is hardcoded from flow. 
    console.log(data);
    var url =
      "https://prod-09.westcentralus.logic.azure.com:443/workflows/bde242871bd24b8d839dda737d907f85/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wQ0lpFfxigdslnV8aCHbYsUipaTZS_f4PTFEolz6UVA";
      if (user.includes("@microsoft.com")) {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(function (response) {
            var flowStatus = response.status;
            console.log(response.status);
            console.log("the flowstatus is " + flowStatus);
            // return response.status();
            console.log(flowStatus);
            if (flowStatus == 200) {
              console.log("we should be here yo " + flowStatus);
              showConfirm("block");
            }
            else {
              console.log("ruh roh " + flowStatus);
              showFail("block");
            }
          });
      } else {
        showDeny("block");
      }
      document.getElementById("addfeatureform").reset();
    })
  }