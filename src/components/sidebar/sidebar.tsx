import React from "react";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import { Fragment } from "react"
import { useRouter } from "next/router"
import { SidebarProps } from "./sidebar.props";



const Sidebar = ({ lastBlog, categories }: SidebarProps) => {
  const router = useRouter()
  return (
    <Box width={{ xs: '100%', md: '30%' }}>
      <Box position={'sticky'} top={'100px'} sx={{ transition: 'all .3 ease' }}>
        <Box border={'1px solid gray'} padding={'20px'} borderRadius={'8px'}>
          <Typography variant="h5">Latest blog</Typography>
          <Box marginTop={'10px'} display={'flex'} flexDirection={'column'} gap={'20px'}>
            {lastBlog.map(item => (
              <Box onClick={() => router.push(`/blog/${item.slug}`)} sx={{ cursor: 'pointer' }} key={item.id}>
                <Box display={'flex'} gap={'20px'} alignItems={'center'} >
                  <Image src={item.image.url} alt={item.title} width={100} priority height={100} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                  <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <Avatar alt={item.auther.name} src={item.auther.avatar.url} />
                      <Box>
                        <Typography variant="body2">{item.auther.name}</Typography>
                        <Box sx={{ opacity: '.3' }}>{format(new Date(), 'dd MMM, yyyy')} &#x2022; 10min read</Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: '20px' }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box border={'1px solid gray'} padding={'20px'} marginTop={'20px'} borderRadius={'8px'}>
          <Typography variant="h5">Catagory</Typography>
          <Box display={'flex'} justifyContent={'start'} flexDirection={'column'} marginTop={'5px'}>
            {categories.map(item => (
              <Fragment key={item.slug}>
                <Button onClick={() => router.push(`/category/${item.slug}`)} sx={{ width: '100%', display: 'block', textAlign: 'start', height: '50px' }}>{item.label}</Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar