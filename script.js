document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.querySelector("#github-calendar");

    if (!calendar) return;

    GitHubCalendar(
        "#github-calendar",
        "ttahsin124-wq",
        {
            responsive: true,
            tooltips: true,
            global_stats: true,
            summary_text:
                "Contribution activity of ttahsin124-wq"
        }
    )
    .then(() => {
        console.log("GitHub contribution calendar loaded.");
    })
    .catch((error) => {
        console.error(
            "Failed to load GitHub contribution calendar:",
            error
        );

        calendar.innerHTML = `
            <div class="github-calendar-error">
                Unable to load GitHub activity right now.
                <br>
                <a
                    href="https://github.com/ttahsin124-wq"
                    target="_blank"
                    rel="noreferrer"
                >
                    View GitHub profile ↗
                </a>
            </div>
        `;
    });
});
const cursorGlow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const visual = document.querySelector('.hero-visual');
visual?.addEventListener('mousemove', (e) => {
  const rect = visual.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  visual.querySelector('.glass-stack').style.transform = `rotateY(${x * 7}deg) rotateX(${y * -7}deg)`;
});
visual?.addEventListener('mouseleave', () => {
  visual.querySelector('.glass-stack').style.transform = '';
});
