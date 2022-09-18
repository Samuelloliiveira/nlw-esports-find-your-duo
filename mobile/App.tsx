import { useEffect, useRef } from 'react'
import { StatusBar } from 'react-native'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'

import { Background } from './src/components/Background'

import './src/services/notificationConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'

export default function App() {
  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  useEffect(() => {
    getPushNotificationToken()
  })

  useEffect(() => {
    // escuta se chegou notificação
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notifications => {
      console.log(notifications)
    })

    // escuta quando responde a notificação
    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  )
}


// Autenticação com o próprio usuário Discord
// Notificar quando alguém clicou no seu anúncio

// FAzer pelo backend - site https://docs.expo.dev/push-notifications/sending-notifications/
// rota -> https://exp.host/--/api/v2/push/send

//Vamos jogar lolzin meu lindo? 
//Que tal encontrar pessoas para aquele Duo destruidor? Encontre a pessoas certa e chame no Discord.
//Pegar o body para já abrir a tela com o anúncio