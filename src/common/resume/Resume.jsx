import { useState } from "react";
import "./resume.css";

function Resume () {
    const [name] = useState({
        firstName: "Simon",
        midName: "E.",
        lastName: "Dilger",
    })

    const fullName = `${name.firstName} ${name.midName} ${name.lastName}`;
    return (<>
    <div id="resumePage" className="m1">
     <div className="resumeHeader">
        <h1 id="name">{fullName}</h1>
        <h2 id="jobTitle">Full stack web developer</h2>
     </div>
     <div className="resumeContacts">
        <h3> Contact info:</h3>
        <div className="m1">
            <h4 id="phoneNumber" className="wrap">
                <img
                src="https://img.freepik.com/free-icon/auricular-phone_318-1028.jpg?w=360"
                alt="phoneImg"
                className="contactImg wrap"
                />
                <a 
                href="tel:3237400550"
                className="wrap"
                >
                    <h4 
                    className="wrap contact-alignY pl-1">
                    (323) 740-0550
                    </h4>
                </a>
            </h4>
            <h4 id="email" className="wrap">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXZKBkcIMYsvs-msDGDcOl2lmlTLUZuJuGQ&usqp=CAU"
                alt="emailImg"
                className="contactImg wrap"
                />
                <a
                href="mailto: dilgerse@gmail.com"
                >
                    <h4
                    className="contact-alignY pl-1">
                        dilgerse@gmail.com
                    </h4>
                </a>
                
            </h4>
            <h4 id="gitHub" className="wrap">
                <img 
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                alt="gitImg"
                className="contactImg wrap"
                />
                <a href="https://github.com/Simon-E-D"
                target="_blank"
                rel="noreferrer noopener"
                >
                    <h4
                    className="contact-alignY pl-1">
                    /Simon-E-D
                    </h4>
                </a>
            </h4>
            <h4 id="linkedIn" className="wrap">
                <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAd7f///8AcrUAbrMAdLbA2+uRuNex0eY+kcR3rNIAc7V5qdCty+EAcLQAbLLf7fX3+v1opc4eg71fncq51eg7jsKew94Aernm8vj3/P3J3u3Z6PKjyOEaf7uLudnu9/tNmMjR4e5bnMqXv9wviMCDstU8j8OHsdRim8i21OcBZiGFAAAHVUlEQVR4nO2dW3uyvBKGQxIt5SUgCCLuUEv7rf7/P7igllaRzRBIdXLlOepBA7nNbpgkM8S60SKaB3aYEJxKQjuYR4tbJHL1d+ouOaMOf3RFR4g7lPGlmzYTRjlzHl3DSeSwPGog9GOBufFuxUXs1wlnVI/2q+TQ2S3hij26SpOLra4JV96j66NA3uqXcKZfC5Zis4rQp4+uiyJR/5sw1muS+ZUTXwgj8eiaKJOISsI012cdrIvnaUHo6jnNXMTcgnCp6ygs5SwtstC3j5biCxLp3EmLbhqRua6L4UV0TgKdh2ExEANiaz4ObRI+ug6KFRKsPhmodOczahQv9Og6KBMXnpeEcRwmHtPEL3ctLvhxtancrVt3SYRWkJzZbnbrTLaiM9XHIGL2xmrQNmB6jEmHu018pTZ7HTwE7Fjvn9cK8COy9w6+Qjvsg1G8dQOid2WxQx9ggYjZZS5e+wGLjorXUcBjCGAx3aAdi9Tvpyu1CJGuiwIwCC9COtvwfdrP9q0jykYUKzCgtUE5nzI4oGXFCBuRglaKSjuEI5GdhhBmCNswWfRzXQnfXOMsBwFaB3SrPgUvhhfh2+MRL8MIt+ja0NsOI1yjcy8LoE1aKds/usZDBbW6K6XaE+JrQzZwHGboxiFrdJG2y390hQdryJdFqRM6w3SY4Y3R9Ib6aCohPPPAulzdd0oRumrYbgjhCZ1ZWp7sG0L4js4sJcMs0xQjIHHOcMIDupn0S+IEBcweXVVJcRtKiNatz3q31i6a4eyjpWDGaZbgWwsr8WQNIMzxmTO/4mG/ZXPEOggvcsKeL+EMOWDZUTvHop9jByzPe3V4Tl9Q36r9kdi3NOPWRmhvN4p7x9n9bulJl0NfX+IsP5xumm8VC/wj8EacUnJ8d1+i2ac7PyZUo5vRV+JUCMYEo1rSGRkZGWkpXa92lCFYiuUoSfZhGO73CRFMUMWsxTvb1P7t21GovZTD2P4jOETbrb/OSjsxTTN/u9m9nkOmzoQS4vivVWfSbHtzLw/aSy33TaUoc5a7dcsXd+rv/iWeEkja4416aXLS0LzHm+ySWikuyPusu4xlbV7J9MY+7/VFrfd3L3WOfYUs/2bLmIt8BzrqmbrxxIyQfdL7k5cUsG31cuWBZHHUX6BSFE/7UQp550ftV6U9VzQu+jnZ4HgDt5t3E046TgB546rmEIYdp6q2VMUZ4rG80WK6mzpiDnnhS+19rHfKKPV6aQg2sAEv2k31AUdVE3IH9L/3Ok3kZ1dNyPcDT+38ah1O4mlXTAjbNGhRdr9KPR+hkG7BUv4UxqpaQiE5BittJlg0lBJ6gw57NOlz/KKhlHDAMYE2jT8BopLwfdCJpGalo2cblYTDLju0aPRtJJWE0+h1ZD99fsKxB3efn3DsWSUEhCMPKyEgHLliYCDMRk2nGAjHBUZEQTgb04goCBdjFgwUhKNWfRyEY86Y4yBcjLC/cRBaZ/nZFAnhiPs6f0yY+Vupj8YtBsL1Kgi9LxF7vhn67Si/XvwV4eZM2c8pR069/duwtpQPBvA3hOtjPX4fF0lrBLUmyQcL/hPCz8Zdb+8Mjx0zwun2F4RtuSfEBxzRlzZN/4CwPbkG7d9J/tETt2FXcg0B2mn9knR2AOWE687Xe+Db1tLfiMoJz52TIA+hz/lPdjJVTdiXAIZ9Ah/0JjsQVRP2DR/wdWvp5UIxYb9PHnoF8iS7XCgm7De2YAdXihnrOQkBQXvKRCoQZc/ZSyEOeQ+20y8dakwtYf0sVZMEzAKX3qBRSriGrGHAgbiQTfKglBDkewDetpZO6qSU8B/IDuGgZ0nHbVRKCPvZPRih7Fe+0n18mB8XOJn+7wkJgZ5qYIBK2fA4KgnrpdoIYV3+GQnr525bBFwQn5EQuDuNmBC4J2YIhz3NED6CkGlPaNrQEBpCQ2gIDaEhNISG0BAaQkNoCA2hITSEhtAQGkJDaAgNoSE0hIbQEBpCQ2gIDaEhNISG0BAaQkNoCA2hITSEhtAQGkJDaAivCUH3GzETwlICv9WeDourDwz0AMxiL534nEKuUtcvEsISzwNv7nJQhBP5xOe0I7tjpc+7a3asJ7NnKeDFrqIKkPAf4Kc1PL+3x53uC/G4t+kbSrWIh/13LEcE+yraI+h8QXZoysPgJN1JR9LDgImB857JJh0badfbf9gt+gjb0vcwErcVsu2cDZv5BM3bH2bnYnxodt4uqULDZ4Wuh+mZ2MvoVyPjfT+9EiIbTgKLQmLrPUy5TaTNORxyAiIfUhGF6JxEuiTWbhaLyELzcbgg40K2P7ucpUUsV+duytyCUDr8EAKVodCIZUWTJdp7OoniE65M4BjrOhKdMuhiSejruiRS/5uwN8QmUl18mpc0o+2hfBHrO7npdyLVlX6tWCX/rFLFzjrST2OUQyu3+08yXD8W+qyLXMQ/DturdL9RzvRoR4flV67M64TGqbvkjDqYm7JMPM+X7rU7upayeRHNAzvE6rtJQjuYR7XEEf8Hv9yYWp88rfoAAAAASUVORK5CYII=" 
                alt="linkedImg"
                className="contactImg wrap"
                />
                <a 
                href="https://www.linkedin.com/in/simon-e-dilger"
                target="_blank"
                rel="noreferrer noopener"
                >
                    <h4
                    className="contact-alignY pl-1">
                    /simon-e-dilger
                    </h4>
                </a>
            </h4>
        </div>
        <h3> Skills </h3>
        <div className="m1">
            <h4 id="Front" className="shrink-margin">
                <h4 className="shrink-margin"> Front End:</h4>
                <h4 className="pl-1 w25 shrink-margin">
                    React, JavaScript, HTML5, CSS, Bootstrap, AJAX, jQuery.
                </h4>
            </h4>
            <h4 id="Back" className="shrink-margin">
                <h4 className="shrink-margin"> Back End:</h4>
                <h4 className="pl-1 w25 shrink-margin">
                    SQL / TSQL, C#, .Net, .Net Core, ASP.Net, ADO, Web API.
                </h4>
            </h4>
            <h4 id="Tools" className="shrink-margin">
                <h4 className="shrink-margin"> General development: </h4>
                <h4 className="pl-1 w25 shrink-margin">
                    Visual Studio, VS Code, SSMS, Postman, GitHub, Git Bash, NPM, Yarn, Chrome Dev Tools, AGILE / Scrum methodologies.
                </h4>
            </h4>
        </div>
     </div>
    </div>
    </>);
}

export default Resume;