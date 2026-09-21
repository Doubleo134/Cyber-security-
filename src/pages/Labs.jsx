import { useState } from "react";

function TerminalLab() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState([
    "OSCAR SECURITY TERMINAL v1.0",
    'Type "help" to see available commands.',
  ]);

  const runCommand = () => {
    const command = input.trim().toLowerCase();

    if (!command) return;

    let response = "";

    switch (command) {
      case "help":
        response =
          "Commands: help, about, projects, skills, labs, clear";
        break;
      case "about":
        response =
          "Oscar — cybersecurity student focused on Python, networking, and defensive security.";
        break;
      case "projects":
        response =
          "Projects: Password Security Checker | Network Security Scanner | File Integrity Monitor";
        break;
      case "skills":
        response =
          "Python | JavaScript | React | Networking | Linux | Git | TCP/IP";
        break;
      case "labs":
        response =
          "You are already inside the Cybersecurity Labs.";
        break;
      case "clear":
        setLines([]);
        setInput("");
        return;
      default:
        response = `Command not found: ${command}`;
    }

    setLines((current) => [...current, `> ${command}`, response]);
    setInput("");
  };

  return (
    <div className="lab-card terminal-card">
      <div className="lab-header">
        <span>●</span>
        <span>CYBER TERMINAL</span>
      </div>

      <div className="terminal-output">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        <div className="terminal-input">
          <span>&gt;</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                runCommand();
              }
            }}
            placeholder="type a command..."
          />
        </div>
      </div>
    </div>
  );
}

function PasswordLab() {
  const [password, setPassword] = useState("");

  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;

  let strength = "Enter a test password";
  if (password && score <= 2) strength = "Weak";
  if (password && score === 3) strength = "Moderate";
  if (password && score === 4) strength = "Strong";
  if (password && score === 5) strength = "Very Strong";

  return (
    <div className="lab-card">
      <div className="lab-number">01</div>

      <h2>Password Security Lab</h2>

      <p>
        Test a fictional password and see which security requirements
        it meets. Nothing is uploaded or saved.
      </p>

      <input
        className="lab-input"
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter a TEST password"
      />

      <div className="strength-display">
        <strong>{strength}</strong>

        <div className="strength-bar">
          <div
            style={{
              width: `${score * 20}%`,
            }}
          />
        </div>
      </div>

      <div className="check-list">
        <div className={checks.length ? "passed" : ""}>
          {checks.length ? "✓" : "○"} At least 12 characters
        </div>

        <div className={checks.uppercase ? "passed" : ""}>
          {checks.uppercase ? "✓" : "○"} Uppercase letter
        </div>

        <div className={checks.lowercase ? "passed" : ""}>
          {checks.lowercase ? "✓" : "○"} Lowercase letter
        </div>

        <div className={checks.number ? "passed" : ""}>
          {checks.number ? "✓" : "○"} Number
        </div>

        <div className={checks.symbol ? "passed" : ""}>
          {checks.symbol ? "✓" : "○"} Special character
        </div>
      </div>

      <small>
        ⚠️ Never enter a real password into a website demo.
      </small>
    </div>
  );
}

