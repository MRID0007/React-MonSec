import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import figure1 from '../assets/images/posts/1_Figure1.png';
import figure2 from '../assets/images/posts/1_Figure2.png';
import figure3 from '../assets/images/posts/1_Figure3.png';
import authorImage from '../assets/images/sarah_lam.jpg';

const code1 = `SELECT * FROM users WHERE username='myUsername' AND password='123'`;
const code2 = `SELECT * FROM items WHERE tag='stationery'`;
const code3 = `SELECT * FROM users WHERE username='myUsername' --AND password='123'`;
const code4 = `SELECT * FROM users WHERE username='admin'--'AND password='a'`;

const SqlInjectionPost = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="post">
          <h1 className="text-4xl font-bold mb-4">SQL Injection</h1>
          <p className="text-neutral-400 mb-2">2024-03-01 <span className="dot text-primary-500">·</span> Updated: 2024-04-13 <span className="dot text-primary-500">·</span> 1554 words <span className="dot text-primary-500">·</span> 8 mins</p>
          <div className="flex flex-wrap space-x-2 mb-6">
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">2024</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">Sarah's Intro to WebSec</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">SQLi</span>
          </div>
          
          <TOC items={[
            { label: 'Guide 01 in Sarah’s Welcome to Web Security Series', href: '#guide-01' },
            { label: 'Introduction', href: '#introduction' },
            { label: 'Finding SQLi Vulnerabilities', href: '#finding-sqli' },
            { label: 'Exploiting SQLi Vulnerabilities', href: '#exploiting-sqli' },
            { label: 'Defending against SQLi', href: '#defending-sqli' },
            { label: 'Conclusion', href: '#conclusion' },
          ]} />

          <h2 id="guide-01" className="text-2xl font-bold mb-2">Guide 01 in Sarah’s Welcome to Web Security Series</h2>
          <p className="mb-6">In this series, Sarah discusses some common vulnerability classes found in web security and how you can find and exploit them. Today’s focus is SQL injection, one of the easiest and best-known types of vulnerability.</p>
          
          <h2 id="introduction" className="text-2xl font-bold mb-2">Introduction</h2>
          <p className="mb-6">
            SQL Injection, also known as SQLi, is probably one of the best-known web security vulnerabilities. Like a number of other web security vulnerabilities, it is chiefly concerned with the execution of unexpected code. As one would expect, it targets systems that use SQL databases and it is often used to extract or modify sensitive information from a database, though it is less commonly used to issue commands to the database or even the operating system. It can also be used to bypass basic login systems. If you are not familiar with SQL, it is essentially a language that is good at sorting and retrieving data from databases. The syntax is fairly intuitive, so don’t worry if you haven’t done FIT2094/FIT3171!
          </p>
          
          <h2 id="finding-sqli" className="text-2xl font-bold mb-2">Finding SQLi Vulnerabilities</h2>
          <p className="mb-6">
            One of the best places to start looking for SQL vulnerabilities is either in a login page or a catalogue search function. Why? Well, basic login systems will often simply check user input (in this case, their login credentials) against some entry in a database. Consider some login page that has a ‘username’ and ‘password’ field (Figure 1).
          </p>
          <figure className="mb-6">
            <img src={figure1} alt="A basic login page" className="w-full h-auto" />
            <figcaption className="text-center text-neutral-400">Figure 1: A basic login page (Source: PortSwigger WebSecurity Academy)</figcaption>
          </figure>
          <p className="mb-6">
            Now, we would have to guess what the query that retrieves the credentials might look like. A very basic statement would look something like this:
          </p>
          <div className="relative mb-6">
            <SyntaxHighlighter language="sql" style={vs2015}>
              {code1}
            </SyntaxHighlighter>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 hover:opacity-100">Copy</button>
          </div>
          <p className="mb-6">
            In normal-speak, this command essentially says “log me in if my username matches the associated password” and vice versa, which makes sense. This is why you may see SQLi vulnerabilities in very basic login pages. Moreover, a similar system might be used to retrieve information about products in an online store that uses a SQL database. Imagine you wanted to retrieve all items tagged with “stationery”. The query that might be sent to the database could look something like this:
          </p>
          <div className="relative mb-6">
            <SyntaxHighlighter language="sql" style={vs2015}>
              {code2}
            </SyntaxHighlighter>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 hover:opacity-100">Copy</button>
          </div>
          <p className="mb-6">
            This statement would also be susceptible to SQLi. However, not all such login pages or search functions will be vulnerable, for a variety of reasons. There are a few quick ways to check if they are potentially weak though:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">In SQL, single quotes (‘) are used to demarcate user input. In unprotected systems, if you entered just a ‘, the database might respond with an error (Figure 2) or an unusual response, indicating that it is vulnerable to SQLi because it executed that quote as if it were a piece of code (rather than treating it as a plain old character).</li>
            <li className="mb-2">Entering SQL-specific syntax, such as <span className="text-green-500">--</span>, which acts as a comment, can also cause unexpected behaviour if the system is SQLi-vulnerable.</li>
            <li className="mb-2">SQL uses Boolean conditions often (such as <span className="text-green-500">OR 1=1</span>) and a SQLi-vulnerable system may show unusual behaviour if such a condition were to be entered.</li>
            <li className="mb-2">One can also inject time-delay syntax and compare the response time of the server. For example, if MySQL was the database being used, you could enter <span className="text-green-500">SELECT SLEEP(10)</span> into one of the fields and if the server took 10 seconds to respond, it indicates that the system is indeed vulnerable to SQLi.</li>
          </ul>
          <figure className="mb-6">
            <img src={figure2} alt="An example of an error returned by a SQLi-vulnerable system" className="w-full h-auto" />
            <figcaption className="text-center text-neutral-400">Figure 2: An example of an error returned by a SQLi-vulnerable system (Source: PortSwigger WebSecurity Academy)</figcaption>
          </figure>
          
          <h2 id="exploiting-sqli" className="text-2xl font-bold mb-2">Exploiting SQLi Vulnerabilities</h2>
          <p className="mb-6">
            The short of it is, we have to craft a suitable payload. Firstly, we have to decide what we want to do. Do we want to leak some data? Do we want to bypass a login? With that in mind, we then have to work out what kind of query is being issued to the server. This is unfortunately a process of trial and error. By seeing what kind of payloads or commands work, we can try and guess what query is being sent. Once we have established what the query (roughly) looks like, we can craft a suitable payload.
          </p>
          <p className="mb-6">
            There are a few different ‘types’ of SQLi (and a few different ways to sort them) but PortSwigger splits them into the following categories:<sup><a href="#footnote1" className="text-purple-500">1</a></sup>
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Retrieving hidden data:</strong> Manipulate a query to return more information that you would normally be able to see</li>
            <li className="mb-2"><strong>Subverting application logic:</strong> Alter a query to disrupt the application’s intended logic</li>
            <li className="mb-2"><strong>UNION attacks:</strong> Use the SQL command UNION to retrieve data from a different table in the same database, provided certain conditions are met</li>
            <li className="mb-2"><strong>Blind SQL:</strong> Use inference to attack a system. In such vulnerabilities, the results of the SQL query are not returned in the application’s response, though it might affect other elements of the site.</li>
          </ul>
          
          <p className="mb-6">
            Note that ‘retrieving hidden data’ and ‘subverting application logic’ are often lumped into the one category of ‘error-based SQL’. Despite this, the process to craft a payload is more or less the same. It is simply a case of finding what works as there are hundreds of possible payloads. Fortunately, there are also a large number of ‘cheat sheets’, which list possible payloads. Remember, different database systems may have slightly different syntax, so make sure you know what kind of database you are targeting! Here are some good cheat sheets:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><a href="https://portswigger.net/web-security/sql-injection/cheat-sheet" className="link text-purple-500">PortSwigger</a></li>
            <li className="mb-2"><a href="https://www.invicti.com/blog/web-security/sql-injection-cheat-sheet/" className="link text-purple-500">Invicti</a></li>
            <li className="mb-2"><a href="https://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet" className="link text-purple-500">Pentestmonkey</a></li>
          </ul>
          
          <p className="mb-6">
            As a simple example, let us return to our login page in Figure 1. Let us also say that we know the exact command that is being issued to the server (the one listed above). Knowing this, how can we craft a payload? Well, what if we made the server simply ignore the last half the command:
          </p>
          <div className="relative mb-6">
            <SyntaxHighlighter language="sql" style={vs2015}>
              {code3}
            </SyntaxHighlighter>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 hover:opacity-100">Copy</button>
          </div>
          <p className="mb-6">
            If we could do this, then we could simply put in a username and have no need for a password to log in! This can be achieved by ‘commenting out’ the last half of the command. We can do this by escaping out of the input and then adding the syntax for a comment at the end of our username like so:
          </p>
          <figure className="mb-6">
            <img src={figure3} alt="Crafting a SQLi payload" className="w-full h-auto" />
            <figcaption className="text-center text-neutral-400">Figure 3: Crafting a SQLi payload (Source: PortSwigger WebSecurity Academy)</figcaption>
          </figure>
          <p className="mb-6">
            We can put whatever we want in the password field because the database will never read it! If we logged in now, the following query would be sent to the database:
          </p>
          <div className="relative mb-6">
            <SyntaxHighlighter language="sql" style={vs2015}>
              {code4}
            </SyntaxHighlighter>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </div>
          <p className="mb-6">
            Everything after the <span className="text-green-500">--</span> is ignored by the database, allowing us to login as an admin without the password.
          </p>
          
          <h2 id="defending-sqli" className="text-2xl font-bold mb-2">Defending against SQLi</h2>
          <p className="mb-6">
            Fortunately, there are a number of ways of defending against SQLi. OWASP even has a detailed <a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" className="link text-purple-500">cheat sheet</a> on how to prevent SQLi. According to it, there are four main ways of protecting against SQLi, though one of them is “strongly discouraged”.
          </p>
          <p className="mb-6">
            Method one is the use of prepared statements with parameterised queries. This essentially means “do not execute any user input just chuck it together as a big string”. Method two, stored procedures, is very similar to method one except that the stored procedures are in the database itself. Method three is to use allow-list input validation, which means that the user can only use a set of specifically permitted values and everything else is prohibited. Method four, which is strongly discouraged, is to just escape all user input. However, it is practically difficult to escape absolutely everything, hence it is not the preferred method.
          </p>
          <p className="mb-6">
            There are also some other defences, like the concept of ‘least privilege’, which can be applied universally (i.e. not just to counter SQLi) to increase your security. However, each of the methods above have language-specific implementation, so if you are looking to secure your system, make sure you review the appropriate documentation first.
          </p>
          
          <h2 id="conclusion" className="text-2xl font-bold mb-2">Conclusion</h2>
          <p className="mb-6">
            SQLi is generally more common in applications that use PHP or ASP and rarer in newer interfaces such as J2EE or ASP.NET. However, databases are still ubiquitous, therefore by sheer force of numbers, they remain a common threat. In fact, in 2021, injections were ranked number three in the OWASP Top 10,<sup className="text-neutral-500">3</sup> a list of the year’s most significant web vulnerabilities. Therefore, it is important for up-and-coming cybersecurity professionals to be familiar with SQLi and to know both how to exploit it and how to protect against it.
          </p>
          <p className="mb-6">
            Credit to PortSwigger’s WebSecurity Academy for the images. If you are interested in learning more about SQLi and web security, the WebSecurity Academy is a fantastic resource. You can create a free account and explore their labs <a href="https://portswigger.net/web-security/all-labs" className="link">here</a>.
          </p>

          <div className="mb-6">
            <ol className="list-decimal list-inside pl-6">
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> <a href="https://portswigger.net/web-security/sql-injection" className="link">https://portswigger.net/web-security/sql-injection ↩︎</a></li>
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> A prepared statement is essentially a pre-compiled SQL query. Parameterised queries allow one to put ‘parameters’ (i.e. placeholders) into SQL queries rather than actual values. The parameter values are filled in at execution time which thus hardens the system against SQLi. ↩︎</li>
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> <a href="https://owasp.org/Top10/A03_2021-Injection/" className="link">https://owasp.org/Top10/A03_2021-Injection/ ↩︎</a></li>
            </ol>
          </div>

          <hr className="border-t-2 border-neutral-400 mb-4" />
          <div className="flex items-center mb-6">
            <img src={authorImage} alt="Sarah Lam" className="w-24 h-24 rounded-full mr-4" />
            <div>
              <p className="text-lg font-bold">Sarah Lam</p>
              <p className="text-neutral-400">2024 VICE PRESIDENT</p>
              <a href="https://linkedin.com/in/sarah-lam" className="text-neutral-400 hover:text-purple-500">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
            </div>
          </div>
          <div className="mt-6">
            <a href="/posts" className="text-purple-500">← A Crash Course in e-mail Security</a>
            <p className="text-neutral-400">2024-02-12</p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SqlInjectionPost;
