// Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  }

  // Hero Carousel
  const heroCarousel = document.getElementById("hero-carousel")
  if (heroCarousel) {
    const slides = heroCarousel.querySelectorAll(".hero-slide")
    const indicators = document.querySelectorAll(".indicator")
    let currentSlide = 0
    let slideInterval

    function showSlide(index) {
      // Remove active class from all slides and indicators
      slides.forEach((slide) => slide.classList.remove("active"))
      indicators.forEach((indicator) => indicator.classList.remove("active"))

      // Add active class to current slide and indicator
      slides[index].classList.add("active")
      indicators[index].classList.add("active")
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length
      showSlide(currentSlide)
    }

    function startSlideshow() {
      slideInterval = setInterval(nextSlide, 5000) // Change slide every 5 seconds
    }

    function stopSlideshow() {
      clearInterval(slideInterval)
    }

    // Add click event to indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentSlide = index
        showSlide(currentSlide)
        stopSlideshow()
        startSlideshow() // Restart the slideshow
      })
    })

    // Start the slideshow
    startSlideshow()

    // Pause slideshow on hover
    heroCarousel.addEventListener("mouseenter", stopSlideshow)
    heroCarousel.addEventListener("mouseleave", startSlideshow)
  }

  // Form Submissions
  const quoteForm = document.getElementById("quote-form")
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(quoteForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      const requiredFields = ["company", "contact-person", "email", "phone"]
      let isValid = true

      requiredFields.forEach((field) => {
        const input = document.getElementById(field)
        if (!data[field] || data[field].trim() === "") {
          input.style.borderColor = "#ef4444"
          isValid = false
        } else {
          input.style.borderColor = "#e5e7eb"
        }
      })

      if (!isValid) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        document.getElementById("email").style.borderColor = "#ef4444"
        alert("Please enter a valid email address.")
        return
      }

      // Simulate form submission
      const submitButton = quoteForm.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent
      submitButton.textContent = "Submitting..."
      submitButton.disabled = true

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your inquiry! We will contact you within 24 hours.")
        quoteForm.reset()
        submitButton.textContent = originalText
        submitButton.disabled = false
      }, 2000)
    })
  }

  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      const requiredFields = ["name", "company", "email", "phone", "message"]
      let isValid = true

      requiredFields.forEach((field) => {
        const input = document.getElementById(field)
        if (!data[field] || data[field].trim() === "") {
          input.style.borderColor = "#ef4444"
          isValid = false
        } else {
          input.style.borderColor = "#e5e7eb"
        }
      })

      if (!isValid) {
        alert("Please fill in all required fields.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        document.getElementById("email").style.borderColor = "#ef4444"
        alert("Please enter a valid email address.")
        return
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]')
      const originalText = submitButton.textContent
      submitButton.textContent = "Sending..."
      submitButton.disabled = true

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! We will get back to you soon.")
        contactForm.reset()
        submitButton.textContent = originalText
        submitButton.disabled = false
      }, 2000)
    })
  }

  // FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item")
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      // Close all FAQ items
      faqItems.forEach((faqItem) => {
        faqItem.classList.remove("active")
      })

      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add("active")
      }
    })
  })

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".stat-item, .opportunity-card, .service-card, .feature-card, .mvv-item, .process-step",
  )
  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  function highlightNavLink() {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", highlightNavLink)

  // WhatsApp button animation
  const whatsappButton = document.querySelector(".whatsapp-float")
  if (whatsappButton) {
    // Add pulse animation
    setInterval(() => {
      whatsappButton.style.animation = "none"
      setTimeout(() => {
        whatsappButton.style.animation = "pulse 2s infinite"
      }, 10)
    }, 10000)
  }
})

// CSS for pulse animation
const style = document.createElement("style")
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`
document.head.appendChild(style)

// Utility function for form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePhone(phone) {
  const re = /^[+]?[1-9][\d]{0,15}$/
  return re.test(phone.replace(/\s/g, ""))
}

// Console log for debugging
console.log("[v0] SolarGen KE website loaded successfully")
