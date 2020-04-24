"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloworld(request, response) {
    var user = CreateUser_1.default({
        email: 'kaiofhs@homtail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            { title: 'Javascript', experience: 100 },
        ],
    });
    return response.json(user);
}
exports.helloworld = helloworld;
