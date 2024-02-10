import { TrainingType } from "@/realm/model/TrainingType";
import { BSON } from "realm";

export const TrainingTypeSeed: Partial<TrainingType>[] = [
	// 肩
	{
		_id: new BSON.ObjectId("shoulder-001"),
		name: "バーベルショルダープレス",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-002"),
		name: "バックショルダープレス",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-003"),
		name: "ダンベルショルダープレス",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-004"),
		name: "アーノルドプレス",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-005"),
		name: "フロントレイズ",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-006"),
		name: "三角筋中部",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-007"),
		name: "サイドレイズ",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-008"),
		name: "アップライトロウ",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-009"),
		name: "インクラインサイドレイズ",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-010"),
		name: "インクラインバックサイドレイズ",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-011"),
		name: "三角筋後部",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-012"),
		name: "リアレイズ",
		part: "SHOULDER",
	},
	{
		_id: new BSON.ObjectId("shoulder-013"),
		name: "ライイングリアレイズ",
		part: "SHOULDER",
	},
	// 胸
	{
		_id: new BSON.ObjectId("chest-000001"),
		name: "インクラインベンチプレス",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000002"),
		name: "インクラインダンベルベンチプレス",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000003"),
		name: "インクラインダンベルフライ",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000004"),
		name: "インクラインスクイーズプレス",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000006"),
		name: "ベンチプレス",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000007"),
		name: "ダンベルベンチプレス",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000008"),
		name: "ダンベルフライ",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000009"),
		name: "プッシュアップ",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000011"),
		name: "デクラインベンチプレス",
		part: "CHEST",
	},
	{
		_id: new BSON.ObjectId("chest-000012"),
		name: "ディップス",
		part: "CHEST",
	},
	// 腕
	{
		_id: new BSON.ObjectId("arm-00000001"),
		name: "スカルクラッシャー",
		part: "ARM",
	},
	{
		_id: new BSON.ObjectId("arm-00000002"),
		name: "フレンチプレス",
		part: "ARM",
	},
	{
		_id: new BSON.ObjectId("arm-00000003"),
		name: "ケーブルオーバーヘッド・トライセプスプレス",
		part: "ARM",
	},
	{
		_id: new BSON.ObjectId("arm-00000004"),
		name: "プレスダウン",
		part: "ARM",
	},
	{
		_id: new BSON.ObjectId("arm-00000005"),
		name: "リバースプッシュアップ",
		part: "ARM",
	},
	{
		_id: new BSON.ObjectId("arm-00000006"),
		name: "ナローベンチプレス",
		part: "ARM",
	},
	{
		_id: new BSON.ObjectId("arm-00000007"),
		name: "キックバック",
		part: "ARM",
	},
	// 背中
	{
		_id: new BSON.ObjectId("back-0000001"),
		name: "チンニング",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000002"),
		name: "ラットプルダウン",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000003"),
		name: "Tバーロウ",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000004"),
		name: "ベントオーバーロウ",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000005"),
		name: "ベントオーバーロウ (アンダー)",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000006"),
		name: "ワンハンドロウ",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000007"),
		name: "ダブルロウ",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000008"),
		name: "バーベルシュラッグ",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000009"),
		name: "ダンベルシュラッグ",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000010"),
		name: "Tバーロウ(脇を開ける)",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000011"),
		name: "ベントオーバーロウ (ワイド)",
		part: "BACK",
	},
	{
		_id: new BSON.ObjectId("back-0000012"),
		name: "インクラインロウ",
		part: "BACK",
	},
	// お腹
	{
		_id: new BSON.ObjectId("abdomen-0001"),
		name: "クランチ",
		part: "ABDOMEN",
	},
	{
		_id: new BSON.ObjectId("abdomen-0002"),
		name: "レッグレイズ",
		part: "ABDOMEN",
	},
	{
		_id: new BSON.ObjectId("abdomen-0003"),
		name: "ロシアンツイスト",
		part: "ABDOMEN",
	},
	// 脚
	{
		_id: new BSON.ObjectId("leg-00000001"),
		name: "スクワット",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000002"),
		name: "バーベルランジ",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000003"),
		name: "リバースランジ",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000004"),
		name: "ブルガリアンスクワット",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000005"),
		name: "フロントスクワット",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000006"),
		name: "ハックスクワット",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000007"),
		name: "シシースクワット",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000008"),
		name: "カーフレイズ",
		part: "LEG",
	},
	{
		_id: new BSON.ObjectId("leg-00000009"),
		name: "シーテッドカーフレイズ",
		part: "LEG",
	},
	// 有酸素
	{
		_id: new BSON.ObjectId("aerobic-0001"),
		name: "ランニング",
		part: "AEROBIC",
	},
	{
		_id: new BSON.ObjectId("aerobic-0002"),
		name: "ウォーキング",
		part: "AEROBIC",
	},
	{
		_id: new BSON.ObjectId("aerobic-0003"),
		name: "サイクリング",
		part: "AEROBIC",
	},
	{
		_id: new BSON.ObjectId("aerobic-0005"),
		name: "ジョギング",
		part: "AEROBIC",
	},
	// その他
];
