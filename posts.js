const allPosts = [
    {
        id: 'plasmyrage',
        title: 'Plasmyrage: O Odă închinată sângelui',
        category: 'coding',
        date: '2024-12-15',
        excerpt: 'Un proiect personal care a început din dorința de a crea ceva tangibil cu propriile mâini. Learning tools made by students for students.',
        content: `O Oda închinată sângelui? Plasmyrage a pornit din dorința oricărui student la medicină, care încă din prima zi se visează „mare medic", de a face ceva TANGIBIL cu propriile mâini. 
Medicina, în esență, reprezintă dedicare și ambiție. Dedicare, evident, pentru a continua drumul deja început încă de la meditațiile din liceu pentru admitere, pentru menținerea acelui mindset de „best of the best". Iar ambiția? Ei bine, de obicei se rezumă la ambiția notelor, a burselor și la dorința de a-ți zdrobi competiția. Nimic greșit cu acest spirit de gladiator academic, desigur. 
Dar la mine ambiția nu a avut niciodată vreo legătură intimă cu educația formală. Tot ce am făcut până acum a fost o necesitate — ar fi fost „incomod" să nu reușesc în ceea ce îmi propun. Dar altceva mă rodea pe dinăuntru: extracurricularele, lucrurile „în plus" pe care aș fi putut să le creez cu adevărat. 
Cluburi? Nu aveam destulă personalitate pentru ele. Olimpiade? Da, poate, dar doar ca să alung plictiseala care mă lovea atunci când CHIAR trebuia să muncesc pentru rezultate (OLAV nu iartă haterii *Ana Karenina*). Proiecte personale, însă, 100% sub controlul meu, fără reguli stricte? Oh, da. 
Așa s-a născut ideea: learning tools made by students for students. Se poate? Short answer: da, cu încăpățânare, GitHub și Gemini care te privește ironic de fiecare dată când codul refuză să ruleze. 
Consider că oricine poate învăța să codeze. Însă de la a „coda" până la a „programa" e o distanță mare, străbătută de elemente de analiză, algebră, matematică pură, guys. Nu e imposibil. Dar ce e cu adevărat dificil? Brainstorming-ul și, implicit, structurarea proiectului. Poți avea cea mai spectaculoasă idee, dacă nu știi CE să faci cu ea, tot în sertar rămâne. 
Plasmyrage a fost conceput ca un *baby-project*, în sensul că nu mi-aș fi imaginat vreodată să îl realizez atât de repede și nici să îmi depășească așteptările privind funcționalitatea. Era un test drive, iar eu nu aveam nici măcar carnet de condus. 
Ce m-a motivat să continui până la forma actuală, pe care o puteți găsi [aici](https://gravityeffect1.github.io/plasmyrage/)? Ambiția. Dar nu ambiția hrănită de aplauze și recunoaștere, ci ambiția de a-mi dovedi mie că pot. Că nimic nu e imposibil cu suficientă încăpățânare (și, indirect, cu influența unui cadru didactic pasionat de domeniul hematologiei). 
Din punct de vedere tehnic, Plasmyrage s-a construit pe câteva piloni simpli dar deloc banali: HTML și CSS pentru partea vizuală minimalistă, JavaScript pentru interactivitate, și, inevitabil, repo-ul de pe GitHub care a fost atât teren de joacă, cât și câmp de bătălie. 
Am jonglat cu structuri de date și logica aplicației până să prindă contur ceva care să nu pară doar o machetă, ci un instrument funcțional. Nu am folosit framework-uri sofisticate — intenționat. A fost mai mult despre a înțelege „scheletul" din spatele aplicației, decât despre a masca imperfecțiunile cu unelte avansate. 
Partea tehnică a fost, paradoxal, mai puțin despre „a scrie cod" și mai mult despre a învăța să îți păstrezi calmul când ceva aparent banal refuză să funcționeze. 
În concluzie, Plasmyrage nu e doar un proiect, ci un exercițiu de răbdare, disciplină și (să recunoaștem) un strop de nebunie. Nu garantez că va schimba modul în care studenții privesc medicina sau învățarea. Dar garantez că m-a schimbat pe mine. Și cred că, în fond, asta e esența oricărui demers „tangibil": nu produsul final, ci omul care devii pe parcurs.`,
        // FIXED: Added 'coding' tag so it appears when clicking the coding navigation button
        tags: ['coding', 'javascript', 'html', 'css', 'github', 'medical-education']
    }
].sort((a, b) => new Date(b.date) - new Date(a.date));
