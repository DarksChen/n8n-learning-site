import './style.css';

// ============================================
// Types
// ============================================

interface ResourceLink {
  label: string;
  url: string;
  type: 'video' | 'article' | 'community' | 'tool';
}

interface ApiGroup {
  title: string;
  required: boolean;
  links: ResourceLink[];
}

interface TaskItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  links?: ResourceLink[];
  apiGroups?: ApiGroup[];
}

interface Section {
  id: string;
  level: string;
  title: string;
  description: string;
  icon: string;
  tasks: TaskItem[];
}

interface Level2Resource {
  icon: string;
  title: string;
  desc: string;
  url: string;
}

// ============================================
// Data: Level 0
// ============================================

const LEVEL_0: Section = {
  id: 'level-0',
  level: 'LEVEL 0',
  title: '環境準備與部署',
  description: '開始之前，先把環境架好、工作流匯入完成，並設定好保護機制。請按照順序完成以下步驟。',
  icon: '🛠️',
  tasks: [
    {
      id: 'portaly-purchase',
      title: 'Portaly 購買教學：如何購買商品與找回已購買的商品',
      description: '第一次使用 Portaly 購買超級個體包？這支影片教你如何完成購買流程，以及未來如何找回你已經購買過的商品與下載檔案。',
      links: [
        { label: '📺 購買教學影片', url: 'https://youtu.be/L3x21UezXZY', type: 'video' },
      ],
    },
    {
      id: 'deploy-n8n',
      title: '使用 Zeabur 部署你的 n8n 伺服器',
      description: '如果你還沒有自己的 n8n 伺服器，請跟著教學在 Zeabur 上部署一台專屬伺服器。Zeabur 提供免費試用，部署過程只需要幾分鐘。',
      links: [
        { label: '📺 部署教學影片', url: 'https://youtu.be/04-s3FDox88', type: 'video' },
        { label: '🎁 Zeabur 邀請碼 (首次付費 +$5 USD)', url: 'https://zeabur.com/referral?referralCode=darkschen0603', type: 'community' },
      ],
    },
    {
      id: 'import-workflow',
      title: 'n8n 模板如何使用？從下載檔案、加入社群到匯入工作流程完整教學',
      description: '下載好的 JSON 檔案就是你的工作流模板。這支影片從下載檔案開始，教你如何加入學習社群、匯入工作流到你的 n8n，以及基本的操作方式。',
      links: [
        { label: '📺 模板使用完整教學', url: 'https://youtu.be/9kEOO1ouTtU', type: 'video' },
      ],
    },
    {
      id: 'line-error-notify',
      title: 'n8n 錯誤通知與 LINE 串接全攻略',
      description: '建立你的安全防護網！設定完成後，當你的任何 n8n 工作流出錯時，系統會自動透過 LINE 通知你。包含 LINE 官方帳號建立、Webhook 串接、社群金鑰 CSV 匯入等完整步驟。',
      links: [
        { label: '📺 LINE 串接教學影片', url: 'https://youtu.be/Vf5n-efKNS4', type: 'video' },
        { label: '📄 LINE API 圖文教學', url: 'https://lifecheatslab.com/n8n-line-api/', type: 'article' },
      ],
    },
    {
      id: 'learn-debug',
      title: '如何除錯，以及如何截圖發問',
      description: '遇到問題時，如何正確截圖、如何描述問題、如何在社群裡有效發問，讓教學助教和其他學員能快速幫到你。學會除錯是玩 n8n 最重要的技能之一。',
      links: [
        { label: '📺 除錯教學影片 (即將上線)', url: '', type: 'video' },
      ],
    },
    {
      id: 'n8n-style',
      title: '🎨 n8n 介面美化小工具',
      description: '你在教學影片裡看到的彩色連線，是因為裝了這個免費的 Chrome 外掛！想讓你的 n8n 編輯器更好看、更好辨識的話，可以去安裝。',
      links: [
        { label: '✨ Chrome 外掛下載', url: 'https://lifecheatslab.com/style', type: 'tool' },
      ],
    },
  ],
};

// ============================================
// Data: Level 1
// ============================================

