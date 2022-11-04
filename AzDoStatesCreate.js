var request = require('request');
const AzDoAuthToken=`Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
const azureOrgName=`pursuitsoftwareqa`;
const azureProcessName=`AgileInheritedProcessFromRESTAPI`;
const parentTemplateTypeID=`40877026-6fb4-49d3-8574-b6e02a03860c`;

const workItemTypeName='Bug';
const workItemType=`${azureProcessName}.${workItemTypeName}`;
const apiurlAddState=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/states?api-version=7.1-preview.1`;


/* -- State Category List
---------------------------------------------
Category Name -- Proposed   | color -- b2b2b2
Category Name -- InProgress | color -- 007acc
Category Name -- Resolved   | color -- ff9d00
Category Name -- Completed  | color -- 339933
-------------------------------------------*/
const func =async()=>{
    
    //await createState_Assigned();
    //await createState_Reopened();
    await createState_Deferred();
   //await removeState_Active();
   //await DeleteState();

    async function createState_Assigned()
    {
        const stateName=`Assigned`;
        const stateColor=`007acc`;
        const stateCat=`InProgress`;
        var options = {
        'method': 'POST',
        'url': apiurlAddState,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "name": stateName,
            "color": stateColor,
            "stateCategory": stateCat
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
    async function createState_Reopened()
    {
        const stateName=`Reopened`;
        const stateColor=`007acc`;
        const stateCat=`InProgress`;
        var options = {
        'method': 'POST',
        'url': apiurlAddState,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "name": stateName,
            "color": stateColor,
            "stateCategory": stateCat
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
    async function createState_Deferred()
    {
        const stateName=`Deferred`;
        const stateColor=`007acc`;
        const stateCat=`InProgress`;
        var options = {
        'method': 'POST',
        'url': apiurlAddState,
        'headers': {
            'Authorization': AzDoAuthToken,
            'Content-Type': 'application/json',
            'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
        },
        body: JSON.stringify({
            "name": stateName,
            "color": stateColor,
            "stateCategory": stateCat
        })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
    async function removeState_Active()
    {
        
        var options = {
            'method': 'PUT',
            'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/work/processes/40877026-6fb4-49d3-8574-b6e02a03860c/workItemTypes/AgileInheritedProcessFromRESTAPI.Bug/states/277237cd-0bc0-4ffb-bdc6-d358b154ba9e?api-version=7.1-preview.1',
            'headers': {
                'Authorization': AzDoAuthToken,
                'Content-Type': 'application/json',
                'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
            },
            body: JSON.stringify({
                "hidden": false
            })

        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
    async function DeleteState()
    {
        
        var options = {
            'method': 'DELETE',
            'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/work/processes/40877026-6fb4-49d3-8574-b6e02a03860c/workItemTypes/AgileInheritedProcessFromRESTAPI.Bug/states/277237cd-0bc0-4ffb-bdc6-d358b154ba9e?api-version=7.1-preview.1',
            'headers': {
                'Authorization': AzDoAuthToken,
                'Content-Type': 'application/json',
                'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
            }
        };
        request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        });
    }
}
func();
