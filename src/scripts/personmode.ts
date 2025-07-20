import {render_work} from "./renderworks";

document.addEventListener("DOMContentLoaded", function () {
    const person_mode = Array.from(document.getElementsByClassName('person_mode'));
    const work_tag = document.getElementById("work_tag");
    const render_container = document.getElementById("render_works_container");
    const active_mode_element = person_mode.find(el => el.id='active') as HTMLElement;

    set_tag("programming");
    update_selector(active_mode_element);
    render_work(work_tag, render_container, "programming");

    function update_mode_selector_ui(target: HTMLElement){
        activate_id();
        target.id = 'active';
        set_tag(target.getAttribute("data-tag"));
        update_selector(target);
        render_work(work_tag, render_container, target.getAttribute("data-tag"));
    }

    function activate_id(){
        person_mode.forEach((el) =>{
            if(el.id = 'active'){
                el.id = '';
            }
        })
    }

    function set_tag (tag) {
        work_tag.setAttribute("data-tag", tag);
    }

    function render_selector (selector : HTMLElement, mode_metrics : DOMRect, parent_metrics : DOMRect){
      selector.style.width = `${mode_metrics.width}px`;
      selector.style.height = `${mode_metrics.height}px`;
      selector.style.left = mode_metrics.x - parent_metrics.x + 'px';
      selector.style.top = mode_metrics.y - parent_metrics.y + 'px';
    }

    function update_selector(target : HTMLElement){
        const selector = document.getElementById('mode_select');
        const mode_metrics = target.getBoundingClientRect();
        const parent_metrics = selector.parentElement.getBoundingClientRect();

        render_selector(selector, mode_metrics, parent_metrics);
    }
  window.addEventListener("resize", () => {
    update_selector(active_mode_element);
  });
    person_mode.forEach((el) => {
        el.addEventListener('click', (event) => update_mode_selector_ui(event.target as HTMLElement));
    })
});
