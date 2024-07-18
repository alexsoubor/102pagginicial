// Função para verificar se é o primeiro acesso
function isFirstVisit() {
    // Verifica se o cookie 'visited' já existe
    return !document.cookie.includes('visited=true');
}

// Função para configurar o cookie de visita
function setVisitedCookie() {
    // Define o cookie 'visited' para expirar em 1 ano
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
    document.cookie = "visited=true; expires=" + expires + "; path=/";
}

// Função para redirecionar para a página de login
function redirectToLogin() {
    window.location.replace("https://login102digital.netlify.app/");
}

// Verifica se é o primeiro acesso e redireciona se necessário
if (window.location.href === "https://menuform102.netlify.app/") {
    if (isFirstVisit()) {
        // Define o cookie de visita apenas no primeiro acesso
        setVisitedCookie();
    } else {
        // Configura redirecionamento após 10 minutos de inatividade se não for o primeiro acesso
        var inactivityTimeout = 1 * 60 * 1000; // 10 minutos em milissegundos
        var timeoutTimer;

        function resetTimer() {
            clearTimeout(timeoutTimer);
            timeoutTimer = setTimeout(redirectToLogin, inactivityTimeout);
        }

        // Reseta o temporizador em resposta a eventos de interação do usuário
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("keydown", resetTimer);
        document.addEventListener("scroll", resetTimer);

        // Inicializa o temporizador
        resetTimer();
    }
}

