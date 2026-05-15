import express from 'express';
import router from './routes/index';

const app = express();

// on branche toutes les routes
app.use('/', router);

app.listen(1245);

export default app;
