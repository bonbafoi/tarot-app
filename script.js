// ===================================================================
// タロット占いアプリ - script.js
// ===================================================================

// ===========================
// ① 大アルカナ（22枚）
// ===========================
const majorArcana = [
  { number: "0",     name: "愚者",         nameEn: "The Fool",           suit: "major", symbol: "🌟", uprightMeaning: "新しい始まり、自由、冒険、無限の可能性。一歩踏み出す勇気を持って。",                     reversedMeaning: "無謀、無計画、リスクの見落とし。慎重に考えてから行動を。" },
  { number: "I",     name: "魔術師",        nameEn: "The Magician",       suit: "major", symbol: "✨", uprightMeaning: "意志の力、スキル、創造力。あなたには必要なものがすべて揃っている。",                     reversedMeaning: "詐欺、能力の無駄遣い、自信不足。才能を正しく使って。" },
  { number: "II",    name: "女教皇",        nameEn: "The High Priestess", suit: "major", symbol: "🌙", uprightMeaning: "直感、神秘、内なる知恵。静かに自分の心の声に耳を傾けて。",                               reversedMeaning: "秘密の暴露、直感の無視。隠された真実が明らかになるかも。" },
  { number: "III",   name: "女帝",          nameEn: "The Empress",        suit: "major", symbol: "🌸", uprightMeaning: "豊かさ、母性、自然、成長。愛情に満ちた時期。創造的なエネルギーが高まる。",               reversedMeaning: "依存、過保護、創造性の停滞。自立心を養うことが大切。" },
  { number: "IV",    name: "皇帝",          nameEn: "The Emperor",        suit: "major", symbol: "👑", uprightMeaning: "権威、安定、リーダーシップ。しっかりした基盤を作る時。",                                   reversedMeaning: "支配欲、硬直性、権力の乱用。柔軟さを持つことが必要。" },
  { number: "V",     name: "法王",          nameEn: "The Hierophant",     suit: "major", symbol: "⛪", uprightMeaning: "伝統、精神的な導き、信頼。経験者のアドバイスを聞くと良い。",                             reversedMeaning: "因習への反発、自由な考え方。既存のルールを疑う時かも。" },
  { number: "VI",    name: "恋人",          nameEn: "The Lovers",         suit: "major", symbol: "💕", uprightMeaning: "愛、調和、重要な選択。心から大切に思う存在との絆が深まる。",                             reversedMeaning: "不和、価値観のずれ、誘惑。大切な決断を避けないで。" },
  { number: "VII",   name: "戦車",          nameEn: "The Chariot",        suit: "major", symbol: "🏆", uprightMeaning: "勝利、意志力、自制心。目標に向かって突き進む強さがある。",                               reversedMeaning: "方向性の迷い、衝動、コントロール不能。焦らず方向を定めて。" },
  { number: "VIII",  name: "力",            nameEn: "Strength",           suit: "major", symbol: "🦁", uprightMeaning: "内なる強さ、勇気、忍耐。優しさで困難を乗り越えられる。",                                 reversedMeaning: "自信不足、不安、弱さ。自分を信じることが第一歩。" },
  { number: "IX",    name: "隠者",          nameEn: "The Hermit",         suit: "major", symbol: "🕯️", uprightMeaning: "内省、孤独、精神的な探求。一人でじっくり考える時間が必要。",                            reversedMeaning: "孤立、引きこもり、孤独の拒否。人とのつながりを大切に。" },
  { number: "X",     name: "運命の輪",      nameEn: "Wheel of Fortune",   suit: "major", symbol: "☸️", uprightMeaning: "転機、幸運、サイクル。運命の流れに乗る良いタイミング。",                                 reversedMeaning: "不運、抵抗、変化への恐れ。流れに逆らわず受け入れて。" },
  { number: "XI",    name: "正義",          nameEn: "Justice",            suit: "major", symbol: "⚖️", uprightMeaning: "公正、真実、因果応報。正しいことをすれば正しい結果が返ってくる。",                       reversedMeaning: "不公平、不誠実、責任回避。自分の行動を振り返って。" },
  { number: "XII",   name: "吊るされた男",  nameEn: "The Hanged Man",     suit: "major", symbol: "🔮", uprightMeaning: "一時停止、新しい視点、犠牲。別の角度から物事を見ると気づきが得られる。",                 reversedMeaning: "停滞への抵抗、無駄な犠牲。今は動くより待つことが大事かも。" },
  { number: "XIII",  name: "死神",          nameEn: "Death",              suit: "major", symbol: "🌒", uprightMeaning: "変容、終わりと始まり、手放す。古いものが終わり新しいステージへ。",                       reversedMeaning: "変化への抵抗、停滞、執着。変化を恐れないで前に進もう。" },
  { number: "XIV",   name: "節制",          nameEn: "Temperance",         suit: "major", symbol: "🌈", uprightMeaning: "バランス、調和、忍耐、中庸。焦らず着実に進むことが成功への道。",                         reversedMeaning: "不均衡、過剰、不節制。極端な行動を避けてバランスを保って。" },
  { number: "XV",    name: "悪魔",          nameEn: "The Devil",          suit: "major", symbol: "⛓️", uprightMeaning: "束縛、誘惑、物質主義。自分を縛っているものに気づく時。",                                 reversedMeaning: "解放、自由への目覚め、依存からの脱却。鎖を断ち切る力がある。" },
  { number: "XVI",   name: "塔",            nameEn: "The Tower",          suit: "major", symbol: "⚡", uprightMeaning: "突然の変化、崩壊、啓示。壊れる必要があるものが壊れる時。",                               reversedMeaning: "変化への抵抗、小さな混乱。嵐の前の静けさかもしれない。" },
  { number: "XVII",  name: "星",            nameEn: "The Star",           suit: "major", symbol: "⭐", uprightMeaning: "希望、癒し、インスピレーション。明るい未来が待っている。信じて進もう。",                 reversedMeaning: "絶望、失望、自信喪失。希望の光は必ずある。焦らないで。" },
  { number: "XVIII", name: "月",            nameEn: "The Moon",           suit: "major", symbol: "🌕", uprightMeaning: "幻想、潜在意識、不安。見えないものに惑わされないで。直感を信じて。",                     reversedMeaning: "混乱の解消、真実の発覚。隠されていた事実が明らかになる。" },
  { number: "XIX",   name: "太陽",          nameEn: "The Sun",            suit: "major", symbol: "☀️", uprightMeaning: "喜び、成功、活力、幸福。最高に明るくポジティブなエネルギー！",                          reversedMeaning: "過度の楽観、エネルギーの低下。少し落ち着いて現実を見て。" },
  { number: "XX",    name: "審判",          nameEn: "Judgement",          suit: "major", symbol: "🔔", uprightMeaning: "復活、内なる呼びかけ、評価。大切な気づきの時。自己を見つめ直して。",                     reversedMeaning: "自己批判、判断の迷い、過去への囚われ。過去を手放す準備を。" },
  { number: "XXI",   name: "世界",          nameEn: "The World",          suit: "major", symbol: "🌍", uprightMeaning: "完成、統合、達成、新たな旅立ち。一つのサイクルが完結する喜び。",                         reversedMeaning: "未完成、目標未達、近道を探している。もう少しで完成。諦めないで。" },
];

