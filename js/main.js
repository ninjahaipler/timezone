
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
        console.log("click");
        MicroModal.show('modal-id'); // [1]
    });
    MicroModal.init({
        onShow: modal => console.info(`${modal.id} is shown`), // [1]
        onClose: modal => console.info(`${modal.id} is hidden`), // [2]
        openTrigger: 'data-custom-open', // [3]
        closeTrigger: 'data-custom-close', // [4]
        openClass: 'is-open', // [5]
        disableScroll: true, // [6]
        disableFocus: false, // [7]
        awaitOpenAnimation: false, // [8]
        awaitCloseAnimation: false, // [9]
        debugMode: true // [10]
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
