import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"; // 导入 Material-UI 组件
import Navbar from "./components/Navbar"; // 导入导航栏组件
import Sidebar from "./components/Sidebar"; // 导入侧边栏组件
import Feed from "./components/Feed"; // 导入动态流组件
import Rightbar from "./components/Rightbar"; // 导入右侧边栏组件
import Add from "./components/Add"; // 导入添加内容组件

// Import your page components
import Homepage from "./pages/Homepage";
import Pages from "./pages/Page";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Friends from "./pages/Friends";
import Marketplace from "./pages/Marketplace";

// Import Auth0 hook
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // 定义模式状态和相应的设置函数
  const [mode, setMode] = useState("light");

  console.log('mode:', mode);

  // 创建暗色主题
  const darkTheme = createTheme({
    palette: {
      mode: mode, // 使用模式状态确定主题模式
    },
  });

  // 从 Auth0 获取认证信息
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  console.log('isAuthenticated:', isAuthenticated);
  console.log('isLoading:', isLoading);

  // 在页面加载时显示加载状态
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 如果用户未登录，重定向到登录页面
  /* 这儿嵌入了 Auth0 的 login 函数 */
  if (!isAuthenticated) {
    loginWithRedirect();
    return <div>Redirecting...</div>;
  }

  // 用户登录后显示的内容

  // 应用 Material-UI 的主题
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {/* Router now wraps the entire application */}
        <Box bgcolor={"background.default"} color={"text.primary"}>
          {/* 导航栏 */}
          <Navbar />
          <Routes>
            {/* Define your routes outside of the Sidebar, but inside the Router */}
            <Route
              path="/"
              element={
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                >
                  {/* 主要内容区域，水平布局 */}
                  {/* 侧边栏组件，传递模式状态和设置函数 */}
                  <Sidebar setMode={setMode} mode={mode} />
                  {/* 动态流组件 */}
                  <Feed />
                  {/* 右侧边栏组件 */}
                  <Rightbar />
                </Stack>
              }
            />
            <Route
              path="/home"
              element={
                <Box mt={5}>
                  <Homepage />
                </Box>
              }
            />
            <Route
              path="/pages"
              element={
                <Box mt={5}>
                  <Pages />
                </Box>
              }
            />
            <Route
              path="/groups"
              element={
                <Box mt={5}>
                  <Groups />
                </Box>
              }
            />
            <Route
              path="/marketplace"
              element={
                <Box mt={5}>
                  <Marketplace />
                </Box>
              }
            />
            <Route
              path="/friends"
              element={
                <Box mt={5}>
                  <Friends />
                </Box>
              }
            />
            <Route
              path="/settings"
              element={
                <Box mt={5}>
                  <Settings />
                </Box>
              }
            />
            <Route
              path="/profile"
              element={
                <Box mt={5}>
                  <Profile />
                </Box>
              }
            />
            {/* ... define other routes as needed */}
          </Routes>
          {/* 在这里我们总是显示Add，如果不需要可以将其放入对应路由 */}
          {/* 添加内容组件 */}
          <Add />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; // 导出 App 组件
