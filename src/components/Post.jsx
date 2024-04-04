import React from "react";
import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share
} from "@mui/icons-material"; // 导入所需的 Material-UI 图标组件

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material"; // 导入所需的 Material-UI 组件

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      {/* 卡片头部 */}
      <CardHeader
        avatar={
          // 头像
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          // 更多操作按钮
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe" // 标题
        subheader="September 14, 2022" // 子标题
      />
      {/* 媒体内容 */}
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      {/* 卡片内容 */}
      <CardContent>
        {/* 文本内容 */}
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      {/* 卡片底部操作 */}
      <CardActions disableSpacing>
        {/* 添加到收藏夹按钮 */}
        <IconButton aria-label="add to favorites">
          {/* 收藏图标 */}
          <Checkbox
            icon={<FavoriteBorder />} // 未收藏图标
            checkedIcon={<Favorite sx={{ color: "red" }} />} // 已收藏图标
          />
        </IconButton>
        {/* 分享按钮 */}
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;