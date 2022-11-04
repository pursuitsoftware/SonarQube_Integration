const request = require('request');
const func=async ()=> {
    const AzDoAuthToken=`Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
    const processName=`AgileProcessRAPI`;
    const azureOrgName=`pursuitsoftwareqa`;
    const parentProcTypeId=`adcc42ab-9882-485e-a3ed-7678f01f66bc`;
    const procRefrenceName=`PURSUIT.${processName}`;
    const procDescription=`Inherited Agile Process Created using Azure REST API. The REST API is called via a node.js script.`;
    const apiurl=`https://dev.azure.com/${azureOrgName}/_apis/work/processes?api-version=6.0-preview.2`;
    await createInheritedAgileProcess();
    async function createInheritedAgileProcess()
    {
        var request = require('request');
        var options = {
        'method': 'POST',
        'url': apiurl,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "name": processName,
            "parentProcessTypeId": parentProcTypeId,
            "referenceName": procRefrenceName,
            "description": procDescription
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        console.log(`New Inherited Agile Process named ${processName} Created in ${azureOrgName}` );
        });
    }
}
func();