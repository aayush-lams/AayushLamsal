export function render_work (work_tag, render_container, tag) {
  render_container.innerHTML = "";
  fetch('data/Works.json')
    .then(response => response.json())
    .then(workJson => {
      console.log(tag, "hello");
      const card = workJson
        .filter(work => work.tag === tag)
        .map(work => {
          render_container.appendChild(createWorkCard(work, tag));
        })
    })
}

function createWorkCard(work: any, tag: string): HTMLElement {
  const card = document.createElement('div');
  card.classList.add('work_card', tag);

  const img = document.createElement('img');
  img.src = work.src;
  img.alt = work.title || 'work image';
  card.appendChild(img);

  if (work.title || work.description) {
    const content = document.createElement('div');
    content.className = 'work_card_content';

    if (work.title) {
      const h2 = document.createElement('h2');
      h2.textContent = work.title;
      content.appendChild(h2);
    }

    if (work.description) {
      const p = document.createElement('p');
      p.textContent = work.description;
      content.appendChild(p);
    }

    card.appendChild(content);
  }

  return card;
}
