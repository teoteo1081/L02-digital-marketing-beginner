# Audit Report — Digital Marketing Beginner Project
Ngày audit: 2026-09-20

## Tóm tắt kết luận

Project đã **sẵn sàng bàn giao** cho người dùng. Cấu trúc thư mục khớp gần như tuyệt đối với plan
đã duyệt (đủ 11 module 00-10 ở cả 4 nơi: PDF, lesson HTML, quiz-bank, progress_tracker). Toàn bộ
11 file JSON/HTML đã kiểm tra qua `node --check` cho các khối `<script>` không có lỗi cú pháp,
`progress_tracker.json` là JSON hợp lệ và khớp 100% với schema mẫu trong `LOG_GUIDE.md`, không có
link nội bộ (href/src) nào trỏ tới file không tồn tại (kiểm tra tự động toàn bộ `.html` trong
`lessons/` và `dashboards/`). Nội dung tiếng Việt mạch lạc, không thấy lỗi chính tả nghiêm trọng ở
các file đã đọc. Zalo Ads đã được tích hợp nhất quán xuyên suốt (docs/src, lesson HTML, ROADMAP,
quiz-bank, prompts.md, dashboard). Không phát hiện vấn đề Nghiêm trọng nào. Chỉ có vài điểm Nhỏ
đáng lưu ý (liệt kê bên dưới), không cản trở việc sử dụng.

## Đối chiếu với plan đã duyệt

| Hạng mục trong plan | Trạng thái thực tế |
|---|---|
| README.md, ROADMAP.md | Có đủ, nội dung khớp — ROADMAP liệt kê đúng 11 module (00-10), README hướng dẫn đúng luồng xuất bài làm → submissions → báo Claude |
| `docs/src/*.md` (11 file, tên đúng plan) | Đủ 11 file, tên file khớp chính xác plan |
| `docs/pdf/*.pdf` (11 file PDF tương ứng) | Đủ 11 file, dung lượng hợp lý (~90-100KB/file), không file nào rỗng/lỗi |
| `lessons/<module>/{index.html, prompts.md}` (11 module) | Đủ 11 cặp, tên thư mục khớp plan (kể cả `06-tiktok-google-zalo-ads` đã đổi tên đúng như plan) |
| Mỗi `index.html`: worksheet + checklist tự đánh giá + nhật ký phản tư + nút Lưu tạm + nút Xuất bài làm | Xác nhận đúng cấu trúc này ở cả 2 file mẫu đọc kỹ (04, 09) — kể cả logic đặc biệt (radio button module 04, máy tính CTR/CPC/CPA/ROAS tự động module 09) hoạt động đúng, không lỗi cú pháp |
| `dashboards/` (5 dashboard + index + shared/style.css + shared/sample-data.js) | Đủ, banner cảnh báo dữ liệu minh hoạ có ở đầu mỗi trang, Chart.js CDN đúng version (4.5.1, đã xác nhận trước đó), bảng dữ liệu có `overflow-x:auto` qua selector `[id$="-table-holder"]` |
| `assessments/{quiz-bank.md, rubric-thuc-hanh.md}` | Đủ, quiz-bank có đúng 11 section Module 00-10, rubric có tiêu chí chung + riêng theo module + rubric Capstone tổng hợp |
| `logs/{progress_tracker.json, LOG_GUIDE.md, submissions/README.md}` | Đủ, JSON hợp lệ, đủ 11 module (00-10), schema khớp 100% với record mẫu trong LOG_GUIDE.md (2 cấp: gốc + mảng modules) |
| Cơ chế xuất bài làm (.md) → di chuyển vào `logs/submissions/` → báo Claude cập nhật tracker | Đã triển khai đúng, hướng dẫn trong README rõ ràng, có câu ví dụ cụ thể để người dùng copy |
| Mở rộng Shopee/TikTok Shop Ads (không tách module riêng) | Đúng như plan — chỉ là 1 mục mở rộng ngắn trong module 04, không phình thành module riêng |

Không phát hiện file nào **thiếu** so với plan, không có file **thừa** đáng ngờ ngoài
`docs/pdf-style.css` (artifact phục vụ build PDF qua pandoc/weasyprint — hợp lý, không phải rác).

## Vấn đề phát hiện

### Nghiêm trọng
Không có.

### Trung bình
Không có.

### Nhỏ