// ===========================
// ② 小アルカナ：ワンド（14枚）
// 火のスート：情熱・創造・行動力・仕事・野心を象徴する
// ===========================
// [表示ランク, 日本語ランク, 英語ランク, 正位置の意味, 逆位置の意味]
const wandsRawData = [
  ["A",      "エース",   "Ace",    "新しい始まり、創造力、情熱、インスピレーション。新しいプロジェクトを始める好機。",       "創造エネルギーの停滞、方向性の迷い。アイデアはあるが実行に移せていない。"],
  ["2",      "2",        "Two",    "計画、将来のビジョン、進路選択。大きな可能性が広がっている。",                         "計画の行き詰まり、安全地帯への執着。一歩踏み出す勇気を持って。"],
  ["3",      "3",        "Three",  "拡大、前進、遠方へのビジョン。種まきが実を結び始める時。",                             "遅延、障害、視野の狭さ。計画の見直しが必要かも。"],
  ["4",      "4",        "Four",   "祝い、喜び、安定、家族の絆。良い節目を迎える幸運な時期。",                             "不調和、祝事の遅れ。感謝の気持ちを忘れずに。"],
  ["5",      "5",        "Five",   "競争、葛藤、議論。切磋琢磨の中で成長できる。",                                         "無駄な競争を避ける、内なる葛藤の解消。協調の精神を持って。"],
  ["6",      "6",        "Six",    "勝利、成功、認められること。努力が周囲に認められる。",                                 "プライドの傷つき、失敗への恐れ。自分の価値を他人の評価で測らないで。"],
  ["7",      "7",        "Seven",  "防衛、挑戦、粘り強さ。自分の立場を守るために戦う価値がある。",                         "防衛的になりすぎ、劣勢。無理に戦わず引き際も考えて。"],
  ["8",      "8",        "Eight",  "素早い動き、進展、コミュニケーション。物事が一気に進む時。",                           "遅延、計画の狂い、コミュニケーション不足。焦らず待って。"],
  ["9",      "9",        "Nine",   "忍耐、回復力、最後の一踏ん張り。もう少しで乗り越えられる。",                           "消耗、固執、休息が必要なサイン。一度立ち止まって充電を。"],
  ["10",     "10",       "Ten",    "重荷、責任、負担。多くを担っているが、ゴールは近い。",                                 "過負荷、責任の手放し。抱えすぎているものを誰かに任せて。"],
  ["Page",   "ペイジ",   "Page",   "探求心、新しいアイデア、自由な精神。新鮮な発想が鍵になる。",                           "衝動的、計画性の欠如。考えてから行動して。"],
  ["Knight", "ナイト",   "Knight", "情熱、行動力、冒険心。エネルギッシュに突き進む時。",                                   "衝動的すぎる、焦り。スピードを落として冷静に考えて。"],
  ["Queen",  "クイーン", "Queen",  "自信、魅力、リーダーシップ。あなたの輝きが周りを引きつける。",                         "独断的、嫉妬、エネルギーの乱用。謙虚さを忘れずに。"],
  ["King",   "キング",   "King",   "ビジョン、リーダーシップ、決断力。大きな目標に向かって力強く。",                       "独裁的、衝動的な判断。周囲の意見も聞いてみて。"],
];

