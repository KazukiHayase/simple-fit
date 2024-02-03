import { BSON, type ObjectSchema } from "realm";
import Realm from "realm";

export class Training extends Realm.Object {
	_id!: BSON.ObjectId;
	name!: string;

	static schema: ObjectSchema = {
		name: "Training",
		properties: {
			_id: "objectId",
			name: { type: "string", indexed: "full-text" },
		},
		primaryKey: "_id",
	};
}
