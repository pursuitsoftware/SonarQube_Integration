
const request = require("request");

const QTEST_bAuth_TOKEN=`cHVyc3VpdHJuZDo=`; //Replace it with the value from your qTest Instance. 
const ManagerURL=`pursuitrnd.qtestnet.com`; //Replace it with your qTest Instance.  
const ManagerID=`appadmin@pursuitsoftware.biz`; //Your qTest instance's uid
const ManagerPWD=`India12345`; //Your qTest instance's pwd
// DO NOT EDIT exported "handler" function is the entrypoint

 const func=async ()=> {
	 
    //--------------Get Auth Token ---------------------------
    async function getQtestAuthToken()
	{
		const url=`https://${ManagerURL}/oauth/token`;
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
	//------------End Get Auth Token ------------

    const standardHeaders = {
        "Content-Type": "application/json",
        Authorization: `bearer ${qTestToken}`,
    };
    // /*
	var wbhkReq=await createReqCreatedWebHook();
	if (!wbhkReq)
	{
		console.log("Error Creating Reuirement Created Webhook");
	}
	else
	{
		console.log("Reuirement Created Webhook Creation Successful");
	}
	wbhkReq=await createDefectSubmittedWebHook();
	if (!wbhkReq)
	{
		console.log("Error Creating Defect Submitted Webhook");
	}
	else
	{
		console.log("Defect Submitted Webhook Creation Successful");
	}
	wbhkReq=await createDefectModifiedWebHook();
	if (!wbhkReq)
	{
		console.log("Error Creating Defect Modified Webhook");
	}
	else
	{
		console.log("Defect Modified Webhook Creation Successful");
	}
	//*/
	
	/*
	var delwbhk=await deleteCreatedWebHook(`395`);
	    delwbhk=await deleteCreatedWebHook(`396`);
	    delwbhk=await deleteCreatedWebHook(`397`);
	*/
    async function createReqCreatedWebHook() {
        const url = `https://${ManagerURL}/api/v3/webhooks`;
        const requestBody = {
            name: "aquaSecRequirementCreated",
			url: "https://pulse-7.qtestnet.com/webhook/7c59fb3a-999c-4bb9-8366-9d0204b84996",  //// Replace with the trigger for "qTestRequirementSubmitted"
			events: ["requirement_created"],
			responseType: "json",
			secretKey: "34c17442-4464-4932-ad2e-bdb3b8ea7025"
        };

        console.log(`[Info] Creating Module.`);

        try {
            const response= await post(url, requestBody);
            return response;
        } catch (error) {
            console.log(`[Error] Failed to create requirement`, error);
        }
    }
	async function createDefectSubmittedWebHook() {
        const url = `https://${ManagerURL}/api/v3/webhooks`;
        const requestBody = {
            name: "aquaSecDefectSubmitted",
			url: "https://pulse-7.qtestnet.com/webhook/bdc10b8b-aa2f-4854-b747-733eb7622e26",  //// Replace with the trigger for "qTestDefectSubmitted"
			events: ["defect_submitted"],
			responseType: "json",
			secretKey: "34c17442-4464-4932-ad2e-bdb3b8ea7025"
        };

        console.log(`[Info] Creating Module.`);

        try {
            const response= await post(url, requestBody);
            return response;
        } catch (error) {
            console.log(`[Error] Failed to create requirement`, error);
        }
    }
	async function createDefectModifiedWebHook() {
        const url = `https://${ManagerURL}/api/v3/webhooks`;
        const requestBody = {
            name: "aquaSecDefectModified",
			url: "https://pulse-7.qtestnet.com/webhook/3afeb98e-4214-4857-8a5b-afcd8d4074f9",  //// Replace with the trigger for "qTestDefectModified"
			events: ["defect_modified"],
			responseType: "json",
			secretKey: "34c17442-4464-4932-ad2e-bdb3b8ea7025"
        };

        console.log(`[Info] Creating Module.`);

        try {
            const response= await post(url, requestBody);
            return response;
        } catch (error) {
            console.log(`[Error] Failed to create requirement`, error);
        }
    }
	async function deleteCreatedWebHook(wbhkid) {
        const url = `https://${ManagerURL}/api/v3/webhooks/${wbhkid}`;
       const requestBody = {
            
        };

        console.log(`[Info] Creating Module.`);

        try {
            const response= await doRequest(url,"Delete", requestBody);
            return response;
        } catch (error) {
            console.log(`[Error] Failed to create requirement`, error);
        }
    }

    function post(url, requestBody) {
        return doRequest(url, "POST", requestBody);
    }

    function put(url, requestBody) {
        return doRequest(url, "PUT", requestBody);
    }
	

    async function doRequest(url, method, requestBody) {
        const opts = {
            url: url,
            json: true,
            headers: standardHeaders,
            body: requestBody,
            method: method,
        };

        return new Promise((resolve, reject) => {
            request(opts, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }

                if (response.statusCode < 200 || response.statusCode >= 300) {
                    reject(`HTTP ${response.statusCode}`);
                    return;
                }

                resolve(body);
            });
        });
    }
	async function doAzDoRequest(url, method, requestBody) {
        const basicToken = Buffer.from(`:${constants.AZDO_TOKEN}`).toString("base64");

        const opts = {
            url: url,
            json: true,
            headers: {
                "Content-Type": "application/json-patch+json",
                Authorization: `basic ${basicToken}`,
            },
            body: requestBody,
            method: method,
        };

        return new Promise((resolve, reject) => {
            request(opts, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }

                if (response.statusCode < 200 || response.statusCode >= 300) {
                    reject(`HTTP ${response.statusCode}`);
                    return;
                }

                resolve(body);
            });
        });
    }

    async function doqTestPostAuthRequest(url, method, requestBody) {
        const qTestAuthHeaders = {
					"accept": "application/json",
					"Authorization": "Basic "+QTEST_bAuth_TOKEN,
					"content-type": "application/x-www-form-urlencoded"
				};
        const opts = {
            url: url,
            headers: qTestAuthHeaders,
            body: requestBody,
            method: method,
        };
        return new Promise((resolve, reject) => {
            request(opts, function (error, response, body) {
                if (error) {
                    reject(error);
                    return;
                }
                if (response.statusCode < 200 || response.statusCode >= 300) {
                    reject(`HTTP ${response.statusCode}`);
                    return;
                }
                resolve(body);
            });
        });
    }
 }
 func();
