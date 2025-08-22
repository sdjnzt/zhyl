# 部署指南

本文档将指导您如何将智慧医疗导医分诊平台部署到GitHub Pages。

## 前置条件

1. 拥有GitHub账户
2. 项目已推送到GitHub仓库
3. 本地已安装Node.js 16+和npm

## 部署步骤

### 1. 创建GitHub仓库

1. 登录GitHub，创建新仓库
2. 仓库名建议使用：`smart-medical-triage-platform`
3. 设置为Public（GitHub Pages免费版本需要公开仓库）

### 2. 推送代码到GitHub

```bash
# 初始化git仓库（如果还没有）
git init

# 添加远程仓库
git remote add origin https://github.com/[your-username]/smart-medical-triage-platform.git

# 添加所有文件
git add .

# 提交代码
git commit -m "初始化智慧医疗导医分诊平台项目"

# 推送到主分支
git push -u origin main
```

### 3. 配置GitHub Pages

1. 进入GitHub仓库页面
2. 点击 `Settings` 选项卡
3. 在左侧菜单中找到 `Pages`
4. 在 `Source` 部分选择 `GitHub Actions`

### 4. 更新package.json中的homepage

在 `package.json` 中更新homepage字段：

```json
{
  "homepage": "https://[your-username].github.io/smart-medical-triage-platform"
}
```

将 `[your-username]` 替换为您的GitHub用户名。

### 5. 触发部署

推送代码到main分支将自动触发GitHub Actions部署：

```bash
git add .
git commit -m "配置GitHub Pages部署"
git push origin main
```

### 6. 查看部署状态

1. 在GitHub仓库页面，点击 `Actions` 选项卡
2. 查看最新的工作流运行状态
3. 等待部署完成（通常需要2-5分钟）

### 7. 访问网站

部署完成后，您可以通过以下URL访问网站：
```
https://[your-username].github.io/smart-medical-triage-platform
```

## 自动化部署

项目已配置GitHub Actions自动化部署，当您推送代码到main分支时：

1. 自动安装依赖
2. 构建生产版本
3. 部署到GitHub Pages

## 故障排除

### 部署失败

1. 检查GitHub Actions日志中的错误信息
2. 确保package.json中的依赖版本兼容
3. 验证构建命令 `npm run build` 在本地能正常运行

### 页面显示空白

1. 检查浏览器控制台是否有JavaScript错误
2. 确认homepage字段配置正确
3. 检查路由配置是否适合GitHub Pages

### 样式或资源加载失败

1. 确保所有资源使用相对路径
2. 检查public文件夹中的资源是否正确
3. 验证CSS和图片文件路径

## 更新网站

要更新网站内容，只需：

1. 修改代码
2. 提交并推送到main分支
3. GitHub Actions将自动重新部署

```bash
git add .
git commit -m "更新网站内容"
git push origin main
```

## 自定义域名（可选）

如果您有自定义域名：

1. 在仓库根目录创建CNAME文件
2. 文件内容为您的域名（如：medical.yourdomain.com）
3. 在域名DNS设置中添加CNAME记录指向GitHub Pages

## 技术支持

如果遇到部署问题，请检查：

- [GitHub Pages文档](https://docs.github.com/pages)
- [GitHub Actions文档](https://docs.github.com/actions)
- 项目Issues页面
