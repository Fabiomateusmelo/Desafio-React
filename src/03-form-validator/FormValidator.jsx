import { useState } from 'react'

export default function FormValidator() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  const findErrors = () => {
    const errors = []
    if (!email || !password || !passwordConfirm)
      errors.push('Todos os campos devem ser preenchidos')
    if ([...email].filter(i => i === '@').length !== 1) {
      errors.push('O Email deve conter um sinal de @')
    }
    if (password.length < 8)
      errors.push('A senha deve conter pelo menos 8 caracteres')
    if (password !== passwordConfirm) errors.push('As senhas devem ser iguais')

    return errors
  }

  const handleSubmit = e => {
    e.preventDefault()

    const errors = findErrors()
    setMessage(errors.length ? errors.join(', ') : 'Usuário Criado!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Inscreva-se!</h1>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="seu@email.com"
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="password">Senha</label>
      <input
        placeholder="Digite sua senha"
        type="password"
        name="password"
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirmar Senha</label>
      <input
        placeholder="Confirme sua senha"
        type="password"
        name="password-confirm"
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <h4>{message}</h4>
      <input type="submit" value="Enviar" />
    </form>
  )
}
