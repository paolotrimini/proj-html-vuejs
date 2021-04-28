
    function initVue() {

        new Vue ({
            el: '#app',
            data: {
                sidebarMenu: false,

                images: [
                    { icon: 'img/', alt: 'Facebook' },
                    { icon: 'img/', alt: 'Twitter' },
                    { icon: 'img/', alt: 'Instagram' },
                    { icon: 'img/', alt: 'Linkedin' },
                    { icon: 'img/', alt: 'Youtube' }
                ],

                names: [

                    'Home',
                    'Culinary History',
                    'Our Team',
                    'Our Menu',
                    'Takeout',
                    'Bulletin',
                    'Reservations',
                    'WooCommerce Cart'
                ]
            },

            methods: {

                hideSidebarNavMenu: function() {

                    if (this.sidebarMenu === true) {
                        this.sidebarMenu = false;
                    } else {
                        this.sidebarMenu = true;
                    }
                },
            }


        })
    }
    function init() {
        initVue();
    }
    document.addEventListener('DOMContentLoaded', init);
