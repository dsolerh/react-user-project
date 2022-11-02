import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Container = styled.div`
    & label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    & input {
        font: inherit;
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.15rem;
        margin-bottom: 0.5rem;
    }

    & input:focus {
        outline: none;
        border-color: #4f005f;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

function Input({
    id,
    label,
    className,
    type = 'text',
    onChange,
    value
}: InputProps) {
    return (
        <Container className={className}>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} type={type} onChange={onChange} value={value} />
        </Container>
    );
}

export default Input;