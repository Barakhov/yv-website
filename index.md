---
layout: home-page
name: home
title: International transaction payment processing
description: "Payvision offers global card acquiring for all your payment needs. Our processing platform delivers flexible, conversion-focused and data-driven solutions."

pageName: home
colorTheme: 'payvision-blue'
colorThemeHex: '#0a0d6a'

scripts:
  home: true
  clientLogoShowcase: true
  swiper: true

pageContent: 
  hero:
    pretitle: The payments platform for international commerce
    title: Enter new markets with ease
    subtitle: Payvision's platform helps businesses get global coverage, accept local payments and set up shop through one simple integration. Payments. We get it.​
    button-link:
      isExternal: false
      color: red_alt
      size: lg
      id: homeHeroContact
      buttonText: Chat with an expert
      url:  '/contact/sales/'
    video:
      teaserUrl: /assets/videos/home-hero.mp4
      fallbackMessage: Sorry, your browser doesn't support embedded videos.      
    clients:
      - item: mazda
      - item: random-logo
      - item: random-logo
      - item: random-logo
      - item: random-logo
      - item: candy-crush

  intro:
    title: Hop over every payment hurdle​
    list:
      - listItem:
        icon: illust-api
        midtitle: Online payments
        content:
          paragraphs:
          - item: Connect your webshop to our payment gateway with one simple API and support popular payment methods from 135 countries.
        link:
          linkText: Find out more
          direction: bottom
          color: blue
          scrollTo:
            target: home_op
      - listItem:
        icon: illust-sphere
        midtitle: Global acquiring
        content:
          paragraphs:
          - item: Get global coverage and lower transaction costs through one integration with our worldwide acquiring network.
        link:
          linkText: Find out more
          direction: bottom
          color: blue
          scrollTo:
            target: home_ga
      - listItem:
        icon: illust-cardpay
        midtitle: In-person payments
        content:
          paragraphs:
          - item: One partner for pan European POS coverage, access local card schemes and clear-cut reporting on all channels.
        link:
          linkText: Find out more
          direction: bottom
          color: blue
          scrollTo:
            target: home_pos

  onlinePayments:
    title: Expand internationally with confidence
    button-link-desktop:
      isExternal: false
      color: red
      size: lg
      id: homeOnlinePaymentsOPdesktop
      buttonText: Learn more
      url:  '/online-payments/'
    button-link-mobile:
      isExternal: false
      color: red_alt
      size: lg
      id: homeOnlinePaymentsOPmobile
      buttonText: Learn more
      url:  '/online-payments/'
    list:
    - listItem:
      title: Take your business anywhere
      content:
        paragraphs:
        - item: Accept payments from 135 countries and take your pick from the world's most popular alternative payment methods to add to your mix. You'll fit right in with the locals.
    - listItem:
      title: Automate fraud and risk management​
      content:
        paragraphs:
        - item: Prevent card-not-present scams and costly chargebacks with a machine learning anti-fraud solution that only allows your genuine customers through the gate.​
    - listItem:
      title: Progress with transparent insights​
      content:
        paragraphs:
        - item: Follow the sun reporting gives you clarity over your payment activities across every channel and market. Allowing you to see what works and set your next direction.

  globalAcquiring:
    title: Serve cross-border clients with one solution
    list:
      - listItem:
        title: Get worldwide coverage
        content:
          paragraphs:
          - item: Scale your client base and improve your bottom line. No need to manage multiple platforms, partners, or packages – access our global acquiring network via a single integration.
      - listItem:
        title: Accept any currency
        content:
          paragraphs:
          - item: With us, you can support over 150 transaction currencies (that's almost every currency in the world) and scale in any region you want.​
      - listItem:
        title: Secure tokenization
        content:
          paragraphs:
          - item: Offer your clients the most reliable payment methods. With Apple Pay, Google Pay, and Samsung Pay, tokenization ensures sensitive data will always be kept safe and sound.
    button-link:
      isExternal: false
      color: green_alt
      size: lg
      id: homeglobalAcquiringGA
      buttonText: Learn more
      url:  '/global-card-acquiring/'          

  pos:
    title: Combine all your customer touchpoints
    button-link-desktop:
      isExternal: false
      color: blue
      size: lg
      id: homePointofsaleOPdesktop
      buttonText: Learn more
      url:  '/pos/'
    button-link-mobile:
      isExternal: false
      color: blue_alt
      size: lg
      id: homePointofsaleOPmobile
      buttonText: Learn more
      url:  '/pos/'
    list:
    - listItem:
      title: POS set up
      content:
        paragraphs:
        - item: Your one-stop-shop for pan European coverage. No need for multiple partners, we can help you get set up with POS hardware and software so you can launch in new markets faster.​
    - listItem:
      title: Multi-channel mix
      content:
        paragraphs:
        - item: One solution that supports multiple ways to pay both on and offline. Impress customers with a faster service and help them feel right at home, whatever channel they're shopping on.
    - listItem:
      title: Personalized experience
      content:
        paragraphs:
        - item: Our reporting tool puts you in the luxury box over your playing field. Easily see which customers are paying where and personalize their journey.

  partners:
    slides:
      - slide:
        backgroundColor: '#be3c50'
        icon:
          name: logo-onthatass
          viewbox: '0 0 179 20'
          width: 269
          height: 30
        title:
          content: "“We're now able to full-fill our international growth plans with the new solution. It's nice to have the Payvision team on our side!”"
          color: '#FFFFFF'
        caption:
          content: "Julia Marcolina, General Manager ON THAT ASS"
          color: '#ffc882'
        link:
          linkText: Read more
          direction: right
          color: mustard-yellow
          url: '/payment-insights/case-study/on-that-ass-pairs-with-payvision-for-flawless-recurring-payments/' 
      - slide:
        backgroundColor: '#3237BE'
        icon:
          name: logo-selina
          viewbox: '0 0 120 36'
          width: 120
          height: 36
        title:
          content: "“We bolstered our payment strategy by unifying all our channels and achieved a quantifiable cost optimization.”"
          color: '#FFFFFF'
        caption:
          content: "John Santrizos, Director Treasury at Selina"
          color: '#B9DCFF'
        link:
          linkText: Read more
          direction: right
          color: baby-blue
          url: '/payment-insights/case-study/developing-a-future-proof-payments-solution-for-selina/' 
      - slide:
        backgroundColor: '#007364'
        icon:
          name: logo-mazda
          viewbox: '0 0 152 30'
          width: 222
          height: 42
        title:
          content: "“It was refreshing to work with such a forward-thinking company that’s equipped with the right tools and technology to create custom solutions.”"
          color: '#FFFFFF'
        caption:
          content: "Bart Mathot, Head of Commercial Customer Experience at Mazda Motor Europe"
          color: '#C8FFE1'
        link:
          linkText: Read more
          direction: right
          color: pastel-green
          url: '/payment-insights/case-study/mazda-teams-up-with-payvision-for-seamless-payments/' 
      - slide:
        backgroundColor: '#FF6200'
        icon:
          name: logo-white-ing-lion
          viewbox: '0 0 155 39'
          width: 155
          height: 38    
        title:
          content: "Get the best of both worlds"
          color: '#FFFFFF'
        plainText:
          content: "In 2018, banking and fintech united to form a unique payment processing team. ING brings lending and working capital solutions with a global network. While Payvision adds an all-in-one payment processing platform."
          color: '#000000'


  paymentInsights:
    title: Get the latest payment insights

  outro:
    title: Our experts can get you started
    text: To get the ball rolling, hit the button below, fill in the form and our experts will be in touch​
    image:
      placeholder:
        proportion: 132
        color: '#c8ffe1'
      alt: "Picture of Jamil Fatih and Geerard on a pastel green background"
      title: "Jamil Fatih and Geerard" 
      src:
        path: /assets/img/people/jamil_fatih_geerard.jpg
        width: 1x
      srcset:
        - path: /assets/img/people/jamil_fatih_geerard.jpg
          width: 1x
        - path: /assets/img/people/jamil_fatih_geerard.jpg
          width: 2x 
    button-link:
      isExternal: false
      color: green
      size: lg
      buttonText: Chat with an expert
      id: homeOutroContact
      classes:
        - class: outro_home-btn
      url: /contact/sales/    
---