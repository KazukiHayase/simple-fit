import type { TrainingPart } from "@/consts/TrainingPart";
import { BSON, type ObjectSchema } from "realm";
import Realm from "realm";

export class TrainingType extends Realm.Object {
	_id!: BSON.ObjectId;
	name!: string;
	part!: TrainingPart;

	static schema: ObjectSchema = {
		name: "TrainingType",
		properties: {
			_id: "objectId",
			name: { type: "string" },
			part: { type: "string", indexed: true },
		},
		primaryKey: "_id",
	};
}
