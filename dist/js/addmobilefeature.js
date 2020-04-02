function addFeature() {
    console.log("hi");
    var idText1 = document.getElementById("featureName").value;
    var idText2 = document.getElementById("o365").checked;
    var idText3 = document.getElementById("outlook").checked;
    var idText4 = document.getElementById("o365gcc").checked;
    var idText5 = document.getElementById("gmail").checked;
    var idText6 = document.getElementById("gmailcc").checked;
    var idText7 = document.getElementById("imap").checked;
    var idText8 = document.getElementById("imapcc").checked;
    var idText9 = document.getElementById("yahoo").checked;
    var idText10 = document.getElementById("yahoocc").checked;
    var idText11 = document.getElementById("icloud").checked;
    var idText12 = document.getElementById("icloudcc").checked;
    var idText13 = document.getElementById("opcc").checked;
    var idText14 = document.getElementById("pop3").checked;
    var data = { featureName: idText1, 
      o365: idText2, 
      outlook: idText3, 
      o365gcc: idText4, 
      gmail: idText5, 
      gmailcc: idText6, 
      imap: idText7, 
      imapcc: idText8, 
      yahoo: idText9, 
      yahoocc: idText10, 
      icloud: idText11, 
      icloudcc: idText12, 
      opcc: idText13, 
      pop3: idText14, };
    //url is hardcoded from flow. 
    console.log(data);
    var url =
      "https://prod-12.westcentralus.logic.azure.com:443/workflows/cfa4a35d41f045e2ba1bbeedda848c83/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AH4uTBll2IKhsiJ0UGRdkW1mnZBsnIiTgS68nhkUfEc";
    //clear old content out so we're not concating results on each run.
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      // .then(function(response) {
      //   return response();
      // });
      console.log("got the response from Flow");
  }