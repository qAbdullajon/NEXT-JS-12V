import { Avatar, Box, Divider, Typography } from "@mui/material"
import { format } from "date-fns";
import Image from "next/image";

const Content = () => {
  return (
    <Box width={{ xs: '100%', md: '70%' }}>
      {
        data.map(item => (
          <Box key={item.image} sx={{ marginTop: '20px', padding: '20px', bgcolor: 'rgba(0,0,0,.5)', borderRadius: '8px' }}>
            <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh' }}>
              <Image src={item.image} alt={item.title} fill style={{ borderRadius: '8px' }} objectFit="cover" />
            </Box>
            <Typography variant="h4" paddingTop={'20px'}>{item.title}</Typography>
            <Typography variant="body1" color="gray">{item.exerpt}</Typography>
            <Divider sx={{ paddingTop: '30px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', paddingTop: '10px' }}>
              <Avatar alt={item.author.name} src={item.author.image} />
              <Box>
                <Typography variant="body2">{item.author.name}</Typography>
                <Box sx={{ opacity: '.3' }}>{format(new Date(), 'dd MMM, yyyy')} &#x2022; 10min read</Box>
              </Box>
            </Box>
          </Box>
        ))
      }
    </Box>
  )
}

export default Content

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