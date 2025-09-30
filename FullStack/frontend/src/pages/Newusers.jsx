import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 

function Newusers() {
// --- STATE VÁLTOZÓK ---

    
    // CREATE (HOZZÁADÁS)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    // CREATE: Új felhasználó hozzáadása
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email) {
            alert("A név és az email megadása kötelező!");
            return;
        }
        try {
            await axios.post('http://localhost:3001/api/users', { name, email });
            fetchData(); // Frissítés
            setName('');
            setEmail('');
        } catch (err) {
            console.error('Hiba az adatok küldésekor:', err);
            setError("Hiba történt a felhasználó hozzáadása közben.");
        }
    };
return (
    <div className="App">

                    {/* Új felhasználó hozzáadása űrlap */}
                    <form onSubmit={handleSubmit} class="form">
                <h2>Új felhasználó hozzáadása</h2>
                <input
                    type="text"
                    placeholder="Név"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    class="input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    class="input"
                />
                <button type="submit" id='buttomnewstyle'>Hozzádás</button>
            </form>
    </div>
    )
}


export default Newusers;