

```md
# WH & YN 互动网页应用

一个使用 HTML、CSS、JavaScript、EmailJS 和 Leaflet Map 开发的个性化互动网页应用。

本项目主要展示创意前端交互、动画 UI、响应式布局、静态网站邮件发送、表单校验、地图距离可视化和用户体验设计能力。

虽然项目来源于个人场景，但在作品集中它被定位为一个 Creative Front-End Interactive Web App，用于展示前端工程能力、第三方服务集成能力和完整网页体验设计能力。

---

## 在线预览

[点击查看 Live Demo](https://chrisbetheking.github.io/whwithyn/)

---

## 项目简介

WH & YN 互动网页应用是一个单页互动网站，围绕个性化网页体验进行设计与开发。

网站包含动态背景、实时计时器、打字机文字效果、弹窗交互、心情选择、留言类型选择、EmailJS 邮件发送，以及 Leaflet Map 地图距离展示。

该项目展示了如何在 GitHub Pages 这种纯静态托管环境下，通过前端 JavaScript、第三方服务和地图组件实现更丰富的交互体验。

---

## 技术栈

- HTML5
- CSS3
- JavaScript
- EmailJS
- Leaflet.js
- OpenStreetMap
- GitHub Pages

---

## 核心功能

### 1. 个性化互动首页

首页包含个性化标题、动态爱心、星星、流星、玻璃拟态卡片和响应式布局。

主要功能包括：

- 动态背景
- 爱心飘落效果
- 流星动画
- 玻璃拟态 UI
- 移动端适配
- 个性化视觉设计

---

### 2. 实时计时器

网站会根据设定的起始日期，实时计算并展示已经过去的时间。

展示内容包括：

- 已经过的天数
- 累计小时
- 累计分钟
- 累计秒数

该功能体现了 JavaScript 日期处理、定时器更新和 DOM 动态渲染能力。

---

### 3. 打字机文字效果

页面中的长文本会以打字机形式逐字显示，增强沉浸感和互动感。

该功能涉及：

- 字符串切片
- 定时渲染
- DOM 更新
- 文本动画交互

---

### 4. 弹窗交互功能

网站提供多个按钮，点击后会展示不同内容的弹窗。

包括：

- 打开写给你的信
- 查看今日状态
- 领取今日偏爱
- 查看未来计划
- 查看时间线
- 随机切换一句话

该部分展示了事件监听、弹窗组件复用和动态内容渲染能力。

---

### 5. 心情与留言类型选择

留言表单没有采用传统的“姓名 + 内容”形式，而是设计成更自然的交互流程。

用户可以选择：

- 想留下什么内容
- 当前心情
- 输入密码
- 填写留言内容

留言类型包括：

- 想你了
- 今日心情
- 想被哄
- 小建议
- 许个愿
- 悄悄话

心情选项包括：

- 开心
- 想你
- 有点累
- 委屈
- 撒娇
- 平静

这种设计让表单更贴近真实使用场景，也提升了用户体验。

---

### 6. 密码校验与邮件发送

留言表单需要输入约定密码后才能发送。

在 GitHub Pages 版本中，密码校验位于前端，主要用于基础交互限制和使用引导。验证通过后，网站会调用 EmailJS 将留言发送到指定邮箱。

该功能展示了：

- 表单校验
- 条件判断
- 第三方邮件服务集成
- 静态网站邮件发送能力

---

### 7. EmailJS 集成

项目使用 EmailJS 实现无后端邮件发送，使 GitHub Pages 静态网站也可以完成留言发送功能。

邮件内容包含：

- 发送人
- 留言类型
- 当前心情
- 留言内容
- 发送时间
- 项目标识

安全说明：

EmailJS 的 Public Key、Service ID 和 Template ID 在纯前端项目中是可见的。这些不是邮箱登录密码，也不是私钥。为了降低被滥用的风险，建议在 EmailJS 后台设置 Domain Allowlist，只允许指定 GitHub Pages 域名调用邮件模板。

---

### 8. Leaflet 地图距离展示

项目使用 Leaflet.js 和 OpenStreetMap 展示两个地点之间的距离。

地图展示地点：

- 吉隆坡，马来西亚
- 贵州，中国

功能包括：

- 地图渲染
- 地点标记
- 弹窗说明
- 虚线连接
- 直线距离计算

该部分展示了第三方地图组件集成、坐标处理和 Haversine 距离计算能力。

---

### 9. 随机小约定功能

页面中包含一个随机抽取未来小约定的互动模块。

该功能展示了：

- 数组随机选择
- DOM 内容更新
- 轻量级交互设计

---

### 10. 响应式设计

项目针对桌面端和移动端进行了适配。

包括：

- 自适应布局
- 移动端按钮排列优化
- 地图高度适配
- 卡片间距调整
- 小屏幕字体优化

---

## 我的工作

本项目由我独立完成，主要负责：

- 页面结构设计
- UI 视觉设计
- 响应式布局实现
- CSS 动画效果
- JavaScript 交互逻辑
- 实时计时器开发
- 打字机效果实现
- 心情与留言类型选择逻辑
- EmailJS 邮件发送集成
- Leaflet 地图距离展示
- GitHub Pages 部署
- 用户体验优化

---

## 项目亮点

- 使用纯前端技术完成完整互动网页应用
- 实现实时计时器、弹窗、打字机、爱心动画等多种交互效果
- 使用 EmailJS 在无后端环境下实现邮件发送
- 使用 Leaflet Map 实现真实地点距离可视化
- 将传统表单优化为更自然的心情与类型选择体验
- 支持移动端访问和响应式布局
- 适合展示创意前端开发、交互设计和第三方服务集成能力

---

## 项目结构

```text
whwithyn/
├── index.html
└── README.md
# WH & YN Interactive Web App

