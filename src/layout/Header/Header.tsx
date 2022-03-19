import { AppConfig } from '@/lib/utils/AppConfig';
import { Account } from './Account';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHomeAlt, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Flex, 
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
      <Flex wrap="wrap" direction="row" justifyContent="space-between" width="full" bgColor="transparent" height="20">
        <Center>
            <Heading m="1vw">
                {AppConfig.description}
            </Heading>
        </Center>
        <Breadcrumb m="1vw" spacing='4vw' separator={<FontAwesomeIcon icon={faChevronRight} />}>  
            <BreadcrumbItem>
                <BreadcrumbLink href="/">
                <IconButton size='lg' aria-label='Home' variant="ghost" icon={<FontAwesomeIcon icon={faHomeAlt} />}>         
                </IconButton>
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="https://github.com/GhastlyParadox">
                    <IconButton 
                    size='lg' 
                    aria-label='Github' 
                    variant="ghost" 
                    icon={<Image maxWidth="20px" 
                    src="/images/logo-github-dark.png" alt="Github" />}> </IconButton>
                </BreadcrumbLink>   
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href="/portal/">
                <IconButton variant="ghost" aria-label='Message' size='lg' icon={<FontAwesomeIcon icon={faMessage}/>}>
                </IconButton> 
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Account />      
            </BreadcrumbItem>
        </Breadcrumb>
    </Flex>
    </>
    );
  }