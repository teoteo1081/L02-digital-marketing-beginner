# Digital Marketing cho Người Mới Bắt Đầu (VN)

Chào bạn 👋 Đây là một "khoá học tự học" về Digital Marketing, tập trung vào lý thuyết **áp dụng
được ngay ngoài thực tế**, xoay quanh marketing funnel, các nền tảng đang phổ biến ở Việt Nam
(Facebook, Zalo, TikTok, Google, Shopee...), paid ads và organic traffic.

Bạn không cần biết code hay có nền IT để dùng project này. Mọi thứ đều là file bạn mở trực tiếp
bằng trình duyệt hoặc phần mềm đọc PDF.

## Cấu trúc project

```
digital-marketing-beginner/
├── ROADMAP.md              ← Lộ trình học 11 module (00-10), đọc file này trước tiên
├── docs/pdf/                ← Lý thuyết từng module, dạng PDF, đọc trước khi thực hành
├── lessons/                 ← Bài thực hành (mở file index.html trong mỗi thư mục module)
├── dashboards/               ← Ví dụ dashboard quảng cáo/analytics (mở index.html)
├── assessments/              ← Quiz + rubric chấm bài tập
└── logs/                    ← Nơi lưu tiến độ học của bạn
```

## Cách học 1 module (lặp lại cho module 00 → 10)

1. **Đọc lý thuyết**: mở file PDF tương ứng trong `docs/pdf/` (ví dụ `02-marketing-funnel.pdf`).
2. **Thực hành**: mở `lessons/<module>/index.html` bằng trình duyệt (double-click là mở được).
   Điền worksheet ngay trên trang, bấm **"💾 Lưu tạm"** để không mất dữ liệu khi đóng trình duyệt.
3. **Bí chỗ nào thì hỏi chatbot**: mở file `prompts.md` trong cùng thư mục module, copy 1 prompt
   phù hợp rồi dán vào Claude/ChatGPT kèm bối cảnh của bạn.
4. **Tự kiểm tra**: làm quiz tương ứng trong `assessments/quiz-bank.md`, tự chấm theo đáp án.
   Chấm bài thực hành theo `assessments/rubric-thuc-hanh.md`.
5. **Nộp bài & cập nhật tiến độ**: trong `index.html`, bấm **"⬇️ Xuất bài làm (.md)"** — trình
   duyệt sẽ tải file về thư mục Downloads. Di chuyển file đó vào `logs/submissions/`, sau đó nói
   với Claude (Claude Code hoặc claude.ai, trỏ vào thư mục project này):
   > "Tôi vừa hoàn thành module 02, đây là bài làm của tôi: logs/submissions/<tên file>.md"

   Claude sẽ đọc bài làm và cập nhật `logs/progress_tracker.json` giúp bạn — nhờ vậy, ở phiên làm
   việc sau (kể cả vài tuần sau), bạn chỉ cần hỏi *"tiến độ học của tôi tới đâu rồi?"* là Claude
   sẽ đọc `logs/progress_tracker.json` và trả lời chính xác, kèm gợi ý bước tiếp theo.

## Xem ví dụ dashboard

Mở `dashboards/index.html` để xem 5 dashboard mẫu (Facebook Ads, Google Ads, TikTok Ads, Zalo Ads,
GA4). Đây là **dữ liệu minh hoạ**, giúp bạn làm quen cách đọc các chỉ số — không phải số liệu
thật, không dùng để so sánh benchmark ngành.

## Lộ trình học

Xem chi tiết ở [`ROADMAP.md`](./ROADMAP.md) — gồm 11 module (00 cài đặt công cụ, 01-10 nội dung
chính), dự kiến 10-12 tuần nếu học 1 module/tuần, có thể học nhanh/chậm tuỳ thời gian bạn có.

## Lưu ý

- Nội dung nền tảng & chính sách quảng cáo (Facebook, Google, TikTok, Zalo...) thay đổi liên tục.
  Lý thuyết trong `docs/` là nguyên lý nền tảng + ví dụ minh hoạ, hãy luôn đối chiếu với giao diện
  thật khi thao tác.
- Không có bài học nào yêu cầu bạn chi tiền quảng cáo thật. Nếu muốn chạy thử ads thật, hãy bắt
  đầu với ngân sách rất nhỏ và xin tư vấn thêm.