// 上のデータをカードオブジェクトに変換する
const wands = wandsRawData.map(([num, jp, en, up, rev]) => ({
  number: num,
  name: `ワンドの${jp}`,
  nameEn: `${en} of Wands`,
  suit: "wands",
  symbol: "🔥",
  uprightMeaning: up,
  reversedMeaning: rev,
}));

// ===========================
// ③ 小アルカナ：カップ（14枚）
// 水のスート：感情・愛情・関係・直感・夢を象徴する
// ===========================
const cupsRawData = [
  ["A",      "エース",   "Ace",    "新しい愛、感情の始まり、直感の覚醒、喜び。心が開かれる時。",                           "感情の抑圧、自己愛の欠如。自分の気持ちを大切にして。"],
  ["2",      "2",        "Two",    "パートナーシップ、愛の絆、相互理解。素晴らしいつながりを結ぶ時。",                     "不和、誤解、関係のすれ違い。誠実な対話が必要。"],
  ["3",      "3",        "Three",  "友情、祝い、喜びの共有。仲間との時間が心を豊かにする。",                               "友人関係のトラブル、孤立感。本当の関係性を見直して。"],
  ["4",      "4",        "Four",   "内省、無関心、見直し。今あるものの価値に気づいて。",                                   "内向きからの脱出、新しいチャンスへの気づき。外に目を向けると良いことがある。"],
  ["5",      "5",        "Five",   "喪失、悲しみ、後悔。でも、まだ残っているものにも目を向けて。",                         "立ち直り、過去の受容、前進。新しい一歩を踏み出せる。"],
  ["6",      "6",        "Six",    "懐かしさ、純粋さ、贈り物。過去から温かさを受け取る。",                                 "過去への執着、現実逃避。今この瞬間に意識を向けて。"],
  ["7",      "7",        "Seven",  "幻想、選択肢の多さ、夢想。現実的な選択を心がけて。",                                   "明確な選択、幻想からの目覚め。迷いが晴れて進むべき道が見える。"],
  ["8",      "8",        "Eight",  "手放し、旅立ち、より深いものへの探求。新しい意味を求めて歩み出す。",                   "恐れからの停滞、逃避。向き合うべきことに正直に向き合って。"],
  ["9",      "9",        "Nine",   "満足、願いの成就、幸福感。心からの喜びを感じられる良い時。",                           "過剰な欲、自己満足。本当に大切なものを見極めて。"],
  ["10",     "10",       "Ten",    "家族の幸福、調和、感情の完成。愛に満ちた理想的な状態。",                               "家族内の不和、価値観のズレ。コミュニケーションで架け橋を。"],
  ["Page",   "ペイジ",   "Page",   "感受性、直感的なメッセージ、芸術的な才能。夢や直感に耳を傾けて。",                     "感情的な未熟さ、空想。足元をしっかり見て。"],
  ["Knight", "ナイト",   "Knight", "ロマンス、魅力、理想主義。感情と理想に突き動かされる。",                               "気分屋、現実離れ。誠実さと一貫性を持って。"],
  ["Queen",  "クイーン", "Queen",  "共感、思いやり、直感。優しさと感受性があなたの力。",                                   "感情的な依存、境界線の曖昧さ。自分の感情も大切にして。"],
  ["King",   "キング",   "King",   "感情的な知性、バランス、思いやり。感情と理性を上手に統合できる。",                     "感情的な不安定さ、感情の抑圧。内なる平和を取り戻して。"],
];

