import { Box, Typography } from "@mui/material"
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { format } from 'date-fns'

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#141414',
      color: 'white',
      padding: '15px 24px'
    }}>
      <Typography>© {format(new Date(), 'yyyy')} Sammi. All Right Reserved.</Typography>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        <TelegramIcon sx={{ cursor: 'pointer' }} />
        <InstagramIcon sx={{ cursor: 'pointer' }} />
        <YouTubeIcon sx={{ cursor: 'pointer' }} />
      </Box>
    </Box>
  )
}

export default Footer