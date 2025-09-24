// انتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {

    // الحصول على العناصر من الصفحة
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebarClose = document.querySelector('.sidebar-close');

    // دالة لفتح وإغلاق القائمة
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
    }

    // إضافة حدث النقر على أيقونة القائمة
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }

    // إضافة حدث النقر على زر الإغلاق داخل القائمة
    if (sidebarClose) {
        sidebarClose.addEventListener('click', toggleSidebar);
    }
    
    // إغلاق القائمة عند الضغط على مفتاح الهروب (Escape)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
});