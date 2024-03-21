document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvpForm');

    rsvpForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const attendanceSelect = document.getElementById('attendance');
        const selectedOption = attendanceSelect.value;

        const confirmationMessage = document.getElementById('confirmationMessage');

        if (selectedOption === 'yes') {
            confirmationMessage.innerHTML = '&#x1F973; Yay! Looking forward to seeing you at the Gif Gala!';
            document.body.style.backgroundImage = 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTVuaDdoeTR5cDBkMW94OThjaDgzMmcwZnVzbWx4endyaHAzem40cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UDUjlUnZyzVAY/giphy.gif")';
        } else if (selectedOption === 'no') {
            confirmationMessage.innerHTML = '&#x1F60A; Hope to catch you at the next event!';
            document.body.style.backgroundImage = 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG4yZDBzNTZvbmU5MDEyaGJlNzF0MjFsOHJ4MHRmeWN5emplNHprYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Txh1UzI7d0aqs/giphy.gif")';
        } else {
            confirmationMessage.innerHTML = 'Please select your attendance!';
        }
        
        confirmationMessage.style.display = 'block';
    });
});
