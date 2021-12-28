const axios = require("axios");
const {
  Product,
  Category,
  Supplier,
  Specifict_Accesories,
} = require("../db/db");
const dataProducts = require("../productsDB/Products.json");
const categories = require("../productsDB/Categories.json");
const dataSuppliers = require("../productsDB/Suppliers.json");
const userTypes = require("../productsDB/UserTypes.json");
const users = require("../productsDB/Users.json");
const comments = require("../productsDB/Comments.json");
const { URL_BASE } = require("../Constants");
//funcion para hacer un get y traerse todos los productos
const incomeProductDB = async () => {
  dataProducts.forEach(async (elementProduct) => {
    const product = await Product.create({
      name: elementProduct.name,
      description: elementProduct.description,
      salePrice: elementProduct.salePrice,
      img: elementProduct.img,
      purchasePrice: elementProduct.purchasePrice,
      rating: elementProduct.rating,
      stock: elementProduct.stock,
      discount: elementProduct.discount,
      id_Supplier: elementProduct.supplier,
    });
    elementProduct.Categories.map((el) => {
      product.addCategory(el);
    });
  });
};

const incomeCategory = async () => {
  categories.forEach(async (category) => {
    await Category.create({
      name: category.name,
    });
  });
};

const incomeSuppliers = async () => {
  dataSuppliers.forEach(async (supp) => {
    await Supplier.create({
      name: supp.name,
      phone: supp.phone,
      email: supp.email,
    });
  });
};

const incomeUserTypes = async () => {
  for (let i = 0; i < userTypes.length; i++) {
    const element = userTypes[i];
    try {
      await axios.post(URL_BASE + "/typeuser?name=" + element.name);
    } catch (e) {
      console.log(e);
    }
  }
};

const incomeUsers = async () => {
  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    try {
      await axios.post(URL_BASE + "/users", element);
    } catch (e) {
      console.log(e);
    }
  }
};

const incomeComments = async () => {
  for (let i = 0; i < comments.length; i++) {
    const element = comments[i];
    try {
      await axios.post(URL_BASE + "/comments", element);
    } catch (e) {
      console.log(e);
    }
  }
};

const addSpecifictAccesories = async () => {
  const speAccesories = [
    "HEADPHONE STAND",
    "MOUSEPADS",
    "LOADERS",
    "SPEAKERS",
    "MOUSE",
    "PACKS",
    "MICROPHONES",
    "KEYBOARDS",
    "BEDS",
    " HEADPHONES",
    "OTHERS",
  ];

  await speAccesories.map((element) => {
    Specifict_Accesories.create({ name: element });
  });
};

module.exports = {
  incomeCategory,
  incomeProductDB,
  incomeSuppliers,
  incomeUserTypes,
  incomeUsers,
  incomeComments,
  addSpecifictAccesories,
};
