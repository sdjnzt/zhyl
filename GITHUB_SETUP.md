# GitHub设置指南

本指南将帮助您设置GitHub账户并将微山县微山湖医院智慧医疗导医分诊平台项目上传到GitHub。

## 第一步：创建GitHub账户

1. 访问 [GitHub官网](https://github.com)
2. 点击右上角的 "Sign up" 按钮
3. 填写用户名、邮箱和密码
4. 验证邮箱地址
5. 选择免费计划（Free plan）

## 第二步：安装Git

### Windows用户
1. 下载 [Git for Windows](https://git-scm.com/download/win)
2. 运行安装程序，使用默认设置
3. 安装完成后，右键桌面选择 "Git Bash Here" 验证安装

### 配置Git
```bash
# 设置用户名（替换为您的GitHub用户名）
git config --global user.name "your-username"

# 设置邮箱（替换为您的GitHub邮箱）
git config --global user.email "your-email@example.com"
```

## 第三步：创建GitHub仓库

1. 登录GitHub账户
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - Repository name: `smart-medical-triage-platform`
   - Description: `微山县微山湖医院智慧医疗导医分诊平台`
   - 选择 "Public"（免费GitHub Pages需要公开仓库）
   - 不要勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

## 第四步：上传项目到GitHub

### 方法一：使用命令行（推荐）

1. 打开项目文件夹
2. 右键选择 "Git Bash Here"
3. 执行以下命令：

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "初始化微山县微山湖医院智慧医疗导医分诊平台项目"

# 设置主分支名称
git branch -M main

# 添加远程仓库（替换your-username为您的GitHub用户名）
git remote add origin https://github.com/your-username/smart-medical-triage-platform.git

# 推送代码到GitHub
git push -u origin main
```

### 方法二：使用GitHub Desktop（图形界面）

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录您的GitHub账户
3. 选择 "Add an existing repository from your hard drive"
4. 选择项目文件夹
5. 填写提交信息并点击 "Commit to main"
6. 点击 "Publish repository"

## 第五步：配置GitHub Pages

1. 进入您的GitHub仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

## 第六步：更新项目配置

编辑 `package.json` 文件，更新homepage字段：

```json
{
  "homepage": "https://your-username.github.io/smart-medical-triage-platform"
}
```

将 `your-username` 替换为您的实际GitHub用户名。

## 第七步：触发部署

1. 保存修改的文件
2. 提交并推送更改：

```bash
git add .
git commit -m "配置GitHub Pages部署"
git push origin main
```

## 第八步：查看部署结果

1. 在GitHub仓库页面，点击 "Actions" 选项卡
2. 查看工作流运行状态
3. 等待部署完成（通常2-5分钟）
4. 访问您的网站：`https://your-username.github.io/smart-medical-triage-platform`

## 常见问题

### Q: 忘记GitHub密码怎么办？
A: 点击登录页面的 "Forgot password?" 链接，按照提示重置密码。

### Q: Git命令执行失败怎么办？
A: 
1. 确认Git已正确安装
2. 检查网络连接
3. 确认用户名和邮箱配置正确
4. 检查仓库URL是否正确

### Q: 推送代码时要求输入用户名密码？
A: GitHub已不支持密码认证，建议：
1. 使用GitHub Desktop
2. 或配置SSH密钥
3. 或使用Personal Access Token

### Q: 网站部署后显示404错误？
A: 
1. 检查GitHub Pages设置是否正确
2. 确认homepage字段配置正确
3. 等待几分钟让更改生效

## SSH密钥配置（可选，用于免密推送）

### 生成SSH密钥
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

### 添加SSH密钥到GitHub
1. 复制公钥内容：
```bash
cat ~/.ssh/id_rsa.pub
```
2. 在GitHub Settings > SSH and GPG keys 中添加新的SSH密钥
3. 将仓库URL改为SSH格式：
```bash
git remote set-url origin git@github.com:your-username/smart-medical-triage-platform.git
```

## 日常开发流程

### 修改代码后的提交流程：
```bash
# 查看文件状态
git status

# 添加修改的文件
git add .

# 提交更改
git commit -m "描述您的更改"

# 推送到GitHub
git push origin main
```

### 查看提交历史：
```bash
git log --oneline
```

### 撤销最近的提交（未推送）：
```bash
git reset --soft HEAD~1
```

## 获取帮助

- [GitHub官方文档](https://docs.github.com)
- [Git官方文档](https://git-scm.com/doc)
- [GitHub学习实验室](https://lab.github.com)
- 项目Issues页面提问
