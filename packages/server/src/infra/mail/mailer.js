import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

class NodeMailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    })
  }

  async sendMail({ to, subject, html }, callback) {
    return await this.transporter.sendMail(
      { from: process.env.EMAIL_USERNAME, to, subject, html },
      callback
    )
  }
}

export default NodeMailer
