const btnJS = document.querySelector('.btn-start');
btnJS.addEventListener('click', () => {
  const n = 6;
  const a = [['Богдан', 'Винничук', 2008, 'Математика'],
  ['Юра', 'Гарю', 2007, 'Фізкультура'],
  ['Саша', 'Гашас', 2006, 'Природа'],
  ['Данило', 'Голинад', 2003, 'Хімія'],
  ['Ілля', 'Гяллі', 2004, 'Алгебра'],
  ['Назар', 'Гразан', 2005, 'Фізика']
  ];

  function oldName(array, old) {
    const names = [];
    for (let i = 0; i < n; i++) {
      if (2020 - old > array[i][2]) {
        names.push(`\n${array[i][0]}`);
      }
    }
    alert(`Учні старші ${old} років: ${names}`);
  }

  const old = prompt('Введіть від якого віку Ви шукаєте учнів', 14)
  oldName(a, old);
});