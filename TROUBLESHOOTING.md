# 故障排除指南

## 问题：GitHub Pages显示README而不是React应用

### 现象
访问 `https://sdjnzt.github.io/smart-medical-triage-platform` 时，显示的是项目的README介绍页面，而不是实际的React应用界面。

### 原因分析
1. **GitHub Pages默认行为**：当仓库根目录有README.md时，GitHub Pages会优先显示README内容
2. **React Router路由问题**：单页应用(SPA)在GitHub Pages上需要特殊的路由处理
3. **构建部署问题**：可能是GitHub Actions构建或部署过程中出现了问题

### 解决方案

#### 1. 检查GitHub Actions构建状态
1. 进入GitHub仓库：`https://github.com/sdjnzt/smart-medical-triage-platform`
2. 点击 "Actions" 选项卡
3. 查看最新的工作流运行状态：
   - ✅ 绿色对勾：构建成功
   - ❌ 红色X：构建失败
   - 🟡 黄色圆圈：正在运行

#### 2. 如果构建失败
点击失败的工作流，查看错误日志：
- **常见错误1**：依赖安装失败
  ```
  解决方案：检查package.json中的依赖版本
  ```
- **常见错误2**：构建过程中的JavaScript错误
  ```
  解决方案：在本地运行 npm run build 检查错误
  ```

#### 3. 如果构建成功但仍显示README
这通常是缓存问题，尝试以下方法：

**方法1：强制刷新浏览器**
- Windows: `Ctrl + F5`
- Mac: `Cmd + Shift + R`

**方法2：清除浏览器缓存**
- 清除该网站的缓存和Cookie
- 或使用无痕模式访问

**方法3：等待GitHub Pages更新**
- GitHub Pages有时需要5-10分钟来更新内容
- 可以等待一段时间后再访问

#### 4. 验证部署是否成功
1. 访问：`https://sdjnzt.github.io/smart-medical-triage-platform`
2. 应该看到登录页面，而不是README内容
3. 如果看到登录界面，说明部署成功

### 已完成的修复

我已经为您完成了以下修复：

1. **添加了404.html处理**：解决React Router在GitHub Pages上的路由问题
2. **配置了basename**：设置Router的basename为项目路径
3. **添加了SPA重定向脚本**：处理直接访问子路由的问题
4. **更新了meta信息**：修正了页面描述信息

### 推送更新到GitHub

要应用这些修复，您需要将更改推送到GitHub：

```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "修复GitHub Pages路由问题和SPA支持"

# 推送到GitHub
git push origin main
```

### 预期结果

推送后，等待2-5分钟让GitHub Actions完成部署，然后访问：
`https://sdjnzt.github.io/smart-medical-triage-platform`

您应该看到：
1. **登录页面**：应用的实际界面，而不是README
2. **可以正常导航**：点击各个菜单项能正常跳转
3. **响应式设计**：在移动设备上也能正常显示

### 如果问题仍然存在

1. **检查网络**：确保能正常访问GitHub
2. **联系支持**：在项目Issues页面报告问题
3. **本地验证**：运行 `npm start` 确保本地能正常运行

### 常见问题

**Q: 为什么显示"您需要启用JavaScript"？**
A: 确保浏览器启用了JavaScript，React应用需要JavaScript支持。

**Q: 页面加载很慢怎么办？**
A: GitHub Pages有时会比较慢，这是正常现象，稍等片刻即可。

**Q: 如何访问不同的功能页面？**
A: 先登录系统，然后通过左侧导航菜单访问各个功能模块。

### 联系方式

如需进一步帮助，请：
1. 查看GitHub Actions的详细日志
2. 在项目Issues页面提问
3. 提供具体的错误信息和截图
