const bodyParser = require("body-parser");
const jsonserver = require("json-server");
const jwt = require("jsonwebtoken");
const path = require("path");

const PORT = process.env.PORT ?? 3002;
const DATA_PATH =
  process.env.DATA_PATH ?? __dirname.slice(process.cwd().length + 1);
const DATA_NAME = process.env.DATA_NAME ?? "api.db.json";
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY ?? "MySecretKey";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? "1h";

const server = jsonserver.create();

const router = jsonserver.router(path.join(DATA_PATH, "db.json"));

const middlewares = jsonserver.defaults();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(middlewares);

server.post("/auth/login", (req, res) => {
  const payload = { email: req.body.email, password: req.body.password };
  const user =
    router.db
      .get("users")
      .find({ email: payload.email, password: payload.password })
      .value() ?? null;

  if (user) {
    const accessToken = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: JWT_EXPIRES_IN,
    });
    res.status(200).json({ accessToken, id: user.id });
  } else {
    const status = 401;
    const message = "Incorrect username or password";
    res.status(status).json({ status, message });
  }
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Error in authorization format";
    res.status(status).json({ status, message });
    return;
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyTokenResult = jwt.verify(token, JWT_SECRET_KEY, (err, decode) =>
      decode !== undefined ? decode : err
    );

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Access token not provided";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Error access_token is revoked";
    res.status(status).json({ status, message });
  }
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port: ${PORT}`);
});
