import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs-extra';
import path from 'path';
dotenv.config();



// Function to send an email
const sendMail = async (options, callback) => {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            host: options.host || process.env.SMTP_HOST,
            port: options.port || process.env.SMTP_PORT,
            secure: options.secure || process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: options.username || process.env.SMTP_USER, // SMTP username
                pass: options.password || process.env.SMTP_PASS, // SMTP password
            },
        });

        // Read and render the template
        const templatePath = path.resolve(__dirname, options.template);
        const templateContent = await fs.readFile(templatePath, 'utf-8');

        // Simple string replacement for templating
        let html = templateContent;
        for (const key in options.data) {
            const value = typeof options.data[key] === 'function' ? options.data[key]() : options.data[key];
            html = html.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }

        // Send the email
        const info = await transporter.sendMail({
            from: options.from || process.env.SMTP_FROM, // sender address
            to: options.to, // list of receivers
            subject: options.subject, // Subject line
            text: options.text, // plain text body
            html, // html body
        });

        callback(null, info);
    } catch (error) {
        callback(error, null);
    }
};

export default sendMail;