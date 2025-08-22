@echo off
chcp 65001 >nul
title 推送更新到GitHub

echo ================================
echo   微山县微山湖医院智慧医疗导医分诊平台
echo   推送更新到GitHub
echo ================================
echo.

echo 正在检查Git状态...
git status

echo.
echo 正在添加所有更改...
git add .

echo.
echo 正在提交更改...
git commit -m "修复GitHub Actions版本问题和SPA路由支持"

echo.
echo 正在推送到GitHub...
git push origin main

echo.
echo ================================
echo 推送完成！
echo ================================
echo.
echo 请等待2-5分钟让GitHub Actions完成部署
echo 然后访问：https://sdjnzt.github.io/smart-medical-triage-platform
echo.
echo 如果仍然显示README页面，请：
echo 1. 强制刷新浏览器 (Ctrl+F5)
echo 2. 清除浏览器缓存
echo 3. 等待更长时间让GitHub Pages更新
echo.

pause
