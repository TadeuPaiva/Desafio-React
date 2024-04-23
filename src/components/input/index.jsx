import { Container } from "./style";

export function Input({ icon: Icon, value, ...props }) {
    return (
        <Container>
            {Icon && <Icon size={20} />}
            <input value={value} { ...props } />
        </Container>
    )
}