const cups = cupsRawData.map(([num, jp, en, up, rev]) => ({
  number: num,
  name: `カップの${jp}`,
  nameEn: `${en} of Cups`,
  suit: "cups",
  symbol: "💧",
  uprightMeaning: up,
  reversedMeaning: rev,
}));

// ===========================
// ④ 小アルカナ：ソード（14枚）
// 風のスート：知性・真実・葛藤・決断・コミュニケーションを象徴する
// ===========================
const swordsRawData = [
  ["A",      "エース",   "Ace",    "明確さ、真実、突破口、新しいアイデア。真実を見極める力がある。",                       "混乱、誤った情報、誤解。情報を慎重に見極めて。"],
  ["2",      "2",        "Two",    "決断の回避、膠着状態。どちらにも決められない時は一時停止を。",                         "情報の開示、決断の時。隠されていた情報が明らかになり進める。"],
  ["3",      "3",        "Three",  "心の痛み、悲しみ、失望。今の痛みは、より深く成長するための通過点。",                   "癒し、回復、過去の傷を手放す。心の傷が少しずつ癒えていく。"],
  ["4",      "4",        "Four",   "休息、瞑想、回復。今は無理をせずゆっくり充電する時。",                                 "回復後の行動への目覚め。ゆっくりと動き始めて。"],
  ["5",      "5",        "Five",   "葛藤、敗北。すべての戦いに勝つ必要はない。手放す勇気を持って。",                       "和解、過去の葛藤の手放し。対立を超えて前へ。"],
  ["6",      "6",        "Six",    "移行、より良い場所への旅。困難な時期を抜けて前進できる。",                             "過去への抵抗、停滞。心の荷物を下ろせればもっと楽になれる。"],
  ["7",      "7",        "Seven",  "戦略、慎重な動き。状況を見極めながら進んで。",                                         "良心の呵責、正直さ。嘘や隠し事を手放すと心が軽くなる。"],
  ["8",      "8",        "Eight",  "制限、自己制約。実は自分で作った制限かもしれない。視点を変えて。",                     "自由、制限の解放。縛りを手放す準備が整ってきた。"],
  ["9",      "9",        "Nine",   "不安、深夜の心配事。頭の中の恐怖は現実より大きく見えがち。大丈夫。",                   "不安からの解放。少しずつ心の荷が軽くなっていく。"],
  ["10",     "10",       "Ten",    "終わり、転換点。辛い終わりは新しい夜明けの始まりでもある。",                           "回復、立ち直り、最悪の時期の終わり。上を向いて歩いていける。"],
  ["Page",   "ペイジ",   "Page",   "知的好奇心、観察力。情報を素早くキャッチする能力がある。",                             "冷淡さ、無謀な発言。言葉には十分気をつけて。"],
  ["Knight", "ナイト",   "Knight", "大胆、決断力、直接的な行動。障害をものともせず突き進む。",                             "無謀、焦り。スピードを落として冷静に考えて。"],
  ["Queen",  "クイーン", "Queen",  "知性、独立心、正直さ。感情に流されず冷静に物事を見る。",                               "批判的すぎる、感情の切り捨て。知性と共感のバランスを意識して。"],
  ["King",   "キング",   "King",   "知的権威、倫理的な判断、真実の追求。公平さと理性で判断できる。",                       "横暴、操作的な知性。権力の正しい使い方を意識して。"],
];

