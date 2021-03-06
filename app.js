const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Routes
const userRoutes = require("./routes/user");
const roleRoutes = require("./routes/role");
const categorieRoutes = require("./routes/categorie");
const countrieRoutes = require("./routes/countrie");
const clientRoutes = require("./routes/client");
const deviseRoutes = require("./routes/devise");
const etatconteneurRoutes = require("./routes/etat_conteneur");
const materielRoutes = require("./routes/materiel");
const navireRoutes = require("./routes/navire");
const ownerRoutes = require("./routes/owner");
const portRoutes = require("./routes/port");
const rateRoutes = require("./routes/rate");
const siteRoutes = require("./routes/site");
const sizeRoutes = require("./routes/size");
const soussiteRoutes = require("./routes/soussite");
const typeRoutes = require("./routes/type");
const masterfileRoutes = require("./routes/masterfile");
const statRoutes = require("./routes/stats");
const mouvementRoutes = require("./routes/mouvement");
const reparationRoutes = require('./routes/reparation');
const surestarieRoutes = require('./routes/surestarie');
const choixRoutes = require('./routes/choix');

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
});

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // This will help in encoding
app.use(bodyParser.json());

app.use("/api/user", userRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/categorie", categorieRoutes);
app.use("/api/client", clientRoutes);
app.use("/api/countrie", countrieRoutes);
app.use("/api/devise", deviseRoutes);
app.use("/api/etat_conteneur", etatconteneurRoutes);
app.use("/api/materiel", materielRoutes);
app.use("/api/navire", navireRoutes);
app.use("/api/owner", ownerRoutes);
app.use("/api/port", portRoutes);
app.use("/api/rate", rateRoutes);
app.use("/api/site", siteRoutes);
app.use("/api/size", sizeRoutes);
app.use("/api/soussite", soussiteRoutes);
app.use("/api/type", typeRoutes);
app.use("/api/masterfile", masterfileRoutes);
app.use("/api/stat", statRoutes);
app.use("/api/mouvement", mouvementRoutes);
app.use("/api/reparation", reparationRoutes);
app.use("/api/surestarie", surestarieRoutes);
app.use("/api/choix", choixRoutes);

module.exports = app;
