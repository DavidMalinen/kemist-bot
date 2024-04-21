import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from './swagger-spec';

const APIS_PATH_LOCAL = ['src/interfaces/**/*-router.ts', 'src/swagger/**/*.yaml'];
const APIS_PATH = ['built/src/interfaces/**/*-router.js', 'built/src/swagger/**/*.yaml'];

export const defineRoutes = (app) => {

    const options = {
        swaggerDefinition,
        apis: process.env.NODE_ENV === 'development' ? APIS_PATH_LOCAL : APIS_PATH,
    };
    const swaggerSpec = swaggerJsDoc(options);

    app.get('/api-docs.json', (_, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
