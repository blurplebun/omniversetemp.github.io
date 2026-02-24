/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

// Metadata
const lastUpdated = 'February 24th, 2026';
const version = '1.1.0';

// menu logo redirection
menuLogoRedirect = 'info';

// orbitData attributes:
// orbit: int            - which orbit id these attributes apply to
// title: string         - the title of this orbit
// desc: string          - the description of this orbit
// orbitNum: int         - the actual orbit layer which determine how far it is from the center. defaults to orbit
// direction: float      - the direction of spin and how fast it is. x<0 is clockwise, x>0 is counterclockwise.
// offsetX: int          - offsets the X position of this orbit by pixels
// offsetY: int          - offsets the Y position of this orbit by pixels
// scaleX: float         - scale this orbit by the X axis
// scaleY: float         - scale this orbit by the Y axis

// Orbit data

// You can assign each orbit a name and description here.
// Currently only appear on SIMPLE_MODE
orbitData = [
    {
        orbit: 1,
        title: "Getting Started",
        desc: "New here?",
    },
    {
        orbit: 3,
        title: "Others",
        desc: "Miscellanous",
    },
];

// menu attributes:
// menuId: string           - REQUIRED: unique identifier for the menu (alphanumeric, no spaces)
// title: string            - menu name and title
// subtitle: string         - short description of menu
// showTitle: bool          - show name in orbit?
// orbit: float             - orbit id and default layer placement
// image: string            - path to the menu thumbnail image. optional
// color: string            - CSS color of menu. optional
// scale: float             - if set, modify the menu button scale
// hidden: bool             - if set, hide menu from orbit (accessible via links only)
// invisible: bool          - if set, exclude from search
// labels: array            - cards inside this menu. optional. if a menu has only one card it'll open that automatically

// card attributes:
// cardId: string           - unique identifier for the card (alphanumeric, no spaces). if unset, this becomes a separator
// title: string            - card title
// subtitle: string         - short description / excerpt of card
// detail: string           - the HTML contents of this card
// image: string            - path to the card thumbnail image. optional
// url: string              - if set, this card becomes a URL-type card
// unclickable: bool        - if set, this card becomes unclickable
// blank: bool              - if set, make this card textless (image-only)
// banner: bool             - if set, this card becomes a banner-type card
// linkId: string           - if set as the only attribute, this card links to another menu (menuId)
// reference: string        - if set as the only attribute, this card copies another card (menuId:cardId)
// isCharacter: bool        - if set, this is a character card
// cSpecies: string         - the character species. optional
// cPronouns: string        - the character pronouns. optional
// cGender: string          - the character gender. optional
// cSexuality: string       - the character sexuality. optional
// cNicknames: string       - the character nicknames. optional
// cAddOns: string          - extra HTML put above the reference art of the character. optional
// cReference: string       - path to the character reference art. optional
// cGallery: array          - array of path to character images. optional
// cardParentId: string     - DEV ONLY: contains the automatically-assigned menuId of this card

