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
// ===========================
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

const wands = wandsRawData.map(([num, jp, en, up, rev]) => ({
  number: num, name: `ワンドの${jp}`, nameEn: `${en} of Wands`,
  suit: "wands", symbol: "🔥", uprightMeaning: up, reversedMeaning: rev,
}));

// ===========================
// ③ 小アルカナ：カップ（14枚）
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
  number: num, name: `カップの${jp}`, nameEn: `${en} of Cups`,
  suit: "cups", symbol: "💧", uprightMeaning: up, reversedMeaning: rev,
}));

// ===========================
// ④ 小アルカナ：ソード（14枚）
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
  number: num, name: `ソードの${jp}`, nameEn: `${en} of Swords`,
  suit: "swords", symbol: "⚡", uprightMeaning: up, reversedMeaning: rev,
}));

// ===========================
// ⑤ 小アルカナ：ペンタクル（14枚）
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
  number: num, name: `ペンタクルの${jp}`, nameEn: `${en} of Pentacles`,
  suit: "pentacles", symbol: "🌿", uprightMeaning: up, reversedMeaning: rev,
}));

// ===========================
// ⑥ 78枚をまとめる
// ===========================
const tarotCards = [
  ...majorArcana,
  ...wands,
  ...cups,
  ...swords,
  ...pentacles,
];

// ===========================
// 占いカテゴリーの定義（5種類）
// ===========================
const categories = {
  luck:   { name: "運気",      icon: "⭐", roles: ["現状",     "注意点",         "アドバイス"] },
  work:   { name: "仕事",      icon: "💼", roles: ["現状",     "課題",           "未来"]       },
  money:  { name: "金運",      icon: "💰", roles: ["今の流れ", "気をつけること", "増やすヒント"]},
  love:   { name: "恋愛",      icon: "💕", roles: ["相手／状況","障害",           "進展"]       },
  secret: { name: "秘密の恋愛",icon: "🌹", roles: ["本音",     "隠れた問題",     "これから"]   },
};

let selectedCategory = null;

