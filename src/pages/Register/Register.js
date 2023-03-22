import styles from "./Register.module.css";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      displayName: displayName,
      email: email,
      password: password
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user)
  };

  useEffect(() => {

    if(authError) {
      setError(authError);
    }

  }, [authError])


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            value={displayName}
            required
            placeholder="Nome do usuário"
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail: </span>
          <input
            type="email"
            name="email"
            value={email}
            required
            placeholder="E-mail do usuário"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            value={password}
            required
            placeholder="Insira sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha: </span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            placeholder="Confirme a sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button type="submit" className="btn">Cadastrar</button>}
        {loading && <button type="submit" className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
