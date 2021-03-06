import express, {json} from "express";
import todos from "./todos";

const app = express();
app.use(json());
app.use('/todos', todos);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(500).json({message: err.message});
});

app.listen(3000);