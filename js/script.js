
    function initVue() {

        new Vue ({
            el: '#app',
            data: {
                images: [
                    { icon: 'img/', alt: 'Facebook' },
                    { icon: 'img/', alt: 'Twitter' },
                    { icon: 'img/', alt: 'Instagram' },
                ]
            },


        })
    }
    function init() {
        initVue();
    }
    document.addEventListener('DOMContentLoaded', init);
