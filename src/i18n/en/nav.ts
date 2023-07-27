/**
 * This configures the navigation sidebar.
 * All other languages follow this ordering/structure and will fall back to
 * English for any entries they haven’t translated.
 *
 * - All entries MUST include `text` and `key`
 * - Heading entries MUST include `header: true` and `type`
 * - Link entries MUST include `slug` (which excludes the language code)
 */
export default [
	{ text: 'Getting Started', header: true, type: 'learn', key: 'startHere' },
	{ text: 'About Flow', slug: 'getting-started', key: 'getting-started' },
	{ text: 'Using a Flow Template', slug: 'flow/create', key: 'flow/create' },
	{ text: 'Deploying from source code', slug: 'flow/deploy', key: 'flow/deploy' },

	{ text: 'Flow Dashboard', header: true, type: 'learn', key: 'flowdashboard' },
	{ text: 'Running Log', slug: 'dashboard/log', key: 'dashboard/log' },
	{
		text: 'Flow Status and Details',
		slug: 'dashboard/status-details',
		key: 'dashboard/status-details',
	},

	{ text: 'Integrations', header: true, type: 'learn', key: 'integration' },

	{ text: 'Slack', slug: 'integrations/slack', key: 'integrations/slack' },
	{ text: 'GitHub', slug: 'integrations/github', key: 'integrations/github' },
	{ text: 'Discord', slug: 'integrations/discord', key: 'integrations/discord' },
	{ text: 'ChatGPT', slug: 'integrations/openai', key: 'integrations/openai' },
	{ text: 'Telegram', slug: 'integrations/telegram', key: 'integrations/telegram' },
	{ text: 'SendGrid', slug: 'integrations/sendgrid', key: 'integrations/sendgrid' },
	{ text: 'Twitter', slug: 'integrations/twitter', key: 'integrations/twitter' },
	{ text: 'Cloud Vision', slug: 'integrations/cloud-vision', key: 'integrations/cloud-vision' },
	{ text: 'Airtable', slug: 'integrations/airtable', key: 'integrations/airtable' },
	{ text: 'Claude', slug: 'integrations/claude', key: 'integrations/claude' },

	{ text: 'Platform SDK Features', header: true, type: 'learn', key: 'sdk' },
	{ text: 'Timer', slug: 'sdk/timer', key: 'sdk/timer' },
	{ text: 'State Store', slug: 'sdk/store', key: 'sdk/store' },
	{ text: 'Logging', slug: 'sdk/logging', key: 'sdk/logging' },
	{ text: 'Configurations', slug: 'sdk/configuration', key: 'sdk/configuration' },
	{ text: 'Routing actions', slug: 'sdk/routing', key: 'sdk/routing' },
	{ text: 'Web service interface', slug: 'sdk/web-service', key: 'sdk/web-service' },

	{ text: 'Contribute', header: true, type: 'learn', key: 'contribute' },

	{ text: 'Examples', header: true, type: 'api', key: 'sdk' },

	{ text: 'Hello World Demo', slug: 'examples/hello', key: 'examples/hello' },
	{ text: 'Discord ChatGPT Demo', slug: 'examples/discord', key: 'examples/discord' },

	{ text: 'Rust Examples', header: true, type: 'api', key: 'sdk' },
	{ text: 'JavaScript Examples', header: true, type: 'api', key: 'sdk' },
] as const;
