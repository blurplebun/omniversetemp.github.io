/* --------------------------
    WEBSITE MENU DATA
    -------------------------- */

// Metadata
const lastUpdated = 'December 30th, 2025';
const version = '1.0.0';




// Orbit data

// You can assign each orbit a name and description here.
// Currently only appear on SIMPLE_MODE
orbitData = [
    {
        orbit: 1,
        name: "Getting Started",
        desc: "New here?",
    },
    {
        orbit: 3,
        name: "Others",
        desc: "Miscellanous",
    },
];




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
        name: 'Menu Template',                // Menu name and title
        showName: true,                      // Show name in orbit
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
                excerpt: 'Main card types to put your content in',
            },
            {
                cardId: 'normalCard',         // REQUIRED: Unique card identifier
                title: 'Normal Card',
                excerpt: 'With thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                image: 'images/temp.png'        // Thumbnail will be shown in 1:1 aspect ratio
            },
            {
                cardId: 'urlCard',
                title: 'URL Card',
                excerpt: 'With thumbnail',
                url: 'https://x.com/artifyber',  // External URL redirect
                image: 'images/temp.png'
            },
            {
                cardId: 'unclickableCard',
                title: 'Unclickable Card',
                excerpt: 'With thumbnail',
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
                excerpt: 'Without thumbnail',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.'
            },
            {
                cardId: 'urlCardPlain',
                title: 'URL Card',
                excerpt: 'Without thumbnail',
                url: 'https://x.com/artifyber'
            },
            {
                cardId: 'unclickableCardPlain',
                title: 'Unclickable Card',
                excerpt: 'Without thumbnail',
                unclickable: true
            },

            // BANNER CARDS
            {
                // Cards without cardId become separators
                title: 'Banner examples',
                excerpt: 'Useful for describing a section of card grid',
            },
            {
                cardId: 'bannerCard',
                title: 'Banner Card',
                excerpt: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerUrlCard',
                title: 'Banner Card (URL)',
                excerpt: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerUnclickableCard',
                title: 'Banner Card (Unclickable)',
                excerpt: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
                image: 'images/temp3.png'
            },
            {
                cardId: 'bannerCardBlank',
                title: 'Banner Card - No Thumbnail',
                excerpt: 'A type of card that spans the entire width of the container',
                detail: 'This is a template for a normal card.<br>You can fill these with whatever you want in raw HTML.',
                banner: true,
            },
            {
                cardId: 'bannerUrlCardBlank',
                title: 'Banner Card - No Thumbnail (URL)',
                excerpt: 'A type of card that spans the entire width of the container',
                banner: true,
                url: 'https://x.com/artifyber',
            },
            {
                cardId: 'bannerUnclickableCardBlank',
                title: 'Banner Card - No Thumbnail (Unclickable)',
                excerpt: 'A type of card that spans the entire width of the container',
                banner: true,
                unclickable: true,
            },

            // MENU-LINKED CARDS
            {
                title: 'Menu-Link examples',
                excerpt: 'Cards that open another menu',
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
                excerpt: 'A way to copy cards from another menu. Useful for pinning!',
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
        name: 'Character Template',
        showName: true,
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
                excerpt: '',

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
        name: 'Random Character',
        menuId: 'random',
        showName: true,
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
        name: 'Information',
        menuId: 'info',
        subtitle: 'Information about author and this website',
        showName: true,
        image: 'icons/info.png',
        color: 'var(--color-3)',
        scale: 1.5,
        labels: [
            {
                cardId: 'notice',
                title: 'NOTICE:',
                excerpt: `This template is not ready. Don't use it just yet.`,
                unclickable: true,
            },
            {},
            {
                cardId: 'ocrules',
                title: 'Character Rules',
                excerpt: `Rules regarding character usage`,
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
                excerpt: `
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
        name: 'Settings',
        showName: true,
        color: 'var(--color-4)',
        hidden: true,
        invisible: true,
        labels: [
            {
                cardId: 'modeSwitch',
                title: `Layout`,
                excerpt: `
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
                excerpt: `
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
                excerpt: `Updated: ${lastUpdated}<br>
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






// Special search responses

// Try typing these special keywords on the search bar!
specialSearch = {
    nothing: {
        title: 'Nothing found!',
        excerpt: ''
    },
    something: {
        title: 'Something found!',
        excerpt: `...It's just me LOL<br>
        My name is omniLens btw! You've probably met my brother omniTracer! He's such a powerful guy...<br>
        Lowkey i'm kinda jealous of him. I wish to be as powerful as him one day :(`
    },
    content: {
        title: 'Content found!',
        excerpt: `Yup, i am the content. You've found me heehee!<br>
        Aww you listened to what i said!<br>
        Good boy :)`
    },
    help: {
        title: 'help yourself bro LOLXD',
        excerpt: ''
    },
    hi: {
        title: 'HAII HIIII HELLLOOO!!!! :DD',
        excerpt: ''
    },
};










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
        excerpt: `This is a short placeholder excerpt for ${prefix} item ${i + 1}.`,
        detail: `Detailed description for ${prefix} item ${i + 1}. You can replace this with whatever content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nulla sed velit malesuada fermentum.`,
        image: 'images/temp.png'
    }));
}

// Calculate totals for statistics
totalCards = menuItems.reduce((sum, item) => sum + item.labels.length, 0);
totalCharacters = menuItems.reduce((sum, item) => sum + item.labels.filter(label => label.isCharacter).length, 0);
totalMenus = menuItems.length;

if (typeof module !== "undefined") {
    module.exports = { menuItems };
}