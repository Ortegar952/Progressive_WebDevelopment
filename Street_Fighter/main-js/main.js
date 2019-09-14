window.addEventListener('load',()=>{
    console.log('All assets are loaded')
    let stage = document.querySelector('.stage');
    let startBtn = document.querySelector('.start-button');

    let player1 = document.querySelector('#player1');
    let player1Container = document.querySelector('.player1Cont');

    let themeSong = document.querySelector('#themeSong');

    let player2 = document.querySelector('#player2');
    let player2Container = document.querySelector('.player2Cont');

        // SOUND EFFECTS
    let ko = document.getElementById('KO');
    let powerUp = document.getElementById('powerUp');
    let win = document.getElementById('win');
    let attack = document.getElementById('attack');
    let akumaVoice = document.getElementById('akuma');
    let jumpSound = document.getElementById('JumpSound');
    let RyuSound = document.getElementById('RyuJump');
    let RyuVictory = document.getElementById('ryuVic');
    let ryuAttack = document.getElementById('ryuAttack');
    let ryuPunch = document.getElementById('ryuPunch');
    let punchCombo = document.getElementById('punchCombo');

        // HEATLH BARS FOR PLAYERS
    let RyuH = document.querySelector('#RyuH');
    let AkumaH = document.querySelector('#AkumaH');
    let healthBars = document.getElementsByClassName('health-bar');
    let vsLogo = document.querySelector('#vs-logo');


    //Initial Health For Players
    let ryuHeal = 100;
    let akumaHeal = 100;

    // CONTROLING THE START BUTTON FUNCTION
    startBtn.addEventListener('click',()=>{
        startBtn.remove();
        player1.style.opacity = '1';
        player2Container.style.opacity = '1';
        vsLogo.style.opacity = '1';
        Array.from(healthBars).forEach(health=>{
            health.style.opacity = '1';
        });
        player1.style.marginTop = '22%'
        player2Container.style.marginTop = '22%';
    })
    let RyuR = 70;
    let RyuL = 0;
    // MOVING RYU LEFT AND RIGHT AND OTHER ACTIONS
    let screenSize = (window.innerWidth) - 300;
    
    document.addEventListener('keydown',function(event){
        if(event.code === 'ArrowRight'){
          if(RyuL <= screenSize){
                RyuR += 80;
            }
            player1.style.marginLeft = RyuR + 'px';
            RyuL = RyuR;
        }
        if(event.code === 'ArrowLeft'){
            if(RyuR > 0){
                RyuR -= 80;
            }
            player1.style.marginLeft = RyuR + 'px';
                RyuL = RyuR;
        }
        if(event.code === 'Space'){
            console.log('space')
            player1.src = "images/Hadouken2.gif";
            player1.style.height = '';
            player1.style.marginTop = '22%';
            playAudio(powerUp);
            function fighter() {
                setTimeout(function(){
                    player1.src = "images/fighter.gif";
                    player2.src = "images/Oponent.gif";
                    player2.style.height = '280px';
                },1900);
            }
            fighter(); 
        }
        if(event.code === 'ArrowUp'){
            console.log('space')
            player1.src = "images/Jump.gif";
            player1.style.height = '400px';
            player1.style.marginTop = '10%';
            playAudio(RyuSound)
            function fighter() {
                setTimeout(function(){
                    player1.src = "images/fighter.gif";
                    player1.style.height = '280px';
                    player1.style.marginTop = '22%';
                },800);
            }
            fighter(); 
        }
        if(event.code === 'ArrowDown'){
            player1.src = "images/Ryu-Attack.gif";
            player1.style.height = '500px';
            player1.style.marginTop = '5%';
            playAudio(RyuVictory)
            // setTimeout(()=>{
            //     player2.style.height = '480px';
            //     player2.src = 'images/Akuma-Lost.gif'
            // },500)
            setTimeout(()=>{
                playAudio(punchCombo)
                playAudio(ryuAttack)
                setTimeout(()=>{
                    playAudio(win)
                },3000)
                playAudio(ryuPunch)
            },2500)
            function fighter() {
                setTimeout(function(){
                    player1.src = "images/fighter.gif";
                    player1.style.height = '280px';
                    player1.style.marginTop = '22%';
                },6000);
            }
            fighter(); 
        }
    })

    // MOVING Akuma LEFT AND RIGHT AND OTHER ACTIONS
    let AkumaR = 0;
    let AkumaL = 0;
    document.addEventListener('keydown',function(event){
        if(event.code === 'KeyA'){
            if(AkumaR >= -screenSize){
                AkumaR -= 50;
            }
            player2.style.marginRight = AkumaR + 'px';
            AkumaL = AkumaR;
        }
        if(event.code === 'KeyD'){
            if(AkumaR <= 0){
                AkumaR += 50;
            }
            player2.style.marginRight = AkumaR + 'px';
        }
        if(event.code === 'KeyS'){
            player2.src = "images/akuma-special.gif";
            player2.style.height = '750px';
            player2Container.style.marginTop = '-18%';
            player1.src = "images/Ryu-Dead.gif";
            playAudio(akumaVoice);
            playAudio(attack);
            playAudio(ko);
            function fighter() {
                setTimeout(function(){
                    player2.style.height = '280px';
                    player2Container.style.marginTop = '22%';
                    player2.src = "images/Oponent.gif";
                    player1.src = "images/fighter.gif";
                    },5000);
                }
                fighter(); 
            }
            if(event.code === 'KeyW'){
                player2.src = "images/AkumaJump.gif";
                player2.style.height = '450px';
                player2Container.style.marginTop = '-5%';
                playAudio(jumpSound);
                function fighter() {
                    setTimeout(function(){
                        player2.src = "images/Oponent.gif";
                        player2.style.height = '280px';
                        player2Container.style.marginTop = '22%';
                    },500);
                }
                fighter(); 
            }
    })
    // FUNCTION TO PLAY THE THEMES AND SOUND EFFECTS
    function playAudio(song) { 
        song.play(); 
    } 

    //FUNCTION FOR TOGGLING THE MODAL BOX FOR THE PLAYER'S CONTROLLERS
    let modal = document.querySelector(".modal");
    let closeButton = document.querySelector(".close-button");
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    setTimeout(()=>{
        toggleModal();
    },4000);
    document.addEventListener('keydown',(event)=>{
        if(event.code === 'KeyQ'){
            toggleModal();
        }
    })

    closeButton.addEventListener("click", toggleModal);
})

