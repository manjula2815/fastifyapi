const { v4: uuidv4 } = require('uuid')
let students = require('../Items')

const getStudents = (req, reply) => {
    reply.send(students)
}

const getStudent = (req, reply) => {
    const { id } = req.params

    const student = students.find((student) => student.id === id)

    reply.send(student)
}

const addStudent = (req, reply) => {
    const { name } = req.body
    const student = {
        id: uuidv4(),
        name,
    }


    students = [...students, student]

    reply.code(201).send("Created successfully")
}

const deleteStudent = (req, reply) => {
    const { id } = req.params

    students = students.filter((student) => student.id !== id)

    reply.send({ message: `student ${id} has been removed` })
}

const updateStudent = (req, reply) => {
    const { id } = req.params
    const { name } = req.body

    students = students.map((student) => (student.id === id ? { id, name } : student))

    student = students.find((student) => student.id === id)

    reply.send("Updated successfully")
}

module.exports = {
    getStudents,
    getStudent,
    addStudent,
    deleteStudent,
    updateStudent,
}
