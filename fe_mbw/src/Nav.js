const Nav = () => {
    return (
        <>
            <div id="bar">
                <nav>
                    <ul id="menu">
                        <li class="menuItem"><a id="currentPage" href="/home">HOME</a></li>
                        <li class="menuItem"><a href="/gallery">GALLERY</a></li>
                        <li class="menuItem"><a href="/lists">LISTS</a></li>
                        <li class="menuItem"><a href="/table">TABLE</a></li>
                        <li class="menuItem"><a href="/contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
  }
  
  export default Nav;