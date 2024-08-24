/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	optimizeFonts: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	env: {
		JWT_SECRET: "asdfghjklnbvcxzqwertyuiopmkioprewqasderfgnujm",
		AWS_SES_USER: "...",
		AWS_SES_PASSWORD: ".....",
		CLOUD_NAME: "cloudname",
		UPLOAD_PRESETS: "presets",
		CLOUDINARY_URL:
			"https://api.cloudinary.com/v1_1/cloudname/image/upload",
		CLOUDINARY_VIDEO_URL:
			"https://api.cloudinary.com/v1_1/cloudname/video/upload",
		CLOUDINARY_ZIP_URL:
			"https://api.cloudinary.com/v1_1/cloudname/raw/upload",
			STRIPE_SECRET_KEY: "sk_test_51MnMhBHYNlhHE0nrf1x1mjYoozMzYqX3zUodPXugjlJTF1TdwsE4qfLnDDCTVPHvthPwnD4UuvmMTPkKKgwYA02700cB3YsyAP",
			STRIPE_PUBLISHABLE_KEY: "pk_test_51MnMhBHYNlhHE0nrxZSXfjdqSS9CJI06f5BNfIq2yJunoFWh9UOHlzkqgucCr0tJxDHHrd57EbG0ldAc9YsQhfks00FdN2cKCh",
	},
};

module.exports = nextConfig;
