import { Container, ContentButton, ContentWrapper } from "./style";

export function Tag ({ children, contentButton, ...rest}) {
    return(
        <Container>
            {children}
            <ContentButton>
                <ContentWrapper>{contentButton}</ContentWrapper>
            </ContentButton>
        </Container>
    )
}