async function hashText(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function IntegrityLab() {
  const [fileContent, setFileContent] = useState(
    "This is a safe test file."
  );
  const [hash, setHash] = useState("");

  const generateHash = async () => {
    const newHash = await hashText(fileContent);
    setHash(newHash);
  };

  return (
    <div className="lab-card">
      <div className="lab-number">02</div>

      <h2>File Integrity Lab</h2>

      <p>
        Change the contents of this fictional file and generate its
        SHA-256 hash. Even a tiny change creates a different hash.
      </p>

      <textarea
        className="lab-textarea"
        value={fileContent}
        onChange={(event) => setFileContent(event.target.value)}
      />

      <button className="lab-button" onClick={generateHash}>
        Generate SHA-256
      </button>

      {hash && (
        <div className="hash-result">
          <span>SHA-256 HASH</span>
          <code>{hash}</code>
        </div>
      )}
    </div>
  );
}

function PhishingChallenge() {
  const [answer, setAnswer] = useState(null);

  const clues = [
    "The message creates urgency and demands immediate action.",
    "The sender address looks unusual.",
    "The message asks you to click a link to verify information.",
  ];

  return (
    <div className="lab-card">
      <div className="lab-number">03</div>

      <h2>Phishing Challenge</h2>

      <div className="email-window">
        <div className="email-top">
          <span>INBOX</span>
          <span>⚠ SECURITY ALERT</span>
        </div>

        <h3>Your account requires immediate verification</h3>

        <p>
          From: security-alert@example-test.com
        </p>

        <p>
          We detected unusual activity on your account. Click the
          verification button immediately to prevent access from
          being restricted.
        </p>

        <button
          className="fake-link"
          onClick={() => setAnswer("phishing")}
        >
          VERIFY ACCOUNT
        </button>
      </div>

      <div className="challenge-buttons">
        <button onClick={() => setAnswer("phishing")}>
          🚨 Phishing
        </button>

        <button onClick={() => setAnswer("safe")}>
          ✓ Safe
        </button>
      </div>

      {answer && (
        <div className="challenge-result">
          {answer === "phishing" ? (
            <>
              <strong>Correct.</strong>
              <p>
                Good catch. Look for urgency, suspicious senders,
                unexpected links, and requests for sensitive actions.
              </p>

              <ul>
                {clues.map((clue) => (
                  <li key={clue}>{clue}</li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <strong>Not quite.</strong>
              <p>
                This fictional message contains several common
                phishing warning signs.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function CyberQuiz() {
  const questions = [
    {
      question: "What does HTTPS help provide?",
      answers: [
        "Encrypted communication",
        "Faster Wi-Fi",
        "More storage",
        "A stronger password",
      ],
      correct: 0,
    },
    {
      question: "What does SHA-256 produce?",
      answers: [
        "A cryptographic hash",
        "A network cable",
        "A password manager",
        "An IP address",
      ],
      correct: 0,
    },
    {
      question: "What is phishing?",
      answers: [
        "A social engineering attack",
        "A type of firewall",
        "A programming language",
        "A backup method",
      ],
      correct: 0,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const chooseAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore((value) => value + 1);
    }

    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((value) => value + 1);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="lab-card">
      <div className="lab-number">04</div>

      <h2>Cybersecurity Quiz</h2>

      {!finished ? (
        <>
          <p>
            Question {current + 1} of {questions.length}
          </p>

          <h3 className="quiz-question">
            {questions[current].question}
          </h3>

          <div className="quiz-options">
            {questions[current].answers.map((answer, index) => (
              <button
                key={answer}
                onClick={() => chooseAnswer(index)}
              >
                {answer}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="quiz-result">
          <h3>
            Score: {score}/{questions.length}
          </h3>

          <p>
            {score === questions.length
              ? "Excellent cybersecurity knowledge."
              : "Nice work. Keep learning and building."}
          </p>

          <button className="lab-button" onClick={restart}>
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

function SecureSystemGame() {
  const [selected, setSelected] = useState([]);

  const defenses = [
    "Enable multi-factor authentication",
    "Keep software patched",
    "Use least-privilege access",
    "Create regular backups",
  ];

  const toggleDefense = (defense) => {
    setSelected((current) =>
      current.includes(defense)
        ? current.filter((item) => item !== defense)
        : [...current, defense]
    );
  };

  return (
    <div className="lab-card">
      <div className="lab-number">05</div>

      <h2>Secure the System</h2>

      <p>
        You are protecting a fictional company network. Choose the
        defensive controls you would deploy first.
      </p>

      <div className="defense-grid">
        {defenses.map((defense) => {
          const active = selected.includes(defense);

          return (
            <button
              key={defense}
              className={active ? "defense selected" : "defense"}
              onClick={() => toggleDefense(defense)}
            >
              {active ? "✓" : "○"} {defense}
            </button>
          );
        })}
      </div>

      <div className="system-status">
        SYSTEM SECURITY: {selected.length}/4 CONTROLS ENABLED
      </div>
    </div>
  );
}

function Labs() {
  return (
    <main className="section labs-page">
      <p className="section-label">CYBER LABS</p>

      <h1>
        Don't just
        <br />
        look at the portfolio.
        <br />
        <span>Use it.</span>
      </h1>

      <p className="section-text">
        Interactive cybersecurity experiments designed to show
        practical security concepts in the browser.
      </p>

      <div className="labs-grid">
        <TerminalLab />
        <PasswordLab />
        <IntegrityLab />
        <PhishingChallenge />
        <CyberQuiz />
        <SecureSystemGame />
      </div>
    </main>
  );
}

export default Labs;