// Main menu data array
menuItems = [
    // Orbit 1
    {
        /* --------------------------
        Menu Template
        -------------------------- */

        // you might want to keep this template to help you create more cards for your website.
        // once you're done, set both "hidden" and "invisible" to true to hide this card.

        orbit: 1,                             // INTEGER: Orbit layer placement
        menuId: 'menuTemplate',               // REQUIRED: Unique identifier (alphanumeric, no spaces). use anything EXCEPT 'index'
        title: 'Menu Template',                // Menu name and title
        showTitle: true,                      // Show name in orbit
        subtitle: 'This is a menu example',   // Short description
        image: 'images/temp2.png',            // Orbit thumbnail image
        color: 'var(--color-1)',              // Menu color (hex, CSS var, or blank)
        scale: 1,                             // Menu size in orbit
        hidden: false,                        // if true: Hide from orbit (accessible via links only)
        invisible: false,                     // if true: Exclude from search
        labels: [
            // CARDS WITH THUMBNAILS
            {
                // Cards without cardId become separators
                title: 'Card examples',
                subtitle: 'Main card types to put your content in',
            },
            {
                cardId: 'normalCard',         // REQUIRED: Unique card identifier
                title: 'Normal Card',
                subtitle: 'With thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'        // Thumbnail will be shown in 1:1 aspect ratio
            },
            {
                cardId: 'urlCard',
                title: 'URL Card',
                subtitle: 'With thumbnail',
                url: 'https://x.com/artifyber',  // External URL redirect
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                subtitle: 'With thumbnail',
                unclickable: true,            // Non-clickable info card
                image: 'images/temp.png'
            },

            // CARDS WITHOUT TEXT
            {
                cardId: 'normalCardBlank',
                blank: true,    // set the card as blank / have no text
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'        // Thumbnail will be shown in 4:5 aspect ratio
            },
            {
                cardId: 'urlCardBlank',
                blank: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCardBlank',
                blank: true,
                unclickable: true,
                image: 'images/temp.png',
            },

            // CARDS WITHOUT THUMBNAILS
            {
                cardId: 'normalCardPlain',
                title: 'Normal Card',
                subtitle: 'Without thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.'
            },
            {
                cardId: 'urlCardPlain',
                title: 'URL Card',
                subtitle: 'Without thumbnail',
                url: 'https://x.com/artifyber'
            },
            {
                cardId: 'unclickableCardPlain',
                title: 'Unclickable Card',
                subtitle: 'Without thumbnail',
                unclickable: true
            },
            {
                cardId: 'motherCard',
                title: 'Mothercard',
                subtitle: 'This card contains more cards',
                detail: `
                    You can embed cards inside another card by simply using a div element with <code>class="card internal"</code> and set it to reference another card using <code>data-href="menuId:cardId"</code><br>
                    <br>
                    To set a caption, use <code>data-caption="caption"</code>
                    <div class="imgContainer">
                        <div class="card internal" data-href="menuTemplate:normalCard""></div>
                        <div class="card internal" data-href="info"></div>
                        <div class="card internal" data-href="menuTemplate:unclickableCardPlain" data-caption="Optional caption!"></div>
                        <div class="card internal" data-href="menuTemplate:motherCard" data-caption="Cardception..."></div>
                    </div>
                    You can even embed itself if you want!
                `,
                image: 'images/temp2.png'
            },

            // BANNER CARDS
            {
                // Cards without cardId become separators
                title: 'Banner examples',
                subtitle: 'Useful for describing a section of card grid',
            },
            {
                cardId: 'bannerCard',
                title: 'Banner Card',
                subtitle: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerUrlCard',
                title: 'Banner Card (URL)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerUnclickableCard',
                title: 'Banner Card (Unclickable)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerCardBlank',
                title: 'Banner Card - No Thumbnail',
                subtitle: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
            },
            {
                cardId: 'bannerUrlCardBlank',
                title: 'Banner Card - No Thumbnail (URL)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
            },
            {
                cardId: 'bannerUnclickableCardBlank',
                title: 'Banner Card - No Thumbnail (Unclickable)',
                subtitle: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
            },

            // MENU-LINKED CARDS
            {
                title: 'Menu-Link examples',
                subtitle: 'Cards that open another menu',
            },
            {
                linkId: 'info'
            },
            {
                linkId: 'info',
                banner: true
            },

            // REFERENCES
            {
                title: 'Reference examples',
                subtitle: 'A way to copy cards from another menu. Useful for pinning!',
            },
            {
                reference: 'info:ocrules'
            },
            {
                reference: 'info:credits'
            },
        ]
    },
    {
        /* --------------------------
        Menu Template
        -------------------------- */

        // you might want to keep this template to help you create more cards for your website.
        // once you're done, set both "hidden" and "invisible" to true to hide this card.

        orbit: 1,
        menuId: 'ocTemplate',
        title: 'Character Template',
        showTitle: true,
        subtitle: 'This is a character menu example',
        image: 'images/temp2.png',
        color: 'var(--color-4)',
        scale: 1,
        hidden: false,
        invisible: false,
        labels: [
            {
                cardId: 'thinkingMonkey',
                title: 'Thinking Monkey',
                subtitle: '',

                isCharacter: true,
                cSpecies: 'Monkey',
                cPronouns: '',
                cGender: '',
                cSexuality: '',
                cNicknames: '',

                cAddOns: `Source: <a href="https://knowyourmeme.com/memes/thinking-monkey">knowyourmeme.com</a>`,
                cReference: 'images/r/thinking-monkey-r.jpg',
                cGallery: [],

                detail:
                    `Thinking Monkey is an exploitable image macro meme featuring a monkey standing in front of a seaport
                    looking up with his finger in the corner of his mouth, as though he is deep in thought or contemplating something.
                    The photo of the monkey is often used in memes to joke about coming up with an idea or ruminating over something.
                    The image was originally taken at the island of Gibraltar, a British territory off the coast of Spain, which is
                    known for its population of Barbary macaques. The image was originally posted to DeviantArt by user anagw8 in
                    late 2011, with a low-quality version of the meme making the rounds on Instagram, Twitter / X and TikTok after
                    2020.`,
                image: 'images/i/thinking-monkey-i.jpg'
            }
        ]
    },
    // Orbit 3
    {
        // Random
        orbit: 3,
        title: 'Random Character',
        menuId: 'random',
        showTitle: true,
        image: 'icons/random.png',
        color: 'var(--color-2)',
        scale: 1.5,
        invisible: true,
        labels: [
            {
                cardId: 'random',
            }
        ],
    },
    {
        // Information
        orbit: 3,
        title: 'Information',
        menuId: 'info',
        subtitle: 'Information about author and this website',
        showTitle: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        scale: 1.5,
        labels: [
            {
                cardId: 'notice',
                title: 'NOTICE:',
                subtitle: `This template is not ready. Don't use it just yet.`,
                unclickable: true,
            },
            {},
            {
                cardId: 'ocrules',
                title: 'Character Rules',
                subtitle: `Rules regarding character usage`,
                detail:
                    `
                    <h2>Fanart Policy</h2>
                    Below are the rules you must follow when creating fanarts of my characters.
                    <h4>Allowed:</h4>
                    <ul>
                        <li>Single-character</li><br>
                        <li>Paired with another character of me</li><br>
                    </ul>
                    <h4>Not Allowed:</h4>
                    <ul>
                        <li>Creating all kinds of hateful or political content</li><br>
                    </ul>
                    `,
            },
            {
                cardId: 'credits',
                title: `Credits`,
                subtitle: `
                        Created using Omniverse Web Template<br>
                        by <a href="https://x.com/artifyber" target="_blank">Artifyber</a>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
        ]
    },

    {
        // Settings
        orbit: 1,
        menuId: 'settings',
        title: 'Settings',
        showTitle: true,
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        labels: [
            {
                cardId: 'modeSwitch',
                title: `Layout`,
                subtitle: `
                        <button type="button" id="modeSwitch">Switch Layout</button>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                cardId: 'keybinds',
                title: `Keyboard Shortcut`,
                subtitle: `
                        ESC = Go back<br>
                        SPACE = Open search<br>
                        C = Center view<br>
                        H = Hide UIs<br>
                `,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
            {
                title: 'Developer Section',
            },
            {
                linkId: 'menuTemplate',
                banner: true
            },
            {
                cardId: 'webinfo',
                title: `Website Info`,
                subtitle: `Updated: ${lastUpdated}<br>
                        Version: ${version}<br>
                        <br>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCardsCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalMenusCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalCharacterCounter"></div>
                        <div style='color: color-mix(in srgb, var(--accentl) 75%, transparent)' id="totalSplashCounter"></div>
                `,
                banner: true,
                unclickable: true,
                detail:
                    ``,
                image: ''
            },
        ]
    },
];



/*
 * Generate placeholder cards for testing
 * @param {number} n - Number of placeholder cards to generate
 * @param {string} prefix - Prefix for card titles
 * @returns {Array} Array of placeholder card objects
 */
function generateLabels(n, prefix) {
    return Array.from({ length: n }).map((_, i) => ({
        id: i + 1,
        title: `${prefix} Item ${i + 1}`,
        subtitle: `This is a short placeholder excerpt for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }));
}

// Special search responses
specialSearch = [
    {
        query: 'nothing',
        title: 'Nothing found!',
        subtitle: ''
    },
    {
        query: 'content',
        title: 'Content found!',
        subtitle: `Yup, i am the content. You've found me heehee!<br>
        Aww you listened to what i said!<br>
        Good boy :)`
    },
    {
        query: 'help',
        title: 'help yourself bro LOLXD',
        subtitle: ''
    }
];

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalCharacters = menuItems.reduce((sum, item) => sum + item.labels.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;

if (typeof module !== "undefined") {
    module.exports = { menuItems };
}