// ===========================
// カテゴリーを選んだときの処理
// ===========================
function selectCategory(key) {
  selectedCategory = key;
  const cat = categories[key];

  document.querySelectorAll(".cat-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });

  document.getElementById("hint-message").classList.add("hidden");
  const info = document.getElementById("selected-info");
  info.textContent = `${cat.icon} ${cat.name} の占いを行います`;
  info.classList.remove("hidden");
}

// ===========================
// カードを3枚引く処理
// ===========================
function drawCards() {
  if (!selectedCategory) { showHint(); return; }

  const usedIndices = new Set();
  const drawnCards  = [];
  const cat         = categories[selectedCategory];

  while (drawnCards.length < 3) {
    const idx = Math.floor(Math.random() * tarotCards.length);
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      drawnCards.push({
        card:       tarotCards[idx],
        isReversed: Math.random() < 0.5,
        role:       cat.roles[drawnCards.length],
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

  document.getElementById("result-icon").textContent     = cat.icon;
  document.getElementById("result-cat-name").textContent = cat.name;

  drawnCards.forEach((drawn, i) => {
    const { card, isReversed, role } = drawn;

    document.getElementById(`role-${i}`).textContent = role;

    const symbolEl           = document.getElementById(`symbol-${i}`);
    symbolEl.textContent     = card.symbol;
    symbolEl.style.transform = isReversed ? "rotate(180deg)" : "rotate(0deg)";

    document.getElementById(`number-${i}`).textContent  = card.number;
    document.getElementById(`name-${i}`).textContent    = card.name;
    document.getElementById(`name-en-${i}`).textContent = card.nameEn;

    const posEl       = document.getElementById(`position-${i}`);
    posEl.textContent = isReversed ? "🔻 逆位置" : "🔺 正位置";
    posEl.className   = isReversed ? "card-position reversed" : "card-position upright";

    document.getElementById(`meaning-${i}`).textContent =
      isReversed ? card.reversedMeaning : card.uprightMeaning;
  });

  const summaryText    = generateSummary(categoryKey, drawnCards);

  saveHistory(categoryKey, drawnCards, summaryText);

  const summaryContent = document.getElementById("summary-content");
  summaryContent.innerHTML = "";
  summaryText.split("\n\n").forEach((paragraph) => {
    const p       = document.createElement("p");
    p.textContent = paragraph;
    summaryContent.appendChild(p);
  });

  const resultArea = document.getElementById("result-area");
  resultArea.classList.remove("hidden");

  document.querySelectorAll(".card-item").forEach((el) => el.classList.remove("show"));
  document.getElementById("summary-box").classList.remove("show");

  const snackBox = document.getElementById("snack-box");
  snackBox.classList.remove("show");
  snackBox.classList.add("hidden");

  setTimeout(() => resultArea.scrollIntoView({ behavior: "smooth", block: "start" }), 80);

  drawnCards.forEach((_, i) => {
    setTimeout(() => {
      document.getElementById(`card-item-${i}`).classList.add("show");
    }, i * 220 + 100);
  });

  setTimeout(() => {
    document.getElementById("summary-box").classList.add("show");
  }, 950);

  setTimeout(() => {
    displaySnack();
    snackBox.classList.remove("hidden");
    setTimeout(() => snackBox.classList.add("show"), 50);
  }, 1600);
}

// ===========================
// おすすめおやつを表示する処理
// ===========================
function displaySnack() {
  const snack   = snackItems[Math.floor(Math.random() * snackItems.length)];
  const isChoco = snack.type === "チョコ";

  const badge       = document.getElementById("snack-type");
  badge.textContent = snack.type;
  badge.className   = "snack-type-badge " + (isChoco ? "choco" : "cookie");

  document.getElementById("snack-emoji").textContent = snack.emoji;
  document.getElementById("snack-name").textContent  = snack.name;
  document.getElementById("snack-desc").textContent  = snack.description;
  document.getElementById("snack-link").href         = snack.link;
}

// ===================================================================
// 総合鑑定テキストを生成する処理（感情に寄り添う5段構成）
// ===================================================================
function generateSummary(categoryKey, drawnCards) {
  const [c1, c2, c3] = drawnCards;
  const positiveCount = drawnCards.filter((c) => !c.isReversed).length;

  // カードの意味テキストから最初の一文を取る
  const firstSentence = (c) => {
    const text = c.isReversed ? c.card.reversedMeaning : c.card.uprightMeaning;
    return text.split("。")[0];
  };

  // ── ① 共感（ユーザーの気持ちを言い当てる） ──────────────────────
  const empathyMap = {
    luck: [
      "最近、なんとなく「ツイていない」「頑張っているのに噛み合わない」と感じることが多くなっていませんか。タロットのカードたちも、今のあなたが少し疲れていることを感じ取っています。でもそれは決して「ダメ」ということではありません。充電が必要な時期にいるだけ。焦らなくていいんです。",
      "「なんとなくうまくいかない」「変わりたいのに変われない」——そんなもどかしさを抱えていませんか。カードを見ると、あなたは今、光と影が入り混じった変化の途中にいることがわかります。その揺らぎは弱さではなく、何かが動こうとしているサインかもしれません。",
      "少しずつ、でも確実に、あなたの周りが良い方向へ動き始めています。「そういえば最近、なんとなくいい感じかも」という感覚がありませんか。カードはその変化を、しっかりと映し出しています。",
      "今この瞬間、あなたには本当に良いエネルギーが流れています。「もしかしたら、うまくいくかも」という直感があるなら、それは正しいかもしれません。3枚のカードが一致して、あなたの可能性を祝福しています。",
    ],
    work: [
      "最近、仕事のことで頭がいっぱいになっていませんか。頑張っているのに結果が見えなかったり、やる気が出なかったり……カードはそのもどかしさをちゃんと感じ取っています。大丈夫、これは「ダメ」じゃなく「準備中」のサインです。",
      "仕事に対して、なんとなくモヤっとした気持ちが続いていませんか。やる気が出ない日もあれば、突然頑張れる日もある——そんな波の中にいるのかもしれません。カードはその揺らぎを否定せず、あなたのペースをそのまま受け止めています。",
      "仕事の面で、少しずつ手応えを感じ始めていませんか。すぐには結果に出なくても、あなたのこれまでの努力は確実に土台になっています。カードも、その積み重ねをしっかり認めてくれています。",
      "仕事に関して、今のあなたには本当に良い流れがあります。カードが3枚そろって、あなたの可能性とエネルギーを祝福しています。この勢いを大切に、次の一手を考えてみてください。",
    ],
    money: [
      "お金のことで、なんとなく不安を感じていませんか。「足りるかな」「もっと稼げたらいいのに」——そんな気持ちを抱えているあなたに、カードは「今は焦らないで」と伝えています。不安を感じること自体、あなたが真剣に将来と向き合っている証拠です。",
      "金銭面で、安心できるときと不安なときが波のように来ていませんか。カードを見ると、流れはゆっくりと整い始めていますが、まだ慎重さが求められる場面もありそうです。でもその慎重さは、あなたの賢さです。",
      "金運に関して、今のあなたの周りには安定した流れがあります。急激な変化はないかもしれませんが、着実に良い方向へ向かっています。カードもその流れを、やさしく後押ししてくれています。",
      "金運に関して、今のあなたにはとても良いエネルギーが宿っています。カードたちが3枚そろって、豊かさへの扉を示してくれています。この流れを丁寧に活かしていきましょう。",
    ],
    love: [
      "好きな人のことを考えると、どこか不安な気持ちが押し寄せてきませんか。「どう思われているんだろう」「うまくいくのかな」——そんな心のざわめきを抱えているあなたに、カードは今、まず深呼吸してと伝えています。あなたが悩んでいること自体、それだけ真剣に想っている証拠です。",
      "恋愛って、どうしてこんなに難しいんだろう……。うまくいきかけたと思ったら、また迷ってしまう——そんな気持ちを繰り返していませんか。カードは、あなたが今まさに大切なターニングポイントにいることを、やさしく教えてくれています。",
      "恋愛において、今のあなたはとても良い位置にいます。関係が少しずつ育まれていたり、出会いのエネルギーが高まっていたり。カードがその温かい流れを、そっと後押ししています。",
      "あなたの恋愛に関して、カードたちがとても温かいメッセージを届けています。今のあなたの中には、素直で純粋な気持ちが満ちています。それが、あなたの最大の魅力です。",
    ],
    secret: [
      "誰にも打ち明けられない気持ちを、ひとりで抱えていませんか。それだけで、心はずいぶん疲れてしまいます。カードは今、あなたにまず「自分を責めないで」と伝えています。どんな状況であっても、あなたの感情は本物で、大切なものです。",
      "複雑な気持ちをひとりで抱えながら、毎日をやり過ごしている——そんな状況にいませんか。カードは、あなたのその重さを静かに受け止めています。白黒つけようとしなくていいんです。今は、ただ自分の心の声に耳を傾けてみてください。",
      "誰かを想う気持ちは、それだけで十分に尊いものです。状況がどんなに複雑でも、あなたの心の中にある感情は本物。カードは今、その感情をやさしく肯定しながら、あなたの歩みを静かに応援しています。",
      "今、あなたの心の中に温かい光があります。複雑な事情があるかもしれないけれど、あなた自身の気持ちはとても純粋です。カードはその誠実さを感じ取りながら、あなたにとっての幸せを一緒に考えたいと言っています。",
    ],
  };
  const para1 = empathyMap[categoryKey][positiveCount];

  // ── ② 状況の解釈（3枚を自然な文章で描写） ──────────────────────
  const describeCard1 = () => {
    const f = firstSentence(c1);
    if (c1.isReversed) {
      return `「${c1.role}」に現れた【${c1.card.name}】は、逆位置という形でメッセージを届けています。「${f}」——今のあなたの中で、そのエネルギーがうまく流れていない部分があるのかもしれません。でも逆位置のカードは「問題がある」ではなく、「ここに気づいてほしい」とやさしく指し示しているだけです。`;
    }
    return `「${c1.role}」に現れた【${c1.card.name}】（正位置）は、「${f}」というエネルギーをしっかりと運んできました。今のあなたの中に、そのエネルギーが確かに宿っています。`;
  };

  const describeCard2 = () => {
    const f = firstSentence(c2);
    if (c2.isReversed) {
      return `続いて「${c2.role}」の【${c2.card.name}】（逆位置）。「${f}」——ここには、今のあなたが少し立ち止まって考えるべきことのヒントが隠れています。怖がらなくて大丈夫。これはカードからの、やさしい気づきのメモです。`;
    }
    return `「${c2.role}」の位置には【${c2.card.name}】（正位置）が現れ、「${f}」というエネルギーが流れています。この流れをうまく活かすことが、今のあなたにとって大切なことかもしれません。`;
  };

  const describeCard3 = () => {
    const f = firstSentence(c3);
    if (c3.isReversed) {
      return `そして「${c3.role}」の【${c3.card.name}】（逆位置）が伝えるのは、「${f}」というメッセージ。外に向かって動くよりも、まず自分の内側と静かに向き合う時間を持つことが、今のあなたには必要かもしれません。`;
    }
    return `そして「${c3.role}」には【${c3.card.name}】（正位置）が現れました。「${f}」——このカードは、あなたの前に光の道が開かれていることを示しています。`;
  };

  const para2 = describeCard1() + " " + describeCard2() + " " + describeCard3();

  // ── ③ 未来の流れ ────────────────────────────────────────────────
  const futureMap = {
    luck: [
      "この先しばらくは、外に向かって動くよりも内側を整えることに意味があります。無理に行動しようとせず、今の自分をていねいにケアすることで、運気は自然と底上げされていきます。時間がかかっても、それは確実な変化の土台になっています。",
      "少し時間はかかるかもしれませんが、流れは確実に変わり始めています。今は結果を急がず、日々の小さなことを丁寧に積み重ねていくことが、大きな転換点への道になります。焦らなくていい——あなたのペースが、一番の近道です。",
      "今後、あなたの運気はさらに上向いていきます。何か直感的に「やってみたい」と感じることがあれば、それは運気の流れと共鳴しているサインかもしれません。その直感を、大切にしてみてください。",
      "この先、あなたには明るい流れが続きます。チャンスは必ずやってきます——そしてあなたはすでに、それを受け取る準備ができています。自信を持って、前に進んでください。",
    ],
    work: [
      "仕事の面では、しばらくは「結果」よりも「プロセス」を大切にする時期が続きそうです。焦らず、一つひとつ丁寧に取り組むことが、やがて大きな実りへとつながっていきます。今日の積み重ねが、未来のあなたを作っています。",
      "仕事における変化の兆しが、少しずつ現れてきます。今すぐには見えなくても、今日積み重ねたことは、必ず未来の土台になっています。焦らず、でも着実に、自分のペースを守ってください。",
      "仕事の流れは確実に良くなっています。今後、あなたの努力や才能が周囲に認められる機会が増えていきそうです。今まで続けてきたことを、自信を持って続けてみてください。",
      "仕事において、この先さらなる飛躍が期待できます。あなたの中にある力は本物です。それを信じて、一歩ずつ、大きく羽ばたいてください。",
    ],
    money: [
      "金銭面では、しばらくは慎重に、でも前向きに向き合う姿勢が大切です。今は大きな動きをするより、しっかりと土台を固める時期。「守りながら整える」——それが今のあなたに合ったリズムです。",
      "金運は、ゆっくりと、でも確かに改善に向かっています。今は急がず焦らず、一歩一歩着実に進むことが、長期的な豊かさにつながります。小さな積み重ねが、大きな余裕を生み出します。",
      "金銭的な流れは安定しており、今後もその傾向が続きそうです。計画的に動くことで、着実に余裕が生まれていきます。今のあなたには、堅実さという力があります。",
      "金運は、今後さらに良い方向に動いていきます。行動力と計画性を組み合わせることで、豊かさが育まれていきます。あなたの努力は、必ず形になります。",
    ],
    love: [
      "恋愛に関しては、しばらくの間は焦らず、相手とのペースを大切にする時期が続きます。すぐに答えを求めず、ゆっくりと関係を育てていくことが、深い絆へとつながります。急がなくていい。気持ちは、ちゃんと伝わっていきます。",
      "恋愛の流れは、少しずつ動き始めています。劇的な変化よりも、日々の小さな積み重ねが、大切な変化を生み出していきます。あなたの誠実な気持ちは、必ず相手の心に届きます。",
      "恋愛運は確実に上向いています。素直に気持ちを向けることで、関係はさらに深まっていきそうです。小さな勇気が、大きな転機になることがあります。",
      "恋愛において、この先とても良い流れが続きます。あなたの誠実で温かい気持ちは、必ず相手に届きます。その純粋さが、一番の武器です。",
    ],
    secret: [
      "複雑な状況は、すぐには解決しないかもしれません。でも、焦って答えを出そうとしなくていいんです。時間が経つにつれ、自然と見えてくるものがあります。今は自分の気持ちを、大切に守ってください。",
      "今の状況は、少しずつ変化していきます。あなたが自分の心に正直でいれば、それが少しずつ未来を形作っていきます。焦らなくていい——あなたの感情は、正しい方向を向いています。",
      "あなたの気持ちは、この先少しずつ形になっていくかもしれません。正直な感情を大切にしながら、自分にとって何が本当に幸せかを、ゆっくりと考えてみてください。",
      "今の流れは、あなたの感情と誠実さを土台にして、少しずつ良い方向へ向かっています。自分を信じて、あなたらしく歩んでいきましょう。",
    ],
  };
  const para3 = futureMap[categoryKey][positiveCount];

  // ── ④ 安心させるフォロー ────────────────────────────────────────
  const reassurancePool = [
    "うまくいかない時期は、誰にでもあります。それはあなたが弱いからではなく、次のステージへ向けて準備しているからです。今日、カードと向き合ったこと——それだけで、あなたはすでに前に進んでいます。",
    "迷っていい、揺れていい。人生にはそういう時期があって、それが次の確かな一歩をつくります。カードはあなたを責めていません。ただ、やさしく「大丈夫だよ」と言っています。",
    "あなたは今、ちゃんと良い方向へ歩いています。完璧じゃなくていい、急がなくていい。今日のあなたのままで、十分です。カードはそれを、しっかりと証明してくれています。",
    "どんな状況にいても、あなたには確かな力があります。それはカードが映し出してくれた、あなた自身の光です。自分を信じることが、これからの一番の武器になります。",
  ];
  const para4 = reassurancePool[positiveCount];

  // ── ⑤ 具体的な行動アドバイス ────────────────────────────────────
  const actionMap = {
    luck: [
      "今日できる一つのこと——それは、自分をいたわることです。好きな食べものを食べる、少し早く寝る、誰かに「ありがとう」を伝える。そんな小さな行動が、運気の流れをじわじわと変えていきます。",
      "今週の中でひとつだけ、「ちょっと苦手だけどやってみようかな」ということに挑戦してみてください。その小さな一歩が、新しいエネルギーを呼び込みます。",
      "今のあなたには、直感を信じて動くことが大切です。「なんとなくいいかも」と感じることを、少し勇気を出して試してみてください。それが、運気の扉を開く鍵になります。",
      "このエネルギーが高い今こそ、ずっと気になっていたことを始めてみましょう。新しい習慣、新しい出会い、新しい挑戦——どれもあなたの運気をさらに引き上げてくれます。",
    ],
    work: [
      "今日の仕事で、ひとつだけ「丁寧にやること」を選んでみてください。完璧じゃなくていい。ひとつだけ、心を込めて向き合うことで、流れが変わり始めます。",
      "今の自分に正直になってみてください。「本当はどうしたい？」「何が一番大切？」——その問いへの答えが、次の行動のヒントになります。",
      "今のあなたには、誰かに相談したり、サポートを求めたりする勇気が必要かもしれません。一人で抱え込まずに、信頼できる人に話してみてください。",
      "今の流れを活かして、ひとつ具体的な目標を書き出してみましょう。言葉にするだけで、エネルギーが集まります。",
    ],
    money: [
      "今日、家計の状況を少し見直してみましょう。難しいことじゃなくていい。「今の自分の状況を知る」という一歩が、金運を整える第一歩です。",
      "今週、「本当に必要なもの」と「あったら嬉しいもの」を区別してみてください。その小さな習慣が、長期的な豊かさへの土台を作ります。",
      "今の流れを活かして、少額でも「未来への投資」を意識してみましょう。勉強、健康、スキルアップ——お金は使い方次第で、あなたを豊かにしてくれます。",
      "ずっと考えていた経済的な目標を、紙に書き出してみましょう。具体的にするだけで、実現への第一歩になります。",
    ],
    love: [
      "今日、気になる人に「ちょっとした一言」を送ってみましょう。大きな告白じゃなくていい。「最近どう？」それだけで、距離が縮まることがあります。",
      "今週、自分を少し磨くことに時間をかけてみましょう。好きな服を着る、新しいことを試してみる——自分を大切にすること自体が、恋愛運を高めてくれます。",
      "気持ちを伝えることを恐れないでください。完璧なタイミングなんてありません。今のあなたの素直な気持ちが、一番の武器です。",
      "今のあなたの気持ちを、少しだけ言葉にしてみましょう。日記でもいい、信頼できる友人に話すのでもいい。感情を外に出すことで、心が軽くなり、次の行動への力が生まれます。",
    ],
    secret: [
      "今日、自分の気持ちをひとつだけ紙に書き出してみましょう。誰かに見せなくていい。「自分はどう感じているのか」を言葉にするだけで、心の霧が少し晴れていきます。",
      "今週、自分自身のことを大切にする時間を作ってみてください。好きな音楽を聴く、一人でゆっくりする——自分を癒すことが、これからの道を開く力になります。",
      "複雑な気持ちを持ちながらも、「自分にとっての幸せ」を一度だけ考えてみてください。相手のことより、まず自分の心が何を求めているかを知ることが、最初の一歩になります。",
      "自分の感情に正直でいることを選んでください。状況がどれだけ複雑でも、あなたの感情は本物です。その誠実さが、必ずあなたを良い方向へ導いていきます。",
    ],
  };
  const para5 = actionMap[categoryKey][positiveCount];

  // ── 締め（ランダム） ─────────────────────────────────────────────
  const closings = [
    "どんな結果であっても、カードはいつもあなたの幸せを願っています。今日も自分をいたわりながら、一歩ずつ、あなたらしく進んでいきましょう。🌟",
    "星たちはいつもあなたのそばにいます。うまくいかない日があっても、それはより良い明日への準備です。あなたなら、きっと大丈夫。✨",
    "今日引いたカードのメッセージを、ポケットに入れておいてください。迷ったとき、ふっと思い出すだけで、勇気の火が灯ります。🌙",
    "タロットは答えを「決める」ものではなく、あなたの内側の声を「引き出す」ものです。今日のカードが届けたメッセージを、これからの歩みの小さな光にしてください。🔮",
  ];
  const closing = closings[Math.floor(Math.random() * closings.length)];

  return [para1, para2, para3, para4, para5, closing].join("\n\n");
}

// ===================================================================
// 履歴の保存・読み込み・描画
// in-memory 配列をプライマリに、localStorage を永続化バックアップとして使う
// ===================================================================
let historyData = [];
const HISTORY_KEY = "tarot_history";
const HISTORY_MAX = 5;

function saveHistory(categoryKey, drawnCards, summaryText) {
  const cat = categories[categoryKey];
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const dateStr =
    now.getFullYear() + "年" +
    (now.getMonth() + 1) + "月" +
    now.getDate() + "日 " +
    pad(now.getHours()) + ":" +
    pad(now.getMinutes());

  const entry = {
    date:         dateStr,
    categoryName: cat.name,
    categoryIcon: cat.icon,
    cards: drawnCards.map(({ card, isReversed, role }) => ({
      role,
      name:      card.name,
      symbol:    card.symbol,
      isReversed,
      meaning:   isReversed ? card.reversedMeaning : card.uprightMeaning,
    })),
    summary: summaryText,
  };

  // in-memory 更新（常に成功）
  historyData.unshift(entry);
  if (historyData.length > HISTORY_MAX) historyData.length = HISTORY_MAX;

  // localStorage にバックアップ（失敗しても無視）
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(historyData)); } catch (_) {}

  renderHistory();
}

function initHistory() {
  // ページ読み込み時：localStorage から復元を試みる
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY));
    if (Array.isArray(saved) && saved.length > 0) {
      historyData = saved.slice(0, HISTORY_MAX);
    }
  } catch (_) {}
  renderHistory();
}

