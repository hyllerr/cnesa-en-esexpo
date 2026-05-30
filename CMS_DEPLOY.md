# 🚀 Sveltia CMS 部署指南

## 项目结构

```
esie-website/
├── public/
│   └── admin/
│       ├── index.html    # CMS 入口页面
│       └── config.yml    # CMS 配置文件
├── src/
│   └── content/          # 内容目录（CMS 写入位置）
│       ├── news/         # 新闻动态
│       ├── exhibitors/   # 参展商
│       ├── sponsors/     # 赞助商
│       ├── speakers/     # 演讲嘉宾
│       ├── pages/        # 页面内容
│       └── settings/     # 网站设置
└── CMS_DEPLOY.md         # 本文档
```

## 部署步骤

### 第 1 步：代码已准备好

✅ 本仓库已集成 Sveltia CMS
✅ 配置了 5 个内容集合 + 网站设置
✅ 示例内容已创建

### 第 2 步：部署 sveltia-cms-auth Worker

1. 访问：https://github.com/sveltia/sveltia-cms-auth
2. 点击 "Deploy to Cloudflare Workers" 按钮
3. 按照向导完成部署

或者使用 Wrangler CLI：
```bash
npm install -g wrangler
wrangler login
wrangler deploy
```

### 第 3 步：创建 GitHub OAuth App

1. 访问：https://github.com/settings/applications/new
2. 填写以下信息：
   - **Application name**: ESIE CMS
   - **Homepage URL**: `https://esie.pages.dev`
   - **Authorization callback URL**: `https://sveltia-cms-auth.esie.workers.dev/callback`
3. 点击 "Register application"
4. 复制 **Client ID**
5. 点击 "Generate a new client secret"，复制 **Client Secret**

### 第 4 步：配置 Worker 环境变量

在 Cloudflare Worker 控制台中设置：
```
GITHUB_CLIENT_ID=your_client_id
GITHUB_CLIENT_SECRET=your_client_secret
```

### 第 5 步：更新 config.yml

更新 `public/admin/config.yml` 中的 `base_url`：
```yaml
backend:
  name: github
  repo: hyllerr/cnesa-en-esexpo
  branch: main
  base_url: https://sveltia-cms-auth.esie.workers.dev  # ← 更新为你的 Worker 地址
  auth_endpoint: auth
```

### 第 6 步：部署到 Cloudflare Pages

```bash
npm run build
# 或通过 Git 推送，Cloudflare Pages 自动构建
```

## ✅ 访问 CMS

部署完成后，访问：
```
https://your-domain.pages.dev/admin
```

使用 GitHub 账号登录即可开始编辑内容！

## 📝 已配置的内容集合

| 集合名称 | 说明 | 路径 |
|---------|------|------|
| 新闻动态 | 展会新闻、行业动态、政策解读 | `src/content/news/` |
| 参展商 | 参展企业信息 | `src/content/exhibitors/` |
| 赞助商 | 合作伙伴和赞助商 | `src/content/sponsors/` |
| 演讲嘉宾 | 论坛演讲嘉宾 | `src/content/speakers/` |
| 页面内容 | 首页配置、关于我们 | `src/content/pages/` |
| 网站设置 | 全局设置、SEO、联系方式 | `src/content/settings/` |

## 🔧 Astro 集成

如需在 Astro 页面中使用这些内容：

```astro
---
import { getCollection } from 'astro:content';

const allNews = await getCollection('news', ({ data }) => !data.draft);
const featuredExhibitors = await getCollection('exhibitors', ({ data }) => data.featured);
---

{allNews.map((post) => (
  <article>
    <h2>{post.data.title}</h2>
    <p>{post.data.excerpt}</p>
  </article>
))}
```

## 💡 优化建议

1. **Cloudflare Access**：限制 `/admin` 路径访问，支持企业微信/飞书 SSO
2. **图片优化**：开启 Cloudflare Images，自动 WebP 转换和缩放
3. **缓存规则**：`/uploads/*` 设置缓存 TTL 为 1 年

## 🆘 问题排查

**问题：登录后显示 404**
→ 检查 `base_url` 和 `repo` 配置是否正确

**问题：保存失败**
→ 确保 GitHub 账号有该仓库的写入权限
→ 检查 Worker 日志查看具体错误

**问题：媒体上传失败**
→ Sveltia CMS 目前媒体文件存储在 GitHub 仓库的 `public/uploads/` 目录
→ R2 原生支持预计 2026 Q3 发布
