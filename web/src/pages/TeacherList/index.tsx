import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';
import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
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
                    <Input name="time" label="Horário" type="time" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;
