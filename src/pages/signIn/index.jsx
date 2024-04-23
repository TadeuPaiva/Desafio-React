import { Container, Form, Background } from "./style";

import { Input } from "../../components/input";
import { Button } from '../../components/button';

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from "react-router-dom";

export function SignIn () {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>

                <div className="inputs">
                <Input type="mail" icon={FiMail} placeholder="E-mail" />
                <Input type="password" icon={FiLock} placeholder="Senha" />
                </div>

                <Button >Entrar</Button>

                <Link to="/register">Criar conta</Link>

            </Form>

            <Background />
        </Container>
    )
}   