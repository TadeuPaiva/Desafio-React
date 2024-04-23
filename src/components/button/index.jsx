import { Container } from "./style";

export function Button (props) {
    return (
        <Container>
            <button>
                { props.children }
            </button>
        </Container>
    )
}