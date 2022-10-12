module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite",
		"disableTelemetry": true
  },
  "features": {
    "storyStoreV7": true
  },
	viteFinal: (config, { configType }) => {
		if(configType === 'PRODUCTION') {
			config.base = '/ignite-lab-04-design-system'
		}

		return config
	}
}
