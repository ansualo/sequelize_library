const { Member } = require('../models');

const membersController = {};

membersController.getAllMembers = async (req, res) => {

    try{
        const results = await Member.findAll();
        return res.json(results);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}

membersController.createMember = async (req, res) => {

    try {
        let body = req.body;

        const results = await Member.create(
            {
                name: body.name,
                surname: body.surname,
                phone: body.phone,
                email: body.email
            }
        );

        return res.json(results);
    }
    catch {
        return res.status(500).send(error.message);
    }
}

membersController.updateMember = async (req, res) => {

    try{

        const results = await Member.update(
            {
                name: body.name,
                surname: body.surname,
                phone: body.phone,
                email: body.email
            },
            {
                where: {
                    id: body.id
                }
            }
        );

        return res.json(results);
    }
    catch {
        return res.status(500).send(error.message);
    }
}

membersController.deleteMember = async (req, res) => {

    try {

        const results = await Member.delete(
            {
                where: {
                    id: body.id
                }
            }
        );
        return res.json(results);
    }
    catch {
        return res.status(500).send(error.message);
    }
}

module.exports = membersController;