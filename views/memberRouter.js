const router = require('express').Router();

const membersController = require('../controllers/membersController');



router.get('/', membersController.getAllMembers);
router.post('/', membersController.createMember);
router.put('/', membersController.updateMember);
router.delete('/', membersController.deleteMember);


module.exports = router;