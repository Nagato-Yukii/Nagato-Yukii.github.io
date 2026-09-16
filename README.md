# Nagato-Yukii.github.io

A small terminal-inspired personal site and Markdown blog, built with Astro and deployed on GitHub Pages.

## Write a post

Create a Markdown file in `src/content/blog/` with this frontmatter:

```yaml
---
title: "Post title"
date: 2025-01-12
summary: "A short description used on the index and in page metadata."
tags: [notes]
draft: false
---
```

Set `draft: true` to keep a post out of production builds. Edit `src/data/site.ts` to update the introduction and platform links.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` before publishing. A push to `main` triggers the GitHub Pages workflow.
