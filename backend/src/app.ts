import express from 'express';
import helmet from 'helmet';
import products from './products/products.routes';
import auth from './auth/auth.routes';

const app = express();
app.use(express.json());
app.use(helmet());

app.use('/api/v1', products);
app.use('/api/v1', auth);

app.listen(4000, () => {
	console.log('Application listening at port 4000');
});
