import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "@/components/User";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div>
			<h1>Home</h1>
			<h1>This is server side session</h1>
			<code>{JSON.stringify(session)}</code>

			<hr />
			<p>Client side session</p>
			<User />
		</div>
	);
}
