app.component('review-form', {
    template: 
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Review Form</h3>
        
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <p class="error" v-if="nameError">{{ nameError }}</p>

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <p class="error" v-if="reviewError">{{ reviewError }}</p>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <p class="error" v-if="ratingError">{{ ratingError }}</p>

        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>
        <p class="error" v-if="recommendError">{{ recommendError }}</p>

        <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null,
            nameError: '',
            reviewError: '',
            ratingError: '',
            recommendError: ''
        }
    },
    methods: {
        onSubmit() {
            // Reset errors
            this.nameError = ''
            this.reviewError = ''
            this.ratingError = ''
            this.recommendError = ''

            // Validate inputs
            let isValid = true

            if (!this.name) {
                this.nameError = 'Name is required'
                isValid = false
            } else if (this.name.length < 3) {
                this.nameError = 'Name must be at least 3 characters'
                isValid = false
            }

            if (!this.review) {
                this.reviewError = 'Review is required'
                isValid = false
            } else if (this.review.length < 10) {
                this.reviewError = 'Review must be at least 10 characters'
                isValid = false
            }

            if (!this.rating) {
                this.ratingError = 'Rating is required'
                isValid = false
            }

            if (!this.recommend) {
                this.recommendError = 'Please select whether you recommend this product'
                isValid = false
            }

            // If all validation passes, emit the review
            if (isValid) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                }
                this.$emit('review-submitted', productReview)

                // Reset form
                this.name = ''
                this.review = ''
                this.rating = null
                this.recommend = null
            }
        }
    }
})