var request = require('request');
 
const func=async ()=> {
    const AzDoAuthToken=`Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
    const azureOrgName=`pursuitsoftwareqa`;
    const parentTemplateTypeID=`f324ed2c-e3db-4f11-bd3c-15f3d141bd2d`;
    const apiurlCreateField=`https://dev.azure.com/${azureOrgName}/_apis/work/processDefinitions/${parentTemplateTypeID}/fields?api-version=6.0-preview.1`
    const workItemType=`Microsoft.VSTS.WorkItemTypes.Bug`;
    const apiurlAddField=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/fields?api-version=7.1-preview.2`;
    const fieldName=`BugLinkId`;
    const fieldDesc=`qTest PID`;
    let retData=[];
    let createdFieldId=undefined;
    let createdFieldName=undefined;
    let createdFieldDesc=undefined;
    let createdFieldType=undefined;
   
    await createFields();
    //return;
    await addFieldsToProcess();
    return;

    async function createFields()
    {  
        console.log(`Creating Field for the Process.....`);
        console.log(``);
        var options = {
        'method': 'POST',
        'url': apiurlCreateField,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "id": null,
            "url": null,
            "description": fieldDesc,
            "name": fieldName,
            "type": "String",
            "pickList": null
        })

        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
            var replacedBody=response.body.replace('{','');
            replacedBody=replacedBody.replace(/\"/g,'');
            var bodySplit=replacedBody.split(',');
            console.log(bodySplit[0]);
           var spl2=bodySplit[0].split(':');
            createdFieldId=spl2[1].trim();
            spl2=bodySplit[1].split(':');
            createdFieldName=spl2[1].trim();
            spl2=bodySplit[2].split(':');
            createdFieldType=spl2[1].trim();
            spl2=bodySplit[3].split(':');
            createdFieldDesc=spl2[1].trim();
            console.log(response.body);
            console.log(`Details of the newly created Field are :: ID : ${createdFieldId}, Name: ${createdFieldName}, Type: ${createdFieldType}, Description: ${createdFieldDesc}`);   
        });
    }
    
    async function addFieldsToProcess()
    { 
        console.log(`Adding the newly created Field to the Process.....`);
        console.log(``);
        var options = {
        'method': 'POST',
        'url': apiurlAddField,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "referenceName": createdFieldId,
            "name": createdFieldName,
            "type": createdFieldType,
            "description": createdFieldDesc,
            "allowGroups": true
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(``);
        console.log(`Field ${createdFieldName} added successfully to the process. Go to the process and manually add it to the Process LAYOUT`);
        });

    }
}
func();