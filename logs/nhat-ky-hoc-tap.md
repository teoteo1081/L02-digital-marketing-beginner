# Nhật ký học Digital Marketing: quá trình hỏi, thực hành và mức hiểu

> Mục đích: ghi lại **cách TJ học**, gồm những gì đã hỏi, đã làm tay và đã hiểu tới đâu, để tự đánh giá và biết nên học tiếp thế nào.
> Mỗi buổi học thêm 1 mục mới ở cuối file. Thang đánh giá dùng chung với [rubric-thuc-hanh.md](../assessments/rubric-thuc-hanh.md): **Chưa đạt / Đạt / Khá / Giỏi**.

---

## Buổi 1 · 2026-09-28 · Module 00: Cài đặt công cụ (GA4)

### 1. Diễn biến buổi học

| # | TJ hỏi / yêu cầu | Chuyện gì xảy ra | Khái niệm chạm tới |
|---|---|---|---|
| 1 | "Mở dự án digital marketing cho mình học" | Mở bài 00 + dashboards | — |
| 2 | "Website là trang WordLoop mình đang học được không? Mình chưa tạo được GA4" | Xác nhận WordLoop là website thật, dùng được. TJ tự tạo tài khoản GA4 theo hướng dẫn từng bước | Account → Property → Data Stream |
| 3 | Gửi ảnh màn hình mã thẻ, hỏi "rồi sao nữa" | Claude dán thẻ vào `index.html` của WordLoop và đẩy lên GitHub Pages | Thẻ Google (gtag.js), vị trí `<head>` |
| 4 | "Bạn làm gì vậy? Sau này làm cho khách hàng thì cần gì? Vào GA4 bằng cách nào?" | Giải thích quy trình 2 bước. Quy trình cho khách: khách giữ tài khoản, cấp quyền Editor cho mình. Menu Báo cáo | Quyền truy cập, sở hữu dữ liệu |
| 5 | Gửi `G-6X5S109XKM` khi được hỏi Property ID | Phân biệt **Measurement ID** (G-…) với **Property ID** (dãy số) | Measurement ID ≠ Property ID |
| 6 | "Thẻ Google là sao?" | Ví dụ "camera đếm khách ở cửa tiệm" | Thẻ, cách dữ liệu gửi về GA4 |
| 7 | "Cài đặt bằng CMS là sao?" | CMS (WordPress, Haravan, Sapo, Ladipage) và cách chỉ dán mã `G-…` vào ô cài đặt, so với tự dán code | Tự cài vs cài qua CMS |
| 8 | Thấy màn "Đang chờ thu thập dữ liệu" | Giải thích: báo cáo theo ngày cần 24–48 giờ, mục Thời gian thực thì có ngay | Realtime vs báo cáo tổng hợp |
| 9 | "Tài khoản demo của Google đâu?" | Demo phải bấm link để thêm, không tự hiện ra | GA4 Demo (Google Merchandise Store) |
| 10 | Gửi ảnh Realtime = **1 người, Vietnam**: "là mình đó" | **Tự kiểm chứng GA4 chạy thành công** ✅ | Kiểm tra cài đặt bằng Realtime |
| 11 | "Trang 1000 câu đưa lên web được không? Cần Supabase không?" | Web tĩnh không cần database. Chỉ cần Supabase khi có đăng nhập hoặc tiến trình học | Web tĩnh vs web có backend |
| 12 | "Share cho người khác thì có đếm event gì không?" | Sự kiện tự động và **sự kiện riêng** (`play_audio`, `change_rate`…). Claude gắn code, kiểm thử rồi đưa lên web | Event, tham số sự kiện, custom event |

### 2. Cách TJ học: nhận xét

**Điểm mạnh**
- **Gắn bài học vào sản phẩm của chính mình.** Ngay câu đầu, TJ hỏi dùng WordLoop làm website thực hành được không, thay vì làm trên ví dụ giả. Đây đúng là tiêu chí "Tính cụ thể" mức **Giỏi** trong rubric.
- **Hỏi "tại sao / là gì" thay vì chỉ làm theo.** Ví dụ: "Thẻ Google là sao?", "CMS là sao?", "bạn làm gì vậy?". TJ không bấm cho xong mà muốn hiểu bản chất.
- **Nghĩ trước tới công việc thật.** Câu "sau này làm cho khách hàng thì cần làm gì?" cho thấy TJ học để làm nghề, không chỉ để qua bài.
- **Tự kiểm chứng kết quả.** TJ gửi ảnh Realtime và nhận ra "1 người đó là mình". Đây là thói quen tốt nhất của người làm đo lường: không tin là "đã cài", phải thấy số thật.
- **Tự mở rộng sang module sau.** Câu "share cho người khác có đếm event không?" đã chạm vào nội dung Module 09 (đo lường, sự kiện) khi mới học Module 00.
- **Hỏi bằng ảnh chụp màn hình.** Cách này nhanh và chính xác, người hỗ trợ thấy đúng thứ TJ đang thấy.

