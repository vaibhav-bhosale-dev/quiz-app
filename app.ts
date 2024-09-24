import express from 'express';
import bodyParser from 'body-parser';
import quizRoutes from './routes/quizRoutes';

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/api/quiz', quizRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
