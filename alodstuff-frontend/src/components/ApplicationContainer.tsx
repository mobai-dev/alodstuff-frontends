import Application from "./Application";
import applicationCollection from "../../application-collection.ts";

export default function ApplicationContainer() {
	return (
		<main>
			<ol className="flex gap-10">
				{applicationCollection.map((app) =>
					<Application title={app.title} />
				)}
			</ol>
		</main>
	)
}