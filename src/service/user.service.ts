import { getAllUsersDB, getUserBYIDDB, updateUserByIDDB, deleteUserByIDDB } from '../repository/user.repository';
import { iUsers } from '../interfaces/interfaces'
async function getAllUsers(): Promise<iUsers[]> {
    const data = await getAllUsersDB();
    if (!data.length) throw new Error('No found')
    return data
}

async function getUserByID(id): Promise<iUsers[]> {
    const data = await getUserBYIDDB(id);
    if (!data.length) throw new Error('No found ID')
    return data
}

async function updateUserByID(id, name, surname, email, pwd): Promise<iUsers[]> {
    const data = await updateUserByIDDB(id, name, surname, email, pwd);
    if (!data.length) throw new Error('ID is not found')
    return data
}

async function deleteUserByID(id): Promise<iUsers[]> {
const data = await deleteUserByIDDB(id);
if(!data.length) throw new Error('ID is not found')
return data
}
export { getAllUsers,getUserByID, updateUserByID, deleteUserByID }