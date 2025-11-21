
fetch("https://status.cafe/users/cyberdemon.atom")
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
  const entries = data.querySelectorAll("entry");
  let html = (entries.length < 1) ? `<p>No statuses yet.</p>`: '';
  if (entries.length > 1){
    entries.forEach(el => {
      let title = el.querySelector("title").innerHTML.slice(0, 10).trim();
      let content = el.querySelector("content").textContent.trim();
      let dateString = el.querySelector("published").innerHTML.slice(0, 10);
      html += `
        <div class="border radius-5">
            <div class="flex" style="align-items: center;">
                <div class="flexChild">
                    <img class="icon-small" src="/images/graphics/Friendly_Dog.webp" alt="closeup of a smiling dog">
                </div>
                <div class="flexChild child-equal">
                    <p><span style="color: inherit; font-weight: bold;">CODA</span> <span style="color: gray; font-size: .9rem; margin:0;">@${title}</span><br> ${dateString}</p>
                </div>
            </div>
            <p>${content}</p>
        </div>
      `;
    });
  }
  document.getElementById("feed-reader").innerHTML = html;
})