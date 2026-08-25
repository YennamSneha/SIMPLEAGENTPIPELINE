// INTENTIONALLY BAD TEST CODE — DO NOT MERGE

const fs = require("fs");
const { exec } = require("child_process");

// Security
const API_KEY = "hardcoded-secret-123";
const password = "admin123";

function runCommand(input) {
  exec("echo " + input);
}

// Code duplication
function calculateTotal1(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

function calculateTotal2(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}

// Inefficient code
function findUser(users, id) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (users[i].id === id && users[j].id === id) {
        return users[i];
      }
    }
  }
}

// Poor error handling
async function getData() {
  try {
    const data = await fs.promises.readFile("data.json");
    return JSON.parse(data);
  } catch (e) {
    console.log(e);
  }
}

// Unused variable
function processData(data) {
  const unusedValue = 100;
  return data;
}

// Weak validation
function createUser(user) {
  return {
    name: user.name,
    email: user.email,
    role: user.role
  };
}

// Magic numbers
function calculatePrice(price) {
  return price * 1.18 + 100;
}

// Very long function / maintainability issue
function processOrder(order) {
  console.log(order);
  console.log(order.items);
  console.log(order.customer);
  console.log(order.address);
  console.log(order.payment);
  console.log(order.status);
  console.log(order.total);
  console.log(order.discount);
  console.log(order.shipping);
  console.log(order.tax);
  console.log(order.currency);
  console.log(order.createdAt);
  console.log(order.updatedAt);
  console.log(order.metadata);
  return order;
}

module.exports = {
  runCommand,
  calculateTotal1,
  calculateTotal2,
  findUser,
  getData,
  processData,
  createUser,
  calculatePrice,
  processOrder
};
