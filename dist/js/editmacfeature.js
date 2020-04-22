function editFeatureMac() {
    console.log("hi");
      var idText = document.getElementById("featureName").value;
      var idText2= document.getElementById("comments").value;
      var idText3 = document.getElementById("DF_PCT").value;
      var idText4 = document.getElementById("DF_Build").value;
      var idText5 = document.getElementById("IF_PCT").value;
      var idText6 = document.getElementById("IF_Build").value;
      var idText7 = document.getElementById("IS_PCT").value;
      var idText8 = document.getElementById("IS_Build").value;
      var idText9 = document.getElementById("PROD_PCT").value;
      var idText10 = document.getElementById("PROD_Build").value;
      var idText11 = document.getElementById("Debut_Build").value;
      if (document.getElementById("subscription").checked){
        var idText1 = "Yes"
      }else{
        var idText1 = "No"
      };
      var idText12 = document.getElementById("newoutlook").value;
      if (document.getElementById("subscription").checked){
        var idText12 = "Yes"
      }else{
        var idText12 = "No"
      };
      var data = { featureName: idText, 
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
      };
      //url is hardcoded from flow. 
      console.log(data);
      var url =
        "https://prod-31.westcentralus.logic.azure.com:443/workflows/d2d8b29778ca467fa840cd6c269a60da/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Uk0BYuFE8AGp3Be87ujcsoAfJzWrjqi0uOxh6ITl6ws";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        // .then(function(response) {
        //   return response.json();
        // })
        console.log("got the response from Flow");
        setTimeout(() => {  location.reload(); }, 1000);
    }