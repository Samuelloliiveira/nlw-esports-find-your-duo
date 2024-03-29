import { useState } from 'react'
import { ActivityIndicator, Alert, Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native'
import * as Clipboard from 'expo-clipboard'

import { styles } from './styles'
import { THEME } from '../../theme'
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'

import { Heading } from '../Heading'

interface Props extends ModalProps {
    discord: string
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordToClipboard() {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord)

        Alert.alert('Discord Copiado!', 'Nome de usuário copiado para a área de transferência.')
        setIsCopping(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name="close"
                            size={30}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title="Vamos jogar!"
                        subtitle="Agora é só chamar!"
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />

                    <Text style={styles.label}>
                        Adicione no Discord
                    </Text>

                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordToClipboard}
                        disabled={isCopping}
                    >
                        <Text style={styles.discord}>
                            {isCopping ?
                                <ActivityIndicator color={THEME.COLORS.PRIMARY} /> :
                                discord
                            }
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}