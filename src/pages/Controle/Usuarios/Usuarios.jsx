import React from 'react'
import './Usuarios.css'
import SideBar from '../../../components/SideBar/SideBar'
import Header from '../../../components/HeaderGeral/HeaderGeral'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [showAdcModal, setShowAdcModal] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cargo, setCargo] = useState('');
    const [setor, setSetor] = useState('');

    const [showEditModal, setShowEditModal] = useState(false);
    const [usuarioToEdit, setUsuarioToEdit] = useState({});

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [usuarioToDelete, setUsuarioToDelete] = useState({});

    const [filter, setFilter] = useState({ nome: '' });


    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/user`, { params: filter });
            console.log('Resposta da API:', response.data);

            if (Array.isArray(response.data)) {
                setUsuarios(response.data);
            } else {
                console.error('Dados da API não são um array:', response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar clientes:', error);
        }
    };

    const handleFilterChange = async (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
        await fetchUsuarios(); // Chama a função de busca após atualizar o filtro
    };

    const handleEdit = async () => {
        if (!usuarioToEdit) return;

        try {
            await axios.put(`http://localhost:5000/user/${usuarioToEdit.id}`, usuarioToEdit);
            setUsuarios(usuarios.map(usuario => usuario.id === usuarioToEdit.id ? usuarioToEdit : usuario));
            setShowEditModal(false);
            setUsuarioToEdit(null);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao editar cliente:", error);
            alert("Erro ao editar usuario. Tente novamente mais tarde.");
        }
    };
    const handleRegister = async () => {
        if (!usuarioToEdit) return;

        try {
            await axios.post(`http://localhost:5000/auth/register`,
                { nome, email, senha, cargo, setor });
            setShowAdcModal(false);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao cadastrar usuario", error);
            alert("Erro ao cadastrar usuario. Tente novamente mais tarde.");
        }
    };
    const handleDelete = async () => {
        if (!usuarioToDelete) return;

        try {
            await axios.delete(`http://localhost:5000/user/${usuarioToDelete.id}`);
            setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioToDelete.id));
            setShowDeleteModal(false);
            setUsuarioToDelete(null);
            window.location.reload();
        } catch (error) {
            console.error("Erro ao excluir cliente:", error);
            alert("Erro ao excluir usuario. Tente novamente mais tarde.");
        }
    }
    const handleDeleteClick = (usuario) => {
        setUsuarioToDelete(usuario);
        setShowDeleteModal(true);
    };

    return (
        <div className='container-usuarios'>
            <nav className='nav-geral'>
                <SideBar />
                <Header />
            </nav>

            <div className="main-usuarios">
                <div className="tabela-usuarios">
                    <div>
                        <h1>Controle de Usuários</h1>
                    </div>
                    <div className='search-container'>
                        <input type='text' name='nome' placeholder='nome' className='search-input' value={filter.nome} onChange={handleFilterChange} />
                        <button className='btn-table adc' onClick={() => { setShowAdcModal(true); }}>Adicionar Usuario</button>
                    </div>
                    <table className='table-usuarios'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>
                                        <button className='btn-table edit' onClick={() => { setUsuarioToEdit(usuario); setShowEditModal(true); }}>Editar</button>
                                        {" | "}
                                        <button
                                            className='btn-table del'
                                            onClick={() => { handleDeleteClick(usuario); }}
                                        >
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal de Edição */}
            {showEditModal && (
                <div className="modal-overlay">
                    <div className='modal' style={{ backgroundColor: "white", borderRadius: "8px", gap: "10px", width: "400px", height: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h2>Editar Usuario</h2>
                        <div>
                            <label>Nome:</label>
                            <input type="text" value={usuarioToEdit.nome} onChange={(e) => setUsuarioToEdit({ ...usuarioToEdit, nome: e.target.value })} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={usuarioToEdit.email} onChange={(e) => setUsuarioToEdit({ ...usuarioToEdit, email: e.target.value })} />
                        </div>
                        <div>
                            <label>Senha:</label>
                            <input type="password" value={usuarioToEdit.senha} onChange={(e) => setUsuarioToEdit({ ...usuarioToEdit, senha: e.target.value })} />
                        </div>
                        <div>
                            <label>Cargo:</label>
                            <input type="text" value={usuarioToEdit.cargo} onChange={(e) => setUsuarioToEdit({ ...usuarioToEdit, cargo: e.target.value })} />
                        </div>
                        <div>
                            <label>Setor:</label>
                            <input type="text" value={usuarioToEdit.setor} onChange={(e) => setUsuarioToEdit({ ...usuarioToEdit, setor: e.target.value })} />
                        </div>
                        <button onClick={handleEdit}>Salvar</button>
                        <button onClick={() => setShowEditModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

            {/* Modal de Adição*/}
            {showAdcModal && (
                <div className="modal-overlay">
                    <div className='modal' style={{ backgroundColor: "white", borderRadius: "8px", gap: "10px", width: "400px", height: "400px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h2>Editar Usuario</h2>
                        <div>
                            <label>Nome:</label>
                            <input type="text" value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>Senha:</label>
                            <input type="password" value={senha}
                                onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div>
                            <label>Cargo:</label>
                            <input type="text" value={cargo}
                                onChange={(e) => setCargo(e.target.value)} />
                        </div>
                        <div>
                            <label>Setor:</label>
                            <input type="text" value={setor}
                                onChange={(e) => setSetor(e.target.value)} />
                        </div>
                        <button onClick={handleRegister}>Salvar</button>
                        <button onClick={() => setShowAdcModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

            {/* Modal de Confirmação */}
            {showDeleteModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Confirmação de Exclusão</h2>
                        <p>Tem certeza que deseja excluir este cliente?</p>
                        <div className="modal-actions">
                            <button onClick={handleDelete} style={{ color: "white", backgroundColor: "red", padding: "10px", marginRight: "10px" }}>
                                Confirmar
                            </button>
                            <button onClick={() => setShowDeleteModal(false)} style={{ color: "white", backgroundColor: "gray", padding: "10px" }}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}