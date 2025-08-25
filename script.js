// Mobile Navigation
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active")
    mobileMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active")
      mobileMenu.classList.remove("active")
    })
  })
})

// Hero Carousel
class HeroCarousel {
  constructor() {
    this.currentSlide = 0
    this.slides = document.querySelectorAll(".carousel-slide")
    this.dots = document.querySelectorAll(".carousel-dot")
    this.prevBtn = document.getElementById("carouselPrev")
    this.nextBtn = document.getElementById("carouselNext")
    this.autoPlayInterval = null

    this.init()
  }

  init() {
    // Add event listeners
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())

    // Dot navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index))
    })

    // Start autoplay
    this.startAutoPlay()

    // Pause autoplay on hover
    const carousel = document.getElementById("heroCarousel")
    carousel.addEventListener("mouseenter", () => this.stopAutoPlay())
    carousel.addEventListener("mouseleave", () => this.startAutoPlay())
  }

  goToSlide(index) {
    // Remove active class from current slide and dot
    this.slides[this.currentSlide].classList.remove("active")
    this.dots[this.currentSlide].classList.remove("active")

    // Update current slide
    this.currentSlide = index

    // Add active class to new slide and dot
    this.slides[this.currentSlide].classList.add("active")
    this.dots[this.currentSlide].classList.add("active")
  }

  nextSlide() {
    const nextIndex = (this.currentSlide + 1) % this.slides.length
    this.goToSlide(nextIndex)
  }

  prevSlide() {
    const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.goToSlide(prevIndex)
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide()
    }, 5000)
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval)
      this.autoPlayInterval = null
    }
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new HeroCarousel()
})

// Quote Form Handler
document.addEventListener("DOMContentLoaded", () => {
  const quoteForm = document.getElementById("quoteForm")
  const submitBtn = document.getElementById("submitBtn")

  if (quoteForm) {
    quoteForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      // Disable submit button and show loading state
      submitBtn.disabled = true
      submitBtn.textContent = "Submitting..."

      // Get form data
      const formData = new FormData(quoteForm)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        projectType: formData.get("projectType"),
        message: formData.get("message"),
      }

      try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Show success message
        alert("Thank you for your inquiry! We will contact you within 24 hours.")

        // Reset form
        quoteForm.reset()
      } catch (error) {
        alert("There was an error submitting your request. Please try again.")
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false
        submitBtn.textContent = "Request Quote"
      }
    })
  }
})

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Add scroll-based animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in")
      }
    })
  }, observerOptions)

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll(".opportunity-card, .service-card, .stat-item")
  animateElements.forEach((el) => observer.observe(el))
}

// Initialize scroll animations when DOM is loaded
document.addEventListener("DOMContentLoaded", addScrollAnimations)
