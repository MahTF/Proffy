import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição." />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Link da sua foto" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
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
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">+ Novo horário</button>
                    </legend>

                    <div className="schedule-item">
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
                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Até" type="time" />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados.
                </p>

                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>

        </div>
    );
}

export default TeacherForm;