const LEVEL_1: Section = {
  id: 'level-1',
  level: 'LEVEL 1',
  title: '五大核心實戰模板',
  description: '超級個體包的五大核心模板。依難易度與建議優先程度排序，你也可以根據自己的需求，優先做最需要的那一個。',
  icon: '🚀',
  tasks: [
    {
      id: 'ai-knowledge-assistant',
      title: 'AI 知識助手',
      subtitle: '⭐ 最簡單！強烈建議 n8n 新手優先嘗試，你會立刻感受到自動化的強大！',
      description: '你的私人 AI 研究員。透過 LINE 或 Telegram 傳送網址、圖片、語音、影片，AI 會自動幫你摘要整理並存入 Notion。模板內包含 Notion AI 知識庫模板，務必複製後使用，詳細請見教學影片。',
      links: [
        { label: '📺 影片教學', url: 'https://lifecheatslab.com/summary', type: 'video' },
        { label: '📄 文章教學', url: 'https://lifecheatslab.com/n8n-line-ai-notion/', type: 'article' },
      ],
      apiGroups: [
        {
          title: '🔴 一定需要',
          required: true,
          links: [
            { label: 'Gemini (免費額度)', url: 'https://lifecheatslab.com/freegeminiapi/', type: 'article' },
            { label: 'LINE API (跟 Telegram 擇一)', url: 'https://lifecheatslab.com/n8n-line-api/', type: 'article' },
            { label: 'Telegram API (跟 LINE 擇一)', url: 'https://lifecheatslab.com/n8n-telegram-api/', type: 'article' },
            { label: 'Notion API', url: 'https://lifecheatslab.com/n8n-notion-api/', type: 'article' },
          ],
        },
        {
          title: '🟡 解析 YouTube 影片需要',
          required: false,
          links: [
            { label: 'YouTube API (啟用 YouTube 權限)', url: 'https://lifecheatslab.com/n8n-google-api/', type: 'article' },
            { label: 'Apify API', url: 'https://lifecheatslab.com/n8n-apify/', type: 'article' },
          ],
        },
      ],
    },
    {
      id: 'news-editor',
      title: '你的專屬新聞編輯室',
      subtitle: '⭐ 也很簡單！適合跟「一鍵自動發文」串接，做成全自動社群發文',
      description: '自動從多個新聞來源抓取你感興趣的產業新聞，經 AI 彙整為圖文摘要，每天自動推送到你的 LINE 或 Email。每個人都能用，輕鬆打造個人專屬的資訊流。',
      links: [
        { label: '📺 影片教學', url: 'https://lifecheatslab.com/news', type: 'video' },
        { label: '📄 文章教學', url: 'https://lifecheatslab.com/n8n-news-media/', type: 'article' },
      ],
      apiGroups: [
        {
          title: '🔴 一定需要',
          required: true,
          links: [
            { label: 'Gemini (免費額度)', url: 'https://lifecheatslab.com/freegeminiapi/', type: 'article' },
          ],
        },
        {
          title: '🟡 新聞來源',
          required: false,
          links: [
            { label: 'GNews API', url: 'https://lifecheatslab.com/n8n-news-media/#申請GNews_的_API', type: 'article' },
            { label: 'NewsAPI', url: 'https://lifecheatslab.com/n8n-news-media/#申請_News_API_的_API', type: 'article' },
          ],
        },
        {
          title: '🟡 選配功能',
          required: false,
          links: [
            { label: 'Cloudinary API', url: 'https://lifecheatslab.com/n8n-cloudinary-api/', type: 'article' },
            { label: 'LINE API (若不用 Telegram 通知)', url: 'https://lifecheatslab.com/n8n-line-api/', type: 'article' },
            { label: 'Gmail API (啟用 Gmail 權限)', url: 'https://lifecheatslab.com/n8n-google-api/', type: 'article' },
          ],
        },
      ],
    },
    {
      id: 'linkedin-lead-gen',
      title: 'LinkedIn 潛在客戶自動開發',
      subtitle: '不難，建議都用看看，感受一下如何自動獲客與開發',
      description: '自動化你的 LinkedIn 潛在客戶開發流程。系統會自動搜尋目標客戶、整理客戶資料，並透過 Email 寄出開發信。讓 n8n 幫你找到並追蹤高價值目標客戶。',
      links: [
        { label: '📺 影片教學', url: 'https://youtu.be/ZnZygv6IhjY', type: 'video' },
      ],
      apiGroups: [
        {
          title: '🔴 一定需要',
          required: true,
          links: [
            { label: 'Serper API', url: 'https://lifecheatslab.com/n8n-serper/', type: 'article' },
            { label: 'Apify API', url: 'https://lifecheatslab.com/n8n-apify/', type: 'article' },
            { label: 'Gemini (免費額度)', url: 'https://lifecheatslab.com/freegeminiapi/', type: 'article' },
            { label: 'Gmail API (啟用 Gmail 權限)', url: 'https://lifecheatslab.com/n8n-google-api/', type: 'article' },
            { label: 'Google Sheets API (啟用 Sheets 權限)', url: 'https://lifecheatslab.com/n8n-google-api/', type: 'article' },
          ],
        },
      ],
    },
    {
      id: 'multi-platform-post',
      title: '一鍵自動發文',
      subtitle: '⚠️ 難度較高，記得看影片操作。若仍然太難可以考慮先做免費模板',
      description: '寫好一篇文章，一鍵同步發布到 Facebook、Instagram、Threads、X (Twitter)、LinkedIn。模板內包含 Notion 主控台模板，務必複製後使用，詳細請見教學影片。',
      links: [
        { label: '📺 影片教學', url: 'https://youtu.be/f7072xeSCJw', type: 'video' },
        { label: '📄 文章教學', url: 'https://lifecheatslab.com/post', type: 'article' },
      ],
      apiGroups: [
        {
          title: '🔴 各平台 API',
          required: true,
          links: [
            { label: 'Facebook API', url: 'https://lifecheatslab.com/n8n-facebook-api/', type: 'article' },
            { label: 'Instagram API', url: 'https://lifecheatslab.com/n8n-ig-api/', type: 'article' },
            { label: 'Threads API', url: 'https://lifecheatslab.com/n8n-threads-api/', type: 'article' },
            { label: 'X (Twitter) API', url: 'https://lifecheatslab.com/n8n-x-media-post/', type: 'article' },
            { label: 'LinkedIn API', url: 'https://lifecheatslab.com/n8n-linkedin-api/', type: 'article' },
          ],
        },
        {
          title: '🔴 圖庫 & 控制台',
          required: true,
          links: [
            { label: 'Cloudinary API (圖片上傳)', url: 'https://lifecheatslab.com/n8n-cloudinary-api/', type: 'article' },
            { label: 'Notion API (發文主控台)', url: 'https://lifecheatslab.com/n8n-notion-api/', type: 'article' },
          ],
        },
        {
          title: '🟡 通知功能',
          required: false,
          links: [
            { label: 'LINE API (LINE 通知)', url: 'https://lifecheatslab.com/n8n-line-api/', type: 'article' },
            { label: 'Telegram API (Telegram 通知)', url: 'https://lifecheatslab.com/n8n-telegram-api/', type: 'article' },
          ],
        },
      ],
    },
    {
      id: 'wordpress-ai-editor',
      title: 'WordPress 網站 AI 編輯',
      subtitle: '只需要申請數個 API，不難，但你得先有自己的網站（可以用 Zeabur 架）',
      description: '讓 AI 幫你撰寫與編輯 WordPress 文章，直接從 n8n 發布草稿到你的網站。模板內包含 Notion 主控台模板，務必複製後使用，詳細請見教學影片。',
      links: [
        { label: '📺 影片教學', url: 'https://youtu.be/RqlLjIg9ZSw', type: 'video' },
        { label: '📄 文章教學', url: 'https://lifecheatslab.com/n8n-wordpress-automation/', type: 'article' },
        { label: '📺 Zeabur 架站影片', url: 'https://youtu.be/sGbLVk0r7bI', type: 'video' },
      ],
      apiGroups: [
        {
          title: '🔴 一定需要',
          required: true,
          links: [
            { label: 'WordPress API', url: 'https://lifecheatslab.com/n8n-wordpress-api/', type: 'article' },
            { label: 'Gemini (免費額度)', url: 'https://lifecheatslab.com/freegeminiapi/', type: 'article' },
            { label: 'Cloudinary API', url: 'https://lifecheatslab.com/n8n-cloudinary-api/', type: 'article' },
          ],
        },
        {
          title: '🟡 控制台 & 通知',
          required: false,
          links: [
            { label: 'Notion API (發文主控台)', url: 'https://lifecheatslab.com/n8n-notion-api/', type: 'article' },
            { label: 'LINE API', url: 'https://lifecheatslab.com/n8n-line-api/', type: 'article' },
            { label: 'Telegram API', url: 'https://lifecheatslab.com/n8n-telegram-api/', type: 'article' },
          ],
        },
      ],
    },
  ],
};

