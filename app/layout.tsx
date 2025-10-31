import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "AthenaMind",
	description: "AI Trading Simulation of Tokyo Stock Market",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
