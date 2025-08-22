import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 导入布局组件
import MainLayout from './layouts/MainLayout';

// 导入页面组件
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MultimediaGuide from './pages/MultimediaGuide';
import NurseTriageStation from './pages/NurseTriageStation';
import DoctorCallStation from './pages/DoctorCallStation';
import OutpatientQueue from './pages/OutpatientQueue';
import PharmacyQueue from './pages/PharmacyQueue';
import SmartGuide from './pages/SmartGuide';
import MultimediaPublish from './pages/MultimediaPublish';
import HISIntegration from './pages/HISIntegration';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // 处理登录
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  // 处理登出
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  // 私有路由组件
  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <Router basename="/zhyl">
      <Routes>
        {/* 登录页面 */}
        <Route 
          path="/login" 
          element={
            isLoggedIn 
              ? <Navigate to="/" /> 
              : <Login onLogin={handleLogin} />
          } 
        />
        
        {/* 主应用路由 */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <Dashboard />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/multimedia-guide" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <MultimediaGuide />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/nurse-triage-station" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <NurseTriageStation />
              </MainLayout>
            </PrivateRoute>
          } 
        />

        <Route 
          path="/doctor-call-station" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <DoctorCallStation />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/outpatient-queue" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <OutpatientQueue />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        
        <Route 
          path="/pharmacy-queue" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <PharmacyQueue />
              </MainLayout>
            </PrivateRoute>
          } 
        />

        <Route 
          path="/smart-guide" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <SmartGuide />
              </MainLayout>
            </PrivateRoute>
          } 
        />

        <Route 
          path="/multimedia-publish" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <MultimediaPublish />
              </MainLayout>
            </PrivateRoute>
          } 
        />

        <Route 
          path="/his-integration" 
          element={
            <PrivateRoute>
              <MainLayout onLogout={handleLogout}>
                <HISIntegration />
              </MainLayout>
            </PrivateRoute>
          } 
        />
        
        {/* 默认重定向到首页 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App; 