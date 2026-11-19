/* ==========================================================================
   WolfTechLabs PRODUCT CATALOG  (catalog.js)
   This is the ONLY file you edit to change what the inquiry form offers.
   The form (index.html) reads it automatically. No form code to touch.

   HOW TO ADD A NEW MACHINE
   1. Copy the "NEW MACHINE TEMPLATE" block at the bottom of this list.
   2. Paste it just before the closing ] of "machines".
   3. Change the id, name, palette and items. Keep the commas and quotes.
   4. Save. Reload index.html to check it.

   HOW TO ADD A PRODUCT   -> add one line of text inside a group's "items".
   HOW TO ADD A SECTION   -> copy a { label: ..., items: [...] } block in "groups".
   HOW TO HIDE A MACHINE  -> change  active: true  to  active: false
                             (use this while a machine is down for repair).
   HOW TO ADD AN AFFILIATE LINK -> paste it into  url: ''  in the "equipment" list.
   MIXED PROJECTS -> a machine can use several color lists:  palette: ['laserMaterials', 'filaments']
   ITEM-SPECIFIC COLORS -> a color with  match: ['word']  only shows for items whose name has that word.
                           Specific materials (anodized aluminum, glass, cork) live in 'specialtyMaterials';
                           a machine turns them on with  namedPalette: 'specialtyMaterials'.
   HOW TO ADD A COLOR     -> add a line in "palettes" (name + hex code).
   ========================================================================== */

