window.addEventListener('load', function(){

    var cc = initCookieConsent();

    cc.run({
        current_lang: 'en',
        autoclear_cookies: true,                   // Automatically delete cookies if user opts out
        page_scripts: true,                        // Manage third-party scripts loaded by the page
        
        // UI Configuration
        gui_options: {
            consent_modal: {
                layout: 'cloud',                   // box/cloud/bar
                position: 'bottom center',         // bottom/middle/top + left/right/center
                transition: 'slide'                // zoom/slide
            },
            settings_modal: {
                layout: 'box',
                transition: 'slide'
            }
        },

        languages: {
            'en': {
                consent_modal: {
                    title: 'We use cookies',
                    description: 'We use cookies to manage our website traffic. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                    primary_btn: {
                        text: 'Accept all',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Reject all',
                        role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie preferences',
                    save_settings_btn: 'Save settings',
                    accept_all_btn: 'Accept all',
                    reject_all_btn: 'Reject all',
                    close_btn_label: 'Close',
                    cookie_table_headers: [
                        {col1: 'Name'},
                        {col2: 'Domain'},
                        {col3: 'Expiration'},
                        {col4: 'Description'}
                    ],
                    blocks: [
                        {
                            title: 'Cookie usage 📢',
                            description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience.'
                        }, {
                            title: 'Strictly necessary cookies',
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true          // cookie categories with readonly=true are allways enabled
                            }
                        }, {
                            title: 'Performance and Analytics',
                            description: 'Cookies used to gather statistics on website usage.',
                            toggle: {
                                value: 'analytics',     // This is the category name we check for
                                enabled: false,
                                readonly: false
                            }
                        }
                    ]
                }
            }
        }
    });
});
