document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // منع الفورم من إعادة تحميل الصفحة

    // الحصول على المدخلات
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // الحصول على عنصر رسالة الخطأ
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';  // إخفاء رسالة الخطأ في البداية

    // التحقق من صحة البيانات (مثال بسيط)
    if (username === "menna@gmail.com" && password === "12345") {
      // توجيه المستخدم إلى الصفحة الرئيسية إذا كانت البيانات صحيحة
      window.location.href = "home.html";  // هنا حط رابط الصفحة الرئيسية بتاعتك
    } else {
      // عرض رسالة خطأ إذا كانت البيانات غير صحيحة
      errorMessage.style.display = 'block'; // عرض رسالة الخطأ
    }
});
