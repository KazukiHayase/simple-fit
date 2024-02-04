export type TrainingPart =
	| "SHOULDER"
	| "CHEST"
	| "ARM"
	| "BACK"
	| "ABDOMEN"
	| "LEG"
	| "AEROBIC"
	| "OTHER";

export const TrainingPart: Record<TrainingPart, string> = {
	SHOULDER: "肩",
	CHEST: "胸",
	ARM: "腕",
	BACK: "背中",
	ABDOMEN: "お腹",
	LEG: "脚",
	AEROBIC: "有酸素",
	OTHER: "その他",
};
