const contacts = require('./Contacts');

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts());
}

exports.createContact = (req, res) => {
    const { name, phone, email } = req.body;
    const contact = contacts.createContact({
        name, phone, email
    });
    res.json(contact);
}

exports.getSingleContact = (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    let contact = contacts.getSingleContact(id);
    res.json(contact);
}

exports.updateContact = (req, res) => {
    let id = parseInt(req.params.id);
    let { name, phone, email } = req.body;
    let contact = contacts.updateContact(id, { name, email, phone });
    res.json(contact);
}

exports.deleteContact = (req, res) => {
    let id = parseInt(req.params.id);
    let contact = contacts.deleteContact(id);
    res.json(contact);
}