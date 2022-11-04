import styled from "styled-components";
import UserData from "../../../types/user";
import { Card } from "../../UI/Card";

const UsersCard = styled(Card)`
    margin: 2rem auto;
    width: 90%;
    max-width: 40rem;

    & ul {
        list-style: none;
        padding: 1rem;
    }

    & li {
        border: 1px solid #ccc;
        margin: 0.5rem 0;
        padding: 0.5rem;
    }
`

interface UserListProps {
    users: UserData[]
}

function UsersList({ users }: UserListProps) {
    return (
        <UsersCard>
            <ul>
                {users.map(u=> (
                    <li key={u.id}>
                        {u.name} ({u.age} years old)
                    </li>
                ))}
            </ul>
        </UsersCard>
    );
}

export default UsersList;