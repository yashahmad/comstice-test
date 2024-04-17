const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                        Comstice
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto d-flex justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Solutions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Use Cases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <button type="button" class="btn btn-outline-secondary">Request Demo</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;