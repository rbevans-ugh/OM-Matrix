// This is called in the head of page load to ensure microsft.com users are accessing certain pages.
function accessvalid() {
    // We're using this to prevent non-msft users from accessing this page and will redirect or post modal of access denied.
    var user
    // Here we're getting the user making the submission
    // We can't always get claim/upn so relying on claim/name
    $.get("https://dev-omlc.azurewebsites.net/.auth/me", function (data) {
        for (var key in data[0]["user_claims"]) {
            var obj = data[0]["user_claims"][key];
            if (obj["typ"].includes("claims/name")) {
                user = obj["val"];
                if (user.includes("@microsoft.com")) {
                    console.log("I got the MSFT user " + user);
                    break;
                }
            }
        };
        if (user.includes("@microsoft.com")) {
            console.log("We have a valid user")
        } else {
            console.log("We don't have a valid user");
            window.location.replace("denied.html");
        }
    });
    console.log("hi " + user);
}