import React, { useEffect, useState } from 'react';
import {
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  const Course =({
    views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
  })=> {
    return (
     <VStack className="course" alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
            <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
         // isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
     </VStack>
    )
  }
const Courses = () => {
    const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];
  const addToPlaylistHandler = () => {
   console.log('Adding to Playlist');
  };
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />

<Input
  value={keyword}
  onChange={e => setKeyword(e.target.value)}
  placeholder="Search a course..."
  type={'text'}
  focusBorderColor="yellow.500"
/>

<HStack
  overflowX={'auto'}
  paddingY="8"
  css={{
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  }}
>
 {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
</HStack>
<Stack
  direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
        >
      <Course
         key={'sample'}
              title={'sample'}
              description={'sample'}
              views={2}
              imageSrc={'sample'}
              id={'sample'}
              creator={'sample'}
              lectureCount={'sample'}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={'sample'}
      />
</Stack>
    </Container>
  )
}

export default Courses