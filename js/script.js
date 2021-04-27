
    function initVue() {

        new Vue ({
            el: '#app',
            data: {
                images: [
                    { icon: 'img/', alt: 'Facebook' },
                    { icon: 'img/', alt: 'Twitter' },
                    { icon: 'img/', alt: 'Instagram' },
                    { icon: 'img/', alt: 'Linkedin' },
                    { icon: 'img/', alt: 'Youtube' }
                ]
            },


        })
    }
    function init() {
        initVue();
    }
    document.addEventListener('DOMContentLoaded', init);
