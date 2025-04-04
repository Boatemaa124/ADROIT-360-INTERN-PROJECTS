let time = 0;
        let score = 0;
        let selectedInsect = '';
        const timeEl = document.getElementById('time');
        const scoreEl = document.getElementById('score');
        const gameContainer = document.getElementById('game-container');
        const startScreen = document.getElementById('start-screen');
        const chooseScreen = document.getElementById('choose-insect-screen');
        const gameScreen = document.getElementById('game-screen');
        
        document.getElementById('start-btn').addEventListener('click', () => {
            startScreen.classList.remove('active');
            chooseScreen.classList.add('active');
        });
        
        document.querySelectorAll('.choose-insect-btn').forEach(button => {
            button.addEventListener('click', () => {
                selectedInsect = button.getAttribute('data-insect');
                chooseScreen.classList.remove('active');
                gameScreen.classList.add('active');
                startGame();
            });
        });
        
        function startGame() {
            setInterval(increaseTime, 1000);
            spawnInsect();
        }
        
        function increaseTime() {
            time++;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            timeEl.innerText = `Time: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
        
        function spawnInsect() {
            const insect = document.createElement('img');
            insect.src = `https://pngimg.com/uploads/${selectedInsect}/${selectedInsect}_PNG12.png`;
            insect.classList.add('insect');
            const { x, y } = getRandomLocation();
            insect.style.top = `${y}px`;
            insect.style.left = `${x}px`;
            insect.addEventListener('click', catchInsect);
            gameContainer.appendChild(insect);
        }
        
        function getRandomLocation() {
            const width = window.innerWidth - 100;
            const height = window.innerHeight - 100;
            return { x: Math.random() * width, y: Math.random() * height };
        }
        
        function catchInsect(event) {
            event.target.remove();
            score++;
            scoreEl.innerText = `Score: ${score}`;
            spawnInsect();
        }