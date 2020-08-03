import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/55988873?s=460&u=79bf2e05137811f8a719d3c3eaf79eaed04f212c&v=4"
                    alt="Marcelo Ferreira"
                />
                <div>
                    <strong>Marcelo Ferreira</strong>
                    <span>Matéria</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad omnis corporis aut tempore error expedita, ipsum voluptates tenetur asperiores, dolorum consectetur dicta, amet enim maxime?
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus tempore nemo ad? Aperiam, voluptatem tempora! Tempore ea fugit, nesciunt perspiciatis aperiam at eveniet rerum veritatis soluta tenetur nostrum cumque culpa!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dolorum fugiat assumenda iste veritatis, aspernatur reprehenderit, possimus dignissimos ab corporis eveniet ipsum? Numquam, voluptate laboriosam beatae enim temporibus eveniet molestias.
                    </p>

            <footer>
                <p>
                    Preço/Hora
                            <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
