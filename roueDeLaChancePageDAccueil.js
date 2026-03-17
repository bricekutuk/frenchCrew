const canvas = document.getElementById('roue');
const ctx = canvas.getContext('2d');
const boutonTourner = document.getElementById('tourner');

const options = ['Strasbourg', 'Toulouse', 'Marseille', 'La rochelle', 'Lille', 'Paris'];
const couleurs = ['#1e6ab3', '#062343', '#1e6ab3', '#062343', '#1e6ab3', '#062343'];

let angleActuel = 0;
let vitesseRotation = 0;
let enRotation = false;


function dessinerIndicateur() {
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 20);
    ctx.lineTo(canvas.width / 2 - 10, 0);
    ctx.lineTo(canvas.width / 2 + 10, 0);
    ctx.fillStyle = '#000';
    ctx.fill();
}

// 🎡 ROUE 
function dessinerRoue() {
    const angleParOption = (Math.PI * 2) / options.length;

    for (let i = 0; i < options.length; i++) {
        const angle = i * angleParOption;

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, 200, angle, angle + angleParOption);
        ctx.fillStyle = couleurs[i];
        ctx.fill();

        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle + angleParOption / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px Roboto';
        ctx.fillText(options[i], 140, 10);
        ctx.restore();
    }
}

// 🎨 SCÈNE COMPLÈTE
function dessinerScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // rotation de la roue
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angleActuel);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    dessinerRoue();
    ctx.restore();

    
    dessinerIndicateur();
}

// 🔄 ANIMATION
function animerRoue() {
    if (vitesseRotation > 0.001) {
        angleActuel += vitesseRotation;
        vitesseRotation *= 0.995;

        dessinerScene();

        requestAnimationFrame(animerRoue);
    } else {
        enRotation = false;
        vitesseRotation = 0;

        // 🎯 CALCUL EXACT DU GAGNANT
const angleParOption = (Math.PI * 2) / options.length;

    let angle = angleActuel % (Math.PI * 2);
    angle = (Math.PI * 2) - angle;
    angle += Math.PI / 2 + Math.PI;

const index = Math.floor(angle / angleParOption) % options.length;
const optionGagnante = options[index];

        alert('Votre prochaine destination : ' + optionGagnante);
    }
}

// 🎯 BOUTON
boutonTourner.addEventListener('click', () => {
    if (!enRotation) {
        enRotation = true;
        vitesseRotation = Math.random() * 0.2 + 0.1;
        animerRoue();
    }
});

dessinerScene();

// FIN DE SECTION //