# Module 09 — Đo lường & Phân tích: KPI, UTM, GA4, Ads Manager

> ⚠️ Nội dung nền tảng/chính sách quảng cáo có thể thay đổi theo thời gian — luôn kiểm tra giao
> diện & chính sách thực tế trên nền tảng trước khi áp dụng.

## 1. Vì sao đo lường là kỹ năng quan trọng nhất, không phải "chạy ads giỏi"

Người giỏi digital marketing không phải người biết bấm nhiều nút trong Ads Manager, mà là người
**đọc đúng số liệu và ra quyết định đúng** dựa trên số liệu đó. Module này tổng hợp lại các chỉ số
đã nhắc ở module 05-06 và bổ sung cách theo dõi xuyên suốt nhiều kênh.

## 2. Bộ chỉ số cốt lõi (áp dụng cho hầu hết mọi kênh paid ads)

| Chỉ số | Ý nghĩa | Công thức | Dùng để làm gì |
|---|---|---|---|
| **Reach** | Số người nhìn thấy quảng cáo | — | Đo độ phủ |
| **Impressions** | Tổng lượt hiển thị (1 người có thể thấy nhiều lần) | — | Đo tần suất xuất hiện |
| **CTR** | Tỷ lệ click | Clicks ÷ Impressions × 100% | Đo mức hấp dẫn nội dung |
| **CPC** | Chi phí mỗi click | Chi tiêu ÷ Clicks | Đo hiệu quả chi phí tiếp cận |
| **CPA** | Chi phí mỗi hành động (mua, để lại lead) | Chi tiêu ÷ Số hành động | Đo hiệu quả chi phí chuyển đổi |
| **ROAS** | Doanh thu trên mỗi đồng chi ads | Doanh thu ÷ Chi tiêu | Quyết định có nên chi thêm ngân sách |

Ví dụ tính nhanh: chi 2.000.000đ quảng cáo, thu về 20 đơn hàng, mỗi đơn trung bình 300.000đ →
Doanh thu = 6.000.000đ → ROAS = 6.000.000 ÷ 2.000.000 = **3** (mỗi 1đ chi ra thu về 3đ doanh thu).

## 3. KPI — chọn đúng chỉ số theo mục tiêu, không nhìn tất cả cùng lúc

KPI (Key Performance Indicator) là chỉ số **quan trọng nhất** gắn với mục tiêu cụ thể của chiến
dịch, tránh tình trạng nhìn 10 chỉ số cùng lúc mà không biết cái nào thật sự quyết định thành bại.

- Mục tiêu nhận diện thương hiệu → KPI chính: Reach, tần suất (Frequency).
- Mục tiêu thu lead/tin nhắn → KPI chính: CPA (chi phí mỗi lead/tin nhắn).
- Mục tiêu doanh số → KPI chính: ROAS.
- Mục tiêu giữ chân khách (retention) → KPI chính: tỷ lệ mua lại (repeat purchase rate).

## 4. UTM — theo dõi khách đến từ đâu khi chạy nhiều kênh cùng lúc

UTM là các đoạn mã gắn thêm vào cuối link, giúp Google Analytics phân biệt khách đến từ kênh nào,
chiến dịch nào — quan trọng khi bạn chạy cùng lúc Facebook Ads, TikTok Ads, và bài đăng organic,
nếu không có UTM sẽ không biết traffic đến từ đâu.

Cấu trúc cơ bản: `?utm_source=facebook&utm_medium=cpc&utm_campaign=khuyenmai_thang10`

- `utm_source`: nguồn traffic (facebook, tiktok, zalo, google...)
- `utm_medium`: loại kênh (cpc = trả phí, social = organic mạng xã hội, email...)
- `utm_campaign`: tên chiến dịch cụ thể, giúp so sánh hiệu quả giữa các đợt chạy khác nhau

Nguyên tắc: đặt tên `utm_campaign` **nhất quán** (có quy ước rõ ràng) để sau này dễ lọc báo cáo,
tránh đặt tuỳ hứng mỗi lần một kiểu.

## 5. Google Analytics 4 (GA4) — đọc những gì trên website

GA4 là công cụ miễn phí đo hành vi khách trên website. Các chỉ số người mới nên quan tâm trước:

- **Sessions/Users**: số lượt truy cập / số người truy cập thực tế.
- **Engagement rate**: tỷ lệ phiên truy cập có tương tác thật sự (không rời trang ngay lập tức) —
  chỉ số này thay thế cho "Bounce rate" ở phiên bản Analytics cũ.
- **Nguồn traffic (Traffic acquisition)**: khách đến từ đâu — organic search, paid social, direct,
  referral... kết hợp với UTM ở trên để biết chính xác chiến dịch nào mang traffic.
- **Conversions**: hành động bạn đã thiết lập để theo dõi (điền form, click nút mua, nhắn Zalo).

## 6. Đọc báo cáo Ads Manager (Facebook/Google/TikTok/Zalo) — quy trình 3 bước

1. **So sánh với mục tiêu**, không so sánh với "cảm giác" — nếu KPI chính là ROAS, nhìn ROAS
   trước tiên, đừng bị phân tâm bởi Reach cao mà ROAS thấp.
2. **So sánh theo thời gian**, không nhìn 1 ngày đơn lẻ — số liệu 1 ngày dao động nhiều, nên xem
   xu hướng 5-7 ngày.
3. **So sánh giữa các Ad Set/nội dung** — tắt bớt ngân sách cho nhóm/nội dung có KPI kém, tăng
   ngân sách cho nhóm hiệu quả (đừng chia đều ngân sách mãi mãi).

## Tóm tắt

- Bộ chỉ số cốt lõi: Reach, Impressions, CTR, CPC, CPA, ROAS — mỗi chỉ số trả lời 1 câu hỏi khác
  nhau.
- Chọn đúng 1-2 KPI theo mục tiêu chiến dịch, không nhìn dàn trải mọi chỉ số.
- Dùng UTM nhất quán để biết chính xác traffic đến từ kênh/chiến dịch nào.
- GA4 đo hành vi trên website; Ads Manager đo hiệu quả quảng cáo — dùng cùng nhau để có bức tranh
  đầy đủ.
