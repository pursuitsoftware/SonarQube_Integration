const request = require('request');
const func=async ()=> {
	const azdoAuthToken=`OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=`;
	await createWICreated_Feature();
	//return;
	await createWIUpdated_Feature();
	await createWIDeleted_Feature();
	await createWICreated_UserStory();
	await createWIUpdated_UserStory();
	await createWIDeleted_UserStory();
	
	async function createWICreated_Feature()
	{ 
		var options = {
		  'method': 'POST',
		  'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/hooks/subscriptions?api-version=7.1-preview.1',
		  'headers': {
			'Authorization': 'Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=',
			'Content-Type': 'application/json',
			'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%22b3caa158-8732-4063-be5a-5e4fcc58c5cf%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
		  },
		  body: JSON.stringify({
			"consumerActionId": "httpRequest",
			"consumerId": "webHooks",
			"consumerInputs": {
			  "url": "https://pulse-us-east-1.qtestnet.com/webhook/18b06941-ef36-40d1-b3df-0c0b084a30ba" // Replace with the Trigger For AzDoFeatureCreated
			},
			"eventType": "workitem.created",
			"publisherId": "tfs",
			"publisherInputs": {
			  "areaPath": "any",
			  "workItemType": "Feature",
			  "projectId": "69f41d2b-c3e6-4c65-9e6a-cdc6e9e6a798"
			},
			"resourceVersion": "1.0",
			"scope": "all",
			"status": "enabled"
		  })

		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		  });
	}
	async function createWIUpdated_Feature()
	{ 
		var options = {
		  'method': 'POST',
		  'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/hooks/subscriptions?api-version=7.1-preview.1',
		  'headers': {
			'Authorization': 'Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=',
			'Content-Type': 'application/json',
			'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%226a0ce5e5-e919-4c58-bbed-8e5436c98ae6%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
		  },
		  body: JSON.stringify({
			"consumerActionId": "httpRequest",
			"consumerId": "webHooks",
			"consumerInputs": {
			  "url": "https://pulse-us-east-1.qtestnet.com/webhook/18b06941-ef36-40d1-b3df-0c0b084a30ba" // Replace with the Trigger For AzDoFeatureCreated
			},
			"eventType": "workitem.updated",
			"publisherId": "tfs",
			"publisherInputs": {
			  "areaPath": "any",
			  "workItemType": "Feature",
			  "projectId": "69f41d2b-c3e6-4c65-9e6a-cdc6e9e6a798"
			},
			"resourceVersion": "1.0",
			"scope": "all",
			"status": "enabled"
		  })

		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		  });
	}
	async function createWIDeleted_Feature()
	{ 
		var options = {
		  'method': 'POST',
		  'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/hooks/subscriptions?api-version=7.1-preview.1',
		  'headers': {
			'Authorization': 'Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=',
			'Content-Type': 'application/json',
			'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%226a0ce5e5-e919-4c58-bbed-8e5436c98ae6%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
		  },
		  body: JSON.stringify({
			"consumerActionId": "httpRequest",
			"consumerId": "webHooks",
			"consumerInputs": {
			  "url": "https://pulse-us-east-1.qtestnet.com/webhook/18b06941-ef36-40d1-b3df-0c0b084a30ba" // Replace with the Trigger For AzDoFeatureCreated
			},
			"eventType": "workitem.deleted",
			"publisherId": "tfs",
			"publisherInputs": {
			  "areaPath": "any",
			  "workItemType": "Feature",
			  "projectId": "69f41d2b-c3e6-4c65-9e6a-cdc6e9e6a798"
			},
			"resourceVersion": "1.0",
			"scope": "all",
			"status": "enabled"
		  })

		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		  });
	}
	async function createWICreated_UserStory()
	{ 
		var options = {
		  'method': 'POST',
		  'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/hooks/subscriptions?api-version=7.1-preview.1',
		  'headers': {
			'Authorization': 'Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=',
			'Content-Type': 'application/json',
			'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%226a0ce5e5-e919-4c58-bbed-8e5436c98ae6%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
		  },
		  body: JSON.stringify({
			"consumerActionId": "httpRequest",
			"consumerId": "webHooks",
			"consumerInputs": {
			  "url": "https://pulse-us-east-1.qtestnet.com/webhook/18b06941-ef36-40d1-b3df-0c0b084a30ba" //Replace with the Trigger for AzureDevopsWorkItemForRequirementCreatedUpdatedDeleted
			},
			"eventType": "workitem.created",
			"publisherId": "tfs",
			"publisherInputs": {
			  "areaPath": "any",
			  "workItemType": "User Story",
			  "projectId": "69f41d2b-c3e6-4c65-9e6a-cdc6e9e6a798"
			},
			"resourceVersion": "1.0",
			"scope": "all",
			"status": "enabled"
		  })

		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		  });
	}
	async function createWIUpdated_UserStory()
	{ 
		var options = {
		  'method': 'POST',
		  'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/hooks/subscriptions?api-version=7.1-preview.1',
		  'headers': {
			'Authorization': 'Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=',
			'Content-Type': 'application/json',
			'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%226a0ce5e5-e919-4c58-bbed-8e5436c98ae6%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
		  },
		  body: JSON.stringify({
			"consumerActionId": "httpRequest",
			"consumerId": "webHooks",
			"consumerInputs": {
			  "url": "https://pulse-us-east-1.qtestnet.com/webhook/18b06941-ef36-40d1-b3df-0c0b084a30ba" //Replace with the Trigger for AzureDevopsWorkItemForRequirementCreatedUpdatedDeleted
			},
			"eventType": "workitem.updated",
			"publisherId": "tfs",
			"publisherInputs": {
			  "areaPath": "any",
			  "workItemType": "User Story",
			  "projectId": "69f41d2b-c3e6-4c65-9e6a-cdc6e9e6a798"
			},
			"resourceVersion": "1.0",
			"scope": "all",
			"status": "enabled"
		  })

		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		  });
	}
	async function createWIDeleted_UserStory()
	{ 
		var options = {
		  'method': 'POST',
		  'url': 'https://dev.azure.com/pursuitsoftwareqa/_apis/hooks/subscriptions?api-version=7.1-preview.1',
		  'headers': {
			'Authorization': 'Basic OmtpcWV6dG93aXE3M2hlbXZmbW9ia2pib3FiNmJ1aHZzczRybGQ1c2x6Y3Nsd2tzZXd1dmE=',
			'Content-Type': 'application/json',
			'Cookie': 'VstsSession=%7B%22PersistentSessionId%22%3A%226a0ce5e5-e919-4c58-bbed-8e5436c98ae6%22%2C%22PendingAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22CurrentAuthenticationSessionId%22%3A%2200000000-0000-0000-0000-000000000000%22%2C%22SignInState%22%3A%7B%7D%7D'
		  },
		  body: JSON.stringify({
			"consumerActionId": "httpRequest",
			"consumerId": "webHooks",
			"consumerInputs": {
			  "url": "https://pulse-us-east-1.qtestnet.com/webhook/18b06941-ef36-40d1-b3df-0c0b084a30ba" //Replace with the Trigger for AzureDevopsWorkItemForRequirementCreatedUpdatedDeleted

			},
			"eventType": "workitem.deleted",
			"publisherId": "tfs",
			"publisherInputs": {
			  "areaPath": "any",
			  "workItemType": "User Story",
			  "projectId": "69f41d2b-c3e6-4c65-9e6a-cdc6e9e6a798"
			},
			"resourceVersion": "1.0",
			"scope": "all",
			"status": "enabled"
		  })

		};
		request(options, function (error, response) {
			if (error) throw new Error(error);
			console.log(response.body);
		  });
	}
}
func();