// ============================================
// Data: Level 2
// ============================================

// (LEVEL_2 is defined below, after LEVEL_2_RESOURCES)

const LEVEL_2: Section = {
  id: 'level-2',
  level: 'LEVEL 2',
  title: '進階資源區',
  description: '完成上面的模板設定後，這裡有一些進階實用資源可以幫助你更上一層樓。',
  icon: '💎',
  tasks: [
    {
      id: 'google-drive-backup',
      title: '3 分鐘設定 Google Drive 自動備份',
      description: '保護你的心血！設定自動備份，讓 n8n 每天把你的工作流自動備份到 Google Drive。只需要 3 分鐘。',
      links: [
        { label: '📺 備份教學影片', url: 'https://youtu.be/GlT7NldtPEE', type: 'video' },
      ],
      apiGroups: [
        {
          title: '🔴 一定需要',
          required: true,
          links: [
            { label: 'Google Drive API', url: 'https://lifecheatslab.com/n8n-google-api/', type: 'article' },
          ],
        },
        {
          title: '🟡 影片內教學',
          required: false,
          links: [
            { label: 'n8n API（教學在影片內）', url: 'https://youtu.be/GlT7NldtPEE', type: 'video' },
          ],
        },
      ],
    },
  ],
};

const LEVEL_2_RESOURCES: Level2Resource[] = [
  {
    icon: '📖',
    title: 'n8n 自學筆記 — 從入門到進階',
    desc: '完整的 n8n 自學資源整理，包含官方文件、中文教學、本地部署影片等，適合想深入學習的你。',
    url: 'https://lifecheatslab.com/n8n-aiagent/',
  },
  {
    icon: '🧧',
    title: 'Gemini 送 90 天 300 美金的 AI 使用額度',
    desc: '免費 API 經常遇到報錯或限速太麻煩？或者想試用付費模型？領取這個免費額度開始體驗付費 API 的穩定與強大。',
    url: 'https://lifecheatslab.com/google-cloud-300-free-credit/',
  },
];

