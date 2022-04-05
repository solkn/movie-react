var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';

var obj = JSON.parse(jsonStr);
var fifth = {"teamId":"5","status":"stop"};
obj['theTeam'].push({"teamId":"4","status":"pending"});
obj["theTeam"].push(fifth);


//jsonStr = JSON.stringify(obj);

console.log("json object is",obj);
