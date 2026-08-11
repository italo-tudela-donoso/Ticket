import { transporter } from '../config/nodemailer.js'
import { env } from '../config/env.js';

export async function enviarMail(to, subject, html, text) {

    try {
        await transporter.sendMail({
            from:env.SMTP_USER,
            to: to,
            subject: subject,
            html: html,
            text: text
        })
    } catch ( error) {
        throw error;
    };
    
}
    
