// This file centralizes all editable content for the giveaway page

// Prize section
export const prizeImages = [
  "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg", // Main Raptors game image
  "https://images.unsplash.com/photo-1531057664409-7127657c466a?q=80&w=500", // Basketball action image
  "https://images.unsplash.com/photo-1586271823270-43e7d3c70a50?q=80&w=500", // Arena atmosphere image
];

export const prizeContent = {
  title: "Win 2 Lower Bowl Raptors Tickets!",
  description:
    "Experience the thrill of live NBA action with two lower bowl tickets to see the Toronto Raptors on Friday, March 28th, 2025. Get ready to cheer on your team in a night of unforgettable basketball excitement!",
  features: [
    "Two lower bowl tickets for an up-close Raptors game experience",
    "Prime seating to catch every slam-dunk and three-pointer",
    "An electrifying night of live sports action in Toronto",
    "Valued between $300 and $400",
    "Create unforgettable memories with friends or family",
  ],
  value: "$300-$400",
};

// Header section
export const headerContent = {
  title: "Win 2 Lower Bowl Raptors Tickets!",
  description:
    "Join our exclusive giveaway for a chance to experience the Toronto Raptors live in action on Friday, March 28th, 2025. Secure your entry now and get ready for an unforgettable night out!",
  ctaText: "Enter Now",
  heroImage: prizeImages[0],
};

// How to Enter section
export const howToEnterContent = {
  title: "How to Enter",
  description:
    "Entering the giveaway is quick and simple! Follow the steps below for your chance to win these coveted Raptors tickets.",
  steps: [
    {
      icon: "Mail",
      title: "Fill Out the Form",
      description:
        "Provide your name and email address to register your entry.",
    },
    {
      icon: "Share2",
      title: "Share with Friends",
      description:
        "Spread the word on social media for extra entries and increase your chances.",
    },
    {
      icon: "Users",
      title: "Confirm Entry",
      description:
        "Check your inbox for a confirmation email to complete the entry process.",
    },
  ],
  benefits: [
    { icon: "Clock", title: "Quick & Easy", desc: "Takes less than a minute" },
    { icon: "Trophy", title: "Multiple Entries", desc: "Share for more chances" },
    { icon: "Gift", title: "Premium Prize", desc: "Valued at $300-$400" },
  ],
  formLabels: {
    nameLabel: "Your Name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Enter Giveaway",
    processingText: "Processing...",
    sharingPlatforms: ["Facebook", "Twitter", "Instagram"],
    sharingText: "Share for Extra Entries:",
    termsText:
      "By entering, you agree to our Terms & Conditions and Privacy Policy.",
  },
  successMessage: {
    title: "Entry Submitted!",
    description: "Check your email to confirm your entry and secure your spot.",
  },
  currentEntries: 512,
};

// Rules section
export const rulesContent = {
  title: "Rules & Eligibility",
  description:
    "Before entering, please review the rules and ensure you meet the eligibility requirements for this giveaway.",
  rules: [
    {
      question: "Who is eligible to enter?",
      answer:
        "Anyone 18 years or older residing in the Greater Toronto Area can enter this giveaway.",
    },
    {
      question: "How long does the giveaway run?",
      answer:
        "The promotion starts on March 3rd, 2025 and ends on March 21st, 2025. Be sure to enter before the deadline!",
    },
    {
      question: "How will the winner be selected?",
      answer:
        "The winner will be selected randomly from all valid entries using a certified random selection tool to ensure fairness.",
    },
    {
      question: "When and how will the winner be notified?",
      answer:
        "The winner will be notified via email within 48 hours after the giveaway ends. Please respond within 72 hours to claim your prize.",
    },
    {
      question: "How many times can I enter?",
      answer:
        "Each person may enter once. Additional entries can be earned through social media sharing (up to 3 extra entries).",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, your information is safe with us. It will only be used for this giveaway and will not be shared with any third parties.",
    },
  ],
  imageUrl:
    "https://api.typeform.com/responses/files/ea11f57d932d624ed5938c78e4da092cc2e99dcfb94963f5b0bbe23dcfe7f9f1/raps_game.jpg",
  tipsForEntering: [
    "Double-check your email address before submitting your entry",
    "Share on social media for additional entry opportunities",
    "Set a calendar reminder for the draw date on March 21st, 2025",
  ],
  importantNotice:
    "Winners will be contacted via the email provided at entry. Please check your inbox and spam folder regularly after the giveaway ends.",
  supportEmail: "support@rapsgiveaway.com",
  termsText: "By entering, you agree to all rules and terms.",
  downloadRulesText: "Download Full Rules PDF",
};

// Contact section
export const contactContent = {
  title: "Get In Touch",
  email: "info@rapsgiveaway.com",
  phone: "416-555-1234",
  brokerage: {
    name: "Toronto Sports Entertainment",
    address: "123 Arena Blvd, Toronto",
  },
  disclaimer:
    "This site is not intended to solicit buyers or sellers who are currently under contract.",
  copyright: "Copyright 2025. All rights reserved",
  privacyPolicyText: "Privacy Policy",
};

// Countdown
export const countdownContent = {
  endDate: new Date("March 21, 2025"),
};

// Color scheme configuration for the entire giveaway
export const colorScheme = {
  primary: {
    main: 'red-600',
    light: 'red-400',
    dark: 'red-800',
    gradient: 'from-red-500 to-red-700',
    text: 'red-700',
    textLight: 'red-500',
    textDark: 'red-900',
    hover: 'red-700',
    border: 'red-200',
    background: 'red-50',
    accent: 'red-100',
    accentDark: 'red-300',
  },
  secondary: {
    main: 'white',
    text: 'gray-700',
    textLight: 'gray-600',
    textDark: 'gray-800',
    border: 'gray-200',
    background: 'white',
    accent: 'gray-100',
  },
  utility: {
    success: 'green-600',
    successLight: 'green-100',
    error: 'red-600',
    errorLight: 'red-100',
    warning: 'yellow-600',
    warningLight: 'yellow-100',
    info: 'blue-600',
    infoLight: 'blue-100',
  },
  gradients: {
    header: 'from-red-100/70 via-red-50/40 to-transparent',
    countdownBg: 'from-red-800 to-red-950',
    countdownText: 'from-red-200 to-red-400',
    prizeTitle: 'from-red-700 to-red-500',
    button: 'from-red-500 to-red-600',
    buttonHover: 'from-red-600 to-red-700',
  },
  shadows: {
    small: 'shadow-md',
    medium: 'shadow-lg',
    large: 'shadow-xl',
    extraLarge: 'shadow-2xl',
    glow: 'shadow-[0_0_15px_rgba(239,68,68,0.3)]',
  },
  animations: {
    float: 'animate-float',
    pulseSlow: 'animate-pulse-slow',
    bounceSlow: 'animate-bounce-slow',
  },
};