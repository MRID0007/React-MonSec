import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import authorImage from '../assets/images/oscar-lupton.jpg';

const EmailSecurityPost = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="post">
          <h1 className="text-4xl font-bold mb-4">A Crash Course in e-mail Security</h1>
          <p className="text-neutral-400 mb-2">2024-02-12 <span className="dot text-primary-500">·</span> Updated: 2024-03-15 <span className="dot text-primary-500">·</span> 1119 words <span className="dot text-primary-500">·</span> 6 mins</p>
          <div className="flex flex-wrap space-x-2 mb-6">
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">2024</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">SMTP</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">IMAP</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">DNS</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">SPF</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">DKIM</span>
            <span className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">DMARC</span>
          </div>
          
          <TOC
            items={[
              { label: 'Introduction', href: '#introduction' },
              { label: 'Email security standards', href: '#email-security-standards' },
              { label: 'SPF - Sender Policy Framework', href: '#spf' },
              { label: 'How to implement', href: '#spf-implementation' },
              { label: 'DKIM - DomainKeys Identified Mail', href: '#dkim' },
              { label: 'How to implement', href: '#dkim-implementation' },
              { label: 'DMARC - Domain-based Message Authentication, Reporting, and Conformance', href: '#dmarc' },
              { label: 'How to implement', href: '#dmarc-implementation' },
              { label: 'SMTP MTA-STS - Mail Transfer Agent Strict Transport security', href: '#mta-sts' },
              { label: 'SMTP TLS Reporting', href: '#tls-reporting' },
              { label: 'Conclusion', href: '#conclusion' },
              { label: 'References', href: '#references' },
              { label: 'Standards', href: '#standards' },
              { label: 'Guides', href: '#guides' },
            ]}
          />

          <h2 id="introduction" className="text-2xl font-bold mb-2">Introduction</h2>
          <p className="mb-6">
            Hey all, this is more of a granular blog than usual here. As part of our backend overhaul, we’re upgrading our email security. Here, I’ll break down the email security standards in common circulation, and how we’re using them.
          </p>
          <p className="mb-6">
            Before that, some fundamentals. Emails are sent via SMTP - the Simple Mail Transfer Protocol. This is a vestige of pre-Internet communication that has no inherent security or authentication; those are bolted on with the standards that’ll soon follow. Conversely, emails are often retrieved with IMAP - the Internet Message Access Protocol. Both IMAP and SMTP are encrypted in-transit as per RFC 8314. An SMTP transmission will look something like this, with a [c]lient sending to a [s]erver:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
                S: 220 mail.lupton.de ESMTP server-id<br />
                C: EHLO smtp.gmail.com<br />
                S: 250 mail.lupton.de greets smtp.gmail.com<br />
                S: 250-8BITMIME #extension for non-ASCII character support<br />
                C: MAIL FROM:&lt;oscar.lupton@monsec.io&gt;<br />
                S: 250 OK<br />
                C: RCPT TO:&lt;steve@lupton.de&gt;<br />
                S: 250 OK<br />
                C: RCPT TO:&lt;team@monsec.io&gt;<br />
                S: 250 OK<br />
                C: DATA<br />
                S: 354 start mail input; end with &lt;CRLF&gt;.&lt;CRLF&gt;<br />
                C: From: "Oscar Lupton" &lt;oscar.lupton@monsec.io&gt;<br />
                C: To: "Steve Lupton" &lt;steve@lupton.de&gt;<br />
                C: Cc: &lt;team@monsec.io&gt;<br />
                C: Date: Wed, 23 Jun 2077 21:09:19<br />
                C: Subject: Partnership with Arasaka Corporation<br />
                C: <br />
                C: Hey Steve,<br />
                C: The sponsorship meeting with these guys went pretty well, should have the new implants over soon. Call me on a secure line to talk some more.<br />
                C: Cheers.<br />
                C: .<br />
                S: 250 OK<br />
                C: QUIT<br />
                S: 221 smtp.gmail.com closed connection<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
        </pre>
          <p className="mb-6">
            Finally, on DNS records. At a minimum, mail servers require “A” and “MX” records to reach the Internet (technically, “CNAME” records can substitute for the former, but that’ll wait for another blog post). These may look like:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
              Type  Name        Content                Priority<br />
              A     monsec.io   185.199.108.153<br />
              CNAME www         @<br />
              MX    monsec.io   smtp.google.com        1<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </pre>
          
          <h2 id="email-security-standards" className="text-2xl font-bold mb-2">Email security standards</h2>
          
          <h2 id="spf" className="text-2xl font-bold mb-2">SPF - Sender Policy Framework</h2>
          <p className="mb-6">
            SPF is a response to the fact that anyone can write any email address in the MAIL FROM part of an SMTP transmission. An admin will add a “TXT” record in the mail server’s DNS records, which may look like: <span className="text-green-500">v=spf1 ip4:185.199.108.153 a -all</span>. The “a” is a test that will pass if the domain name given in the email resolves to the IP address given in this SPF policy. The ‘minus’ in “-all” means that every email that fails the prior test will be rejected.
          </p>
          <p className="mb-6">
            Another feature of SPF is “INCLUDE”, which uses the policy of another domain to. For example, as MonSec uses Google Workspace, our record looks like:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
              Type  Name        Content                                TTL<br />
              TXT   monsec.io   v=spf1 include:_spf.google.com -all    Auto<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </pre>
          
          <h2 id="spf-implementation" className="text-2xl font-bold mb-2">How to implement</h2>
          <p className="mb-6">
            Most email hosts will provide an SPF record to copy into your DNS provider as a TXT record; copy this verbatim if you are unsure. If you are hosting from your own server, ensure that you have a static IP address, and that you set this in your SPF record accordingly.
          </p>
          
          <h2 id="dkim" className="text-2xl font-bold mb-2">DKIM - DomainKeys Identified Mail</h2>
          <p className="mb-6">
            DKIM is essentially digital signatures for emails, proving that an email originated from a given domain. Like SPF, DKIM uses TXT records to associate data with a domain. A DKIM record contains a public key, with our record looking like:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
                Type  Name                   Content                       TTL<br />
                TXT   google._domainkey      v=DKIM1; k=rsa; p=MIIBIjANBgk&lt;...&gt;  Auto<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
         </pre>
          <p className="mb-6">
            When a mail server using DKIM sends an email, it includes a digital signature, generated with the sender’s private key and the contents of the email. With this, the receiving server can check the email against the public key to ensure the validity of the origin, and that the contents have not been modified.
          </p>
          
          <h2 id="dkim-implementation" className="text-2xl font-bold mb-2">How to implement</h2>
          <p className="mb-6">
            As before, follow the instructions of your hosting provider. If running your own server, ensure that your DKIM private key is stored securely.
          </p>
          
          <h2 id="dmarc" className="text-2xl font-bold mb-2">DMARC - Domain-based Message Authentication, Reporting, and Conformance</h2>
          <p className="mb-6">
            DMARC uses the results of SPF and DKIM tests to guide a receiving server on how to handle an email. In the DMARC TXT record, an admin can specify whether emails from that domain must pass an SPF test, DKIM test, or both in order to be accepted by the recipient. The three policies that can be set are:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">“none” - no requirements are set by the domain admin</li>
            <li className="mb-2">“quarantine” - the receiver should take caution with the email, such as flagging as spam</li>
            <li className="mb-2">“reject” - do not accept the email</li>
          </ul>
          <p className="mb-6">
            DMARC records also contain an email address to receive DMARC reports- these show which emails are failing SPF and DKIM, whether they be legitimate or malicious. Our DMARC record looks like:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
              Type  Name         Content                                             TTL<br />
              TXT   _dmarc       v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@monsec.io  Auto<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </pre>
          
          <h2 id="dmarc-implementation" className="text-2xl font-bold mb-2">How to implement</h2>
          <p className="mb-6">
            This is another simple TXT record, which may be generated by your hosting provider. If you have a system for processing DMARC reports, such as a SIEM platform, you may have to enter a corresponding email address. Take care with using <span className="text-green-500">p=reject</span>, as it may cause unexpected delivery failures without proper preparation.
          </p>
          
          <h2 id="mta-sts" className="text-2xl font-bold mb-2">SMTP MTA-STS - Mail Transfer Agent Strict Transport security</h2>
          <p className="mb-6">
            MTA-STS mitigates MITM attacks by using TLS encryption for an entire email exchange. Traditionally, SMTP uses “opportunistic encryption” to switch from cleartext to encrypted comms (such as with the 250 STARTTLS code). There are two steps to implement this. The first is with a TXT record to indicate the usage of MTA-STS; our record looks like:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
              Type  Name          Content                                      TTL<br />
              TXT   _mta-sts      v=STSv1;id=1707645265270;                    Auto<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </pre>
          <p className="mb-6">
            The ID number here is used by external servers to monitor for updates to your MTA-STS policy. The second step is publishing that policy. The policy must be a <span className="text-green-500">mta-sts.txt</span> file, with our file as follows for reference:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
              version: STSv1<br />
              mode: testing<br />
              mx: aspmx.l.google.com<br />
              mx: aspmx2.googlemail.com<br />
              mx: aspmx3.googlemail.com<br />
              mx: alt1.aspmx.l.google.com<br />
              mx: alt2.aspmx.l.google.com<br />
              max_age: 604800<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </pre>
          <p className="mb-6">
            This must be uploaded to a subdomain starting with <span className="text-green-500">mta-sts</span>, in directory <span className="text-green-500">.well-known</span>. The MonSec policy, for example, is at <a href="https://mta-sts.monsec.io/.well-known/mta-sts.txt" className="link text-purple-500">https://mta-sts.monsec.io/.well-known/mta-sts.txt</a>.
          </p>
          
          <h2 id="tls-reporting" className="text-2xl font-bold mb-2">SMTP TLS Reporting</h2>
          <p className="mb-6">
            MTA-STS works hand-in-hand with TLS reporting, which is similar in some regards to DMARC reporting. TLS reports will indicate failures in TLS application, and will be sent to the address elected in the record. Our record looks as such:
          </p>
          <pre className="code-block mb-6 relative group">
            <code>
              Type  Name             Content                                          TTL<br />
              TXT   _smtp._tls       v=TLSRPTv1;rua=mailto:smtp-tls-reports@monsec.io  Auto<br />
            </code>
            <button className="absolute top-2 right-2 bg-purple-500 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100">Copy</button>
          </pre>
          <p className="mb-6">
            These configurations may be generated by your hosting provider, and the MTA-STS policy should be set to <span className="text-green-500">testing</span> until ensuring that everything works as expected.
          </p>
          
          <h2 id="conclusion" className="text-2xl font-bold mb-2">Conclusion</h2>
          <p className="mb-6">
            While we don’t touch on end-to-end encryption standards like PGP and S/MIME, these are the simplest ways to comply with modern email security standards.
          </p>

          <h2 id="references" className="text-2xl font-bold mb-2">References</h2>
          <h3 id="standards" className="text-xl font-bold mb-2">Standards</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc5321" className="link text-purple-500">SMTP - RFC 5321</a></li>
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc7208" className="link text-purple-500">SPF - RFC 7208</a></li>
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc6376" className="link text-purple-500">DKIM - RFC 6376</a></li>
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc7489" className="link text-purple-500">DMARC - RFC 7489</a></li>
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc8461" className="link text-purple-500">MTA-STS - RFC 8461</a></li>
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc8460" className="link text-purple-500">TLS Reporting - RFC 8460</a></li>
            <li className="mb-2"><a href="https://tools.ietf.org/html/rfc8314" className="link text-purple-500">Obsolesence of cleartext - RFC 8314</a></li>
          </ul>
          
          <h3 id="guides" className="text-xl font-bold mb-2">Guides</h3>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><a href="https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/" className="link text-purple-500">Cloudflare. (2024). What are DMARC, DKIM, and SPF?</a></li>
            <li className="mb-2"><a href="https://emailsecurity.blog/hosting-your-mta-sts-policy-using-github-pages" className="link text-purple-500">Email Security Geek. (2020, Feb 20). Hosting your MTA-STS policy using GitHub Pages</a></li>
            <li className="mb-2"><a href="https://support.google.com/a/answer/9261504" className="link text-purple-500">Google. (2024). Increase email security with MTA-STS and TLS reporting</a></li>
          </ul>
          
          <hr className="border-t-2 border-neutral-400 mb-4" />
          <div className="flex items-center mb-6">
            <img src={authorImage} alt="Oscar Lupton" className="w-24 h-24 rounded-full mr-4" />
            <div>
              <p className="text-lg font-bold">Oscar Lupton</p>
              <p className="text-neutral-400">2024 TREASURER</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default EmailSecurityPost;
