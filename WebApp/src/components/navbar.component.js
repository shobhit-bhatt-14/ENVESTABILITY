const NavBar = () => {
  return (
    <header>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">
              ThinkIt
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-content"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-content">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item ps-3">
                  <a href="#" class="nav-link active">
                    Home
                  </a>
                </li>
                <li class="nav-item ps-2">
                  <a href=" " class="nav-link">
                    CauseKnow
                  </a>
                </li>
                <li class="nav-item ps-2">
                  <a href=" " class="nav-link">
                    EvoSol
                  </a>
                </li>
                <li class="nav-item ps-2">
                  <a href=" " class="nav-link">
                    HelpGoGreen
                  </a>
                </li>
                <li class="nav-item dropdown ps-3">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="productsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Sign-Up/Log-In
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="productsDropdown">
                    <li>
                      <h3 class="dropdown-header">Company</h3>
                    </li>
                    <li>
                      <a
                        onclick="loadProductsPages('C2')"
                        class="dropdown-item"
                        href="#"
                      >
                        Investor
                      </a>
                    </li>
                    <li>
                      <a
                        onclick="loadProductsPages('C1')"
                        class="dropdown-item"
                        href="#"
                      >
                        Individual
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item ps-2">
                  <a href="#forms" class="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
