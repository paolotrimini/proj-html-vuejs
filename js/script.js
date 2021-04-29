
    function initVue() {

        new Vue ({
            el: '#app',
            data: {

                sidebarMenu: false,

                // FOOTER icons
                images: [
                    { icon: 'img/face-1.png', alt: 'Facebook' },
                    { icon: 'img/twitter-1.png', alt: 'Twitter' },
                    { icon: 'img/insta-1.png', alt: 'Instagram' },
                    { icon: 'img/link-1.png', alt: 'Linkedin' },
                    { icon: 'img/yt-1.png', alt: 'Youtube' }
                ],

                // HEADER menu items

                menu: {

                    items: [

                        'Home<i class="fas fa-chevron-down"></i>',
                        'Culinary History',
                        'Our Team',
                        'Our Menu',
                        'Takeout<p>New</p><i class="fas fa-chevron-down"></i>',
                        'Bulletin',
                        'Reservations',
                        'WooCommerce Cart'
                    ]
                }
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
