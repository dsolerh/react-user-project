import { FormEvent } from "react";
import { Button } from "../../UI/Button";
import Input from "../../UI/Input/Input";
import { UserCard } from "./styles";

function AddUser() {

    function addUserHandler(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <UserCard>
            <form onSubmit={addUserHandler}>
                <Input id="username" label="Username"/>
                <Input id="age" label="Age (Years)"/>
                <Button type="submit">Add User</Button>
            </form>
        </UserCard>
    );
}

export default AddUser;