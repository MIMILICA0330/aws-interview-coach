/* STAR原文の具体性を、面接練習用カードへ反映する追加コンテンツ。 */
(() => {
  const expandedAnswers = {
    "cost-rpa": {
      answer: "In 2024, at Grip International, minor system changes and data-processing work were outsourced to external vendors. Even a small request cost between 300,000 and 2 million yen, and the accumulated cost was becoming a financial burden. The business also had to wait for estimates and vendor schedules before receiving simple changes.\nI decided that waiting until every technical question was answered would be too slow. As the leader, I made the decision to bring suitable work in-house while the technical picture was still incomplete. I learned RPA and Power Query myself, mapped repetitive data-entry and formatting steps in detail, and began turning them into reusable automated processes. I also demonstrated the new approach directly so that the team could see it was practical.\nOver two years, the team created about 150 RPA programs and more than 100 Power Query processes. We brought many small system-related improvements and data transformations in-house, reduced dependence on vendors, and removed work equivalent to about four employees across my section and other sections.\nThe experience taught me that a reversible, well-controlled first step can be better than waiting for perfect information. I still define the scope and risks carefully, but I now move early when the cost of delay is greater than the risk of learning through action."
    },
    "ec-master": {
      answer: "In 2024, we had to prepare product-master data for our EC site, department stores, and chain stores in about 50 different formats every season. The internal preparation and outsourcing process had become complicated, so lead times were about one and a half months and annual outsourcing costs reached 6 million yen for department stores and chain stores and 3 million yen for our EC site.\nRather than only asking people where the bottleneck was, I joined the actual workflow and traced every step between the internal team and the outsourcing company. I found that staff were visually extracting size and material information from product specifications, while the vendor was manually adding borders, shading, and other formatting simply to make the spreadsheet look presentable. Those steps did not add value to the destination systems, which only required structured data.\nI removed the manual decoration work and built a Power Query process that converted raw CSV data from the specification system directly into the required import formats. This replaced the manual handoff and allowed the work to be completed internally.\nAs a result, we reduced the lead time from about one and a half months to about one week, eliminated the manual formatting work, and reduced 9 million yen in annual outsourcing costs to zero. The key lesson was to distinguish between information the system truly needs and work that only exists because an old process has become habitual."
    },
    "samsonite-sales": {
      answer: "In August 2009, at Samsonite Japan, I was assigned to Itochu Retail Link, a distributor serving major chains including JAL, JTB, Hands, and Loft. Its sales organization was weak, and monthly sales were only about 2.5 million yen. I was asked either to rebuild the sales operation or develop direct relationships with the chains.\nI concluded that the distributor model should remain because it reduced inventory risk, but its sales activity had to change. I minimized time in the office, increased contact with head-office buyers and store staff, and worked on the shop floor myself to build POS sales results. I expected the sales team to follow the same customer-facing approach.\nAt Loft, I focused first on the fourth-ranked Ikebukuro store. I visited twice a week and sold on the floor one weekend each month. The store moved to third place and sometimes second place, which gained the attention of the head-office buyer. I then proposed an event, secured free prizes through a direct tie-up with the New York City Tourism Authority, and launched the promotion in about 30 key Loft stores.\nMonthly sales grew to 10 million yen in December 2009, 15 million yen in February 2010, and more than 30 million yen in September 2010—over ten times the starting level in about one year. The distributor relationship became strong enough that Samsonite continued to send secondees there afterward."
    },
    "jl-license": {
      answer: "Around 2015, I was responsible for the Swedish brand J.LINDEBERG in Japan. The global assortment did not fully match local customer needs: there were few bags and no caddie bags, Scandinavian apparel sizing was often too long for Japanese customers, and winter golf wear was limited because winter golf was not common in Sweden.\nI proposed a Japan-developed licensed range as a new business. I needed approval from the Stockholm team and had to launch the range without adding internal headcount. I traveled to Stockholm with design proposals, material samples, and a sales forecast. I explained the gaps in the assortment and showed that the plan could maintain the existing purchase volume while creating royalty income for the global brand. Because I was not fluent in English, I prepared the presentation and anticipated questions in English in advance.\nAfter receiving broad approval, I initially acted as the designer myself. I built cooperation with trading companies and two key factories, including support for specification sheets, and arranged direct sourcing routes for branded zippers and buttons. I used the annual sales plan to show partners the growth potential and gain their commitment.\nThe first year focused on accessories and generated about 50 million yen in annual retail sales. After adding apparel in the second year, the line reached about 50 styles and 110 million yen. In the third year, development was transferred to an internal design team and annual retail sales grew to about 150 million yen."
    },
    "china-jv": {
      answer: "Around 2011, Itochu proposed a three-company joint venture to sell our brands in China. I was appointed as the business lead, responsible for completing the contracts and creating the sales plan. The project involved conflicting interests: our company wanted to protect exports from Japan, while the local market needed a practical mix of imported products and locally licensed townwear because golf was still developing in China.\nThe usual law firm could not represent us because it also advised Itochu. Itochu prepared the English drafts, but I translated nearly 100 pages in about one week, including the investment agreement, the new company’s articles of association, the distributor agreement, and the license agreement. I then reviewed the translation with an independent attorney. Itochu’s team later asked to use my Japanese translation as well.\nTo protect our export business, I negotiated annual minimum-purchase amounts in the distributor agreement. At the same time, I accepted a practical balance of imported and licensed products so that the overall business could succeed in China.\nWe completed the agreements in about six months. Starting with Shanghai, Hangzhou, and Shenzhen, the business expanded to about 50 stores in roughly two years and reached monthly sales of approximately 50 million yen. The experience taught me that international negotiations succeed when legal detail, commercial protection, and local market reality are addressed together."
    },
    "staff-voice": {
      answer: "In May 2026, the EC team asked to add recommendations from store staff to product pages. The challenge was that many store staff were more comfortable with smartphones than PCs, while the EC-cart system required the head office to upload structured data from a PC.\nBecause I also supported some directly operated stores, I understood the daily workflow and practical constraints of store staff. I decided that the collection side had to be smartphone-first. I built a Google Apps Script web application that collected comments in Google Sheets and images in Google Drive.\nI then designed the back-end process around the EC system’s requirements. The comments and staff names had to be wrapped in specified HTML, so I created an automated CSV output. Store-worn images also had to be renamed and resized to the required specifications, so I built Python scripts to process the files automatically.\nWithin about two weeks, I completed the front-end app, the CSV-generation process, and the image-renaming and resizing scripts. The EC team’s manual effort was almost zero, and the intended comments and images could be implemented smoothly on the product pages. The project showed how important it is to design around the actual user environment rather than asking users to adapt to a system."
    },
    "grip-file-transfer": {
      answer: "In June 2026, our company cancelled a paid large-file transfer service to reduce costs. After that, employees were using email attachments or free external services individually. This created security concerns, and recipients often faced advertisements and pop-ups.\nI needed to create a secure and easy-to-use alternative without adding a new paid service. While researching options, I learned that SharePoint could serve as an organization-wide storage base and that Azure could support a simple portal application. Because the company already used Microsoft accounts officially, this was a good fit for both administration and user trust.\nI designed a portal with drag-and-drop uploads, download links that automatically expired after a set period, and password or no-password options based on file importance. I also aimed to reproduce the familiar usability of commercial transfer services. To make the waiting experience more approachable, I added a footprint-themed upload indicator inspired by one of our key brand characters.\nSharePoint and Azure were new infrastructure for me, but I learned them and released the tool in about one month. Employees actively adopted it, improving security, recipient confidence, and convenience while keeping costs under control."
    },
    "viva-heart-drop-ship": {
      answer: "Around 2016, we exported VIVA HEART products to a distributor in Korea. The distributor asked whether we could ship directly from factories in China and Vietnam to Korea because trade agreements had reduced the tariff rate to zero. Previously, goods were imported through Japan, which added duty and freight.\nThe challenge was coordinating many parties. The trading companies handled the imports, factories had to issue certificates of origin, and the forwarder had to change the invoice flow. Some Chinese regions required government authorization before a factory could issue a certificate of origin. Our company had never used drop-shipping before, so we had to turn a theoretical possibility into an operating process.\nI worked repeatedly with an international forwarder that had offices in China, Vietnam, Japan, and Korea. We clarified the procedures, the required documents, and the factory-by-factory issues, then created a practical manual. I used the same manual to implement the process with two additional trading companies.\nAs a result, about 90% of Korean exports shifted to direct shipments from China or Vietnam. We met the distributor’s request and avoided costs that would have occurred through Japan. The saving was about 6% of annual Korean sales of 65 million yen, or approximately 4 million yen per year."
    },
    "jl-direct-import": {
      answer: "In 2019, J.LINDEBERG was imported through a trading company. The brand was shifting from department stores toward sports chains, which required a lower price point and higher sales volume. To support that strategy, we needed to reduce purchasing costs by moving to direct import from the global brand.\nI began by breaking down the annual purchasing cost by component, setting a reduction target, and revising the price and marketing plan. I negotiated new contract terms with J.LINDEBERG for four months. The annual FOB import value was about 1.1 million euros, and the trading company’s margin, excluding duty and freight, was about 15%, so there was a clear business case for the change.\nOperationally, we could use our existing drop-shipping knowledge, but we still had to coordinate foreign-exchange booking with the previous trading company and establish the relationship with a new forwarder. Another challenge was capability: nobody in the company had both business-level English and import experience. I selected a new graduate recruiter who could communicate in English, trained her through one full season, and handled documents, ocean-freight booking, and domestic delivery together.\nAfter about two months of preparation, we switched to direct import. The change reduced annual costs by approximately 22 million yen and made the lower-price strategy and wider sports-chain distribution viable."
    },
    "ec-image-automation": {
      answer: "In 2026, the EC team was spending a large amount of time preparing product images for the website. When a team member took leave, the team asked whether we could reduce the back-office work so they could focus on promotions. Although I understood the overall workflow, I did not know every operational detail, so I decided to transfer the work to my department before trying to automate it.\nOnce I took it over, I found more manual work and inconsistency than expected. The workflow was not standardized, and file-naming rules were too unstable for reliable automation. I first rebuilt the rules with the EC team, then created scripts for each stage and scheduled batch processing to run every night.\nThe most difficult part was imported-brand images. We needed to distinguish product-only images, model-worn images, and front-facing images suitable for the main product page, then rename them accurately. I first tried YOLO and tuned it about 50 times, but the accuracy did not exceed 85%. I changed to Gemini’s multimodal API, tuned it about 30 times, and reached 99% accuracy.\nI automated four stages: importing and correcting imported images, processing domestic photography, placing filenames in the EC-cart master data, and synchronizing files to public storage for wholesalers. Work that had taken one person about one month can now be completed in roughly two hours."
    },
    "yolo-pivot": {
      answer: "In 2026, I was improving the process for organizing imported-brand images for our e-commerce site. Each season, we received about 20,000 images, and people had to visually classify them as product-only or model-worn images before renaming the files.\nI chose YOLO because it is a well-known image-recognition model. My mistake was that I did not set a required accuracy level or a clear point for changing approaches. I spent about one week and roughly 50 tuning iterations, but the accuracy stopped at 85%. I continued too long because I assumed YOLO had to be the right solution.\nEverything remained in testing, so no incorrectly classified images were published. Once I recognized the limit of the approach, I switched to a multimodal AI model. After about 30 further tuning iterations, I achieved 99% accuracy and could move the process safely into production.\nI learned to define success metrics, representative test data, a time limit, and an exit criterion before starting a technical evaluation. I now use those criteria for new automation projects."
    },
    "order-import-regression": {
      answer: "In 2022, I worked with an external vendor on an enhancement for a custom sales-management system that used exhibition-order data. The new function itself passed testing and was launched successfully.\nHowever, I assumed that the existing order-import function was already stable, so I did not perform enough regression testing on the related process. I later found that when there was an additional order on the same day with the same details but a different order number, the existing logic did not use the order number as a unique identifier. As a result, the later row could overwrite the earlier one.\nI took responsibility for the gap in the requirements and testing. To prevent omissions, I added a pre-import check using Power Query. Before uploading the CSV, it detects duplicate records when the order number is excluded. If it finds a duplicate, the data is adjusted in the order system so it can be correctly distinguished, then it is exported and uploaded again.\nThis control prevents missing imports. I also changed my approach to requirements and testing: I now make the unique key, new-versus-update behavior, duplicate handling, and the impact on related existing functions mandatory checks."
    }
  };

  const newFailureCards = [
    {
      id: "split-shipment-timing",
      title: "分割出荷の判断が遅れ、店頭展開が3週間後ろ倒しになった",
      category: "STAR",
      lp: "Customer Obsession · Ownership",
      question: "Tell me about a time your initial plan did not meet customer needs. What did you change?",
      situation: "2019年、J.LINDEBERGの輸入を商社経由から直接貿易へ切り替えた最初のシーズンに、ポロシャツの約80％を台湾工場から日本へ輸入することになりました。",
      task: "輸入コストを管理しながら、販売計画に合う時期に商品を店頭へ届ける必要がありました。",
      action: "私はコスト最適化を優先し、全商品の生産完了後に一括出荷する計画を受け入れました。しかし、結果として日本への入荷が店頭展開に対して約3週間遅くなりました。次シーズンからは、生産が完了した商品から3回に分けて輸入する方式へ変更し、コスト増は事前に輸入経費計画のバッファとして織り込みました。",
      result: "翌シーズンは正常な店頭展開に間に合い、前シーズンの遅れから約3週間改善しました。多少の輸入コスト増よりも、適切な時期に店頭展開できる価値を優先する運用へ変え、以後はコストだけでなく販売機会と顧客への提供時期を同時に評価しています。",
      answer: "In 2019, during the first season after we changed J.LINDEBERG from trading-company imports to direct import, about 80% of the polo shirts were produced in Taiwan. I had to arrange the import from the factory to Japan.\nTo minimize freight and import costs, I accepted a plan to wait until all products were completed and ship them together. That decision was efficient from a cost perspective, but the goods arrived in Japan about three weeks too late for the intended in-store launch. I had focused too narrowly on import cost and had not given enough weight to the value of being on the sales floor at the right time.\nFrom the following season, I changed the plan to divide the shipments into three waves and import products as production was completed. This increased some logistics cost, so I built an appropriate buffer into the import-expense plan in advance. The following season, the products arrived in time for the normal in-store launch, improving the schedule by about three weeks.\nThe lesson was that supply-chain decisions should not be evaluated only by freight cost. I now balance cost against sales opportunity, customer availability, and the operational impact of late delivery before finalizing an import plan.",
      followUps: ["How did you decide the number of shipment waves?", "How did you balance the additional freight cost against the sales opportunity?", "What would you monitor before approving a consolidated shipment now?"]
    },
    {
      id: "gift-catalog-inventory",
      title: "在庫を確保せずに受注し、過剰在庫を招いた",
      category: "STAR",
      lp: "Ownership · Dive Deep",
      question: "Tell me about a time you made an inventory-planning mistake. What did you do and learn?",
      situation: "2008年、サムソナイトジャパンで通販カタログ会社へ提案し、伊勢丹向けギフトカタログにスーツケース300本が採用されました。商品の最低生産ロットは2,000本でした。",
      task: "受注分を確実に供給しながら、不要な在庫リスクを発生させない必要がありました。",
      action: "香港のアジア向けディストリビューションセンターに2,000本以上の在庫があったため、私は新規生産や即時の在庫引当をせず、後で日本向けに手配すればよいと判断しました。しかし1週間後には在庫がゼロになっており、新規生産をせざるを得ませんでした。私は、共有在庫を確保済みの在庫と同じように扱ったことが誤りだったと認めました。",
      result: "顧客への300本の納品遅延はありませんでしたが、2,000本を新規生産した結果、受注後に1,700本の余剰が発生しました。200本しか通常販売できず、残り約1,500本はアウトレット販売となり粗利率を損ないました。以後は、販売時点で在庫の即時確保可否を確認し、長期確保が難しい場合は販売先にも事前説明する運用へ変えました。",
      answer: "In 2008, while I was at Samsonite Japan, I proposed a suitcase to a mail-order catalog company and won an order for 300 units for an Isetan gift catalog. The product had a minimum production quantity of 2,000 units. At that time, an Asian distribution center in Hong Kong showed more than 2,000 units in stock.\nI made the mistake of treating visible shared inventory as if it were already reserved for Japan. I did not immediately secure the inventory or start new production because I believed I could arrange the Japan allocation later. One week later, the available inventory had dropped to zero, so we had to produce a new lot of 2,000 units.\nWe fulfilled the 300-unit customer order without a delivery delay, but we then had 1,700 excess units. Only about 200 could be sold through normal channels, and roughly 1,500 units had to be sold through outlet stores, which damaged the gross margin. I took responsibility because the risk could have been avoided by confirming and securing inventory at the time of sale.\nSince then, I always verify whether stock can be allocated immediately before confirming a sale. If long-term reservation is difficult, I explain that constraint to the customer in advance.",
      followUps: ["Why did you not reserve the inventory immediately?", "How would you communicate a stock-allocation risk to a customer?", "What inventory control would prevent this mistake today?"]
    },
    {
      id: "trademark-governance",
      title: "知財リスクの予防統制を作れていなかった",
      category: "STAR",
      lp: "Ownership · Earn Trust",
      question: "Tell me about a time you discovered a risk in a product or process too late. How did you respond?",
      situation: "2016年、自社ブランドの数年前の商品について、第三者から図形商標を侵害しているという内容証明を受け取りました。",
      task: "法的リスクに適切に対応し、同じ種類の問題が将来起きないよう、企画とリーガルの管理方法を改善する必要がありました。",
      action: "当時のデザイナーはすでに退職していましたが確認したところ、相手企業の商品を参考にデザインを作成していたことが分かりました。私はリーガル業務も担当していたにもかかわらず、全企画を能動的に知的財産の観点で確認する仕組みや、相談履歴を残す仕組みを作れていなかったと認識しました。顧問法律事務所と対応し、解決後は全ブランドの企画担当者へ商標権・著作権に関する定期的な情報発信を始め、個別相談の履歴を共有ファイルサーバーに残す運用を作りました。",
      result: "賠償金の支払いを含む対応を行いました。その後は、担当者の入退社があっても過去の相談と判断を参照でき、企画段階で知的財産リスクを相談・確認する習慣を強化できました。",
      answer: "In 2016, our company received a formal notice from a third party claiming that a product from one of our brands infringed its graphic trademark. The product had been sold several years earlier, and the designer involved had already left the company.\nAfter confirming the facts, I learned that the designer had used the other company’s product as a reference when creating the design. I was also responsible for legal matters at the time, and I recognized that I had not built a proactive process to review intellectual-property risks across all product plans. We had also not kept a shared record of design-related legal consultations.\nI worked with our outside counsel to resolve the matter, including a compensation payment. More importantly, I changed the process afterward. I began providing regular information to planning teams across all brands about trademark and copyright risks. I also created a shared record of individual consultations and decisions so that knowledge would remain available even when team members changed.\nThe lesson was that legal responsibility cannot depend on individual memory or on whether a particular designer is still with the company. I learned to build simple, repeatable controls before a problem occurs.",
      followUps: ["How did you balance legal control with creative freedom?", "What information did you include in the shared consultation record?", "How would you identify high-risk designs earlier now?"]
    },
    {
      id: "italy-agent-negotiation",
      title: "イタリア代理店との契約を成立させられなかった",
      category: "STAR",
      lp: "Earn Trust · Customer Obsession",
      question: "Tell me about a partnership that did not move forward. What did you learn from it?",
      situation: "2017年、私はロサーセンブランドの責任者として、フィレンツェのPitti Uomoに半年ごとに出展し、イタリアのニットメーカーと販売代理店・ライセンス契約に向けた交渉を始めました。",
      task: "海外のパートナーと条件を合意し、ブランドのイタリア展開を開始する必要がありました。",
      action: "仮契約後、半年間は主にメールで交渉し、対面で会うのは半年に一度の展示会に限られていました。私は自社に有利な契約条件にもこだわり過ぎ、自分が相手の立ち上げ条件を十分に確認できていませんでした。最終的に相手は正式契約を見送りました。私は、複雑な海外パートナーシップでは、メール交渉だけでは信頼と相互理解を十分に作れないこと、また最初から条件を最大化するより段階的に始める選択肢も必要だと学びました。",
      result: "契約は成立しませんでしたが、2022年に台湾とタイの新たな販売代理店ビジネスを始めた際は、より小さな数値計画から段階的に開始する設計を、リーガル担当として支援しました。",
      answer: "In 2017, as the brand manager for ROSSASSEN, I exhibited at Pitti Uomo in Florence every six months. I began discussions with an Italian knitwear company about a distribution and license agreement. We reached a provisional understanding and continued negotiating.\nMy mistake was relying too heavily on email between the trade shows. We met in person only every six months, even though the partnership required detailed commercial and legal alignment. I also focused too much on securing the most favorable terms for our company and did not sufficiently confirm the conditions the partner needed in order to launch the business.\nWe continued discussions after the next exhibition, but the partner ultimately decided not to sign the final agreement. I tried to continue the negotiation by email, but it did not recover. I took this as a failure in how I built the relationship and structured the deal, not simply as the other side changing its mind.\nI learned that complex international partnerships require more face-to-face dialogue and a willingness to start with a smaller, staged plan rather than trying to optimize every contract term at the beginning. In 2022, when supporting new distributor relationships in Taiwan and Thailand, I applied that learning by helping create smaller initial plans that could expand based on results.",
      followUps: ["What would you have discussed face to face earlier?", "Which contract terms would you make more flexible in a phased launch?", "How did you apply this lesson to Taiwan and Thailand?"]
    }
  ];

  const interviewerQuestionCards = [
    {
      id: "interviewer-success-criteria",
      title: "入社後の成功基準を聞く",
      category: "Basics",
      lp: "Questions for Interviewer",
      question: "What would distinguish an outstanding person in this role during the first six to twelve months?",
      situation: "最終面接の最後に、入社後の期待値と優先順位を理解するために質問します。",
      task: "このポジションで早期に価値を出すための、具体的な成功基準を把握します。",
      action: "役割で優れた成果を出す人の共通点を聞き、回答を自分の経験や入社後の行動計画に結び付けます。",
      result: "成長意欲だけでなく、入社後に何へ貢献すべきかを理解しようとする姿勢を示せます。",
      answer: "Thank you. I have a question. What would distinguish an outstanding person in this role during the first six to twelve months?\nI ask because I would like to understand what success looks like in practice and where I should focus my effort so that I can contribute quickly.",
      followUps: ["Which early achievement would matter most?", "How is feedback usually shared during the first few months?", "What would you want a new team member to learn first?"]
    },
    {
      id: "interviewer-current-challenges",
      title: "現場の物流課題を聞く",
      category: "Basics",
      lp: "Questions for Interviewer",
      question: "What are the most difficult or recurring logistics challenges the team is working on today?",
      situation: "最終面接の最後に、チームが実際に直面している課題を理解するために質問します。",
      task: "入社後に自分の改善経験をどのような課題へ活かせるかを把握します。",
      action: "繰り返し起きる課題、制約、現在試している対策を聞き、相手の回答を深掘りします。",
      result: "現場の問題を理解し、改善を通じて貢献したいという姿勢を示せます。",
      answer: "Thank you. I have a question. What are the most difficult or recurring logistics challenges the team is working on today?\nI ask because I enjoy finding root causes and improving processes, and I would like to understand where my experience could be most useful.",
      followUps: ["What has made that challenge difficult to solve?", "Which teams are most involved?", "What would a meaningful improvement look like?"]
    },
    {
      id: "interviewer-operational-metrics",
      title: "重要な運用指標を聞く",
      category: "Basics",
      lp: "Questions for Interviewer",
      question: "What operational metrics are most important for this team, such as inventory accuracy, turnaround time, safety, or quality? How does this role influence them?",
      situation: "最終面接の最後に、チームが重視する運用指標と自分の役割への期待を理解するために質問します。",
      task: "安全性・正確性・スピード・品質を、どのように測定し改善しているかを把握します。",
      action: "最重要KPIと、このポジションが日々の行動を通じてKPIへ与える影響を確認します。",
      result: "物流オペレーションを測定可能な成果として捉え、データに基づき貢献したい姿勢を示せます。",
      answer: "Thank you. I have a question. What operational metrics are most important for this team, such as inventory accuracy, turnaround time, safety, or quality? How does this role influence them?\nI ask because, in my past roles, I have tried to balance safety, accuracy, speed, and continuous improvement through measurable results.",
      followUps: ["Which metric is hardest to improve without affecting another one?", "How often does the team review these metrics?", "What data would this role use most often?"]
    },
    {
      id: "interviewer-improvement-process",
      title: "業務改善の進め方を聞く",
      category: "Basics",
      lp: "Questions for Interviewer",
      question: "When a team member identifies a process improvement opportunity, how are ideas tested and scaled within the team or across other sites?",
      situation: "最終面接の最後に、現場の改善提案がどのように検証・展開されるかを理解するために質問します。",
      task: "自分の自動化や業務改善の経験を、チームの進め方に合わせて活かす方法を把握します。",
      action: "小さな実験、品質・安全性の確認、標準化、他拠点展開の流れを聞きます。",
      result: "改善提案を個人の工夫で終わらせず、再現可能な仕組みにしたい姿勢を示せます。",
      answer: "Thank you. I have a question. When a team member identifies a process improvement opportunity, how are ideas tested and scaled within the team or across other sites?\nI ask because I have experience with process automation and would like to understand how the team turns a local improvement into a reliable standard process.",
      followUps: ["What evidence is required before an improvement is adopted?", "Who needs to be involved in the review?", "Can you share an example of an improvement that was scaled successfully?"]
    },
    {
      id: "interviewer-cross-functional-priorities",
      title: "他チームとの優先順位調整を聞く",
      category: "Basics",
      lp: "Questions for Interviewer",
      question: "How does this team work with technicians, facilities, security, and other stakeholders when priorities conflict?",
      situation: "最終面接の最後に、データセンター物流で必要な多部署連携と意思決定の進め方を理解するために質問します。",
      task: "安全性、正確性、スピードなどの優先順位が競合する場面での協働方法を把握します。",
      action: "関係者間の情報共有、エスカレーション、意思決定の基準について質問します。",
      result: "物流業務が単独では完結しないことを理解し、他チームと信頼関係を築いて貢献したい姿勢を示せます。",
      answer: "Thank you. I have a question. How does this team work with technicians, facilities, security, and other stakeholders when priorities conflict?\nI ask because many of my past projects required balancing safety, accuracy, speed, and continuous improvement across different teams.",
      followUps: ["Who makes the final decision when priorities conflict?", "How are urgent issues escalated?", "What helps teams build trust with one another?"]
    }
  ];

  window.DEFAULT_CARDS = window.DEFAULT_CARDS.map((card) => ({ ...card, ...(expandedAnswers[card.id] || {}) }));
  const knownIds = new Set(window.DEFAULT_CARDS.map((card) => card.id));
  [...newFailureCards, ...interviewerQuestionCards].forEach((card) => {
    if (!knownIds.has(card.id)) window.DEFAULT_CARDS.push(card);
  });

  // 面接の目的別に、カードを一目で探せる5つのタグへ整理する。
  const categoryById = {
    intro: "先方からの質問",
    "why-aws": "志望動機",
    "cost-rpa": "成功体験",
    "ec-master": "成功体験",
    "samsonite-sales": "成功体験",
    "jl-license": "成功体験",
    "china-jv": "成功体験",
    "staff-voice": "成功体験",
    "grip-file-transfer": "成功体験",
    "viva-heart-drop-ship": "成功体験",
    "jl-direct-import": "成功体験",
    "ec-image-automation": "成功体験",
    "yolo-pivot": "失敗体験",
    "order-import-regression": "失敗体験",
    inventory: "先方からの質問",
    delay: "先方からの質問",
    safety: "先方からの質問",
    "split-shipment-timing": "失敗体験",
    "gift-catalog-inventory": "失敗体験",
    "trademark-governance": "失敗体験",
    "italy-agent-negotiation": "失敗体験",
    "interviewer-success-criteria": "こちらからの質問",
    "interviewer-current-challenges": "こちらからの質問",
    "interviewer-operational-metrics": "こちらからの質問",
    "interviewer-improvement-process": "こちらからの質問",
    "interviewer-cross-functional-priorities": "こちらからの質問"
  };

  window.DEFAULT_CARDS.forEach((card) => {
    card.category = categoryById[card.id] || "先方からの質問";
  });

  const expandedTranslations = {
    "cost-rpa": "2024年、グリップインターナショナルでは、基幹システムの小さな機能追加やデータ加工も外部ベンダーへ外注していました。軽微な案件でも30万円から200万円の費用がかかり、見積もりとベンダーの予定を待つため、現場への対応も遅れていました。私は、すべての技術的な不確実性が解消するまで待つのは遅すぎると考え、解像度が粗い段階で内製化へ踏み出しました。自らRPAとPower Queryを学び、定型的な入力・データ整形の手順を詳細に洗い出して、再利用できる自動化へ変えました。私自身が実演することで、チームにも実現可能性を示しました。2年間でチームは約150本のRPAと100本以上のPower Queryを作成し、多くの小規模改善とデータ加工を内製化しました。外注依存を減らし、自分の部署と他部署を合わせて約4名分の人件費に相当する削減を実現しました。可逆的で管理可能な最初の一歩であれば、完璧な情報を待つより早く行動する価値があると学びました。",
    "ec-master": "2024年、ECサイト、百貨店、チェーンストア向けの商品マスタを、毎シーズン約50種類の形式で作成していました。社内準備と外注の工程が複雑化し、リードタイムは約1.5か月、外注費は百貨店・チェーンストア向け年間600万円、自社EC向け年間300万円に達していました。私はヒアリングだけでなく、社内担当と外注先の間の全工程に入りました。そこで、担当者が仕様書から採寸・組成を目視で抜き出し、外注先が見やすさのためだけに罫線や網掛けを手作業で加えていることを見つけました。行き先のシステムに必要なのは見栄えではなく構造化されたデータだと判断し、装飾作業を廃止しました。仕様書システムから出力したCSVをPower Queryで各インポート形式へ変換する仕組みを作り、手作業の受け渡しをなくしました。その結果、リードタイムを約1.5か月から約1週間へ短縮し、年間900万円の外注費をゼロにしました。",
    "samsonite-sales": "2009年8月、サムソナイトジャパンで伊藤忠リテイルリンクを担当しました。同社はJAL、JTB、ハンズ、ロフトなどに商品を流通させるディストリビューターでしたが、営業体制が弱く月商は約250万円でした。私は在庫リスクを抑えるためディストリビューター制は維持しつつ、営業活動を変えることにしました。社内にいる時間を減らし、本部バイヤーや店舗担当者との接点を増やし、自ら店頭販売も行ってPOS実績を作りました。ロフトでは売上4番手の池袋店に絞り、週2回の訪問と月1回の週末販売を実施しました。池袋店が3番手、時には2番手まで上がると本部バイヤーの注目も高まりました。私はニューヨーク市観光局へ直接提案して無償賞品を確保し、主要約30店舗でイベントを実施しました。月商は2009年12月に1,000万円、2010年2月に1,500万円、同年9月には3,000万円超へ伸び、約1年で開始時の10倍超になりました。",
    "jl-license": "2015年頃、J.LINDEBERGの日本におけるブランド責任者として、本国の商品構成と日本市場のずれに対応しました。本国にはバッグやキャディーバッグが少なく、北欧サイズのウェアは日本人には長く、冬物ゴルフウェアも限られていました。私は日本向けライセンス商品の新規事業を提案し、ストックホルムでデザイン案、素材サンプル、売上試算を使って本国コレクションの空白を説明しました。既存の買付額を維持しつつ本国にもロイヤリティ収入が入ることを示し、承認を得ました。英語が流暢ではなかったため、資料と想定問答を英語で徹底的に準備しました。社内では選任デザイナーを増やさず、当初は私がデザインも兼任し、商社と主要2工場の協力、仕様書作成の体制、ロゴ入りファスナー・ボタンの直接調達ルートを整えました。初年度は雑貨で年間上代約5,000万円、2年目はウェアを加えて約50品番・1億1,000万円、3年目には社内デザインチームへ移管し1億5,000万円まで拡大しました。",
    "china-jv": "2011年頃、伊藤忠商事の提案により中国で自社ブランドを販売する3社合弁会社を立ち上げ、私は事業責任者として契約締結と販売計画を担当しました。自社は日本からの輸出を守りたく、一方で中国市場ではゴルフがまだ発展途上のため現地ライセンスのタウンウェアも必要でした。加えて、通常の顧問法律事務所は伊藤忠商事も顧客だったため利用できませんでした。伊藤忠商事作成の英文ドラフトをもとに、出資契約、定款、販売代理店契約、ライセンス契約など約100ページを約1週間で翻訳し、独立した弁護士と精査しました。販売代理店契約には年度ごとの最低購入金額を入れ、自社の輸出売上を確保しながら、輸入品と現地ライセンス品の現実的な構成を合意しました。約半年で契約を締結し、上海、杭州、深圳から展開して約2年で50店舗、月商約5,000万円まで拡大しました。",
    "staff-voice": "2026年5月、EC部から商品ページに実店舗スタッフのおすすめコメントを載せたいという相談を受けました。店舗スタッフにはPCよりスマートフォンに慣れている人が多い一方、ECカートへの登録は本部のPC作業が前提でした。直営店運営にも関わっていた私は、店舗の業務サイクルを踏まえ、情報収集はスマホ中心にすべきだと判断しました。Google Apps Scriptで、コメントをスプレッドシート、画像をGoogle Driveへ集めるアプリを作りました。さらに、ECカートで必要なHTML形式にコメントとスタッフ名を自動で整形するCSV出力と、画像のリネーム・リサイズを行うPythonスクリプトを作りました。約2週間でフロントエンド、CSV出力、画像処理を完成させ、ECチームの実働はほぼゼロで、必要な情報を商品ページへ円滑に実装できました。",
    "grip-file-transfer": "2026年6月、有料の大容量ファイル転送サービスを解約した結果、社員がメール添付や無料サービスを個別に使う状態になりました。情報流出の懸念に加え、受取側には広告やポップアップの不便さがありました。私は新たな有料サービスを導入せず、安全で使いやすい代替手段を作る必要があると考えました。調査を通じ、組織で共通利用できるSharePointと、ポータル型アプリを動かせるAzureを採用しました。既存のMicrosoftアカウントと親和性が高く、受取側にもSharePointと表示される安心感があると考えました。ドラッグ＆ドロップ、期限後のダウンロードリンク自動無効化、重要度に応じたパスワード有無を実装し、既存サービスに近い使い勝手を再現しました。SharePointとAzureは初めてでしたが約1か月でリリースし、社員に積極的に利用されています。",
    "viva-heart-drop-ship": "2016年頃、韓国の販売代理店から、中国・ベトナムの生産地から韓国へ直接輸出してほしいという要望を受けました。貿易協定により関税率がゼロになったためです。しかし、商社、工場、フォワーダーの協力とインボイス変更が必要で、原産地証明も工場ごとに対応する必要がありました。中国の一部地域では証明書発行に政府許可が必要でした。社内に前例がなかったため、中国・ベトナム・日本・韓国に拠点を持つ国際フォワーダーと何度も打合せを行い、手続きと工場別の課題を整理してマニュアル化しました。そのマニュアルを使い、2社目・3社目の商社へも展開しました。韓国向け輸出の約90％を中国・ベトナムからの直接輸出へ切り替え、年間販売額約6,500万円の約6％、年間約400万円のコスト削減を実現しました。",
    "jl-direct-import": "2019年、J.LINDEBERGは商社経由で輸入していましたが、百貨店中心からスポーツチェーンへの展開を広げるため、販売価格を抑える必要がありました。私は直接輸入への切替を進めるため、年間仕入れコストを項目別に分解し、削減目標、価格帯、マーケティング計画を立てました。年間FOB輸入額は約110万ユーロで、関税・運賃を除く商社マージンは約15％でした。J.LINDEBERG社と4か月交渉して契約を改訂し、既存のドロップシップの知見を使って為替予約と新フォワーダーとの業務を整えました。英語と輸入実務を両方経験した社員がいなかったため、英語が使える新卒採用担当者を抜擢し、1シーズンかけて書類、船便予約、国内配送を一緒に進めました。約2か月の準備後に直接輸入へ切り替え、年間約2,200万円のコストを削減しました。",
    "ec-image-automation": "2026年、ECチームは商品画像の準備に多くの時間を使っており、休職者の発生により販促へ十分な時間を割けなくなっていました。私は自分の部署へ業務を移管して詳細を把握してから、省力化に取り組みました。実際には、手作業が多く、フローもファイル名のルールも標準化されていませんでした。ECチームとルールを作り直し、各段階をスクリプト化して毎晩バッチ処理を動かしました。最も難しかったのは輸入ブランド画像を商品単体、モデル着用、商品ページ上部向けの正面画像に分類してリネームすることでした。YOLOを約50回調整しても精度が85％で止まったため、GeminiのマルチモーダルAPIへ切り替え、約30回の調整で99％に到達しました。輸入画像の取得・修正、国内撮影分の処理、ECカートマスタへのファイル名配置、卸先向け公開ストレージ同期の4工程を自動化し、従来1人で約1か月かかった作業を約2時間にしました。",
    "yolo-pivot": "2026年、ECサイト用のインポートブランド画像を整理する業務を改善しました。シーズンごとに約2万枚の画像があり、商品単体かモデル着用かを目視で分類し、ファイル名を変更していました。私は画像認識で代表的なYOLOを選びましたが、必要精度や切替基準を明確にしないまま、約1週間で50回ほど調整を続けました。精度は85％で頭打ちでしたが、YOLOが正しい解決策だと思い込み、切替が遅れました。すべてテスト段階に留めたため、誤分類画像が公開されることはありませんでした。限界を認識した後、マルチモーダルAIへ切り替え、約30回の調整で99％の精度を達成し、安全に実運用へ移行できました。この経験から、技術検証では必要精度、代表的なテストデータ、検証期限、切替条件を事前に決めるようにしています。",
    "order-import-regression": "2022年、展示会受注データを活用する販売管理システムの機能拡張を外部ベンダーと進めました。新機能自体は検証を終えてローンチしましたが、既存の受注取込機能は安定していると考え、関連する回帰テストを十分に行いませんでした。その後、同日に同一内容の追加受注があり、受注番号だけが異なる場合、既存ロジックでは受注番号を一意の識別要素として扱っていないため、後から取り込んだデータが先のデータを上書きする可能性があると分かりました。私は要件とテストの不足を認め、CSVを直接取り込む前に、Power Queryで受注番号を除いた重複データを検知する工程を追加しました。重複があれば受注システム側でデータを正しく区別できるよう調整し、再出力・取込を行う運用です。この事前チェックで取込漏れを防げるようになりました。以後は、一意キー、新規追加・更新・重複時の動き、関連する既存機能への影響を必須の確認・テスト項目にしています。"
  };

  Object.entries(expandedTranslations).forEach(([id, answerJa]) => {
    window.TRANSLATIONS[id] = { ...window.TRANSLATIONS[id], answerJa };
  });

  Object.assign(window.TRANSLATIONS, {
    "split-shipment-timing": {
      questionJa: "最初の計画が顧客のニーズを満たさなかった経験を教えてください。何を変えましたか。",
      answerJa: "2019年、J.LINDEBERGを商社経由から直接輸入へ切り替えた最初のシーズンに、ポロシャツの約80％を台湾工場から日本へ輸入しました。輸入コストを抑えるため、私は全商品の生産完了を待って一括出荷する計画を受け入れました。しかしコスト面では効率的でも、日本への入荷が店頭展開に対して約3週間遅くなってしまいました。私は輸入コストに狭く焦点を当て、適切な時期に店頭へ商品を届ける価値を十分に考慮できていませんでした。次シーズンからは、生産完了品から3回に分けて輸入する方式へ変更し、物流コストの増加は輸入経費計画に事前にバッファとして組み込みました。その結果、翌シーズンは正常な店頭展開に間に合い、前シーズンから約3週間改善しました。この経験から、サプライチェーンの判断では運賃だけでなく、販売機会、顧客が商品を入手できる時期、遅延の影響を同時に評価するようにしています。"
    },
    "gift-catalog-inventory": {
      questionJa: "在庫計画で誤りをした経験を教えてください。どのように対処し、何を学びましたか。",
      answerJa: "2008年、サムソナイトジャパンで通販カタログ会社へ提案し、伊勢丹向けギフトカタログにスーツケース300本が採用されました。商品の最低生産ロットは2,000本でした。当時、香港のアジア向けディストリビューションセンターには2,000本以上の在庫表示がありました。私は共有在庫を日本向けに確保済みの在庫のように扱い、即時の在庫引当や新規生産を行いませんでした。後で日本向けに手配できると考えたのです。しかし1週間後には在庫がゼロとなり、新規に2,000本を生産せざるを得ませんでした。顧客への300本の納品遅延はありませんでしたが、その後に1,700本の余剰が生じ、通常販売できたのは約200本、残る約1,500本はアウトレット販売となり粗利を損ねました。私は販売時点で在庫を確保していれば避けられた失敗だと認めました。以後は販売確定前に即時引当の可否を確認し、長期確保が難しい場合は顧客へ事前に説明しています。"
    },
    "trademark-governance": {
      questionJa: "製品やプロセスのリスクに遅れて気づいた経験を教えてください。どのように対応しましたか。",
      answerJa: "2016年、自社ブランドの数年前の商品について、第三者から図形商標を侵害しているという内容証明を受け取りました。関係したデザイナーはすでに退職していましたが確認したところ、相手企業の商品を参考にデザインを作成していたことが分かりました。当時リーガル業務も担当していた私は、全企画の知的財産リスクを能動的に確認する仕組みや、デザインに関するリーガル相談を共有で記録する仕組みを作れていなかったと認識しました。顧問法律事務所と対応し、賠償金の支払いを含めて解決しました。その後、全ブランドの企画担当者へ商標権・著作権に関する定期的な情報発信を始め、個別相談と判断を共有ファイルサーバーに残す運用を作りました。法的責任を個人の記憶や在籍に依存させず、問題が起きる前に簡潔で繰り返せる統制を作る必要があると学びました。"
    },
    "italy-agent-negotiation": {
      questionJa: "前に進まなかったパートナーシップについて教えてください。そこから何を学びましたか。",
      answerJa: "2017年、ロサーセンブランドの責任者として、フィレンツェのPitti Uomoに半年ごとに出展し、イタリアのニットメーカーと販売代理店・ライセンス契約の交渉を始めました。仮契約まで進んだ後、展示会の間は主にメールで交渉し、対面で会うのは半年に一度でした。私は自社に最も有利な条件を確保することに意識を置き過ぎ、自分が相手の立ち上げ条件を十分に確認できていませんでした。最終的に相手は正式契約を見送り、メールでの交渉を続けても回復できませんでした。私は、複雑な海外パートナーシップではメールだけでは信頼と相互理解を十分に作れないこと、最初から条件を最大化するよりも小さく段階的に始める選択肢が必要だと学びました。2022年、台湾とタイの新しい販売代理店ビジネスを始めた際には、より小さな数値計画から始める設計をリーガル担当として支援しました。"
    },
    "interviewer-success-criteria": {
      questionJa: "このポジションで、入社後6か月から1年の間に、特に成果を出している方にはどのような共通点がありますか。",
      answerJa: "ありがとうございます。質問があります。このポジションで、入社後6か月から1年の間に、特に成果を出している方にはどのような共通点がありますか。実際にどのような状態が成功と見なされるのか、また早く貢献するためにどこへ力を注ぐべきかを理解したいと考えています。"
    },
    "interviewer-current-challenges": {
      questionJa: "現在、チームとして最も難しい、あるいは繰り返し発生しやすい物流上の課題はどのようなことでしょうか。",
      answerJa: "ありがとうございます。質問があります。現在、チームとして最も難しい、あるいは繰り返し発生しやすい物流上の課題はどのようなことでしょうか。私は根本原因を見つけてプロセスを改善することに関心があるため、自分の経験をどのような領域で最も活かせるかを理解したいと考えています。"
    },
    "interviewer-operational-metrics": {
      questionJa: "このチームでは、在庫精度、対応スピード、安全性、品質などの中で、特に重視している運用指標は何でしょうか。また、このポジションはその指標にどのように貢献しますか。",
      answerJa: "ありがとうございます。質問があります。このチームでは、在庫精度、対応スピード、安全性、品質などの中で、特に重視している運用指標は何でしょうか。また、このポジションはその指標にどのように貢献しますか。私自身、これまで安全性、正確性、スピード、継続的改善のバランスを、測定可能な成果として追求してきたためです。"
    },
    "interviewer-improvement-process": {
      questionJa: "チームメンバーが業務改善の機会を見つけた場合、改善案はどのように検証され、チーム内や他拠点へ展開されていくのでしょうか。",
      answerJa: "ありがとうございます。質問があります。チームメンバーが業務改善の機会を見つけた場合、改善案はどのように検証され、チーム内や他拠点へ展開されていくのでしょうか。私には業務自動化の経験があるため、現場での改善をどのように信頼できる標準プロセスへ変えていくのかを理解したいと考えています。"
    },
    "interviewer-cross-functional-priorities": {
      questionJa: "物流チームが、技術者、設備、セキュリティなどの他チームと連携する際、優先順位が競合した場合には、どのように意思決定や調整をされていますか。",
      answerJa: "ありがとうございます。質問があります。物流チームが、技術者、設備、セキュリティなどの他チームと連携する際、優先順位が競合した場合には、どのように意思決定や調整をされていますか。私自身、これまでのプロジェクトで、安全性、正確性、スピード、継続的改善のバランスを、複数チームと取りながら進めてきたためです。"
    }
  });
})();
