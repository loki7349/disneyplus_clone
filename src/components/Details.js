import React from "react";
import styled from "styled-components";

const Details = (props) => {
    return (
        <Container>
            <Background>
                <img
                    alt=""
                    src=""
                />    
            </Background>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`
export default Details