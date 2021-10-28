---
layout: ing-customers
title: For ING customers
description: "The payments package for small businesses to get e-commerce payments up and running in no time. For ING customers only."

pageName: ing_customers
colorTheme: 'payvision-blue'
colorThemeHex: '#3237BE'

scripts:
  floatingIcons: true
  tweenmax: true
  deskPhoneScrollingAnimation: true    

pageContent: 
  hero:
    title: Accept payments for your webshop 
    subtitle: Designed for small businesses to handle with ease.
    button:
      color: blue
      size: lg
      buttonText: Find out more
      id: ingcusHeroScroll
      classes:
        - class: hero_ing-btn
      scrollTo:
        target: yvFeatures
      id: ingcustomersScroll1
    link:
      direction: right
      color: baby-blue
      linkText: Take me to enterprise solutions
      isExternal: false
      url: '/'
      id: ingcustomersHeroHome
  
  ing:
    title: "Get the best of both worlds"
    text: "In January of 2018, bank and fintech teamed up to deliver a unique combo to payment processing. In our collaboration, ING brings lending and working capital solutions along with a worldwide distribution network.  Payvision comes to the table with the world’s most popular payment methods on a platform that’s supported by data and analytics. This recipe means better insights, less risk and an enhanced customer experience."

  features:
    title: Jump-start your webshop sales 
    text:
      - Selling online? We’ve got just the payments package to help you get your e-commerce business up and running in no time.  
      - "With our service, you can:"
    list:
      - listItem:
        icon: feature-web
        className: setup
        content:
          paragraphs:
          - item: Enjoy a simple and super easy setup
      - listItem:
        icon: feature-lock
        className: lock
        content:
          paragraphs:
          - item: Accept payments on a secure, PCI-compliant platform
      - listItem:
        icon: feature-report
        className: report
        content:
          paragraphs:
          - item: Get a clear overview of all your transactions on our intuitive reporting tool

  tib:
    image:
      alt: ok hand picture
      title: ok hand
      src:
        path: /assets/img/ing/ok-hand-2.jpg
        width: 1x
      srcset:
        - path: /assets/img/ing/ok-hand-2.jpg
          width: 1x
        - path: /assets/img/ing/ok-hand-2@2x.jpg
          width: 2x
      placeholder:
        color: '#FFC882'
        proportion: 149
    heading:
      color: payvision-red
      text: Our package is ideal for you if…
    list:
      - text: You’re a small business owner
        className: tick_item
      - text: You already have an ING Business account with access to Mijn ING Zakelijk 
        className: tick_item
      - text: You’re looking to set up your webshop
        className: tick_item

  methods:
    title:
      text: Let your customers pay their way
      color: payvision-blue
    text: Offer your shoppers their favorite payment methods, from credit and debit cards to iDEAL, Bancontact and more.
    iconsSet: ing

  checkout:
    title: Customize your checkout page 
    text: Design your checkout page to offer the best customer experience. No matter what device your shopper’s using, you can count on a fast and intuitive process.

  ready:
    title: Ready to start accepting online payments?
    subtitle: "You can request Payvision payment processing through your Mijn ING account Find out more on ING’s website at the links below:"
    styles:
      title: color-payvision-red
      gradient: cta-gradient-color-mustard-yellow
    image:
      placeholder:
        proportion: 132
        color: '#EEA58D'
      alt: "ready to start accepting online payments?"
      title: ready to start accepting online payments?
      src:
        path: /assets/img/ing/shopping.jpg
        width: 1x
      srcset:
        - path: /assets/img/ing/shopping.jpg
          width: 1x
        - path: /assets/img/ing/shopping@2x.jpg
          width: 2x
    linksList:
      - direction: right
        color: blue
        linkText: Payvision processing for Dutch customers
        isExternal: true
        url: 'https://www.ing.nl/zakelijk/betalen/geld-ontvangen/Payvision/betalingen_ontvangen_in_je_webshop.html'
      - direction: right
        color: blue
        linkText: Payvision processing for Belgian customers
        isExternal: true
        url: 'https://www.ing.be/en/business/daily-banking/incoming-payments/payvision'        
---