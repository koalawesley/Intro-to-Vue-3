const app = Vue.createApp({
    data() {
        return {
            cart: {
                qty: 0,
                items: []
            },
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
            selectedVariant: 2234,
        }
    },
    methods: {
        addCart() {
            this.cart.qty += 1
            this.cart.items.push(this.variants.find(variant => variant.id === this.selectedVariant))
        },
        updateProduct(variantId) {
            this.selectedVariant = variantId
        },
        removeFromCart() {
            if (this.cart.qty > 0) {
                this.cart.qty -= 1
                this.cart.items.pop(this.cart.items.find(item => item.id === this.selectedVariant))
            }
        }
    },
    computed: {
        title() {
            return this.product + ' - ' + this.variants.find(variant => variant.id === this.selectedVariant).color
        },
        image() {
            const variant = this.variants.find(variant => variant.id === this.selectedVariant)
            return variant.image
        }
    }
})
