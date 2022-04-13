const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const cars = ['BWM']

    const list = $('#list')
    const input = $('#input');
    const btn = $('#btn');
    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map((car, index) => `
                <li>${car} <span class="delete" data-index="${index}">&times</span>
                </li>
            `).join('')
            list.innerHTML = html;
        },
        handleDelete(e) {
            const del = e.target.closest('.delete');
            if(del){
                const index = del.dataset.index;
                this.delete(index);
                this.render();
            }
        },
        init() {
            btn.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null;
                input.focus();
            }
            this.render();
            list.onclick = this.handleDelete.bind(this)
        }
    }
})();

app.init()