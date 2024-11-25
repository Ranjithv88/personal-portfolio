import img from "../assets/icons/Java-Logo.png"
import img1 from "../assets/icons/MySQL-Logo.png"
import img2 from "../assets/icons/Mongodb-Logo.png"
import img3 from '../assets/icons/Redis-Logo.png'
import img4 from '../assets/icons/Spring-Logo.png'
import img5 from '../assets/icons/Git-Logo.png'
import img6 from '../assets/icons/GitHub-Logo.png'
import img7 from '../assets/icons/HTML-Logo.png'
import img8 from '../assets/icons/CSS-Logo.png'
import img9 from '../assets/icons/JS-Logo.png'
import img10 from '../assets/icons/React-Logo.png'
import img11 from '../assets/icons/Sass-Logo.png'
import img12 from '../assets/img/Peter-Griffin-intro.png'
import img13 from '../assets/img/Furniture-Intro.png'
import img14 from '../assets/icons/VS-Code-Logo.png'
import img15 from '../assets/icons/IntelJ-idea-Logo.png'
import img16 from '../assets/icons/MySql-WorkBench-Logo.png'
import img17 from '../assets/icons/CodePen-Logo.png'
import img18 from '../assets/img/Web-Animation-Intro.png'

export const STAnimation ={
    hidden: { opacity: 0, y: -10, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1 },
}

export const Projects =[
    {
        key: 1,
        image:img12,
        name: "Peter Griffin Template",
        description:"This is a Static Website,and using HTML,CSS And JavaScript to build Site, This E-commerce Website buying product idea for homePage demo, given below the LiveDemo.",
        live:"https://ranjithv88.github.io/Peter-Griffin--Templates/",
        githubRepository:"https://github.com/Ranjithv88/Peter-Griffin--Templates"
    },
    {
        key: 2,
        image:img13,
        name: "Furniture Template",
        description:"This Site is the Dynamic Website ,React JS Use to Create Site this ia Furniture E-commerce site ,this project using front End is the React Js And no BackEnd Using ,given below the  LiveDemo.",
        live:"https://furniture-templates.vercel.app/",
        githubRepository:"https://github.com/Ranjithv88/Furniture--Templates"
    },
    {
        key: 3,
        image: img18,
        name: "Web Animation",
        description:"This is a Static Website,and using HTML,CSS And JavaScript to build Site, This E-commerce Website buying product idea for homePage demo, given below the LiveDemo.",
        live:" https://ranjithv88.github.io/Web-Animation/",
        githubRepository:"https://github.com/Ranjithv88/Web-Animation"
    }
]

export const Skills = [
    {
        key: 1,
        image:img,
        name: "Java",
        description:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere ,meaning that compiled Java code can run on all platforms that support Java without the need to recompile."
    },
    {
        key: 2,
        image:img1,
        name: "MySql",
        description:"MySQL is an open-source relational database management system (RDBMS).Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter My ,and 'SQL', the initialism for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data."
    },
    {
        key: 3,
        image:img2,
        name: "MongoDB",
        description:"MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License (SSPL). MongoDB is a member of the MACH Alliance."
    },
    {
        key: 4,
        image:img3,
        name: "Redis",
        description:"Redis (Remote Dictionary Server) is a source-available, in-memory storage, used as a distributed, in-memory key-value database, cache and message broker, with optional durability. Because it holds all data in memory and because of its design, Redis offers low-latency reads and writes, making it particularly suitable for use cases that require a cache."
    },
    {
        key: 5,
        image:img4,
        name: "Spring Framework",
        description:"The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform."
    },
    {
        key: 6,
        image:img5,
        name: "Git",
        description:"Git is a distributed version control system used by developers for collaborative software development. Unlike client-server systems, it keeps a local copy of the entire repository, including history and version tracking, allowing for independent work without relying on network access or a central serve."
    },
    {
        key: 7,
        image:img6,
        name: "GitHub",
        description:"GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project."
    },
    {
        key: 8,
        image:img7,
        name: "HTML",
        description:"Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    },
    {
        key: 9,
        image:img8,
        name: "CSS",
        description:"Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
    },
    {
        key: 10,
        image:img9,
        name: "Java Script",
        description:"JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles."
    },
    {
        key: 11,
        image:img10,
        name: "React",
        description:"React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality."
    },
    {
        key: 12,
        image:img11,
        name: "Sass",
        description:"Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block."
    }
]

export const Course = [
    {
        key: 0,
        courseName:"JAVA FULL STACK DEVELOPMENT",
        instituteName:"LiveWire",
        description:"A Java Full Stack Developer is a software engineer skilled in both front-end and back-end development, utilizing the Java programming language for back-end tasks. They possess a comprehensive understanding of various layers of web development, allowing them to build and maintain end-to-end applications."
    },
    {
        key: 1,
        courseName:"BACHELOR OF COMPUTER APPLICATION",
        instituteName:"Hindustan College of Arts and Science",
        description:"Hindustan College of Arts and Science is an autonomous private institution founded in 1998 managed by Hindustan Educational and Charitable Trust. The college is located on Avinashi Road in Coimbatore India."
    },
    {
        key: 2,
        courseName:"HSC",
        instituteName:"Government Boys Higher Secondary School",
        description:"Higher Secondary Certificate (HSC), Higher Secondary School Certificate (HSSC) or Higher Secondary Education Certificate (HSEC) is a secondary education qualification in Bangladesh, India and Pakistan. It is equivalent to the final year of high school in the United States and GCSE and/or A level in the United Kingdom."
    },
    {
        key: 3,
        courseName:"SSLC",
        instituteName:"Government Boys Higher Secondary School",
        description:"The Secondary School Leaving Certificate (commonly referred to as SSLC) is a certification obtained by a student on successful completion of an examination at the end of study at the secondary schooling level in India. The SSLC is obtained on passing the grade 10 public examination, which is commonly referred to as 'class 10 board examinations' in India."
    }
]

    export const ide = [
    {
        key: 13,
        image:img14,
        name: "Visual Studio Code",
        description:"Visual Studio Code is a lightweight and powerful source code editor developed by Microsoft. It offers built-in support for JavaScript, TypeScript, CSS, HTML, Python, and more, making it a popular choice for web and cloud development."
    },{
        key: 14,
        image:img15,
        name: "IntelliJ IDEA",
        description:"IntelliJ IDEA is a Java IDE developed by JetBrains, the creators of the IntelliJ family of products. It offers a wide range of features, including built-in support for Java, JavaScript, and TypeScript, as well as support for other programming languages."
    },{
        key: 15,
        image:img16,
        name: "MySql WorkBench",
        description:"MySQL Workbench is a visual database design tool that integrates SQL development, administration, database design, creation and maintenance into a single integrated development environment for the MySQL database system. It is the successor to DBDesigner 4 from fabFORCE.net, and replaces the previous package of software, MySQL GUI Tools Bundle."
    },{
        key: 16,
        image:img2,
        name: "MongoDB Compass",
        description:"MongoDB Compass is a graphical user interface (GUI) for MongoDB, allowing users to visualize and interact with their data in a simple and intuitive way. It provides a comprehensive set of features, including data modeling, querying, and indexing."
    },{
        key: 17,
        image:img6,
        name: "GitHub",
        description:"GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project."
    },{
        key: 18,
        image:img17,
        name: "CodePen",
        description:"CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, called pens and test them."
    }
]