const SECTIONS: Section[] = [LEVEL_0, LEVEL_1, LEVEL_2];

// ============================================
// LocalStorage 管理
// ============================================

const STORAGE_PROGRESS = 'antigravity-sp-progress';
const STORAGE_THEME = 'antigravity-sp-theme';
const STORAGE_TIMER = 'antigravity-sp-timer';

function loadProgress(): Set<string> {
  try {
    const data = localStorage.getItem(STORAGE_PROGRESS);
    if (data) return new Set(JSON.parse(data));
  } catch { /* ignore */ }
  return new Set();
}

function saveProgress(completed: Set<string>): void {
  localStorage.setItem(STORAGE_PROGRESS, JSON.stringify([...completed]));
}

// ============================================
// Theme Toggle
// ============================================

function loadTheme(): string {
  return localStorage.getItem(STORAGE_THEME) || 'dark';
}

function applyTheme(theme: string): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_THEME, theme);
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');
  if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
  if (label) label.textContent = theme === 'dark' ? '深色模式' : '淺色模式';
}

function setupThemeToggle(): void {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ============================================
// Learning Timer
// ============================================

function loadTimerSeconds(): number {
  try {
    return parseInt(localStorage.getItem(STORAGE_TIMER) || '0', 10);
  } catch { return 0; }
}

function saveTimerSeconds(seconds: number): void {
  localStorage.setItem(STORAGE_TIMER, String(seconds));
}

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
}

