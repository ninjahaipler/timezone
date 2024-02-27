document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.querySelector('.custom-select');
    const selectHeader = customSelect.querySelector('.select-header');
    const optionsContainer = customSelect.querySelector('.options');
    const selectedOption = customSelect.querySelector('.selected-option');

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
});
function toggleForm() {
    console.log("button click");
    var contentWrap = document.getElementById('contentWrap');
    var timezoneForm = document.getElementById('timezoneForm');
    let container = document.getElementById('containerColor');
    // Toggle kelas 'visible' pada elemen contentWrap
    contentWrap.classList.toggle('visible');

    if (contentWrap.classList.contains('visible')) {
        console.log("if");
        timezoneForm.style.display = 'block';
        container.style.backgroundColor = 'darkGray';
        container.style.backdropFilter = 'blur(100%)';
    } else {
        console.log("else");
        timezoneForm.style.display = 'none';
    }
}
const dayjs = require('dayjs')

function updateCurrentTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const currentTime = dayjs().format('HH:mm:ss'); // Format waktu sesuai kebutuhan
    console.log("waktu")
    currentTimeElement.innerHTML = `<p>${currentTime}</p>`;
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Update waktu setiap detik
    setInterval(updateCurrentTime, 1000);
});

