import { createPortal } from "react-dom";
import styled from "styled-components";
import { Button } from "../Button";
import { Card } from "../Card";

const ModalCard = styled(Card)`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;

    @media (min-width: 768px) {
        left: calc(50% - 20rem);
        width: 40rem;
    }

    & header {
        background: #4f005f;
        padding: 1rem;
    }

    & header h2 {
        margin: 0;
        color: white;
    }

    & div.content {
        padding: 1rem;
    }

    & footer {
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
    }
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`

interface ModalProps {
    title: string
    message: string
    onDismiss: () => void
}

function Modal({ title, message, onDismiss }: ModalProps) {
    const overlay = <Overlay onClick={() => onDismiss()} />
    const modal = (
        <ModalCard>
            <header>
                <h2>{title}</h2>
            </header>
            <div className="content">
                <p>{message}</p>
            </div>
            <footer>
                <Button onClick={() => onDismiss()}>Okay</Button>
            </footer>
        </ModalCard>
    )

    return (
        <>
            {createPortal(overlay, document.getElementById('backdrop-root')!)}
            {createPortal(modal, document.getElementById('modal-root')!)}
        </>
    );
}

export default Modal;