1. **`dashboards/facebook-ads-dashboard.html` (dòng ~63)** — chỉ số "CTR ước tính" trong KPI card
   được tính bằng công thức xấp xỉ `clicks / (reach * 1.4) * 100` (vì `sample-data.js` không có
   trường `impressions` riêng cho Facebook, chỉ có `reach`). Đây là lựa chọn hợp lý cho dữ liệu
   minh hoạ và có ghi chú "ước tính" trong code, nhưng người học có nền tảng tốt hơn có thể thắc
   mắc vì sao CTR ở đây không khớp công thức chuẩn (clicks/impressions) dạy trong
   `docs/src/09-do-luong-ga4-kpi-utm.md`. Đề xuất: thêm 1 dòng chú thích nhỏ ngay dưới KPI card
   ("CTR ở đây là ước tính từ Reach, không phải Impressions thật — xem công thức chuẩn ở PDF module
   09") để tránh gây hiểu lầm nhỏ.

2. **`docs/pdf-style.css`** nằm ở `docs/` (không phải `docs/pdf/` hay thư mục build riêng) — không
   sai, nhưng plan gốc không có mục này. Đây là artifact hỗ trợ build PDF (pandoc + weasyprint), có
   thể giữ nguyên hoặc di chuyển vào một thư mục con kiểu `docs/build/` nếu muốn cấu trúc gọn hơn.
   Không ảnh hưởng người dùng cuối vì họ chỉ mở file trong `docs/pdf/`.

3. **Responsive ở đúng 400px chưa được xác nhận bằng công cụ trình duyệt trực tiếp** (đã ghi nhận
   giới hạn công cụ trong bối cảnh nhiệm vụ). Đã tự đọc kỹ CSS độc lập
   (`dashboards/shared/style.css`, `lessons/04-chon-nen-tang/index.html`,
   `lessons/09-do-luong-analytics/index.html`, `dashboards/ga4-organic-dashboard.html`) và xác nhận:
   - Mọi `width:` cố định lớn phát hiện qua grep đều là `max-width` (không phải `width` cứng) —
     ngoại lệ là `.funnel-bar-label{width:220px}` và `.funnel-bar-value{width:150px}` trong
     `ga4-organic-dashboard.html`, nhưng có media query `@media (max-width:600px)` giảm xuống
     120px/110px kèm `flex-shrink:0` trên track co giãn được — tính toán tay cho thấy ở 400px viền
     trong (~368px khả dụng sau padding 16px x2) đủ chỗ (120+110+20 gap = 250px, còn dư cho track).
   - `table.data-table{min-width:480px}` luôn nằm trong container có `overflow-x:auto`
     (`[id$="-table-holder"]`), nên không gây tràn ngang cấp trang.
   - Không tìm thấy `min-width` nào > 360px nằm ngoài cơ chế overflow/wrap.
   → Đánh giá độc lập: rủi ro tràn ngang ở 400px **thấp**, nhưng khuyến nghị vẫn nên xác nhận bằng
   mắt trên thiết bị/di động thật ít nhất 1 lần trước khi coi là đã kiểm chứng đầy đủ, vì audit này
   chỉ dựa trên đọc code tĩnh, không render thực tế.

## Điểm tốt đáng ghi nhận

- **Đồng bộ nội dung xuất sắc giữa các lớp**: Module 06 "TikTok, Google & Zalo Ads" nhất quán tên
  gọi và nội dung Zalo Ads xuyên suốt `docs/src/06-tiktok-ads-google-ads.md`,
  `lessons/06-tiktok-google-zalo-ads/{index.html,prompts.md}`, `ROADMAP.md`, `assessments/quiz-bank.md`
  — không sót chỗ nào dùng tên cũ hoặc thiếu Zalo.
- **Cơ chế xuất bài làm → submissions → cập nhật tracker** được giải thích rõ ràng, có ví dụ câu
  lệnh cụ thể để người dùng copy nguyên văn nói với Claude — phù hợp với người không có nền IT.
- **`LOG_GUIDE.md`** viết rất tốt cho agent: phân biệt rõ khi nào đọc nhanh (cấp gốc) và khi nào đọc
  sâu (mảng modules), có nguyên tắc "ưu tiên đọc file submissions thật, không chỉ tin lời kể".
- **Chất lượng nội dung lý thuyết**: ví dụ áp dụng thực tế Việt Nam cụ thể, nhất quán (ví dụ "quán
  cà phê nhỏ" xuất hiện lặp lại có chủ đích ở nhiều module để minh hoạ tính liên tục của funnel).
- **Logic JS trong lesson HTML sạch**: cơ chế `data-field`/`data-label` dùng chung để vừa lưu
  localStorage vừa xuất Markdown, xử lý đúng cả input text, checkbox, và radio button (đã kiểm tra
  kỹ trường hợp radio ở module 04 — không bị trùng lặp hoặc thiếu label khi xuất file).
- **Dashboard có accessibility fallback**: mỗi biểu đồ đều có nút "Xem dạng bảng" hiện bảng số liệu
  thô, hữu ích cho người mới muốn đối chiếu số thay vì chỉ nhìn biểu đồ.
- **11/11 PDF dung lượng hợp lý, không file rỗng**; toàn bộ script HTML pass `node --check` (0 lỗi
  cú pháp trên toàn bộ `lessons/` + `dashboards/`).

## Khuyến nghị bước tiếp theo

1. (Tuỳ chọn, ưu tiên thấp) Thêm chú thích nhỏ cho CTR ước tính ở `facebook-ads-dashboard.html` để
   tránh nhầm lẫn nhỏ với công thức CTR chuẩn dạy ở module 09.
2. (Tuỳ chọn) Xác nhận layout ở màn hình ~400px thực tế trên điện thoại hoặc DevTools responsive
   mode (không bị giới hạn cửa sổ tối thiểu như công cụ headless đã dùng) — dù đánh giá tĩnh cho
   thấy rủi ro thấp, đây là bước xác nhận cuối cùng còn thiếu trước khi coi là kiểm chứng 100%.
3. Có thể bàn giao project cho người dùng ngay; không có blocker nào cần sửa trước khi dùng.
