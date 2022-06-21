import app from "./app";

const port = process.env.PORT || "2999";

app.listen(port, () => {
  console.log(`Server listening to port '${port}'`);
});
