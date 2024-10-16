import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";
type User = {
  id: string;
  fullname: string;
  username: string;
  password: string;
};

const AdminUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const usersCollection = collection(firestore, "users");
  const fetchUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as User)));
  };
  useEffect(() => {
    fetchUsers();
  });

  const addUser = async () => {
    await addDoc(usersCollection, newUser);
    fetchUsers();
    setNewUser({ fullname: "", username: "", password: "" });
  };

  const updateUser = async (id: string, updatedUser: Partial<User>) => {
    const userDoc = doc(firestore, "users", id);
    await updateDoc(userDoc, updatedUser);
    fetchUsers();
    setEditingUser(null);
  };

  const deleteUser = async (id: string) => {
    const userDoc = doc(firestore, "users", id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Manage Users</h1>
      <div>
        <input
          className="my-2"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder="Full Name"
          value={newUser.fullname}
          onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
        />
        <input
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          className="mx-3"
        />
        <input
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <button onClick={addUser} className="mx-3">
          Add User
        </button>
      </div>

      {/* Users table */}
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              {editingUser === user.id ? (
                <>
                  <td>
                    <input
                      value={user.fullname}
                      onChange={(e) =>
                        setUsers((prevUsers) =>
                          prevUsers.map((u) =>
                            u.id === user.id
                              ? { ...u, fullname: e.target.value }
                              : u
                          )
                        )
                      }
                      placeholder="Full Name"
                    />
                  </td>
                  <td>
                    <input
                      value={user.username}
                      onChange={(e) =>
                        setUsers((prevUsers) =>
                          prevUsers.map((u) =>
                            u.id === user.id
                              ? { ...u, username: e.target.value }
                              : u
                          )
                        )
                      }
                      placeholder="Username"
                    />
                  </td>
                  <td>
                    <input
                      value={user.password}
                      onChange={(e) =>
                        setUsers((prevUsers) =>
                          prevUsers.map((u) =>
                            u.id === user.id
                              ? { ...u, password: e.target.value }
                              : u
                          )
                        )
                      }
                      placeholder="Password"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        updateUser(user.id, {
                          fullname: user.fullname,
                          username: user.username,
                          password: user.password,
                        })
                      }
                    >
                      Save
                    </button>
                    <button onClick={() => setEditingUser(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.fullname}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>
                    <button
                      onClick={() => setEditingUser(user.id)}
                      className="mx-2"
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
