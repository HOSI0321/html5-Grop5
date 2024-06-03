function clearDefaultValue(input) {
    if (input.value === input.defaultValue) {
        input.value = '';
    }
}


let currentStep = 1;

function nextStep() {
    document.getElementById('step' + currentStep).classList.add('hidden');
    currentStep++;
    document.getElementById('step' + currentStep).classList.remove('hidden');
    if (currentStep === 3) { // 마지막 단계에서 버튼 텍스트 변경
        document.querySelector('#stepFinal button[type="submit"]').innerText = "제출";
    }
}

function previousStep() {
    document.getElementById('step' + currentStep).classList.add('hidden');
    currentStep--;
    document.getElementById('step' + currentStep).classList.remove('hidden');
    if (currentStep === 2) { // 마지막 단계에서 버튼 텍스트 변경
        document.querySelector('#stepFinal button[type="submit"]').innerText = "다음";
    }
}

// 마지막 폼 제출 처리
document.getElementById('finalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 막기
    // 여기에 폼 데이터를 처리하는 코드 추가
    alert('폼이 성공적으로 제출되었습니다!');
});