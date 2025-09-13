import "@components/works/workcard.css";
import { getWorks } from "@libs/API/works/fetch";

function addWorkContent (el : string, workText : string, container : HTMLElement) {
  const workEl = document.createElement(el);
  workEl.textContent = workText;
  container.appendChild(workEl);
}

function createWorkCard(work: any, tag: string): HTMLElement {
  const card = document.createElement('div');
  card.classList.add('work_card', tag);

  const img = document.createElement('img');
  img.src   = work.src;
  img.alt   = work.title || 'work image';

  card.appendChild(img);

  if (!(work.title || work.description)) return card;

  const content     = document.createElement('div');
  content.className = 'work_card_content';

  if (work.title)       addWorkContent('h2', work.title, content);
  if (work.description) addWorkContent('p', work.description, content);

  card.appendChild(content);
  card.style.backdropFilter = 'blur(2px)';

  if (card.getAttribute("data-active") === "true") return;

  card.addEventListener('click', () => {
    window.location.href = work.link;
  });

  return card;
}

export async function render_work (render_container : HTMLElement, tag : string) {
  render_container.innerHTML = "";
    const workList = await getWorks(tag);
  workList.forEach(work => {
    render_container.appendChild(createWorkCard(work, tag));
  });
  }
