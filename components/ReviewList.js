app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="review-list">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">{{ review.name }} gave this {{ review.rating }} out of 5 stars <br>
            "{{ review.review }}"
            </li>
        </ul>
    </div>
    `
})