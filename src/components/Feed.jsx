import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

// 导入必要的组件和函数
const Feed = () => {
  // 设置加载状态的状态和函数
  const [loading, setLoading] = useState(true);

  // 模拟加载延迟
  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    // 定义一个框，占据四分之一的空间，并设置内边距
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? ( // 如果加载状态为 true，则显示骨架屏
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} /> 
          <Skeleton variant="text" height={20} /> 
          <Skeleton variant="text" height={20} /> 
          <Skeleton variant="rectangular" height={300} /> 
        </Stack>
      ) : ( // 如果加载状态为 false，则显示帖子内容
        <>
          <Post /> 
          <Post /> 
          <Post /> 
          <Post /> 
          <Post /> 
          <Post /> 
        </>
      )}
    </Box>
  );
};

export default Feed; // 导出 Feed 组件
