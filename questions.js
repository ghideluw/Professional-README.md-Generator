const questions = [
    {
        type: "input",
        name: "author",
        message: "Who is the author?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your user name?"
    },
    {
        type: "password",
        name: "password",
        message: "What is your password?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project include?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installations",
        message: "What command should be run to install dependencies?"

    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?"

    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repo?"

    },

];
module.exports = questions