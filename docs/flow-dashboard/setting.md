---
sidebar_position: 3
---
# Setting

Convert to the Setting tab, you can do some operations on your flow.

## Rename your flow

To rename your flow, click on 'Edit' under the Flow name section. After making the change, click 'Save' to save it.

## Disconnect the flow to cut the flow from the template and change to a new template

Under Setting -> Git Repo, click on Disconnect to cut your flow from the GitHub repo template. After successfully disconnecting the flow, flows.network stops listen to any new commits you pushed to your GitHub repo (your cloned template) or re-build the function for you. At this point,  this flow is still running.

Now you can import a new GitHub repo (another template) to this flow by clicking the organization dropdown menu to choose another repo (template), and then click on "Deploy". So newly chosen template/ function replaces the current flow.

## Change configurations

Under the Configuration section, you can delete or add configurations for your flow.

* Click the "-" to delete a configuration.
* To add a new one, firstly your need to enter the key and value and then click "+".

## Tags

Tags help you manage your flow. You can add different tags and reuse the existing tags here.

After that, you can search for your flow using `#tag_name` on My Flows page.

## Pause or delete the flow

Under the Danger Zone section, you can pause or delete your flow.

Pausing a flow is revocable. This action is only applicable when the flow is running. Once paused, a flow can't be triggered and hence there is no actions.

Deleting a flow is irrevocable. Make sure to double-check before deleting a flow.
