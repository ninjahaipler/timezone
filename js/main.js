
document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.querySelector('.custom-select');
    const selectHeader = customSelect.querySelector('.select-header');
    const optionsContainer = customSelect.querySelector('.options');
    const selectedOption = customSelect.querySelector('.selected-option');
    const change = document.querySelector('.change');

    selectHeader.addEventListener('click', function () {
        customSelect.classList.toggle('open');
    });

    optionsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('option')) {
            const value = e.target.dataset.value;
            selectedOption.textContent = e.target.textContent;
            customSelect.classList.remove('open');
        }
    });

    document.addEventListener('click', function (e) {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });
    change.addEventListener('click', function () {
        MicroModal.init();
    });
});

import dayjs from 'dayjs';
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
