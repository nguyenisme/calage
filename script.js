
function TinhTuoi() {
    const ageInput = document.getElementById('ageInput');
    const resultText = document.getElementById('resultText');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = '';
    
    if (ageInput.value.trim() === '') {
        //errorMessage.textContent = 'Tuổi bạn là CLGT?';
        resultText.textContent = 'Tuổi bạn là CLGT?';
        //resultText.textContent = '';
        return;
    }
    const tuoi = Number(ageInput.value);
    
    if (isNaN(tuoi)) {
        resultText.textContent = 'Tuổi bạn là CLGT?';
    } else if (tuoi < 0) {
        //errorMessage.textContent = 'Tuổi bạn là CLGT?';
        resultText.textContent = 'Tuổi bạn là CLGT?';
        //resultText.textContent = '';
    } else {
        resultText.textContent = `Tuổi của bạn là: ${tuoi}`;
    }
}
document.getElementById('ageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        TinhTuoi();
    }
});
