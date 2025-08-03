# 📧 Configuração SMTP para admin@dappio.pt

## 🔧 CONFIGURAÇÕES SMTP NECESSÁRIAS

Para descobrir as configurações SMTP do seu domínio `dappio.pt`, consulte o seu provedor de hosting/email:

### 📋 CONFIGURAÇÕES COMUNS:

#### **Opção 1: SMTP Genérico**
```
SMTP_HOST=mail.dappio.pt
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=admin@dappio.pt
SMTP_PASSWORD=password-do-admin
```

#### **Opção 2: Se usar cPanel/WHM**
```
SMTP_HOST=dappio.pt
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=admin@dappio.pt
SMTP_PASSWORD=password-do-admin
```

#### **Opção 3: Servidor dedicado**
```
SMTP_HOST=smtp.dappio.pt
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=admin@dappio.pt
SMTP_PASSWORD=password-do-admin
```

### 🔍 COMO DESCOBRIR:

1. **Contacte o seu provedor de hosting**
   - Pergunte pelas configurações SMTP para admin@dappio.pt
   - Peça o servidor SMTP e porta

2. **Verifique o painel de controlo do hosting**
   - cPanel → Contas de Email → Configurar Cliente Email
   - Procure pelas configurações de servidor de saída (SMTP)

3. **Teste no cliente de email**
   - Configure admin@dappio.pt no Outlook/Thunderbird
   - Use as mesmas configurações no `.env.local`

### ⚠️ PORTAS SMTP COMUNS:

- **587:** STARTTLS (recomendado) → `SMTP_SECURE=false`
- **465:** SSL/TLS → `SMTP_SECURE=true`  
- **25:** Não seguro (evitar)

### 🧪 TESTAR CONFIGURAÇÃO:

1. Crie o `.env.local` com as configurações
2. Reinicie o servidor: `npm run dev`
3. Teste o formulário de contacto
4. Verifique os logs no terminal
5. Confirme chegada em pintosofiacardoso@gmail.com

### 🚨 PROBLEMAS COMUNS:

#### **Erro de autenticação:**
- Verifique username/password
- Algumas contas precisam de "senha de aplicação"

#### **Erro de conexão:**
- Verifique SMTP_HOST e SMTP_PORT
- Firewall pode bloquear porta 587/465

#### **Email não chega:**
- Verifique spam/lixo eletrônico
- Configure SPF/DKIM no domínio

### 📞 SUPORTE:

Se não conseguir as configurações, contacte:
- **Provedor de hosting** do dappio.pt
- **Administrador IT** da empresa
- **Suporte técnico** do domínio

### ✅ FICHEIRO FINAL `.env.local`:

```bash
# Email Configuration for Contact Form
SMTP_HOST=mail.dappio.pt
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=admin@dappio.pt
SMTP_PASSWORD=SUA_PASSWORD_REAL_AQUI
```

**🔄 Não esqueça de reiniciar o servidor após criar o ficheiro!**