function renderHistory() {
  const list  = document.getElementById("history-list");
  const empty = document.getElementById("history-empty");
  if (!list || !empty) return;

  list.innerHTML = "";

  if (historyData.length === 0) {
    empty.style.display = "";
    return;
  }

  empty.style.display = "none";

  historyData.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "history-item";

    // ── ヘッダー ──
    const header = document.createElement("div");
    header.className = "history-item-header";

    const dateSpan = document.createElement("span");
    dateSpan.className   = "history-date";
    dateSpan.textContent = entry.date;

    const catSpan = document.createElement("span");
    catSpan.className   = "history-cat";
    catSpan.textContent = entry.categoryIcon + " " + entry.categoryName;

    const chevron = document.createElement("span");
    chevron.className   = "history-chevron";
    chevron.textContent = "▼";

    header.appendChild(dateSpan);
    header.appendChild(catSpan);
    header.appendChild(chevron);

    // ── 概要（1段落目のみ表示） ──
    const brief = document.createElement("p");
    brief.className   = "history-brief";
    brief.textContent = entry.summary.split("\n\n")[0];

    // ── 詳細（最初は折りたたみ） ──
    const detail = document.createElement("div");
    detail.className     = "history-detail";
    detail.style.display = "none";

    // カード行
    const cardsRow = document.createElement("div");
    cardsRow.className = "history-cards-row";

    entry.cards.forEach((c) => {
      const card = document.createElement("div");
      card.className = "history-card";

      const roleEl = document.createElement("span");
      roleEl.className   = "history-card-role";
      roleEl.textContent = c.role;

      const symEl = document.createElement("span");
      symEl.className   = "history-card-symbol";
      symEl.textContent = c.symbol;
      if (c.isReversed) {
        symEl.style.display   = "inline-block";
        symEl.style.transform = "rotate(180deg)";
      }

      const nameEl = document.createElement("span");
      nameEl.className   = "history-card-name";
      nameEl.textContent = c.name;

      const posEl = document.createElement("span");
      posEl.className   = "history-card-pos " + (c.isReversed ? "reversed" : "upright");
      posEl.textContent = c.isReversed ? "🔻 逆位置" : "🔺 正位置";

      const meaningEl = document.createElement("p");
      meaningEl.className   = "history-card-meaning";
      meaningEl.textContent = c.meaning;

      card.appendChild(roleEl);
      card.appendChild(symEl);
      card.appendChild(nameEl);
      card.appendChild(posEl);
      card.appendChild(meaningEl);
      cardsRow.appendChild(card);
    });

    // 総合鑑定
    const summaryDiv = document.createElement("div");
    summaryDiv.className = "history-summary";
    entry.summary.split("\n\n").forEach((para) => {
      const p = document.createElement("p");
      p.textContent = para;
      summaryDiv.appendChild(p);
    });

    detail.appendChild(cardsRow);
    detail.appendChild(summaryDiv);

    // クリックで展開・折りたたみ
    header.addEventListener("click", () => {
      const isOpen = detail.style.display !== "none";

      // すべて閉じる
      document.querySelectorAll(".history-item").forEach((el) => {
        const d  = el.querySelector(".history-detail");
        const ch = el.querySelector(".history-chevron");
        if (d)  d.style.display  = "none";
        if (ch) ch.textContent   = "▼";
        el.classList.remove("open");
      });

      // クリックしたものが閉じていたなら開く
      if (!isOpen) {
        detail.style.display = "";
        chevron.textContent  = "▲";
        item.classList.add("open");
      }
    });

    item.appendChild(header);
    item.appendChild(brief);
    item.appendChild(detail);
    list.appendChild(item);
  });
}

// ===========================
// カテゴリー未選択のときのヒント表示
// ===========================
function showHint() {
  const hint = document.getElementById("hint-message");
  hint.classList.remove("hidden");
  hint.style.animation = "none";
  hint.offsetHeight;
  hint.style.animation = "shake 0.5s ease";
}

// ===========================
// 背景の星を生成する処理
// ===========================
function createStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 120; i++) {
    const star               = document.createElement("div");
    star.classList.add("star");
    star.style.left          = Math.random() * 100 + "%";
    star.style.top           = Math.random() * 100 + "%";
    const size               = Math.random() * 3 + 1;
    star.style.width         = size + "px";
    star.style.height        = size + "px";
    star.style.animationDelay = Math.random() * 4 + "s";
    container.appendChild(star);
  }
}

// ===========================
// ページ読み込み時の初期化
// ===========================
window.addEventListener("load", () => {
  createStars();
  initHistory();
});
