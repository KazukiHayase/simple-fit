import { TrainingEdit } from "@/features/training/pages/TrainingEdit";
import { useLocalSearchParams } from "expo-router";
import { BSON } from "realm";
import { object, parse, string } from "valibot";

const searchParamsSchema = object({
	id: string(),
});

const Page = () => {
	const params = useLocalSearchParams();
	const { id } = parse(searchParamsSchema, params);

	return <TrainingEdit id={new BSON.ObjectId(id)} />;
};

export default Page;
