(() => {
  'use strict';

  const SUPABASE_URL = 'https://icqkuhbhcennhhbbwqgo.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_SZ_roAnr4fuwwF5S3LjC6g_Ryfz5C8R';

  const ALL_ACTIVE_ROLES = [
    'ADMIN',
    'WAREHOUSE',
    'ACCOUNTING',
    'SERVICE',
    'READ_ONLY',
    'SALES',
    'TECHS',
    'SYSTEM_ADMIN',
    'PROJECTS',
    'SERVICE_MANAGER'
  ];

  const navigation = [
    {
      label: 'Accounting',
      roles: ['ACCOUNTING', 'ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'Accounting Warehouse',
          href: 'accounting.html',
          roles: ['ACCOUNTING', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Company Ops P&L Review',
          href: 'company-ops-pl-review.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Accounting PPV',
      roles: ['ACCOUNTING', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'PPV Tracker',
          href: 'ppv-tracker.html',
          roles: ['ACCOUNTING', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'PPV Payroll Review',
          href: 'ppv-payroll-review.html',
          roles: ['ACCOUNTING', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Company Tools',
      roles: ALL_ACTIVE_ROLES,
      links: [
        {
          label: 'Data Import Center',
          href: 'data-import-center.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Company Calendar',
          href: 'company-calendar.html',
          roles: ALL_ACTIVE_ROLES
        },
        {
          label: 'Service Parts Lookup',
          href: 'service.html'
        },
        {
          label: 'Service Map',
          href: 'service-map.html'
        }
      ]
    },

    {
      label: 'Service CSC',
      roles: [
        'SERVICE',
        'WAREHOUSE',
        'ACCOUNTING',
        'TECHS',
        'READ_ONLY',
        'PROJECTS',
        'ADMIN',
        'SYSTEM_ADMIN',
        'SERVICE_MANAGER'
      ],
      links: [
        {
          label: 'Client Services Dashboard',
          href: 'client-services.html',
          roles: [
            'SERVICE',
            'WAREHOUSE',
            'ACCOUNTING',
            'TECHS',
            'READ_ONLY',
            'PROJECTS',
            'ADMIN',
            'SYSTEM_ADMIN',
            'SERVICE_MANAGER'
          ]
        },
        {
          label: 'RouteSafe Partner Program',
          href: 'routesafe-csc.html',
          roles: ['SERVICE', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Client Changes',
          href: 'client-changes.html',
          roles: [
            'ACCOUNTING',
            'SERVICE',
            'SERVICE_MANAGER',
            'ADMIN',
            'SYSTEM_ADMIN'
          ]
        },
        {
          label: 'CSC Service Labor Guide',
          href: 'csc-service-labor-guide.html',
          roles: [
            'ACCOUNTING',
            'SERVICE',
            'SERVICE_MANAGER',
            'READ_ONLY',
            'ADMIN',
            'SYSTEM_ADMIN'
          ]
        },
        {
          label: 'Annual Filter Changeout',
          href: 'annual-filter-changeout.html',
          roles: ['SERVICE', 'SERVICE_MANAGER', 'WAREHOUSE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Inspection Requests',
          href: 'inspection-requests-office.html',
          roles: ['SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Service Repair',
      roles: ['SERVICE', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'On-Call Schedule',
          href: 'on-call-schedule.html',
          roles: ['SERVICE', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Callback Tracking',
          href: 'callback-tracking.html',
          roles: ['SERVICE', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Service Revenue Analysis',
          href: 'service-revenue-analysis.html',
          roles: ['SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'RouteSafe Partner Management',
          href: 'routesafe-partner-management.html',
          roles: ['SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Service Route',
      roles: [
        'ACCOUNTING',
        'SERVICE',
        'SERVICE_MANAGER',
        'PROJECTS',
        'ADMIN',
        'SYSTEM_ADMIN'
      ],
      links: [
        {
          label: 'Performance Hub',
          href: 'performance-hub.html',
          roles: ['SERVICE', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Route Assignment Validation',
          href: 'route-assignment-validation.html',
          roles: [
            'ACCOUNTING',
            'SERVICE',
            'SERVICE_MANAGER',
            'ADMIN',
            'SYSTEM_ADMIN'
          ]
        },
        {
          label: 'Route Time Validation',
          href: 'route-time-validation.html',
          roles: [
            'ACCOUNTING',
            'SERVICE',
            'SERVICE_MANAGER',
            'ADMIN',
            'SYSTEM_ADMIN'
          ]
        },
        {
          label: 'Weekly Samsara',
          href: 'weekly-samsara.html',
          roles: ['SERVICE', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Callback Tracking',
          href: 'callback-tracking.html',
          roles: [
            'ACCOUNTING',
            'SERVICE',
            'SERVICE_MANAGER',
            'ADMIN',
            'SYSTEM_ADMIN'
          ]
        },
        {
          label: 'RSO Renovation Opportunities',
          href: 'rso-renovation-opportunities.html',
          roles: ['SERVICE_MANAGER', 'PROJECTS', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'RSO Tracking',
          href: 'rso-tracking.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Service Analytics',
      roles: ['SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'Service Manager Dashboard',
          href: 'service-manager-dashboard.html',
          roles: ['SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Route Profitability',
          href: 'route-profitability.html',
          roles: ['SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Warehouse',
      roles: [
        'WAREHOUSE',
        'ACCOUNTING',
        'PROJECTS',
        'SERVICE_MANAGER',
        'ADMIN',
        'SYSTEM_ADMIN'
      ],
      links: [
        {
          label: 'Gas Card Tracking',
          href: 'company-gas-card-tracking.html',
          roles: ['WAREHOUSE', 'ACCOUNTING', 'SERVICE_MANAGER', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Chemical Tracking',
          href: 'chemical-tracking.html',
          roles: ['WAREHOUSE', 'ACCOUNTING', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Inventory Receiving / Issuing',
          href: 'warehouse.html',
          roles: ['WAREHOUSE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Warehouse Management',
          href: 'warehouse-management.html',
          roles: ['WAREHOUSE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Purchasing',
          href: 'purchasing.html',
          roles: ['WAREHOUSE', 'PROJECTS', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'JobTread Workflow',
          href: 'jobtread-workflow.html',
          roles: ['WAREHOUSE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Warehouse Reports',
          href: 'warehouse-reports.html',
          roles: ['WAREHOUSE', 'PROJECTS', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Sales',
      roles: ['SALES', 'ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'CSC Service Labor Guide',
          href: 'csc-service-labor-guide.html',
          roles: ['SALES', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Projects',
      roles: ['PROJECTS', 'ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'Projects Command Center',
          href: 'projects-command.html',
          roles: ['PROJECTS', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },

    {
      label: 'Admin',
      roles: ['ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'System / Admin Tools',
          href: 'users.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Service Department Admin',
          href: 'service-department-admin.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'PPV Admin',
          href: 'ppv-admin.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Warehouse Admin',
          href: 'admin.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    }
  ];

  let navClient = null;
  let currentProfile = null;

  function currentPageName() {
    return (
      window.location.pathname.split('/').pop() || 'index.html'
    ).toLowerCase();
  }

  function isAllowed(roles, role) {
    return !roles || roles.length === 0 || roles.includes(role);
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }


  /* Molinari Pools brand logo — shared header only. */
  function installMolinariBrandStyles() {
    if (document.getElementById('molinariSharedBrandStyles')) return;
    const element = document.createElement('style');
    element.id = 'molinariSharedBrandStyles';
    element.textContent = `
      .shared-nav-topline { min-height: 68px; padding-top: 7px; padding-bottom: 7px; }
      .shared-nav-brand { display: flex; align-items: center; min-width: 0; gap: 13px; white-space: normal; }
      .shared-nav-logo {
        display: block; width: 150px; height: auto; max-height: 51px;
        flex-shrink: 0; object-fit: contain; border-radius: 6px;
        background: #fff; border: 1px solid rgba(255,255,255,.4);
      }
      .shared-nav-brand-title {
        display: block; line-height: 1.2; white-space: normal;
        letter-spacing: .045em; max-width: 240px;
      }
      @media (max-width: 900px) {
        .shared-nav-topline { min-height: 64px; }
        .shared-nav-logo { width: 132px; max-height: 44px; }
        .shared-nav-brand-title { max-width: 176px; }
        .shared-nav-menubar { top: 100%; max-height: calc(100vh - 64px); }
      }
      @media (max-width: 520px) {
        .shared-nav-topline { padding-left: 10px; padding-right: 10px; gap: 8px; }
        .shared-nav-brand { gap: 8px; }
        .shared-nav-logo { width: clamp(100px, 30vw, 120px); max-height: 42px; }
        .shared-nav-brand-title { font-size: 11px; line-height: 1.15; letter-spacing: 0; max-width: 120px; }
        .shared-nav-account { gap: 4px; }
        .shared-nav-mobile-toggle { width: 36px; min-width: 36px; }
      }
      @media (max-width: 370px) {
        .shared-nav-logo { width: 95px; }
        .shared-nav-brand-title { max-width: 100px; font-size: 10px; }
      }
    `;
    document.head.appendChild(element);
  }

  function renderShell(container) {
    installMolinariBrandStyles();
    container.innerHTML = `
      <div class="shared-nav-topline">
        <a
          class="shared-nav-brand"
          href="index.html"
          aria-label="Molinari Operating System main menu"
        >
          <img class="shared-nav-logo" src="molinari-pools-logo.png" alt="Molinari Pools" width="150" height="48" loading="eager" decoding="async">
          <span class="shared-nav-brand-title">MOLINARI OPERATING SYSTEM</span>
        </a>

        <div class="shared-nav-account">
          <span id="sharedNavUser" class="shared-nav-user">
            Loading menu...
          </span>

          <button
            id="sharedNavLogout"
            class="shared-nav-logout"
            type="button"
          >
            Logout
          </button>

          <button
            id="sharedNavMobileToggle"
            class="shared-nav-mobile-toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
          >
            ☰
          </button>
        </div>
      </div>

      <nav
        id="sharedNavMenubar"
        class="shared-nav-menubar"
        aria-label="Company systems navigation"
      ></nav>
    `;
  }

  function renderMenu(role) {
    const menubar = document.getElementById('sharedNavMenubar');

    if (!menubar) {
      return;
    }

    const currentPage = currentPageName();

    const homeActive =
      currentPage === '' ||
      currentPage === 'index.html';

    const visibleSections = navigation
      .filter(section => isAllowed(section.roles, role))
      .map(section => ({
        ...section,
        // Alphabetize the visible links in every dropdown (A-Z),
        // without changing the main menu order or role permissions.
        links: section.links
          .filter(link => isAllowed(link.roles, role))
          .sort((a, b) =>
            a.label.localeCompare(b.label, 'en', {
              sensitivity: 'base',
              numeric: true
            })
          )
      }))
      .filter(section =>
        section.links.length > 0 ||
        section.showWhenEmpty === true
      );

    const sectionHtml = visibleSections
      .map((section, sectionIndex) => {
        const hasActivePage = section.links.some(
          link => link.href.toLowerCase() === currentPage
        );

        const links =
          section.links.length > 0
            ? section.links
                .map(link => {
                  const active =
                    link.href.toLowerCase() === currentPage;

                  return `
                    <a
                      class="shared-nav-link${active ? ' active' : ''}"
                      href="${escapeHtml(link.href)}"
                      ${active ? 'aria-current="page"' : ''}
                    >
                      ${escapeHtml(link.label)}
                    </a>
                  `;
                })
                .join('')
            : `
                <span
                  class="shared-nav-link"
                  aria-disabled="true"
                  style="cursor: default; opacity: 0.65;"
                >
                  Future sales tools will appear here.
                </span>
              `;

        return `
          <div
            class="shared-nav-item"
            data-nav-section="${sectionIndex}"
          >
            <button
              class="shared-nav-trigger${
                hasActivePage ? ' active-section' : ''
              }"
              type="button"
              aria-expanded="false"
            >
              <span>${escapeHtml(section.label)}</span>
              <span class="shared-nav-caret">▼</span>
            </button>

            <div class="shared-nav-dropdown">
              ${links}
            </div>
          </div>
        `;
      })
      .join('');

    menubar.innerHTML = `
      <a
        class="shared-nav-home${homeActive ? ' active' : ''}"
        href="index.html"
        ${homeActive ? 'aria-current="page"' : ''}
      >
        Main Menu
      </a>

      ${sectionHtml}
    `;

    bindMenuInteractions();
  }

  function closeAllDropdowns(exceptItem = null) {
    document
      .querySelectorAll('.shared-nav-item.open')
      .forEach(item => {
        if (item !== exceptItem) {
          item.classList.remove('open');

          const trigger = item.querySelector(
            '.shared-nav-trigger'
          );

          if (trigger) {
            trigger.setAttribute(
              'aria-expanded',
              'false'
            );
          }
        }
      });
  }

  function bindMenuInteractions() {
    document
      .querySelectorAll('.shared-nav-trigger')
      .forEach(trigger => {
        trigger.addEventListener('click', event => {
          event.stopPropagation();

          const item = trigger.closest(
            '.shared-nav-item'
          );

          const willOpen =
            !item.classList.contains('open');

          closeAllDropdowns(item);

          item.classList.toggle(
            'open',
            willOpen
          );

          trigger.setAttribute(
            'aria-expanded',
            String(willOpen)
          );
        });

        trigger.addEventListener('keydown', event => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();

            const item = trigger.closest(
              '.shared-nav-item'
            );

            closeAllDropdowns(item);

            item.classList.add('open');

            trigger.setAttribute(
              'aria-expanded',
              'true'
            );

            const firstLink = item.querySelector(
              '.shared-nav-link'
            );

            if (firstLink) {
              firstLink.focus();
            }
          }
        });
      });

    document
      .querySelectorAll('.shared-nav-dropdown')
      .forEach(dropdown => {
        dropdown.addEventListener(
          'keydown',
          event => {
            if (event.key === 'Escape') {
              const item = dropdown.closest(
                '.shared-nav-item'
              );

              item.classList.remove('open');

              const trigger = item.querySelector(
                '.shared-nav-trigger'
              );

              trigger.setAttribute(
                'aria-expanded',
                'false'
              );

              trigger.focus();
            }
          }
        );
      });
  }

  async function loadProfile() {
    if (
      !window.supabase ||
      !window.supabase.createClient
    ) {
      throw new Error(
        'Supabase library is not available.'
      );
    }

    navClient = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );

    const {
      data: sessionData,
      error: sessionError
    } = await navClient.auth.getSession();

    if (sessionError) {
      throw sessionError;
    }

    const session = sessionData?.session;

    if (!session?.user) {
      return {
        session: null,
        profile: null
      };
    }

    const {
      data: profile,
      error: profileError
    } = await navClient
      .from('user_profiles')
      .select('id, full_name, role, active')
      .eq('id', session.user.id)
      .maybeSingle();

    if (profileError) {
      throw profileError;
    }

    return {
      session,
      profile
    };
  }

  async function logout() {
    if (typeof window.appLogout === 'function') {
      await window.appLogout();
      return;
    }

    if (navClient) {
      await navClient.auth.signOut();
    }

    window.location.href = 'index.html';
  }

  async function initializeSharedNavigation() {
    const container = document.getElementById(
      'sharedNavigation'
    );

    if (!container) {
      return;
    }

    document.body.classList.add(
      'has-shared-navigation'
    );

    renderShell(container);

    document.addEventListener(
      'click',
      () => closeAllDropdowns()
    );

    document.addEventListener(
      'keydown',
      event => {
        if (event.key === 'Escape') {
          closeAllDropdowns();
        }
      }
    );

    const mobileToggle = document.getElementById(
      'sharedNavMobileToggle'
    );

    const menubar = document.getElementById(
      'sharedNavMenubar'
    );

    mobileToggle.addEventListener(
      'click',
      event => {
        event.stopPropagation();

        const open =
          menubar.classList.toggle(
            'mobile-open'
          );

        mobileToggle.setAttribute(
          'aria-expanded',
          String(open)
        );

        mobileToggle.setAttribute(
          'aria-label',
          open ? 'Close menu' : 'Open menu'
        );
      }
    );

    document
      .getElementById('sharedNavLogout')
      .addEventListener(
        'click',
        logout
      );

    try {
      const {
        session,
        profile
      } = await loadProfile();

      currentProfile = profile;

      const userLabel =
        document.getElementById(
          'sharedNavUser'
        );

      if (
        !session ||
        !profile ||
        profile.active !== true
      ) {
        userLabel.textContent =
          'Not signed in';

        document.getElementById(
          'sharedNavLogout'
        ).textContent = 'Login';

        document.getElementById(
          'sharedNavLogout'
        ).onclick = () => {
          window.location.href =
            'index.html';
        };

        renderMenu(null);

        return;
      }

      userLabel.textContent =
        `${
          profile.full_name ||
          session.user.email
        } · ${profile.role}`;

      renderMenu(profile.role);
    } catch (error) {
      const userLabel =
        document.getElementById(
          'sharedNavUser'
        );

      if (userLabel) {
        userLabel.textContent =
          'Menu access check failed';
      }

      renderMenu(null);

      console.error(
        'Shared navigation initialization failed:',
        error
      );
    }
  }

  window.MolinariSharedNavigation = {
    initialize: initializeSharedNavigation,
    getProfile: () => currentProfile
  };

  if (
    document.readyState === 'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      initializeSharedNavigation
    );
  } else {
    initializeSharedNavigation();
  }
})();
