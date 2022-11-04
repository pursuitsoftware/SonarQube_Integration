const request = require('request');
const func=async ()=> {
    const AzDoAuthToken=`Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
    const projectName=`AzDoAPICrtdProject`;
    const projectDesc=`This Project is created using Azure REST API from Node.js script`;
    const azureOrgName=`pursuitsoftwareqa`;
    const sourceControl=`Git`;
    const parentTemplateTypeID=`40877026-6fb4-49d3-8574-b6e02a03860c`;
    const apiurl=`https://dev.azure.com/${azureOrgName}/_apis/projects?api-version=6.0-preview.2`;

    await createAzDoProject();
    async function createAzDoProject()
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
            "name": projectName,
            "description": projectDesc,
            "capabilities": {
            "versioncontrol": {
                "sourceControlType": sourceControl
            },
            "processTemplate": {
                "templateTypeId": parentTemplateTypeID
            }
            }
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        //console.log(response.body);
        console.log(`New AzDo Project named ${projectName} Created in ${azureOrgName}` );
        });
    }
}
func();