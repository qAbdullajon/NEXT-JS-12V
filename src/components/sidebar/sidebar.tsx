import { Avatar, Box, Button, Divider, Typography } from "@mui/material"
import { format } from "date-fns"
import Image from "next/image"
import { Fragment } from "react"
import navItems from "src/config/constants"


const Sidebar = () => {
  return (
    <Box width={'30%'}>
      <Box position={'sticky'} top={'100px'} sx={{ transition: 'all .3 ease' }}>
        <Box border={'1px solid gray'} padding={'20px'} borderRadius={'8px'}>
          <Typography variant="h5">Latest blog</Typography>
          <Box marginTop={'10px'} display={'flex'} flexDirection={'column'} gap={'20px'}>
            {data.map(item => (
              <Box key={item.title}>
                <Box display={'flex'} gap={'20px'} alignItems={'center'} >
                  <Image src={item.image} alt={item.title} width={100} height={100} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                  <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
                    <Typography variant="body1">{item.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <Avatar alt={item.author.name} src={item.author.image} />
                      <Box>
                        <Typography variant="body2">{item.author.name}</Typography>
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
            {navItems.map(item => (
              <Fragment>
                <Button sx={{ width: '100%', display: 'block', textAlign: 'start', height: '50px' }} key={item.rout}>{item.title}</Button>
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

const data = [
  {
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Technical SEO with Hygraph',
    exerpt: 'Get started with your SEO implementation when using a Headless CMS',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
  {
    image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
    title: 'Union Types and Sortable Relations with Hygraph',
    exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
];