const dotenv = require('dotenv');
const fs = require('fs');
const dot = require('dot-object');

dotenv.config();

const config = {
  authorization: {
    cookie: String(fs.readFileSync('src/config/cookie.txt')),
  },

  travian: {
    server: process.env.TRAVIAN_SERVER,
  },

  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',

  coordinates: {
    minX: process.env.MIN_X,
    minY: process.env.MIN_Y,
    maxX: process.env.MAX_X,
    maxY: process.env.MAX_Y,
    startX: process.env.START_X,
    startY: process.env.START_Y,
  },

  delay: {
    min: process.env.DELAY_MIN && 1000,
    max: process.env.DELAY_MAX && 1500,
  },

  jsonFile: {
    oasis: 'data/oasis.json',
    oasisOccupied: 'data/oasis-occupied.json',
  },
};

config.getToken = function getToken() {
  return String(fs.readFileSync('src/config/token.txt'));
};

config.getBearerHeader = function getBearerHeader() {
  const token = this.getToken();
  return `Bearer ${token}`;
};

config.get = function get(option) {
  return dot.pick(option, this);
};

config.setToken = function setToken(token) {
  fs.writeFileSync('src/config/token.txt', token);
};

module.exports = config;
