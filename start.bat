@echo off
chcp 65001 >nul
title 智慧医疗导医分诊平台 - 快速启动

echo ================================
echo   智慧医疗导医分诊平台
echo   快速启动脚本
echo ================================
echo.

echo 正在检查环境...
echo.

:: 检查Node.js是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到Node.js，请先安装Node.js 16或更高版本
    echo 下载地址：https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [✓] Node.js版本：
node --version

:: 检查npm是否可用
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] npm不可用，请检查Node.js安装
    echo.
    pause
    exit /b 1
)

echo [✓] npm版本：
npm --version
echo.

:: 检查是否存在node_modules
if not exist "node_modules" (
    echo [信息] 检测到首次运行，正在安装依赖...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo [错误] 依赖安装失败，请检查网络连接
        echo.
        pause
        exit /b 1
    )
    echo [✓] 依赖安装完成
    echo.
) else (
    echo [✓] 依赖已安装
    echo.
)

echo 正在启动开发服务器...
echo.
echo 服务器启动后，请在浏览器中访问：
echo http://localhost:3000
echo.
echo 按Ctrl+C可以停止服务器
echo.

:: 启动开发服务器
npm start

pause
