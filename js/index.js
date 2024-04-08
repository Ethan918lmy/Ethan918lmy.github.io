
    document.addEventListener('DOMContentLoaded', function() {
        const dropdowns = document.querySelectorAll('.box1-top-header-app');
    
        dropdowns.forEach(dropdown => {
          dropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // 阻止事件冒泡，防止点击下拉内容时关闭菜单
            this.classList.toggle('active');
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent.style.display === 'block') {
              dropdownContent.style.display = 'none';
            } else {
              dropdownContent.style.display = 'block';
            }
          });
    
          // Close dropdown when clicking outside
          document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
              dropdown.classList.remove('active');
              const dropdownContent = dropdown.querySelector('.dropdown-content');
              dropdownContent.style.display = 'none';
            }
          });
        });
      });