const swords = swordsRawData.map(([num, jp, en, up, rev]) => ({
  number: num,
  name: `ソードの${jp}`,
  nameEn: `${en} of Swords`,
  suit: "swords",
  symbol: "⚡",
  uprightMeaning: up,
  reversedMeaning: rev,
}));

// ===========================
// ⑤ 小アルカナ：ペンタクル（14枚）
// 土のスート：物質・お金・仕事・健康・現実的な事柄を象徴する
// ===========================
const pentaclesRawData = [
  ["A",      "エース",   "Ace",    "物質的な新たな始まり、機会、豊かさの種。金銭的なチャンスが来る。",                     "機会の逃し、財政的な不安定さ。今は無理な冒険より安定を選んで。"],
  ["2",      "2",        "Two",    "バランス、マルチタスク、適応力。うまくバランスを取りながら進んでいる。",               "優先順位の混乱、財政的なアンバランス。一つひとつ整理してから動いて。"],
  ["3",      "3",        "Three",  "チームワーク、スキルの向上、協力。仲間と力を合わせると大きな成果が生まれる。",         "不調和、技術の不足。基礎から丁寧に積み上げて。"],
  ["4",      "4",        "Four",   "安定、節約、コントロール。安心を求める気持ちは大切だが、握りしめすぎないように。",     "執着、物質への過度な依存。手放すことで新しいものが入ってくる。"],
  ["5",      "5",        "Five",   "経済的な困難、孤立感。助けは意外と近くにある。受け取ることも大切。",                   "回復、物質的な改善。困難を乗り越えた先に光がある。"],
  ["6",      "6",        "Six",    "寛大さ、与えること・受け取ること、豊かさの循環。",                                     "不公平な分配、借金。与える・受け取るのバランスを整えて。"],
  ["7",      "7",        "Seven",  "長期的な視点、成果の評価、忍耐。コツコツが実を結ぶ直前かもしれない。",                 "短期的な思考、焦り。長い目で見て。"],
  ["8",      "8",        "Eight",  "職人技、スキルアップ、勤勉さ。ひたむきな努力が確かな力になっていく。",                 "完璧主義、マンネリ。今の仕事に新しい喜びを見つけて。"],
  ["9",      "9",        "Nine",   "豊かさ、自立、自分へのご褒美。努力が実を結び、豊かさを享受できる。",                   "物質的な依存、成果の過大評価。本当の豊かさは内側にもある。"],
  ["10",     "10",       "Ten",    "物質的な充実、家族の豊かさ、長期的な安定。代々続く豊かさと幸福。",                     "家族間の金銭的摩擦、物質主義。お金より大切なものを忘れずに。"],
  ["Page",   "ペイジ",   "Page",   "勉強熱心、実用的なスキルの習得。学ぶ意欲が道を開く。",                               "怠惰、現実逃避。一歩踏み出す行動力を持って。"],
  ["Knight", "ナイト",   "Knight", "勤勉さ、信頼性、着実な進歩。コツコツと地道に積み重ねる力がある。",                   "停滞、完璧主義。柔軟さを持ち変化を受け入れて。"],
  ["Queen",  "クイーン", "Queen",  "実用的な知恵、豊かさ、思いやり。身の回りを豊かに整える力がある。",                   "物質主義、自己犠牲。自分自身も大切にして。"],
  ["King",   "キング",   "King",   "豊かさ、ビジネスの成功、信頼性。堅実さと信頼で大きなものを築く。",                   "物質主義、お金への執着。豊かさの真の意味を考えて。"],
];

