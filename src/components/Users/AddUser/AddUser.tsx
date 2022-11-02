import { FormEvent, useState } from "react";
import { Button } from "../../UI/Button";
import Input from "../../UI/Input/Input";
import { UserCard } from "./styles";

function AddUser() {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    function addUserHandler(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()

        // validation
        if (username.trim() === '' || age.trim() === '') {
            return
        }
        if (+age < 0) {
            return
        }

        setUsername('')
        setAge('')
    }

    return (
        <UserCard>
            <form onSubmit={addUserHandler}>
                <Input 
                    id="username" 
                    label="Username" 
                    onChange={e=> setUsername(e.target.value)} 
                    value={username}
                />
                <Input 
                    id="age" 
                    label="Age (Years)" 
                    onChange={e=>setAge(e.target.value)}
                    value={age}
                />
                <Button type="submit">Add User</Button>
            </form>
        </UserCard>
    );
}

export default AddUser;