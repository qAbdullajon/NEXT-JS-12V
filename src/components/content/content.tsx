import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns";
import Image from "next/image";
import { ContentType } from "./content.props";
import { calculateEstimetedTimeToRead } from "src/helpers/time.format";
import { useRouter } from "next/router";

const Content = ({ blogs }: ContentType) => {
  const router = useRouter()
  return (
    <Box width={{ xs: '100%', md: '70%' }}>
      {
        blogs.map(item => (
          <Box
            key={item.id}
            sx={{
              marginTop: '20px',
              padding: '20px', bgcolor: 'rgba(0,0,0,.5)',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onClick={() => router.push(`/blog/${item.slug}`)}
          >
            <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh' }}>
              <Image src={item.image.url} alt={item.title} fill priority style={{ borderRadius: '8px', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h4" paddingTop={'20px'}>{item.title}</Typography>
            <Typography variant="body1" color="gray">{item.excerpt}</Typography>
            <Divider sx={{ paddingTop: '30px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', paddingTop: '10px' }}>
              <Avatar alt={item.auther.name} src={item.auther.avatar.url} />
              <Box>
                <Typography variant="body2">{item.auther.name}</Typography>
                <Box sx={{ opacity: '.3' }}>{format(new Date(item.createdAt), 'dd MMM, yyyy')} &#x2022; {calculateEstimetedTimeToRead(item.description.text)}min read</Box>
              </Box>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default Content
