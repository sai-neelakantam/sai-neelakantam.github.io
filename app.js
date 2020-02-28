const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
    help: "Supported commands: <span class=\"code\">about</span>, <span class=\"code\">experience</span>, <span class=\"code\">education</span>, <span class=\"code\">skills</span>",
    about: "Hello 👋<br>As the domain suggests, my name is Sai Neelakantam. I’m a Senior Big Data Engineer currently living in Beaverton, OR. I have a burning passion to want and help others with code that I create. I enjoy the limitless potential of impact that I can have with what I build. It is what pushes me every day to become a better engineer. Outside of coding, you can find me looking at corgis on Instagram!",
    skills: "<span class=\"code\">Big Data Ecosystem:</span> HDFS, MapReduce, Hive, Impala, Pig Latin, Sqoop, Oozie, YARN, Avro, Parquet<br><span class=\"code\">Apache Spark:</span> Spark Core, Dataframes, Spark SQL<br><span class=\"code\">Kafka Ecosystem:</span> Kafka Core, KConnect, KStreams, Schema Registry, REST Proxy<br><span class=\"code\">AWS Ecosystem:</span> S3, EMR, EC2, RDS, Athena, DMS, DP, SQS, SNS, IAM, Lambda, API gateway<br><span class=\"code\">DevOps Tools:</span> Docker, Terraform, CircleCI<br><span class=\"code\">Programming Languages:</span> Python, JAVA 8, SQL, PL/SQL, Shell Scripting, HTML5, XML, CSS3, JavaScript<br><span class=\"code\">Automation & Versioning Tools:</span> Airflow 1.8, Autosys, Oozie, Maven, SVN, GitHub<br><span class=\"code\">DBMS Tools:</span> Snowflake, MySQL, Oracle, Teradata<br>",
    education: "Arizona State University, Tempe, AZ<br>Master of Science in Software Engineering<br><br>Osmania University, Hyderabad, TG, India<br>Bachelor of Engineering in Information Technology",
    resume: "<a href='./Sai_Neelakantam_Resume.pdf' class='success link'>resume.pdf</a>",
    experience: "Nike Inc (Feb. 2017 - Present) (Beaverton, OR)<br>Senior Big Data Engineer<br><br>Bank of America (Sep. 2015 - Feb. 2017) (Charlotte, NC)<br>Data Engineer<br><br><br>Cloudwick Technologies (May. 2015 - Sept. 2015) (Newark, CA)<br>Big Data Engineer<br><br>Intel Corporation (May. 2014 - Nov. 2014) (Chandler, AZ)<br>Software Graduate Intern",
    corgi: "My top 3 favorite corgis (click to view):<br><a href='https://www.instagram.com/bearorcorgi/' class='success link'>Bear</a>, <a href='https://www.instagram.com/lychee_the_corgi/' class='success link'>Mochee</a>, <a href='https://www.instagram.com/thecorgijack/' class='success link'>Jack</a>"
};
let userInput, terminalOutput;

const app = () => {
    userInput = document.getElementById('userInput');
    terminalOutput = document.getElementById('terminalOutput');
    document.getElementById('dummyKeyboard').focus();
    console.log('Application loaded');
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log('Oops! no such command');
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const key = function keyEvent(e) {
    const input = userInput.innerHTML;

    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
        return;
    }

    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = '';
        return;
    }

    userInput.innerHTML = input + e.key;
}

const backspace = function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
}

document.addEventListener('keydown', backspace);
document.addEventListener('keypress', key);
document.addEventListener('DOMContentLoaded', app);
