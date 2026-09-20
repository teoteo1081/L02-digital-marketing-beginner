# Hướng dẫn cho Claude — đọc/ghi `progress_tracker.json`

File này hướng dẫn Claude (agent) cách dùng `logs/progress_tracker.json` để hỗ trợ người học theo
dõi tiến độ qua nhiều phiên làm việc khác nhau. Đọc file này trước khi đọc/cập nhật tracker.

## Cấu trúc file (1 record mẫu đầy đủ)

```json
{
  "last_updated": "2026-09-20",
  "current_module": "02",
  "next_action_suggestion": "Làm bài thực hành module 02 (funnel), sau đó làm quiz module 02.",
  "modules": [
    {
      "module_id": "02",
      "ten_module": "Marketing Funnel",
      "trang_thai": "dang_hoc",
      "ngay_bat_dau": "2026-09-18",
      "ngay_hoan_thanh": null,
      "diem_quiz": null,
      "danh_gia_bai_tap": null,
      "submission_file": null,
      "ghi_chu": "Đã đọc xong PDF, đang làm worksheet funnel cho quán cà phê của user."
    }
  ]
}
```

- `trang_thai` chỉ nhận 1 trong 3 giá trị: `"chua_bat_dau"`, `"dang_hoc"`, `"hoan_thanh"`.
- `danh_gia_bai_tap` khi có: một trong `"Đạt"`, `"Khá"`, `"Giỏi"` (theo `assessments/rubric-thuc-hanh.md`).
- `submission_file`: đường dẫn tương đối tới file trong `logs/submissions/` (vd:
  `"submissions/bai-lam-module-02-20260918.md"`), hoặc `null` nếu chưa có.
- Ngày dùng định dạng `YYYY-MM-DD`.

## Khi nào ĐỌC file này

- Ngay khi người dùng hỏi về tiến độ ("tôi học tới đâu rồi", "tôi nên học gì tiếp theo", "tóm tắt
  lại những gì tôi đã làm").
- Đọc `last_updated`, `current_module`, `next_action_suggestion` ở cấp gốc TRƯỚC — đây là câu trả
  lời nhanh, đủ cho hầu hết câu hỏi. Chỉ duyệt sâu vào mảng `modules` khi người dùng cần chi tiết
  (vd: "tôi làm quiz module 5 được mấy điểm", "cho tôi xem lại toàn bộ tiến độ").

## Khi nào GHI/cập nhật file này

Cập nhật ngay khi người dùng báo một trong các sự kiện sau (không cần đợi họ yêu cầu "lưu lại"):

1. **Bắt đầu học 1 module** → set `trang_thai: "dang_hoc"`, điền `ngay_bat_dau` nếu chưa có.
2. **Báo đã hoàn thành module / nộp bài làm** (thường kèm đường dẫn file trong
   `logs/submissions/`) → đọc nội dung file đó trước để nắm bài làm thật (không chỉ tin theo lời
   người dùng), rồi set `trang_thai: "hoan_thanh"`, điền `ngay_hoan_thanh`, `submission_file`, và
   tóm tắt ngắn vào `ghi_chu`.
3. **Báo điểm quiz** → điền `diem_quiz`.
4. **Yêu cầu chấm bài thực hành** → đối chiếu với `assessments/rubric-thuc-hanh.md`, điền
   `danh_gia_bai_tap`.

Sau mỗi lần cập nhật mảng `modules`, LUÔN cập nhật lại 3 trường cấp gốc:
`last_updated` (hôm nay), `current_module` (module đang `dang_hoc`, hoặc module tiếp theo nếu vừa
hoàn thành), `next_action_suggestion` (1 câu gợi ý hành động tiếp theo, cụ thể).

## Lưu ý quan trọng

- **Không tự suy diễn định dạng khác** — luôn giữ đúng cấu trúc và tên trường như record mẫu ở
  trên, kể cả khi thêm module mới (không có, vì cố định 11 module 00-10).
- **Ưu tiên đọc file trong `logs/submissions/`** khi người dùng báo hoàn thành module — đây là nội
  dung thật, đáng tin hơn lời tường thuật miệng.
- File JSON phải luôn hợp lệ sau khi ghi (dùng `jq . logs/progress_tracker.json` để kiểm tra nếu
  có Bash, hoặc đọc lại bằng mắt trước khi lưu).
