
import { AppConfig } from '@/lib/utils/AppConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Account } from './Account';

import { faChevronRight, faHomeAlt, faMessage } from '@fortawesome/free-solid-svg-icons';

import { Flex, 
  HStack,
  Center,
  Image,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
 } from '@chakra-ui/react';



 export function Header() {
 
    return (
      <>
      <Flex width="100%" justifyContent="space-between" bgColor="transparent" height="20">
        <HStack>
            <Center>
            <Heading ml="1vw">
                {AppConfig.description}
            </Heading>
            </Center>
        </HStack>
        <HStack>
            <Breadcrumb mr="2vw" spacing='8px' separator={<FontAwesomeIcon icon={faChevronRight} />}>
            <BreadcrumbItem>
                <BreadcrumbLink href="/">
                <IconButton size='lg' aria-label='Home' variant="ghost" icon={<FontAwesomeIcon icon={faHomeAlt} />}>         
                </IconButton>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="https://github.com/GhastlyParadox">
                <IconButton size='lg' aria-label='Github' variant="ghost" icon={<Image maxWidth="20px" src="/images/logo-github-dark.png" alt="Github" />}> </IconButton>
                </BreadcrumbLink>   
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="/about/">
                <IconButton variant="ghost" aria-label='About' size='lg' icon={<FontAwesomeIcon icon={faMessage}/>}>
                </IconButton> 
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Account />      
            </BreadcrumbItem>
            </Breadcrumb>
        </HStack>
    </Flex>
    </>
    );
  } 

