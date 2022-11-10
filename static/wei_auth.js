function identityFn(callback) {
  console.log("identity function");
  callback({
    // all three are required
    iss: "https://www.liveperson.com",
    acr: "loa1",
    sub: "920001",
  });
}

lpTag.identities.push(identityFn);

// Authentication JSMethod for LiveEngage
window.lpGetAuthenticationToken = function (callback) {
  console.log("inside lpGetAuthenticationToken!");  
  // const URL_PARAMS = new URLSearchParams(window.location.search);
  // const code = URL_PARAMS.get('code');

  // NOTE: this is the location of the code, if oauth ever decide to change it then it will break
  let code = "garbage";
  if(window.location.search.indexOf("code") > 0){
    code = window.location.search.split("&")[0].split("=")[1];
  } 
  let uri = "http://localhost:3000";

  // you have to return something, even empty code, else the chatbox will keep waiting for code
  console.log("got code " + code);
  console.log("calling callback with code...");
  callback({
    ssoKey: code,
    redirect_uri: uri
  });
  
}