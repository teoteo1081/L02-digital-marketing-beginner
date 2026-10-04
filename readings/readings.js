// Thư viện bài đọc Digital Marketing (song ngữ, luyện TOEIC).
// Mỗi bài gồm: phần đọc nhanh tiếng Việt, 1 đoạn tiếng Anh kiểu TOEIC Part 7,
// từ vựng, 3 câu hỏi kiểu TOEIC và nguồn tham khảo.
// File này chỉ chứa DỮ LIỆU, không có giao diện, để trang khác (ví dụ game WordLoop)
// cũng nạp lại được: <script src=".../readings/readings.js"></script> rồi dùng window.DM_READINGS.
window.DM_READINGS = [
  {
    id: "00",
    title: "Cài đặt công cụ: GA4 là camera đếm khách",
    vi: [
      "GA4 (Google Analytics 4) là công cụ miễn phí giúp bạn biết: ai vào website, từ đâu tới, xem trang nào.",
      "GA4 có 3 tầng: Tài khoản (tủ hồ sơ) → Tài sản/Property (1 cuốn sổ báo cáo) → Luồng dữ liệu (đường ống đổ số liệu vào sổ, có mã G-…).",
      "Muốn GA4 đếm được, phải dán 'thẻ Google' vào website. Giống như lắp camera đếm khách ở cửa tiệm.",
      "Vừa gắn xong thì xem mục Thời gian thực (Realtime) để kiểm tra. Các báo cáo khác cần 24–48 giờ mới có số.",
      "Khi làm cho khách hàng: để khách giữ tài khoản GA4, mình chỉ xin quyền Editor. Dữ liệu là của khách."
    ],
    example: "Bạn mở WordLoop trên điện thoại, 1 phút sau Realtime hiện '1 người, Vietnam'. Đó chính là bạn → thẻ đã gắn đúng.",
    en: {
      type: "E-mail",
      heading: "To: Web Team | From: Linh Tran, Marketing Manager | Subject: Website tracking",
      text: "Dear team,\n\nStarting next Monday, we will begin measuring visits to our new website with Google Analytics. Kevin has already created the account and added the tracking code to every page. To confirm that the setup is working, please open the website on your phone and check the Realtime report. If the report shows your visit within two minutes, the installation is complete.\n\nPlease note that the standard reports will not display any data for the first 24 to 48 hours. This is normal, so there is no need to contact the vendor during this period.\n\nFinally, our client will remain the owner of the account. We have only been granted editor access, and we must not change the ownership settings.\n\nBest regards,\nLinh"
    },
    vocab: [
      { en: "measure", vi: "đo lường", ex: "We measure visits with GA4." },
      { en: "tracking code", vi: "mã theo dõi (thẻ gắn vào web)", ex: "Add the tracking code to every page." },
      { en: "confirm", vi: "xác nhận", ex: "Please confirm the setup." },
      { en: "installation", vi: "việc cài đặt", ex: "The installation is complete." },
      { en: "vendor", vi: "nhà cung cấp", ex: "Contact the vendor if there is a problem." },
      { en: "grant (access)", vi: "cấp (quyền)", ex: "We were granted editor access." },
      { en: "ownership", vi: "quyền sở hữu", ex: "Do not change the ownership settings." }
    ],
    questions: [
      { q: "What is the main purpose of the e-mail?", options: ["To announce a new website design", "To explain how to check a tracking setup", "To request access to a client's account", "To complain about a vendor"], answer: 1, explain: "Cả e-mail nói về việc kiểm tra mã theo dõi (check the Realtime report) → B." },
      { q: "According to the e-mail, what should staff do if no data appears in standard reports on the first day?", options: ["Call the vendor", "Reinstall the code", "Wait, because it is normal", "Create a new account"], answer: 2, explain: "'This is normal, so there is no need to contact the vendor' → chờ thôi, C." },
      { q: "The word \"granted\" in paragraph 3 is closest in meaning to", options: ["given", "refused", "sold", "requested"], answer: 0, explain: "grant = cấp, cho → given (A). Dạng câu 'gần nghĩa nhất' rất hay gặp trong TOEIC Part 7." }
    ],
    sources: [
      { name: "Google — Tài khoản GA4 Demo", url: "https://support.google.com/analytics/answer/6367342?hl=vi" },
      { name: "Google — Nhóm kênh mặc định (Direct, Unassigned…)", url: "https://support.google.com/analytics/answer/9756891?hl=vi" }
    ]
  },
  {
    id: "01",
    title: "Hành trình khách hàng ở Việt Nam",
    vi: [
      "Digital marketing = đưa đúng lời nhắn tới đúng người, đúng lúc, và đo được kết quả.",
      "Sách nước ngoài hay vẽ hành trình mua hàng như đường thẳng: thấy quảng cáo → vào web → mua.",
      "Ở Việt Nam thường vòng vèo hơn: xem TikTok → đọc review trong group → nhắn Zalo hỏi giá → so giá trên Shopee → mới mua.",
      "Mỗi chỗ khách ghé qua gọi là 1 'điểm chạm'. Bỏ trống 1 điểm chạm (ví dụ nhắn Zalo không ai trả lời) là mất khách dù quảng cáo chạy tốt."
    ],
    example: "Bạn thấy 1 khoá học tiếng Anh trên TikTok, vào group hỏi 'có ai học rồi chưa', nhắn Zalo hỏi học phí, rồi mới đăng ký. Đó là 4 điểm chạm.",
    en: {
      type: "Article",
      heading: "Online shoppers take the long way",
      text: "A recent survey of 2,000 online shoppers in Vietnam found that most customers do not buy a product the first time they see it. Instead, they visit an average of four different places before making a decision. A typical customer first discovers a product in a short video, then reads reviews in an online community group, and later sends a message to the seller to ask about the price and delivery.\n\nMany shoppers also compare prices on two or more e-commerce platforms. \"Businesses often spend most of their budget on advertising,\" said one researcher. \"However, they lose customers when nobody answers their messages quickly.\" The study recommends that small businesses assign at least one staff member to respond to customer inquiries within ten minutes."
    },
    vocab: [
      { en: "survey", vi: "cuộc khảo sát", ex: "A survey of 2,000 shoppers." },
      { en: "discover", vi: "khám phá, phát hiện ra", ex: "Customers discover products in videos." },
      { en: "compare", vi: "so sánh", ex: "They compare prices." },
      { en: "platform", vi: "nền tảng", ex: "e-commerce platforms" },
      { en: "assign", vi: "phân công", ex: "Assign one staff member." },
      { en: "inquiry", vi: "câu hỏi, yêu cầu thông tin", ex: "respond to customer inquiries" },
      { en: "respond", vi: "trả lời, phản hồi", ex: "Respond within ten minutes." }
    ],
    questions: [
      { q: "What is the article mainly about?", options: ["How shoppers find and decide on products", "A new e-commerce platform", "The cost of video advertising", "Training for sales staff"], answer: 0, explain: "Bài nói về quá trình khách tìm và quyết định mua → A." },
      { q: "According to the researcher, why do businesses lose customers?", options: ["Their prices are too high", "Their messages are not answered quickly", "Their videos are too long", "They have no reviews"], answer: 1, explain: "'they lose customers when nobody answers their messages quickly' → B." },
      { q: "What does the study recommend?", options: ["Spending more on advertising", "Opening a physical store", "Replying to inquiries within ten minutes", "Selling on only one platform"], answer: 2, explain: "Câu cuối: respond … within ten minutes → C." }
    ],
    sources: []
  },
  {
    id: "02",
    title: "Phễu bán hàng (Funnel)",
    vi: [
      "Phễu mô tả số người giảm dần qua từng bước: 10.000 người thấy → 500 bấm vào → 50 nhắn tin → 5 người mua.",
      "4 giai đoạn: Nhận biết (Awareness) → Cân nhắc (Consideration) → Mua (Conversion) → Giữ chân (Retention).",
      "Mỗi giai đoạn cần nội dung khác nhau. Chỉ đăng ảnh sản phẩm cho mọi giai đoạn là lỗi rất hay gặp.",
      "Học phễu để tìm chỗ rớt khách nhiều nhất và sửa đúng chỗ đó, thay vì cứ đổ thêm tiền quảng cáo.",
      "TOFU/MOFU/BOFU chỉ có 3 tầng (đầu, giữa, đáy phễu). Giữ chân khách nằm sau đáy phễu."
    ],
    example: "Quán cà phê có nhiều người bấm vào quảng cáo nhưng ít ai đặt hàng → lỗi có thể nằm ở trang đặt hàng hoặc ở khâu trả lời tin nhắn, không phải ở quảng cáo.",
    en: {
      type: "Memo",
      heading: "MEMO — To: Sales and Marketing | Re: Third-quarter results",
      text: "Our advertisements reached over 120,000 people in the third quarter, which is 30 percent more than in the previous quarter. However, sales increased by only 2 percent. After reviewing the data, we found that the problem is not the advertisements themselves. Many visitors left our order page before completing a purchase because the page took too long to load.\n\nTherefore, we will not increase the advertising budget next quarter. Instead, the IT department will redesign the order page, and the customer service team will introduce a loyalty program to encourage repeat purchases. Please submit your suggestions to Ms. Pham by October 15."
    },
    vocab: [
      { en: "quarter", vi: "quý (3 tháng)", ex: "the third quarter" },
      { en: "previous", vi: "trước đó", ex: "the previous quarter" },
      { en: "complete a purchase", vi: "hoàn tất việc mua", ex: "Visitors left before completing a purchase." },
      { en: "budget", vi: "ngân sách", ex: "the advertising budget" },
      { en: "loyalty program", vi: "chương trình khách hàng thân thiết", ex: "introduce a loyalty program" },
      { en: "repeat purchase", vi: "lần mua lại", ex: "encourage repeat purchases" },
      { en: "submit", vi: "nộp, gửi", ex: "Submit your suggestions by October 15." }
    ],
    questions: [
      { q: "What problem is identified in the memo?", options: ["The ads reached too few people", "The order page loaded slowly", "The products were too expensive", "The staff were not trained"], answer: 1, explain: "'the page took too long to load' → B. Đây đúng là 'chỗ rớt khách' ở giai đoạn mua." },
      { q: "What will the company NOT do next quarter?", options: ["Redesign the order page", "Start a loyalty program", "Increase the advertising budget", "Collect suggestions"], answer: 2, explain: "'we will not increase the advertising budget' → C. Câu hỏi có chữ NOT rất hay gặp trong TOEIC." },
      { q: "Which funnel stage does the loyalty program target?", options: ["Awareness", "Consideration", "Conversion", "Retention"], answer: 3, explain: "Khuyến khích mua lại (repeat purchases) = giữ chân → Retention (D)." }
    ],
    sources: []
  },
  {
    id: "03",
    title: "Chân dung khách hàng (Buyer Persona)",
    vi: [
      "Persona là bức chân dung của 1 khách hàng tiêu biểu: họ là ai, muốn gì, lo gì, hay lướt mạng ở đâu.",
      "Lỗi lớn nhất: tự đoán ('chắc là nữ 25–35 tuổi') mà không dựa vào dữ liệu thật.",
      "Nguồn dữ liệu miễn phí: tin nhắn của khách cũ, bình luận, review của đối thủ, câu hỏi trong group, khảo sát ngắn.",
      "Khung 5 phần: thông tin cơ bản → mong muốn → nỗi lo/rào cản → thói quen online → điều khiến họ quyết định mua.",
      "Người mới chỉ nên làm 1 persona chính trước."
    ],
    example: "Đọc lại 20 tin nhắn Zalo cũ, thấy 12 người hỏi 'có học thử không' → nỗi lo chính là sợ mất tiền mà học không hợp. Đó là dữ liệu thật cho persona.",
    en: {
      type: "Advertisement",
      heading: "Workshop: Know Your Customer",
      text: "Are your marketing messages failing to reach the right people? Join our half-day workshop, \"Know Your Customer,\" on Saturday, November 8, at the Riverside Business Center.\n\nParticipants will learn how to build a customer profile using real information, such as past orders, customer reviews, and short surveys. No prior experience is required. Each participant will receive a free template and a 30-minute consultation with one of our instructors.\n\nThe registration fee is $40, or $30 for members of the Small Business Association. Seating is limited to 25 people, so early registration is recommended. To sign up, visit our website before November 1."
    },
    vocab: [
      { en: "participant", vi: "người tham gia", ex: "Each participant will receive a template." },
      { en: "profile", vi: "hồ sơ, chân dung", ex: "a customer profile" },
      { en: "prior experience", vi: "kinh nghiệm trước đó", ex: "No prior experience is required." },
      { en: "consultation", vi: "buổi tư vấn", ex: "a 30-minute consultation" },
      { en: "registration fee", vi: "phí đăng ký", ex: "The registration fee is $40." },
      { en: "limited", vi: "có giới hạn", ex: "Seating is limited." },
      { en: "recommend", vi: "khuyên, đề nghị", ex: "Early registration is recommended." }
    ],
    questions: [
      { q: "What will participants learn?", options: ["How to design a website", "How to describe customers using real data", "How to hire instructors", "How to join an association"], answer: 1, explain: "'build a customer profile using real information' → B." },
      { q: "How much does a member of the Small Business Association pay?", options: ["$25", "$30", "$40", "Nothing"], answer: 1, explain: "'$30 for members' → B. Câu hỏi chi tiết con số: đọc kỹ chữ 'or'." },
      { q: "Why is early registration recommended?", options: ["The price will increase", "The number of seats is limited", "The workshop may be canceled", "Templates are limited"], answer: 1, explain: "'Seating is limited to 25 people, so early registration is recommended' → B." }
    ],
    sources: []
  },
  {
    id: "04",
    title: "Chọn kênh ở Việt Nam",
    vi: [
      "Facebook: phủ rộng nhất, group cộng đồng mạnh. Zalo: nhắn tin 1-1, hợp chốt đơn và tư vấn. TikTok: video ngắn, tiếp cận nhanh người trẻ. Google: bắt đúng lúc khách đang tự tìm kiếm. Shopee/TikTok Shop: khách hay vào so giá.",
      "Chọn kênh bằng 3 câu hỏi: Khách của mình hay ở đâu? Sản phẩm cần 'được thấy' hay 'được tìm'? Mình có đủ sức chăm kênh đó không?",
      "Người mới chỉ cần: 1 kênh tìm khách mới + 1 kênh chốt đơn (thường là Zalo/Messenger) + 1 kênh giữ chân khách."
    ],
    example: "Dịch vụ sửa máy lạnh: khách chỉ tìm khi máy hỏng → hợp Google Search hơn TikTok.",
    en: {
      type: "E-mail",
      heading: "Subject: Re: Which channel should we use?",
      text: "Hi Minh,\n\nThank you for your question about our marketing plan. Since our repair service is something people only look for when they have a problem, I suggest that we focus on search advertising first. Video platforms are better for products that look attractive, such as clothing or food, but they are less effective for emergency services like ours.\n\nIn addition, we should set up a messaging account so that customers can contact us directly after they find us. I would not recommend opening accounts on every platform at once, as we do not have enough staff to update them regularly.\n\nLet's discuss the details at Thursday's meeting.\n\nRegards,\nAn"
    },
    vocab: [
      { en: "focus on", vi: "tập trung vào", ex: "Focus on search advertising first." },
      { en: "attractive", vi: "hấp dẫn, bắt mắt", ex: "products that look attractive" },
      { en: "effective", vi: "hiệu quả", ex: "less effective for emergency services" },
      { en: "emergency", vi: "khẩn cấp", ex: "emergency services" },
      { en: "directly", vi: "trực tiếp", ex: "contact us directly" },
      { en: "regularly", vi: "đều đặn", ex: "update them regularly" },
      { en: "details", vi: "chi tiết", ex: "discuss the details" }
    ],
    questions: [
      { q: "What kind of business does An work for?", options: ["A clothing store", "A restaurant", "A repair service", "A video production company"], answer: 2, explain: "'our repair service' → C." },
      { q: "Why does An NOT want to open accounts on every platform?", options: ["It is too expensive", "There are not enough staff", "Customers do not use them", "The manager disagrees"], answer: 1, explain: "'we do not have enough staff to update them' → B. Đúng nguyên tắc 'chọn kênh mình chăm được'." },
      { q: "What will most likely happen on Thursday?", options: ["A meeting about the plan", "A product launch", "A repair visit", "A staff training"], answer: 0, explain: "'Let's discuss the details at Thursday's meeting' → A. Dạng câu 'most likely' = suy luận từ bài." }
    ],
    sources: []
  },
  {
    id: "05",
    title: "Quảng cáo Facebook & Instagram",
    vi: [
      "Quảng cáo Meta có 3 tầng: Chiến dịch (chọn mục tiêu) → Nhóm quảng cáo (chọn người xem, tiền, lịch) → Quảng cáo (hình, chữ, nút bấm).",
      "Meta hiện có 6 mục tiêu: Nhận biết, Lưu lượng truy cập, Tương tác, Khách hàng tiềm năng, Quảng bá ứng dụng, Doanh số.",
      "Chọn người xem: theo đặc điểm (tuổi, nơi ở, sở thích) → người đã từng tương tác với mình → người 'giống' khách cũ.",
      "Lúc mới chạy, Facebook cần 'học' (learning phase): khoảng 50 kết quả trong 7 ngày. Ngân sách nhỏ khó đạt, điều đó bình thường. Đừng sửa quảng cáo liên tục.",
      "Nội dung tốt = câu mở đầu gây chú ý + lợi ích rõ + bằng chứng (review) + nút kêu gọi cụ thể."
    ],
    example: "Thay vì nút 'Tìm hiểu thêm', dùng 'Nhắn Zalo nhận lịch học thử' nếu mục tiêu là có tin nhắn.",
    en: {
      type: "Text message chain",
      heading: "Mai Nguyen [9:12 A.M.] / David Lee [9:15 A.M.]",
      text: "Mai Nguyen [9:12 A.M.]: Hi David, our new ad campaign started three days ago, but the results are still low. Should I change the image and the target audience today?\n\nDavid Lee [9:15 A.M.]: I'd wait a little longer. The system is still in the learning phase, so results are usually unstable during the first week. If you make major changes now, it will have to start learning again.\n\nMai Nguyen [9:16 A.M.]: I see. But our budget is quite small. Is that a problem?\n\nDavid Lee [9:18 A.M.]: Not really. With a small budget, it may take longer to collect enough results. Let's review the data together next Monday and decide then.\n\nMai Nguyen [9:19 A.M.]: Sounds good. I'll prepare a report."
    },
    vocab: [
      { en: "campaign", vi: "chiến dịch", ex: "Our new ad campaign started." },
      { en: "target audience", vi: "nhóm khách hàng mục tiêu", ex: "change the target audience" },
      { en: "unstable", vi: "không ổn định", ex: "Results are usually unstable." },
      { en: "major", vi: "lớn, quan trọng", ex: "make major changes" },
      { en: "collect", vi: "thu thập", ex: "collect enough results" },
      { en: "review", vi: "xem lại, đánh giá", ex: "review the data together" },
      { en: "prepare", vi: "chuẩn bị", ex: "I'll prepare a report." }
    ],
    questions: [
      { q: "Why does David suggest waiting?", options: ["The budget has run out", "The system is still learning", "The image is already good", "Mai is going on vacation"], answer: 1, explain: "'The system is still in the learning phase' → B." },
      { q: "At 9:18 A.M., what does David mean when he writes, \"Not really\"?", options: ["A small budget is not a serious problem", "He does not understand the question", "He disagrees with the report", "The campaign is not real"], answer: 0, explain: "Trả lời cho câu 'Is that a problem?' → ý là 'không hẳn là vấn đề' (A). Dạng câu 'what does … mean when he writes' là đặc sản TOEIC Part 7." },
      { q: "What will Mai most likely do next?", options: ["Change the image", "Increase the budget", "Prepare a report", "Cancel the campaign"], answer: 2, explain: "'I'll prepare a report' → C." }
    ],
    sources: [
      { name: "Meta — Learning phase", url: "https://www.facebook.com/business/help/112167992830700/" },
      { name: "Meta — Cách chọn mục tiêu quảng cáo", url: "https://en-gb.facebook.com/business/help/1438417719786914" },
      { name: "Meta — Advantage+ campaign budget", url: "https://www.facebook.com/business/ads/meta-advantage-plus/budget" }
    ]
  },
  {
    id: "06",
    title: "Quảng cáo TikTok, Google & Zalo",
    vi: [
      "TikTok: quảng cáo nằm giữa video thường, nên càng tự nhiên càng hiệu quả. 3 giây đầu quyết định người xem có lướt qua không.",
      "Google Search: quảng cáo chỉ hiện khi khách tự gõ tìm → khách đang có nhu cầu thật, nhưng giá mỗi lượt bấm thường cao hơn.",
      "Từ khoá chia theo ý định: 'mua máy lọc nước' (sẵn sàng mua) khác với 'máy lọc nước loại nào tốt' (đang tìm hiểu).",
      "Zalo Ads: dẫn khách thẳng vào khung chat → hợp ngành cần tư vấn (bảo hiểm, giáo dục, bất động sản) và khách ở tỉnh, lớn tuổi hơn."
    ],
    example: "Trung tâm tiếng Anh: dùng TikTok để người trẻ biết tới, Google Search cho người gõ 'học IELTS ở đâu', Zalo để tư vấn chốt lịch học.",
    en: {
      type: "Notice",
      heading: "Notice to all marketing staff",
      text: "Beginning in January, the marketing department will divide its online advertising budget among three platforms. Short video ads will be used to introduce our brand to younger customers. Search ads will appear only when people look for keywords such as \"English course near me,\" since these customers are already interested in enrolling.\n\nFinally, messaging ads will direct customers to a chat window, where our consultants can answer questions about schedules and fees. Each team leader is responsible for reporting the cost per registration for his or her platform at the end of every month. Please contact Mr. Hoang in the finance office if you have questions about spending limits."
    },
    vocab: [
      { en: "divide … among", vi: "chia … cho", ex: "divide the budget among three platforms" },
      { en: "introduce", vi: "giới thiệu", ex: "introduce our brand" },
      { en: "enroll", vi: "đăng ký học", ex: "interested in enrolling" },
      { en: "direct (to)", vi: "dẫn tới", ex: "direct customers to a chat window" },
      { en: "consultant", vi: "nhân viên tư vấn", ex: "Our consultants can answer questions." },
      { en: "be responsible for", vi: "chịu trách nhiệm", ex: "Each leader is responsible for reporting." },
      { en: "spending limit", vi: "hạn mức chi tiêu", ex: "questions about spending limits" }
    ],
    questions: [
      { q: "What is the notice mainly about?", options: ["A new English course", "A plan for using three ad platforms", "A change in staff schedules", "A new finance manager"], answer: 1, explain: "Cả thông báo chia ngân sách cho 3 nền tảng → B." },
      { q: "Why will search ads be used?", options: ["They are the cheapest", "They reach people already interested", "They are popular with young people", "They show videos"], answer: 1, explain: "'these customers are already interested in enrolling' → B." },
      { q: "Who should staff contact about spending limits?", options: ["Team leaders", "Consultants", "Mr. Hoang", "Customers"], answer: 2, explain: "'contact Mr. Hoang in the finance office' → C." }
    ],
    sources: []
  },
  {
    id: "07",
    title: "SEO: được Google tìm thấy miễn phí",
    vi: [
      "SEO là làm cho bài viết/trang web hiện cao trên Google mà không trả tiền cho mỗi lượt bấm. Cần 2–6 tháng mới thấy rõ kết quả.",
      "Việc làm được ngay: tiêu đề chứa từ khách hay gõ, đoạn mô tả hấp dẫn, chia bài bằng tiêu đề nhỏ, trang tải nhanh, xem tốt trên điện thoại.",
      "Tìm từ khoá miễn phí: gợi ý tự động khi gõ Google, mục 'Mọi người cũng hỏi', câu hỏi trong các group.",
      "Content Pillar: 1 bài lớn bao quát 1 chủ đề + nhiều bài nhỏ đi sâu từng ý, có link qua lại.",
      "Viết cho người đọc trước, tối ưu cho Google sau."
    ],
    example: "Bài lớn 'Học TOEIC từ 0 lên 700' + các bài nhỏ 'Mẹo Part 7', '100 từ vựng TOEIC về marketing'… đều link về bài lớn.",
    en: {
      type: "Web page",
      heading: "Blog Writing Tips for Small Businesses",
      text: "Many small business owners believe that they need expensive tools to appear in search results. In fact, several useful methods are free. First, type a topic into a search engine and look at the automatic suggestions; these show the exact words that people are searching for. Second, check the \"People also ask\" section for common questions.\n\nWhen you write, use clear headings and include the main keyword in your title. However, avoid repeating the keyword too often, as this makes the article difficult to read. Most importantly, make sure your page loads quickly on mobile phones, since the majority of visitors will read it on a small screen. Results usually take several months to appear, so be patient."
    },
    vocab: [
      { en: "search engine", vi: "công cụ tìm kiếm", ex: "type a topic into a search engine" },
      { en: "suggestion", vi: "gợi ý", ex: "automatic suggestions" },
      { en: "heading", vi: "tiêu đề (đề mục)", ex: "use clear headings" },
      { en: "avoid", vi: "tránh", ex: "avoid repeating the keyword" },
      { en: "majority", vi: "phần lớn", ex: "the majority of visitors" },
      { en: "patient", vi: "kiên nhẫn", ex: "so be patient" },
      { en: "method", vi: "phương pháp", ex: "several useful methods are free" }
    ],
    questions: [
      { q: "What is the main point of the web page?", options: ["Expensive tools are necessary", "There are free ways to improve search results", "Mobile phones are too small for reading", "Blogs are no longer useful"], answer: 1, explain: "'several useful methods are free' → B." },
      { q: "Why should writers avoid repeating the keyword too often?", options: ["It costs money", "It makes the article hard to read", "Search engines delete the page", "It slows down the page"], answer: 1, explain: "'this makes the article difficult to read' → B." },
      { q: "The word \"majority\" in paragraph 2 is closest in meaning to", options: ["most", "few", "new", "young"], answer: 0, explain: "majority = phần lớn → most (A)." }
    ],
    sources: [
      { name: "Google Search Central — Hướng dẫn SEO cơ bản", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=vi" }
    ]
  },
  {
    id: "08",
    title: "Xây kênh & cộng đồng (không trả tiền)",
    vi: [
      "Quảng cáo dừng là hết khách. Kênh tự nhiên (Page, Group, Zalo OA, TikTok) xây được 'tài sản' lâu dài: người theo dõi tin mình và quay lại mua.",
      "Group: nói chuyện 2 chiều, hợp xây cộng đồng. Zalo OA: hợp chăm sóc sau bán, nhắn tin có chọn lọc, đừng spam.",
      "TikTok ưu tiên video hay hơn số người theo dõi → tài khoản mới vẫn có cơ hội.",
      "Xoay vòng 3 loại bài: kiến thức hữu ích – sản phẩm – đời thường/review khách. Đăng đều quan trọng hơn đăng nhiều."
    ],
    example: "Tuần này WordLoop đăng: Thứ 2 'mẹo nhớ 10 từ TOEIC', Thứ 4 'tính năng mới của game', Thứ 6 'bạn A lên 650 điểm nhờ ôn mỗi ngày'.",
    en: {
      type: "Online chat / Customer review",
      heading: "Review posted on the Green Leaf Café community page",
      text: "I joined the Green Leaf Café community group last spring, mainly to get discount codes. However, I stayed because the posts are genuinely useful. Every week the owner shares a simple recipe on Monday, a new menu item on Wednesday, and photos from customers on Friday. Members are encouraged to ask questions, and the staff usually reply within an hour.\n\nWhat I appreciate most is that they do not send too many messages. I receive only one update per week on my messaging app, so I never feel annoyed. Thanks to this group, I have recommended the café to at least five of my coworkers.\n\n— Posted by Thu Ha, regular customer"
    },
    vocab: [
      { en: "genuinely", vi: "thật sự", ex: "The posts are genuinely useful." },
      { en: "encourage", vi: "khuyến khích", ex: "Members are encouraged to ask questions." },
      { en: "appreciate", vi: "trân trọng, đánh giá cao", ex: "What I appreciate most is…" },
      { en: "annoyed", vi: "khó chịu", ex: "I never feel annoyed." },
      { en: "recommend", vi: "giới thiệu, khuyên dùng", ex: "I recommended the café to coworkers." },
      { en: "coworker", vi: "đồng nghiệp", ex: "five of my coworkers" },
      { en: "regular customer", vi: "khách quen", ex: "Posted by a regular customer" }
    ],
    questions: [
      { q: "Why did Thu Ha first join the group?", options: ["To get discount codes", "To learn recipes", "To find a job", "To meet coworkers"], answer: 0, explain: "'mainly to get discount codes' → A. Cẩn thận: 'However, I stayed because…' là lý do ở lại, không phải lý do tham gia." },
      { q: "What is posted on Fridays?", options: ["Recipes", "New menu items", "Customer photos", "Discount codes"], answer: 2, explain: "'photos from customers on Friday' → C." },
      { q: "What does Thu Ha like most about the group?", options: ["The low prices", "It does not send too many messages", "The fast delivery", "The large number of members"], answer: 1, explain: "'What I appreciate most is that they do not send too many messages' → B." }
    ],
    sources: []
  },
  {
    id: "09",
    title: "Đo lường: đọc số để quyết định",
    vi: [
      "CTR = số lượt bấm ÷ số lượt hiển thị. CPC = tiền chi ÷ số lượt bấm. CPA = tiền chi ÷ số kết quả (đơn, tin nhắn). ROAS = doanh thu ÷ tiền quảng cáo.",
      "KPI là 1–2 con số quan trọng nhất theo mục tiêu. Mục tiêu doanh số thì nhìn ROAS, đừng bị phân tâm bởi lượt tiếp cận cao.",
      "UTM là đoạn gắn thêm vào cuối link để GA4 biết khách đến từ đâu. Link gửi qua Zalo/Messenger không có UTM thường bị tính là 'Direct'.",
      "GA4 đã đổi tên 'Conversions' thành 'Key events' (sự kiện chính) từ năm 2024.",
      "Tỷ lệ tương tác: lượt ghé ở lại hơn 10 giây, hoặc xem từ 2 trang, hoặc có sự kiện chính. Tỷ lệ thoát = 100% − tỷ lệ tương tác."
    ],
    example: "Chi 2 triệu, bán được 6 triệu → ROAS = 3. Mỗi 1 đồng quảng cáo mang về 3 đồng doanh thu.",
    en: {
      type: "Report excerpt",
      heading: "Monthly Online Performance — September",
      text: "In September, the company spent $2,000 on online advertising and generated $6,000 in sales, a return of three dollars for every dollar spent. The video campaign reached the largest number of people, but it produced the fewest orders. In contrast, the search campaign reached fewer people but accounted for 60 percent of total sales.\n\nWe also noticed that a large share of website visits were labeled \"Direct.\" This is likely because many customers clicked links that were shared in chat apps, which do not pass source information. Starting in October, all shared links will include tracking tags so that we can identify where visitors come from. The team recommends moving part of the video budget to the search campaign."
    },
    vocab: [
      { en: "generate", vi: "tạo ra", ex: "generated $6,000 in sales" },
      { en: "return", vi: "lợi nhuận thu về", ex: "a return of three dollars" },
      { en: "in contrast", vi: "ngược lại", ex: "In contrast, the search campaign…" },
      { en: "account for", vi: "chiếm (bao nhiêu phần)", ex: "accounted for 60 percent of sales" },
      { en: "share", vi: "phần, tỷ lệ", ex: "a large share of visits" },
      { en: "label", vi: "gắn nhãn, ghi là", ex: "labeled \"Direct\"" },
      { en: "identify", vi: "xác định", ex: "identify where visitors come from" }
    ],
    questions: [
      { q: "What was the company's ROAS in September?", options: ["2", "3", "6", "60"], answer: 1, explain: "$6,000 ÷ $2,000 = 3 → B." },
      { q: "Why were many visits labeled \"Direct\"?", options: ["Customers typed the address", "Links shared in chat apps had no source information", "The search campaign failed", "The website was down"], answer: 1, explain: "'links that were shared in chat apps, which do not pass source information' → B. Đây chính là lý do Direct của WordLoop cao!" },
      { q: "What does the team recommend?", options: ["Stopping all advertising", "Moving some video budget to search", "Removing tracking tags", "Hiring more staff"], answer: 1, explain: "Câu cuối → B." }
    ],
    sources: [
      { name: "Google — Sự kiện và sự kiện chính", url: "https://support.google.com/analytics/answer/13965727?hl=vi" },
      { name: "Google — Tỷ lệ tương tác và tỷ lệ thoát", url: "https://support.google.com/analytics/answer/12195621?hl=vi" },
      { name: "Google — Nhóm kênh mặc định", url: "https://support.google.com/analytics/answer/9756891?hl=vi" },
      { name: "Google — Tránh lưu lượng Unassigned / Direct", url: "https://support.google.com/analytics/answer/14847402?hl=vi" }
    ]
  },
  {
    id: "10",
    title: "Tối ưu: Thử – Đo – Học – Lặp lại",
    vi: [
      "Marketing không làm 1 lần là xong. Vòng lặp: Thử nhỏ → Đo đúng KPI → Rút ra bài học → Làm lại tốt hơn.",
      "A/B test: mỗi lần chỉ đổi 1 thứ (hình, hoặc chữ, hoặc nút bấm) để biết chính xác cái gì tạo ra khác biệt.",
      "Phễu hoàn chỉnh phải có hành động ở cả 4 giai đoạn, có đo lường ngay từ đầu, có kế hoạch chăm sóc sau khi bán."
    ],
    example: "Tuần 1 thử 2 nút: 'Chơi thử ngay' vs 'Học 5 phút mỗi ngày'. Giữ nguyên hình và chữ. Nút nào nhiều người bấm hơn thì giữ.",
    en: {
      type: "E-mail",
      heading: "Subject: Results of our button test",
      text: "Dear all,\n\nLast week we tested two versions of the sign-up button on our home page. Version A said \"Start Free Trial,\" and Version B said \"Learn in 5 Minutes a Day.\" Everything else on the page, including the images and the text, remained the same. Version B received 40 percent more clicks than Version A.\n\nBased on these results, we will use Version B from now on. Next, we plan to test two different background images while keeping the new button. Please remember that we should change only one element at a time; otherwise, we will not know which change caused the difference.\n\nThank you,\nQuang"
    },
    vocab: [
      { en: "version", vi: "phiên bản", ex: "two versions of the button" },
      { en: "remain", vi: "giữ nguyên", ex: "Everything else remained the same." },
      { en: "based on", vi: "dựa trên", ex: "Based on these results…" },
      { en: "element", vi: "yếu tố, thành phần", ex: "change only one element at a time" },
      { en: "otherwise", vi: "nếu không thì", ex: "otherwise, we will not know…" },
      { en: "cause", vi: "gây ra", ex: "which change caused the difference" },
      { en: "free trial", vi: "dùng thử miễn phí", ex: "Start Free Trial" }
    ],
    questions: [
      { q: "What was tested last week?", options: ["Two background images", "Two sign-up buttons", "Two prices", "Two websites"], answer: 1, explain: "'tested two versions of the sign-up button' → B." },
      { q: "What will be tested next?", options: ["Background images", "Button colors", "Page text", "Prices"], answer: 0, explain: "'we plan to test two different background images' → A." },
      { q: "Why should only one element be changed at a time?", options: ["To save money", "To know which change caused the result", "To finish faster", "To follow company rules"], answer: 1, explain: "'otherwise, we will not know which change caused the difference' → B." }
    ],
    sources: []
  }
];
