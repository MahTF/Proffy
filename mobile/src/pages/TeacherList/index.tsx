import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import api from '../../services/api';
import styles from './styles';

function TeacherList() {
    const [isFiltersVisible, setIsFilterVisible] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [favorites, setFavorites] = useState<number[]>([]);

    function loadFavorite() {
        AsyncStorage.getItem('favorites').then(res => {
            if (res) {
                const favoritedTeachers = JSON.parse(res);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => { return teacher.id });
                setFavorites(favoritedTeachersId);
            }
        });
    }

    function handleToggleFilterVisible() {
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFilterSubmit() {
        loadFavorite();
        const res = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
        setTeachers(res.data);
        handleToggleFilterVisible();
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title='Proffys disponíveis'
                headerRight={(
                    <BorderlessButton onPress={handleToggleFilterVisible}>
                        <Feather name='filter' size={20} color='#fff' />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Máteria</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder='Qual a matéria?'
                        placeholderTextColor='#c1bccc'
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput
                                style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholder='Qual o dia?'
                                placeholderTextColor='#c1bccc'
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => setTime(text)}
                                value={time}
                                placeholder='Qual horário?'
                                placeholderTextColor='#c1bccc'
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;
