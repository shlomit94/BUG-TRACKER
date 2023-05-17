const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        teamMembers: [{ type: String, required: true }],
        // ticketsID: [{ type: String, required: true }],
        // authorID: { type: String, required: true }
    }
);

const projectModel = mongoose.model('Project', ProjectSchema);

module.exports = projectModel;