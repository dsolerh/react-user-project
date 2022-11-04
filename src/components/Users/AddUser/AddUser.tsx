import { FormEvent, useState } from "react";
import ErrorData from "../../../types/error";
import UserData from "../../../types/user";
import { Button } from "../../UI/Button";
import Input from "../../UI/Input/Input";
import Modal from "../../UI/Modal/Modal";
import { UserCard } from "./styles";

interface AddUserProps {
    onAddNewUser?: (u: UserData) => void
}

function AddUser({ onAddNewUser }: AddUserProps) {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState<ErrorData>()

    function addUserHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        // validation
        if (username.trim() === '' || age.trim() === '') {
            setError({ title: 'Required', message: 'The username and age are required' })
            return
        }
        if (+age < 0) {
            setError({ title: 'Invalid Age', message: 'The age must be a positive integer' })
            return
        }

        setUsername('')
        setAge('')
        onAddNewUser && onAddNewUser({ name: username, age: age, id: Math.random().toString() })
    }

    return (
        <>
            {error && <Modal title={error.title} message={error.message} onDismiss={()=>setError(undefined)} />}
            <UserCard>
                <form onSubmit={addUserHandler}>
                    <Input
                        id="username"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <Input
                        id="age"
                        label="Age (Years)"
                        onChange={e => setAge(e.target.value)}
                        value={age}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </UserCard>
        </>
    );
}

export default AddUser;