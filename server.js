const fastify = require('fastify')({ logger: true })
const PORT = 5000
// fastify.register(require('./table/index'))
fastify.register(require("fastify-cors"), {
    origin: true
});

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    },
})

fastify.register(require('./routes/students'))

const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()