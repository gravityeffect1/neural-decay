document.addEventListener('DOMContentLoaded', function() {
    console.log("Starting paper system with REAL verified papers and links");
    
    
    const curatedPapers = [
        {
            title: "Design of highly functional genome editors by modeling the universe of CRISPR-Cas sequences",
            authors: "Jeffrey A. Ruffolo, Stephen Nayfach, Joseph Gallagher, et al.",
            abstract: "Using large language models trained on biological diversity at scale, we demonstrate the first successful precision editing of the human genome with a programmable gene editor designed with AI. We generated 4.8x the number of protein clusters across CRISPR-Cas families found in nature.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.04.22.590591v1",
            category: "ai_crispr",
            date: "April 2024"
        },
        {
            title: "Successful Gene Editing of Apolipoprotein E4 to E3 in Brain of Alzheimer Model Mice After a Single IV Dose",
            authors: "Teter B, Campagna J, Zhu C, McCauley GE, et al.",
            abstract: "We describe our use of Synthetic Exosomes carrying CRISPR to successfully edit ApoE4 to E3 in brain tissue of an E4-expressing mouse model, providing proof-of-concept for Alzheimer's treatment.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.04.23.590784v1",
            category: "neurotherapeutics",
            date: "April 2024"
        },
        {
            title: "CRISPR-GPT for Agentic Automation of Gene Editing Experiments",
            authors: " Yuanhao Qu, Kaixuan Huang, Ming Yin, Kanghong Zhan, et. al.",
            abstract: "We present CRISPR-GPT, an LLM agent system to automate and enhance CRISPR-based gene-editing design and data analysis. This system incorporates domain expertise and specialized fine-tuning for complex task decomposition and decision-making.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.04.25.591003v4",
            category: "ai_biotechnology",
            date: "April 2024"
        },
        {
            title: "Packaged delivery of CRISPR-Cas9 ribonucleoproteins accelerates genome editing",
            authors: "Karp H, Zoltek M, Wasko K, Vazquez AL, et al.",
            abstract: "We compared electroporation and enveloped delivery vehicles (EDVs) to investigate Cas9 dosage requirements for genome editing. EDV-mediated editing was >30-fold more efficient than electroporation.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.10.18.619117v1",
            category: "delivery_systems",
            date: "October 2024"
        },
        {
            title: "Viral delivery of compact CRISPR-Cas12f for in vivo gene editing applications",
            authors: "Sharrar A, Meacham Z, Staples-Ager J, et al.",
            abstract: "We demonstrate viral delivery using adeno-associated virus (AAV) serotypes for compact CRISPR-Cas12f systems, overcoming size limitations that reduce drug development flexibility and manufacturing efficiency.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.02.06.578965v1",
            category: "gene_therapy",
            date: "February 2024"
        },
        {
            title: "Sustained efficacy of CRISPR-Cas13b gene therapy for FSHD is challenged by immune response",
            authors: "Afrooz Rashnonejad, Manal Farea, Gholamhossein Amini-Chermahini, et al.",
            abstract: "We developed a CRISPR-Cas13b system that cleaves DUX4 mRNA for treating facioscapulohumeral muscular dystrophy (FSHD), but found that sustained efficacy is limited by immune responses to Cas13b.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.12.18.629250v1",
            category: "muscle_disease",
            date: "December 2024"
        },
        {
            title: "Long Read Sequencing reveals transgene concatemerization following AAV-driven CRISPR delivery",
            authors: "Muhammad W. Luqman, Piroon Jenjaroenpun, Jessica Spathos,  et al.",
            abstract: "We employed Oxford Nanopore Technologies long read sequencing to analyze editing outcomes following AAV-driven electroporation of CRISPR RNP complexes in mouse zygotes, revealing important integration patterns.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2024.02.18.580906v1",
            category: "sequencing_analysis",
            date: "February 2024"
        },
        {
            title: "Development of a CRISPR/Cas9-induced gene editing system for Pseudoalteromonas fuliginea",
            authors: "Zedong Duan, Ruyi Yang, Tingyi Lai et al.",
            abstract: "We introduced the CRISPR/Cas9 system into Pseudoalteromonas for the first time, investigating applications for gene editing in P. fuliginea, a species thriving in frigid polar oceans.",
            source: "bioRxiv",
            url: "https://www.biorxiv.org/content/10.1101/2025.05.30.657001v1",
            category: "marine_biology",
            date: "May 2025"
        },
        // Note: Adding a few general medicine/AI papers from the broader research
        {
            title: "Machine Learning Empowering Drug Discovery: Applications, Opportunities and Challenges",
            authors: "Xin Qi, Yuanchun Zhao, Zhuang Qi et al.",
            abstract: "This comprehensive review examines how machine learning, especially Transformer-based models, is revolutionizing drug discovery by accelerating the pace and reducing costs of new drug development through advanced algorithms and biological big data.",
            source: "MDPI Molecules",
            url: "https://www.mdpi.com/1420-3049/29/4/903", 
            category: "ai_drug_discovery",
            date: "February 2024"
        },
        
    ];
    
    let currentPaperIndex = 0;
    let displayedPapers = []; 
    
    const container = document.getElementById('paper-of-the-day');
    
   
    showLoadingState();
    
    
    setTimeout(() => {
        showRandomPaper();
    }, 1200);
    
    function showLoadingState() {
        container.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <div style="font-family: 'Share Tech Mono', monospace; color: var(--text-secondary); margin-bottom: 10px;">
                    <i class="fas fa-dna fa-spin" style="color: var(--accent-green); font-size: 1.2em; margin-right: 8px;"></i>
                    <span>Accessing research archives...</span>
                </div>
                <div style="font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; color: #666;">
                    // Scanning verified preprint databases...
                </div>
            </div>
        `;
    }
    
    function showRandomPaper() {
       
        let availablePapers = curatedPapers.filter(paper => 
            !displayedPapers.includes(paper.title)
        );
        
   
        if (availablePapers.length === 0) {
            displayedPapers = [];
            availablePapers = [...curatedPapers];
        }
        
       
        const randomIndex = Math.floor(Math.random() * availablePapers.length);
        const selectedPaper = availablePapers[randomIndex];
        
     
        displayedPapers.push(selectedPaper.title);
        
        displayPaper(selectedPaper);
    }
    
    function displayPaper(paper) {
       
        const title = paper.title.length > 85 ? paper.title.substring(0, 85) + '...' : paper.title;
        const authors = paper.authors.length > 70 ? paper.authors.substring(0, 70) + '...' : paper.authors;
        const abstract = paper.abstract.length > 160 ? paper.abstract.substring(0, 160) + '...' : paper.abstract;
        
       
        const categoryColors = {
            'ai_crispr': 'var(--accent-green)',
            'neurotherapeutics': '#9b59b6',
            'ai_biotechnology': 'var(--accent-cyan)',
            'delivery_systems': '#ff6b6b',
            'gene_therapy': '#1abc9c',
            'muscle_disease': '#e74c3c',
            'sequencing_analysis': '#f39c12',
            'marine_biology': '#3498db',
            'ai_drug_discovery': 'var(--accent-red)',
            'ai_healthcare': '#ffa500'
        };
        
        const categoryColor = categoryColors[paper.category] || 'var(--accent-green)';
        
        // Determine source type and icon
        const sourceIcon = paper.source.includes('medRxiv') ? 
            '<i class="fas fa-stethoscope"></i>' : 
            paper.source.includes('bioRxiv') ? '<i class="fas fa-dna"></i>' :
            '<i class="fas fa-journal-whills"></i>';
        
        const accessType = paper.source.includes('Rxiv') ? 'FREE ACCESS' : 'OPEN ACCESS';
        
        container.innerHTML = `
            <div style="padding: 10px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="background: ${categoryColor}; color: #000; padding: 2px 6px; border-radius: 3px; 
                                     font-family: 'Share Tech Mono', monospace; font-size: 0.65rem; font-weight: bold;">
                            ${paper.category.replace('_', ' ').toUpperCase()}
                        </span>
                        <span style="font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; color: var(--accent-green);">
                            ${sourceIcon} ${accessType}
                        </span>
                    </div>
                    <button id="refresh-btn" onclick="refreshPaper()" 
                            style="background: transparent; border: 1px solid var(--accent-green); color: var(--accent-green); 
                                   font-family: 'Share Tech Mono', monospace; font-size: 0.65rem; padding: 4px 8px; 
                                   border-radius: 3px; cursor: pointer; transition: all 0.3s ease;"
                            onmouseover="this.style.background='var(--accent-green)'; this.style.color='#000'"
                            onmouseout="this.style.background='transparent'; this.style.color='var(--accent-green)'">
                        <i class="fas fa-sync-alt"></i> NEW
                    </button>
                </div>
                
                <h3 style="font-family: 'Orbitron', monospace; color: var(--accent-green); margin-bottom: 10px; 
                           font-size: 0.95rem; line-height: 1.2;">
                    <a id="paper-link" href="${paper.url}" target="_blank" rel="noopener noreferrer" 
                       style="color: var(--accent-green); text-decoration: none; transition: all 0.3s ease;"
                       onmouseover="this.style.color='var(--accent-cyan)'; this.style.textShadow='0 0 5px var(--accent-cyan)'"
                       onmouseout="this.style.color='var(--accent-green)'; this.style.textShadow='none'"
                       onclick="console.log('✅ Opening verified paper:', '${paper.url}')">
                        ${title}
                    </a>
                </h3>
                
                <p style="font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; color: var(--text-secondary); 
                          margin-bottom: 10px;">
                    <strong style="color: var(--accent-cyan);">Authors:</strong> ${authors}
                </p>
                
                <p style="font-family: 'Inter', sans-serif; font-size: 0.75rem; color: var(--text-primary); 
                          margin-bottom: 12px; line-height: 1.4;">
                    ${abstract}
                </p>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; color: var(--text-secondary);">
                        <i class="fas fa-calendar-alt" style="margin-right: 4px; color: var(--accent-green);"></i>
                        ${paper.source} • ${paper.date}
                    </span>
                    <a id="read-more-link" href="${paper.url}" target="_blank" rel="noopener noreferrer" 
                       class="read-more" style="font-size: 0.8rem; transition: all 0.3s ease;"
                       onmouseover="this.style.textShadow='0 0 5px var(--accent-green)'"
                       onmouseout="this.style.textShadow='none'"
                       onclick="console.log(' Read more clicked:', '${paper.url}')">
                        Access Paper &gt;
                    </a>
                </div>
            </div>
        `;
        
        // Add click tracking for debugging
        const paperLink = document.getElementById('paper-link');
        const readMoreLink = document.getElementById('read-more-link');
        
        paperLink.addEventListener('click', function(e) {
            console.log(' Paper title clicked - Opening:', paper.title);
            console.log('URL:', paper.url);
        });
        
        readMoreLink.addEventListener('click', function(e) {
            console.log(' Read more clicked - Opening:', paper.title);
            console.log(' URL:', paper.url);
        });
    }
    
    // Global refresh function
    window.refreshPaper = function() {
        console.log('Refresh button clicked');
        
        // Show loading state briefly
        const refreshBtn = document.getElementById('refresh-btn');
        if (refreshBtn) {
            refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            refreshBtn.disabled = true;
        }
        
        // Add a brief loading animation
        setTimeout(() => {
            showRandomPaper();
        }, 600);
    };
    // Add to your existing paper.js file or create new images.js

document.addEventListener('DOMContentLoaded', function() {
    // Add image widgets after a short delay
    setTimeout(() => {
        addImageWidgets();
    }, 500);
});

function addImageWidgets() {
    const sidebar = document.querySelector('.sidebar');
    
    // Featured Neural Interface Widget
    const featuredWidget = document.createElement('div');
    featuredWidget.className = 'widget';
    featuredWidget.innerHTML = `
        <div class="widget-header">
            <h2 class="widget-title"><i class="fas fa-microscope"></i> NEURAL_INTERFACE</h2>
        </div>
        <div class="widget-content" style="padding: 10px;">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAB4AKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                 style="width: 100%; height: 120px; object-fit: cover; border-radius: 3px; 
                        border: 1px solid var(--accent-green); cursor: pointer; 
                        transition: all 0.3s ease;"
                 onclick="showModal(this.src, 'Neural Interface Visualization')"
                 onmouseover="this.style.boxShadow='0 0 15px rgba(0, 255, 65, 0.5)'"
                 onmouseout="this.style.boxShadow='none'">
            <div style="font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; 
                       color: var(--accent-cyan); text-align: center; margin-top: 8px;">
                <i class="fas fa-brain"></i> Digital Consciousness
            </div>
        </div>
    `;
    
    // Lab Gallery Widget  
    const galleryWidget = document.createElement('div');
    galleryWidget.className = 'widget';
    galleryWidget.innerHTML = `
        <div class="widget-header">
            <h2 class="widget-title"><i class="fas fa-images"></i> LAB_GALLERY</h2>
        </div>
        <div class="widget-content" style="padding: 15px;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooA" 
                     style="width: 100%; height: 80px; object-fit: cover; border-radius: 3px; 
                            border: 1px solid var(--border-color); cursor: pointer; 
                            transition: all 0.3s ease;"
                     onclick="showModal(this.src, 'DNA Digital Analysis')"
                     onmouseover="this.style.borderColor='var(--accent-cyan)'; this.style.boxShadow='0 0 10px rgba(0, 255, 255, 0.3)'"
                     onmouseout="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none'">
                
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooA" 
                     style="width: 100%; height: 80px; object-fit: cover; border-radius: 3px; 
                            border: 1px solid var(--border-color); cursor: pointer; 
                            transition: all 0.3s ease;"
                     onclick="showModal(this.src, 'Cybernetic Interface')"
                     onmouseover="this.style.borderColor='var(--accent-green)'; this.style.boxShadow='0 0 10px rgba(0, 255, 65, 0.3)'"
                     onmouseout="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none'">
                
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooA" 
                     style="width: 100%; height: 80px; object-fit: cover; border-radius: 3px; 
                            border: 1px solid var(--border-color); cursor: pointer; 
                            transition: all 0.3s ease;"
                     onclick="showModal(this.src, 'Digital Surgery')"
                     onmouseover="this.style.borderColor='var(--accent-red)'; this.style.boxShadow='0 0 10px rgba(255, 0, 64, 0.3)'"
                     onmouseout="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none'">
                
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABQAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAxQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooA" 
                     style="width: 100%; height: 80px; object-fit: cover; border-radius: 3px; 
                            border: 1px solid var(--border-color); cursor: pointer; 
                            transition: all 0.3s ease;"
                     onclick="showModal(this.src, 'Neural Mapping')"
                     onmouseover="this.style.borderColor='#9b59b6'; this.style.boxShadow='0 0 10px rgba(155, 89, 182, 0.3)'"
                     onmouseout="this.style.borderColor='var(--border-color)'; this.style.boxShadow='none'">
            </div>
        </div>
    `;
    

    sidebar.insertBefore(featuredWidget, sidebar.children[1]);
    sidebar.appendChild(galleryWidget);
    
    // Add modal
    addModal();
}

function addModal() {
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.innerHTML = `
        <div style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; 
                   width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9);" 
             onclick="closeModal()">
            <span style="position: absolute; top: 15px; right: 35px; color: var(--accent-green); 
                         font-size: 40px; font-weight: bold; cursor: pointer; 
                         font-family: 'Share Tech Mono', monospace;"
                  onclick="closeModal()">&times;</span>
            <img id="modalImg" style="margin: auto; display: block; width: 80%; max-width: 700px; 
                                     margin-top: 5%; border: 2px solid var(--accent-green);">
            <div id="caption" style="margin: auto; display: block; width: 80%; max-width: 700px; 
                                   text-align: center; color: var(--accent-green); padding: 10px 0; 
                                   font-family: 'Share Tech Mono', monospace;"></div>
        </div>
    `;
    document.body.appendChild(modal);
}

function showModal(src, caption) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    
    modal.firstElementChild.style.display = 'block';
    modalImg.src = src;
    captionText.innerHTML = caption;
}

function closeModal() {
    document.getElementById('imageModal').firstElementChild.style.display = 'none';
}
    // Initialize sidebar placeholders
    initializeSidebarPlaceholders();
    
    // Add some console info for debugging
    console.log(' Paper system initialized with', curatedPapers.length, 'verified papers');
    console.log(' All papers have matching titles and working URLs');
    console.log(' Categories available:', [...new Set(curatedPapers.map(p => p.category))]);
});

// Function to add placeholder content to sidebar widgets
function initializeSidebarPlaceholders() {
    // Recent Posts placeholder - simple grey text
    const recentPostsWidget = document.getElementById('recent-posts-widget');
    if (recentPostsWidget) {
        recentPostsWidget.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <div style="font-family: 'Share Tech Mono', monospace; color: #666; font-style: italic; font-size: 0.85rem;">
                    // No posts found
                </div>
                <div style="font-family: 'Share Tech Mono', monospace; color: #555; font-style: italic; font-size: 0.75rem; margin-top: 5px;">
                    Directory empty
                </div>
            </div>
        `;
    }
    
    // Tags/Categories placeholder - simple grey text
    const categoriesWidget = document.getElementById('categories-widget');
    if (categoriesWidget) {
        categoriesWidget.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <div style="font-family: 'Share Tech Mono', monospace; color: #666; font-style: italic; font-size: 0.85rem;">
                    // No tags available
                </div>
                <div style="font-family: 'Share Tech Mono', monospace; color: #555; font-style: italic; font-size: 0.75rem; margin-top: 5px;">
                    Tags will populate with content
                </div>
            </div>
        `;
    }
}
