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
  // 1. CASE STUDY DATA STORE - REAL GITHUB REPOSITORIES (EXCLUDING PROJECT-US)
  // Headings: Problem, Approach, Tech choices and why, Result.
  // ----------------------------------------------------------------------------
  const caseStudies = {
    'maternal-infant-risk': {
      title: 'Maternal & Infant Mortality Risk Prediction',
      badge: 'Academic AI & Data Mining Architecture',
      githubUrl: 'https://github.com/SURIYAA-R/maternal-infant-risk',
      liveUrl: 'https://maternal-ir.vercel.app',
      sections: [
        {
          heading: 'Problem',
          content: 'Maternal and infant mortality remain critical public health crises. Timely detection of high-risk pregnancies can save lives, but clinical triage in rural and primary healthcare centers often relies on manual, delayed heuristics without automated decision support.'
        },
        {
          heading: 'Approach',
          content: 'Applied rigorous data mining methodologies (classification, clustering, and association rule mining) across 12 clinical, maternal-care, and socioeconomic attributes. Implemented IQR outlier filtering, SMOTE class balancing, and GridSearchCV hyperparameter tuning.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: Python, Scikit-Learn, Pandas, NumPy, FastAPI backend, and Vercel web deployment. Python provides audited mathematical precision and machine learning pipelines, while Vercel web deployment allows real-time risk predictions for frontline healthcare workers.'
        },
        {
          heading: 'Result',
          content: 'Delivered an explainable predictive model that accurately stratifies pregnancies into risk tiers with optimized sensitivity/recall, ensuring transparent feature weights rather than uninterpretable black-box decisions.'
        }
      ]
    },

    'weatherwatchsih': {
      title: 'WeatherWatch — National Weather Big Data Analytics Platform',
      badge: 'Smart India Hackathon • Big Data',
      githubUrl: 'https://github.com/SURIYAA-R/weatherwatchsih',
      sections: [
        {
          heading: 'Problem',
          content: 'Existing meteorological platforms either only aggregate official IMD/satellite data or crowdsource unverified social media reports—never cross-checking citizen observations against satellite ground truth before public dissemination.'
        },
        {
          heading: 'Approach',
          content: 'Engineered a dual-stream big data architecture that ingests crowdsourced citizen weather reports and cross-references them against official IMD and satellite radar feeds using automated geospatial radius verification and credibility scoring.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: Python, FastAPI for asynchronous concurrency, SQLite for low-latency indexing, Docker for reproducible containerization, and vanilla HTML5/JS for a lightweight frontend.'
        },
        {
          heading: 'Result',
          content: 'Validated end-to-end report verification in sub-100ms, filtering fraudulent or anomalous submissions before rendering reliable live alert overlays on the map.'
        }
      ]
    },

    'service-wct': {
      title: 'Service Dispatch & Dynamic Pricing Platform',
      badge: 'Enterprise Full-Stack Web Application',
      githubUrl: 'https://github.com/SURIYAA-R/SERVICE_WCT',
      liveUrl: 'https://service-wct.vercel.app',
      sections: [
        {
          heading: 'Problem',
          content: 'On-demand technical service platforms frequently suffer from confusing pricing structures, clunky checkout flows, and high drop-off rates due to unoptimized user experience.'
        },
        {
          heading: 'Approach',
          content: 'Architected an intuitive service dispatch portal using a vibrant neobrutalist aesthetic, instant search filtering, real-time dynamic pricing calculation, and interactive dispatch order confirmation workflows.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: Vanilla JavaScript, modern CSS Grid/Flexbox, and Vercel hosting. Avoiding heavy frameworks eliminated client bundle bloat and guaranteed instant responsiveness across mobile and desktop.'
        },
        {
          heading: 'Result',
          content: 'Deployed live on Vercel with zero external dependencies, providing seamless service customizability and instant checkout summaries.'
        }
      ]
    },

    'surfce': {
      title: 'SURFCE — Minimalist Music Player for Nothing Phone',
      badge: 'Native Android • Mobile Systems',
      githubUrl: 'https://github.com/SURIYAA-R/SURFCE',
      sections: [
        {
          heading: 'Problem',
          content: 'The Nothing Phone (2a) does not ship with a default offline music player, obliging users to depend on intrusive ad-supported third-party media players or streaming platforms.'
        },
        {
          heading: 'Approach',
          content: 'Developed a native Android audio player deeply inspired by Nothing OS’s monochrome typography and dot-matrix visual language, offering local storage media indexing, queuing, and low-latency audio playback.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: Kotlin, Android Jetpack, Media3 / ExoPlayer, and Kotlin Coroutines. Delivers battery-efficient background playback services and tight integration with Android hardware media controls.'
        },
        {
          heading: 'Result',
          content: 'Delivered an ultra-lightweight, ad-free, aesthetically cohesive music player with smooth local playlist management and zero latency.'
        }
      ]
    },

    'dbms-inventory': {
      title: 'Inventory Management & Warehouse Stock System',
      badge: 'Enterprise RDBMS Architecture',
      githubUrl: 'https://github.com/SURIYAA-R/DBMS_PROJECT_04',
      sections: [
        {
          heading: 'Problem',
          content: 'Small to mid-tier retail businesses struggle with fragmented stock tracking, leading to ledger discrepancies, undetected stockouts, manual supplier reordering delays, and lack of real-time margin visibility.'
        },
        {
          heading: 'Approach',
          content: 'Engineered a centralized relational web portal using PHP and MySQL. Designed normalized database schemas (3NF) to maintain transactional integrity across inventory logs, automated reorder threshold triggers, and created an intuitive management dashboard for stock operators.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: PHP and MySQL (InnoDB) hosted on Apache. MySQL InnoDB delivers reliable ACID-compliant transactions essential for inventory count accuracy, while PHP offers lightweight request-response lifecycles.'
        },
        {
          heading: 'Result',
          content: 'Eliminated manual stock reconciliation overhead, reduced supplier purchase order lead times, and provided interactive charts showcasing high-velocity vs stagnant stock items.'
        }
      ]
    },



    'olytabi-landing': {
      title: 'Olytabi — Modern Product Showcase Page',
      badge: 'UI / UX & Front-End Architecture',
      githubUrl: 'https://github.com/SURIYAA-R/olytabi-landing',
      sections: [
        {
          heading: 'Problem',
          content: 'Product landing sites suffer high bounce rates when value propositions are buried beneath complex nested graphics and slow-loading asset bundles.'
        },
        {
          heading: 'Approach',
          content: 'Designed a high-converting, mobile-responsive product showcase page emphasizing visual hierarchy, fluid typography scales, fast image rendering, and clear CTA conversion funnels.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: Modern HTML5, CSS Grid, and responsive media queries. Minimizes DOM depth and network payload for rapid mobile initial render.'
        },
        {
          heading: 'Result',
          content: 'Delivered an ultra-responsive product landing interface with instant visual feedback and smooth cross-device adaptability.'
        }
      ]
    },

    'krctsr': {
      title: 'KRCT Student Resource & Academic Portal',
      badge: 'Campus Systems & Institutional Workflows',
      githubUrl: 'https://github.com/SURIYAA-R/krctsr',
      sections: [
        {
          heading: 'Problem',
          content: 'College students experience fragmented access to academic circulars, syllabus archives, timetable updates, and departmental announcements across dispersed channels.'
        },
        {
          heading: 'Approach',
          content: 'Centralized institutional resources into an organized web portal designed specifically for K. Ramakrishnan College of Technology (KRCT) student workflows.'
        },
        {
          heading: 'Tech Choices and Why',
          content: 'Stack: HTML5, CSS3, and JavaScript hosted on GitHub Pages for zero maintenance cost, high reliability, and quick mobile retrieval.'
        },
        {
          heading: 'Result',
          content: 'Streamlined student academic workflows and provided single-click access to departmental syllabi and circular repositories.'
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
        <span style="font-size: 0.85rem; font-weight: 600; color: #555;">Architectural Assessment</span>
      </div>
    `;

    data.sections.forEach(sec => {
      html += `
        <article class="casestudy-section-block">
          <h4 class="casestudy-section-title">${sec.heading}</h4>
          <p class="casestudy-section-text">${sec.content}</p>
        </article>
      `;
    });

    html += `
      <div style="display:flex; justify-content:flex-end; flex-wrap:wrap; gap:0.75rem; margin-top:1.5rem; border-top: 2px solid #000; padding-top: 1rem;">
        ${data.githubUrl ? `<a href="${data.githubUrl}" class="btn btn-sm" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>` : ''}
        ${data.liveUrl ? `<a href="${data.liveUrl}" class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>` : ''}
        <a href="#contact" class="btn btn-sm btn-black" onclick="window.closeCaseStudyModal()">
          Discuss This System →
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

  // Use event delegation for all open-case-study buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-case-study-btn');
    if (btn) {
      const projId = btn.getAttribute('data-project');
      openCaseStudy(projId);
    }
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
  // 4. DYNAMIC GITHUB REPOSITORY SYNCHRONIZATION
  // Fetches repositories from GitHub API for user SURIYAA-R
  // STRICT REQUIREMENT: Exclude PROJECT-US
  // ----------------------------------------------------------------------------
  const initGitHubSync = async () => {
    const statusEl = document.getElementById('gitSyncStatus');
    const GITHUB_USERNAME = 'SURIYAA-R';
    const EXCLUDED_REPOS = ['PROJECT-US', 'PORTFOLIO'];

    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });

      if (!response.ok) return;

      const repos = await response.json();
      if (!Array.isArray(repos)) return;

      // Filter out PROJECT-US strictly
      const validRepos = repos.filter(repo => {
        return !EXCLUDED_REPOS.some(ex => ex.toUpperCase() === repo.name.toUpperCase());
      });

      if (statusEl) {
        statusEl.innerHTML = `
          <span class="role-pulse" aria-hidden="true"></span>
          <span>GitHub: ${GITHUB_USERNAME} • ${validRepos.length} Repositories Synced</span>
        `;
      }

      // Update existing cards with live GitHub stats (e.g. stars)
      validRepos.forEach(repo => {
        const card = document.querySelector(`[data-repo="${repo.name}"]`);
        if (card && repo.stargazers_count > 0) {
          const techStack = card.querySelector('.project-tech-stack');
          if (techStack && !card.querySelector('.git-stars-tag')) {
            const starTag = document.createElement('span');
            starTag.className = 'tech-tag git-stars-tag';
            starTag.style.backgroundColor = '#FFD700';
            starTag.style.color = '#000000';
            starTag.innerHTML = `★ ${repo.stargazers_count} Star${repo.stargazers_count > 1 ? 's' : ''}`;
            techStack.appendChild(starTag);
          }
        }
      });
    } catch (err) {
      console.info('GitHub live sync running in pre-rendered static mode.', err);
    }
  };

  initGitHubSync();

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

  const openContactModal = (name, email) => {
    lastActiveElement = document.activeElement;
    if (modalSenderName) modalSenderName.textContent = name || 'Colleague';
    if (modalSenderEmail) modalSenderEmail.textContent = email || 'your email address';

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

      if (!messageInput.value.trim()) {
        alert('Please provide your message details.');
        messageInput.focus();
        return;
      }

      const senderName = nameInput.value.trim();
      const senderEmail = emailInput.value.trim();

      // Reset form fields
      contactForm.reset();

      // Launch Glass Accent Modal
      openContactModal(senderName, senderEmail);
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
