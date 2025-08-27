const ProductImage = document.querySelector('.product-image');
const Images = document.querySelectorAll('.product');
const stars = document.getElementById('stars-container'); 
const about = [
    "The Zyglon smartwatch boasts an advanced holographic display that projects a 3D cityscape, offering interactive navigation and real-time urban analytics.",
    "With state-of-the-art biometric sensors, the watch provides comprehensive health tracxking, including heart rate variability,oxygen saturation, stress levels, and radiation levels.",
    "Quantum Processing Unit(QPU): at the heart of the smartwatch lies a QPU that delivers unparalleled computing power. This eneables instantaneous data processing, complex augmented reality experiences, and seamless integration with bio-mod devices.",
    "Equipped with smart temporal analytics that analyzes personal and public data to predict future trends in your schedule and city life.",
    "The smartwach doesn't just adapt to your schedule--it adapts to your style. It features a chameleon-like skin that changes..."
]
const questions = [
    "Q: Is the holographic display visible in direct sunlight?",
    "A: Yes, the Zyglon smartwatch's holographic display is designed to be visible even in direct sunlight, thanks to its advanced light-adjusting technology.",
    "Q: How accurate are the biometric sensors?",
    "A: The biometric sensors in the Zyglon smartwatch are highly accurate, utilizing cutting-edge technology to provide reliable health tracking data.",
    "Q: Can the watch integrate with other smart devices?",
    "A: Absolutely! The Zyglon smartwatch is designed to seamlessly integrate with a wide range of smart devices and bio-mods for an enhanced user experience.",
    "Q: What materials are used in the watch's construction?",
    "A: The Zyglon smartwatch is constructed from durable, lightweight materials that ensure comfort and longevity, including a chameleon-like skin that adapts to your style."
]
const reviews = [
    `"The holographic display is mind-blowing! Navigating through the city has never been easier." - Alex P.`,
    `"I love how the watch tracks my health metrics so accurately. It's like having a personal health assistant on my wrist." - Jamie L.`,
    `"The quantum processing unit makes everything so fast and smooth. I can't imagine going back to a regular smartwatch." - Sam K.`,
    `"The chameleon skin is such a cool feature! I can match my watch to any outfit." - Taylor R.`,
    `"The predictive scheduling feature has changed the way I manage my time. It's incredibly intuitive." - Morgan S.`
]

/* image switcher */
Images.forEach((image) => {
    image.addEventListener('click', () => {
        ProductImage.src = image.src
        ProductImage.alt = image.alt;
    });
});
const htmlGenerator = (ListItems) => {
    document.getElementById('product-description').innerHTML = `
        <ul>
        ${ListItems.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}

// adds event listeners to product details tabs, and generates html based on which tab is clicked
const ProductInfoTab = () => {
    const details = document.querySelectorAll('#product-details p');
    details.forEach((detail) => {
        detail.addEventListener('click', () => {
            details.forEach((d) => d.classList.remove('active'));
            detail.classList.add('active');
            if(detail.textContent === 'About this item'){
                htmlGenerator(about);
            } else if(detail.textContent === 'Questions'){
                htmlGenerator(questions);
            } else if(detail.textContent === 'Reviews(14)'){
                htmlGenerator(reviews);
            }
        });
    }); 
}
// event listener for stars review tab
stars.addEventListener('click', () =>{ 
    const details = document.querySelectorAll('#product-details p');
    details.forEach((d) => d.classList.remove('active'));
    details[2].classList.add('active');
    htmlGenerator(reviews);
});
ProductInfoTab();
htmlGenerator(about);