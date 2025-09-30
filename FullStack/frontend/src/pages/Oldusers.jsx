import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 


function Oldusers() {
// --- STATE VÁLTOZÓK ---

    // READ ÉS HIBAKEZELÉS
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // CREATE (HOZZÁADÁS)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // UPDATE (SZERKESZTÉS)
    const [editingId, setEditingId] = useState(null); 
    const [editedName, setEditedName] = useState('');
    const [editedEmail, setEditedEmail] = useState('');

    // --- FUNKCIÓK ---

    // Adatok lekérdezésének funkciója
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3001/api/users');
            setUsers(response.data);
            setError(null);
        } catch (err) {
            console.error("Hiba az adatok lekérésekor:", err);
            setError("Nem sikerült betölteni az adatokat. Ellenőrizze, hogy a backend szerver fut-e a 3001-es porton.");
        } finally {
            setLoading(false);
        }
    };

    // Adatok lekérése a komponens betöltésekor
    useEffect(() => {
        fetchData(); 
    }, []);


    // DELETE: Felhasználó törlése
    const handleDelete = async (id) => {
        if (!window.confirm(`Biztosan törölni szeretnéd a(z) ${id} ID-jű felhasználót?`)) {
            return;
        }
        try {
            await axios.delete(`http://localhost:3001/api/users/${id}`);
            fetchData();
        } catch (err) {
            console.error("Hiba a törléskor:", err);
            setError("Nem sikerült törölni a felhasználót.");
        }
    };
    
    // UPDATE: Szerkesztési mód elindítása
    const handleEditStart = (user) => {
        setEditingId(user.id);
        setEditedName(user.name);
        setEditedEmail(user.email);
    };

    // UPDATE: Módosítás elküldése
    const handleUpdate = async (id) => {
        if (!editedName || !editedEmail) {
            alert("A név és az email mező kitöltése kötelező!");
            return;
        }

        try {
            await axios.patch(`http://localhost:3001/api/users/${id}`, {
                name: editedName,
                email: editedEmail,
            });
            setEditingId(null);
            fetchData();
        } catch (err) {
            console.error("Hiba a módosításkor:", err);
            setError("Nem sikerült módosítani a felhasználót.");
        }
    };
    
    // Szerkesztés megszakítása
    const handleEditCancel = () => {
        setEditingId(null);
    };


    // --- RENDERELÉS ---

    // Feltételes renderelés: Betöltés és Hiba
    if (loading) {
        return <div className="App"><p>Adatok betöltése...</p></div>;
    }
    if (error) {
        return <div className="App"><p style={{ color: 'red' }}>{error}</p></div>;
    }
return (
    <div className="App">
                    <h2>Felhasználók Listája</h2>
            <table className='tablestyle'>
                <thead>
                    <tr>
                        <th id='tableHeaderStyle' >#ID</th>
                        <th id='tableHeaderStyle' >Név</th>
                        <th id='tableHeaderStyle'>Email</th>
                        <th id='tableHeaderStyle'>Regisztráció</th>
                        <th id='tableHeaderStyle'>Műveletek</th> 
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map(user => (
                            <tr key={user.id}>
                                <td id='tableCellStyle'>{user.id}</td>
                                
                                {/* Szerkesztési mód váltása */}
                                {editingId === user.id ? (
                                    <>
                                        <td id='tableCellStyle'>
                                            <input 
                                                type="text" 
                                                value={editedName} 
                                                onChange={e => setEditedName(e.target.value)} 
                                            />
                                        </td>
                                        <td id='tableCellStyle'>
                                            <input 
                                                type="email" 
                                                value={editedEmail} 
                                                onChange={e => setEditedEmail(e.target.value)} 
                                            />
                                        </td>
                                    </>
                                ) : (
                                    // Normál mód
                                    <>
                                        <td id='tableCellStyle'>{user.name}</td>
                                        <td id='tableCellStyle'>{user.email}</td>
                                    </>
                                )}
                                
                                <td id='tableCellStyle'>{new Date(user.created_at).toLocaleDateString()}</td>

                                {/* MŰVELETI GOMBOK */}
                                <td id='tableCellStyle'>
                                    {editingId === user.id ? (
                                        // Szerkesztési mód gombjai
                                        <>
                                            <button onClick={() => handleUpdate(user.id)} style={saveButtonStyle}>Mentés</button>
                                            <button onClick={handleEditCancel} style={cancelButtonStyle}>Mégse</button>
                                        </>
                                    ) : (
                                        // Normál mód gombjai
                                        <>
                                            <button onClick={() => handleEditStart(user)} style={editButtonStyle}>Szerkesztés</button>
                                            <button onClick={() => handleDelete(user.id)} style={deleteButtonStyle}>Törlés</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={noUsersCellStyle}>Nincsenek felhasználók az adatbázisban.</td>
                        </tr>
                    )}
                </tbody>
            </table>
    </div>
    )
}

const tableHeaderStyle = { border: '1px solid #ccc', padding: '10px', backgroundColor: '#f0f0f0' };
const tableCellStyle = { border: '1px solid #ccc', padding: '10px', textAlign: 'left' };
const noUsersCellStyle = { border: '1px solid #ccc', padding: '10px', textAlign: 'center' };
const saveButtonStyle = { padding: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' };
const cancelButtonStyle = { padding: '5px', backgroundColor: '#9E9E9E', color: 'white', border: 'none', cursor: 'pointer' };
const editButtonStyle = { padding: '5px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', marginRight: '5px' };
const deleteButtonStyle = { padding: '5px', backgroundColor: '#F44336', color: 'white', border: 'none', cursor: 'pointer' };


export default Oldusers;