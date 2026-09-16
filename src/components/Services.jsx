import { ArrowUpRightIcon } from './icons'
import { PointerGlow, Reveal } from '../motion'

function BrowserMock() {
  return (
    <div className="mock mock--browser" aria-hidden="true">
      <div className="mock__bar">
        <span />
        <span />
        <span />
        <span className="mock__url" />
      </div>
      <div className="mock__screen">
        <span className="mock__line w-80" />
        <span className="mock__line w-60" />
        <span className="mock__line w-70" />
        <span className="mock__btn" />
      </div>
    </div>
  )
}

function PhoneMock() {
  return (
    <div className="mock mock--phone" aria-hidden="true">
      <div className="mock__speaker" />
      <div className="mock__msg mock__msg--in">Hey, can you build our app?</div>
      <div className="mock__msg mock__msg--out">Yes — first version in 4 weeks.</div>
      <div className="mock__msg mock__msg--in">
        Great.
        <span className="mock__tick">✓✓</span>
      </div>
    </div>
  )
}

function CodeMock() {
  return (
    <div className="mock mock--code" aria-hidden="true">
      <div className="mock__code-line">
        <span className="c-k">const</span> <span className="c-t">crackyyy</span> = <span className="c-f">build</span>(
      </div>
      <div className="mock__code-line ind-2">
        stack: [<span className="c-s">'web'</span>, <span className="c-s">'mobile'</span>],
      </div>
      <div className="mock__code-line ind-2">
        quality: <span className="c-m">true</span>,
      </div>
      <div className="mock__code-line ind-1">
        ) <span className="mock__caret" />
      </div>
    </div>
  )
}

function ChatMock() {
  return (
    <div className="mock mock--chat" aria-hidden="true">
      <div className="mock__msg mock__msg--in d-1">Price for our website?</div>
      <div className="mock__msg mock__msg--out d-2">₹ — replied instantly ✦</div>
      <div className="mock__msg mock__msg--in d-3">
        Interested. <span className="mock__tick">✓✓</span>
      </div>
      <div className="mock__typing" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

function SparkMock() {
  return (
    <div className="mock mock--spark" aria-hidden="true">
      <svg viewBox="0 0 120 44" preserveAspectRatio="none">
        <path
          className="spark-path"
          d="M2 38 C 18 34, 22 18, 34 20 S 52 38, 64 26 S 84 4, 96 8 S 112 18, 118 10"
          fill="none"
        />
      </svg>
      <span className="spark-dot d-1" />
      <span className="spark-dot d-2" />
    </div>
  )
}

function CalendarMock() {
  return (
    <div className="mock mock--cal" aria-hidden="true">
      {Array.from({ length: 14 }).map((_, i) => (
        <span key={i} className={`cal-cell${i === 6 ? ' is-active' : ''}`} />
      ))}
    </div>
  )
}

const cells = [
  {
    n: '04',
    span: 'span-6',
    title: 'Business automation',
    body: 'WhatsApp and Instagram flows — automated replies, chatbots, and follow-ups that respond while you sleep.',
    tags: ['WhatsApp', 'Instagram', 'Webhooks'],
    visual: <ChatMock />,
    feature: true,
  },
  {
    n: '01',
    span: 'span-3',
    title: 'Websites & landing pages',
    body: 'Marketing sites, portfolios, and e-commerce — responsive, fast, and easy to update.',
    tags: ['React', 'Next.js', 'SEO'],
    visual: <BrowserMock />,
  },
  {
    n: '02',
    span: 'span-3',
    title: 'Mobile apps',
    body: 'Cross-platform iOS & Android apps, MVP to store-ready.',
    tags: ['iOS', 'Android'],
    visual: <PhoneMock />,
  },
  {
    n: '03',
    span: 'span-3',
    title: 'Custom software',
    body: 'Dashboards, APIs, and internal tools built around your workflows.',
    tags: ['Node.js', 'Python'],
    visual: <CodeMock />,
  },
  {
    n: '05',
    span: 'span-3',
    title: 'AI / ML projects',
    body: 'Applied machine learning for college projects and real products — from idea to deployment.',
    tags: ['PyTorch', 'Python', 'RAG / LLM'],
    visual: <SparkMock />,
  },
  {
    n: '06',
    span: 'span-6',
    title: 'Part-time engineering',
    body: 'A developer on your team for a sprint, a quarter, or a single feature — billed per scope, not per hour.',
    tags: ['Flexible', 'Project basis', 'Weekly syncs'],
    visual: <CalendarMock />,
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-soft">
      <div className="container">
        <div className="index-head">
          <Reveal>
            <p className="kicker">02 / Services</p>
          </Reveal>
          <div>
            <Reveal variant="up" delay={90}>
              <h2>What we build</h2>
            </Reveal>
            <Reveal variant="up" delay={170}>
              <p className="index-head__sub">
                Six ways we can work together. Pick one, or hand us the whole problem.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="bento">
          {cells.map((c, i) => (
            <Reveal
              key={c.n}
              variant="up"
              delay={(i % 3) * 90}
              className={`bento__cell-wrap ${c.span}`}
            >
              <PointerGlow>
                <a href="#contact" className={`bento__cell${c.feature ? ' is-feature' : ''}`}>
                  <span className="bento__n">{c.n}</span>
                  <div className="bento__copy">
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                  <div className="bento__tags">
                    {c.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="bento__visual">{c.visual}</div>
                  <span className="bento__arrow">
                    <ArrowUpRightIcon size={20} />
                  </span>
                </a>
              </PointerGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}