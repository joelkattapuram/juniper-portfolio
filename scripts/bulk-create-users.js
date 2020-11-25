require("dotenv").config({ path: "../.env" });
const Juniper = require("..");
const config = require("../config");

const juniper = new Juniper(config);

const users = [
  {
    firstName: "Christina Rose",
    lastName: "Lomazzo",
    email: "clomazzo@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: true,
    active: true,
  },
  {
    firstName: "Mehran",
    lastName: "Hydary",
    email: "mhydary@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: true,
    active: true,
  },
  {
    firstName: "Alex",
    lastName: "Sherbuck",
    email: "asherbuck@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: true,
    active: true,
  },
  {
    firstName: "Tsitsi",
    lastName: "Soko",
    email: "tsoko@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: false,
    active: true,
  },
  {
    firstName: "Joanne",
    lastName: "Tsui",
    email: "jtsui@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: false,
    active: true,
  },
  {
    firstName: "Edson",
    lastName: "Mbewe",
    email: "embewe@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: false,
    active: true,
  },
  {
    firstName: "Rosario",
    lastName: "Buendia",
    email: "rbuendia@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: false,
    active: true,
  },
  {
    firstName: "Christopher",
    lastName: "Fabian",
    email: "cfabian@unicef.org",
    picture: "",
    title: "",
    department: "",
    password: "asdf1234",
    salt: "",
    notifications: false,
    userAdded: true,
    newTransaction: false,
    transactionTagged: false,
    isVerified: true,
    isAdmin: false,
    active: true,
  },
];

(async () => {
  for (let i = 0; i < users.length; i++) {
    await juniper.createUser(users[i]);
  }

  juniper.exit();
})();