const pentacles = pentaclesRawData.map(([num, jp, en, up, rev]) => ({
  number: num,
  name: `ペンタクルの${jp}`,
  nameEn: `${en} of Pentacles`,
  suit: "pentacles",
  symbol: "🌿",
  uprightMeaning: up,
  reversedMeaning: rev,
}));

// ===========================
// ⑥ 78枚をまとめる
// ===========================
// スプレッド演算子（...）で4つの配列を一つにつなげる
const tarotCards = [
  ...majorArcana,   // 大アルカナ 22枚
  ...wands,         // ワンド     14枚
  ...cups,          // カップ     14枚
  ...swords,        // ソード     14枚
  ...pentacles,     // ペンタクル 14枚
];                  // 合計 78枚

// ===========================
// 占いカテゴリーの定義（5種類）
// ===========================
const categories = {
  luck:   { name: "運気",     icon: "⭐", roles: ["現状",    "注意点",        "アドバイス"] },
  work:   { name: "仕事",     icon: "💼", roles: ["現状",    "課題",          "未来"]       },
  money:  { name: "金運",     icon: "💰", roles: ["今の流れ","気をつけること","増やすヒント"]},
  love:   { name: "恋愛",     icon: "💕", roles: ["相手／状況","障害",         "進展"]       },
  secret: { name: "秘密の恋愛",icon: "🌹", roles: ["本音",    "隠れた問題",   "これから"]   },
};

// 現在選ばれているカテゴリー（null = 未選択）
let selectedCategory = null;

// ===========================
// カテゴリーを選んだときの処理
// ===========================
function selectCategory(key) {
  selectedCategory = key;
  const cat = categories[key];

  // すべてのボタンの active クラスをリセットして、選んだボタンだけに付ける
  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });

  // ヒントを隠して、選択中の項目名を表示する
  document.getElementById("hint-message").classList.add("hidden");
  const info = document.getElementById("selected-info");
  info.textContent = `${cat.icon} ${cat.name} の占いを行います`;
  info.classList.remove("hidden");
}

// ===========================
// カードを3枚引く処理
// ===========================
function drawCards() {
  // カテゴリーが未選択ならヒントを見せて終わる
  if (!selectedCategory) {
    showHint();
    return;
  }

  // ── 重複しないように3枚をランダムに選ぶ ──
  // Set（集合）を使うことで同じインデックスが入らないようにする
  const usedIndices = new Set();
  const drawnCards  = [];
  const cat         = categories[selectedCategory];

  while (drawnCards.length < 3) {
    const idx = Math.floor(Math.random() * tarotCards.length); // 0〜77のランダム整数
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      drawnCards.push({
        card:       tarotCards[idx],
        isReversed: Math.random() < 0.5,         // 50%で逆位置
        role:       cat.roles[drawnCards.length], // 1・2・3枚目の役割名
      });
    }
  }

  displayCards(drawnCards, selectedCategory);
}

