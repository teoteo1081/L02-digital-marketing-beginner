# 🎮 Kế hoạch: Game ôn tập Digital Marketing (kiểu TJ WordLoop)

*Ngày viết: 2026-10-04*

## 1. Repo này có gì? (nói đơn giản)

Repo là một **khoá tự học Digital Marketing cho người mới**, gồm **11 bài (module 00 → 10)**. Mỗi bài có 4 phần:

| Phần | Nằm ở đâu | Là gì |
|---|---|---|
| 📖 Lý thuyết | `docs/pdf/` (bản gốc ở `docs/src/*.md`) | Đọc trước |
| ✍️ Bài thực hành | `lessons/<bài>/index.html` | Điền phiếu bài tập ngay trên web, có nút "Lưu tạm" |
| 💬 Câu hỏi mẫu cho chatbot | `lessons/<bài>/prompts.md` | Copy để hỏi Claude khi bí |
| ✅ Câu hỏi tự kiểm tra | `assessments/quiz-bank.md` | Khoảng 2 câu mỗi bài, có đáp án |

Nội dung 11 bài:

| # | Bài | Học gì (1 câu) |
|---|---|---|
| 00 | Cài đặt công cụ | Tạo tài khoản Facebook quảng cáo, Google, TikTok, Zalo OA, Canva |
| 01 | Tổng quan & hành trình khách hàng | Khách Việt mua hàng đi qua nhiều chỗ (Facebook, Zalo, so giá) chứ không đi thẳng |
| 02 | Phễu bán hàng (Funnel) | 4 bước: Biết đến → Cân nhắc → Mua → Quay lại mua |
| 03 | Chân dung khách hàng (Persona) | Vẽ "khách hàng mẫu" dựa trên dữ liệu thật, không đoán |
| 04 | Chọn nền tảng ở VN | Chọn 1-2 kênh vừa sức, không ôm hết |
| 05 | Quảng cáo Facebook & Instagram | Cấu trúc chiến dịch, chọn đối tượng, ngân sách |
| 06 | Quảng cáo TikTok, Google, Zalo | So sánh 3 nền tảng, khi nào dùng cái nào |
| 07 | SEO & viết bài cho website | Giúp web lên Google tự nhiên, không tốn tiền |
| 08 | Xây kênh & cộng đồng | Page, Group, Zalo OA, TikTok không trả tiền |
| 09 | Đo lường | Các chỉ số CTR, CPC, CPA, ROAS, mã UTM, GA4 |
| 10 | Bài cuối (Capstone) | Ghép tất cả thành 1 phễu bán hàng nhỏ hoàn chỉnh |

**Tiến độ hiện tại của TJ:** đang ở **bài 00**. Đã gắn GA4 cho WordLoop thành công ✅, còn thiếu phần GA4 Demo.
Ngoài ra có `logs/so-tay-kien-thuc.md`: sổ tay ghi lại những gì TJ đã hỏi về GA4 (rất hợp để đưa vào game!).

## 2. Ý tưởng game: "TJ MarketLoop" 🔁

Giống WordLoop: mỗi **thẻ từ** = 1 thuật ngữ marketing, có nghĩa **4 thứ tiếng (vi / en / zh / es)** + ví dụ đời thường.

Ví dụ 1 thẻ:

```json
{
  "id": "m02-funnel",
  "module": "02",
  "term": "Funnel",
  "vi": "Phễu bán hàng: các bước từ lúc khách biết đến tới lúc mua",
  "en": "Sales funnel: the steps a customer goes through before buying",
  "zh": "销售漏斗",
  "es": "Embudo de ventas",
  "example_vi": "Quán cà phê: thấy bài TikTok → nhắn Zalo hỏi giá → đặt ly → tuần sau đặt lại",
  "level": 1
}
```

Ước tính có **khoảng 150-200 thẻ** từ 11 bài (đã đếm sơ được ~44 thuật ngữ in đậm trong lý thuyết, cộng thêm từ sổ tay và quiz).

### Các chế độ chơi
1. **Lật thẻ** 🃏: thấy từ tiếng Anh, đoán nghĩa, lật xem 4 thứ tiếng.
2. **Chọn đáp án** 🎯: lấy từ `quiz-bank.md`, 4 lựa chọn.
3. **Xếp thứ tự** 🧩: ví dụ kéo 4 bước của phễu cho đúng thứ tự.
4. **Tính nhanh** 🧮 (bài 09): "1.000 lượt xem, 20 click, CTR = ?"

### Lưu tiến độ để không mất bài cũ 🔖
- Mỗi thẻ có nút **⭐ Đánh dấu** (bookmark) để ôn lại riêng.
- Lưu trong trình duyệt (localStorage): thẻ nào đã thuộc, thẻ nào hay sai, bài nào đã mở khoá.
- **Ôn lặp lại thông minh**: thẻ hay sai sẽ quay lại sớm hơn; thẻ đã thuộc thì vài ngày sau mới hỏi lại. Nhờ vậy bài cũ không bị quên khi học bài mới.
- Nút **Xuất / Nhập tiến độ (.json)** để chuyển máy hoặc đổi trình duyệt không mất dữ liệu.
- Bài mới chỉ **mở khoá** khi TJ học tới (đọc từ `logs/progress_tracker.json`), nhưng thẻ bài cũ luôn nằm trong vòng ôn.

## 3. Các bước làm (đề xuất)

1. **Tạo bộ thẻ cho bài 00 + 01 + 02** trước (khoảng 40 thẻ), lưu thành `game/data/cards.json`.
2. **Làm trang game** `game/index.html` (1 file, mở bằng double-click hoặc GitHub Pages), giao diện dễ thương 🌸.
3. **Thêm lưu tiến độ + bookmark + ôn lặp lại.**
4. **Gắn GA4** (mã của WordLoop hoặc tạo property mới) để TJ vừa chơi vừa thực hành đọc số liệu bài 09.
5. Mỗi khi TJ học xong 1 bài mới → thêm thẻ của bài đó vào `cards.json`.

## 4. Cần TJ trả lời
- **Làm game ở đâu?** Ngay trong repo này (thư mục `game/`) *(đề xuất)*, hay thêm vào repo WordLoop hiện có?
- Có muốn **dùng lại giao diện WordLoop** không? Nếu có, cần mở quyền cho Claude đọc repo `W02-tj-wordloop-hub` (thread này hiện chưa đọc được repo đó).
