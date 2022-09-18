import { ImageBackground } from 'react-native'

import backgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles'

interface Props {
    children: React.ReactNode
}

export function Background({ children }: Props) {
    return (
        <ImageBackground
            source={backgroundImg}//sempre pressupõe um novo valor
            defaultSource={backgroundImg}//memoriza a img padrão e carrega mais rápido
            style={styles.container}
        >
            {children}
        </ImageBackground>
    )
}