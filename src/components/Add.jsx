import React, { useState } from 'react'
import { Fab, Tooltip, Box, Button, ButtonGroup, Modal, styled, Typography, Avatar, TextField, Stack } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, Favorite, ThumbUp, ThumbDown } from '@mui/icons-material';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip onClick={e => setOpen(true)}
                title="Add Post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 20px)", md: 30 }
                }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={280}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    pt={3}
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <Box ml={2} mr={2}>
                        <UserBox>
                            <Avatar src="" sx={{ width: 30, height: 30 }} />
                            <Typography fontWeight={500} variant="span">
                                Avatar Aang
                            </Typography>
                        </UserBox>
                        <TextField
                            sx={{ width: "100%" }}
                            id="standard-multiline-static"
                            multiline
                            rows={3}
                            placeholder="Whats on your mind?"
                            variant="standard" />
                        <Stack direction="row" gap={1} mt={2} mb={3}>
                            <EmojiEmotions />
                            <Favorite color="error" />
                            <ThumbUp color="info" />
                            <ThumbDown color="info" />
                        </Stack>
                        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                            <Button>Post</Button>
                            <Button
                                sx={{ width: "100px" }}
                            >
                                <DateRange />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add