import express from 'express';
const router = express.Router();
import QRCode, { QRCodeToDataURLOptions } from 'qrcode';

const qrOptions: QRCodeToDataURLOptions = {
  errorCorrectionLevel: 'H',
  margin: 1,
  color: {
    dark: '#000000',
    light: '#ffffff',
  },
  width: 300,
};

const qr = await QRCode.toDataURL(
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
    const newQr = await QRCode.toDataURL(input, qrOptions);
    res.render('index', { title: 'Bun Express EJS App', qrUrl: newQr });
  }
});

export { router };
