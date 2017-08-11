let url = "https://api.github.com/users/crabtreec";
let wrapper = document.querySelector(".body");

fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(data){
    let vCard =
    `
    <header>
    <h1>${data.name}</h1>
    </header>
    <main>
        <div class="Basics">
          <h2>The Basics</h2>
            <ul>
                <li><span>Name:</span> ${data.name}</li>
                <li><span>GitHub URL:</span> <a href=${data.html_url}>${data.login}</a></li>
                <li><span>Email:</span> ${data.email}</li>
                <li><span>Company:</span> ${data.company}</li>
                <li><span>Website:</span> <a href=${data.blog}>chadcrabtreeblog.wordpress.com</a></li>
            </ul>
        </div>
        <article class="story">
          <h2>The Story</h2>
              <p>${data.bio}</p>
        </article>
        <aside>
            <img src="${data.avatar_url}">
        </aside>
    </main>
    `;
    wrapper.innerHTML = vCard;

})