function startTimer(): void {
  let seconds = loadTimerSeconds();
  const display = document.getElementById('timer-display');

  if (display) display.textContent = formatTime(seconds);

  setInterval(() => {
    seconds++;
    saveTimerSeconds(seconds);
    if (display) display.textContent = formatTime(seconds);
  }, 1000);
}

// ============================================
// Progress
// ============================================

let completedTasks = loadProgress();

function getAllTaskIds(): string[] {
  return SECTIONS.flatMap(s => s.tasks.map(t => t.id));
}

function updateProgressUI(): void {
  const allIds = getAllTaskIds();
  const total = allIds.length;
  const done = allIds.filter(id => completedTasks.has(id)).length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const bar = document.getElementById('progress-bar');
  const text = document.getElementById('progress-text');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = `${done} / ${total} 已完成`;

  document.querySelectorAll('.nav-item[data-task-id]').forEach(el => {
    const id = el.getAttribute('data-task-id')!;
    if (!id) return;
    el.classList.toggle('completed', completedTasks.has(id));
    const check = el.querySelector('.nav-check');
    if (check) check.textContent = completedTasks.has(id) ? '✓' : '';
  });

  document.querySelectorAll('.task-card[data-task-id]').forEach(el => {
    const id = el.getAttribute('data-task-id')!;
    el.classList.toggle('completed', completedTasks.has(id));
    const cb = el.querySelector('.task-checkbox');
    if (cb) {
      cb.classList.toggle('checked', completedTasks.has(id));
      cb.textContent = completedTasks.has(id) ? '✓' : '';
    }
  });
}

function toggleTask(taskId: string): void {
  if (completedTasks.has(taskId)) completedTasks.delete(taskId);
  else completedTasks.add(taskId);
  saveProgress(completedTasks);
  updateProgressUI();
}

// ============================================
// Render: Sidebar Nav
// ============================================

function renderSidebarNav(): void {
  const nav = document.getElementById('sidebar-nav')!;
  let html = '';

  // Top-level intro nav items
  html += `
    <div class="nav-item" data-section="" data-task-id="" data-scroll-to="site-intro">
      <span class="nav-check" style="border:none;">📌</span>
      <span>本學習站的使用說明</span>
    </div>
    <div class="nav-item" data-section="" data-task-id="" data-scroll-to="product-intro">
      <span class="nav-check" style="border:none;">📦</span>
      <span>超級個體包內容介紹</span>
    </div>
  `;
  for (const section of SECTIONS) {
    html += `<div class="nav-section-title">${section.icon} ${section.level} — ${section.title}</div>`;
    for (const task of section.tasks) {
      const done = completedTasks.has(task.id);
      html += `
        <div class="nav-item ${done ? 'completed' : ''}" data-task-id="${task.id}" data-section="${section.id}">
          <span class="nav-check">${done ? '✓' : ''}</span>
          <span>${task.title}</span>
        </div>`;
    }
    if (section.id === 'level-2') {
      for (const res of LEVEL_2_RESOURCES) {
        html += `
          <div class="nav-item" data-section="level-2" data-task-id="">
            <span class="nav-check" style="border:none;">${res.icon}</span>
            <span>${res.title}</span>
          </div>`;
      }
    }
  }
  nav.innerHTML = html;

  nav.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const scrollTo = item.getAttribute('data-scroll-to');
      const taskId = item.getAttribute('data-task-id');
      const sectionId = item.getAttribute('data-section');
      let target: Element | null = null;
      if (scrollTo) {
        target = document.getElementById(scrollTo);
      } else if (taskId) {
        target = document.querySelector(`.task-card[data-task-id="${taskId}"]`);
      } else if (sectionId) {
        target = document.getElementById(sectionId);
      }
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('sidebar')?.classList.remove('open');
      document.getElementById('sidebar-overlay')?.classList.remove('open');
    });
  });
}

// ============================================
// Render: Main Content
// ============================================

function renderLink(link: ResourceLink): string {
  if (!link.url) return `<span class="resource-link ${link.type}" title="即將更新">${link.label}</span>`;
  return `<a class="resource-link ${link.type}" href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`;
}

