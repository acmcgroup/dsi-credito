# 📧 Configuração do Email para Formulário de Contacto

## ⚠️ ERRO ATUAL: "Missing credentials for PLAIN"

O erro que está a ver indica que as credenciais do Gmail não estão configuradas. Siga os passos abaixo para resolver:

## 🔧 PASSOS PARA CONFIGURAR:

### 1. Criar ficheiro `.env.local`
Na raiz do projeto (mesmo nível que `package.json`), crie um ficheiro chamado `.env.local`:

```bash
# Email Configuration for Contact Form
GMAIL_USER=seuemail@gmail.com
GMAIL_APP_PASSWORD=suaapppasswordaqui
```

### 2. Configurar Gmail App Password

#### 2.1 Ativar Verificação em 2 Passos:
1. Vai a: https://myaccount.google.com/security
2. Procura por "Verificação em 2 passos" 
3. Ativa se ainda não estiver ativo

#### 2.2 Gerar App Password:
1. Vai a: https://myaccount.google.com/apppasswords
2. Seleciona "Mail" como aplicação
3. Seleciona "Outro (nome personalizado)" se necessário
4. Escreve "Porto Credito Website"
5. Clica em "Gerar"
6. **COPIA a password de 16 caracteres** (ex: `abcd efgh ijkl mnop`)

### 3. Preencher o ficheiro `.env.local`

Substitui os valores no ficheiro:

```bash
GMAIL_USER=pintosofiacardoso@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**⚠️ IMPORTANTE:**
- Remove os espaços da App Password: `abcdefghijklmnop`
- NÃO uses a palavra-passe normal do Gmail
- Usa APENAS a App Password gerada

### 4. Reiniciar o servidor

```bash
# Para o servidor (Ctrl+C)
npm run dev
```

## 🧪 TESTAR A CONFIGURAÇÃO:

1. Vai ao formulário de contacto
2. Preenche todos os campos
3. Clica em "Enviar"
4. Verifica os logs no terminal (agora muito mais detalhados)
5. Verifica o email em `pintosofiacardoso@gmail.com`

## 📋 LOGS MELHORADOS:

Agora vês logs detalhados como:
- ✅ Status de cada passo
- 📧 Detalhes do email enviado
- 🚨 Erros específicos com timestamps
- 📋 Informações de debugging

## 🔍 DEBUGGING:

Se ainda houver problemas, verifica os logs no terminal:
- `📧 Contact form submission started` - Formulário iniciado
- `✅ Gmail SMTP connection verified` - Conexão Gmail OK
- `✅ Email sent successfully!` - Email enviado
- `🚨 CRITICAL ERROR` - Algo deu errado

## 📞 CONTACTO DE DESTINO:

Todos os emails do formulário são enviados para:
**pintosofiacardoso@gmail.com**

## 🔐 SEGURANÇA:

- O ficheiro `.env.local` está no `.gitignore` (não vai para o repositório)
- As credenciais ficam apenas no teu servidor
- Nunca partilhes a App Password

---

Segue estes passos e o formulário deve funcionar perfeitamente! 🚀