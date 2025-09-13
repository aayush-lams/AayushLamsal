import {render_work} from "@components/works/renderworks";

const person_mode         = Array.from(document.getElementsByClassName('person_mode'));
console.log(person_mode)
const work_tag            = document.getElementById("work_tag");
const render_container    = document.getElementById("render_works_container");
const active_mode_element = person_mode.find(el => el.id==='active') as HTMLElement;

function clear_id(){
  person_mode.forEach((el) => {
    if (el.id === 'active') {
      el.id = '';
    };
  });
};

function update_selector(target : HTMLElement){
    const selector       = document.getElementById('mode_select');
    const mode_metrics   = target.getBoundingClientRect();
    const parent_metrics = selector.parentElement.getBoundingClientRect();

    render_selector(selector, mode_metrics, parent_metrics);
};

function set_tag (tag : string) {
  work_tag.setAttribute("data-tag", tag);
};

function render_selector (selector : HTMLElement, mode_metrics : DOMRect, parent_metrics : DOMRect){
  selector.style.width  = `${mode_metrics.width}px`;
  selector.style.height = `${mode_metrics.height}px`;
  selector.style.left   = mode_metrics.x - parent_metrics.x + 'px';
  selector.style.top    = mode_metrics.y - parent_metrics.y + 'px';
};

function update_mode_selector_ui(target: HTMLElement){
    clear_id();
    target.id = 'active';
    set_tag(target.getAttribute("data-tag"));
    update_selector(target);
    render_work(render_container, target.getAttribute("data-tag"));
    render_container.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export function init_person_mode () {
  const activeTag = active_mode_element.getAttribute('data-tag');
  update_selector(active_mode_element); // update the pos of selector bg
  set_tag(activeTag); //set tag of work renderer
  render_work(render_container, activeTag);

  window.addEventListener("resize", () => {
    update_selector(active_mode_element);
  });
  person_mode.forEach((el) => {
    el.addEventListener('click', (event) => update_mode_selector_ui(event.target as HTMLElement));
  });
};
