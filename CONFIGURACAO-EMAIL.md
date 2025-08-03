# 🚨 CONFIGURAÇÃO OBRIGATÓRIA - Email Formulário

## ⚠️ IMPORTANTE: Configurar SMTP para admin@dappio.pt

Para o formulário de contacto funcionar, precisa de criar um ficheiro `.env.local` na raiz do projeto.

### 📝 PASSOS:

1. **Crie o ficheiro `.env.local`** na raiz do projeto (mesmo nível que `package.json`)

2. **Adicione este conteúdo:**
```
# Email Configuration for Contact Form
SMTP_HOST=mail.dappio.pt
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=admin@dappio.pt
SMTP_PASSWORD=sua-password-do-email-aqui
```

3. **Configure as credenciais do seu email:**
   - **SMTP_HOST:** Servidor SMTP do seu domínio (ex: mail.dappio.pt)
   - **SMTP_PORT:** Porta SMTP (587 para STARTTLS, 465 para SSL)
   - **SMTP_SECURE:** `false` para porta 587, `true` para porta 465
   - **SMTP_USER:** admin@dappio.pt
   - **SMTP_PASSWORD:** A password do email admin@dappio.pt

4. **Reinicie o servidor:**
```bash
# Pare o servidor (Ctrl+C) e execute:
npm run dev
```

## ✅ RESULTADO:
- **Emails enviados DE:** admin@dappio.pt
- **Emails enviados PARA:** pintosofiacardoso@gmail.com
- **Reply-To:** Email do utilizador (para resposta direta)
- Logs detalhados no terminal
- Efeitos visuais no botão funcionando

## 🔍 VERIFICAR:
- Server roda em: http://localhost:3000
- Formulário na secção "Contacto"
- Teste enviando uma mensagem

## 📧 FLUXO DO EMAIL:
1. Utilizador preenche formulário no website
2. Email é enviado através de admin@dappio.pt (SMTP)
3. Email chega a pintosofiacardoso@gmail.com
4. Sofia pode responder diretamente ao utilizador (reply-to configurado)