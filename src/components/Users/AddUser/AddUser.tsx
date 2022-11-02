import { FormEvent } from "react";

function AddUser() {

    function addUserHandler(e:FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit"></button>
        </form>
    );
}

export default AddUser;