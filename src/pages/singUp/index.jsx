import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from '../../components/button';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link } from "react-router-dom";

export function SignUp () {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <div className="inputs">
                <Input type="text" icon={FiUser} placeholder="Nome" />
                <Input type="mail" icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Senha" />
                </div>

                <Button >Cadastrar</Button>

                <Link to="/"> < FiArrowLeft /> Voltar para o login</Link>

            </Form>

            <Background />
        </Container>
    )
}   