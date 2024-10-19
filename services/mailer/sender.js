import sendMail from './mail_functions.js';

const options = {
    host: 'localhost',
    port: '25',
    domain: 'localhost',
    to: 'marak.squires@gmail.com',
    from: 'obama@whitehouse.gov',
    subject: 'node_mailer test email',
    template: '../templates/sample.txt',
    data: {
        username: 'Billy Bob',
        color: function() {
            const arr = ['purple', 'red', 'green', 'yellow'];
            return arr[Math.floor(Math.random() * 4)];
        },
        animal: 'monkey',
        adverb: 'quickly',
        noun: 'hot lava'
    },
    authentication: 'login',
    username: 'my_username',
    password: 'my_password'
};

sendMail(options, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent:', result);
    }
});