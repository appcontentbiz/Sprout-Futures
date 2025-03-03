// Crop data
const crops = [
    {
        name: 'Microgreens',
        type: 'Quick Income',
        growTime: '7-21 days',
        space: '100+ sq ft',
        investment: '$1,500+',
        monthlyProfit: '$4,500-$8,500',
        description: 'Perfect for indoor growing with quick returns',
        targets: ['Restaurants', 'Farmers Markets', 'Health Stores']
    },
    {
        name: 'Mushrooms',
        type: 'Fast Growth',
        growTime: '3-6 weeks',
        space: '100+ sq ft',
        investment: '$2,000+',
        monthlyProfit: '$1,500-$2,500',
        description: 'High-demand specialty crop with indoor growing potential',
        targets: ['Restaurants', 'Health Stores', 'Direct Consumers']
    },
    {
        name: 'Garlic & Herbs',
        type: 'Mid-Term',
        growTime: '6-8 months',
        space: '¼-1 acre',
        investment: '$3,000-$8,000',
        yearlyProfit: '$22,000-$50,000',
        description: 'Stable income with value-added potential',
        targets: ['Grocery Stores', 'Restaurants', 'Markets']
    },
    {
        name: 'Berries & Avocados',
        type: 'Long-Term',
        growTime: '1-5 years',
        space: '1+ acre',
        investment: '$10,000+',
        yearlyProfit: '$30,000-$70,000',
        description: 'Long-term passive income with high returns',
        targets: ['Grocery Chains', 'Food Processors', 'Direct Sales']
    }
];

// Equipment data
const equipment = [
    {
        category: 'Indoor Growing',
        items: [
            'Metal Shelving Racks',
            'LED Grow Lights',
            'Climate Control Systems',
            'Irrigation Systems'
        ],
        averageCost: '$2,000-$5,000'
    },
    {
        category: 'Outdoor Growing',
        items: [
            'Drip Irrigation',
            'Raised Beds',
            'Basic Tools',
            'Storage Solutions'
        ],
        averageCost: '$3,000-$8,000'
    }
];

// Education resources
const education = [
    {
        type: 'Online Degrees',
        programs: [
            'Oregon State University - B.S. in Agricultural Sciences',
            'UMass - Sustainable Food & Farming',
            'Texas Tech - Plant and Soil Science'
        ]
    },
    {
        type: 'Certificates',
        programs: [
            'Cornell - Organic Agriculture Certificate',
            'Penn State - Agricultural Business Management',
            'UF - Agronomy & Crop Production'
        ]
    }
];

// Populate crop cards
function populateCropCards() {
    const cropCards = document.getElementById('cropCards');
    crops.forEach(crop => {
        const card = document.createElement('div');
        card.className = 'crop-card';
        card.innerHTML = `
            <h3>${crop.name}</h3>
            <p><strong>Type:</strong> ${crop.type}</p>
            <p><strong>Growth Time:</strong> ${crop.growTime}</p>
            <p><strong>Space Needed:</strong> ${crop.space}</p>
            <p><strong>Initial Investment:</strong> ${crop.investment}</p>
            <p><strong>Profit:</strong> ${crop.monthlyProfit || crop.yearlyProfit}</p>
            <p>${crop.description}</p>
            <p><strong>Best Markets:</strong> ${crop.targets.join(', ')}</p>
        `;
        cropCards.appendChild(card);
    });
}

// Populate equipment grid
function populateEquipmentGrid() {
    const equipmentGrid = document.getElementById('equipmentGrid');
    equipment.forEach(category => {
        const item = document.createElement('div');
        item.className = 'equipment-item';
        item.innerHTML = `
            <h3>${category.category}</h3>
            <ul>
                ${category.items.map(i => `<li>${i}</li>`).join('')}
            </ul>
            <p><strong>Average Cost:</strong> ${category.averageCost}</p>
        `;
        equipmentGrid.appendChild(item);
    });
}

// Populate education options
function populateEducationOptions() {
    const educationOptions = document.getElementById('educationOptions');
    education.forEach(category => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <h3>${category.type}</h3>
            <ul>
                ${category.programs.map(p => `<li>${p}</li>`).join('')}
            </ul>
        `;
        educationOptions.appendChild(card);
    });
}

// Initialize ROI calculator
function initializeCalculator() {
    const cropSelect = document.getElementById('cropType');
    crops.forEach(crop => {
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

    const crop = crops.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === cropType);
    let result = '';

    if (crop) {
        const minProfit = parseFloat(crop.monthlyProfit?.split('-')[0].replace(/[^0-9.]/g, '') || 
                                   crop.yearlyProfit?.split('-')[0].replace(/[^0-9.]/g, ''));
        const roi = ((minProfit * 12) / investment * 100).toFixed(2);
        
        result = `
            <h3>Estimated ROI for ${crop.name}</h3>
            <p>Initial Investment: $${investment.toLocaleString()}</p>
            <p>Space Required: ${space} sq ft</p>
            <p>Estimated Annual ROI: ${roi}%</p>
            <p>Note: This is a simplified calculation. Actual returns may vary based on multiple factors.</p>
        `;
    }

    document.getElementById('roiResult').innerHTML = result;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateCropCards();
    populateEquipmentGrid();
    populateEducationOptions();
    initializeCalculator();

    document.getElementById('calculateROI').addEventListener('click', calculateROI);
});
