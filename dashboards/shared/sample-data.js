// Dữ liệu MẪU (minh hoạ) — không phải số liệu thật, chỉ dùng để luyện đọc dashboard.
const SAMPLE = {
  labels7d: ["T2","T3","T4","T5","T6","T7","CN"],

  facebook: {
    reach:       [4200, 4600, 5100, 4800, 6200, 7100, 6500],
    impressions: [5800, 6300, 7000, 6600, 8500, 9700, 8900],
    clicks:      [180, 210, 240, 205, 290, 340, 300],
    spend:       [420000, 460000, 510000, 480000, 600000, 690000, 640000],
    campaigns: [
      {name:"Ưu đãi khai trương", reach:18500, ctr:5.1, cpc:2200, cpa:38000, roas:3.4},
      {name:"Remarketing khách cũ", reach:9200, ctr:6.8, cpc:1800, cpa:29000, roas:4.6},
      {name:"Video giới thiệu", reach:14300, ctr:3.9, cpc:2600, cpa:52000, roas:2.1},
    ]
  },

  google: {
    impressions: [3200, 3400, 3100, 3600, 3900, 3000, 2800],
    clicks:      [96, 108, 89, 122, 135, 94, 81],
    conversions: [6, 8, 5, 9, 11, 7, 6],
    keywords: [
      {name:"giá khoá học tiếng anh online", clicks:210, cpc:8500, convRate:4.2, qualityScore:8},
      {name:"học tiếng anh cho người đi làm", clicks:340, cpc:5200, convRate:2.6, qualityScore:7},
      {name:"tiếng anh giao tiếp cấp tốc", clicks:150, cpc:9800, convRate:3.1, qualityScore:6},
    ]
  },

  tiktok: {
    views:      [12000, 15500, 9800, 21000, 34000, 41000, 28000],
    engagement: [4.2, 4.8, 3.9, 5.6, 7.1, 8.3, 6.4],
    videos: [
      {name:"Video pha chế behind-the-scenes", views:48200, cpm:22000, cpa:31000},
      {name:"Video review khách hàng thật", views:35100, cpm:19500, cpa:25000},
      {name:"Video ưu đãi cuối tuần", views:21400, cpm:24800, cpa:41000},
    ]
  },

  zalo: {
    reach:    [2100, 2400, 2200, 2600, 3100, 2900, 2500],
    followerGrowth: [12, 18, 9, 22, 31, 27, 19],
    campaigns: [
      {name:"Quảng cáo dẫn về Zalo OA", reach:9800, ctr:3.4, cpc:1500},
      {name:"Ưu đãi tư vấn miễn phí", reach:6200, ctr:5.1, cpc:1200},
    ]
  },

  ga4: {
    sessions:   [820, 910, 760, 1050, 1400, 1180, 990],
    users:      [640, 700, 590, 820, 1080, 900, 760],
    engagementRate: [52, 55, 48, 58, 63, 60, 57],
    sources: [
      {name:"Organic Search", sessions:2400, share:34},
      {name:"Paid Social", sessions:1900, share:27},
      {name:"Direct", sessions:1300, share:18},
      {name:"Referral (Group/Zalo)", sessions:900, share:13},
      {name:"Khác", sessions:600, share:8},
    ],
    funnel: [
      {stage:"Sessions", count:8300},
      {stage:"Xem từ 2 trang trở lên", count:3100},
      {stage:"Thêm vào giỏ / Nhắn liên hệ", count:540},
      {stage:"Chuyển đổi (mua/để lại thông tin)", count:210},
    ]
  }
};

// Vẽ bảng dữ liệu thay thế cho biểu đồ (accessibility fallback)
function renderTable(containerId, headers, rows){
  const el = document.getElementById(containerId);
  if(!el) return;
  let html = '<table class="data-table" id="'+containerId+'-table"><thead><tr>';
  headers.forEach(h => html += `<th>${h}</th>`);
  html += '</tr></thead><tbody>';
  rows.forEach(r => {
    html += '<tr>' + r.map(c => `<td>${c}</td>`).join('') + '</tr>';
  });
  html += '</tbody></table>';
  el.insertAdjacentHTML('beforeend', html);
}

function toggleTable(tableId, btn){
  const t = document.getElementById(tableId);
  t.classList.toggle('show');
  btn.textContent = t.classList.contains('show') ? 'Ẩn bảng dữ liệu' : 'Xem dạng bảng';
}

function chartDefaults(){
  const styles = getComputedStyle(document.documentElement);
  return {
    grid: styles.getPropertyValue('--gridline').trim(),
    text: styles.getPropertyValue('--text-secondary').trim(),
    series: [1,2,3,4,5].map(i => styles.getPropertyValue('--series-'+i).trim())
  };
}