**Điểm cần cải thiện**
- **Phần kỹ thuật còn nhờ làm hộ** ("bạn làm luôn đi", "bạn thao tác giúp mình"). Việc dán thẻ và gắn sự kiện là Claude làm. TJ **hiểu** quy trình nhưng **chưa tự tay** làm lần nào. Khi làm cho khách (nhất là qua CMS), TJ sẽ phải tự làm.
- **Còn nhầm các loại ID.** Được hỏi Property ID thì gửi Measurement ID. Đây là lỗi rất phổ biến, nhưng cần nắm chắc vì sẽ gặp lại khi liên kết Google Ads hay Looker Studio.
- **Chưa đặt mục tiêu trước khi đo.** Sự kiện đã được gắn trước khi trả lời câu *"mình muốn biết điều gì từ người dùng trang 1000 câu?"*. Đúng thứ tự nghề là **mục tiêu → KPI → sự kiện cần đo**. Module 09 sẽ học phần này.
- **Tài khoản Demo chưa vào được.** Mục này còn dang dở.

### 3. Mức hiểu từng khái niệm (tự đánh giá)

| Khái niệm | Mức | Căn cứ |
|---|---|---|
| Cấu trúc Account → Property → Data Stream | **Khá** | Tự tạo đủ 3 cấp theo hướng dẫn |
| Thẻ Google là gì, đặt ở đâu | **Khá** | Hỏi và hiểu được ví dụ "camera", chưa tự dán lần nào |
| Measurement ID vs Property ID | **Đạt** | Đã từng nhầm, đã được giải thích |
| Tự cài vs cài qua CMS | **Khá** | Hiểu khi nào dùng cách nào, chưa thực hành trên CMS thật |
| Realtime vs báo cáo 24–48 giờ | **Khá** | Tự đọc đúng số Realtime (1 người, Vietnam) |
| Quy trình làm GA4 cho khách hàng | **Đạt** | Mới nghe giải thích, chưa làm thật |
| Event / custom event | **Đạt** | Hiểu ý tưởng, chưa tự đọc báo cáo sự kiện |
| Web tĩnh vs cần database (Supabase) | **Khá** | Hỏi đúng câu, hiểu ranh giới |

**Kết quả Module 00:** ô "Đã tạo GA4 cho website" ✅ **hoàn thành** (WordLoop, đã kiểm chứng bằng Realtime). Mục GA4 Demo ⏳ **chưa xong**.

### 4. Bài tập tự làm để lấp chỗ còn yếu

