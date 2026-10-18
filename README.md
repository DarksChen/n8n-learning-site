# n8n 超級個體包 — 新手實戰學習站

> 專為創業者、一人公司與中小企業主打造的 n8n 自動化模板學習平台

🔗 **[立即訪問學習站](https://darkschen.github.io/n8n-learning-site/)**

---

## 📖 這是什麼？

這是一個 **完全免費、開源** 的學習網站，教你從零開始使用 n8n 自動化模板。

- 🛠️ **環境部署教學** — 從零開始架設你的 n8n 伺服器
- 🚀 **五大核心模板實戰** — 跟著影片一步步完成
- 💎 **進階資源** — 自學筆記、API 教學、免費額度
- 📊 **學習進度追蹤** — 自動儲存在瀏覽器，下次回來繼續

所有教學內容免費公開。超級個體包與實戰版模板已停售，但每個模板仍有免費版本（核心功能）可以下載：https://portaly.cc/darks

---

## ⭐ 喜歡這個專案？

如果這個學習站對你有幫助，請給個 **Star** ⭐ 支持一下！

點右上角的 **⭐ Star** 按鈕即可，不用登入 GitHub 帳號以外的任何操作。

---

## 🔧 想修改？想做自己的版本？完全沒問題！

本專案使用 **MIT License** 開源，你可以：

- ✅ 自由修改外觀、配色、內容
- ✅ 拿去做自己的學習站、個人網站
- ✅ 商用完全 OK
- ✅ 唯一條件：**保留原始署名**（保留 LICENSE 文件即可）

### 🚀 三步驟做出你自己的版本

#### **Step 1：Fork（複製一份到你自己的 GitHub）**

1. 點這個頁面右上角的 **「Fork」** 按鈕
2. 在彈出的頁面中，直接點 **「Create fork」**
3. 完成！你的 GitHub 帳號下就會有一份完整的副本

#### **Step 2：開啟 GitHub Pages（讓你的版本上線）**

1. 進入你 Fork 後的 repo（網址會是 `github.com/你的帳號/n8n-learning-site`）
2. 點上方的 **「Settings」** → 左側選 **「Pages」**
3. 在 **「Source」** 選 **「GitHub Actions」**
4. 等 1~2 分鐘，你的學習站就上線了！
5. 網址：`https://你的帳號.github.io/n8n-learning-site/`

#### **Step 3：修改內容（讓 AI 幫你改）**

最快的方法是 **讓 AI 幫你改**。以下是幾種方式：

**方法 A：直接在 GitHub 網頁上編輯**
1. 在你的 repo 中，點進你想改的檔案（例如 `src/main.ts`）
2. 點右上角的 **鉛筆圖示** ✏️ 進入編輯模式
3. 修改完後，點 **「Commit changes」** 儲存
4. GitHub Actions 會自動重新部署

**方法 B：用 AI 輔助修改（推薦）**
1. 把你想改的檔案內容複製貼到任何 AI 工具（ChatGPT、Claude、Gemini 等）
2. 告訴 AI 你想要改什麼，例如：
   - 「幫我把配色改成藍色主題」
   - 「幫我把模板內容換成我自己的教學」
   - 「幫我新增一個 Level 3 區塊」
3. AI 會給你修改後的程式碼，貼回 GitHub 即可

**方法 C：Clone 到本地用 AI 編輯器**
```bash
# 1. Clone 你 Fork 的 repo
git clone https://github.com/你的帳號/n8n-learning-site.git
cd n8n-learning-site

# 2. 安裝依賴
npm install

# 3. 啟動本地開發伺服器
npm run dev

# 4. 用 VS Code + AI 助手（Copilot / Cursor / Windsurf）開啟
#    直接對 AI 說你想改什麼，它會幫你改好
code .

# 5. 改完後推上去
git add .
git commit -m "我的修改"
git push
```

### 📁 主要檔案說明

| 檔案 | 說明 | 你可能想改的 |
|------|------|-------------|
| `src/main.ts` | 所有內容和邏輯 | 教學內容、連結、模板介紹 |
| `src/style.css` | 所有樣式 | 配色、字體、排版 |
| `index.html` | 頁面結構 | 網站標題、Meta 資訊 |

> 💡 **Tip**: 不用懂程式也能改！把檔案內容丟給 AI，告訴它你想改什麼就好。

---

## 🛠️ 技術

- [Vite](https://vitejs.dev/) + TypeScript
- 純靜態網站，零後端，零資料庫
- GitHub Pages 自動部署（push 即上線）

---

## 👨‍💻 作者

**陳盟升 (Darks)**

| 平台 | 連結 |
|------|------|
| 🌐 官網 | [人生攻略研究所](https://lifecheatslab.com/) |
| 📘 Facebook | [陳盟升](https://www.facebook.com/chenshaoyun0603/) |
| 🧵 Threads | [@darks0603](https://www.threads.com/@darks0603) |
| ▶️ YouTube | [@darkschen](https://www.youtube.com/@darkschen) |
| 🏪 模板商城 | [Portaly](https://portaly.cc/darks) |

---

## 📄 授權

[MIT License](./LICENSE) — 自由使用、修改、商用，保留署名即可。
