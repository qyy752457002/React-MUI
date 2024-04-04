import Sidebar from "./components/Sidebar"; // 导入侧边栏组件
import Feed from "./components/Feed"; // 导入动态流组件
import Rightbar from "./components/Rightbar"; // 导入右侧边栏组件
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"; // 导入 Material-UI 组件
import Navbar from "./components/Navbar"; // 导入导航栏组件
import Add from "./components/Add"; // 导入添加内容组件
import { useState } from "react"; // 导入 React 中的 useState 函数

function App() {
  // 定义模式状态和相应的设置函数
  const [mode, setMode] = useState("light");

  // 创建暗色主题
  const darkTheme = createTheme({
    palette: {
      mode: mode, // 使用模式状态确定主题模式
    },
  });

  return (
    // 应用 Material-UI 的主题
    <ThemeProvider theme={darkTheme}>
      {/* 主要布局容器 */}
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* 导航栏 */}
        <Navbar />
        {/* 主要内容区域，水平布局 */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {/* 侧边栏组件，传递模式状态和设置函数 */}
          <Sidebar setMode={setMode} mode={mode}/>
          {/* 动态流组件 */}
          <Feed />
          {/* 右侧边栏组件 */}
          <Rightbar />
        </Stack>
        {/* 添加内容组件 */}
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App; // 导出 App 组件

