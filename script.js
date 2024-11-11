const posts = [
    {
        title: "First Blog Post",
        date: "November 1, 2024",
        content: "This is the content of the first blog post. You can write anything here!",
        link: "post.html?id=1"
    },
    {
        title: "Second Blog Post",
        date: "November 2, 2024",
        content: "Here's the content of the second blog post. Add images, text, and more!",
        link: "post.html?id=2"
    }
];

// Função para carregar a lista de postagens na página inicial
function loadPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = posts.map(post => `
        <article>
            <h2><a href="${post.link}">${post.title}</a></h2>
            <p>${post.date}</p>
            <p>${post.content.slice(0, 100)}...</p>
        </article>
    `).join('');
}

// Função para carregar uma postagem individual na página post.html
function loadPost() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");
    const post = posts[postId - 1]; // Índice da postagem

    if (post) {
        document.getElementById("post-title").innerText = post.title;
        document.getElementById("post-date").innerText = post.date;
        document.getElementById("post-content").innerHTML = post.content;
    }
}

// Verifica qual página está aberta e carrega o conteúdo adequado
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("post-list")) {
        loadPosts(); // Página inicial
    } else {
        loadPost(); // Página de postagem
    }
});
