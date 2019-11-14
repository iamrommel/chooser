const Mailgun = require('mailgun-js')

const send = async ({ email, uri }) => {
    //Maybe some logic for required email

    return new Promise((resolve, reject) => {
        const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env
        console.log('Sending the email to', email)

        const mailgun = Mailgun({
            apiKey,
            domain
        })

        const mailData = {
            from: 'David Soul <david.soul@gmail.com >',
            to: email,
            subject: 'Thank you for your interest.',
            text: `Here is the link for what you choose: ${uri}`
        }

        mailgun.messages().send(mailData, err => {
            if (err) return reject(err)
            resolve()
        })
    })
}


exports.handler = async function (event, context, callback) {
    try {
        const data = JSON.parse(event.body)
        console.log(data)
        await send(data)

        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Done sending email',
                status: 'OK'
            })
        })

    } catch (e) {
        console.log(e.message, 'error')
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                message: e.message,
                status: 'NOT-OK'
            })
        })
    }

}