// ===========================
// 3枚のカードを画面に表示する処理
// ===========================
function displayCards(drawnCards, categoryKey) {
  const cat = categories[categoryKey];

  // 結果タイトルをセット
  document.getElementById("result-icon").textContent     = cat.icon;
  document.getElementById("result-cat-name").textContent = cat.name;

  // 3枚それぞれの情報をHTMLにセットする
  drawnCards.forEach((drawn, i) => {
    const { card, isReversed, role } = drawn;

    // 役割ラベル（「現状」「注意点」など）
    document.getElementById(`role-${i}`).textContent = role;

    // シンボル絵文字（逆位置のときは上下反転）
    const symbolEl = document.getElementById(`symbol-${i}`);
    symbolEl.textContent       = card.symbol;
    symbolEl.style.transform   = isReversed ? "rotate(180deg)" : "rotate(0deg)";

    // カード情報
    document.getElementById(`number-${i}`).textContent  = card.number;
    document.getElementById(`name-${i}`).textContent    = card.name;
    document.getElementById(`name-en-${i}`).textContent = card.nameEn;

    // 正位置・逆位置バッジ
    const posEl     = document.getElementById(`position-${i}`);
    posEl.textContent = isReversed ? "🔻 逆位置" : "🔺 正位置";
    posEl.className   = isReversed ? "card-position reversed" : "card-position upright";

    // 意味テキスト（uprightMeaning / reversedMeaning を使う）
    document.getElementById(`meaning-${i}`).textContent =
      isReversed ? card.reversedMeaning : card.uprightMeaning;
  });

  // 総合鑑定テキストを生成してHTMLにセットする
  const summaryText    = generateSummary(categoryKey, drawnCards);
  const summaryContent = document.getElementById("summary-content");
  summaryContent.innerHTML = ""; // 前回の結果をいったん消す

  // "\n\n" で区切って、段落ごとに <p> タグを作る
  summaryText.split("\n\n").forEach((paragraph) => {
    const p       = document.createElement("p");
    p.textContent = paragraph;
    summaryContent.appendChild(p);
  });

  // 結果エリアを表示する
  const resultArea = document.getElementById("result-area");
  resultArea.classList.remove("hidden");

  // アニメーションをリセット
  document.querySelectorAll(".card-item").forEach((el) => el.classList.remove("show"));
  document.getElementById("summary-box").classList.remove("show");

  // 結果エリアの先頭へスクロール
  setTimeout(() => resultArea.scrollIntoView({ behavior: "smooth", block: "start" }), 80);

  // カードを1枚ずつ時間差でフェードイン（0ms → 220ms → 440ms）
  drawnCards.forEach((_, i) => {
    setTimeout(() => {
      document.getElementById(`card-item-${i}`).classList.add("show");
    }, i * 220 + 100);
  });

  // 総合鑑定は3枚が揃ってから表示する
  setTimeout(() => {
    document.getElementById("summary-box").classList.add("show");
  }, 950);
}

