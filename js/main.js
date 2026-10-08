/**
 * ==============================================================================
 * PORTFOLIO CLIENT APPLICATION - SURIYAA R
 * Web Technology Consultant | B.Tech IT
 * 
 * Vanilla JavaScript (No Frameworks) for maximum performance, zero dependencies,
 * and seamless hosting on GitHub Pages / Netlify.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------------------------
  // 1. CASE STUDY DATA STORE
  // Headings required: Problem, Approach, Tech choices and why, Result.
  // Formatted with sensible placeholder text marked with TODO comments for Suriyaa.
  // ----------------------------------------------------------------------------
  const caseStudies = {
    'health-risk': {
      title: 'Health Risk Predictor System (Java, Ongoing)',
      badge: 'Featured Glass Accent Project',
      sections: [
        {
          heading: 'Problem',
          content: 'Modern clinical assessment often relies on delayed lab tests or disconnected manual calculations to identify preventative cardiovascular, metabolic, and lifestyle risk factors. Early stage intervention requires a consistent, transparent decision-support system that can calculate stratified risk levels rapidly from basic physiological indicators.',
          todo: 'TODO: Detail specific clinical risk metrics (e.g. BMI, blood pressure thresholds, lifestyle indicators) your model analyzes.'
        },
        {
          heading: 'Approach',
          content: 'Architected a deterministic rule-based analysis engine using clean Object-Oriented principles in Java. Implemented modular evaluators where patient profiles pass through extensible evaluation chains, allowing continuous refinement of health guidelines without altering core application logic.',
          todo: 'TODO: Explain your scoring logic or decision tree structure (e.g., patient class hierarchy, validation pipeline).'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Chosen Stack: Core Java for strict type safety, memory stability, and predictable execution during mathematical evaluations. Designing the backend domain logic cleanly in Java enables straightforward decoupling into a Spring Boot REST API microservice or Jakarta EE service for future cloud and web deployment.',
          todo: 'TODO: Add details on the planned web architecture (e.g., Spring Boot REST API + React / Angular frontend).'
        },
        {
          heading: 'Result',
          content: 'Successfully built a validated console prototype that processes health profiles in sub-millisecond execution times, delivering transparent risk stratification and preventative recommendations. System test coverage validated against diverse synthetic patient records.',
          todo: 'TODO: Add your benchmark numbers, sample test cases, or status of the web interface conversion.'
        }
      ]
    },

    'inventory': {
      title: 'Inventory Management System',
      badge: 'Full-Stack Web Architecture',
      sections: [
        {
          heading: 'Problem',
          content: 'Small and mid-tier retail businesses struggle with fragmented stock tracking, leading to frequent discrepancy errors between warehouse reality and ledger records, undetected stockouts, manual supplier reordering delays, and lack of real-time visibility into sales margins.',
          todo: 'TODO: Replace with your specific client or project scenario, such as warehouse scale or item volume.'
        },
        {
          heading: 'Approach',
          content: 'Engineered a centralized relational web portal using PHP and MySQL. Designed normalized database schemas (3NF) to maintain transactional integrity across inventory logs, automated reorder threshold triggers, and created an intuitive management dashboard for stock operators.',
          todo: 'TODO: Mention your specific features (e.g., low-stock email alerts, barcode scanning, CSV export, role-based access).'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Chosen Stack: PHP and MySQL hosted on Apache (XAMPP environment). PHP offers lightweight request-response lifecycles ideal for rapid internal dashboard tools, while MySQL InnoDB delivers reliable ACID-compliant transactions essential for inventory count accuracy.',
          todo: 'TODO: Detail why you selected PHP vs alternatives and how you handled SQL injection protection (e.g., PDO prepared statements).'
        },
        {
          heading: 'Result',
          content: 'Delivered an end-to-end system that eliminated manual stock reconciliation overhead, reduced supplier purchase order lead times, and provided interactive charts showcasing high-velocity vs stagnant stock items.',
          todo: 'TODO: Add quantitative results (e.g., % time saved, numbers of products tested in database).'
        }
      ]
    },

    'movie-ticket': {
      title: 'Movie Ticket Booking Simulator',
      badge: 'Systems & Concurrency Simulation',
      sections: [
        {
          heading: 'Problem',
          content: 'High-concurrency ticket reservation systems frequently encounter race conditions: multiple simultaneous customers attempting to book the same prime seat leads to double-booking anomalies, inconsistent payment authorizations, and degraded customer trust.',
          todo: 'TODO: Detail specific scenario simulated (e.g. multiplex screen capacity, booking surge, timing constraints).'
        },
        {
          heading: 'Approach',
          content: 'Developed a robust Java console simulation modeling theaters, movie schedules, visual seating grids, and shopping cart sessions. Implemented seat state locking mechanisms to ensure atomic reservations throughout the payment processing cycle.',
          todo: 'TODO: Outline how you modeled your data structures (e.g., 2D seat arrays, synchronized blocks, collections).'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Chosen Stack: Java Core utilizing standard data structures, multithreading locks, and OOP abstraction. Java provides built-in concurrency utilities (synchronization, atomic variables) to simulate real-world seat lock-and-release time windows without external database dependencies.',
          todo: 'TODO: Highlight whether you used Console UI, Swing, or custom console formatting for screen layout visualization.'
        },
        {
          heading: 'Result',
          content: 'Accurately simulated multi-user seat selection workflows with instantaneous conflict detection, automated seat release timeouts, mock receipt generation, and zero data corruption during stress testing.',
          todo: 'TODO: Mention test scenarios executed or simulated concurrent user metrics.'
        }
      ]
    }
  };

  // ----------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION DRAWER
  // ----------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta-item a');

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : navMenu.classList.toggle('open');
      if (open !== undefined) {
        navMenu.classList.toggle('open', isOpen);
      }
      navToggle.setAttribute('aria-expanded', String(isOpen));
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !navMenu.classList.contains('open');
      toggleMenu(willOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(false);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 3. CASE STUDY DETAILS MODAL
  // Pure Brutalist Solid Modal (Keeping strict max 3 backdrop-filter constraint)
  // ----------------------------------------------------------------------------
  const caseStudyModal = document.getElementById('caseStudyModal');
  const caseStudyTitle = document.getElementById('caseStudyTitle');
  const caseStudyContent = document.getElementById('caseStudyContent');
  const closeCaseStudyBtn = document.getElementById('closeCaseStudyBtn');
  const openCaseStudyBtns = document.querySelectorAll('.open-case-study-btn');
  let lastActiveElement = null;

  const openCaseStudy = (projectId) => {
    const data = caseStudies[projectId];
    if (!data) return;

    lastActiveElement = document.activeElement;
    caseStudyTitle.textContent = data.title;

    // Render structured case study blocks with Problem, Approach, Tech Choices, Result
    let html = `
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; border-bottom: 2px solid #000; padding-bottom: 0.75rem;">
        <span style="font-family: var(--font-heading); font-weight: 800; font-size: 0.9rem; text-transform: uppercase; background: var(--color-black); color: #FFF; padding: 0.25rem 0.6rem;">${data.badge}</span>
        <span style="font-size: 0.85rem; font-weight: 600; color: #555;">Consulting Assessment</span>
      </div>
    `;

    data.sections.forEach(sec => {
      html += `
        <article class="casestudy-section-block">
          <h4 class="casestudy-section-title">${sec.heading}</h4>
          <p class="casestudy-section-text">${sec.content}</p>
          <div class="casestudy-todo-badge" title="Developer reminder">
            ${sec.todo}
          </div>
        </article>
      `;
    });

    html += `
      <div style="display:flex; justify-content:flex-end; gap:1rem; margin-top:1.5rem; border-top: 2px solid #000; padding-top: 1rem;">
        <a href="#contact" class="btn btn-sm btn-primary" onclick="window.closeCaseStudyModal()">
          Discuss This Architecture →
        </a>
      </div>
    `;

    caseStudyContent.innerHTML = html;
    caseStudyModal.classList.add('active');
    caseStudyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      if (closeCaseStudyBtn) closeCaseStudyBtn.focus();
    }, 50);
  };

  const closeCaseStudy = () => {
    if (!caseStudyModal) return;
    caseStudyModal.classList.remove('active');
    caseStudyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  // Expose to window for inline calls if needed
  window.closeCaseStudyModal = closeCaseStudy;

  openCaseStudyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = btn.getAttribute('data-project');
      openCaseStudy(projId);
    });
  });

  if (closeCaseStudyBtn) {
    closeCaseStudyBtn.addEventListener('click', closeCaseStudy);
  }

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) {
        closeCaseStudy();
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 4. CONTACT SUBMISSION SUCCESS MODAL (GLASS ACCENT 3 OF 3)
  // On submit, validates input and opens the glass modal over electric blue shape.
  // ----------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const contactModalOverlay = document.getElementById('contactModalOverlay');
  const closeContactModalBtn = document.getElementById('closeContactModalBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const modalSenderName = document.getElementById('modalSenderName');
  const modalSenderEmail = document.getElementById('modalSenderEmail');
  const modalSenderSubject = document.getElementById('modalSenderSubject');

  const openContactModal = (name, email, subject) => {
    lastActiveElement = document.activeElement;
    if (modalSenderName) modalSenderName.textContent = name || 'Colleague';
    if (modalSenderEmail) modalSenderEmail.textContent = email || 'your email address';
    if (modalSenderSubject) modalSenderSubject.textContent = subject || 'Consultation Inquiry';

    contactModalOverlay.classList.add('active');
    contactModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (closeContactModalBtn) closeContactModalBtn.focus();
    }, 50);
  };

  const closeContactModal = () => {
    if (!contactModalOverlay) return;
    contactModalOverlay.classList.remove('active');
    contactModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');

      // Basic client-side validation
      if (!nameInput.value.trim()) {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }

      if (!emailInput.value.trim() || !emailInput.checkValidity()) {
        alert('Please provide a valid email address.');
        emailInput.focus();
        return;
      }

      if (!subjectInput.value.trim()) {
        alert('Please select a subject or consultation scope.');
        subjectInput.focus();
        return;
      }

      if (!messageInput.value.trim()) {
        alert('Please provide some project or inquiry details.');
        messageInput.focus();
        return;
      }

      const senderName = nameInput.value.trim();
      const senderEmail = emailInput.value.trim();
      const senderSubject = subjectInput.value.trim();

      // Reset form fields
      contactForm.reset();

      // Launch Glass Accent Modal
      openContactModal(senderName, senderEmail, senderSubject);
    });
  }

  if (closeContactModalBtn) {
    closeContactModalBtn.addEventListener('click', closeContactModal);
  }

  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', closeContactModal);
  }

  if (contactModalOverlay) {
    contactModalOverlay.addEventListener('click', (e) => {
      if (e.target === contactModalOverlay) {
        closeContactModal();
      }
    });
  }

  // ----------------------------------------------------------------------------
  // 5. GLOBAL KEYBOARD ACCESSIBILITY (ESC TO CLOSE ACTIVE MODALS)
  // ----------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactModalOverlay && contactModalOverlay.classList.contains('active')) {
        closeContactModal();
      } else if (caseStudyModal && caseStudyModal.classList.contains('active')) {
        closeCaseStudy();
      }
    }
  });

  // ----------------------------------------------------------------------------
  // 6. ONE-CLICK CLIPBOARD COPY FOR EMAIL & PHONE
  // ----------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.copy-btn[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.backgroundColor = 'var(--color-accent)';
        btn.style.color = '#FFFFFF';

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        console.warn('Clipboard write failed, using fallback prompt', err);
        prompt('Copy to clipboard:', textToCopy);
      }
    });
  });

  // ----------------------------------------------------------------------------
  // 7. DYNAMIC FOOTER YEAR
  // ----------------------------------------------------------------------------
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

});
