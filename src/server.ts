import "dotenv/config";
import { app } from "app";
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  return console.log(`Server is running on port: ${PORT}`);
});
