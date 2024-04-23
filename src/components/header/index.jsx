import { Container, User } from "./style";

import {Input} from "../input";

export function Header() {
    return(
    <Container>
        <h1>RocketMovies</h1>
        <Input type='text'  placeholder="Pesquisar pleo título" />
        <User to="/perfil">
            <div className="user-info">
            <h2>Tadeu Paiva</h2>
            <p>Sair</p>
            </div>
            <img src="https://github.com/tadeupaiva.png" alt="Imagem do usuário" />
        </User>
    </Container>
    )
}