function renderApiGroups(groups: ApiGroup[]): string {
  return groups.map(g => `
    <div class="api-group">
      <div class="api-group-title ${g.required ? 'required' : 'optional'}">${g.title}</div>
      <div class="resource-links">${g.links.map(renderLink).join('')}</div>
    </div>
  `).join('');
}

function renderMainContent(): void {
  const app = document.getElementById('app')!;
  let html = '';

  // ========== Brand Hero ==========
  html += `
    <div class="brand-hero" id="site-intro">
      <div class="brand-hero-badge">🚀 n8n 超級個體包</div>
      <h1 class="brand-hero-title">n8n 新手實戰學習站</h1>
      <p class="brand-hero-subtitle">專為創業者、一人公司與中小企業主打造的<br><strong>n8n 自動化模板學習平台</strong></p>
      <p class="brand-hero-desc">
        免費學習、真實模板、一步步帶你踏入 AI 自動化的世界。
      </p>
    </div>
  `;

  // ========== Feature Cards ==========
  html += `
    <div class="features-grid">
      <div class="feature-card">
        <span class="feature-icon">🎯</span>
        <h3>為什麼做這個？</h3>
        <p>我自學 n8n 花了 <strong>1,500 小時</strong>。這些模板的初衷，是幫你節省時間，讓你透過真實會用到的模板，踏入 AI 自動化領域的第一步。</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">📦</span>
        <h3>真實可用的模板</h3>
        <p>不是概念教學，而是直接可以匯入你的 n8n、立刻運行的工作流。跟著教學做完就能用，有興趣再研究裡面的邏輯並改造成自己的版本。</p>
      </div>
      <div class="feature-card">
        <span class="feature-icon">🚶</span>
        <h3>從零開始，一步步走</h3>
        <p>n8n 門檻確實相對較高。但搭配這裡的教學影片，所有東西看得到、摸得到，出錯可以看記錄，按步驟來就能完成。</p>
      </div>
    </div>
  `;

  // ========== Steps Flow ==========
  html += `
    <div class="steps-flow">
      <div class="steps-flow-title">📋 如何使用這個網站？</div>
      <div class="steps-container">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>環境部署</h4>
            <p>在 Level 0 架好你的 n8n 伺服器，匯入模板，設定好保護機制。</p>
          </div>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>跟著影片實戰</h4>
            <p>在 Level 1 依序完成五大核心模板，跟著教學影片一步一步操作。</p>
          </div>
        </div>
        <div class="step-connector"></div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>深入研究與改造</h4>
            <p>在 Level 2 探索進階資源，把模板改造成更適合你自己的版本。</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // ========== Info Banner ==========
  html += `
    <div class="info-banner">
      <div class="info-text">
        📢 本 n8n 學習網站皆可<strong>免費瀏覽與學習</strong>，但教學中所使用的模板為收費模板。<br>
        若不想購買，所有模板也有提供<strong>免費版本</strong>，可在模板商城內下載。免費版本均具備核心功能，讓你自行研究。<br>
        超級個體包收錄的實戰版本講求<strong>開箱即用</strong>，讓創業者和一人公司可以馬上使用，提升生產力、節省時間。
      </div>
      <div class="info-links">
        <a class="info-link purchase" href="https://portaly.cc/darks/product/f3aCNj157SjzGLcr4uAl" target="_blank" rel="noopener">🛒 購買超級個體包</a>
        <a class="info-link" href="https://www.facebook.com/chenshaoyun0603/" target="_blank" rel="noopener">📘 Facebook</a>
        <a class="info-link" href="https://www.threads.com/@darks0603" target="_blank" rel="noopener">🧵 Threads</a>
        <a class="info-link" href="https://portaly.cc/darks" target="_blank" rel="noopener">🏪 Portaly 模板商城</a>
      </div>
    </div>
  `;

  // ========== Tip ==========
  html += `
    <div class="tip-box">
      <div class="tip-title">💡 小提醒</div>
      完成的項目可以打勾，進度會自動儲存在你的瀏覽器。建議按照 Level 0 → Level 1 → Level 2 的順序進行。本站進度記錄於你的瀏覽器本機，建議固定使用同一台電腦觀看。
    </div>
  `;

  // ========== Product Intro — 超級個體包內容介紹 ==========
  html += `
    <div class="product-intro" id="product-intro">
      <div class="product-intro-header">
        <h2>📦 超級個體包內容介紹</h2>
        <p class="product-intro-subtitle">最適合新手的第一個 n8n 模板組合包 — 給超級個體的你，n8n 自動化武器庫</p>
        <p class="product-intro-desc">你不只能使用，還能隨意修改，甚至未來自行開發時拿我已經做好的功能直接使用，能替你省下上百小時。<br>這些模板是我自己也會用，學員也經常使用，甚至拿來魔改、組合、拆解的真實可實戰使用的模板。</p>
        <p class="product-intro-desc">這些模板不是天下無敵，我希望大家先使用，邊用邊學，進而修改成更適合自己使用的。就算不修改，哪怕只是堅持使用一兩個模板，也能帶來效益。<br>模板都有使用教學，希望讓小白也能輕鬆使用，購買後還能進專屬群，有問題能在裡面交流，新手問題也可以。</p>
      </div>

      <div class="product-templates">
        <h3>🛠️ 內含 5 大核心自動化武器</h3>

        <div class="template-showcase">
          <div class="template-item">
            <div class="template-icon">🌐</div>
            <h4>一鍵自動多平台發文</h4>
            <p>在 Notion 寫好文章，一鍵同步發布到 Facebook、Instagram、Threads、X、LinkedIn。支援即時發布與排程發布，失敗自動重試。</p>
            <a class="resource-link video" href="https://www.youtube.com/watch?v=LPeWgGcDWI8" target="_blank" rel="noopener">📺 效果展示</a>
          </div>
          <div class="template-item">
            <div class="template-icon">🧠</div>
            <h4>AI 知識助手</h4>
            <p>把 LINE/Telegram 變成第二大腦的入口。看到好文章、影片直接轉傳，AI 自動摘要整理並歸檔到 Notion。支援文字、連結、圖片、錄音檔。</p>
            <a class="resource-link video" href="https://www.youtube.com/watch?v=W4LOaf-jJoA" target="_blank" rel="noopener">📺 效果展示</a>
          </div>
          <div class="template-item">
            <div class="template-icon">📰</div>
            <h4>你的專屬新聞編輯室</h4>
            <p>每天定時匯總最新新聞，生成圖文並茂的日報推送到 LINE/Telegram/Gmail。甚至能將新聞轉成模擬電台 DJ 語音，通勤時用聽的。</p>
            <a class="resource-link video" href="https://www.youtube.com/watch?v=Akr2f0iwU7M" target="_blank" rel="noopener">📺 效果展示</a>
          </div>
          <div class="template-item">
            <div class="template-icon">✍️</div>
            <h4>WordPress 網站 AI 編輯</h4>
            <p>將原始文章改寫成符合 SEO 結構的部落格文章，自動生成標題、描述與精選圖片，並自動上傳至 WordPress。</p>
            <a class="resource-link video" href="https://www.youtube.com/watch?v=at3sAsWIdlA" target="_blank" rel="noopener">📺 效果展示</a>
          </div>
          <div class="template-item">
            <div class="template-icon">👔</div>
            <h4>LinkedIn 潛在客戶自動開發</h4>
            <p>輸入模糊指令，AI 自動挖掘潛在客戶名單、深度肉搜背景、自動寫好客製化開發信存入 Gmail 草稿。</p>
            <a class="resource-link video" href="https://www.youtube.com/watch?v=12NVY0Wl0Fw" target="_blank" rel="noopener">📺 效果展示</a>
          </div>
        </div>
      </div>

      <div class="product-extras">
        <div class="product-extra-card">
          <h4>💡 運行模板產生的花費</h4>
          <ul>
            <li><strong>n8n 部署費用</strong>：Zeabur 雲端部署每月最多 5~10 美金，新手期能用免費額度免費運行。</li>
            <li><strong>AI 費用</strong>：生圖功能需要付費 Gemini，可領取 Google 送的 90 天 300 美金額度免費使用。</li>
            <li><strong>爬蟲費用</strong>：模板使用的爬蟲均有免費額度，但量若極大則仍需自行付費。</li>
            <li><strong>設計原理</strong>：盡可能用免費資源，讓大家能用低成本的方式先入門學習，再根據自己喜好與預算調整。</li>
          </ul>
        </div>
        <div class="product-extra-card highlight">
          <h4>🚨 社群權益重大通知</h4>
          <p>購買「超級個體包」目前仍包含 <strong>n8n 實戰營 LINE 群組</strong>與 <strong>Discord 討論區</strong>的加入資格。</p>
          <ul>
            <li>⚡ 入群資格保留至：<strong>2026/12/31</strong></li>
            <li>內有 <strong>400+</strong> 位 AI 自動化實踐者</li>
            <li>有熱心助理會回答大家問題，小白也歡迎，助理回答不上來我會回答</li>
            <li>注意：年後調漲時，此群組將轉為「訂閱制」經營，現在是最後以「買斷制」獲得近一年入場券的機會</li>
          </ul>
        </div>
        <div class="product-extra-card">
          <h4>🎁 目前購入限定贈品</h4>
          <ul>
            <li>🛡️ <strong>Notion 自動備份流</strong> — 確保你的心血不會因意外消失</li>
            <li>📩 <strong>LINE/Telegram 通知流</strong> — 將 n8n 的任何動靜即時傳送到你的手機</li>
            <li>📝 <strong>Notion 專屬主控台模板</strong> — 與 n8n 完美對接的 Notion Dashboard</li>
          </ul>
          <p style="margin-top: 10px; font-size: 0.82rem; color: var(--text-muted);">選購有疑問都歡迎<a href="https://www.facebook.com/chenshaoyun0603/" target="_blank" rel="noopener">私訊我 FB</a>。</p>
        </div>
      </div>
    </div>
  `;

  // Sections
  for (const section of SECTIONS) {
    html += `
      <hr class="section-divider" />
      <div class="section-heading" id="${section.id}">
        <span class="level-badge">${section.icon} ${section.level}</span>
        <h2>${section.title}</h2>
        <p class="section-desc">${section.description}</p>
      </div>
    `;

    // Task cards
    for (const task of section.tasks) {
      const done = completedTasks.has(task.id);
      const linksHtml = task.links?.length
        ? `<div class="resource-links">${task.links.map(renderLink).join('')}</div>`
        : '';
      const apiHtml = task.apiGroups?.length ? renderApiGroups(task.apiGroups) : '';
      const subtitleHtml = task.subtitle
        ? `<div class="task-subtitle">${task.subtitle}</div>`
        : '';

      html += `
        <div class="task-card ${done ? 'completed' : ''}" data-task-id="${task.id}">
          <div class="task-header">
            <div class="task-checkbox ${done ? 'checked' : ''}" data-task-id="${task.id}">${done ? '✓' : ''}</div>
            <div class="task-title">${task.title}</div>
          </div>
          ${subtitleHtml}
          <div class="task-desc">${task.description}</div>
          ${linksHtml}
          ${apiHtml}
        </div>
      `;
    }

    // Level 2 Resources
    if (section.id === 'level-2') {
      html += `<div class="resource-card-list">`;
      for (const res of LEVEL_2_RESOURCES) {
        html += `
          <a class="resource-card" href="${res.url}" target="_blank" rel="noopener">
            <span class="rc-icon">${res.icon}</span>
            <div class="rc-info">
              <h4>${res.title}</h4>
              <p>${res.desc}</p>
            </div>
          </a>`;
      }
      html += `</div>`;
    }
  }

  app.innerHTML = html;

  // Checkbox click handlers
  app.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = (cb as HTMLElement).getAttribute('data-task-id');
      if (taskId) toggleTask(taskId);
    });
  });
}

// ============================================
// Mobile Sidebar
// ============================================

function setupMobileSidebar(): void {
  const toggle = document.getElementById('mobile-nav-toggle')!;
  const sidebar = document.getElementById('sidebar')!;
  const overlay = document.getElementById('sidebar-overlay')!;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// ============================================
// Init
// ============================================

function init(): void {
  applyTheme(loadTheme());
  setupThemeToggle();
  startTimer();
  renderSidebarNav();
  renderMainContent();
  updateProgressUI();
  setupMobileSidebar();
}

document.addEventListener('DOMContentLoaded', init);
