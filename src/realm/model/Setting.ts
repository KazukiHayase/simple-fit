import { BSON, type ObjectSchema } from "realm";
import Realm from "realm";

export const SETTING_ID = new BSON.ObjectId("setting-0001");

export class Setting extends Realm.Object {
	_id!: BSON.ObjectId;
	seedVersion!: string;

	static schema: ObjectSchema = {
		name: "Setting",
		properties: {
			_id: "objectId",
			seedVersion: "string",
		},
		primaryKey: "_id",
	};
}
