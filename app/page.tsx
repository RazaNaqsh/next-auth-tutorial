import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div>
			<h1>Home</h1>
			<code>{JSON.stringify(session)}</code>
		</div>
	);
}
