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
        <div>
          <h2>The Basics</h2>
            <ul>
                <li><span>Name:</span> ${data.name}</li>
                <li><span>GitHub URL:</span> <a href=${data.html_url}>${data.login}</a></li>
                <li><span>Email:</span> ${data.email}</li>
                <li><span>Company:</span> ${data.company}</li>
                <li><span>Website:</span> <a href=${data.blog}>stephen-boynton.wordpress.com</a></li>
            </ul>
        </div>
        <section id="right">
          <h2>The Story</h2>
              <p>${data.bio}</p>
        </section>
        <section>
              <img src="${data.avatar_url}">
        </section>
    </main>
    `;
    wrapper.innerHTML = vCard;

})
