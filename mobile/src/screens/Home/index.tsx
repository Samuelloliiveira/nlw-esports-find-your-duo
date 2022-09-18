import { useEffect, useState } from 'react'
import { Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'
import LogoImg from '../../assets/logo-nlw-esports.png'

import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard';
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    fetch('http://192.168.42.233:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={LogoImg}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  )
}