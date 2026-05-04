const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// تشغيل الملفات الثابتة من المجلد الرئيسي
app.use(express.static(path.join(__dirname, '/')));

// الصفحة الرئيسية (الواجهة التي تحتوي على صورتك وزر المطور)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// صفحة عرض الأمير الصغير والأسئلة
app.get('/slides', (req, res) => {
  res.sendFile(path.join(__dirname, 'slides.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
