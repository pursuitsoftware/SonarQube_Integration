var request = require('request');
const AzDoAuthToken=`Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
const azureOrgName=`pursuitsoftwareqa`;
const azureProcessName=`AgileProcessRAPI`;
const parentTemplateTypeID=`f324ed2c-e3db-4f11-bd3c-15f3d141bd2d`;

//const ruleName=`pursuitRule2`;
//const ruleFriendlyName=`Make qTest Link Field ReadOnly2`;
//const fieldName=`Custom.qTestLink`;
const func=async()=>{

  await createRule_Feature();
  await createRule_Bug();
  await createRule_ReadOnly_UserStory();
  await createRule_Mandatory_Description_UserStory();
  await createRule_Mandatory_AcceptanceCriteria_UserStory();
  await createRule_Default_StoryPoint_UserStory();

  async function createRule_Feature()
  {
    const ruleName=`pursuitRule1`;
    const ruleFriendlyName=`Make qTest Link Field ReadOnly in Feature`;
    const fieldName=`Custom.FeatureLinkId`; //Replace with actual field name. 
    const workItemTypeName='Feature';
    const workItemType=`${azureProcessName}.${workItemTypeName}`;
    const apiurlAddRules=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/rules?api-version=7.1-preview.1`;
   
    var options = {
      'method': 'POST',
      'url': apiurlAddRules,
      'headers': {
        'Authorization': AzDoAuthToken,
        'Content-Type': 'application/json'/*,
        'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
    */  
    },
      body: JSON.stringify({
        "name": ruleName,
        "friendlyName": ruleFriendlyName,
        "conditions": [
          {
            "conditionType": "$whenNotChanged",
            "field": fieldName,
            "value": null
          },
          
        ],
        "actions": [
          {
            "actionType": "$makeReadOnly",
            "targetField": fieldName,
            "value": null
          }
        ],
        "isDisabled": false
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      //console.log(response.body);
      console.log(`${ruleName} Created Successfully`);
    });
  }
  async function createRule_Bug()
  {
    const ruleName=`pursuitRule2`;
    const ruleFriendlyName=`Make qTest Link Field ReadOnly in Bug`;
    const fieldName=`Custom.BugLinkId`; //Replace with actual field name. 
    const workItemTypeName='Bug';
    const workItemType=`${azureProcessName}.${workItemTypeName}`;
    const apiurlAddRules=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/rules?api-version=7.1-preview.1`;
    
    var options = {
      'method': 'POST',
      'url': apiurlAddRules,
      'headers': {
        'Authorization': AzDoAuthToken,
        'Content-Type': 'application/json'/*,
        'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
    */  
    },
      body: JSON.stringify({
        "name": ruleName,
        "friendlyName": ruleFriendlyName,
        "conditions": [
          {
            "conditionType": "$whenNotChanged",
            "field": fieldName,
            "value": null
          },
          
        ],
        "actions": [
          {
            "actionType": "$makeReadOnly",
            "targetField": fieldName,
            "value": null
          }
        ],
        "isDisabled": false
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      //console.log(response.body);
      console.log(`${ruleName} Created Successfully`);
    });
  }
  async function createRule_ReadOnly_UserStory()
  {
    const ruleName=`pursuitRule3`;
    const ruleFriendlyName=`Make qTest Link Field ReadOnly in User Story`;
    const fieldName=`Custom.UsLinkId`; //Replace with actual field name. 
    const workItemTypeName='UserStory';
    const workItemType=`${azureProcessName}.${workItemTypeName}`;
    const apiurlAddRules=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/rules?api-version=7.1-preview.1`;
    
    var options = {
      'method': 'POST',
      'url': apiurlAddRules,
      'headers': {
        'Authorization': AzDoAuthToken,
        'Content-Type': 'application/json'/*,
        'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
    */  
    },
      body: JSON.stringify({
        "name": ruleName,
        "friendlyName": ruleFriendlyName,
        "conditions": [
          {
            "conditionType": "$whenNotChanged",
            "field": fieldName,
            "value": null
          },
          
        ],
        "actions": [
          {
            "actionType": "$makeReadOnly",
            "targetField": fieldName,
            "value": null
          }
        ],
        "isDisabled": false
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(`${ruleName} error`);
      console.log(`${ruleName} response.body`);
      // console.log(`${ruleName} Created Successfully`);
    });
  }
  async function createRule_Mandatory_Description_UserStory()
  {
    const ruleName=`pursuitRule4`;
    const ruleFriendlyName=`Make Description Field Mandatory in User Story`;
    const targetfieldName=`System.Description`; //Replace with actual field name. 
    const fieldName=`System.State`;
    const workItemTypeName='UserStory';
    const workItemType=`${azureProcessName}.${workItemTypeName}`;
    const apiurlAddRules=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/rules?api-version=7.1-preview.1`;
   
    var options = {
      'method': 'POST',
      'url': apiurlAddRules,
      'headers': {
        'Authorization': AzDoAuthToken,
        'Content-Type': 'application/json'/*,
        'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
    */  
    },
      body: JSON.stringify({
        "name": ruleName,
        "friendlyName": ruleFriendlyName,
        "conditions": [
          {
            "conditionType": "$whenWas",
            "field": fieldName,
            "value": ""
          },
          
        ],
        "actions": [
          {
            "actionType": "$makeRequired",
            "targetField": targetfieldName,
            "value": null
          },
          {
            "actionType": "$copyValue",
            "targetField": targetfieldName,
            "value": "."
            }
        ],
        "isDisabled": false
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(`${ruleName} error`);
      console.log(`${ruleName} response.body`);
      // console.log(`${ruleName} Created Successfully`);
    });
  }
  async function createRule_Mandatory_AcceptanceCriteria_UserStory()
  {
    const ruleName=`pursuitRule5`;
    const ruleFriendlyName=`Make Acceptance Criteria Field Mandatory in User Story`;
    const targetfieldName=`Microsoft.VSTS.Common.AcceptanceCriteria`; //Replace with actual field name. 
    const fieldName=`System.State`;
    const workItemTypeName='UserStory';
    const workItemType=`${azureProcessName}.${workItemTypeName}`;
    const apiurlAddRules=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/rules?api-version=7.1-preview.1`;
    
    var options = {
      'method': 'POST',
      'url': apiurlAddRules,
      'headers': {
        'Authorization': AzDoAuthToken,
        'Content-Type': 'application/json'/*,
        'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
    */  
    },
      body: JSON.stringify({
        "name": ruleName,
        "friendlyName": ruleFriendlyName,
        "conditions": [
          {
            "conditionType": "$whenWas",
            "field": fieldName,
            "value": ""
          },
          
        ],
        "actions": [
          {
            "actionType": "$makeRequired",
            "targetField": targetfieldName,
            "value": null
          },
          {
            "actionType": "$copyValue",
            "targetField": targetfieldName,
            "value": "."
            }
        ],
        "isDisabled": false
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(`${ruleName} error`);
      console.log(`${ruleName} response.body`);
      // console.log(`${ruleName} Created Successfully`);
    });
  }
  async function createRule_Default_StoryPoint_UserStory()
  {
    const ruleName=`pursuitRule6`;
    const ruleFriendlyName=`Set Story Points to Default in User Story`;
    const targetfieldName=`Microsoft.VSTS.Scheduling.StoryPoints`; 
    const fieldName=`System.State`;
    const workItemTypeName='UserStory';
    const workItemType=`${azureProcessName}.${workItemTypeName}`;
    const apiurlAddRules=`https://dev.azure.com/${azureOrgName}/_apis/work/processes/${parentTemplateTypeID}/workItemTypes/${workItemType}/rules?api-version=7.1-preview.1`;
    //console.log(`Creating Default Value Rule for User Story`);
    var options = {
      'method': 'POST',
      'url': apiurlAddRules,
      'headers': {
        'Authorization': AzDoAuthToken,
        'Content-Type': 'application/json'/*,
        'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
    */  
    },
      body: JSON.stringify({
        "name": ruleName,
        "friendlyName": ruleFriendlyName,
        "conditions": [
          {
            "conditionType": "$whenWas",
            "field": fieldName,
            "value": ""
          }          
        ],
        "actions": [
          {
            "actionType": "$copyValue",
            "targetField": targetfieldName,
            "value": "0"
          }
        ],
        "isDisabled": false
      })

    };
    request(options, function (error, response) {
      if (error) throw new Error(`${ruleName} error`);
      console.log(`${ruleName} response.body`);
      // console.log(`${ruleName} Created Successfully`);
    });
  }
}
func();
