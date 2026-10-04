# Sổ tay kiến thức Digital Marketing (TJ)

> Tổng hợp những câu TJ đã hỏi và câu trả lời, viết lại gọn để ôn. Nhật ký quá trình học nằm ở [nhat-ky-hoc-tap.md](nhat-ky-hoc-tap.md).
> Cập nhật lần cuối: 2026-10-04.

**Mục lục**
1. [GA4 là gì, cấu trúc 3 cấp](#1-ga4-là-gì-cấu-trúc-3-cấp)
2. [Các loại ID: Measurement ID và Property ID](#2-các-loại-id)
3. [Thẻ Google (Google tag)](#3-thẻ-google-google-tag)
4. [Cách cài GA4: tự dán code hay qua CMS](#4-cách-cài-ga4-tự-dán-code-hay-qua-cms)
5. [Quy trình cài GA4 cho khách hàng](#5-quy-trình-cài-ga4-cho-khách-hàng)
6. [Đọc GA4: Realtime và báo cáo 24–48 giờ](#6-đọc-ga4-realtime-và-báo-cáo-2448-giờ)
7. [Tài khoản GA4 Demo](#7-tài-khoản-ga4-demo)
8. [Một property hay nhiều property?](#8-một-property-hay-nhiều-property)
9. [Sự kiện (Event)](#9-sự-kiện-event)
10. [Web tĩnh và web cần database (Supabase)](#10-web-tĩnh-và-web-cần-database-supabase)
11. [Thông tin tài khoản của TJ](#11-thông-tin-tài-khoản-của-tj)

---

## 1. GA4 là gì, cấu trúc 3 cấp

**Google Analytics 4 (GA4)** là công cụ miễn phí của Google. Nó đếm ai vào website, từ đâu tới, xem gì và làm gì.

```
Tài khoản (Account)     "TJ Sai Gon Project"     = tủ hồ sơ của công ty / khách hàng
 └─ Tài sản (Property)  "TJ WordLoop Hub"        = 1 cuốn sổ báo cáo riêng
     └─ Luồng (Stream)  "WordLoop Web"           = 1 đường ống đổ dữ liệu vào sổ (có mã G-...)
```

- **Thêm luồng ≠ tạo property mới.** Thêm luồng thì dữ liệu vẫn đổ chung vào cùng 1 cuốn sổ.
- **Thêm luồng** dùng khi có **cùng 1 sản phẩm trên nhiều nền tảng** (web + app Android + app iOS của 1 cửa hàng) và muốn xem gộp.
- **Tạo property mới** dùng khi có **2 sản phẩm khác nhau** và muốn báo cáo riêng.
- Tạo property: ⚙ **Quản trị → + Tạo → Tài sản**. Đừng dùng link `.../provision/create`, link đó tạo **tài khoản** mới.

## 2. Các loại ID

| | Dạng | Tìm ở đâu | Dùng để |
|---|---|---|---|
| **Measurement ID** (Mã đo lường) | `G-6X5S109XKM` (có chữ G) | Quản trị → Luồng dữ liệu → bấm vào luồng | Gắn vào website |
| **Property ID** (ID tài sản) | Toàn số, vd `512345678` | Quản trị → Chi tiết về tài sản (góc phải) | Link báo cáo, liên kết Google Ads / Looker Studio, API |

Lỗi TJ từng gặp: được hỏi Property ID thì gửi Measurement ID.

## 3. Thẻ Google (Google tag)

Thẻ Google là **đoạn code GA4 đưa cho**, dán vào `<head>` của mọi trang:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

- Ví dụ dễ nhớ: **camera đếm khách ở cửa tiệm**.
  - Dòng `<script src=...>` = tải camera về trình duyệt người xem.
  - Dòng `gtag('config', 'G-...')` = cho camera biết gửi số liệu về **cuốn sổ nào**.
- Không có thẻ thì GA4 không biết gì về website.
- Gọi là "thẻ Google" vì 1 thẻ có thể gửi cho nhiều dịch vụ Google (GA4, Google Ads…).
- **Mỗi trang chỉ gắn 1 thẻ Google.**

## 4. Cách cài GA4: tự dán code hay qua CMS

**CMS** (hệ quản trị nội dung) hay **website builder** là công cụ làm web không cần code, kéo thả và gõ chữ như soạn Word.

| Cách | Khi nào | Làm gì |
|---|---|---|
| **Tự cài đặt** | Web **tự code** (như WordLoop, trang 1000 câu) | Dán nguyên đoạn `<script>` vào `<head>` |
| **Qua CMS** | Web làm bằng nền tảng | Vào phần cài đặt của nền tảng, **chỉ dán mã `G-...`** vào ô |

Theo từng nền tảng:
- **WordPress**: plugin **Site Kit by Google**, đăng nhập Google là xong
- **Shopify**: app **Google & YouTube**
- **Haravan / Sapo / Ladipage**: Cài đặt → ô "Google Analytics ID", dán `G-...`

Khách nhỏ ở VN phần lớn dùng WordPress, Haravan, Sapo, Ladipage, nên **cách CMS sẽ gặp nhiều hơn**.

## 5. Quy trình cài GA4 cho khách hàng

1. **Khách tự tạo GA4 bằng Gmail của họ**, rồi cấp quyền cho mình: *Quản trị → Quản lý quyền truy cập → thêm email*, vai trò **Editor**. Dữ liệu thuộc về khách, mình nghỉ làm thì họ không mất gì.
2. Tạo **Property + Luồng web**: múi giờ, tiền tệ, URL của khách. **Mỗi website 1 mã riêng.**
3. **Gắn mã**: qua CMS, hoặc dán code nếu web tự code.
4. **Kiểm tra**: mở web khách, xem mục **Thời gian thực** có ghi nhận không.
5. **Thiết lập thêm** (Module 09): đánh dấu **Sự kiện chính (Key events)** như gọi điện, gửi form, mua hàng. Liên kết **Google Ads** nếu khách chạy quảng cáo.

Khi khách có nhiều loại mã (GA4, Facebook Pixel, TikTok Pixel…), dùng **Google Tag Manager (GTM)**: gắn 1 mã GTM, sau đó quản lý mọi thẻ và sự kiện trong đó mà không cần sửa web.

## 6. Đọc GA4: Realtime và báo cáo 24–48 giờ

| Báo cáo | Có số khi nào | Dùng để |
|---|---|---|
| **Thời gian thực** (Báo cáo → Thời gian thực) | **Ngay**, trong 1–2 phút | Kiểm tra cài đặt đúng chưa, ai đang online |
| **Các báo cáo khác** (Tổng quan, Thu hút khách hàng, Mức độ tương tác) | **24–48 giờ** sau | Phân tích xu hướng |

- Màn "Đang chờ thu thập dữ liệu" hoặc "Chưa nhận được dữ liệu" ngay sau khi tạo là **bình thường**.
- Menu quan trọng:
  - **Thu hút khách hàng (Acquisition)**: người dùng đến từ đâu (Google, Facebook, gõ thẳng link)
  - **Mức độ tương tác (Engagement)**: trang nào, ở lại bao lâu, sự kiện nào
- **Realtime báo 0** dù đã cài: thường do **trình chặn quảng cáo** (uBlock, AdBlock). Thử bằng điện thoại 4G.
- Cách tự kiểm chứng: mở web, thấy Realtime lên **1 người, Vietnam**, đó là mình.

## 7. Tài khoản GA4 Demo

- Tài khoản mẫu của Google (**Google Merchandise Store**), số liệu thật, ai có Gmail cũng xem được. **Không cần tạo, chỉ cần bấm link để thêm:** https://analytics.google.com/analytics/web/demoAccount
- Hướng dẫn chính thức: https://support.google.com/analytics/answer/6367342?hl=vi
- Thêm xong, chuyển qua lại bằng tên property ở góc trên bên trái.
- **Demo** dùng để học **đọc báo cáo** (đủ dữ liệu). **Web của mình** dùng để học **cài đặt, cấu hình** (Demo chỉ được xem).

## 8. Một property hay nhiều property?

- **Dùng chung 1 mã `G-...` cho 2 website**: nhanh, nhưng số liệu **cộng chung**, phải lọc theo *Tiêu đề trang* mới tách được.
- **Mỗi website 1 property riêng**: **cách chuẩn khi đi làm**, báo cáo tách bạch.
- Tách sau: dữ liệu cũ **không chuyển được** sang property mới.

## 9. Sự kiện (Event)

**Sự kiện** = một hành động được ghi lại: mở trang, bấm nút, cuộn, nghe audio…

**Có 3 tầng:**

| Tầng | Ai làm | Ví dụ |
|---|---|---|
| **Tự động** | GA4 luôn đếm | `page_view`, `session_start`, `first_visit` |
| **Đo lường nâng cao** (công tắc xanh khi tạo luồng) | Bật là có, không code | Cuộn 90% (`scroll`), bấm link ngoài (`click`), tìm kiếm trên trang, form, video, tải file |
| **Sự kiện riêng (custom event)** | **Phải viết code** hoặc dùng GTM | `play_audio`, `change_rate`… |

**Cách viết 1 sự kiện riêng**, chỉ 1 dòng:

```js
gtag('event', 'play_audio', { audio_lang: 'es-ES', audio_type: 'word' });
//            └ tên sự kiện  └ tham số = thông tin đi kèm
```

Code đếm sự kiện gồm 2 phần:
1. **"Tai nghe"**: lắng nghe mọi cú bấm trên trang (`document.addEventListener('click', …)`).
2. **"Nhận diện"**: cú bấm rơi vào nút nào thì gửi sự kiện đó (nút 🔊 `.say-btn` gửi `play_audio`, nút 👁 `.eye-btn` gửi `toggle_meaning`…).

**Sự kiện đã gắn cho trang 1000 câu:**

| Sự kiện | Khi nào | Tham số |
|---|---|---|
| `play_audio` | Bấm 🔊 câu hoặc bấm 1 từ | `audio_type` (sentence/word), `audio_lang`, `part` |
| `play_all` | "▶ Đọc cả Phần…" | `scope`, `part` |
| `toggle_meaning` | 👁 ẩn/hiện nghĩa VN | `part` |
| `lookup_selection` | Bôi đen để tra nghĩa | `part` |
| `change_rate` | Đổi tốc độ đọc | `rate` |
| `change_voice` | Đổi giọng | `audio_lang`, `voice` |
| `toggle_theme`, `toggle_survival`, `open_voice_panel`, `section_view` | Đổi giao diện, lọc câu sống còn, mở bảng giọng, bấm mục lục | |

**Xem sự kiện:** Thời gian thực → ô *"Số lượt sự kiện theo Tên sự kiện"* → bấm vào tên để xem tham số. Báo cáo đầy đủ: *Mức độ tương tác → Sự kiện* (sau 24–48 giờ).

**Xem thiết lập sự kiện trong GA4 ở đâu?** Sự kiện riêng được **định nghĩa trong code**. GA4 chỉ **nhận** và **liệt kê** những gì code gửi tới.

| Muốn | Vào đâu |
|---|---|
| Xem sự kiện + tham số **ngay** | Báo cáo → Thời gian thực → ô "Số lượng sự kiện theo Tên sự kiện" → bấm › lật trang, bấm tên sự kiện để xem tham số |
| **Danh sách** mọi sự kiện đã nhận (vài giờ đến 24 giờ mới hiện) | ⚙ Quản trị → Hiển thị dữ liệu → **Sự kiện** |
| Đánh dấu **sự kiện chính** (Key event) | Cùng trang trên, bật cột "Đánh dấu là sự kiện chính". Trang 1000 câu nên chọn `play_audio` |
| Bật/tắt **đo lường nâng cao** | ⚙ Quản trị → Luồng dữ liệu → chọn luồng → Đo lường nâng cao ⚙ |
| Xem **code** định nghĩa sự kiện | File V4, đoạn `/* 📊 GA4 — sự kiện riêng */` gần cuối file |

⚠️ **Tham số phải đăng ký thì báo cáo thường mới hiện.** Chưa đăng ký thì `audio_lang`, `part`… chỉ thấy ở Thời gian thực. Cách đăng ký: ⚙ **Quản trị → Hiển thị dữ liệu → Định nghĩa tùy chỉnh → Tạo phương diện tùy chỉnh**. Phạm vi chọn **Sự kiện**, tên tham số gõ **đúng từng chữ**. Dữ liệu chỉ được tính **từ lúc tạo trở đi**.

| Tên phương diện | Phạm vi | Tham số sự kiện |
|---|---|---|
| Ngôn ngữ nghe | Sự kiện | `audio_lang` |
| Kiểu nghe | Sự kiện | `audio_type` |
| Phần bài | Sự kiện | `part` |
| Tốc độ đọc | Sự kiện | `rate` |

**Người dùng lạ ở nước ngoài** (vd Mỹ) ngay khi trang mới lên: thường là công cụ quét của Google hoặc bot, không phải người thật.

**Thứ tự đúng khi làm nghề:** **Mục tiêu → KPI → sự kiện cần đo.** Tự hỏi *"mình đo X để quyết định điều gì?"* trước khi gắn sự kiện.

**Web của khách không sửa code được** (WordPress, Haravan…) thì dùng **Google Tag Manager** để tạo sự kiện bằng cách bấm chọn.

## 10. Web tĩnh và web cần database (Supabase)

| Muốn có | Cần database (Supabase)? |
|---|---|
| Xem nội dung, nghe đọc, đổi giao diện | ❌ Không, file HTML tự chứa là đủ |
| Nhớ cài đặt **trên từng máy** | ❌ Không, dùng localStorage của trình duyệt |
| Đăng nhập, lưu tiến trình, **đồng bộ nhiều thiết bị** | ✅ Có |
| Nhiều người dùng, mỗi người tiến trình riêng | ✅ Có |
| Sửa hoặc thêm nội dung ngay trên web | ✅ Có |

**GitHub Pages** = host web tĩnh miễn phí. Repo phải **public**, nên kiểm tra không có mật khẩu, key hay tài liệu có bản quyền trước khi mở. File trên 100MB bị chặn.

## 11. Thông tin tài khoản của TJ

| Website | Link | Property GA4 | Measurement ID |
|---|---|---|---|
| WordLoop | https://teoteo1081.github.io/W02-tj-wordloop-hub/ | TJ WordLoop Hub | `G-6X5S109XKM` |
| 1000 câu (CIA Mission) | https://teoteo1081.github.io/L00_ES-CN/ | TJ_CIA Mission_EN-ES-CN-VN | `G-8W2S7SP8WN` |

- Tài khoản GA4: **TJ Sai Gon Project**. Vào GA4: https://analytics.google.com
- Property ID của **TJ WordLoop Hub**: `556482840` (đọc từ đường link GA4: `.../a409949355p556482840/...` → số sau chữ **p** là Property ID, số sau chữ **a** là Account ID `409949355`). Nên đối chiếu lại 1 lần ở ⚙ Quản trị → Chi tiết về tài sản.

### Mẹo đọc ID ngay trên thanh địa chỉ
`analytics.google.com/analytics/web/#/a409949355p556482840/...`
- `a` + số = **Account ID** (tài khoản)
- `p` + số = **Property ID** (tài sản)
- Mã `G-…` **không** nằm trên link, phải vào Luồng dữ liệu mới thấy.
