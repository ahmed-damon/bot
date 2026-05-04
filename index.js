const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// تشغيل الملفات الثابتة (الصور والصفحات)
app.use(express.static(path.join(__index, '/')));

// الصفحة الرئيسية (الواجهة)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// صفحة البوربوينت (الأمير الصغير)
app.get('/slides', (req, res) => {
  res.sendFile(path.join(__dirname, 'slides.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
