import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";
export const metadata = {
	title: "Threads",
	descreption: "A next.js 13 Meta Threads Application",
	icons: {
		icon: "/favicon.ico",
	},
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<head>
					<meta charSet='utf-8' />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta name='description' content={metadata.descreption} />
					<meta name='author' content='Meta Threads' />
					<title>{metadata.title}</title>
					<link rel='icon' href='/favicon.ico' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</head>

				<body className={`${inter.className} bg-dark-1`}>
					<div className='w-full flex justify-center items-center min-h-screen'>
						{children}
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