A personalized interactive front-end web application built with HTML, CSS, JavaScript, EmailJS, and Leaflet Map.

This project focuses on creative front-end interaction, animated UI design, responsive layout, client-side email sending, form validation, distance visualization, and user-centered web experience design.

Although the project was created for a personal use case, it is presented as a Creative Front-End Interactive Web App that demonstrates front-end engineering skills, third-party service integration, and complete web experience design.

---

## Live Demo

[View Live Demo](https://chrisbetheking.github.io/whwithyn/)

---

## Project Overview

WH & YN Interactive Web App is a single-page interactive website designed to provide a warm, personalized, and engaging user experience.

The website includes animated visual effects, a real-time relationship timer, typewriter text animation, interactive popups, mood selection, message type selection, EmailJS email delivery, and Leaflet Map distance visualization.

This project demonstrates how a static website hosted on GitHub Pages can still provide meaningful interaction by integrating front-end JavaScript, third-party services, animation, and map visualization.

---

## Tech Stack

- HTML5
- CSS3
- JavaScript
- EmailJS
- Leaflet.js
- OpenStreetMap
- GitHub Pages

---

## Core Features

### 1. Personalized Interactive Landing Page

The landing page includes a personalized hero section, floating hearts, stars, meteor effects, glassmorphism-style cards, and responsive layout.

Key elements include:

- Animated background
- Floating heart effects
- Meteor animation
- Glassmorphism UI
- Mobile-friendly layout
- Personalized visual design

---

### 2. Real-Time Timer

The website calculates and displays the elapsed time from a fixed start date.

Displayed information includes:

- Days
- Total hours
- Total minutes
- Total seconds

This feature demonstrates JavaScript date handling, interval updates, and dynamic DOM rendering.

---

### 3. Typewriter Text Animation

A long personalized message is rendered using a typewriter effect.

This demonstrates:

- String slicing
- Timed text rendering
- DOM updates
- Text-based interaction design

---

### 4. Interactive Buttons and Popups

The website includes multiple buttons that trigger dynamic popup content.

Examples include:

- Open a letter
- View today's status
- Receive a daily preference message
- View future plans
- View timeline
- Change quote

This demonstrates event handling, reusable popup components, and dynamic content rendering.

---

### 5. Mood-Based Message Form

Instead of asking the user to manually enter a name, the form uses a more natural interaction flow.

The user can select:

- Message type
- Current mood
- Password
- Message content

Message types include:

- Missing you
- Daily mood
- Want comfort
- Suggestion
- Wish
- Secret message

Mood options include:

- Happy
- Missing you
- A little tired
- Wronged
- Acting cute
- Calm

This improves the user experience and makes the form feel more personal and less mechanical.

---

### 6. Password-Protected Email Sending

The message form requires a shared password before sending.

In the GitHub Pages version, password validation is handled on the front end because GitHub Pages only supports static hosting.

After validation, the message is sent through EmailJS.

This feature demonstrates:

- Form validation
- Conditional logic
- Third-party email service integration
- Static website email delivery

---

### 7. EmailJS Integration

EmailJS is used to send form submissions directly to email without a custom backend.

Submitted email content includes:

- Sender name
- Message category
- Mood
- Message content
- Submission time
- Project identifier

Security note:

The EmailJS Public Key, Service ID, and Template ID are visible in the front-end source code because GitHub Pages is a static hosting platform. These values are not email account passwords or private keys. To reduce abuse, the EmailJS dashboard should be configured with a domain allowlist so that only the GitHub Pages domain can trigger the email template.

---

### 8. Leaflet Map Distance Visualization

The website uses Leaflet.js and OpenStreetMap to visualize the distance between two locations.

Locations shown on the map:

- Kuala Lumpur, Malaysia
- Guizhou, China

Features include:

- Map rendering
- Location markers
- Popup labels
- Dashed connection line
- Straight-line distance calculation

This demonstrates third-party map integration, coordinate processing, and Haversine distance calculation.

---

### 9. Random Future Promise Generator

The page includes a small interactive section that randomly generates future plans or promises.

This demonstrates:

- Random array selection
- DOM content updates
- Lightweight interactive content design

---

### 10. Responsive Design

The website is optimized for both desktop and mobile devices.

Responsive features include:

- Flexible layout
- Mobile-friendly button groups
- Adaptive map height
- Card spacing adjustment
- Readable typography on small screens

---

## My Role

I independently designed and implemented this project, including:

- Page structure design
- UI visual design
- Responsive layout
- CSS animation effects
- JavaScript interaction logic
- Real-time timer implementation
- Typewriter animation
- Mood and message type selection logic
- EmailJS email sending integration
- Leaflet map distance visualization
- GitHub Pages deployment
- User experience refinement

---

## Project Highlights

- Built a complete interactive single-page web application using front-end technologies
- Implemented real-time timer logic with JavaScript
- Designed animated UI effects using CSS and DOM manipulation
- Integrated EmailJS to enable email sending on a static website
- Integrated Leaflet Map to visualize real-world distance
- Improved form UX by replacing manual name input with mood and message type selection
- Optimized the project for GitHub Pages deployment
- Created a mobile-responsive and emotionally engaging user experience

---

## Project Structure

```text
whwithyn/
├── index.html
└── README.md
