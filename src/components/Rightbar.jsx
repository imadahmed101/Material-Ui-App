import React from 'react'
import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>

        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Bruce Wayne" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          <Avatar alt="Clark Kent" src="" />
          <Avatar alt="Lex Luthor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          <Avatar alt="Mr Bean" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          <Avatar alt="Avatar Aang" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
        </AvatarGroup>


        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={4} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdFTxfDW5ydBun6E9V1meB0ldUyeHLpRlr_JuyFCnU5dC3aho_bQRMU9UvXwYFyUxoNQ&usqp=CAU" />
          </ImageListItem>
        </ImageList>
        
        <Typography variant="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>
    </Box>
  )
}

export default Rightbar