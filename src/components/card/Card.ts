export enum Attributes {
    "image" = "image",
    "fact" = "fact"
    }

class Card extends HTMLElement {
    static observedAttributes() {
        //image? = string,
        //fact? = string
    }
    

    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    mount(){
        this.render();
    }

    attributeChangedCallback(propValue:any, newValue:any) {
        /*switch (propValue) {
            case image:
                this.image = newValue
                break;

            case fact:
                this.fact = newValue
                break;
        
            default:
                break;
        }*/
    }

    render() {
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            
            `
        }
    }
}

customElements.define("my_card", Card)
export default Card