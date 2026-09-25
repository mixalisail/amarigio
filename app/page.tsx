"use client";

import { useEffect, useState } from "react";

const collections = [
  { n: "01", title: "Προσωποποιημένα δώρα", text: "Μοναδικές δημιουργίες για ανθρώπους και στιγμές που αξίζει να θυμάσαι." },
  { n: "02", title: "Γάμος & βάπτιση", text: "Μια ενιαία αισθητική, σχεδιασμένη γύρω από τη δική σου ιστορία." },
  { n: "03", title: "Διακόσμηση", text: "Χειροποίητες λεπτομέρειες που δίνουν χαρακτήρα σε κάθε χώρο." },
];

const steps = ["Μοιράζεσαι την ιδέα σου", "Σχεδιάζουμε μαζί τις λεπτομέρειες", "Δημιουργούμε το μοναδικό σου αντικείμενο", "Το παραλαμβάνεις έτοιμο να ξεχωρίσει"];

export default function Home() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = () => setMenu(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="amarigio αρχική"><span>a</span> amarigio</a>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Μενού" aria-expanded={menu}>☰</button>
        <nav className={menu ? "links open" : "links"}>
          <a href="#story">Η ιστορία μας</a><a href="#collections">Συλλογές</a><a href="#process">Η διαδικασία</a><a href="#contact" className="navCta">Επικοινωνία</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="sun sunOne"/><div className="sun sunTwo"/>
        <div className="heroCopy reveal">
          <p className="eyebrow">CUSTOM • HANDMADE • YOURS</p>
          <h1>Όχι απλώς<br/>χειροποίητο.<br/><em>Δικό σου.</em></h1>
          <p className="lead">Κάθε amarigio ξεκινά από τη δική σου ιδέα και δημιουργείται ακριβώς όπως το φαντάζεσαι.</p>
          <div className="actions"><a className="button primary" href="#collections">Ανακάλυψε τις δημιουργίες</a><a className="button text" href="#contact">Φτιάξε κάτι μοναδικό →</a></div>
        </div>
        <div className="heroArt" aria-hidden="true"><div className="arch"><div className="flower">✦</div><div className="stem"/></div><p>made with intention</p></div>
      </section>

      <section className="manifesto" id="story">
        <p className="kicker">ΤΟ ΟΝΟΜΑ ΜΑΣ</p>
        <h2>Το κίτρινο είναι κάτι περισσότερο από χρώμα.</h2>
        <div className="storyGrid"><p>Το amarigio γεννήθηκε από το <strong>amarillo</strong>, την ισπανική λέξη για το κίτρινο. Ένα χρώμα που συμβολίζει δημιουργικότητα, αισιοδοξία και ζεστασιά.</p><p>Αυτές οι αξίες ζουν σε κάθε αντικείμενο που φτιάχνουμε. Χωρίς μαζική παραγωγή. Χωρίς έτοιμες λύσεις. Μόνο κάτι που έχει σχεδιαστεί για εσένα.</p></div>
      </section>

      <section className="collections" id="collections">
        <div className="sectionHead"><div><p className="kicker">ΤΙ ΔΗΜΙΟΥΡΓΟΥΜΕ</p><h2>Ιδέες που παίρνουν μορφή.</h2></div><p>Οι φωτογραφίες σου θα μπουν εδώ και θα μετατρέψουν τη σελίδα σε ένα καθαρό, σύγχρονο portfolio.</p></div>
        <div className="cards">{collections.map((c, i) => <article className={`card tone${i+1}`} key={c.n}><div className="cardVisual"><span>{c.n}</span><div className="botanical">❋</div></div><h3>{c.title}</h3><p>{c.text}</p><a href="#contact">Ζήτησε τη δική σου →</a></article>)}</div>
      </section>

      <section className="process" id="process">
        <div><p className="kicker">ΑΠΟ ΤΗΝ ΙΔΕΑ ΣΤΗ ΔΗΜΙΟΥΡΓΙΑ</p><h2>Το δικό σου,<br/><em>βήμα προς βήμα.</em></h2></div>
        <ol>{steps.map((s,i)=><li key={s}><span>0{i+1}</span><p>{s}</p></li>)}</ol>
      </section>

      <section className="quote"><blockquote>“Nothing is off the shelf.”</blockquote><p>Γιατί το ξεχωριστό δεν αντιγράφεται.</p></section>

      <section className="contact" id="contact">
        <p className="kicker">ΑΣ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΜΑΖΙ</p><h2>Έχεις μια ιδέα;<br/><em>Θέλουμε να την ακούσουμε.</em></h2>
        <p>Στείλε μας μήνυμα στο Instagram με αυτό που έχεις φανταστεί. Ακόμη και μια απλή αναφορά, ένα χρώμα ή μια περίσταση είναι αρκετά για να ξεκινήσουμε.</p>
        <a className="button dark" href="https://www.instagram.com/amarigio__?stkn=YXdnem8zeWJpcXc2" target="_blank" rel="noreferrer">Μίλησέ μας στο Instagram ↗</a>
      </section>

      <footer><a className="brand light" href="#top"><span>a</span> amarigio</a><p>Custom creations • Made in Greece</p><p>© {new Date().getFullYear()} amarigio</p></footer>
    </main>
  );
}
