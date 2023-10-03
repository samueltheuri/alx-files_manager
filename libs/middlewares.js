import express from 'express';

/**
 * Adds middlewares to the given express application.
 * @param {express.Express} api The exress application.
 */
const injectMiddlewares = (api) => {
	api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
