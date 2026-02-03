# Pause Button · 暂停一下

一个极简主义的暂停按钮，帮助人们在快节奏的世界中停下来，给自己一个温柔的暂停。

## ✨ 特性

- 🎨 **现代化设计** - 基于 Tailwind CSS 4 的全新设计系统
- 🌓 **黑白主题** - 支持明暗主题切换，自动适配系统偏好
- 🎭 **组件化架构** - 完全组件化的代码结构，易于维护和扩展
- 🎯 **优雅动画** - 流畅的过渡动画和微交互效果
- 📱 **响应式设计** - 完美适配各种设备尺寸
- ♿ **无障碍支持** - 遵循 WCAG 标准，支持键盘导航和屏幕阅读器

## 🏗️ 项目结构

```
src/
├── components/          # 组件目录
│   ├── icons/          # SVG 图标组件
│   │   ├── PauseIcon.astro
│   │   ├── LightbulbIcon.astro
│   │   ├── SunIcon.astro
│   │   └── MoonIcon.astro
│   ├── PauseButton.astro      # 主暂停按钮组件
│   ├── SuggestionModal.astro  # 建议弹窗组件
│   ├── ThemeToggle.astro      # 主题切换组件
│   └── AppContainer.astro     # 应用容器组件
├── data/
│   └── suggestions.ts         # 暂停建议数据
├── layouts/
│   └── Layout.astro           # 主布局组件
├── pages/
│   └── index.astro            # 首页
└── styles/
    └── global.css             # 全局样式
```

## 🎨 设计系统

### 配色方案

- **亮色主题**: 以白色和浅灰色为主，营造清新简洁的氛围
- **暗色主题**: 使用深色背景，减少视觉疲劳
- **渐变效果**: 按钮和装饰元素使用微妙的渐变增强视觉层次

### 组件说明

#### PauseButton
主暂停按钮，具有以下特性：
- 渐变背景（亮色/暗色主题自适应）
- 悬停光效动画
- 点击波纹效果
- 图标微动效

#### SuggestionModal
建议弹窗组件：
- 毛玻璃背景遮罩
- 平滑的进入/退出动画
- 装饰性图标
- 支持 ESC 键和点击背景关闭

#### ThemeToggle
主题切换按钮：
- 固定在右上角
- 图标根据当前主题自动切换
- 平滑的过渡动画

#### AppContainer
应用容器：
- 渐变背景
- 装饰性背景元素
- 响应式布局

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 `http://localhost:4321` 查看效果。

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 🛠️ 技术栈

- [Astro](https://astro.build) - 现代静态站点生成器
- [Tailwind CSS 4](https://tailwindcss.com) - 实用优先的 CSS 框架
- TypeScript - 类型安全的 JavaScript

## 📝 使用说明

1. 点击"暂停一下"按钮
2. 查看随机显示的暂停建议
3. 建议会在 3 秒后自动消失，也可以点击关闭按钮或按 ESC 键手动关闭
4. 点击右上角的主题切换按钮可以在明暗主题之间切换

## 🎯 设计理念

这个项目旨在帮助人们在忙碌的工作和生活中找到片刻的宁静。每个建议都是精心设计的，鼓励用户停下来，关注当下，给自己一个温柔的暂停。

## 📄 许可证

MIT License
