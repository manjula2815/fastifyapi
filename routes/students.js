const { getStudents, getStudent, addStudent, deleteStudent, updateStudent } = require('../controller/studentController')

//student schema

const Student = {
    type: 'object',
    properties: {
        sid: { type: 'string' },
        sname: { type: 'string' },
        sub1: { type: 'string' },
        sub2: { type: 'string' },
        sub3: { type: 'string' },
        sub4: { type: 'string' },
        sub5: { type: 'string' },
    }

}


//options for getting all the students
//we can set option what is to be responded from each route i.e., only the name 

const getStudOpts = {

    schema: {
        response: {
            200: {
                type: 'array',
                students: Student,
            },
        },
    },
    handler: getStudents,
}
const getOneStud = {

    schema: {
        response: {
            200: Student,
        },
    },
    handler: getStudent,
}
const postStudOpts = {

    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                sname: { type: 'string' },
            }


        },
        response: {
            201: Student,
        },
    },
    handler: addStudent,
}
const deleteStudOpts = {

    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            },
        },
    },
    handler: deleteStudent,
}

const updateStudOpts = {

    schema: {
        response: {
            200: Student,
        },
    },
    handler: updateStudent,
}


function studentRoutes(fastify, options, done) {



    //returning all students  
    fastify.get('/students', getStudOpts)

    //returning single student with id
    fastify.get('/students/:id', getOneStud)

    //add student 
    fastify.post('/students', postStudOpts)

    //delete student 
    fastify.delete('/students/:id', deleteStudOpts)

    //update student 
    fastify.put('/students/:id', updateStudOpts)



    done()
}
module.exports = studentRoutes