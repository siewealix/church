import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TFMI API',
      version: '1.0.0',
      description: 'API documentation for Triumphant Faith Ministries'
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server'
      }
    ]
  },
  apis: ['./src/routes/*.js']
});
