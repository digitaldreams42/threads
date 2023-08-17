module.exports = {
	// ... other webpack configuration ...
	module: {
		rules: [
			{
				test: /\.node$/,
				use: "node-loader", // Use node-loader to handle .node files
			},
		],
	},
};
