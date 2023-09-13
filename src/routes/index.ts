const express = require('express');
const router = express.Router();
const qrcode = require('qrcode');

const qrOptions = {
  errorCorrectionLevel: 'H',
  margin: 1,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
  width: 300,
};

const qr = await qrcode.toDataURL(
  'https://www.cooperelliottdev.com/',
  qrOptions
);

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bun Express EJS App', qrUrl: qr });
});

router.post('/', async function (req, res, next) {
  if (req.body.message == '' || req.body.message == null) {
    res.redirect('/');
  } else {
    const input = req.body.message;
    const newQr = await qrcode.toDataURL(input, qrOptions);
    res.render('index', { title: 'Bun Express EJS App', qrUrl: newQr });
  }
});

export { router };
