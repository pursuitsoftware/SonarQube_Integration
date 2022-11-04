var request = require('request');
const AzDoAuthToken=`Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
const azureOrgName=`pursuitsoftwareqa`;
const azureProcessName=`AgileProcessRAPI`;
const parentTemplateTypeID=`f324ed2c-e3db-4f11-bd3c-15f3d141bd2d`;


const func=async()=>{

    await createGroup_feature();
    await createGroup_UserStory();
    await createGroup_bug();
    //return;
    async function createGroup_feature()
    {
        const workItemTypeName='Feature';
        const workItemType=`${azureProcessName}.${workItemTypeName}`
        const pageId=`Agile.${workItemTypeName}.${workItemTypeName}`;
        const sectionId=`Section1`;
        const apiURL=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/layout/pages/${pageId}/sections/${sectionId}/groups?api-version=7.1-preview.1`;
        const groupLabel=`LS(F) - qTest`;   
        var options = {
        'method': 'POST',
        'url':apiURL ,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "controls": null,
            "id": null,
            "label": groupLabel,
            "order": null,
            "overridden": null,
            "inherited": null,
            "visible": true
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
    async function createGroup_UserStory()
    {
        const workItemTypeName='UserStory';
        const workItemType=`${azureProcessName}.${workItemTypeName}`
        const pageId=`Agile.User Story.User Story`;
        const sectionId=`Section2`;
        const apiURL=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/layout/pages/${pageId}/sections/${sectionId}/groups?api-version=7.1-preview.1`;
        const groupLabel=`LS(US) - qTestt`;   
        var options = {
        'method': 'POST',
        'url':apiURL ,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "controls": null,
            "id": null,
            "label": groupLabel,
            "order": null,
            "overridden": null,
            "inherited": null,
            "visible": true
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
    async function createGroup_bug()
    {
        const workItemTypeName='Bug';
        const workItemType=`${azureProcessName}.${workItemTypeName}`
        const pageId=`Agile.${workItemTypeName}.${workItemTypeName}`;
        const sectionId=`Section1`;
        const apiURL=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/layout/pages/${pageId}/sections/${sectionId}/groups?api-version=7.1-preview.1`;
        const groupLabel=`LS(B) - qTest`;   
        var options = {
        'method': 'POST',
        'url':apiURL ,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "controls": null,
            "id": null,
            "label": groupLabel,
            "order": null,
            "overridden": null,
            "inherited": null,
            "visible": true
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
}
func();
