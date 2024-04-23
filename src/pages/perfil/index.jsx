import { Container, Form, Avatar } from "./style";

import { GoArrowLeft } from "react-icons/go";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Input } from "../../components/input"
import  { Button } from '../../components/button'

export function Perfil() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <GoArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/tadeupaiva.png" 
                    alt="Imagem do User" />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input type="file" id="avatar"/>
                    </label>
                </Avatar>

                <Input type="text"
                icon={FiUser}
                value="Tadeu Paiva" />

                <Input type="mail"
                icon={FiMail}
                value="tadeu@email.com" />

                <Input type="password"
                icon={FiLock}
                placeholder="Senha atual" />

                <Input type="password"
                icon={FiLock}
                placeholder="Nova senha" />

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}