document.addEventListener('DOMContentLoaded', function () {
    MicroModal.init();
    document.querySelector('.change').addEventListener('click', function() {
        // Panggil fungsi untuk menampilkan modal
        MicroModal.show('modal-1');
      });
});

import dayjs from 'dayjs';
import 'dayjs/plugin/timezone'; // Import plugin timezone
import MicroModal from 'micromodal';

function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = dayjs().format('HH:mm:ss'); // Format waktu sesuai kebutuhan
    currentTimeElement.innerHTML = `<p>${currentTime}</p>`;
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Update waktu setiap detik
    setInterval(updateCurrentTime, 1000);
});