1. **Tìm Property ID của TJ WordLoop Hub** (⚙ Quản trị → Chi tiết về tài sản) và ghi vào đây: `Property ID: __________`
2. **Vào tài khoản Demo**: https://analytics.google.com/analytics/web/demoAccount. Chụp 1 ảnh báo cáo bất kỳ của Google Merchandise Store.
3. **Tự đọc sự kiện**: mở trang 1000 câu (https://teoteo1081.github.io/L00_ES-CN/), bấm nghe 3 câu tiếng Tây Ban Nha, rồi vào Realtime tìm sự kiện `play_audio`. Ghi lại: thấy mấy lượt? Tham số `audio_lang` là gì?
4. **Tự trả lời bằng lời của mình** (không nhìn lại): *"Nếu khách dùng Haravan, mình cài GA4 cho họ theo các bước nào?"*
5. **Đặt mục tiêu cho trang 1000 câu**: viết 1 câu "Mình muốn biết ___ để quyết định ___". Sau đó chọn 1 sự kiện trong danh sách đã gắn làm KPI chính.

### 5. Gợi ý cách học cho buổi sau
- Mỗi khi được giải thích xong, **thử tự làm lại 1 lần** (dù chậm) trước khi nhờ làm hộ. Ví dụ: tự tạo 1 Data Stream thứ hai, hoặc tự dán thẻ vào 1 file HTML nhỏ.
- Trước khi hỏi "có đo được X không?", thêm câu **"mình đo X để làm gì?"**. Đó là tư duy KPI của Module 09.
- Giữ thói quen chụp màn hình và tự kiểm chứng bằng số thật.

---

## Buổi 2 · 2026-10-04 · Module 00: Đọc báo cáo GA4 đầu tiên

### 1. Diễn biến buổi học

| # | TJ hỏi / yêu cầu | Chuyện gì xảy ra | Khái niệm chạm tới |
|---|---|---|---|
| 1 | Gửi ảnh Trang chủ GA4 của TJ WordLoop Hub (7 ngày): "module đầu tiên đạt chưa?" | Đọc cùng nhau 3 thẻ báo cáo: quốc gia, tiêu đề trang, nhóm kênh | Đọc báo cáo tổng hợp (không chỉ Realtime) |
| 2 | (từ ảnh) Đường link có `a409949355p556482840` | Tìm ra **Property ID = 556482840** ngay trên link | Account ID vs Property ID |
| 3 | Yêu cầu sửa 7 điểm chưa chuẩn trong giáo trình, kèm nguồn | Đã sửa bài 02, 05, 06, 09, quiz 00, audit | Key events, learning phase, 6 mục tiêu Meta |
| 4 | Hỏi nên để bài đọc ở đâu, có lồng vào game WordLoop được không | Tạo thư viện bài đọc `readings/`, bàn cách nối với WordLoop | Tách nội dung / giao diện |

### 2. Đọc số liệu trong ảnh (7 ngày)

| Thẻ | Số liệu | Ý nghĩa |
|---|---|---|
| Quốc gia | Vietnam 75 · China 3 · US 3 · Andorra, Belarus, Czechia, Algeria 1 | Người dùng thật chủ yếu ở VN. Mấy nước lẻ 1 người thường là **bot / công cụ quét**, chưa cần lo |
| Tiêu đề trang | Game 461 · Hub 202 · Phòng… 15 · **Operation 0 → Chun…** 7 | Trang Game được xem nhiều nhất. **"Operation 0"** nghe như trang của 1 website khác → có thể website đó đang **dùng chung mã G-** với WordLoop, nên số bị cộng chung (xem Sổ tay mục 8) |
| Nhóm kênh | Direct 141 · Organic Social 5 · Unassigned 2 | **Direct** cao vì link gửi qua Zalo/Messenger thường bị GA4 xếp vào "Direct" (không biết nguồn). Muốn biết đúng nguồn → gắn **UTM** (Module 09). **Unassigned** = GA4 không xếp được vào nhóm nào |

### 3. Đánh giá Module 00

| Hạng mục | Kết quả |
|---|---|
| GA4: tạo, gắn thẻ, kiểm chứng, đọc báo cáo | ✅ **Giỏi** — vượt yêu cầu: đã có dữ liệu 7 ngày thật, có sự kiện riêng |
| Tìm Property ID | ✅ Xong (556482840) |
| GA4 Demo | ⏳ Chưa thấy ảnh |
| Meta Business Suite, Google Ads, TikTok Business Center, Zalo OA, Canva | ❓ Chưa xác nhận |
| Chọn sản phẩm thực hành xuyên suốt | ❓ Chưa chốt (gợi ý: WordLoop) |

**Kết luận:** phần GA4 **đạt mức Giỏi**. Cả Module 00 **chưa hoàn thành** vì còn 5 tài khoản khác và GA4 Demo chưa xác nhận.

### 4. Bài tập tự làm
1. Kiểm tra trang "Operation 0 → Chun…" thuộc website nào. Nếu là website khác → tạo **property riêng** cho nó (Sổ tay mục 8).
2. Vào GA4 Demo, chụp 1 ảnh.
3. Tick checklist 6 tài khoản trong `lessons/00-cai-dat-cong-cu/index.html`, chọn sản phẩm thực hành, bấm **Xuất bài làm**.
4. Đọc bài đọc Module 00 trong `readings/` và làm 3 câu kiểu TOEIC cuối bài.

---

<!-- Buổi 3: thêm mục mới bên dưới theo cùng khung: Diễn biến · Đọc số liệu/Cách học · Đánh giá · Bài tập -->
