import './logos.css'
import htmlLogo from '../../assets/logos/html.png'
import jsLogo from '../../assets/logos/js.png'
import reactLogo from '../../assets/logos/react.png'
import dockerLogo from '../../assets/logos/docker.png'
import nodeLogo from '../../assets/logos/node.png'
import cLogo from '../../assets/logos/c.png'
import javaLogo from '../../assets/logos/java.png'
import npmLogo from '../../assets/logos/npm.png'
import pythonLogo from '../../assets/logos/python.png'
import sqliteLogo from '../../assets/logos/sqlite.png'
import juliaLogo from '../../assets/logos/julia.png'
import gitLogo from '../../assets/logos/git.png'
import cppLogo from '../../assets/logos/c++.png'
import csharpLogo from '../../assets/logos/csharp.png'
import pytorchLogo from '../../assets/logos/pytorch.png'
import cursorLogo from '../../assets/logos/cursor.png'
import cicdLogo from '../../assets/logos/cicd.png'

export default function LogosComponent() {
    return (
        <div className="logos">
            <div className="logos-slide">
                {/* Langages de programmation C */}
                <img src={cLogo} alt="C Logo" title="C" />
                <img src={cppLogo} alt="C++ Logo" title="C++" />
                <img src={csharpLogo} alt="C# Logo" title="C#" />
                
                {/* Python et ses frameworks */}
                <img src={pythonLogo} alt="Python Logo" title="Python" />
                <img src={pytorchLogo} alt="PyTorch Logo" title="PyTorch" />
                
                {/* Web Development */}
            <img src={htmlLogo} alt="HTML Logo" title="HTML" />
            <img src={jsLogo} alt="JavaScript Logo" title="JavaScript" />
            <img src={reactLogo} alt="React Logo" title="React" />
                <img src={nodeLogo} alt="Node.js Logo" title="Node.js" />
                <img src={npmLogo} alt="NPM Logo" title="NPM" />
                
                {/* DevOps & Tools */}
            <img src={dockerLogo} alt="Docker Logo" title="Docker" />
                <img src={gitLogo} alt="Git Logo" title="Git" />
                <img src={cicdLogo} alt="CI/CD Logo" title="CI/CD" />
                
                {/* Autres langages et outils */}
            <img src={javaLogo} alt="Java Logo" title="Java" />
                <img src={juliaLogo} alt="Julia Logo" title="Julia" />
            <img src={sqliteLogo} alt="SQLite Logo" title="SQLite" />
                <img src={cursorLogo} alt="Cursor Logo" title="Cursor" />
            </div>

            <div className="logos-slide">
                {/* Langages de programmation C */}
                <img src={cLogo} alt="C Logo" title="C" />
                <img src={cppLogo} alt="C++ Logo" title="C++" />
                <img src={csharpLogo} alt="C# Logo" title="C#" />
                
                {/* Python et ses frameworks */}
                <img src={pythonLogo} alt="Python Logo" title="Python" />
                <img src={pytorchLogo} alt="PyTorch Logo" title="PyTorch" />
                
                {/* Web Development */}
            <img src={htmlLogo} alt="HTML Logo" title="HTML" />
            <img src={jsLogo} alt="JavaScript Logo" title="JavaScript" />
            <img src={reactLogo} alt="React Logo" title="React" />
                <img src={nodeLogo} alt="Node.js Logo" title="Node.js" />
                <img src={npmLogo} alt="NPM Logo" title="NPM" />
                
                {/* DevOps & Tools */}
            <img src={dockerLogo} alt="Docker Logo" title="Docker" />
                <img src={gitLogo} alt="Git Logo" title="Git" />
                <img src={cicdLogo} alt="CI/CD Logo" title="CI/CD" />
                
                {/* Autres langages et outils */}
            <img src={javaLogo} alt="Java Logo" title="Java" />
                <img src={juliaLogo} alt="Julia Logo" title="Julia" />
            <img src={sqliteLogo} alt="SQLite Logo" title="SQLite" />
                <img src={cursorLogo} alt="Cursor Logo" title="Cursor" />
            </div>
        </div>
    );
}