// ===========================
// 総合鑑定テキストを生成する処理
// ===========================
function generateSummary(categoryKey, drawnCards) {
  const [c1, c2, c3] = drawnCards;

  // 正位置の枚数で全体のトーンを決める（0〜3）
  const positiveCount = drawnCards.filter((c) => !c.isReversed).length;

  const toneIntros = [
    "カードは今、あなたに「一度立ち止まって、自分の内側と向き合う時間を持ちましょう」とやさしく伝えています。難しく感じる時期でも、それはあなたが成長するための大切なプロセス。必ず乗り越えられます。",
    "光と影が入り混じった、変化の途中にいるようです。カードはあなたに「焦らなくて大丈夫、自分のペースで進もう」と伝えています。",
    "全体的にポジティブなエネルギーが流れています。いくつか意識しておきたいことはありますが、着実に良い方向へ向かっています。",
    "3枚すべてに輝くような光が宿っています！星たちがあなたを応援していることを、カードが教えてくれています。",
  ];
  const overallTone = toneIntros[positiveCount];

  // 各カードの内容を文章に織り込む
  // → 意味の最初の文（「。」より前）を引用してリアルな感想を出す
  const firstSentence = (text) => text.split("。")[0];

  const describeCard = (c) => {
    const pos     = c.isReversed ? "逆位置" : "正位置";
    const meaning = c.isReversed ? c.card.reversedMeaning : c.card.uprightMeaning;
    const hint    = c.isReversed
      ? "少し内向きのエネルギーを感じますが、ここに大切な気づきが隠れています"
      : "明るいエネルギーがしっかりと流れています";
    return `「${c.role}」の【${c.card.name}】（${pos}）は「${firstSentence(meaning)}」を示し、${hint}。`;
  };

  const cardsParagraph =
    describeCard(c1) + " " + describeCard(c2) + " " + describeCard(c3);

  // カテゴリー×トーン別のアドバイス
  const adviceMap = {
    luck: {
      positive: "運気の流れは全体的に良好です。直感を信じて積極的に動くことで、思っていた以上の喜びが舞い込んでくるでしょう。日常の小さな幸せに気づく心が、さらなる幸運を引き寄せます。",
      caution:  "今は焦らず、土台を固めることに集中しましょう。毎日の小さな習慣を整えることが、じわじわと運気を底上げしてくれます。変化は必ずやってきます。",
    },
    work: {
      positive: "仕事面では良い流れがきています。今の積み重ねは着実に実を結んでいます。自分の強みを信じて、自信を持って取り組んでみてください。",
      caution:  "今は結果よりもプロセスを大切にする時期です。一つひとつ丁寧に向き合うことが、着実な前進につながります。周りに助けを求める勇気も大切にして。",
    },
    money: {
      positive: "金銭的な流れは安定しており、計画的に動くには良い時期です。自分の成長への投資も視野に入れてみましょう。使い方次第で、さらなるチャンスが広がります。",
      caution:  "衝動的な出費や甘い誘いには慎重に。今は「本当に必要なものは何か」を見極める目を養う時期です。小さな積み重ねが大きな余裕へとつながります。",
    },
    love: {
      positive: "恋愛運は温かく輝いています。素直な気持ちを少しずつ届けることで、関係がぐっと深まりそうです。思い切って気持ちを伝えてみるのも良いタイミングかもしれません。",
      caution:  "焦りは禁物です。自分の気持ちに正直でいながら、相手のペースも尊重することが大切です。今は自分自身を磨く時間として過ごすことで、より良い変化を引き寄せられます。",
    },
    secret: {
      positive: "あなたの心は正直なメッセージを届けようとしています。その感覚を大切にしながら、自分にとって本当に幸せな選択を考えてみてください。どんな状況でも、あなたの幸せが最優先です。",
      caution:  "複雑な状況の中でも、自分を責めないでください。今は自分の本音とゆっくり向き合う時間が必要かもしれません。焦らなくて大丈夫。心が落ち着いたとき、自然と道が見えてきます。",
    },
  };

  const advice =
    positiveCount >= 2
      ? adviceMap[categoryKey].positive
      : adviceMap[categoryKey].caution;

  // 締めくくりのメッセージ（3種類からランダムに選ぶ）
  const closings = [
    "どんな結果であっても、カードはあなたの幸せを願っています。今日も自分をいたわりながら、一歩ずつ進んでいきましょう。🌟",
    "星たちはいつもあなたのそばにいます。うまくいかない日があっても、それはより良い方向への布石。あなたなら大丈夫です。✨",
    "今日引いたカードのメッセージを胸に、自分らしく過ごしてみてください。素晴らしい可能性がそこにあります。🌙",
  ];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  // 4つの段落を "\n\n" でつないで返す（displayCards側で <p> タグに分割される）
  return [overallTone, cardsParagraph, advice, closing].join("\n\n");
}

// ===========================
// カテゴリー未選択のときのヒント表示
// ===========================
function showHint() {
  const hint = document.getElementById("hint-message");
  hint.classList.remove("hidden");

  // animation プロパティをいったんリセットしてから再設定することで
  // すでに表示中でも shake アニメーションを再生できる
  hint.style.animation = "none";
  hint.offsetHeight;   // 強制的に再描画させるお作法
  hint.style.animation = "shake 0.5s ease";
}

// ===========================
// 背景の星を生成する処理
// ===========================
function createStars() {
  const container = document.getElementById("stars");
  const count     = 120;

  for (let i = 0; i < count; i++) {
    const star              = document.createElement("div");
    star.classList.add("star");
    star.style.left         = `${Math.random() * 100}%`;
    star.style.top          = `${Math.random() * 100}%`;
    const size              = Math.random() * 3 + 1;
    star.style.width        = `${size}px`;
    star.style.height       = `${size}px`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    container.appendChild(star);
  }
}

// ===========================
// ページ読み込み時の初期化
// ===========================
window.addEventListener("load", () => {
  createStars();
});
