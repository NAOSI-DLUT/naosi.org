# naosi.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/54da094f-6b08-4cbc-b99f-6977a5282f69/deploy-status)](https://app.netlify.com/sites/naosi/deploys)

NAOSI 官网 [naosi.org](https://naosi.org) 的源代码。

## 添加新文章

在 `src/content` 目录下添加新的 Markdown 文件。文字分为社团活动和社团博客两种类型，分别放在 `events` 和 `blog` 目录下。具体 frontmatter 格式可参考已有的文件。

## 本地预览

```bash
# 本项目使用 pnpm 作为包管理器，若未安装请先安装
npm install -g pnpm
# 安装依赖
pnpm install
# 启动本地服务器
pnpm run dev
```

之后就可以访问 `http://localhost:4321/` 查看效果了。

## 继续开发

本项目使用 [Astro](https://astro.build) 作为静态站点生成器，使用 [UnoCSS](https://unocss.dev/) 作为 CSS 框架。具体开发请参考官方文档。
