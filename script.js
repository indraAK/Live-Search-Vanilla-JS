const searchInput = document.getElementById('keyword');
const clearBtn = document.getElementById('clear');
const searchForm = document.getElementById('searchForm');

function filterUsers(keyword) {
   const rows = Array.from(document.querySelector('table').querySelectorAll('tbody tr'));

   if (keyword.length > 0) {
      clearBtn.classList.remove('hidden');
   } else {
      clearBtn.classList.add('hidden');
   }

   rows.forEach(row => {
      const tablesData = Array.from(row.children);
      const isFound = tablesData.some(td => td.textContent.toLowerCase().indexOf(keyword) > -1);

      if (isFound) {
         row.style.display = '';
      } else {
         row.style.display = 'none';
      }
   });
}

searchInput.addEventListener('input', function () {
   const keyword = this.value.trim().toLowerCase();
   filterUsers(keyword);
});

searchForm.addEventListener('submit', function (e) {
   e.preventDefault();
   const keyword = this['keyword'].value.trim().toLowerCase();
   filterUsers(keyword);
});

clearBtn.addEventListener('click', function () {
   const keyword = searchInput.value = '';
   filterUsers(keyword);
});



