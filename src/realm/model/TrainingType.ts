import type { TrainingPart } from "@/consts/TrainingPart";
import { BSON, type ObjectSchema } from "realm";
import Realm from "realm";

export class TrainingType extends Realm.Object {
	_id!: BSON.ObjectId;
	name!: string;
	part!: TrainingPart;
	lastTrainingDate?: Date;

	static schema: ObjectSchema = {
		name: "TrainingType",
		properties: {
			_id: { type: "objectId", default: () => new BSON.ObjectId() },
			name: "string",
			part: { type: "string", indexed: true },
			lastTrainingDate: "date?",
		},
		primaryKey: "_id",
	};
}
