const MOVES = [
  { name: "しんそく", type: "ノーマル", power: 80, category: "physical", add: false },
  { name: "ほのおのうず", type: "ほのお", power: 35, category: "special", add: false },
  { name: "げきりん", type: "ドラゴン", power: 120, category: "physical", add: false },
  { name: "じしん", type: "じめん", power: 100, category: "physical", add: false },
  { name: "テラバースト", type: "ノーマル", power: 80, category: "physical", add: false },
  { name: "シャドーボール", type: "ゴースト", power: 80, category: "special", add: true },
  { name: "ゴールドラッシュ", type: "はがね", power: 120, category: "special", add: false },
  { name: "ムーンフォース", type: "フェアリー", power: 95, category: "special", add: true },
  { name: "ふいうち", type: "あく", power: 70, category: "physical", add: false },
  { name: "つららおとし", type: "こおり", power: 85, category: "physical", add: true },
  { name: "せいなるつるぎ", type: "かくとう", power: 90, category: "physical", add: false },
  { name: "かえんほうしゃ", type: "ほのお", power: 90, category: "special", add: true },
  { name: "むしのさざめき", type: "むし", power: 90, category: "special", add: true },
  { name: "ヘビーボンバー", type: "はがね", power: 120, category: "physical", add: false },
  { name: "アイススピナー", type: "こおり", power: 80, category: "physical", add: false },
] as const;
export default MOVES;
