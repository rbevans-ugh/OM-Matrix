  //kicks off Flow request to helpshift and will wait for a response.
//Depending on how much data we return I've seen us timeout waiting for the response.
function addFeature() {
    console.log("hi");
      var idText = document.getElementById("featureName").value;
      var idText1 = document.getElementById("subscription").value;
      var idText2= document.getElementById("comments").value;
      // var idText3 = document.getElementById("DF %").value;
      // var idText4 = document.getElementById("DF Build").value;
      // var idText5 = document.getElementById("IF %").value;
      // var idText6 = document.getElementById("IF Build").value;
      // var idText7 = document.getElementById("IS %").value;
      // var idText8 = document.getElementById("IS Build").value;
      // var idText9 = document.getElementById("PROD %").value;
      // var idText10 = document.getElementById("PROD Build").value;
      console.log(idText,idText2);
      var data = { featureName: idText, comments:idText2 };
      //url is hardcoded from flow. 
      console.log(data);
      var url =
        "https://prod-09.westcentralus.logic.azure.com:443/workflows/bde242871bd24b8d839dda737d907f85/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wQ0lpFfxigdslnV8aCHbYsUipaTZS_f4PTFEolz6UVA";
      //clear old content out so we're not concating results on each run.
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(function(response) {
          return response.json();
        });
        console.log("got the response from Flow");
    }