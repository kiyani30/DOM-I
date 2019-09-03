const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// update all the img 
document.getElementById("middle-img").src="img/mid-page-accent.jpg";
document.getElementById("cta-img").src="img/header-img.png";

// Nav bar

const nav = document.querySelectorAll('nav a');
for (let i = 0; i < nav.length; i++) {
  nav[i].innerText = siteContent["nav"]["nav-item-" + (1+i)]
}

// Header
 const title = document.querySelector('.cta-text h1');
 title.textContent = "DOM is Awesome";

// Top content

const firstTitle = document.querySelectorAll('.top-content h4');
firstTitle[0].textContent = siteContent["main-content"]["features-h4"];
firstTitle[1].textContent = siteContent["main-content"]["about-h4"];

const firstParagraph = document.querySelectorAll('.top-content p');
firstParagraph[0].textContent = siteContent["main-content"]["features-content"];
firstParagraph[1].textContent = siteContent["main-content"]["about-content"];

//  Bottom content

const secondTitle = document.querySelectorAll('.bottom-content h4');
secondTitle[0].textContent = siteContent["main-content"]["features-h4"];
secondTitle[1].textContent = siteContent["main-content"]["about-h4"];

const secondParagraph = document.querySelectorAll('.bottom-content p');
secondParagraph[0].textContent = siteContent["main-content"]["services-content"];
secondParagraph[1].textContent = siteContent["main-content"]["product-content"];

// Contact :

const contact = document.querySelectorAll('.contact');
contact.innerText = "contact";
