# 智慧医疗导医分诊平台

基于React + Ant Design开发的现代化医疗服务系统，为医院提供智能化的导医分诊解决方案，通过数字化手段提升患者就诊体验，优化医院服务流程，实现医疗资源的合理配置。

## 功能特性

- **智能导医**：提供智能问答和导医服务，帮助患者快速了解就诊流程
- **分诊管理**：护士分诊工作站，实现患者智能分诊和排队管理
- **叫号系统**：医生叫号工作站，支持语音叫号和显示屏展示
- **多媒体导览**：提供医院楼层地图和多媒体导览服务
- **门诊排队**：实时显示各科室排队情况和预计等待时间
- **药房管理**：药房取药排队管理和叫号系统
- **HIS集成**：与医院信息系统深度集成，数据实时同步
- **通知公告**：医院公告和通知信息发布管理

## 项目优势

- **提升患者体验**：智能导医减少患者困惑，缩短就诊等待时间
- **优化医疗流程**：数字化分诊提高医疗服务效率
- **减轻医护负担**：自动化叫号和排队管理，减少人工干预
- **数据驱动决策**：实时数据统计，为医院管理提供决策支持
- **系统集成性强**：与现有HIS系统无缝集成

## 开始使用

### 环境要求

- Node.js 16.x 或更高版本
- npm 8.x 或更高版本

### 安装步骤

1. 克隆项目到本地：

```bash
git clone https://github.com/[your-username]/smart-medical-triage-platform.git
cd smart-medical-triage-platform
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm start
```

4. 打开浏览器访问：

```
http://localhost:3000
```

### 构建部署

构建生产环境版本：

```bash
npm run build
```

构建完成后，`build` 文件夹中包含了可部署的文件。

## 技术栈

- **前端框架**：React 18
- **UI组件库**：Ant Design 5
- **路由管理**：React Router 6
- **图表组件**：ECharts 5.6.0 + Ant Design Plots
- **日期处理**：Moment.js
- **文件操作**：xlsx + file-saver
- **图标库**：Ant Design Icons

## 项目结构

```
src/
  ├── components/     # 通用组件
  │   ├── BannerCarousel.js      # 轮播图组件
  │   ├── FloorMap.js            # 楼层地图组件
  │   ├── MediaFilter.js         # 媒体过滤组件
  │   ├── NoticeBar.js           # 通知栏组件
  │   ├── NotificationCenter.js  # 通知中心组件
  │   ├── QRSection.js           # 二维码组件
  │   └── SmartQAEntry.js        # 智能问答入口组件
  ├── pages/         # 页面组件
  │   ├── Dashboard.js           # 仪表盘
  │   ├── DoctorCallStation.js   # 医生叫号工作站
  │   ├── HISIntegration.js      # HIS系统集成
  │   ├── Login.js               # 登录页面
  │   ├── MultimediaGuide.js     # 多媒体导览
  │   ├── MultimediaPublish.js   # 多媒体发布
  │   ├── NurseTriageStation.js  # 护士分诊工作站
  │   ├── OutpatientQueue.js     # 门诊排队
  │   ├── PharmacyQueue.js       # 药房排队
  │   └── SmartGuide.js          # 智能导医
  ├── layouts/       # 布局组件
  │   └── MainLayout.js          # 主布局
  ├── services/      # 服务层
  │   └── hisClient.js           # HIS系统客户端
  ├── App.js         # 应用入口
  └── index.js       # 项目入口
```

## 开发团队

- 前端开发团队
- UI设计团队
- 后端开发团队

## 许可证

MIT License 