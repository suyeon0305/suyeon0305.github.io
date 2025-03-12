// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
    console.error('WebGL 2 is not supported by your browser.');
}

// 화면을 4개 영역으로 나누는 함수
function drawQuadrants() {
    // 초기 화면 지우기
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    const width = canvas.width;
    const height = canvas.height;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    
    // 첫 번째 사분면 (좌상단) - 빨간색
    gl.viewport(0, halfHeight, halfWidth, halfHeight);
    gl.scissor(0, halfHeight, halfWidth, halfHeight);
    gl.clearColor(1.0, 0.0, 0.0, 1.0); // 빨간색 (Red)
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // 두 번째 사분면 (우상단) - 초록색
    gl.viewport(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.scissor(halfWidth, halfHeight, halfWidth, halfHeight);
    gl.clearColor(0.0, 0.8, 0.0, 1.0); // 초록색 (Green)
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // 세 번째 사분면 (좌하단) - 파란색
    gl.viewport(0, 0, halfWidth, halfHeight);
    gl.scissor(0, 0, halfWidth, halfHeight);
    gl.clearColor(0.0, 0.0, 1.0, 1.0); // 파란색 (Blue)
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // 네 번째 사분면 (우하단) - 노란색
    gl.viewport(halfWidth, 0, halfWidth, halfHeight);
    gl.scissor(halfWidth, 0, halfWidth, halfHeight);
    gl.clearColor(1.0, 1.0, 0.0, 1.0); // 노란색 (Yellow)
    gl.clear(gl.COLOR_BUFFER_BIT);
}

// 캔버스 크기 설정 함수
function resizeCanvas() {
    // 캔버스 크기를 500 x 500 이상으로 유지
    let targetWidth = Math.max(500, window.innerWidth);
    let targetHeight = Math.max(500, window.innerHeight);
    
    // 1:1 비율 유지
    const size = Math.min(targetWidth, targetHeight);
    canvas.width = size;
    canvas.height = size;
    
    // 캔버스를 화면 중앙에 배치 (선택적)
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    
    // 창 크기에 맞게 렌더링
    render();
}

// 초기 설정
function init() {
    // WebGL 설정
    gl.enable(gl.SCISSOR_TEST); // 가위 테스트 활성화
    
    // 초기 캔버스 크기 설정
    resizeCanvas();
}

// 렌더링 함수
function render() {
    drawQuadrants();
}

// 창 크기가 변경될 때 캔버스 크기 조정
window.addEventListener('resize', resizeCanvas);

// 초기화 및 실행
init();