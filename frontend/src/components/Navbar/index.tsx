import {ReactComponent as GithubIcon} from '../../assets/img/Github.svg';

function Navbar(){
    return(
        <header>
        <nav>
          <div>
            <h1>DSMovie</h1>
            <a href="https://github.com/devsuperior">
           <div>
             <GithubIcon /> 
           </div>
           <p>/devsuperior</p>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;