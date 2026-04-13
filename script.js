// 버튼을 클릭했을 때 실행될 함수입니다.
function checkJS() {
    // 문서에서 ID가 'message'인 요소를 찾아 텍스트를 바꿉니다.
    const messageElement = document.getElementById('message');
    messageElement.innerText = "🎉 자바스크립트 연결 성공! 축하합니다!";
    
    // 배경색도 살짝 바꿔볼까요?
    document.body.style.backgroundColor = "#f0f8ff";

    // 알림창도 띄워줍니다.
    alert("자바스크립트가 파일 형태로 아주 잘 작동하고 있어요!");
}