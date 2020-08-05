import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import api from '../../services/api';
import './styles.css';


function TeacherList() {
    const [teachers, setTeatchers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function handleSearchTeachers(e: FormEvent) {
        e.preventDefault();

        const res = await api.get('/classes', {
            params: { subject, week_day, time }
        });

        setTeatchers(res.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers" onSubmit={handleSearchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: 'Art', label: 'Artes' },
                            { value: 'Biology', label: 'Biologia' },
                            { value: 'Sports', label: 'Educação Física' },
                            { value: 'Spanish', label: 'Espanhol' },
                            { value: 'Physics', label: 'Física' },
                            { value: 'Geography', label: 'Geografia' },
                            { value: 'History', label: 'História' },
                            { value: 'English', label: 'Inglês' },
                            { value: 'Math', label: 'Matemática' },
                            { value: 'Portuguese', label: 'Português' },
                            { value: 'Chemistry', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-Feira' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input
                        name="time"
                        label="Horário"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit" className="search">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    );
}

export default TeacherList;
