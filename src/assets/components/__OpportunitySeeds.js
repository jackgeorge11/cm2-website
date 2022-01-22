const opportunities = [
  // {
  //   id: 1,
  //   slug: "sky-customer-sales-advisor",
  //   title: "Customer Sales Advisor at Sky",
  //   type: "job", // types can be job, training, event, volunteer or opportunity
  //   logo: "sky-logo.png",
  //   regions:
  //     "London, Cardiff, Leeds, Stockport, Uddingston, Dunfermline, Glasgow, Livingston, Newcastle",
  //   deadline: "rolling",
  //   emailResponse: {
  //     title:
  //       "Thanks for your interest in becoming Sky's next customer sales advisor!",
  //   },
  //   form: [
  //     {
  //       label: "Name:",
  //       action: {
  //         type: "input",
  //         inputType: "text",
  //         name: "name",
  //       },
  //     },
  //     {
  //       label: "Phone Number:",
  //       action: {
  //         type: "input",
  //         inputType: "tel",
  //         name: "phone",
  //       },
  //     },
  //     {
  //       label: "Email:",
  //       action: {
  //         type: "input",
  //         inputType: "email",
  //         name: "email",
  //       },
  //     },
  //     {
  //       label: `Select your region:`,
  //       action: {
  //         type: "select",
  //         name: "region",
  //         options: [
  //           "London",
  //           "Cardiff",
  //           "Leeds",
  //           "Stockport",
  //           "Uddingston",
  //           "Dunfermline",
  //           "Glasgow",
  //           "Livingston",
  //           "Newcastle",
  //         ],
  //       },
  //     },
  //     {
  //       label: `Let us know why you're interested in this position:`,
  //       action: {
  //         type: "textarea",
  //         name: "message",
  //       },
  //     },
  //   ],
  //   description: [
  //     {
  //       header: "become sky's next customer sales advisor",
  //       text: [
  //         "Want to do the best work of your life? Make your mark at Europe’s leading entertainment brand. The people are what make Sky a truly exciting and inclusive place to work – a place where you can be yourself and let your skills shine.",
  //         "Join Sky as a Customer Sales Advisor earning £18,525 per annum rising to £19,525 per annum and you’ll enjoy the freedom and support you need to make an impact; through sales you’ll make fans of the products you love. Smashing targets could earn you an extra incentive of £4,000 on average, up to £7,000 for top performers",
  //       ],
  //     },
  //     {
  //       header: "What you'll do",
  //       text: [
  //         "– Work a flexible 37.5 hours p/wk Mon-Sun with varied shift patterns – when days are busy, you’ll work up to 7.5 hours extra per week and take this time back at quieter times",
  //         "– Take inbound calls from customers who are thinking about changing their products or leaving Sky",
  //         "– Understand the customers’ needs to provide a solution that will help them get the most from Sky’s amazing products and services",
  //         "– Focus on selling the right package to the right customer",
  //         "– Learn about Sky's products",
  //       ],
  //     },
  //     {
  //       header: "What you'll bring",
  //       text: [
  //         "– Brilliant listening skills",
  //         "– Ability to empathise and understand customers' individual needs",
  //         "– A healthy streak of ambition in sales",
  //         "– A passion for sales and selling Sky products",
  //       ],
  //     },
  //     {
  //       header: "The benefits",
  //       text: [
  //         "There’s a reason people can’t stop talking about #LifeAtSky. Their range of benefits really are something special and here are just a few:",
  //         "– Free Sky Q, for the TV you love all in one place",
  //         "– Discounted Mobile and broadband",
  //         "– Bonus incentives",
  //         "– Range of benefits to support you in all areas of your finances, health and lifestyle, such as, a generous pension plan, healthcare, sharesave and discounts to over 800 retailers.",
  //         "In addition to all these great benefits, you’ll have the opportunity to take part in ‘Time to Care’, a commitment to give each colleague the opportunity to volunteer for up to 1 hour per week. All part of Sky’s pledge to help tackle loneliness for customers and within Sky's communities.",
  //       ],
  //     },
  //     {
  //       header: "Inclusion",
  //       text: [
  //         "CVs aren’t everything. Sky are more focused on who you are and the potential you’ll bring to them. That’s why they have a unique approach through a series of questions and a video round.",
  //       ],
  //     },
  //     {
  //       header: "Where you'll work",
  //       text: [
  //         "Positions are available in London, Cardiff, Leeds, Stockport, Uddingston, Dunfermline, Glasgow, Livingston, Newcastle",
  //         "Please specify which region(s) you would like to apply for in your application.",
  //       ],
  //     },
  //     {
  //       header: "Why wait?",
  //       text: [
  //         "Apply now to build an amazing career and be part of a brilliant team.",
  //         "Fil out the form above, or send an Email to hello@cm2.co.uk and include:",
  //         "-Your Full Name",
  //         "- Your Email",
  //         "- Your Phone Number",
  //         "- Your region(s) of choice",
  //         "Please include 'Sky Customer Sales Advisor' in the subject.",
  //       ],
  //     },
  //     {
  //       header: "Just so you know",
  //       text: [
  //         "if your application is successful, you’ll be asked to complete a criminal record check.",
  //       ],
  //     },
  //   ],
  // },
  {
    id: 2,
    slug: "get-presenting",
    title: "Get Presenting",
    type: "job", // types can be job, training, event, volunteer or opportunity
    logo: "logo.png",
    regions: "London",
    deadline: "rolling",
    emailResponse: {
      title: "Thanks for your interest in becoming a Presenter at ConnecMe2!",
    },
    form: [
      {
        label: "Name:",
        action: {
          type: "input",
          inputType: "text",
          name: "name",
        },
      },
      {
        label: "Phone Number:",
        action: {
          type: "input",
          inputType: "tel",
          name: "phone",
        },
      },
      {
        label: "Email:",
        action: {
          type: "input",
          inputType: "email",
          name: "email",
        },
      },
      {
        label: "Video link (see description below for more details):",
        action: {
          type: "input",
          inputType: "text",
          name: "video",
        },
      },
      {
        label: `Let us know why you're interested in this position:`,
        action: {
          type: "textarea",
          name: "message",
        },
      },
      {
        label: `Upload your CV`,
        action: {
          type: "input",
          inputType: "file",
          id: "cv-file",
          name: "cv-file",
        },
      },
    ],
    description: [
      {
        header: "become a presenter at connecme2",
        text: [
          "We are looking for a range of presenters to join ConnecMe2 and help in creating digital content! This includes doing research about topics relevant to today’s career marketplace and conducting interviews with industry professionals. The content will take the form of blog posts and vlogs (video content) to be published on our website and social media.",
          "To date, we’ve interviewed professionals from organisations such as TalkSport, Manchester City FC, BBC, and the NHS, to name a few.⁠ We also have an active blog section on our website that visitors can use as a resource to stay up to date on today’s career tips and trends.",
          "If you're interested in becoming a presenter, fill out the form above, or email us at hello@cm2.co.uk, and include your name, phone number, email, CV, and a one minute video of you via an unlisted Youtube link answering the following questions:",
          "1. What motivated you to apply for this role?",
          "2. What areas/industries are you interested in?",
          "3. Where do you see yourself in 5 years' time?",
          "4. Why do you want to work with ConnecMe2?",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "choose-your-industry",
    title: "Choose Your Industry",
    type: "opportunity", // types can be job, training, event, volunteer or opportunity
    logo: "logo.png",
    regions: "UK",
    deadline: "December 1st, 2021",
    emailResponse: {
      title:
        "Thanks for your interest in ConnecMe2's Choose Your Industry campaign!",
    },
    form: [
      {
        label: "Name:",
        action: {
          type: "input",
          inputType: "text",
          name: "name",
        },
      },
      {
        label: "Email:",
        action: {
          type: "input",
          inputType: "email",
          name: "email",
        },
      },
      {
        label: "Contact Number:",
        action: {
          type: "input",
          inputType: "tel",
          name: "contact number",
        },
      },
      {
        label: "Which borough are you from?",
        action: {
          type: "input",
          inputType: "text",
          name: "borough",
        },
      },
      {
        label: `Which industry or industries are you interested in?`,
        action: {
          type: "textarea",
          name: "industry(-ies)",
        },
      },
      {
        label: `Is there an ideal opportunity or career you'd like?`,
        action: {
          type: "textarea",
          name: "ideal opportunity",
        },
      },
    ],
    description: [
      {
        header: "Want to break into the industry of your choice?",
        text: [
          "To celebrate the launch of our new app, ConnecMe2 is helping 80 opportunity seekers just like you to find opportunities in the industry of their choice, be it a new career, apprenticeship, collaboration or even a meeting with a leading industry professional.",
          "All you have to do is fill out the form above, meet with a member of our team over Zoom, and we'll handle the rest.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "software-engineer",
    title: "ConnecMe2 Software Engineer",
    type: "job", // types can be job, training, event, volunteer or opportunity
    logo: "logo.png",
    regions: "London",
    deadline: "rolling",
    emailResponse: {
      title:
        "Thanks for your interest in becoming a Software Engineer at ConnecMe2!",
    },
    form: [
      {
        label: "Name:",
        action: {
          type: "input",
          inputType: "text",
          name: "name",
        },
      },
      {
        label: "Contact Number:",
        action: {
          type: "input",
          inputType: "tel",
          name: "phone",
        },
      },
      {
        label: "Email:",
        action: {
          type: "input",
          inputType: "email",
          name: "email",
        },
      },
      {
        label: `Why are you interested in this position:`,
        action: {
          type: "textarea",
          name: "message",
        },
      },
      {
        label: `Please upload a copy of your CV:`,
        action: {
          type: "file",
          name: "cv",
        },
      },
    ],
    description: [
      {
        header: "Join ConnecMe2's growing tech team!",
        text: [
          "We are looking for a react-native and reactjs developer for work on our mobile and web-based apps — a SaaS-based social-professional networking platform putt the right people in the right seats.",
        ],
      },
      {
        header: "Requirements",
        text: [
          "MUST LIVE IN LONDON AND BE AVAILABLE TO COME TO THE OFFICE FOR PROJECT MEETINGS.",
          "MUST OWN A MAC",
          "MUST be fluent in REACT NATIVE AND REACTJS (2+ years experience minimum)",
          "MUST have knowledge of AWS, GRAPHQL, AND REDUX",
        ],
      },
      {
        header: "Experience",
        text: [
          "1. Reactjs and React-Native",
          "2. iOS and Android development",
          "3. AWS serverless backend (Amplify, Cognito, appsync, DynamoDB, S3)",
          "4. GraphQL queries and mutations",
          "5. Redux",
          "6. AGILE methodology",
          "7. CI/CD workflows",
          "8. Jira",
          "9. Familiarity with common stacks and tech necessities (e.g. GitHub, node and npm, Xcode, command line)",
          "10. Familiarity with UX/UI design",
          "11. Must have a Mac",
          "12. Excellent communication both written and verbal",
          "13. Great attention to detail",
          "14. Organizational skills",
          "15. An analytical mind",
        ],
      },
      {
        header: "about the role",
        text: [
          "Contract length: 3-6 months with potential for permanent position",
          "Part-time hours: 20 per week",
          "Expected start date: ASAP",
          "Job Types: Part-time, Temporary, Contract",
        ],
      },
    ],
  },
];

export default opportunities;
