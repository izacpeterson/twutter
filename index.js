import { db, app } from "./modules/setup.js";
import users from "./modules/users.js";
import posts from "./modules/posts.js";

app.use("/api/users", users);
app.use("/api/posts", posts);

app.listen(8080, () => {
  console.log("Server up");
});
