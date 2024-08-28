import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material"; // 导入所需的 Material-UI 组件
import { Mail, Notifications, Pets } from "@mui/icons-material"; // 导入所需的 Material-UI 图标组件
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth0 } from "@auth0/auth0-react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false); // 控制菜单显示/隐藏的状态

  const navigate = useNavigate(); // 使用 useNavigate 钩子

  const { logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position="sticky">
      {/* 工具栏 */}
      <StyledToolbar>
        {/* 左侧标题 */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        {/* 在手机端显示宠物图标 */}
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* 搜索框 */}
        <Search>
          <InputBase placeholder="搜索..." />
        </Search>
        {/* 右侧图标 */}
        <Icons>
          {/* 邮件图标 */}
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          {/* 通知图标 */}
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          {/* 用户头像 */}
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)} // 点击打开菜单
          />
        </Icons>
        {/* 用户信息框，在手机端隐藏 */}
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      {/* 用户菜单 */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        {/* <MenuItem>My account</MenuItem> */}

        {/* 如果用户已登录，显示注销按钮 */}
        {/* 这儿嵌入了 Auth0 的 logout 函数 */}
        {isAuthenticated && (
          <MenuItem
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </MenuItem>
        )}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
