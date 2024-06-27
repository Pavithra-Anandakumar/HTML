document.addEventListener('DOMContentLoaded', () => {
    const seatsContainer = document.getElementById('seatsContainer');
    const selectedSeatsElement = document.getElementById('selectedSeats');
    const totalPriceElement = document.getElementById('totalPrice');
    const seatPrice = 100;

    const rows = 7;
    const cols = 7;
    const occupiedRow = 3;

    // Generate seats
    for (let row = 1; row <= rows; row++) {
        for (let col = 1; col <= cols; col++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            if (row === occupiedRow) {
                seat.classList.add('occupied');
            }
            seat.dataset.row = row;
            seat.dataset.col = col;
            seat.addEventListener('click', () => {
                if (!seat.classList.contains('occupied')) {
                    seat.classList.toggle('selected');
                    updateSummary();
                }
            });
            seatsContainer.appendChild(seat);
        }
    }

    // Function to update summary
    function updateSummary() {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        const selectedSeatsCount = selectedSeats.length;
        selectedSeatsElement.textContent = selectedSeatsCount;
        totalPriceElement.textContent = selectedSeatsCount * seatPrice;
    }
});
