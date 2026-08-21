/* 2026-08-21: 添付STAR.docxを基準に成功体験11件と志望動機を更新。 */
(() => {
  const successUpdates = {
    "why-aws": {
      title: "AWSを志望する理由",
      lp: "Customer Obsession · Learn and Be Curious · Ownership",
      question: "Why do you want to work for AWS and in data center logistics?",
      questionJa: "なぜAWSで働きたいのですか。また、なぜデータセンター・ロジスティクスに関心がありますか。",
      situation: "2026年7月に大阪の合同企業説明会へ参加し、Amazonの大規模物流施設への関心をきっかけに、データセンターの仕事も知りました。",
      task: "これまでの現場運営・物流・自動化の経験を、データセンター・ロジスティクスでどう生かせるかを明確にします。",
      action: "担当者から、データセンターは自動化だけでなく、人が顧客課題の解決と確実な日常運用を支えていると聞き、自分の実行力との接点を整理しました。",
      result: "信頼性を支える基盤で経験を生かし、グローバルな高基準の環境でさらに成長しながらお客様へ確実な成果を届けたいという志望動機です。",
      answer: `In July 2026, I attended a job fair in Osaka. At first, I was interested in learning how Amazon operates large-scale logistics facilities. At the fair, I also learned about an opportunity in data centers. I knew AWS, but I had imagined data centers as highly automated facilities where systems simply run around the clock.
After speaking with a representative, I learned that reliable operations are also sustained by people who solve customer issues and carry out disciplined daily maintenance. That changed my view. I immediately felt that my experience in frontline operations, logistics, and turning improvements into practical systems could be valuable there.
I am especially drawn to data center logistics because it supports the foundation that enables millions of customers to use services reliably. Throughout my career, I have worked in warehouse operations, inventory optimization, international logistics, and process automation. I would like to apply and further develop the experience, knowledge, and hands-on problem-solving ability I have built in a global operation with high standards.
By contributing to AWS, I want to keep challenging myself at a new level while delivering reliable results for customers.`,
      keyPhrases: ["reliable operations are also sustained by people who solve customer issues and carry out disciplined daily maintenance", "turning improvements into practical systems", "supports the foundation that enables millions of customers to use services reliably", "hands-on problem-solving ability", "keep challenging myself at a new level while delivering reliable results for customers"],
      answerJa: `2026年7月に大阪の合同企業説明会へ参加しました。最初はAmazonの大規模な物流施設がどのように運営されているのかに関心があり、話を聞いてみたいと考えていました。その場でデータセンターの募集があることも知りました。AWSは知っていましたが、データセンターは高度に自動化され、24時間システムが稼働する無人に近い施設というイメージを持っていました。
担当者から、実際には人が顧客課題の解決や確実な日常メンテナンスを担い、信頼性の高い運営を支えていると伺いました。その話を聞き、これまでの現場運営の経験や、改善を実行に移す力を生かせるのではないかと強く感じ、挑戦したいと思いました。
特にデータセンター・ロジスティクスは、多くのお客様がサービスを安定して利用できる基盤を直接支える仕事だと考えています。私はこれまで、倉庫運営、在庫最適化、国際物流、業務自動化に取り組んできました。培ってきた経験・知識・現場での問題解決力を、グローバルで高い基準が求められるオペレーションの中で発揮し、さらに高めたいと考えています。
AWSに貢献しながら自らも新たな高みへ挑戦し、お客様に確実な成果を届け続けたいです。`
    },
    "cost-rpa": {
      title: "解像度が粗い段階での意思決定とRPA内製化",
      lp: "Bias for Action · Frugality · Ownership",
      question: "Tell me about a time you reduced costs and acted with incomplete information.",
      questionJa: "コストを削減し、不完全な情報の中で行動した経験を教えてください。",
      situation: "2023年8月、基幹システムの機能追加・改修やデータ加工を外部ベンダーに依存し、1案件30万円から200万円の費用と対応待ちが発生していました。",
      task: "外注費を根本的に抑え、現場へのシステム変更・データ提供を速くするため、内製化の投資対効果を示し、経営の前提も変える必要がありました。",
      action: "技術的な実現性を全て確認してから判断するのではなく、RPAとPower Queryで共通業務を集約・自動化する方針を決め、作業を粒度まで分解して自ら実演しました。",
      result: "チームで約150本のRPAと100本以上のPower Queryを作成し、約2年半で自部署・他部署合計約3名分の工数を削減しました。",
      answer: `In August 2023, even minor system changes and data-processing work were outsourced to external vendors. A single request cost between 300,000 and 2 million yen, and the business had to wait for estimates and vendor schedules. The prevailing view was that non-core work in a fashion company should be left outside.
My task was not only to reduce the cost, but also to change that assumption and make business improvements available faster. I decided not to wait until every technical possibility was known. As a leader, I committed to bringing suitable work in-house and validated RPA use cases and vendors in parallel.
I built a quantitative case: if we centralized common sales and purchasing work and automated it around the clock, three months of effort could save about 150 hours per month—roughly the cost of one temporary employee, or about 3 million yen per year—while an RPA license cost about 1.1 million yen per year. I mapped each task at a detailed level, automated the repeatable steps, and demonstrated the approach myself.
Over about two and a half years, the team created roughly 150 RPA programs and more than 100 Power Query processes. We reduced work equivalent to about three people across my department and other sections, while building a faster, repeatable in-house improvement capability.`,
      keyPhrases: ["I decided not to wait until every technical possibility was known", "committed to bringing suitable work in-house and validated RPA use cases and vendors in parallel", "mapped each task at a detailed level", "demonstrated the approach myself", "roughly 150 RPA programs and more than 100 Power Query processes", "reduced work equivalent to about three people"],
      answerJa: `2023年8月、基幹システムの機能追加・改修やデータ加工を外部ベンダーに依存していました。小さな案件でも30万円から200万円かかり、見積もりとベンダーの予定を待つ必要がありました。当時は、ファッション企業の非コア業務は外部に任せるべきだという考え方が強くありました。
私の課題は、外注費を削減するだけでなく、その前提を変え、現場への改善をより速く届けることでした。すべての技術的可能性が分かるまで待つのではなく、リーダーとして内製化へ進むことを決め、RPAの対象業務とベンダーを並行して検証しました。
販売・購買の共通業務を集約し24時間自動化できれば、3か月の取り組みで月150時間、年間約300万円の派遣社員1名分に相当する工数を削減でき、RPA費用は年間約110万円であることを定量的に示しました。作業を細かな単位まで分解して自動化し、自ら実演して横展開しました。
約2年半で、チームは約150本のRPAと100本以上のPower Queryを作成し、自部署・他部署を合わせて約3名分の工数を削減しました。`
    },
    "ec-master": {
      title: "EC・卸先向け商品マスタ作成を根本改革",
      lp: "Invent and Simplify · Dive Deep · Frugality",
      question: "Tell me about a time you found the root cause of a problem and simplified a process.",
      questionJa: "問題の根本原因を見つけ、プロセスを簡素化した経験を教えてください。",
      situation: "2024年4月、EC・百貨店・チェーンストア向け商品マスタを、毎シーズン約50種類の形式で作成していました。",
      task: "リードタイムと外注費を削減し、百貨店・チェーンストア向け年間600万円、EC向け年間300万円の外注費をゼロにする必要がありました。",
      action: "実作業に入り、仕様書からの目視転記と見栄えだけの装飾がボトルネックと特定。CSVをPower Queryで各インポート形式へ変換する仕組みに置き換えました。",
      result: "100本以上のPower Queryを約2.5か月で構築し、リードタイムを約1.5か月から約2週間へ短縮、年間900万円の外注費をゼロにしました。",
      answer: `In April 2024, we had to prepare product-master data for our EC site, department stores, and chain stores in about 50 different formats every season. The internal and outsourced steps had become complicated, creating a lead time of about one and a half months and annual outsourcing costs of 6 million yen for department stores and chains and 3 million yen for EC.
Rather than relying only on interviews, I joined the actual workflow. I found that staff were manually extracting measurements and material information from specifications, while the vendor was adding borders and shading simply to make spreadsheets look presentable. The destination systems did not need that decoration; they needed structured data.
I eliminated the nonessential formatting and built Power Query processes that converted raw CSV data from the specification system into each import format. I created more than 100 Power Query files in about two and a half months and replaced the manual handoff with an internal, repeatable process.
The lead time fell from about one and a half months to roughly two weeks, and the 9 million yen annual outsourcing cost was reduced to zero.`,
      keyPhrases: ["Rather than relying only on interviews, I joined the actual workflow", "The destination systems did not need that decoration; they needed structured data", "eliminated the nonessential formatting", "replaced the manual handoff with an internal, repeatable process", "fell from about one and a half months to roughly two weeks", "the 9 million yen annual outsourcing cost was reduced to zero"],
      answerJa: `2024年4月、EC、百貨店、チェーンストア向けの商品マスタを毎シーズン約50種類の形式で作成していました。社内と外注先の工程が複雑化し、リードタイムは約1.5か月、外注費は百貨店・チェーンストア向け年間600万円、EC向け年間300万円に達していました。
私はヒアリングだけでなく実作業に入り、仕様書から採寸・組成を目視で抜き出す作業と、外注先が見栄えのためだけに罫線・網掛けを加える作業を確認しました。行き先のシステムに必要なのは装飾ではなく構造化データだと判断しました。
不要な装飾を廃止し、仕様書システムから出力したCSVをPower Queryで各インポート形式へ変換する仕組みに変更しました。約2.5か月で100本以上のPower Queryを構築し、手作業の受け渡しを内製の再利用可能な工程に置き換えました。
結果として、リードタイムを約1.5か月から約2週間へ短縮し、年間900万円の外注費をゼロにしました。`
    },
    "jl-license": {
      title: "国内ライセンス企画を立ち上げ売上を拡大",
      lp: "Think Big · Earn Trust · Deliver Results",
      question: "Tell me about a time you launched a new product or business by balancing global and local market needs.",
      questionJa: "世界共通の商品構成と日本市場のニーズを両立させ、新商品や事業を立ち上げた経験を教えてください。",
      situation: "2016年頃、J.LINDEBERGの本国商品には、日本市場で必要なバッグ、キャディーバッグ、冬物、適切なサイズ感が不足していました。",
      task: "本国の承認と社内の懸念を乗り越え、人員を増やさずに日本向けライセンス商品を立ち上げる必要がありました。",
      action: "ストックホルムで市場の空白と本国へのロイヤリティ収入を説明し、英語資料と想定問答を準備。自らデザインを担い、商社・2工場・部材調達先を巻き込みました。",
      result: "年間上代売上は初年度4,000万円、2年目7,000万円、3年目1億1,000万円へ拡大し、3年目には社内デザインチームへ開発を移管しました。",
      answer: `Around 2016, I was responsible for J.LINDEBERG in Japan. The global assortment did not fully meet local needs: bags and caddie bags were limited, Scandinavian apparel sizing was too long for many Japanese customers, and winter golf wear was scarce.
I proposed a Japan-developed licensed range, but I had to overcome two barriers: approval from the Stockholm team and internal concern that a local license might weaken the imported brand. I traveled to Stockholm with data on the assortment gaps, design proposals, material samples, and a sales plan. I showed that the plan would not reduce the global purchase volume and would create royalty income for the brand. Because English was not my strength, I prepared the presentation and anticipated questions in advance.
After securing approval, I acted as the designer at the start and built a practical production network with a trading company and two key factories. To protect brand quality, I sourced original components such as YKK logo zippers, German-logo buttons, and original labels directly. I used the sales plan to earn the partners’ commitment.
The licensed range generated annual retail sales of about 40 million yen in the first year, 70 million yen in the second year, and 110 million yen in the third year. In the third year, I transferred development to the internal design team so the business could continue to scale.`,
      keyPhrases: ["I had to overcome two barriers", "would not reduce the global purchase volume and would create royalty income for the brand", "I prepared the presentation and anticipated questions in advance", "To protect brand quality, I sourced original components", "about 40 million yen in the first year, 70 million yen in the second year, and 110 million yen in the third year", "I transferred development to the internal design team so the business could continue to scale"],
      answerJa: `2016年頃、J.LINDEBERGの日本におけるブランド責任者として、本国の商品構成と日本市場のニーズのずれに対応しました。本国にはバッグやキャディーバッグが少なく、北欧サイズのウェアは日本人に長く、冬物ゴルフウェアも十分ではありませんでした。
私は日本向けライセンス商品の立ち上げを提案しましたが、本国ストックホルムの承認と、国内ライセンスが輸入ブランドの価値を下げるのではないかという社内懸念を解消する必要がありました。ストックホルムで商品構成の空白、デザイン案、素材サンプル、売上計画を説明し、買付額を減らさず本国にもロイヤリティ収入が入ることを示しました。英語が得意ではなかったため、資料と想定問答を事前に準備しました。
承認後は、当初自らデザインを担い、商社と主要2工場を巻き込みました。品質を守るため、YKKのロゴ入りファスナー、ドイツ製のロゴ入りボタン、オリジナルラベルを直接手配しました。
年間上代売上は初年度4,000万円、2年目7,000万円、3年目1億1,000万円へ拡大し、3年目には社内デザインチームへ開発を移管しました。`
    },
    "jl-direct-import": {
      title: "J.LINDEBERGを直接輸入へ切り替え",
      lp: "Dive Deep · Hire and Develop the Best · Deliver Results",
      question: "Tell me about a time you reduced supply-chain costs by changing a business process.",
      questionJa: "業務プロセスを変えてサプライチェーンコストを削減した経験を教えてください。",
      situation: "2019年、J.LINDEBERGは商社経由で輸入しており、スポーツチェーン展開のため販売価格を下げる必要がありました。",
      task: "本国との直接輸入へ切り替え、契約・為替・物流の商流を整えるとともに、英語と輸入実務を担える人材を育成する必要がありました。",
      action: "コスト項目別の計画を作り4か月かけて契約を改訂。新卒採用担当者を抜擢し、1シーズンかけて輸入実務とExcelスキルを育成しました。",
      result: "年間FOB輸入額185万ユーロに対し、商社マージン15％を削減して年間3,330万円を削減。平均上代を12％下げ、販売拡大につなげました。",
      answer: `In 2019, J.LINDEBERG was imported through a trading company. The global brand wanted to expand from department stores into sports chains, so we needed a lower price point and higher sales volume. I concluded that moving to direct import was necessary.
I broke the annual purchasing cost down by component and built a plan for savings, pricing, and marketing. Over four months, I renegotiated the contract with the brand. We could apply existing drop-shipping knowledge, but still had to arrange foreign-exchange hedging and a new forwarder workflow.
The bigger capability gap was that nobody had both business English and import-administration experience. I selected a new graduate recruiter who could use English, then trained her through one full season. We handled documentation, ocean-freight bookings, and domestic delivery together. I also taught practical Excel functions such as MID, TEXT, CONCATENATE, VLOOKUP, and linked sheets so she could manage the data independently.
The annual FOB import value was about 1.85 million euros, or 277.5 million yen. By removing a 15% trading-company margin, excluding duty and freight, we saved about 33.3 million yen a year. We lowered the average retail price by 12%, supporting sales growth from 450 million yen in 2019 to 766 million yen in 2024.`,
      keyPhrases: ["I concluded that moving to direct import was necessary", "The bigger capability gap was that nobody had both business English and import-administration experience", "trained her through one full season", "By removing a 15% trading-company margin", "sales growth from 450 million yen in 2019 to 766 million yen in 2024"],
      answerJa: `2019年、J.LINDEBERGは商社経由で輸入していました。本国は百貨店中心からスポーツチェーンへ展開を広げる方針であり、販売価格を下げて販売数を増やす必要がありました。そこで直接輸入への切り替えを進めました。
年間仕入れコストを項目別に分解し、削減目標、価格帯、マーケティング計画を作成しました。本国と4か月かけて契約を改訂し、既存のドロップシッピングの知見を活用しながら、為替予約と新フォワーダーとの業務を整えました。
一方で、英語と輸入実務を両方経験した社員がいなかったため、英語が使える新卒採用担当者を抜擢し、1シーズンかけて書類、船便予約、国内配送を一緒に進めました。MID、TEXT、CONCATENATE、VLOOKUP、シートリンクなど必要なExcelスキルも育成しました。
年間FOB輸入額185万ユーロ、約2億7,750万円に対して、関税・運賃を除く商社マージン約15％を削減し、年間約3,330万円を削減しました。平均上代を12％下げ、売上は2019年4.5億円から2024年7.66億円へ伸ばしました。`
    },
    "logistics-cost-reduction": {
      title: "物流コストを構造から見直して削減",
      category: "成功体験",
      lp: "Frugality · Dive Deep · Invent and Simplify",
      question: "Tell me about a time you reduced logistics costs by improving the underlying process.",
      questionJa: "物流コストを、表面的な値引きではなく業務構造から削減した経験を教えてください。",
      situation: "2021年5月、在庫は8.9万点、適正在庫比123％で、保管費・荷役・タグ付け・ファミリーセール配送に無駄がありました。",
      task: "サービス水準を落とさず、保管スペース・作業品質・物流コストを同時に改善する必要がありました。",
      action: "ハンガー保管、低回転在庫、タグ付け、ファミリーセール配送を数量と動線で分析し、畳み保管・直接JAN発行・直送へ見直しました。",
      result: "年間保管料356万円、タグ57万円、ファミリーセール配送43万円など、年間合計403万円を削減し、物流費を売上の5.5％まで抑えました。",
      answer: `In May 2021, we held about 89,000 units of inventory, or 123% of the appropriate level. Storage, handling, tagging, and family-sale shipping costs were all higher than they needed to be. I was asked to reduce logistics cost without reducing service quality.
I analyzed the operation by item and movement, rather than starting with a price negotiation. Of about 440 styles and 18,000 units on hangers, only six styles truly required hanging. I changed the other 17,700 units to folded storage. I also identified 38,000 slow-moving units stored two or three deep on shelves, changed the tagging approach for 23,000 units, and negotiated direct JAN-code issuance. For family sales, I changed about 60% of shipments to direct delivery to stores.
These changes reduced storage space from 450 to 360 tsubo, a 20% reduction. Annual savings included about 3.56 million yen in storage fees, 570,000 yen in tagging costs, and 430,000 yen in family-sale shipping, for a total of about 4.03 million yen per year. Total logistics cost was controlled at 5.5% of sales.
The key was to treat logistics cost as the result of operational design, not simply as a vendor price.`,
      keyPhrases: ["I analyzed the operation by item and movement, rather than starting with a price negotiation", "only six styles truly required hanging", "changed about 60% of shipments to direct delivery to stores", "reduced storage space from 450 to 360 tsubo, a 20% reduction", "treat logistics cost as the result of operational design, not simply as a vendor price"],
      answerJa: `2021年5月、在庫は約8.9万点で適正在庫比123％となっており、保管費、荷役、タグ付け、ファミリーセール配送に無駄がありました。サービス水準を落とさずに物流コストを下げる必要がありました。
私は値引き交渉から始めるのではなく、品目と動線ごとに業務を分析しました。ハンガー保管の440品番・1.8万点のうち、本当にハンガーが必要だったのは6品番だけで、残り1.77万点を畳み保管へ変更しました。低回転在庫3.8万点の棚保管、2.3万点のタグ付け、ファミリーセール配送も見直し、直接JAN発行と店舗直送を進めました。
保管スペースを450坪から360坪へ20％削減し、年間保管料356万円、タグ代57万円、ファミリーセール配送43万円など、年間合計403万円を削減しました。物流費は売上の5.5％まで抑制しました。`
    },
    "outlet-growth": {
      title: "アウトレット店舗の収益性と売上を改善",
      category: "成功体験",
      lp: "Customer Obsession · Earn Trust · Deliver Results",
      question: "Tell me about a time you improved business results by using data to change an operating model.",
      questionJa: "データを使って運営モデルを変え、事業成果を改善した経験を教えてください。",
      situation: "2023年4月から2026年4月まで神戸三田アウトレット店を兼務。その他の在庫処分はNET22％に対し、アウトレットはNET46％と高収益でした。",
      task: "価値の高い在庫が他チャネルへ流れることを防ぎつつ、店舗への配分・値引き・販促を管理し、在庫リスクを抑える必要がありました。",
      action: "在庫ロケーションコード、6か月のランキングと消化率、翌年度売上計画の50％上限、週次OFF率KPIを使い、配分と値引きを運用しました。",
      result: "店舗売上は初年度4,580万円から5,840万円、6,520万円へ成長し、初年度比142％の水準まで改善しました。",
      answer: `From April 2023 to April 2026, I also managed the Kobe Sanda outlet store. Other inventory-clearance channels generated a net margin of about 22%, while the outlet achieved about 46%. I needed to protect that higher-value channel while controlling inventory risk, allocation, discounting, and promotions.
I created a more disciplined operating model. I used location codes to distinguish store and warehouse inventory, selected inventory using six-month rankings and sell-through rates, and generated return instructions automatically. I also capped store allocation at 50% of the following year’s sales plan so we would not overstock the store.
For pricing, I reviewed the weekly average discount rate by brand and item. I reduced prices gradually and used bundle offers, then introduced spot featured products when performance was behind plan. This allowed the store to protect value rather than relying on blanket discounting.
Sales grew from 45.8 million yen in the first year to 58.4 million yen and then 65.2 million yen, reaching 142% of the first-year level.`,
      keyPhrases: ["a net margin of about 22%, while the outlet achieved about 46%", "I also capped store allocation at 50% of the following year’s sales plan", "protect value rather than relying on blanket discounting", "reaching 142% of the first-year level"],
      answerJa: `2023年4月から2026年4月まで神戸三田アウトレット店を兼務しました。その他の在庫処分チャネルはNET22％であるのに対し、アウトレットはNET46％と高収益でした。価値の高い在庫が他チャネルに流れることを防ぎながら、在庫リスク、配分、値引き、販促を管理する必要がありました。
在庫ロケーションコードで店舗・倉庫在庫を分け、6か月のランキングと消化率で投入商品を選定し、返品指示を自動化しました。また、店舗への配分は翌年度売上計画の50％を上限とし、過剰在庫を防ぎました。
ブランド・品番ごとの週次平均OFF率をKPIとして確認し、段階的な値引きとセット販売を行い、計画未達時にはスポットの目玉商品を投入しました。
売上は初年度4,580万円から5,840万円、6,520万円へ成長し、初年度比142％の水準となりました。`
    },
    "staff-voice": {
      title: "社内アプリ「スタッフボイス」を開発",
      lp: "Invent and Simplify · Customer Obsession · Ownership",
      question: "Tell me about a time you built a tool that made work easier for internal customers.",
      questionJa: "社内のお客様の仕事を楽にするツールを開発した経験を教えてください。",
      situation: "2026年5月、EC部から商品ページに実店舗スタッフのおすすめコメントを掲載したいという相談がありました。",
      task: "スマートフォン中心の店舗スタッフと、PCでEC登録する本部の両方が無理なく使える仕組みを短期間で作る必要がありました。",
      action: "Google Apps ScriptでスマホUIを構築し、VOICE ID、音声入力、AI整文、HTML付きCSV出力、Pythonによる画像処理を実装しました。",
      result: "約2週間で完成し、ECチームの実作業をほぼゼロにしました。個人制作アプリがGoogle Workspace Marketplaceに掲載された実績もあります。",
      answer: `In May 2026, the EC team asked to add recommendations from store staff to product pages. Store staff were much more comfortable with smartphones than PCs, while head office had to load structured data into the EC cart system from a computer.
Because I also supported outlet operations, I understood the users’ daily workflow. I designed a smartphone-first Google Apps Script web application. It collected comments in Google Sheets and images in Google Drive. I added a VOICE ID parameter so each staff member’s character could be reflected, voice input for fast first drafts, and an AI function that refined the rough memo according to the selected VOICE ID.
For the back end, I generated CSV data in which comments and staff names were wrapped in the HTML required by the EC system. I also built Python scripts to rename and resize worn-product images. My independent app-development experience helped here: another app I created passed Google’s review and was listed on the Google Workspace Marketplace.
I completed the front end, CSV output, and image-processing scripts in about two weeks. The EC team’s manual work became almost zero, and the content could be published on product pages smoothly.`,
      keyPhrases: ["I understood the users’ daily workflow", "I designed a smartphone-first Google Apps Script web application", "so each staff member’s character could be reflected", "passed Google’s review and was listed on the Google Workspace Marketplace", "The EC team’s manual work became almost zero"],
      answerJa: `2026年5月、EC部から商品ページに実店舗スタッフのおすすめコメントを掲載したいという相談を受けました。店舗スタッフはPCよりスマートフォンに慣れている一方、ECカートへの登録は本部でのPC作業が前提でした。
アウトレット運営にも関わっていた私は現場の業務サイクルを理解しており、情報収集はスマホ中心にすべきだと判断しました。Google Apps Scriptでスマホ向けWebアプリを作り、コメントをGoogle Sheets、画像をGoogle Driveに集めました。スタッフごとの個性を反映するVOICE ID、音声入力、VOICE IDに沿ってメモを整文するAI機能を実装しました。
バックエンドでは、コメントとスタッフ名をECカートで必要なHTML形式にしたCSVを自動出力し、着用画像はPythonでリネーム・リサイズしました。なお、個人で制作した別アプリがGoogleの審査を通過し、Google Workspace Marketplaceに掲載された経験もあります。
約2週間でアプリ、CSV出力、画像処理を完成させ、ECチームの実作業をほぼゼロにしました。`
    },
    "grip-file-transfer": {
      title: "社内アプリ「グリップファイル転送」を開発",
      lp: "Ownership · Invent and Simplify · Earn Trust",
      question: "Tell me about a time you improved security and usability after an important service was discontinued.",
      questionJa: "重要なサービス終了後に、セキュリティと使いやすさを改善した経験を教えてください。",
      situation: "2026年5月に有料大容量ファイル転送サービスを解約し、6月には無料外部サービスやメール添付が増え、情報管理と受取側の体験に課題がありました。",
      task: "新たな有料サービスを導入せず、社内外が安全かつ分かりやすく使えるファイル転送を構築する必要がありました。",
      action: "既存のMicrosoft基盤を調査し、SharePointとAzureでドラッグ＆ドロップ、期限切れ、パスワード任意、足跡の待機表示を備えたポータルを作りました。",
      result: "約2週間で開発し7月にリリース。新規有料サービスと比べ年間約12万円を削減し、利用も定着しました。",
      answer: `In May 2026, we cancelled a paid large-file transfer service to reduce cost. By June, employees were increasingly using email attachments or free external services. That created information-security concerns and an inconvenient recipient experience with advertising and pop-ups.
I needed to provide a secure alternative without buying another service. I investigated our existing Microsoft environment and chose SharePoint as the storage base and Azure for the portal application. Recipients could see that downloads came from SharePoint, which also improved trust.
I built drag-and-drop upload, links that expired automatically, optional passwords based on file importance, and a footprint-themed waiting indicator inspired by a brand character. The goal was to keep the familiar convenience of a commercial transfer service while using infrastructure we already had.
I developed the tool in about two weeks and released it in July. It has been adopted internally, improved security and usability, and avoided roughly 120,000 yen per year compared with introducing a new paid service.`,
      keyPhrases: ["Recipients could see that downloads came from SharePoint, which also improved trust", "a footprint-themed waiting indicator inspired by a brand character", "keep the familiar convenience of a commercial transfer service while using infrastructure we already had", "avoided roughly 120,000 yen per year compared with introducing a new paid service"],
      answerJa: `2026年5月、経費削減のため有料の大容量ファイル転送サービスを解約しました。6月にはメール添付や無料外部サービスを個別に使う場面が増え、情報流出の懸念と、受取側に広告・ポップアップが表示される不便さがありました。
新たな有料サービスを導入せず、安全で使いやすい代替手段を作る必要がありました。既存のMicrosoft基盤を調査し、SharePointを保存先、Azureをポータルアプリとして採用しました。受取側にもSharePointからのダウンロードと表示されるため、安心感につながると考えました。
ドラッグ＆ドロップ、期限後のリンク自動無効化、重要度に応じたパスワード任意設定、犬のキャラクターを想起させる足跡の待機表示を実装しました。
約2週間で開発し7月にリリース。新規有料サービスと比べ年間約12万円を削減し、社内利用も定着しています。`
    },
    "ec-image-automation": {
      title: "EC商品画像業務を自動化",
      lp: "Dive Deep · Invent and Simplify · Bias for Action",
      question: "Tell me about a time you automated a complex manual process under time pressure.",
      questionJa: "時間的なプレッシャーの中で、複雑な手作業を自動化した経験を教えてください。",
      situation: "2026年、ECチームは商品画像準備に多くの時間を使い、休職者の発生で販促企画に十分な時間を割けない状態でした。",
      task: "詳細を十分に知らない画像業務を自部署へ移管し、標準化・自動化してEC部の負担を減らす必要がありました。",
      action: "ファイル名ルールとフローを作り直し、夜間バッチを構築。分類ではYOLOを50回試して85％で切り替え、Gemini APIを30回調整して99％へ到達しました。",
      result: "画像取得・修正、国内撮影処理、ECカートマスタ反映、卸先ストレージ同期の4工程を自動化し、1人1か月の作業を約2時間へ短縮しました。",
      answer: `In 2026, the EC team was spending a large amount of time preparing product images. When a team member took leave, the team had little capacity left for promotional work. I understood the workflow at a high level but not in detail, so I decided to transfer the work to my department first and learn it directly.
I found that the process was complex, manual, and not standardized. File-naming rules were unstable, so automation would fail whenever the rules changed. I rebuilt the rules with the EC team, created scripts for every stage, and scheduled nightly batch processing.
For imported-brand images, we needed to identify product-only images, model-worn images, and front-facing images suitable for the top of a product page. I first tried YOLO and made about 50 adjustments, but accuracy plateaued at 85%. I then switched to Gemini’s multimodal API and, after about 30 adjustments, achieved 99% accuracy.
I automated four stages: imported-image download and correction, domestic-image processing, automatic placement of file names in the EC cart master, and synchronization to wholesaler-facing storage. Work that had taken one person about one month can now be completed in roughly two hours.`,
      keyPhrases: ["I decided to transfer the work to my department first and learn it directly", "the process was complex, manual, and not standardized", "accuracy plateaued at 85%", "switched to Gemini’s multimodal API", "achieved 99% accuracy", "completed in roughly two hours"],
      answerJa: `2026年、ECチームは商品画像準備に多くの時間を使っており、休職者の発生で販促企画に十分な時間を割けなくなっていました。私は業務の全詳細を知っていたわけではありませんが、改善するために自部署へ移管して直接理解することにしました。
確認すると、手作業が多く、フローもファイル名ルールも標準化されていませんでした。ルールをECチームと作り直し、工程ごとにスクリプトを作成し、毎晩自動実行するバッチを構築しました。
輸入ブランド画像を商品単体、モデル着用、商品ページ上部向け正面画像に分類する処理では、YOLOを約50回調整しても精度が85％で頭打ちでした。GeminiのマルチモーダルAPIへ切り替え、約30回調整して99％の精度に到達しました。
輸入画像の取得・修正、国内撮影画像の処理、ECカートマスタへのファイル名反映、卸先向けストレージ同期の4工程を自動化し、従来1人で約1か月かかった作業を約2時間へ短縮しました。`
    },
    "chain-order-list": {
      title: "チェーンストア受注一覧を短期間で引継ぎ・自動化",
      lp: "Ownership · Bias for Action · Dive Deep",
      question: "Tell me about a time you took over a critical process under severe time pressure.",
      questionJa: "厳しい時間制約の中で、重要な業務を引き継ぎ、改善した経験を教えてください。",
      situation: "2025年8月、チェーンストア向け受注一覧を担当していた社員が入院し、3団体分の受注を翌週までに引き継ぐ必要がありました。説明時間は10分程度でした。",
      task: "止められない受注処理を引き継ぎ、即時対応と再発しない自動化の両方を実現する必要がありました。",
      action: "まず3団体の処理を完了させ、商品・店舗・納品先の対応を整理。Power Query、VBA、Gemini OCRで入力・帳票作成を自動化しました。",
      result: "週末の3日間で引継ぎを完了し、3団体すべての受注を初日に処理。帳票出力を3日から約2時間へ短縮し、手順書も作成しました。",
      answer: `In August 2025, the employee responsible for chain-store order lists was hospitalized. I had to take over orders for three organizations by the following week, but the handover lasted only about ten minutes. The process could not stop because stores were waiting for order documentation.
I separated the work into two tracks: immediate continuity and a sustainable process. First, I completed the urgent work for all three organizations. At the same time, I mapped the relationships among products, stores, and delivery destinations, including the key details that were normally handled from memory.
I then built automation with Power Query and VBA for data preparation and report generation. For item classification from source documents, I also used Gemini OCR. I documented the operating steps so the process no longer depended on one person’s memory.
I completed the takeover over three weekend days and processed orders for all three organizations on the first working day. Report output time fell from three days to about two hours.`,
      keyPhrases: ["I separated the work into two tracks: immediate continuity and a sustainable process", "the key details that were normally handled from memory", "the process no longer depended on one person’s memory", "Report output time fell from three days to about two hours"],
      answerJa: `2025年8月、チェーンストア向け受注一覧を担当していた社員が入院し、翌週までに3団体分の受注を引き継ぐ必要がありました。説明を受けられた時間は約10分だけで、店舗が待つ受注処理を止めることはできませんでした。
私は、まず業務を止めないことと、属人化を解消することを分けて進めました。最初に3団体の緊急処理を完了させ、商品・店舗・納品先の対応関係や、通常は担当者の記憶に依存していた詳細を整理しました。
そのうえで、Power QueryとVBAでデータ準備と帳票作成を自動化し、元資料からの品目分類にはGemini OCRも活用しました。手順書を作成し、個人の記憶に依存しない工程にしました。
週末の3日間で引継ぎを完了し、3団体すべての受注を初日に処理できました。帳票出力は3日から約2時間へ短縮しました。`
    },
    "ec-description-automation": {
      title: "EC商品説明文の作成をAIで標準化・高速化",
      lp: "Customer Obsession · Invent and Simplify · Dive Deep",
      question: "Tell me about a time you used technology to improve quality and speed for customers.",
      questionJa: "テクノロジーを使って、お客様に届く品質とスピードを改善した経験を教えてください。",
      situation: "EC掲載用の商品説明文は約800点分を人手で作成しており、1点12分、合計約160時間かかっていました。",
      task: "商品情報の正確性とブランドらしさを保ちながら、商品説明作成を大幅に効率化する必要がありました。",
      action: "商品メタデータをExcelとLLMで連携し、MOD・CHOOSEを使って10種類の表現を使い分け、AI生成後に人が確認する品質管理を設計しました。",
      result: "1点3分、合計約40時間へ短縮し、約120時間、75％の工数を削減。800点をECへ確実に掲載できるようにしました。",
      keyPhrases: ["without sacrificing", "I started from the customer perspective", "to avoid repetitive language", "a person reviewed every output", "rather than relying on unreviewed AI text", "fell from about 160 hours to about 40 hours", "saving roughly 120 hours, or 75%"],
      answer: `Our EC team had to create product descriptions for about 800 items. The manual process took roughly 12 minutes per item, or about 160 hours in total. We needed to improve speed without sacrificing product accuracy or brand tone.
I started from the customer perspective: a description must be easy to understand, accurate, and consistent enough to support purchase decisions. I connected product metadata in Excel with an LLM-based drafting process. To avoid repetitive language, I used Excel functions such as MOD and CHOOSE to vary ten expression patterns while keeping the product facts fixed.
The AI generated the first draft, but a person reviewed every output for factual accuracy and brand appropriateness before publication. This created a controlled workflow rather than relying on unreviewed AI text.
The time per item fell from about 12 minutes to three minutes. For 800 items, the total fell from about 160 hours to about 40 hours—saving roughly 120 hours, or 75%—while allowing all descriptions to be published reliably on the EC site.`,
      answerJa: `EC掲載用の商品説明文は約800点分を人手で作成しており、1点約12分、合計約160時間かかっていました。商品情報の正確性とブランドらしさを保ちながら、大幅に効率化する必要がありました。
私は、お客様にとって分かりやすく、正確で、一貫した説明文にすることを起点に考えました。商品メタデータをExcelとLLMによる下書き工程に連携し、MODやCHOOSEを使って10種類の表現を使い分けながら、事実情報は固定しました。
AIが下書きを作成した後、公開前に必ず人が事実関係とブランドらしさを確認しました。未確認のAI文章に依存せず、品質を管理できる工程にしました。
1点あたり約12分から約3分へ短縮し、800点で約160時間から約40時間、約120時間・75％の工数を削減しました。`
    }
  };

  const translations = window.TRANSLATIONS || (window.TRANSLATIONS = {});
  window.DEFAULT_CARDS = (window.DEFAULT_CARDS || []).map((card) => {
    const update = successUpdates[card.id];
    if (!update) return card;
    const { questionJa, answerJa, ...cardUpdate } = update;
    translations[card.id] = { ...(translations[card.id] || {}), questionJa, answerJa };
    return { ...card, ...cardUpdate };
  });
})();
