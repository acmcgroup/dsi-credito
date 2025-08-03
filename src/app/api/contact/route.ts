import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] 📧 Contact form submission started`);
  
  try {
    const { name, email, phone, subject, message } = await req.json();
    
    console.log(`[${timestamp}] 📝 Form data received:`, {
      name: name?.substring(0, 20) + (name?.length > 20 ? '...' : ''),
      email: email,
      phone: phone ? phone.substring(0, 15) + '...' : 'Not provided',
      subject: subject?.substring(0, 30) + (subject?.length > 30 ? '...' : '') || 'No subject',
      messageLength: message?.length || 0
    });

    // Validation
    if (!name || !email || !message) {
      console.log(`[${timestamp}] ❌ Validation failed: Missing required fields`);
      return NextResponse.json(
        { success: false, error: "Nome, email e mensagem são obrigatórios" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log(`[${timestamp}] ❌ Validation failed: Invalid email format - ${email}`);
      return NextResponse.json(
        { success: false, error: "Email inválido" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error(`[${timestamp}] 🚨 CONFIGURATION ERROR: Missing SMTP credentials in environment variables`);
      console.error(`[${timestamp}] 📋 Required env vars: SMTP_HOST, SMTP_USER, SMTP_PASSWORD, SMTP_PORT`);
      console.error(`[${timestamp}] 📋 Current SMTP_HOST: ${process.env.SMTP_HOST ? 'SET' : 'MISSING'}`);
      console.error(`[${timestamp}] 📋 Current SMTP_USER: ${process.env.SMTP_USER ? 'SET' : 'MISSING'}`);
      console.error(`[${timestamp}] 📋 Current SMTP_PASSWORD: ${process.env.SMTP_PASSWORD ? 'SET' : 'MISSING'}`);
      
      return NextResponse.json(
        { 
          success: false, 
          error: "Configuração de email não encontrada. Contacte o administrador." 
        },
        { status: 500 }
      );
    }

    console.log(`[${timestamp}] ✅ Validation passed, creating email transporter`);
    console.log(`[${timestamp}] 📧 SMTP user configured: ${process.env.SMTP_USER}`);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Accept self-signed certificates
      }
    });

    console.log(`[${timestamp}] 🔧 Testing transporter connection...`);
    
    // Test the connection
    try {
      await transporter.verify();
      console.log(`[${timestamp}] ✅ SMTP connection verified successfully`);
    } catch (verifyError) {
      console.error(`[${timestamp}] 🚨 SMTP connection failed:`, verifyError);
      return NextResponse.json(
        { 
          success: false, 
          error: "Erro de configuração do servidor de email. Contacte o administrador." 
        },
        { status: 500 }
      );
    }

    const destinationEmail = "pintosofiacardoso@gmail.com";
    const senderEmail = "admin@dappio.pt";
    console.log(`[${timestamp}] 📧 Preparing email from: ${senderEmail} to: ${destinationEmail}`);

    // Email to the company
    const mailOptions = {
      from: `"Formulário de Contacto - Porto Crédito" <${senderEmail}>`,
      to: destinationEmail,
      replyTo: email, // User can reply directly to the sender
      subject: `Novo contacto: ${subject || "Sem assunto"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #3b82f6; text-align: center;">Novo Contacto - Porto Crédito</h2>
          <hr style="border: none; border-top: 2px solid #3b82f6; margin: 20px 0;" />
          
          <div style="margin: 15px 0;">
            <strong style="color: #333;">Nome:</strong> 
            <span style="color: #666;">${name}</span>
          </div>
          
          <div style="margin: 15px 0;">
            <strong style="color: #333;">Email:</strong> 
            <span style="color: #666;">${email}</span>
          </div>
          
          <div style="margin: 15px 0;">
            <strong style="color: #333;">Telefone:</strong> 
            <span style="color: #666;">${phone || "Não fornecido"}</span>
          </div>
          
          <div style="margin: 15px 0;">
            <strong style="color: #333;">Assunto:</strong> 
            <span style="color: #666;">${subject || "Sem assunto"}</span>
          </div>
          
          <div style="margin: 15px 0;">
            <strong style="color: #333;">Mensagem:</strong>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; color: #333; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="color: #888; font-size: 12px; text-align: center;">
            Este email foi enviado através do formulário de contacto do website Porto Crédito.<br/>
            Timestamp: ${timestamp}
          </p>
        </div>
      `,
    };

    console.log(`[${timestamp}] 📤 Sending email via ${senderEmail}...`);
    console.log(`[${timestamp}] 📋 Email details:`, {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
      subject: mailOptions.subject,
      smtpHost: process.env.SMTP_HOST
    });

    // Send email
    const emailResult = await transporter.sendMail(mailOptions);
    
    console.log(`[${timestamp}] ✅ Email sent successfully!`);
    console.log(`[${timestamp}] 📋 Email result:`, {
      messageId: emailResult.messageId,
      response: emailResult.response
    });

    return NextResponse.json({ 
      success: true, 
      message: "Mensagem enviada com sucesso!" 
    });

  } catch (error) {
    console.error(`[${timestamp}] 🚨 CRITICAL ERROR in contact form:`, error);
    
    // Log detailed error information
    if (error instanceof Error) {
      console.error(`[${timestamp}] 📋 Error details:`, {
        name: error.name,
        message: error.message,
        stack: error.stack?.split('\n').slice(0, 5).join('\n') // First 5 lines of stack
      });
    }

    // Specific error handling for common issues
    let userFriendlyMessage = "Erro interno do servidor. Tente novamente mais tarde.";
    
    if (error instanceof Error) {
      if (error.message.includes('Missing credentials') || error.message.includes('Authentication')) {
        userFriendlyMessage = "Configuração de email não encontrada. Contacte o administrador.";
        console.error(`[${timestamp}] 🔑 SMTP credentials missing or invalid`);
      } else if (error.message.includes('Invalid login') || error.message.includes('Authentication failed')) {
        userFriendlyMessage = "Erro de autenticação do servidor de email. Contacte o administrador.";
        console.error(`[${timestamp}] 🔐 SMTP authentication failed`);
      } else if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        userFriendlyMessage = "Timeout do servidor de email. Tente novamente.";
        console.error(`[${timestamp}] ⏰ Email timeout error`);
      } else if (error.message.includes('Network') || error.message.includes('ECONNREFUSED')) {
        userFriendlyMessage = "Erro de rede. Verifique sua conexão e tente novamente.";
        console.error(`[${timestamp}] 🌐 Network error`);
      } else if (error.message.includes('SMTP')) {
        userFriendlyMessage = "Erro no servidor de email. Contacte o administrador.";
        console.error(`[${timestamp}] 📧 SMTP server error`);
      }
    }

    return NextResponse.json(
      { 
        success: false, 
        error: userFriendlyMessage 
      },
      { status: 500 }
    );
  }
}