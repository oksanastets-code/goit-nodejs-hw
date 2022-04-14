const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
console.log(__dirname);
// const contactsPath = path.resolve("./db/contacts.json");
// const contactsPath = path.join("./db/contacts.json");
// const invokeAction = async ({ action }) => { 
//     switch (action) { 
//         case "getAll":
//             const contacts = await contactsPath.getAll();
//             console.log(contacts);
//             break;
//     }
// }
const getAll = async () => { 
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    console.log(contacts[0]);
    return contacts;
}
getAll();
// invokeAction({action: "getAll"})