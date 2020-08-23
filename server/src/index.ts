import express from "express";
import path from "path";
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../client/build")));
  app.get("/*", (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
  });
}

app.listen(9000);
