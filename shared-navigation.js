(() => {
  'use strict';

  const SUPABASE_URL = 'https://icqkuhbhcennhhbbwqgo.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_SZ_roAnr4fuwwF5S3LjC6g_Ryfz5C8R';
  const ALL_ACTIVE_ROLES = [
    'ADMIN', 'WAREHOUSE', 'ACCOUNTING', 'SERVICE', 'READ_ONLY',
    'SALES', 'TECHS', 'SYSTEM_ADMIN', 'PROJECTS'
  ];

  const navigation = [
    {
      label: 'Admin',
      roles: ['ADMIN', 'SYSTEM_ADMIN'],
      links: [
        {
          label: 'System / Admin Tools',
          href: 'users.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },
    {
      label: 'Accounting',
      roles: ALL_ACTIVE_ROLES,
      links: [
        {
          label: 'Accounting Warehouse',
          href: 'accounting.html',
          roles: ['ACCOUNTING', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Client Changes',
          href: 'client-changes.html',
          roles: ['ACCOUNTING', 'SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'PPV Tracker',
          href: 'ppv-tracker.html',
          roles: ['ACCOUNTING', 'SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'PPV Safeguard Tracking',
          href: 'ppv-safeguard-tracking.html',
          roles: ['ACCOUNTING', 'SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'PPV Admin',
          href: 'ppv-admin.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'PPV Payroll Review',
          href: 'ppv-payroll-review.html',
          roles: ['ACCOUNTING', 'SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Company Calendar',
          href: 'company-calendar.html',
          roles: ALL_ACTIVE_ROLES
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
      label: 'Service',
      roles: [
        'SERVICE', 'WAREHOUSE', 'ACCOUNTING', 'SALES', 'TECHS',
        'READ_ONLY', 'PROJECTS', 'ADMIN', 'SYSTEM_ADMIN'
      ],
      links: [
        {
          label: 'Service Parts Lookup',
          href: 'service.html'
        },
        {
          label: 'Client Services Dashboard',
          href: 'client-services.html',
          roles: [
            'SERVICE', 'WAREHOUSE', 'ACCOUNTING', 'TECHS',
            'READ_ONLY', 'PROJECTS', 'ADMIN', 'SYSTEM_ADMIN'
          ]
        },
        {
          label: 'Service Map',
          href: 'service-map.html'
        },
        {
          label: 'Service Manager Dashboard',
          href: 'service-manager-dashboard.html',
          roles: ['SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Route Assignment Validation',
          href: 'route-assignment-validation.html',
          roles: ['ACCOUNTING', 'SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Route Time Validation',
          href: 'route-time-validation.html',
          roles: ['ACCOUNTING', 'SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'RSO Tracking',
          href: 'rso-tracking.html',
          roles: ['ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Inspection Requests',
          href: 'inspection-requests-office.html',
          roles: ['SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Client Marketing Sync',
          href: 'client-marketing-sync.html',
          roles: ['SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Service Department Admin',
          href: 'service-department-admin.html',
          roles: ['SERVICE', 'ADMIN', 'SYSTEM_ADMIN']
        }
      ]
    },
    {
      label: 'Warehouse',
      roles: [
        'WAREHOUSE', 'ACCOUNTING', 'PROJECTS',
        'ADMIN', 'SYSTEM_ADMIN'
      ],
      links: [
        {
          label: 'Chemical Tracking',
          href: 'chemical-tracking.html',
          roles: ['WAREHOUSE', 'ACCOUNTING', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Warehouse Operations',
          href: 'warehouse.html',
          roles: ['WAREHOUSE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Warehouse Management',
          href: 'warehouse-management.html',
          roles: ['WAREHOUSE', 'ADMIN', 'SYSTEM_ADMIN']
        },
        {
          label: 'Warehouse Reports',
          href: 'warehouse-reports.html',
          roles: ['WAREHOUSE', 'PROJECTS', 'ADMIN', 'SYSTEM_ADMIN']
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

  function renderShell(container) {
    container.innerHTML = `
      <div class="shared-nav-topline">
        <a
          class="shared-nav-brand"
          href="index.html"
          aria-label="Molinari Pools main menu"
        >
          <span class="shared-nav-brand-mark">MP</span>
          <span>MOLINARI POOLS</span>
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
    if (!menubar) return;

    const currentPage = currentPageName();
    const homeActive =
      currentPage === '' || currentPage === 'index.html';

    const visibleSections = navigation
      .filter(section => isAllowed(section.roles, role))
      .map(section => ({
        ...section,
        links: section.links.filter(link =>
          isAllowed(link.roles, role)
        )
      }))
      .filter(section => section.links.length > 0);

    const sectionHtml = visibleSections
      .map((section, sectionIndex) => {
        const hasActivePage = section.links.some(
          link => link.href.toLowerCase() === currentPage
        );

        const links = section.links
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
          .join('');

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
          item.classList.toggle('open', willOpen);

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

            if (firstLink) firstLink.focus();
          }
        });
      });

    document
      .querySelectorAll('.shared-nav-dropdown')
      .forEach(dropdown => {
        dropdown.addEventListener('keydown', event => {
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
        });
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

    if (sessionError) throw sessionError;

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

    if (profileError) throw profileError;

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

    if (!container) return;

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

        const open = menubar.classList.toggle(
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
      .addEventListener('click', logout);

    try {
      const {
        session,
        profile
      } = await loadProfile();

      currentProfile = profile;

      const userLabel = document.getElementById(
        'sharedNavUser'
      );

      if (
        !session ||
        !profile ||
        profile.active !== true
      ) {
        userLabel.textContent = 'Not signed in';

        document.getElementById(
          'sharedNavLogout'
        ).textContent = 'Login';

        document.getElementById(
          'sharedNavLogout'
        ).onclick = () => {
          window.location.href = 'index.html';
        };

        renderMenu(null);
        return;
      }

      userLabel.textContent =
        `${profile.full_name || session.user.email}` +
        ` · ${profile.role}`;

      renderMenu(profile.role);
    } catch (error) {
      const userLabel = document.getElementById(
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

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      initializeSharedNavigation
    );
  } else {
    initializeSharedNavigation();
  }
})();
