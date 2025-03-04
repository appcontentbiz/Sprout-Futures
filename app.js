// All nutritious crops data
const nutritiousCrops = {
    vegetables: [
        {
            name: 'Kale',
            benefits: 'High in vitamins A, C, and K, calcium, and antioxidants',
            icon: '🥬',
            growingInfo: {
                season: 'Spring, Fall',
                plantingTime: 'Early spring or late summer',
                harvestTime: '50-60 days',
                environment: 'Cool, moist soil',
                climate: 'Temperate',
                location: 'Full sun to partial shade'
            }
        },
        {
            name: 'Spinach',
            benefits: 'Packed with iron, folate, and magnesium',
            icon: '🍃',
            growingInfo: {
                season: 'Spring, Fall',
                plantingTime: 'Early spring or late summer',
                harvestTime: '20-30 days',
                environment: 'Cool, moist soil',
                climate: 'Temperate',
                location: 'Full sun to partial shade'
            }
        },
        {
            name: 'Sweet Potatoes',
            benefits: 'Loaded with beta-carotene (vitamin A), fiber, and potassium',
            icon: '🍠',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Late spring to early summer',
                harvestTime: '100-120 days',
                environment: 'Warm, well-drained soil',
                climate: 'Tropical, subtropical',
                location: 'Full sun'
            }
        },
        {
            name: 'Broccoli',
            benefits: 'Rich in vitamins C and K, fiber, and cancer-fighting compounds',
            icon: '🥦',
            growingInfo: {
                season: 'Spring, Fall',
                plantingTime: 'Early spring or late summer',
                harvestTime: '55-65 days',
                environment: 'Cool, moist soil',
                climate: 'Temperate',
                location: 'Full sun to partial shade'
            }
        },
        {
            name: 'Carrots',
            benefits: 'Excellent source of beta-carotene and vitamin A for eye health',
            icon: '🥕',
            growingInfo: {
                season: 'Spring, Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '60-70 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Beets',
            benefits: 'Great for blood circulation, rich in nitrates and folate',
            icon: '🫐',
            growingInfo: {
                season: 'Spring, Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '60-70 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Red Bell Peppers',
            benefits: 'One of the best sources of vitamin C and antioxidants',
            icon: '🫑',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Late spring to early summer',
                harvestTime: '70-80 days',
                environment: 'Warm, well-drained soil',
                climate: 'Tropical, subtropical',
                location: 'Full sun'
            }
        },
        {
            name: 'Garlic',
            benefits: 'Known for immune-boosting and anti-inflammatory properties',
            icon: '🧄',
            growingInfo: {
                season: 'Fall',
                plantingTime: 'Late summer to early fall',
                harvestTime: '90-120 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Brussels Sprouts',
            benefits: 'Packed with vitamin C, fiber, and cancer-fighting compounds',
            icon: '🥬',
            growingInfo: {
                season: 'Fall, Winter',
                plantingTime: 'Late summer to early fall',
                harvestTime: '80-100 days',
                environment: 'Cool, moist soil',
                climate: 'Temperate',
                location: 'Full sun to partial shade'
            }
        },
        {
            name: 'Swiss Chard',
            benefits: 'High in magnesium, iron, and vitamins A and K',
            icon: '🥬',
            growingInfo: {
                season: 'Spring, Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '50-60 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        }
    ],
    fruits: [
        {
            name: 'Blueberries',
            benefits: 'Extremely high in antioxidants and brain-boosting compounds',
            icon: '🫐',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '60-90 days',
                environment: 'Acidic, well-drained soil',
                climate: 'Temperate',
                location: 'Full sun to partial shade'
            }
        },
        {
            name: 'Avocados',
            benefits: 'Healthy fats, fiber, and nearly 20 essential vitamins and minerals',
            icon: '🥑',
            growingInfo: {
                season: 'Spring, Summer',
                plantingTime: 'Late winter to early spring',
                harvestTime: '120-180 days',
                environment: 'Well-drained, loose soil',
                climate: 'Tropical, subtropical',
                location: 'Full sun'
            }
        },
        {
            name: 'Blackberries',
            benefits: 'Rich in vitamin C, fiber, and polyphenols',
            icon: '🫐',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '60-90 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Papaya',
            benefits: 'High in vitamin C, digestive enzymes, and beta-carotene',
            icon: '🍈',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Late spring to early summer',
                harvestTime: '100-120 days',
                environment: 'Well-drained, loose soil',
                climate: 'Tropical',
                location: 'Full sun'
            }
        },
        {
            name: 'Pomegranate',
            benefits: 'Loaded with antioxidants and heart-healthy polyphenols',
            icon: '🍎',
            growingInfo: {
                season: 'Fall',
                plantingTime: 'Late winter to early spring',
                harvestTime: '120-180 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Oranges',
            benefits: 'Excellent vitamin C source for immunity and skin health',
            icon: '🍊',
            growingInfo: {
                season: 'Winter',
                plantingTime: 'Late winter to early spring',
                harvestTime: '120-180 days',
                environment: 'Well-drained, loose soil',
                climate: 'Tropical, subtropical',
                location: 'Full sun'
            }
        },
        {
            name: 'Bananas',
            benefits: 'Potassium-rich and great for energy',
            icon: '🍌',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Late spring to early summer',
                harvestTime: '100-120 days',
                environment: 'Well-drained, loose soil',
                climate: 'Tropical',
                location: 'Full sun'
            }
        },
        {
            name: 'Strawberries',
            benefits: 'High in vitamin C and antioxidants',
            icon: '🍓',
            growingInfo: {
                season: 'Spring, Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '60-90 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Cherries',
            benefits: 'Anti-inflammatory properties and melatonin for sleep regulation',
            icon: '🍒',
            growingInfo: {
                season: 'Summer',
                plantingTime: 'Early spring to late spring',
                harvestTime: '60-90 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        },
        {
            name: 'Grapes',
            benefits: 'Contain resveratrol, which supports heart health',
            icon: '🍇',
            growingInfo: {
                season: 'Summer, Fall',
                plantingTime: 'Early spring to late spring',
                harvestTime: '100-120 days',
                environment: 'Well-drained, loose soil',
                climate: 'Temperate',
                location: 'Full sun'
            }
        }
    ]
};

// Quick-return crops data
const quickCrops = [
    {
        name: 'Microgreens',
        type: 'Quick Income',
        growTime: '7-21 days',
        space: '100+ sq ft',
        investment: '$1,500+',
        monthlyProfit: '$4,500-$8,500',
        description: 'Perfect for indoor growing with quick returns',
        targets: ['Restaurants', 'Farmers Markets', 'Health Stores'],
        icon: '🌱'
    },
    {
        name: 'Mushrooms',
        type: 'Fast Growth',
        growTime: '3-6 weeks',
        space: '100+ sq ft',
        investment: '$2,000+',
        monthlyProfit: '$1,500-$2,500',
        description: 'High-demand specialty crop with indoor growing potential',
        targets: ['Restaurants', 'Health Stores', 'Direct Consumers'],
        icon: '🍄'
    },
    {
        name: 'Radishes',
        type: 'Quick Harvest',
        growTime: '20-30 days',
        space: '50+ sq ft',
        investment: '$500+',
        monthlyProfit: '$800-$1,500',
        description: 'Fast-growing root vegetable with consistent demand',
        targets: ['Farmers Markets', 'CSA Programs', 'Local Stores'],
        icon: '🥬'
    },
    {
        name: 'Lettuce',
        type: 'Continuous Harvest',
        growTime: '30-50 days',
        space: '100+ sq ft',
        investment: '$1,000+',
        monthlyProfit: '$1,000-$2,000',
        description: 'Popular salad green with year-round demand',
        targets: ['Restaurants', 'Markets', 'Direct Sales'],
        icon: '🥬'
    },
    {
        name: 'Baby Spinach',
        type: 'Quick Harvest',
        growTime: '25-35 days',
        space: '75+ sq ft',
        investment: '$800+',
        monthlyProfit: '$1,200-$2,200',
        description: 'High-value salad green with excellent nutritional profile',
        targets: ['Health Food Stores', 'Restaurants', 'Farmers Markets'],
        icon: '🍃'
    },
    {
        name: 'Green Onions',
        type: 'Continuous Harvest',
        growTime: '21-28 days',
        space: '50+ sq ft',
        investment: '$400+',
        monthlyProfit: '$600-$1,200',
        description: 'Fast-growing herb with multiple harvests and low maintenance',
        targets: ['Restaurants', 'Grocery Stores', 'Farmers Markets'],
        icon: '🧅'
    }
];

// Equipment data
const equipment = {
    indoor: [
        {
            name: 'Growing Racks',
            description: 'Metal shelving racks with 5 levels',
            cost: '$120 per rack',
            icon: '🏗️',
            details: [
                'Heavy-duty construction',
                'Adjustable shelving',
                'Easy assembly',
                'Multiple size options'
            ]
        },
        {
            name: 'LED Grow Lights',
            description: 'Full-spectrum LED lighting system',
            cost: '$40 per shelf',
            icon: '💡',
            details: [
                'Energy efficient',
                'Optimal spectrum for plant growth',
                'Long lifespan',
                'Low heat emission'
            ]
        },
        {
            name: 'Climate Control',
            description: 'Temperature and humidity management',
            cost: '$200-$1,000',
            icon: '🌡️',
            details: [
                'Programmable thermostats',
                'Humidity controllers',
                'Air circulation fans',
                'Environmental monitoring'
            ]
        },
        {
            name: 'Irrigation System',
            description: 'Automated watering solution',
            cost: '$150-$500',
            icon: '💧',
            details: [
                'Timer-controlled watering',
                'Drip irrigation',
                'Water filtration',
                'Nutrient delivery'
            ]
        }
    ],
    outdoor: [
        {
            name: 'Drip Irrigation',
            description: 'Water-efficient irrigation system',
            cost: '$500-$2,000',
            icon: '💧',
            details: [
                'Water conservation',
                'Automated scheduling',
                'Even distribution',
                'Low maintenance'
            ]
        },
        {
            name: 'Raised Beds',
            description: 'Elevated growing spaces',
            cost: '$100 per 4x8 ft bed',
            icon: '🌱',
            details: [
                'Better soil control',
                'Improved drainage',
                'Ergonomic design',
                'Long-lasting construction'
            ]
        },
        {
            name: 'Storage Solutions',
            description: 'Tool and equipment storage',
            cost: '$500-$2,000',
            icon: '🏠',
            details: [
                'Weather protection',
                'Organized storage',
                'Security features',
                'Easy access'
            ]
        },
        {
            name: 'Basic Tools',
            description: 'Essential farming implements',
            cost: '$300-$1,000',
            icon: '🔧',
            details: [
                'Hand tools',
                'Power tools',
                'Safety equipment',
                'Maintenance supplies'
            ]
        }
    ]
};

// Education resources with links
const educationResources = {
    degrees: [
        {
            school: "Oregon State University",
            program: "B.S. in Agricultural Sciences",
            link: "#"
        },
        {
            school: "University of Massachusetts",
            program: "Sustainable Food & Farming",
            link: "#"
        },
        {
            school: "Texas Tech University",
            program: "Plant and Soil Science",
            link: "#"
        },
        {
            school: "Colorado State University",
            program: "Master's in Agriculture",
            link: "#"
        }
    ],
    certificates: [
        {
            school: "Cornell University",
            program: "Organic Agriculture Certificate",
            link: "#"
        },
        {
            school: "Penn State",
            program: "Agricultural Business Management",
            link: "#"
        },
        {
            school: "University of Florida",
            program: "Agronomy & Crop Production",
            link: "#"
        }
    ]
};

// Render Education Resources
function renderEducationResources() {
    const educationOptions = document.getElementById('educationOptions');
    const activeType = document.querySelector('.education-tabs .tab-button.active').dataset.type;
    
    if (!educationOptions || !activeType) return;

    educationOptions.innerHTML = educationResources[activeType]
        .map(item => `
            <div class="education-card">
                <div class="education-header">
                    <span class="education-icon">${activeType === 'degrees' ? '🎓' : '📜'}</span>
                    <h3>${item.school}</h3>
                </div>
                <p class="program-name">${item.program}</p>
                <a href="${item.link}" class="learn-more">Learn More →</a>
            </div>
        `).join('');
}

// Financial Stability Crops Data
const stableCrops = [
    {
        name: 'Microgreens',
        category: 'Quick Income',
        profitPotential: 'Very High',
        timeToProfit: 'Immediate',
        markets: ['Restaurants', 'Markets', 'Online'],
        details: 'High-value product with quick returns and premium pricing',
        icon: '🌱'
    },
    {
        name: 'Mushrooms',
        category: 'Quick Income',
        profitPotential: 'High',
        timeToProfit: 'Short-term',
        markets: ['Restaurants', 'Health Stores', 'Markets'],
        details: 'Low cost to grow, high market price, continuous harvests',
        icon: '🍄'
    },
    {
        name: 'Garlic',
        category: 'Mid-term',
        profitPotential: 'High',
        timeToProfit: 'Medium-term',
        markets: ['Fresh Markets', 'Processing', 'Direct Sales'],
        details: 'Premium prices for fresh and processed products',
        icon: '🧄'
    },
    {
        name: 'Herbs',
        category: 'Quick Income',
        profitPotential: 'High',
        timeToProfit: 'Short-term',
        markets: ['Restaurants', 'Markets', 'Direct Sales'],
        details: 'Fast-growing, low maintenance, high-profit margins',
        icon: '🌿'
    },
    {
        name: 'Berries',
        category: 'Long-term',
        profitPotential: 'Very High',
        timeToProfit: 'Long-term',
        markets: ['Fresh Markets', 'Processing', 'Direct Sales'],
        details: 'Multiple revenue streams: fresh, frozen, dried',
        icon: '🫐'
    },
    {
        name: 'Avocados',
        category: 'Long-term',
        profitPotential: 'Very High',
        timeToProfit: 'Long-term',
        markets: ['Fresh Markets', 'Restaurants', 'Export'],
        details: 'High market value, especially for organic varieties',
        icon: '🥑'
    },
    {
        name: 'Pomegranates',
        category: 'Long-term',
        profitPotential: 'High',
        timeToProfit: 'Long-term',
        markets: ['Fresh Markets', 'Juice Industry', 'Export'],
        details: 'Drought-tolerant with premium pricing potential',
        icon: '🍎'
    },
    {
        name: 'Leafy Greens',
        category: 'Quick Income',
        profitPotential: 'High',
        timeToProfit: 'Short-term',
        markets: ['Restaurants', 'Markets', 'CSA'],
        details: 'Continuous harvest and high consumer demand',
        icon: '🥬'
    },
    {
        name: 'Exotic Fruits',
        category: 'Mid-term',
        profitPotential: 'Very High',
        timeToProfit: 'Medium-term',
        markets: ['Specialty Markets', 'Online', 'Direct Sales'],
        details: 'Premium pricing in health-conscious markets',
        icon: '🍈'
    },
    {
        name: 'Hydroponic Vegetables',
        category: 'Quick Income',
        profitPotential: 'High',
        timeToProfit: 'Short-term',
        markets: ['Restaurants', 'Markets', 'Direct Sales'],
        details: 'Higher yields and year-round production',
        icon: '🥬'
    }
];

// Marketing Strategies Data
const marketingStrategies = {
    microgreens: {
        title: "Microgreens (Fast Cash Flow)",
        targetMarkets: [
            "Restaurants & Chefs (fine dining, farm-to-table)",
            "Farmers' Markets & Direct-to-Consumer",
            "Juice Bars & Smoothie Shops",
            "Grocery Stores (organic sections & specialty stores)",
            "Health-Conscious Consumers (via online sales or local subscription boxes)"
        ],
        salesStrategy: [
            "Offer free samples to local chefs—once they love it, they'll buy weekly",
            "Sell directly to consumers via online orders or farmers' markets",
            "Use a subscription box model (weekly deliveries of fresh greens)",
            "Offer custom blends (e.g., spicy mix, salad mix) for restaurants",
            "Start a CSA (Community Supported Agriculture) Microgreens Box at $25–$50 per month"
        ],
        valueAdded: [
            "Pre-packaged salad kits (mix different greens)",
            "Dehydrated microgreens for powders (high-nutrition add-ons for smoothies)",
            "Subscription-based microgreens service for local families & fitness enthusiasts"
        ]
    },
    mushrooms: {
        title: "Mushrooms (Fast Growth & High Demand)",
        targetMarkets: [
            "Farmers' Markets & Direct-to-Consumer",
            "Gourmet & Organic Grocery Stores",
            "Health & Wellness Shops",
            "Restaurants (especially Asian, vegan, and gourmet cuisines)",
            "Supplement & Medicinal Markets (Lion's Mane & Reishi Mushrooms for brain health & immunity)"
        ],
        salesStrategy: [
            "Approach high-end chefs & restaurants who pay premium prices for fresh mushrooms",
            "Sell dried mushrooms (high demand for soup and supplement markets)",
            "Offer pre-made mushroom grow kits for DIY mushroom growing at home",
            "Use subscription models for dried or fresh mushrooms",
            "Work with health & supplement stores for functional mushrooms (Reishi, Lion's Mane)"
        ],
        valueAdded: [
            "Mushroom-based health supplements (powders, extracts, capsules)",
            "Pre-packaged gourmet mushroom meal kits (think Blue Apron-style)",
            "Mushroom-infused coffee or teas (huge wellness market trend)"
        ]
    },
    garlic: {
        title: "Garlic & Herbs (Mid-Term Stability)",
        targetMarkets: [
            "Grocery Stores (Organic & Specialty Sections)",
            "Restaurants & Caterers",
            "Herbal Medicine & Supplement Companies",
            "Local Farmers' Markets & Subscription Boxes",
            "Garlic Powder & Seasoning Companies"
        ],
        salesStrategy: [
            "Bundle garlic & herb sales together—chefs love having a one-stop shop",
            "Sell fresh, dried, and powdered garlic to maximize revenue",
            "Offer small herb planters for direct-to-consumer sales",
            "Develop DIY herb growing kits for people who want fresh herbs at home",
            "Target gourmet seasoning companies who will buy in bulk"
        ],
        valueAdded: [
            "Herb-infused oils & vinegars",
            "Pre-mixed garlic seasoning blends",
            "Dehydrated garlic for long shelf life & wider distribution",
            "Pre-potted herbs for 'ready-to-use' fresh herb gardens at home"
        ]
    },
    berries: {
        title: "Berries & Avocados (Long-Term Stability & Passive Income)",
        targetMarkets: [
            "Grocery Stores (Organic & Conventional)",
            "Smoothie Shops & Juice Bars",
            "Frozen Fruit & Dried Fruit Manufacturers",
            "Meal Kit Subscription Services",
            "Bakeries & Dessert Shops"
        ],
        salesStrategy: [
            "Partner with local smoothie shops & juice bars for fresh fruit supply contracts",
            "Sell pre-packaged fresh & frozen berries for direct-to-consumer sales",
            "Sell avocados wholesale to grocery chains & high-end restaurants",
            "Use U-Pick Farm Experiences for agritourism revenue",
            "Sell berry jams, dried berries, & frozen berry packs for year-round sales"
        ],
        valueAdded: [
            "Premium cold-pressed avocado oil for high-end culinary use",
            "Freeze-dried berries for snacks & baking",
            "Avocado-based skincare products (moisturizers, hair treatments)",
            "Berry-infused kombucha & health drinks"
        ]
    }
};

// Budget Recommendations Data
const budgetRecommendations = {
    small: {
        title: "Small Budget (Under $5,000)",
        bestCrops: ["Microgreens", "Mushrooms", "Garlic & Herbs"],
        reasoning: "Low setup costs, quick returns, and minimal land requirements.",
        strategy: [
            "Start with microgreens (small space, fast cash flow)",
            "Add mushrooms for high-value sales with minimal extra costs",
            "Expand into garlic & herbs as capital grows",
            "Sell at local farmers' markets, online, and directly to restaurants"
        ],
        projectedIncome: {
            title: "Projected Income (Year 1)",
            items: [
                {
                    crop: "Microgreens",
                    income: "$5,000–$10,000/month"
                },
                {
                    crop: "Mushrooms",
                    income: "$2,000–$3,000/month"
                },
                {
                    crop: "Garlic & Herbs",
                    income: "$22,000–$50,000/year"
                }
            ]
        }
    },
    medium: {
        title: "Medium Budget ($10,000–$30,000)",
        bestCrops: ["Microgreens", "Mushrooms", "Garlic & Herbs", "Berries"],
        reasoning: "Adds long-term berry production for recurring income.",
        strategy: [
            "Start microgreens & mushrooms for quick cash flow",
            "Plant garlic & herbs to expand into packaged seasonings/oils",
            "Invest in berry bushes (¼ acre minimum) for long-term stability",
            "Market through direct-to-consumer subscription boxes & wholesale grocery sales"
        ],
        projectedIncome: {
            title: "Projected Income (Year 2–3)",
            items: [
                {
                    crop: "Microgreens & Mushrooms",
                    income: "$8,000–$15,000/month"
                },
                {
                    crop: "Garlic & Herbs",
                    income: "$30,000+/year"
                },
                {
                    crop: "Berries",
                    income: "$50,000+/year"
                }
            ]
        }
    },
    high: {
        title: "High Budget ($50,000+)",
        bestCrops: ["Microgreens", "Mushrooms", "Garlic & Herbs", "Berries", "Avocados"],
        reasoning: "Long-term investment with high revenue potential.",
        strategy: [
            "Scale microgreens/mushrooms to wholesale level",
            "Grow garlic & herbs commercially (multiple acres)",
            "Dedicate 1+ acres to berries & avocado trees",
            "Sell value-added products (freeze-dried berries, avocado oil, herb-infused seasonings)",
            "Market through grocery chains, large-scale food distributors, and direct-to-consumer online sales"
        ],
        projectedIncome: {
            title: "Projected Income (Year 5+)",
            items: [
                {
                    crop: "Microgreens/Mushrooms",
                    income: "$10,000–$20,000/month"
                },
                {
                    crop: "Garlic & Herbs",
                    income: "$50,000–$100,000/year"
                },
                {
                    crop: "Berries",
                    income: "$100,000+/year"
                },
                {
                    crop: "Avocados",
                    income: "$50,000–$80,000/year"
                }
            ]
        }
    }
};

// Edible Flowers Data
const edibleFlowers = [
    {
        name: "Moringa",
        scientific: "Moringa oleifera",
        icon: "🌿",
        rank: 1,
        why: "Called the \"Miracle Tree,\" moringa is packed with protein, iron, calcium, vitamin C, and antioxidants.",
        benefits: "Supports immune function, reduces inflammation, and is a natural energy booster.",
        growing: {
            climate: "Warm, tropical to subtropical",
            environment: "Grows well outdoors in warm climates but can be potted indoors",
            harvestTime: "6-8 months after planting"
        }
    },
    {
        name: "Nasturtium",
        scientific: "Tropaeolum majus",
        icon: "🌼",
        rank: 2,
        why: "High in vitamin C, lutein, and anti-microbial compounds.",
        benefits: "Natural antibiotic, boosts vision health, and improves immunity.",
        growing: {
            climate: "Temperate, frost-sensitive",
            environment: "Both; thrives in containers",
            harvestTime: "Flowers appear within 8-12 weeks"
        }
    },
    {
        name: "Hibiscus",
        scientific: "Hibiscus sabdariffa",
        icon: "🌸",
        rank: 3,
        why: "Rich in antioxidants, vitamin C, and flavonoids.",
        benefits: "Lowers blood pressure, aids digestion, and is great for skin health.",
        growing: {
            climate: "Warm, tropical",
            environment: "Best outdoors but can be container-grown indoors",
            harvestTime: "4-6 months for flowers"
        }
    },
    {
        name: "Rose",
        scientific: "Rosa spp.",
        icon: "🌺",
        rank: 4,
        why: "Petals contain vitamin C and polyphenols.",
        benefits: "Anti-inflammatory, relieves stress, and improves skin health.",
        growing: {
            climate: "Mild to warm",
            environment: "Can be grown indoors in pots",
            harvestTime: "12-18 months for the first full bloom"
        }
    },
    {
        name: "Dandelion",
        scientific: "Taraxacum officinale",
        icon: "🌿",
        rank: 5,
        why: "Leaves are rich in vitamin A, C, K, and iron.",
        benefits: "Supports liver function, detoxifies blood, and helps digestion.",
        growing: {
            climate: "Any; very hardy",
            environment: "Outdoor preferred, but can grow indoors",
            harvestTime: "2-3 months"
        }
    },
    {
        name: "Chamomile",
        scientific: "Matricaria chamomilla",
        icon: "🌸",
        rank: 6,
        why: "High in antioxidants, flavonoids, and anti-inflammatory compounds.",
        benefits: "Aids sleep, digestion, and reduces stress.",
        growing: {
            climate: "Temperate, grows well in most conditions",
            environment: "Great for pots and outdoor gardens",
            harvestTime: "6-8 weeks after planting"
        }
    },
    {
        name: "Lavender",
        scientific: "Lavandula spp.",
        icon: "🌺",
        rank: 7,
        why: "Contains linalool, an antimicrobial and stress-reducing compound.",
        benefits: "Aids relaxation, reduces headaches, and improves skin health.",
        growing: {
            climate: "Mediterranean, prefers dry, warm conditions",
            environment: "Best grown outdoors but can thrive indoors with ample light",
            harvestTime: "3 months"
        }
    },
    {
        name: "Calendula",
        scientific: "Calendula officinalis",
        icon: "🌸",
        rank: 8,
        why: "Rich in beta-carotene, flavonoids, and antioxidants.",
        benefits: "Anti-inflammatory, boosts skin health, and supports wound healing.",
        growing: {
            climate: "Cool-season plant, thrives in temperate areas",
            environment: "Great for gardens and containers",
            harvestTime: "2-3 months"
        }
    },
    {
        name: "Alfalfa Sprouts",
        scientific: "Medicago sativa",
        icon: "🌱",
        rank: 9,
        why: "High in protein, vitamin K, and phytoestrogens.",
        benefits: "Supports bone health and balances hormones.",
        growing: {
            climate: "Indoor hydroponics or temperate climate",
            environment: "Best grown indoors",
            harvestTime: "7-10 days"
        }
    },
    {
        name: "Clover",
        scientific: "Trifolium spp.",
        icon: "🍀",
        rank: 10,
        why: "Contains isoflavones that help with inflammation and blood circulation.",
        benefits: "Supports heart health and reduces menopausal symptoms.",
        growing: {
            climate: "Hardy and grows anywhere",
            environment: "Best grown outdoors",
            harvestTime: "8-12 weeks"
        }
    }
];

const additionalFlowers = [
    { 
        name: "Borage",
        scientific: "Borago officinalis",
        benefit: "High in Omega-6, reduces stress"
    },
    { 
        name: "Sunflower",
        scientific: "Helianthus annuus",
        benefit: "Seeds rich in vitamin E, good for heart health"
    },
    { 
        name: "Elderflower",
        scientific: "Sambucus nigra",
        benefit: "Supports respiratory health"
    },
    { 
        name: "Chrysanthemum",
        scientific: "Chrysanthemum morifolium",
        benefit: "Anti-inflammatory properties"
    },
    { 
        name: "Pansy",
        scientific: "Viola tricolor",
        benefit: "Helps reduce colds and sore throats"
    },
    { 
        name: "Marjoram",
        scientific: "Origanum majorana",
        benefit: "Aids digestion, good for gut health"
    },
    { 
        name: "Thyme",
        scientific: "Thymus vulgaris",
        benefit: "Natural antibiotic, boosts immunity"
    },
    { 
        name: "Mint",
        scientific: "Mentha spp.",
        benefit: "Relieves digestive issues and headaches"
    },
    { 
        name: "Lemon Balm",
        scientific: "Melissa officinalis",
        benefit: "Helps anxiety and boosts focus"
    },
    { 
        name: "Fennel Flowers",
        scientific: "Foeniculum vulgare",
        benefit: "Supports digestion, high in fiber"
    },
    { 
        name: "Basil (Purple & Sweet)",
        scientific: "Ocimum basilicum",
        benefit: "Anti-inflammatory, improves heart health"
    },
    { 
        name: "Clover Blossoms",
        scientific: "Trifolium pratense",
        benefit: "Good for hormone balance"
    },
    { 
        name: "Saffron",
        scientific: "Crocus sativus",
        benefit: "High in antioxidants, boosts mood"
    },
    { 
        name: "Yarrow",
        scientific: "Achillea millefolium",
        benefit: "Aids wound healing, good for the immune system"
    },
    { 
        name: "Peppermint",
        scientific: "Mentha × piperita",
        benefit: "Aids digestion and relieves nausea"
    }
];

// Financial and Growth Data
const fastGrowingCrops = [
    {
        name: "Microgreens",
        varieties: ["Alfalfa", "Clover", "Basil", "Sunflower Sprouts", "Pea Shoots"],
        growthTime: "7-14 days",
        why: "Can be grown indoors year-round and harvested multiple times per month.",
        marketDemand: "High demand in restaurants, health-conscious consumers, and farmers' markets.",
        bestFor: "Quick cash flow, small indoor setups"
    },
    {
        name: "Nasturtium",
        scientific: "Tropaeolum majus",
        growthTime: "8-12 weeks for flowers and leaves",
        why: "Grows fast and sells well as a gourmet garnish and edible flower.",
        marketDemand: "High-end restaurants, bakeries, florists.",
        bestFor: "Indoor or outdoor, fresh flower markets"
    },
    {
        name: "Chamomile",
        scientific: "Matricaria chamomilla",
        growthTime: "6-8 weeks",
        why: "Easy to dry and sell as a tea herb.",
        marketDemand: "Herbal tea industry, natural health markets.",
        bestFor: "Home-based herb farming, tea brands"
    }
];

const financiallyStableCrops = [
    {
        name: "Saffron",
        scientific: "Crocus sativus",
        nickname: "Gold of Spices",
        growthTime: "6-8 months",
        marketPrice: "$500-$5,000 per pound",
        why: "Low input, high returns, long shelf life.",
        bestFor: "High-end culinary, medicinal, and cosmetics industries"
    },
    {
        name: "Moringa",
        scientific: "Moringa oleifera",
        nickname: "Miracle Tree",
        growthTime: "6-8 months",
        marketDemand: "Superfood industry (powders, oils, supplements)",
        why: "Every part of the plant (leaves, seeds, oil) can be sold, creating multiple income streams.",
        bestFor: "Large-scale organic farming, health-focused markets"
    },
    {
        name: "Lavender",
        scientific: "Lavandula spp.",
        growthTime: "3-4 months (first harvest, then annual yields)",
        marketDemand: "Aromatherapy, skincare, culinary, and medicinal uses",
        why: "Dried flowers and essential oils have long shelf life and high market value.",
        bestFor: "Sustainable farming, high-end herbal and cosmetic industries"
    },
    {
        name: "Mushrooms",
        varieties: ["Lion's Mane", "Oyster", "Shiitake"],
        growthTime: "3-8 weeks",
        marketDemand: "High demand in gourmet cooking, medicine, and supplements",
        why: "Low space requirements and high yield per square foot.",
        bestFor: "Indoor farming, small space operations, year-round income"
    },
    {
        name: "Elderflower",
        scientific: "Sambucus nigra",
        growthTime: "2-3 years for full production",
        marketDemand: "Herbal medicine, syrup, wine, and skincare",
        why: "High-value niche product with strong demand.",
        bestFor: "Boutique herbal markets, tea and syrup brands"
    }
];

// Value-Added Products Data
const valueAddedProducts = {
    lavender: {
        name: "Lavender",
        scientific: "Lavandula spp.",
        product: "Lavender-Infused Honey",
        icon: "🍯",
        why: "Lavender is widely used in aromatherapy, herbal remedies, and gourmet food production. Lavender honey is a luxury product with high market demand.",
        ingredients: [
            "1 cup dried organic lavender flowers",
            "1 quart raw honey"
        ],
        process: [
            "Place the dried lavender flowers in a clean, dry jar",
            "Pour raw honey over the flowers, ensuring they are fully submerged",
            "Seal the jar and let it infuse for 2–3 weeks in a warm, dark place, stirring occasionally",
            "Strain the honey through cheesecloth into a clean jar"
        ],
        sellAt: ["Farmers' markets", "Specialty food stores", "Online gourmet shops"]
    },
    chamomile: {
        name: "Chamomile",
        scientific: "Matricaria chamomilla",
        product: "Chamomile & Mint Sleep Tea",
        icon: "🫖",
        why: "Chamomile is known for its calming effects and is one of the most popular herbal teas.",
        ingredients: [
            "1 cup dried chamomile flowers",
            "½ cup dried peppermint leaves",
            "½ cup dried lemon balm"
        ],
        process: [
            "Mix all dried herbs in a bowl",
            "Store in airtight glass jars or paper tea bags",
            "To brew, steep 1 tablespoon of the blend in hot water for 5 minutes"
        ],
        sellAt: ["Direct-to-consumer sales at farmers' markets", "Online shops", "Wellness subscription boxes"]
    },
    nasturtium: {
        name: "Nasturtium",
        scientific: "Tropaeolum majus",
        product: "Nasturtium Leaf & Flower Pesto",
        icon: "🌿",
        why: "Nasturtium has a peppery, spicy flavor that makes it a unique ingredient in gourmet sauces.",
        ingredients: [
            "2 cups fresh nasturtium leaves",
            "½ cup fresh nasturtium flowers",
            "½ cup olive oil",
            "¼ cup pine nuts or walnuts",
            "1 clove garlic",
            "½ cup grated Parmesan cheese"
        ],
        process: [
            "Blend all ingredients in a food processor until smooth",
            "Store in glass jars and refrigerate"
        ],
        sellAt: ["High-end grocery stores", "Online specialty food shops", "Direct farm sales"]
    },
    elderflower: {
        name: "Elderflower",
        scientific: "Sambucus nigra",
        product: "Elderflower Syrup",
        icon: "🥤",
        why: "Elderflower syrup is a luxury ingredient in cocktails, lemonades, and desserts.",
        ingredients: [
            "20 fresh elderflower clusters",
            "4 cups water",
            "4 cups sugar",
            "2 organic lemons, sliced"
        ],
        process: [
            "Boil water and dissolve sugar to make a syrup",
            "Add elderflowers and lemon slices, then let steep overnight",
            "Strain and bottle in sterilized glass bottles"
        ],
        sellAt: ["Beverage companies", "Gourmet food stores", "Online specialty retailers"]
    },
    moringa: {
        name: "Moringa",
        scientific: "Moringa oleifera",
        product: "Moringa Leaf Powder",
        icon: "🍃",
        why: "Moringa is a superfood packed with vitamins and minerals.",
        ingredients: [
            "Fresh moringa leaves"
        ],
        process: [
            "Harvest and wash fresh moringa leaves",
            "Dry in a dehydrator or air-dry in a shaded area",
            "Grind into a fine powder using a food processor or spice grinder",
            "Store in airtight containers"
        ],
        sellAt: ["Online health stores", "Direct-to-consumer", "Supplement manufacturers"]
    },
    saffron: {
        name: "Saffron",
        scientific: "Crocus sativus",
        product: "Saffron Face Oil",
        icon: "✨",
        why: "Saffron is prized for its antioxidant properties and is used in luxury skincare.",
        ingredients: [
            "1 gram saffron threads",
            "1 cup jojoba or sweet almond oil"
        ],
        process: [
            "Crush saffron threads and add to oil",
            "Let infuse in a sealed jar for 2–4 weeks in a dark place",
            "Strain and bottle"
        ],
        sellAt: ["Online beauty retailers", "High-end wellness boutiques", "Direct sales"]
    }
};

const tincturesInfo = {
    title: "Making Herbal Tinctures",
    icon: "🌿",
    description: "A tincture is a concentrated herbal extract made by soaking plant material in alcohol or another solvent. The solvent extracts the active compounds from the plant, creating a potent liquid used for medicinal or therapeutic purposes.",
    process: [
        "Harvest the Plant Material – Fresh or dried herbs are used (e.g., chamomile, lavender, elderflower, moringa)",
        "Soak in Alcohol or Solvent – Typically, high-proof alcohol (like vodka or brandy) is used, but glycerin (for alcohol-free tinctures) or apple cider vinegar can also work",
        "Steep for Several Weeks – The mixture is stored in a glass jar for 2-6 weeks, shaken occasionally",
        "Strain and Bottle – The liquid is filtered, leaving behind a highly concentrated herbal tincture"
    ],
    uses: [
        {
            category: "Medicinal",
            examples: "Used for stress relief (lavender), sleep aid (chamomile), or immune support (elderflower, moringa)"
        },
        {
            category: "Culinary",
            examples: "Can be added to drinks, teas, or recipes for herbal flavoring"
        },
        {
            category: "Skincare",
            examples: "Used in organic beauty products for natural healing benefits"
        }
    ]
};

const profitabilityTips = [
    {
        channel: "Farmers' markets",
        description: "Sell small-batch artisanal products",
        icon: "🏪"
    },
    {
        channel: "E-commerce platforms",
        description: "Reach global buyers through Etsy, Shopify",
        icon: "🌐"
    },
    {
        channel: "Wholesale distribution",
        description: "Partner with specialty retailers",
        icon: "📦"
    },
    {
        channel: "Subscription boxes",
        description: "Offer seasonal farm-based products",
        icon: "📬"
    }
];

// Render Value-Added Products
function renderValueAddedProducts() {
    const productsContainer = document.getElementById('valueAddedProducts');
    if (!productsContainer) return;

    productsContainer.innerHTML = Object.values(valueAddedProducts)
        .map(product => `
            <div class="product-card">
                <div class="product-header">
                    <span class="product-icon">${product.icon}</span>
                    <div>
                        <h3>${product.name}</h3>
                        <p class="scientific-name">${product.scientific}</p>
                    </div>
                </div>
                <div class="product-content">
                    <h4>${product.product}</h4>
                    <p class="why-text">${product.why}</p>
                    
                    <h5>Ingredients:</h5>
                    <ul class="ingredients-list">
                        ${product.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>

                    <h5>Process:</h5>
                    <ol class="process-list">
                        ${product.process.map(step => `<li>${step}</li>`).join('')}
                    </ol>

                    <h5>Where to Sell:</h5>
                    <ul class="sell-at-list">
                        ${product.sellAt.map(place => `<li>${place}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');

    productsContainer.insertAdjacentHTML('beforeend', `
        <div class="tinctures-section">
            <div class="product-card tincture-card">
                <div class="product-header">
                    <span class="product-icon">${tincturesInfo.icon}</span>
                    <div>
                        <h3>${tincturesInfo.title}</h3>
                    </div>
                </div>
                <div class="product-content">
                    <p class="why-text">${tincturesInfo.description}</p>
                    
                    <h5>Process:</h5>
                    <ol class="process-list">
                        ${tincturesInfo.process.map(step => `<li>${step}</li>`).join('')}
                    </ol>

                    <h5>Uses:</h5>
                    <div class="uses-grid">
                        ${tincturesInfo.uses.map(use => `
                            <div class="use-card">
                                <h6>${use.category}</h6>
                                <p>${use.examples}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `);

    productsContainer.insertAdjacentHTML('beforeend', `
        <div class="profitability-section">
            <h3>Maximizing Profitability</h3>
            <div class="tips-grid">
                ${profitabilityTips.map(tip => `
                    <div class="tip-card">
                        <span class="tip-icon">${tip.icon}</span>
                        <h4>${tip.channel}</h4>
                        <p>${tip.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `);
}

// Render Edible Flowers
function renderEdibleFlowers() {
    const flowersList = document.getElementById('topFlowersList');
    
    const topFlowersHTML = edibleFlowers.map(flower => `
        <div class="flower-card">
            <div class="flower-header">
                <span class="flower-rank">#${flower.rank}</span>
                <span class="flower-icon">${flower.icon}</span>
                <h3>${flower.name}</h3>
                <p class="scientific-name">${flower.scientific}</p>
            </div>
            <div class="flower-content">
                <div class="info-section">
                    <h4>✔ Why?</h4>
                    <p>${flower.why}</p>
                </div>
                <div class="info-section">
                    <h4>✔ Health Benefits</h4>
                    <p>${flower.benefits}</p>
                </div>
                <div class="info-section">
                    <h4>✔ How to Grow</h4>
                    <ul>
                        <li><strong>Best Climate:</strong> ${flower.growing.climate}</li>
                        <li><strong>Indoor/Outdoor?</strong> ${flower.growing.environment}</li>
                        <li><strong>Harvest Time:</strong> ${flower.growing.harvestTime}</li>
                    </ul>
                </div>
            </div>
        </div>
    `).join('');

    const additionalFlowersHTML = `
        <div class="additional-flowers">
            <h3>Other Nutritious Edible Flowers & Plants</h3>
            <div class="additional-flowers-grid">
                ${additionalFlowers.map(flower => `
                    <div class="mini-flower-card">
                        <h4>✅ ${flower.name}</h4>
                        <p class="scientific-name">${flower.scientific}</p>
                        <p>${flower.benefit}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const financialHTML = `
        <div class="farming-strategy">
            <h2>🌿 Fastest-Growing & Most Financially Stable Edible Flowers & Plants</h2>
            
            <div class="quick-income-section">
                <h3>⚡ Fastest-Growing Crops (Immediate Income Potential)</h3>
                <div class="crop-cards-grid">
                    ${fastGrowingCrops.map(crop => `
                        <div class="crop-card">
                            <div class="crop-header">
                                <h4>${crop.name}</h4>
                                ${crop.scientific ? `<p class="scientific-name">${crop.scientific}</p>` : ''}
                            </div>
                            <div class="crop-details">
                                <p><strong>🕒 Growth Time:</strong> ${crop.growthTime}</p>
                                <p><strong>💡 Why?</strong> ${crop.why}</p>
                                <p><strong>📈 Market:</strong> ${crop.marketDemand}</p>
                                <p><strong>✨ Best for:</strong> ${crop.bestFor}</p>
                                ${crop.varieties ? `
                                    <p><strong>🌱 Varieties:</strong> ${crop.varieties.join(', ')}</p>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="stable-income-section">
                <h3>💰 Most Financially Stable Crops (High-Profit & Long-Term Growth)</h3>
                <div class="crop-cards-grid">
                    ${financiallyStableCrops.map(crop => `
                        <div class="crop-card">
                            <div class="crop-header">
                                <h4>${crop.name}</h4>
                                ${crop.scientific ? `<p class="scientific-name">${crop.scientific}</p>` : ''}
                                ${crop.nickname ? `<p class="nickname">"${crop.nickname}"</p>` : ''}
                            </div>
                            <div class="crop-details">
                                <p><strong>🕒 Growth Time:</strong> ${crop.growthTime}</p>
                                ${crop.marketPrice ? `<p><strong>💰 Market Price:</strong> ${crop.marketPrice}</p>` : ''}
                                ${crop.marketDemand ? `<p><strong>📈 Market:</strong> ${crop.marketDemand}</p>` : ''}
                                <p><strong>💡 Why?</strong> ${crop.why}</p>
                                <p><strong>✨ Best for:</strong> ${crop.bestFor}</p>
                                ${crop.varieties ? `
                                    <p><strong>🌱 Varieties:</strong> ${crop.varieties.join(', ')}</p>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="success-strategy">
                <h3>💡 Best Strategy for Success</h3>
                <div class="strategy-grid">
                    <div class="strategy-card">
                        <h4>📌 If You Want Quick Income:</h4>
                        <ul>
                            <li>Start with microgreens (small space, fast cash flow)</li>
                            <li>Add mushrooms for high-value sales with minimal extra costs</li>
                            <li>Expand into garlic & herbs as capital grows</li>
                            <li>Sell at local farmers' markets, online, and directly to restaurants</li>
                        </ul>
                    </div>
                    <div class="strategy-card">
                        <h4>📌 For High Profits & Sustainability:</h4>
                        <ul>
                            <li>Invest in saffron, lavender, elderflower, and moringa for long-term income</li>
                            <li>Build partnerships with skincare, herbal medicine, and gourmet food companies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    flowersList.innerHTML = topFlowersHTML + additionalFlowersHTML + financialHTML;
}

// Populate nutritious crops
function populateNutritiousCrops(category = 'vegetables') {
    const cropCategories = document.getElementById('cropCategories');
    const cropList = document.getElementById('nutritiousCropsList');
    const crops = nutritiousCrops[category];

    cropCategories.querySelectorAll('button').forEach(button => {
        button.classList.remove('active');
        if (button.dataset.category === category) {
            button.classList.add('active');
        }
    });

    cropList.innerHTML = crops.map(crop => `
        <div class="crop-card" data-crop="${crop.name.toLowerCase()}">
            <div class="crop-header">
                <span class="crop-icon">${crop.icon}</span>
                <h3>${crop.name}</h3>
            </div>
            <p class="crop-benefits">${crop.benefits}</p>
            <button class="info-button" onclick="showGrowingInfo('${crop.name}', '${category}')">
                Growing Information
            </button>
        </div>
    `).join('');
}

// Show growing information modal
function showGrowingInfo(cropName, category) {
    const crop = nutritiousCrops[category].find(c => c.name === cropName);
    if (!crop) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${crop.icon} ${crop.name} Growing Guide</h2>
                <button class="close-button" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <div class="growing-info-grid">
                    <div class="info-item">
                        <h4>Best Season</h4>
                        <p>${crop.growingInfo.season}</p>
                    </div>
                    <div class="info-item">
                        <h4>When to Plant</h4>
                        <p>${crop.growingInfo.plantingTime}</p>
                    </div>
                    <div class="info-item">
                        <h4>Time to Harvest</h4>
                        <p>${crop.growingInfo.harvestTime}</p>
                    </div>
                    <div class="info-item">
                        <h4>Growing Environment</h4>
                        <p>${crop.growingInfo.environment}</p>
                    </div>
                    <div class="info-item">
                        <h4>Climate Requirements</h4>
                        <p>${crop.growingInfo.climate}</p>
                    </div>
                    <div class="info-item">
                        <h4>Ideal Location</h4>
                        <p>${crop.growingInfo.location}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Quick-return crops data
function populateQuickCrops() {
    const cropCards = document.getElementById('cropCards');
    cropCards.innerHTML = '';

    quickCrops.forEach(crop => {
        const card = document.createElement('div');
        card.className = 'crop-card';
        card.innerHTML = `
            <div class="crop-header">
                <span class="crop-icon">${crop.icon}</span>
                <h3>${crop.name}</h3>
            </div>
            <p><strong>Type:</strong> ${crop.type}</p>
            <p><strong>Growth Time:</strong> ${crop.growTime}</p>
            <p><strong>Space Needed:</strong> ${crop.space}</p>
            <p><strong>Initial Investment:</strong> ${crop.investment}</p>
            <p><strong>Monthly Profit:</strong> ${crop.monthlyProfit || 'Varies'}</p>
            <p>${crop.description}</p>
            <p><strong>Best Markets:</strong> ${crop.targets.join(', ')}</p>
        `;
        cropCards.appendChild(card);
    });
}

// Equipment grid
function populateEquipment(type = 'indoor') {
    const equipmentGrid = document.getElementById('equipmentGrid');
    equipmentGrid.innerHTML = '';

    equipment[type].forEach(item => {
        const element = document.createElement('div');
        element.className = 'equipment-item';
        element.innerHTML = `
            <span class="equipment-icon">${item.icon}</span>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p><strong>Cost:</strong> ${item.cost}</p>
            <ul>
                ${item.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `;
        equipmentGrid.appendChild(element);
    });
}

// Education options
function populateEducation(type = 'degrees') {
    const educationOptions = document.getElementById('educationOptions');
    educationOptions.innerHTML = '';

    educationResources[type].forEach(item => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <span class="education-icon">${type === 'degrees' ? '🎓' : '📜'}</span>
            <h3>${item.school}</h3>
            <p>${item.program}</p>
            <a href="${item.link}" target="_blank" class="school-link">
                Learn More <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        educationOptions.appendChild(card);
    });
}

// Render Financial Stability Section
function renderFinancialStability() {
    const grid = document.getElementById('stableCropsGrid');
    grid.innerHTML = stableCrops.map(crop => `
        <div class="crop-card">
            <div class="crop-header">
                <span class="crop-icon">${crop.icon}</span>
                <h3>${crop.name}</h3>
            </div>
            <div class="crop-details">
                <p><strong>Category:</strong> ${crop.category}</p>
                <p><strong>Profit Potential:</strong> ${crop.profitPotential}</p>
                <p><strong>Time to Profit:</strong> ${crop.timeToProfit}</p>
                <p><strong>Key Markets:</strong> ${crop.markets.join(', ')}</p>
                <p>${crop.details}</p>
            </div>
        </div>
    `).join('');

    document.getElementById('shortTermWinners').innerHTML = `
        <div class="winner-item">
            <span class="winner-icon">🌱</span>
            <p>Microgreens</p>
        </div>
        <div class="winner-item">
            <span class="winner-icon">🍄</span>
            <p>Mushrooms</p>
        </div>
    `;

    document.getElementById('longTermWinners').innerHTML = `
        <div class="winner-item">
            <span class="winner-icon">🫐</span>
            <p>Berries</p>
        </div>
        <div class="winner-item">
            <span class="winner-icon">🧄</span>
            <p>Garlic</p>
        </div>
        <div class="winner-item">
            <span class="winner-icon">🥑</span>
            <p>Avocados</p>
        </div>
    `;

    document.getElementById('finalStrategy').innerHTML = `
        <div class="strategy-steps">
            <div class="strategy-step">
                <span class="step-icon">1️⃣</span>
                <p><strong>Start with Microgreens</strong> for immediate cash flow</p>
            </div>
            <div class="strategy-step">
                <span class="step-icon">2️⃣</span>
                <p><strong>Add Mushrooms</strong> for fast growth and high demand</p>
            </div>
            <div class="strategy-step">
                <span class="step-icon">3️⃣</span>
                <p><strong>Establish Garlic & Herbs</strong> for mid-term stability</p>
            </div>
            <div class="strategy-step">
                <span class="step-icon">4️⃣</span>
                <p><strong>Invest in Berries & Avocados</strong> for long-term growth & passive income</p>
            </div>
        </div>
    `;
}

// Render Marketing Strategies
function renderMarketingStrategies(crop = 'microgreens') {
    const content = document.getElementById('marketingContent');
    const data = marketingStrategies[crop];

    content.innerHTML = `
        <div class="marketing-grid">
            <div class="marketing-card">
                <h3>✅ Best Customers to Target</h3>
                <ul>
                    ${data.targetMarkets.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="marketing-card">
                <h3>✅ Marketing & Sales Strategy</h3>
                <ul>
                    ${data.salesStrategy.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="marketing-card">
                <h3>✅ Value-Added Ideas</h3>
                <ul>
                    ${data.valueAdded.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        if (button.dataset.crop === crop) {
            button.classList.add('active');
        }
    });
}

// Render Budget Recommendations
function renderBudgetRecommendations(budget = 'small') {
    const content = document.getElementById('budgetContent');
    const data = budgetRecommendations[budget];

    content.innerHTML = `
        <div class="budget-grid">
            <div class="budget-card main-info">
                <div class="budget-header">
                    <h3>${data.title}</h3>
                </div>
                <div class="crops-list">
                    <h4>🔹 Best Crops:</h4>
                    <p>${data.bestCrops.join(', ')}</p>
                </div>
                <div class="reasoning">
                    <h4>🔹 Why?</h4>
                    <p>${data.reasoning}</p>
                </div>
            </div>

            <div class="budget-card strategy">
                <h4>🔹 Strategy:</h4>
                <ul>
                    ${data.strategy.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="budget-card income">
                <h4>✅ ${data.projectedIncome.title}:</h4>
                <div class="income-grid">
                    ${data.projectedIncome.items.map(item => `
                        <div class="income-item">
                            <span class="crop-name">${item.crop}:</span>
                            <span class="income-value">${item.income}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.querySelectorAll('.budget-tab').forEach(button => {
        button.classList.remove('active');
        if (button.dataset.budget === budget) {
            button.classList.add('active');
        }
    });
}

// Initialize ROI calculator
function initializeCalculator() {
    const cropSelect = document.getElementById('cropType');
    quickCrops.forEach(crop => {
        const option = document.createElement('option');
        option.value = crop.name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = crop.name;
        cropSelect.appendChild(option);
    });
}

// Calculate ROI
function calculateROI() {
    const cropType = document.getElementById('cropType').value;
    const investment = parseFloat(document.getElementById('investment').value);
    const space = parseFloat(document.getElementById('space').value);

    if (!cropType || isNaN(investment) || isNaN(space)) {
        alert('Please fill in all fields');
        return;
    }

    const crop = quickCrops.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === cropType);
    let result = '';

    if (crop) {
        const minProfit = parseFloat(crop.monthlyProfit?.split('-')[0].replace(/[^0-9.]/g, '') || 0);
        const roi = ((minProfit * 12) / investment * 100).toFixed(2);
        
        result = `
            <h3>Estimated ROI for ${crop.name}</h3>
            <p><strong>Initial Investment:</strong> $${investment.toLocaleString()}</p>
            <p><strong>Space Required:</strong> ${space} sq ft</p>
            <p><strong>Estimated Annual ROI:</strong> ${roi}%</p>
            <p><strong>Monthly Revenue Potential:</strong> ${crop.monthlyProfit}</p>
            <p class="note">Note: This is a simplified calculation. Actual returns may vary based on multiple factors including market conditions, growing expertise, and local demand.</p>
        `;
    }

    document.getElementById('roiResult').innerHTML = result;
}

// Weather Integration
async function getWeatherData(latitude, longitude) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

// Seasonal Planting Calendar
const plantingCalendar = {
    spring: {
        vegetables: ['Kale', 'Spinach', 'Carrots', 'Radishes'],
        fruits: ['Strawberries', 'Blueberries']
    },
    summer: {
        vegetables: ['Sweet Potatoes', 'Red Bell Peppers', 'Garlic'],
        fruits: ['Blackberries', 'Cherries', 'Grapes']
    },
    fall: {
        vegetables: ['Brussels Sprouts', 'Beets', 'Swiss Chard'],
        fruits: ['Pomegranate', 'Papaya']
    },
    winter: {
        vegetables: ['Kale', 'Spinach', 'Broccoli'],
        fruits: ['Oranges', 'Avocados']
    }
};

function updatePlantingCalendar() {
    const now = new Date();
    const month = now.getMonth();
    let season;
    
    if (month >= 2 && month <= 4) season = 'spring';
    else if (month >= 5 && month <= 7) season = 'summer';
    else if (month >= 8 && month <= 10) season = 'fall';
    else season = 'winter';
    
    const seasonalCrops = plantingCalendar[season];
    const calendarSection = document.getElementById('plantingCalendar');
    
    if (calendarSection) {
        calendarSection.innerHTML = `
            <h3>What to Plant in ${season.charAt(0).toUpperCase() + season.slice(1)}</h3>
            <div class="seasonal-crops">
                <div class="crop-column">
                    <h4>Vegetables</h4>
                    <ul>${seasonalCrops.vegetables.map(crop => `<li>${crop}</li>`).join('')}</ul>
                </div>
                <div class="crop-column">
                    <h4>Fruits</h4>
                    <ul>${seasonalCrops.fruits.map(crop => `<li>${crop}</li>`).join('')}</ul>
                </div>
            </div>
        `;
    }
}

// Companion Planting Guide
const companionPlants = {
    'Kale': ['Herbs', 'Onions', 'Potatoes'],
    'Spinach': ['Strawberries', 'Peas', 'Onions'],
    'Sweet Potatoes': ['Bush Beans', 'Oregano'],
    'Broccoli': ['Onions', 'Herbs', 'Beets'],
    'Carrots': ['Tomatoes', 'Rosemary', 'Onions'],
    'Beets': ['Onions', 'Lettuce', 'Cabbage'],
    'Red Bell Peppers': ['Basil', 'Onions', 'Carrots'],
    'Garlic': ['Beets', 'Strawberries'],
    'Brussels Sprouts': ['Potatoes', 'Onions'],
    'Swiss Chard': ['Bush Beans', 'Onions', 'Lettuce']
};

function showCompanionPlants(cropName) {
    const companions = companionPlants[cropName];
    if (companions) {
        const companionGuide = document.getElementById('companionGuide');
        companionGuide.innerHTML = `
            <h3>Companion Plants for ${cropName}</h3>
            <ul class="companion-list">
                ${companions.map(plant => `<li>${plant}</li>`).join('')}
            </ul>
            <p class="companion-tip">Plant these together to enhance growth and pest resistance!</p>
        `;
    }
}

// Growth Progress Tracker
class GrowthTracker {
    constructor() {
        this.crops = new Map();
    }

    addCrop(name, plantingDate) {
        const crop = nutritiousCrops.vegetables.find(c => c.name === name) || 
                    nutritiousCrops.fruits.find(c => c.name === name);
        
        if (crop) {
            this.crops.set(name, {
                plantingDate: new Date(plantingDate),
                harvestDate: this.calculateHarvestDate(name, plantingDate)
            });
            this.updateProgress();
            this.saveToLocalStorage();
        }
    }

    calculateHarvestDate(cropName, plantingDate) {
        const growthPeriods = {
            'Kale': 60,
            'Spinach': 45,
            'Sweet Potatoes': 120,
            'Broccoli': 85,
            'Carrots': 70,
            'Beets': 55,
            'Red Bell Peppers': 90,
            'Garlic': 240,
            'Brussels Sprouts': 100,
            'Swiss Chard': 50
        };

        const days = growthPeriods[cropName] || 90;
        const date = new Date(plantingDate);
        date.setDate(date.getDate() + days);
        return date;
    }

    updateProgress() {
        const trackerElement = document.getElementById('growthTracker');
        if (!trackerElement) return;

        let html = '<h3>Growth Progress</h3>';
        
        this.crops.forEach((data, cropName) => {
            const now = new Date();
            const totalDays = (data.harvestDate - data.plantingDate) / (1000 * 60 * 60 * 24);
            const daysGrown = (now - data.plantingDate) / (1000 * 60 * 60 * 24);
            const progress = Math.min(Math.round((daysGrown / totalDays) * 100), 100);
            
            html += `
                <div class="crop-progress">
                    <h4>${cropName}</h4>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress}%"></div>
                    </div>
                    <p>Progress: ${progress}%</p>
                    <p>Expected Harvest: ${data.harvestDate.toLocaleDateString()}</p>
                    <button onclick="growthTracker.removeCrop('${cropName}')" class="remove-crop">Remove</button>
                </div>
            `;
        });

        html += '</div>';
        trackerElement.innerHTML = html;
    }

    removeCrop(name) {
        this.crops.delete(name);
        this.updateProgress();
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        const data = Array.from(this.crops.entries()).map(([name, data]) => ({
            name,
            plantingDate: data.plantingDate.toISOString(),
            harvestDate: data.harvestDate.toISOString()
        }));
        localStorage.setItem('growthTracker', JSON.stringify(data));
    }

    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem('growthTracker') || '[]');
        data.forEach(crop => {
            this.crops.set(crop.name, {
                plantingDate: new Date(crop.plantingDate),
                harvestDate: new Date(crop.harvestDate)
            });
        });
        this.updateProgress();
    }
}

// Market Price Tracker
class MarketPriceTracker {
    constructor() {
        this.prices = new Map();
        this.lastUpdate = null;
    }

    async updatePrices() {
        const basePrice = {
            'Kale': 3.99,
            'Spinach': 2.99,
            'Sweet Potatoes': 1.99,
            'Broccoli': 2.49,
            'Carrots': 1.49,
            'Beets': 2.99,
            'Red Bell Peppers': 1.99,
            'Garlic': 0.99,
            'Brussels Sprouts': 3.49,
            'Swiss Chard': 2.99
        };

        Object.entries(basePrice).forEach(([crop, price]) => {
            const fluctuation = (Math.random() - 0.5) * 0.4; 
            this.prices.set(crop, +(price + fluctuation).toFixed(2));
        });

        this.lastUpdate = new Date();
        this.displayPrices();
    }

    displayPrices() {
        const priceTracker = document.getElementById('marketPrices');
        if (!priceTracker) return;

        let html = '<h3>Current Market Prices</h3>';
        
        this.prices.forEach((price, crop) => {
            const previousPrice = this.getPreviousPrice(crop);
            const priceChange = price - previousPrice;
            const changeClass = priceChange > 0 ? 'price-up' : priceChange < 0 ? 'price-down' : '';
            
            html += `
                <div class="price-item ${changeClass}">
                    <h4>${crop}</h4>
                    <p class="price">$${price.toFixed(2)}/lb</p>
                    ${priceChange !== 0 ? `
                        <span class="price-change">
                            ${priceChange > 0 ? '↑' : '↓'} 
                            $${Math.abs(priceChange).toFixed(2)}
                        </span>
                    ` : ''}
                </div>
            `;
        });

        html += '</div>';
        priceTracker.innerHTML = html;
    }

    getPreviousPrice(crop) {
        const basePrice = this.prices.get(crop) || 0;
        return basePrice - (Math.random() - 0.5) * 0.2;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all sections
    populateNutritiousCrops('vegetables');
    renderEdibleFlowers();
    renderValueAddedProducts(); // Ensure this is called
    populateQuickCrops();
    populateEquipment('indoor');
    renderEducationResources();
    renderFinancialStability();
    renderMarketingStrategies('microgreens');
    renderBudgetRecommendations('small');
    initializeCalculator();

    // Event listeners
    const educationTabs = document.querySelectorAll('.education-tabs .tab-button');
    educationTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            educationTabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            renderEducationResources();
        });
    });
});
