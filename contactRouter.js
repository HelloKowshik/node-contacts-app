const router = require('express').Router();
const { getAllContacts, createContact, getSingleContact, updateContact, deleteContact } = require('./contactsController');

router.get('/', getAllContacts);
router.post('/', createContact);
router.get('/:id', getSingleContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;