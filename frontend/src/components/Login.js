import React, { useState } from 'react';
import api from '../services/api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/token/', { username, password });
            localStorage.setItem('token', response.data.access); // Armazena o token
            // Redirecione ou faça algo após o login bem-sucedido
            window.location.href = '/candidates'; // Redireciona para a lista de candidatos, por exemplo
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Login failed. Please check your credentials.'); // Define mensagem de erro
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
