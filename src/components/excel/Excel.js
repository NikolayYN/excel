export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        const node = document.createElement('div')
        this.components.forEach(Component=>{
            const component = new Component()
            node.insertAdjacentHTML('beforeend', component.toHTML())
        })
        return node
    }
    render() {
        this.$el.appendChild(this.getRoot())
    }
}