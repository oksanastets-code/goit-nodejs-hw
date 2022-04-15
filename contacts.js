const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, "./db/contacts.json");
// console.log(__dirname);
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

const listContacts = async () => { 
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    // console.log(contacts);
    return contacts;
}
// listContacts();

const  getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    if (!result) { 
        return null;
    }
    console.log(result);
    return result;
}
// const id = "2";
const id = 'crVOTliSseUIaxPw-XLuS';
// getContactById(id);

const  addContact = async (data) => {
    const contacts = await listContacts();
    const newContact = { id: nanoid(), ...data };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log(contacts);
    return newContact;
}
const newData = {
    name: 'Monica Belucci',
    email: 'monica@mail.com',
    phone: '(456) 900=0099'
}
// addContact(newData);

const  removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) { 
        return null;
    }
    const [removedContact] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log(removedContact);
    console.log(contacts);
    return removedContact;
    
}
removeContact(id);
// invokeAction({action: "getAll"})
module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}