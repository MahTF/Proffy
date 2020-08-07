import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import heartOutline from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import styles from './styles';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile} >
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/MahTF.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marcelo Ferreira</Text>
                    <Text style={styles.subject}>Matéria</Text>
                </View>
            </View>
            <Text style={styles.bio}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    {'\n'}{'\n'}
                                    Laudantium ea esse et deleniti maxime quas dignissimos molestiae placeat minus delectus perspiciatis.
            </Text>
            <View style={styles.footer}>
                <Text style={styles.costText}>
                    Preço/Hora {'   '}
                    <Text style={styles.cost}> R$ 50,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutline} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;
