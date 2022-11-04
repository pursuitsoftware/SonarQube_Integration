const request = require("request");

const ManagerURL=`pursuitrnd.qtestnet.com`; //Replace it with your qTest Instance.  
const ManagerID=`appadmin@pursuitsoftware.biz`; //Your qTest instance's uid

async function getQtestAuthToken()
{
    const url=`https://${ManagerURL}/oauth/v1/token-login`;
    const requestBody=`grant_type=password&username=${ManagerID}&password=${ManagerPWD}`;		
    const response = await doqTestPostAuthRequest(url, "POST", requestBody);
    console.log("Auth API Response :",JSON.stringify(response));
    return response;           
}

const qTestTokenDetails=await getQtestAuthToken();
console.log("Token :",qTestTokenDetails);
let qTestToken=undefined;
const splToken=qTestTokenDetails.split(",");
qTestToken=splToken[0].split(":")[1].replace(/\"/g, "");
console.log("Qtest Token :", qTestToken);