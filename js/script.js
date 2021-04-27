
    function initVue() {

        new Vue ({
            el: '#app',
            data: {
                'icons': [

                    'Facebook',
                    'Twitter',
                    'Instagram',
                    'Linkedin',
                    'Youtube'
                ]

            },
            methods: {

            }



        })
    }
    function init() {
        initVue();
    }
    document.addEventListener('DOMContentLoaded', init);
