import {$} from '@core/Dom';


export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        const node = $.create('div', 'excel')
        this.components.forEach(Component => {
            const component = new Component()
            const $el = $.create('div', Component.className)
            $el.innerHTML = component.toHTML()
            console.log('el', component)
            node.insertAdjacentElement('beforeend', $el)
        })
        return node
    }
    render() {
        this.$el.appendChild(this.getRoot())
    }
}