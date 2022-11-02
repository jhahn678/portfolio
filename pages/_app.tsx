import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Footer from '../components/layout/footer/Footer';
import Modal from '../components/modal/Modal';
import { useScrollState } from '../hooks/useScrollState';

function MyApp({ Component, pageProps }: AppProps) {

  useScrollState()

  return (
     <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ 
          fontFamily: 'Montserrat, sans-serif',
          colors: {
            "orange": ["#FDF1E7","#FAD9BD","#F7C092","#F3A768","#F08F3D","#f0974b","#F0903F","#ED7612","#BD5F0F","#8E470B"],
            "gray": ["#F2F2F2","#DCDBDB","#C5C4C4","#AEADAD","#979696","#807F7F","#676565","#4D4C4C","#333333","#1A1919"],
            "lightOrange": ["#FFF0E5","#FFD6B8","#FFBC8A","#FFA15C","#FF872E","#FF6C00","#CC5700","#994100","#662B00","#331600"],
            "black": ["#F3F3F2","#DCDCDA","#C6C6C3","#B0B0AB","#999994","#83837C","#696963","#4F4F4A","#343432","#1A1A19"]
          }
        }}
      >
        <NotificationsProvider>
          <Component {...pageProps} />
          <Footer/>
          <Modal/>
        </NotificationsProvider>
      </MantineProvider>
  )
}

export default MyApp
