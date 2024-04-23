import { Container, Main } from "./style";

import { Header } from  "../../components/header";
import { Input } from "../../components/input";
import { NewItem } from "../../components/newItem";
import { Button } from "../../components/button";
import { Textarea } from "../../components/textarea";

import { FiArrowLeft} from "react-icons/fi";
import { Link } from "react-router-dom";

export function CreateMovie () {
    return(
        <Container>

            <Header />

            <Main>
            <Link to="/"> <FiArrowLeft /> Voltar</Link>

            <h1>Novo filme</h1>

            <div className="input">
            <Input type="text"  placeholder="Título"/>
            <Input type="number"  placeholder="Sua nota (de 0 a 5)"/>
            </div>

            <Textarea placeholder="Observações" />

            <h3>Marcadores</h3>

            <div className="marcador">
            <NewItem value="React" />
            <NewItem isNew placeholder="Novo marcador" />
            </div>

            <div className="buttons">
            <button id="excluir">Excluir filme</button>
            <Button>Salvar alterações</Button>
            </div>

            </Main>
        </Container>
    )
}