window.WTL_CATALOG = {

  /* Colour / material choices. Machines pick one by name. Reuse freely. */
  palettes: {
    /* A material with "options" opens a fly-out color picker on the form.
       available: false  hides a choice (e.g. things your laser cannot cut yet).
       Change false to true when you get a laser that can cut them. */
    laserMaterials: [
      { name: 'Wood', kind: 'wood', match: ['wood','plywood','basswood','wooden','cutting board','serving tray','spoon','picture frame','engraved frame','phone stand'], hex: '#D2B48C', options: [
        { name: 'Basswood', hex: '#D2B48C' },
        { name: 'Birch Plywood', hex: '#E3C9A0' },
        { name: 'Maple', hex: '#E8D3A9' },
        { name: 'Cherry', hex: '#A0522D' },
        { name: 'Oak', hex: '#B8895A' },
        { name: 'Walnut', hex: '#5C4033' },
        { name: 'Bamboo', hex: '#D9C27F' }
      ] },
      { name: 'Slate (Natural Black)', kind: 'stone', match: ['slate'], hex: '#1C1C1E' },
      { name: 'Leather (Genuine)', kind: 'leather', match: ['leather'], hex: '#C19A6B', options: [
        { name: 'Veg-Tan Natural', hex: '#C19A6B' },
        { name: 'Veg-Tan Dark Brown', hex: '#4B2E1E' },
        { name: 'Chrome-Tan Tan', hex: '#C68E5A' },
        { name: 'Chrome-Tan Brown', hex: '#6B4423' },
        { name: 'Chrome-Tan Black', hex: '#141414' },
        { name: 'Chrome-Tan Burgundy', hex: '#6D1F2C' },
        { name: 'Chrome-Tan Red', hex: '#A4262C' },
        { name: 'Chrome-Tan Navy', hex: '#1E2A47' },
        { name: 'Chrome-Tan Gray', hex: '#6B7280' }
      ] },
      { name: 'Opaque Acrylic', kind: 'acrylic', match: ['acrylic'], label: 'Acrylic', hex: '#0F0F10', note: 'Need a different acrylic color? Pick "Other" and tell us in the notes. We order it in, so allow extra lead time (about 14 days).', options: [
        { name: 'Black', hex: '#0F0F10' },
        { name: 'Red', hex: '#B91C1C' },
        { name: 'Orange', hex: '#EA580C' },
        { name: 'Green', hex: '#15803D' },
        { name: 'Dark Blue', hex: '#1D4ED8' },
        { name: 'Purple', hex: '#7E22CE' },
        { name: 'Gray', hex: '#6B7280' },
        { name: 'Pink', hex: '#EC4899' },
        { name: 'Yellow', hex: '#FACC15' },
        { name: 'Teal', hex: '#0D9488' },
        { name: 'Brown', hex: '#78350F' },
        { name: 'Lime Green', hex: '#84CC16' },
        { name: 'Gold', hex: '#CA8A04' },
        { name: 'Silver', hex: '#9CA3AF' },
        { name: 'Other (tell us in notes)', hex: 'linear-gradient(135deg,#B666D2,#EC4899,#FACC15,#0D9488)' },
        { name: 'White',      hex: '#F9FAFB', available: false },
        { name: 'Clear',      hex: '#CFE8F3', available: false },
        { name: 'Light Blue', hex: '#93C5FD', available: false }
      ] },
      { name: 'Felt', kind: 'felt', match: ['felt'], hex: '#C0392B', options: [
        { name: 'Red', hex: '#C0392B' },
        { name: 'Burgundy', hex: '#7B1E3A' },
        { name: 'Pink', hex: '#EC8CB0' },
        { name: 'Orange', hex: '#F08A24' },
        { name: 'Yellow', hex: '#F4D03F' },
        { name: 'Lime Green', hex: '#8BC34A' },
        { name: 'Forest Green', hex: '#1E6B3A' },
        { name: 'Teal', hex: '#1B9AAA' },
        { name: 'Royal Blue', hex: '#2552C4' },
        { name: 'Navy', hex: '#1B2A4A' },
        { name: 'Purple', hex: '#7E3FA8' },
        { name: 'Black', hex: '#111111' },
        { name: 'White', hex: '#F5F5F5' },
        { name: 'Gray', hex: '#8A8F98' },
        { name: 'Cream', hex: '#F2E8CF' },
        { name: 'Tan', hex: '#C9A66B' },
        { name: 'Brown', hex: '#6B4226' }
      ] },
      { name: 'Client Supplied Blank', kind: 'blank', label: 'Your Blank', hex: 'repeating-linear-gradient(45deg, #222, #222 4px, #444 4px, #444 8px)' }
    ],
    /* 3D PRINT COLORS. "PLA In Stock" = rolls on your racks (all PLA, from your Nov 5 photos).
       "New Roll" = need a new spool, best for orders that use most of a roll.
       Move a color between the two lists as your racks change.
       "PETG" = the bin of PETG rolls (colors from your list). */
    filaments: [
      { name: 'PLA In Stock', kind: 'pla', match: ['pla'], label: 'PLA', hex: '#1FA64A', options: [
        { name: 'White', hex: '#F3F4F6' },
        { name: 'Cream / Natural', hex: '#EFE6D0' },
        { name: 'Light Gray', hex: '#C9CDD3' },
        { name: 'Gray', hex: '#8A8F98' },
        { name: 'Silver', hex: '#B6BCC4' },
        { name: 'Black', hex: '#15171A' },
        { name: 'Peach / Skin Tone', hex: '#F4C7A8' },
        { name: 'Light Pink', hex: '#F6C6D3' },
        { name: 'Pink', hex: '#EC6FA5' },
        { name: 'Magenta', hex: '#C2237A' },
        { name: 'Burgundy', hex: '#7B1E3A' },
        { name: 'Red', hex: '#D62828' },
        { name: 'Coral', hex: '#FF6B57' },
        { name: 'Orange', hex: '#F77F00' },
        { name: 'Gold', hex: '#E0A100' },
        { name: 'Yellow', hex: '#F7DC30' },
        { name: 'Light Yellow', hex: '#F5E9A0' },
        { name: 'Tan', hex: '#C9A66B' },
        { name: 'Mint', hex: '#A8E6CF' },
        { name: 'Green', hex: '#1FA64A' },
        { name: 'Dark Green', hex: '#14532D' },
        { name: 'Teal', hex: '#1B9AAA' },
        { name: 'Light Blue', hex: '#7CC4F0' },
        { name: 'Blue', hex: '#2F7FE0' },
        { name: 'Royal Blue', hex: '#2547C4' },
        { name: 'Navy', hex: '#1B2A4A' },
        { name: 'Lavender', hex: '#C9B6F0' },
        { name: 'Violet', hex: '#8B5CF6' },
        { name: 'Purple', hex: '#6D28D9' },
        { name: 'Dark Purple', hex: '#3B1A6B' },
        { name: 'Translucent Clear', hex: '#D9E6EE' }
      ] },
      { name: 'PETG In Stock', kind: 'petg', match: ['petg'], label: 'PETG', hex: '#2F7FE0', options: [
        { name: 'Black', hex: '#15171A' },
        { name: 'Blue', hex: '#2F7FE0' },
        { name: 'Yellow', hex: '#F7DC30' },
        { name: 'Orange', hex: '#F77F00' },
        { name: 'Clear', hex: '#D9E6EE' },
        { name: 'White', hex: '#F3F4F6' },
        { name: 'Green', hex: '#1FA64A' },
        { name: 'Red', hex: '#D62828' },
        { name: 'Silver Gray', hex: '#A3A9B2' }
      ] },
      { name: 'New Roll', kind: 'filament', match: ['tpu','asa','abs','carbon','glow','metallic','overmolded'], label: 'New Roll', hex: '#6B4226', options: [
        { name: 'Brown', hex: '#6B4226' },
        { name: 'Lime Green', hex: '#A3E635' },
        { name: 'Carbon Fiber Black', hex: '#0B0B0C' },
        { name: 'Glow-in-the-Dark', hex: '#A7F3D0' },
        { name: 'Translucent TPU', hex: '#94A3B8' },
        { name: 'Metallic / Silk Specialty', hex: '#9CA3AF' }
      ] },
      { name: 'Multi-Color (see notes)', label: 'Multi', hex: 'linear-gradient(90deg,#B666D2,#D97706,#6EE7B7)' }
    ],
    /* Cricut colors. Each color has "match" words: when an item name has one of these
       words, ONLY the matching colors show for that item (paper crafts get paper,
       shirts get vinyl colors). Items with no match words show all of them. */
    vinylAndFabric: [
      { name: 'Pitch Black',             hex: '#111111', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Pure White',              hex: '#F8F9FA', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Navy Blue',               hex: '#1B2A4A', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Cardinal Red',            hex: '#991B1B', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Forest Green',            hex: '#14532D', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Purple',                  hex: '#6B21A8', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Lavender',                hex: '#C4B5FD', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      { name: 'Full Color Print',        hex: 'linear-gradient(90deg,#06B6D4,#EC4899,#FACC15)', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket','iron-on','decal','vinyl','stencil','label','lettering'] },
      /* Vinyl finishes (added 2026-11-18). Each chip opens a color pick list. */
      { name: 'Puff (3D raised)', label: 'Puff', hex: '#EC4899', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Black', hex: '#111111' },
        { name: 'White', hex: '#F8F9FA' },
        { name: 'Red', hex: '#C62828' },
        { name: 'Royal Blue', hex: '#1D4ED8' },
        { name: 'Pink', hex: '#EC4899' },
        { name: 'Yellow', hex: '#FACC15' },
        { name: 'Green', hex: '#16A34A' },
        { name: 'Purple', hex: '#7E22CE' }
      ] },
      { name: 'Glitter', label: 'Glitter', hex: '#D4AF37', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Gold', hex: '#D4AF37' },
        { name: 'Silver', hex: '#C0C0C0' },
        { name: 'Rose Gold', hex: '#E0A899' },
        { name: 'Black', hex: '#1A1A1A' },
        { name: 'Red', hex: '#C62828' },
        { name: 'Royal Blue', hex: '#1D4ED8' },
        { name: 'Pink', hex: '#EC4899' },
        { name: 'Purple', hex: '#7E22CE' },
        { name: 'Green', hex: '#16A34A' }
      ] },
      { name: 'Flock (velvet)', label: 'Flock', hex: '#1B2A4A', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Black', hex: '#111111' },
        { name: 'White', hex: '#F8F9FA' },
        { name: 'Red', hex: '#C62828' },
        { name: 'Navy', hex: '#1B2A4A' },
        { name: 'Pink', hex: '#EC4899' },
        { name: 'Green', hex: '#166534' }
      ] },
      { name: 'Metallic', label: 'Metallic', hex: '#C0C0C0', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Gold', hex: '#D4AF37' },
        { name: 'Silver', hex: '#C0C0C0' },
        { name: 'Rose Gold', hex: '#E0A899' },
        { name: 'Copper', hex: '#B87333' },
        { name: 'Bronze', hex: '#8C6A3A' },
        { name: 'Blue', hex: '#2563EB' },
        { name: 'Red', hex: '#B91C1C' },
        { name: 'Green', hex: '#15803D' }
      ] },
      { name: 'Holographic', label: 'Holo', hex: '#C0C0C0', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Silver', hex: '#C0C0C0' },
        { name: 'Gold', hex: '#D4AF37' },
        { name: 'Rainbow', hex: 'linear-gradient(90deg,#06B6D4,#EC4899,#FACC15)' },
        { name: 'Pink', hex: '#F9A8D4' }
      ] },
      { name: 'Chameleon (color shift)', label: 'Shift', hex: '#7E22CE', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Purple to Blue', hex: 'linear-gradient(90deg,#7E22CE,#2563EB)' },
        { name: 'Green to Gold', hex: 'linear-gradient(90deg,#16A34A,#D4AF37)' },
        { name: 'Pink to Orange', hex: 'linear-gradient(90deg,#EC4899,#F97316)' }
      ] },
      { name: 'Glow-in-the-Dark', label: 'Glow', hex: '#A7F3D0', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Green Glow', hex: '#A7F3D0' },
        { name: 'Blue Glow', hex: '#93C5FD' },
        { name: 'Neon Pink', hex: '#FF4FA3' },
        { name: 'Neon Yellow', hex: '#E5FF3A' }
      ] },
      { name: 'Reflective', label: 'Reflect', hex: '#B8BEC6', match: ['shirt','hoodie','tote','hat','apron','towel','onesie','blanket'], options: [
        { name: 'Silver Gray', hex: '#B8BEC6' },
        { name: 'Black', hex: '#1A1A1A' },
        { name: 'Rainbow', hex: 'linear-gradient(90deg,#06B6D4,#EC4899,#FACC15)' }
      ] },
      { name: 'Permanent Vinyl (outdoor)', label: 'Perm.', hex: '#0A0A0A', match: ['outdoor','window','tumbler','mug','laptop','mailbox','stencil','label'], options: [
        { name: 'Gloss Black', hex: '#0A0A0A' },
        { name: 'Matte Black', hex: '#1F1F1F' },
        { name: 'Gloss White', hex: '#FFFFFF' },
        { name: 'Matte White', hex: '#F1F1EC' },
        { name: 'Clear Gloss', hex: '#D9E6EE' }
      ] },
      { name: 'Removable Vinyl (walls, windows)', label: 'Remov.', hex: '#F1F1EC', match: ['outdoor','window','tumbler','mug','laptop','mailbox','stencil','label'], options: [
        { name: 'Matte White', hex: '#F1F1EC' },
        { name: 'Matte Black', hex: '#1F1F1F' }
      ] },
      { name: 'Paper / Cardstock (color in notes)', hex: '#F3E8D0', kind: 'paper', match: ['paper','card','invitation','topper','banner','garland','gift box','treat bag','luminar','lantern'] }
    ],
    /* Rotary: the vessel is usually supplied by the customer. These powder-coat colors
       only show for tumblers, bottles and can coolers. */
    drinkware: [
      { name: 'Client Supplied Vessel',  hex: 'repeating-linear-gradient(45deg, #222, #222 4px, #444 4px, #444 8px)' }
    ],
    drinkwareColors: [
      { name: 'Matte Black',             hex: '#1E1E1E', match: ['tumbler','bottle','cooler'] },
      { name: 'Gloss White',             hex: '#FFFFFF', match: ['tumbler','bottle','cooler'] },
      { name: 'Lavender Violet',         hex: '#A78BFA', match: ['tumbler','bottle','cooler'] },
      { name: 'Deep Purple',             hex: '#5B21B6', match: ['tumbler','bottle','cooler'] },
      { name: 'Sage Green',              hex: '#6EE7B7', match: ['tumbler','bottle','cooler'] }
    ],
    printAndCut: [
      { name: 'Gloss Vinyl Sticker',     hex: '#E5E7EB', match: ['sticker','label','decal'] },
      { name: 'Matte Vinyl Sticker',     hex: '#9CA3AF', match: ['sticker','label','decal'] },
      { name: 'Clear Vinyl Sticker',     hex: '#CFE8F3', match: ['sticker','label','decal'] },
      { name: 'Paper / Cardstock',       hex: '#F3E8D0', match: ['card','paper','bookmark','banner','topper','tag','insert','invitation','photo print'] },
      { name: 'Transfer / Tattoo Paper', hex: '#F9A8D4', match: ['tattoo'] },
      { name: 'Wood', kind: 'wood', match: ['wood','wooden','plywood','basswood'], hex: '#D2B48C', options: [
        { name: 'Basswood', hex: '#D2B48C' },
        { name: 'Birch Plywood', hex: '#E3C9A0' },
        { name: 'Maple', hex: '#E8D3A9' },
        { name: 'Cherry', hex: '#A0522D' },
        { name: 'Oak', hex: '#B8895A' },
        { name: 'Walnut', hex: '#5C4033' },
        { name: 'Bamboo', hex: '#D9C27F' }
      ] },
      { name: 'Your Own Blank', hex: '#9CA3AF', match: ['blank'] }
    ],
    /* Felt and leather for Cricut / print-and-cut items (shows only when the item name says felt or leather). */
    feltLeather: [
      {
        "name": "Leather (Genuine)",
        "kind": "leather",
        "match": [
          "leather"
        ],
        "hex": "#C19A6B",
        "options": [
          {
            "name": "Veg-Tan Natural",
            "hex": "#C19A6B"
          },
          {
            "name": "Veg-Tan Dark Brown",
            "hex": "#4B2E1E"
          },
          {
            "name": "Chrome-Tan Tan",
            "hex": "#C68E5A"
          },
          {
            "name": "Chrome-Tan Brown",
            "hex": "#6B4423"
          },
          {
            "name": "Chrome-Tan Black",
            "hex": "#141414"
          },
          {
            "name": "Chrome-Tan Burgundy",
            "hex": "#6D1F2C"
          },
          {
            "name": "Chrome-Tan Red",
            "hex": "#A4262C"
          },
          {
            "name": "Chrome-Tan Navy",
            "hex": "#1E2A47"
          },
          {
            "name": "Chrome-Tan Gray",
            "hex": "#6B7280"
          }
        ]
      },
      {
        "name": "Felt",
        "kind": "felt",
        "match": [
          "felt"
        ],
        "hex": "#C0392B",
        "options": [
          {
            "name": "Red",
            "hex": "#C0392B"
          },
          {
            "name": "Burgundy",
            "hex": "#7B1E3A"
          },
          {
            "name": "Pink",
            "hex": "#EC8CB0"
          },
          {
            "name": "Orange",
            "hex": "#F08A24"
          },
          {
            "name": "Yellow",
            "hex": "#F4D03F"
          },
          {
            "name": "Lime Green",
            "hex": "#8BC34A"
          },
          {
            "name": "Forest Green",
            "hex": "#1E6B3A"
          },
          {
            "name": "Teal",
            "hex": "#1B9AAA"
          },
          {
            "name": "Royal Blue",
            "hex": "#2552C4"
          },
          {
            "name": "Navy",
            "hex": "#1B2A4A"
          },
          {
            "name": "Purple",
            "hex": "#7E3FA8"
          },
          {
            "name": "Black",
            "hex": "#111111"
          },
          {
            "name": "White",
            "hex": "#F5F5F5"
          },
          {
            "name": "Gray",
            "hex": "#8A8F98"
          },
          {
            "name": "Cream",
            "hex": "#F2E8CF"
          },
          {
            "name": "Tan",
            "hex": "#C9A66B"
          },
          {
            "name": "Brown",
            "hex": "#6B4226"
          }
        ]
      }
    ],
    /* SPECIFIC MATERIALS. These only show when the item name has the match word
       (an anodized aluminum tag gets aluminum colors and nothing else).
       A machine lists these under "namedPalette". Add a material = add a block here. */
    specialtyMaterials: [
      { name: 'Anodized Aluminum', kind: 'metal', match: ['anodized aluminum','aluminum'], options: [
        { name: 'Black', hex: '#1C1C1E' }, { name: 'Silver', hex: '#C0C4CC' }, { name: 'Gold', hex: '#D4AF37' },
        { name: 'Rose Gold', hex: '#B76E79' }, { name: 'Blue', hex: '#2563EB' }, { name: 'Red', hex: '#B91C1C' },
        { name: 'Green', hex: '#15803D' }, { name: 'Purple', hex: '#7E22CE' }, { name: 'Orange', hex: '#EA580C' }
      ] },
      { name: 'Cork', kind: 'cork', match: ['cork'], hex: '#C8A27A' },
      { name: 'Glass (Frosted Etch)', kind: 'glass', match: ['glass','flute','pint','vase'], hex: 'linear-gradient(135deg,#E0F2FE,#BAE6FD)' },
      { name: 'Chipboard', kind: 'paper', match: ['chipboard'], hex: '#9A8A78' }
    ]
  },

  /* MATCHING NOTES. When someone picks two kinds of material in one item, a short
     note appears under the picks. Plain information only. No sewing.
     'a' and 'b' are lists of kinds (the 'kind' on each color list above).
     Add a rule by copying one line. Remove a line to remove a note. */
  combineNotes: [
    { a: ['acrylic'], b: ['wood'], note: 'Joined with glue or tabs. Fit is checked at quote.' },
    { a: ['leather'], b: ['wood', 'acrylic'], note: 'Leather is glued to the other material. Fit is checked at quote.' },
    { a: ['felt'], b: ['wood', 'acrylic', 'leather'], note: 'Felt is glued on. Fit is checked at quote.' },
    { a: ['pla', 'petg', 'filament'], b: ['wood', 'acrylic', 'leather', 'felt', 'stone', 'blank'], note: 'Printed parts are attached with glue or screws.' },
    { a: ['pla'], b: ['petg'], note: 'Printed in separate parts. Cannot be mixed in one print.' }
  ],

  /* Approved note about affiliate links. It only shows when at least one link
     below is filled in. Edit the words here if you want to change them. */
  affiliateNote: 'Some machine links are affiliate links. If you buy through them, WolfTechLabs may earn a commission at no extra cost to you.',

  /* PROCESSING RULES (shop only, never shown to customers).
     When an order item matches a rule, its steps appear in the "HOW TO MAKE IT" guide in your order email
     and as checklist lines. To add a rule: copy one block and change it.
       name:    what the rule is called
       printed: true = only when the design is printed (inkjet). Leave it out to ignore the method.
       blank:   true = only when the customer supplies the material.
       words:   the item or material must have one of these words (leave out to match any item)
       before:  steps to do BEFORE the main work      after: steps to do AFTER */
  processing: [
    {
      name: 'Printed on wood',
      printed: true,
      words: ['wood', 'plywood', 'basswood', 'birch', 'maple', 'cherry', 'oak', 'walnut', 'bamboo'],
      before: ['Seal the wood with wood sealant first, so the inkjet ink does not bleed. Let it dry.'],
      after:  ['Apply a protective clear coat after printing. Without it the print is not waterproof and the ink can bleed.']
    },
    {
      name: 'Printed on a blank the customer supplies',
      printed: true,
      blank: true,
      before: ['Spray the blank with fixative before printing.', 'Check the blank fits under the laser height limit.']
    }
  ],

  /* YOUR MACHINES. Shown only in the small notice at the very bottom of the page (names plain, or as buttons once a link is added).
     To add an affiliate link: paste it between the quotes in  url: ''
     Leave  url: ''  empty and the name shows as plain text (no link).
     To add a new machine: copy one block, change id and name.
     Machines below connect to products through  equipment: 'id'  further down. */
  equipment: [
    { id: 'xtool-m2',     name: 'xTool M2 (20W Diode Laser, Rotary, CMYK Print)', short: 'xTool M2',     url: '' },
    { id: 'snapmaker-u1', name: 'Snapmaker U1 (4-Tool Multi-Color 3D Printer)',   short: 'Snapmaker U1', url: '' },
    { id: 'prusa-mk4s',   name: 'Prusa MK4S with MMU3',                           short: 'Prusa MK4S',   url: '' },
    { id: 'cricut',       name: 'Cricut Cutting Machine & Heat Press',            short: 'Cricut',       url: '' }
  ],

  /* One block per machine. Order here = order in the dropdown. */
  machines: [

    {
      id: "xtool-flatbed",
      equipment: "xtool-m2",
      name: "Laser Cut & Engrave",
      active: true,
      palette: "laserMaterials",
      namedPalette: "specialtyMaterials",
      groups: [
        {
          label: "Wood Signs & Wall Art",
          items: [
          "Personalized Wood Signs & Multi-Layer Plaques",
          "Layered Wood Portraits",
          "Family Name & Established Signs",
          "Wedding & Event Signs (Welcome, Table Numbers, Seating Charts)",
          "Desk Name Plates & Door Signs",
          "Business Logo Signs & Wall Art",
          "Cork Boards with Engraved Logo",
          "Layered Wood Maps & Skyline Art",
          "Memorial Plaques & Pet Portraits"
          ]
        },
        {
          label: "Keychains, Tags & Jewelry",
          items: [
          "Custom Wood/Acrylic Keychains (Print & Cut)",
          "Pet ID Tags",
          "Luggage & Bag Tags",
          "Wood or Acrylic Earrings",
          "Pendants & Necklaces",
          "Name Badges & Lanyard Tags",
          "Anodized Aluminum Tags & Dog Tags"
          ]
        },
        {
          label: "Home & Kitchen",
          items: [
          "Natural Black Slate Coasters (Set of 4)",
          "Engraved Slate Coasters (Custom Art)",
          "Engraved Wood Coasters (Set)",
          "Slate Cheese & Serving Boards",
          "Engraved Cutting Boards",
          "Serving Trays",
          "Engraved Wooden Spoons & Utensils",
          "Engraved Recipe Cards",
          "Candle Holders & Lantern Boxes",
          "Photo Plaques & Engraved Frames",
          "Phone Stands & Docks",
          "Wood Magnets",
          "Night Light Bases (Wood / Acrylic)"
          ]
        },
        {
          label: "Paper & Stationery",
          items: [
          "Double-Sided Basswood Bookmarks (Custom Etch)",
          "Laser Cut Greeting Cards & Pop-Up Cards",
          "Laser Cut Wedding Invitations",
          "Engraved Journal & Notebook Covers",
          "Wood or Leather Business Cards",
          "Paper Cut Art & Shadow Boxes",
          "Cake Toppers (Wood / Acrylic)"
          ]
        },
        {
          label: "Leather & Felt",
          items: [
          "Laser Cut Leather Patches (Veg-Tan / Chrome)",
          "Leather Hat Patches (Custom Logo)",
          "Leather Keychains & Bag Tags",
          "Leather Journal Covers",
          "Leather Wallets & Card Holders",
          "Leather Coasters",
          "Felt Ornaments & Layered Decorations",
          "Felt Garlands, Flowers & Toys"
          ]
        },
        {
          label: "Boxes, Games & Puzzles",
          items: [
          "1/8\" Basswood Living-Hinge Sleeve [Parts Kit]",
          "Gift & Keepsake Boxes",
          "Jewelry Boxes",
          "Tabletop Gaming: Dice Trays & Dice Boxes",
          "Dice & Miniature Holders",
          "Custom Wood Jigsaw Puzzles",
          "Name Puzzles for Kids",
          "Board Game Pieces, Tokens & Organizers",
          "Book Nooks (Shelf Inserts)",
          "Wood 3D Model & Puzzle Kits"
          ]
        },
        {
          label: "Seasonal & Events",
          items: [
          "Wood / Acrylic Holiday Ornaments",
          "Advent Calendars",
          "Party Favors & Place Cards",
          "Wreath & Garland Letters"
          ]
        },
        {
          label: "Other",
          items: [
          "Something Else (Describe in Notes)"
          ]
        }
      ]
    },

    {
      id: "xtool-rotary",
      equipment: "xtool-m2",
      name: "Drinkware & Round Items (360\u00b0 Etch)",
      active: true,
      palette: ["drinkware", "drinkwareColors"],
      namedPalette: "specialtyMaterials",
      groups: [
        {
          label: "Tumblers & Bottles",
          items: [
          "40oz Powder-Coated Insulated Tumbler (360° Etch)",
          "20oz Skinny Tumbler (Rotary Laser Etched)",
          "30oz Tumbler with Handle & Straw",
          "Stainless Water Bottle (Powder-Coat Etch)",
          "Slim Can Cooler (12oz)",
          "Glow-in-the-Dark Tumbler (40oz)"
          ]
        },
        {
          label: "Glassware",
          items: [
          "Stemless Wine Glass (Frosted Glassware Mark)",
          "Champagne Flutes (Frosted Glassware Mark)",
          "Wedding Toasting Flutes (Pair)",
          "Old Fashioned Whiskey Glasses",
          "Pint Glass or Beer Mug (Frosted Mark)",
          "Can-Shaped Glass Cup"
          ]
        },
        {
          label: "Round & Specialty",
          items: [
          "Candle Tins & Vessels (Custom Etch)",
          "Personalized Embossed Rolling Pins",
          "Engraved Rings (Ring Rotary)",
          "Wood Spheres & Ball Ornaments",
          "Engraved Baseballs & Sports Balls",
          "Engraved Pens & Pencils",
          "Full-Wrap Vase Engraving"
          ]
        },
        {
          label: "Other",
          items: [
          "Something Else (Describe in Notes)"
          ]
        }
      ]
    },

    {
      id: "xtool-print-cut",
      equipment: "xtool-m2",
      name: "Stickers, Cards, Wood & Transfers (Print & Cut)",
      active: true,
      palette: "printAndCut",
      namedPalette: "feltLeather",
      groups: [
        {
          label: "Stickers & Labels",
          items: [
          "Custom Sticker Sheets",
          "Die-Cut Sticker Packs",
          "Holographic Stickers",
          "Product & Jar Labels (Candles, Bottles, Jars)",
          "Packaging Stickers & Thank-You Labels",
          "Planner & Scrapbook Stickers"
          ]
        },
        {
          label: "Cards, Tags & Paper",
          items: [
          "Print & Cut Gift Tags",
          "Full-Color Greeting Cards & Invitations",
          "Cardstock Party Decor (Banners, Toppers)",
          "Printed Cake Toppers",
          "Photo Prints on Cardstock",
          "Full-Color Bookmarks",
          "Packaging Inserts & Business Cards"
          ]
        },
        {
          label: "Tattoos, Felt & Wood",
          items: [
          "Temporary Tattoo Sheets",
          "Printed Felt Appliqués & Ornaments",
          "Full-Color Printed Wood Signs & Photo Plaques"
          ]
        },
        {
          label: "Printed Wood Jewelry & Gifts",
          items: [
          "Printed Wood Earrings",
          "Printed Wood Keychains",
          "Printed Wood Ornaments",
          "Printed Wood Magnets",
          "Printed Wood Coasters",
          "Printed Wood Pendants & Name Plates",
          "Printed Wood Page Markers"
          ]
        },
        {
          label: "Other",
          items: [
          "Print on a Blank You Supply (Limited)",
          "Something Else (Describe in Notes)"
          ]
        }
      ]
    },

    {
      id: "snapmaker-u1",
      equipment: "snapmaker-u1",
      name: "Multi-Color & Multi-Material 3D Printing",
      active: true,
      palette: "filaments",
      groups: [
        {
          label: "Gaming & Hobby",
          items: [
          "Multi-Color Tabletop Gaming Terrain",
          "Custom Multi-Color Miniatures",
          "Dice Towers, Trays & Vaults",
          "Cosplay Props & Accessories",
          "Board Game Inserts & Organizers"
          ]
        },
        {
          label: "Functional & Engineering",
          items: [
          "Overmolded Rigid-Flex Mount (PETG + TPU)",
          "Overmolded Compliant Grips & Handles",
          "Encapsulated Magnetic Hardware Enclosure",
          "Complex Geometry Component (Soluble Support)",
          "Heavy Workshop Tooling, Jigs & Fixtures",
          "Custom Brackets, Mounts & Clips",
          "Replacement Parts (Match to Sample)",
          "Product Prototypes & Mockups",
          "Cable & Desk Organizers",
          "Custom Enclosures & Housings"
          ]
        },
        {
          label: "Assistive & Education",
          items: [
          "Custom Assistive Aid or Adaptive Grip (Describe Need)",
          "Educational Models (Anatomy, Terrain, Mechanical)",
          "Architectural & Scale Models"
          ]
        },
        {
          label: "Gifts & Decor",
          items: [
          "Multi-Color Logo Signs & Desk Plaques",
          "Multi-Color Keychains & Charms",
          "Name & Number Signs",
          "Multi-Color Figurines & Sculptures",
          "Planters & Vases",
          "Holiday Ornaments",
          "Pet Accessories & Tag Holders",
          "Phone Stands",
          "Articulated Animals & Fidget Toys",
          "Rings, Pendants & Printed Jewelry"
          ]
        },
        {
          label: "Other",
          items: [
          "Something Else (Describe in Notes)"
          ]
        }
      ]
    },

    {
      id: "prusa-mk4s",
      equipment: "prusa-mk4s",
      name: "Technical, Abrasive & Multi-Color 3D Prints",
      active: true,
      palette: "filaments",
      groups: [
        {
          label: "Technical & Functional",
          items: [
          "Technical Composite Part (Carbon Fiber / Hardened Nozzle)",
          "Functional Bracket, Mount or Replacement Part",
          "Storage & Organizer (Tool / Spool / Desk)",
          "Workshop Tool Holders & Wall Boards",
          "Heat or Chemical Resistant Part (ASA / ABS)",
          "Product Prototype or Fit-Test Model"
          ]
        },
        {
          label: "Display & Decor",
          items: [
          "Aesthetic Desk Sculpture",
          "Glow-in-the-Dark or Metallic Display Piece",
          "Multi-Color Logo or Name Sign",
          "Vases, Planters & Home Decor",
          "Wall Art & Hooks"
          ]
        },
        {
          label: "Gaming & Gifts",
          items: [
          "Custom Tabletop Gaming Elements & Miniatures",
          "Terrain & Scenery Sets",
          "Dice & Card Accessories",
          "Personalized Keychains",
          "Garden Decor & Plant Markers",
          "Pet Accessories"
          ]
        },
        {
          label: "Other",
          items: [
          "Something Else (Describe in Notes)"
          ]
        }
      ]
    },

    {
      id: "cricut",
      equipment: "cricut",
      name: "Apparel, Vinyl, Stencils & Paper (Heat Press)",
      active: true,
      palette: "vinylAndFabric",
      namedPalette: ["specialtyMaterials", "feltLeather"],
      groups: [
        {
          label: "Apparel & Fabric (Heat Press)",
          items: [
          "Heavyweight Cotton T-Shirt (HTV Precision Cut)",
          "Pullover Fleece Hoodie (Custom Heat-Press Vinyl)",
          "Family or Team Matching Shirts",
          "Baby Onesies & Blankets",
          "Canvas Tote Bag (Heat-Press Vinyl)",
          "Hats & Caps (Heat-Press Vinyl)",
          "Aprons & Kitchen Towels",
          "Printable Iron-On Full-Color Decals",
          "Full-Color Transfer Shirts, Totes & Coasters"
          ]
        },
        {
          label: "Vinyl, Decals & Stencils",
          items: [
          "Permanent Outdoor Decals (Vehicle / Window / Cooler)",
          "Custom Wall or Window Vinyl Lettering",
          "Tumbler & Mug Vinyl Decals",
          "Laptop & Water Bottle Decals",
          "Business Door, Mailbox & Sign Lettering",
          "Custom Paint Stencils & Adhesive Vinyl Masks",
          "Pantry, Storage & Name Labels"
          ]
        },
        {
          label: "Paper & Party",
          items: [
          "Intricate Paper Crafts & Greeting Cards",
          "Pop-Up & Shaker Cards",
          "Party Invitations & Place Cards",
          "Cake & Cupcake Toppers",
          "Banners & Garlands",
          "Paper Flower Wall Decor",
          "Gift Boxes & Treat Bags",
          "Paper Luminaries & Lanterns"
          ]
        },
        {
          label: "Leather, Felt & Wood",
          items: [
          "Leather Earrings & Keychains",
          "Felt Crafts (Headbands, Ornaments, Garlands)",
          "Basswood Ornaments & Name Puzzles",
          "Chipboard Puzzles & Boxes"
          ]
        },
        {
          label: "Other",
          items: [
          "Something Else (Describe in Notes)"
          ]
        }
      ]
    },

    {
      id: "hybrid",
      name: "Custom Hybrid Fabrication (Mixed Machines)",
      active: true,
      palette: ["laserMaterials", "filaments"],
      namedPalette: "specialtyMaterials",
      groups: [
        {
          label: "Hybrid Projects",
          items: [
          "Tapered Living-Hinge Wood & Leather Cup Wrap",
          "Laser Cut Frame with 3D Printed Parts",
          "Wood Base with Printed Multi-Color Topper",
          "Custom Multi-Craft Project (Describe in Notes)"
          ]
        }
      ]
    }

    /* ---- NEW MACHINE TEMPLATE (copy, add a comma after the block above) ----
    ,{
      id: 'my-new-machine',
      name: 'Machine Name: What It Makes',
      active: true,
      palette: 'laserMaterials',
      groups: [
        {
          label: 'First Section',
          items: [
            'First Product',
            'Second Product'
          ]
        }
      ]
    }
    ------------------------------------------------------------------------ */
  ]
};
