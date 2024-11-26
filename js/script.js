function initMap() {
  const mapOptions = {
    center: { lat: 52.40830771217771, lng: 16.910436539011553 }, // Центр карти
    zoom: 16, // Рівень масштабування
    mapTypeId: 'roadmap', // Тип карти для відображення назв вулиць
    tilt: 45, // Активуємо 3D-режим
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Додаємо маркер
  const marker = new google.maps.Marker({
    position: { lat: 52.40830771217771, lng: 16.910436539011553 },
    map: map,
    title: 'Poznań, Zwierzyniecka 10',
  });
}
