# 🤖 AI 诊股（跳转 LINE 领取报告）

这个仓库是一个静态网页示例：用户在页面里输入股票代码/关键词后，点击按钮即可**跳转到 LINE**领取免费的 AI 诊股报告。

---

## ✅ 你需要改的只有 1 行（LINE 链接）

打开 `index.html`，找到下面这行：

```js
var target = "https://line.me/R/ti/p/@YOUR_LINE_ID"
```

把 `@YOUR_LINE_ID` 换成你的真实 LINE 链接（任选其一）：

- `https://line.me/R/ti/p/@你的LINE_ID`
- `https://lin.ee/你的短链`

---

## 🖼️ README 里放一个可点击图片（点击也能跳转 LINE）

把下面这段复制到你想展示的位置（图片路径已按本仓库结构写好）：

```md
[![点击加入 LINE 领取 AI 诊股](static/picture/anniu.png)](https://line.me/R/ti/p/@YOUR_LINE_ID)
```

你也可以换成别的图，例如：`static/images/wa.png`、`static/picture/bg.gif`。

---

## 🚀 一键上线（GitHub Pages）

1. 进入仓库：**Settings → Pages**
2. **Build and deployment**
   - Source：`Deploy from a branch`
   - Branch：`main` / `root`
3. 保存后，GitHub 会给你一个网址（形如 `https://你的用户名.github.io/仓库名/`）

上线后，任何人打开你的 Pages 页面，点击按钮就会跳转到 LINE。

---

## 📁 目录结构

- `index.html`：入口页面（按钮跳转 LINE 的逻辑在这里）
- `static/`：样式、脚本、图片资源

---

## 🔧 本地预览（可选）

直接双击打开 `index.html` 即可预览；或用 VS Code + Live Server 预览效果更好。
