import { styled } from "styled-components";


export const StyledRegisterForm = styled.form`
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 768px) {
        width: 90%;
    }
`

export const StyledTitleRegisteForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap ;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: 20px;
    }
`

export const StyledRegisterInputsContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const StyledContainerRegisterFormParagraph = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
`

export const StyledContainerRegisterFormButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const StyledContainerInputUnite = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 768px) {
        width: 100%;
    }
`