import React, { useState } from "react";
import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material"; // 导入所需的 Material-UI 组件

import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material"; // 导入所需的 Material-UI 图标组件
import { Box } from "@mui/system";

// 自定义样式的 Modal
const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

// 自定义样式的 Box，用于包裹用户信息
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const Add = () => {

    const [open, setOpen] = useState(false) // 控制 Modal 显示/隐藏的状态

    return (
        <>
            {/* 悬浮按钮，点击打开 Modal */}
            <Tooltip onClick={e => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            {/* 自定义样式的 Modal */}
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {/* Modal 内容 */}
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" texAlign="center">Create post</Typography>
                    {/* 用户信息 */}
                    <UserBox>
                        <Avatar
                            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    {/* 文本输入框 */}
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    {/* 表情、图片、视频、添加朋友按钮 */}
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    {/* 发布和设置时间按钮组 */}
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

export default Add;
