import 'react-multi-carousel/lib/styles.css';
import { Avatar, Box, Typography } from "@mui/material"
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { format } from 'date-fns';
import { HeroProps } from './hero.props';
import { calculateEstimetedTimeToRead } from 'src/helpers/time.format';

const Hero = ({ blogs }: HeroProps) => {
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <Box height={'70vh'} width={'100%'}>
      <Carousel responsive={responsive}>
        {blogs.map(item => (
          <Box key={item.id}>
            <Box sx={{ position: 'relative', width: '100%', height: '70vh' }}>
              <Image src={item.image.url} alt={item.title} priority fill style={{ objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', widows: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}></Box>
              <Box width={{ xs: '100%', sm: '70%' }} sx={{ position: 'relative', color: 'white', top: '50%', transform: 'translateY(-50%)', paddingLeft: { xs: '10px', sm: '50px' } }}>
                <Typography className='clamp-text-1' sx={{ fontSize: { xs: '30px', md: '60px' } }}>{item.title}</Typography>
                <Typography className='clamp-text-2' sx={{ fontSize: { xs: '18px', md: '30px' }, color: 'gray' }}>{item.excerpt}</Typography>
                <Box sx={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Avatar alt={item.auther.name} src={item.auther.avatar.url} />
                  <Box>
                    <Typography>{item.auther.name}</Typography>
                    <Box>{format(new Date(item.createdAt), 'dd MMM, yyyy')} &#x2022; {calculateEstimetedTimeToRead(item.description.text)}min read</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))
        }
      </Carousel >
    </Box >
  )
}

export default Hero

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