const PDFDocument = require('pdfkit');
const fs = require('fs');
const companyName = process.argv[2] || "Your Company";
const lang = process.argv[3] || "fr";
// Create a new PDF document
const doc = new PDFDocument();


// TODO : change it to read from text file and auto generate instead of this scuffed implementation
// Pipe the PDF content to a file
const fileNameOutput = lang === 'fr' ? `lettre_motivation_${companyName}.pdf` : `motivation_letter_${companyName}.pdf`;
const writeStream = fs.createWriteStream(fileNameOutput);
doc.pipe(writeStream);
// Add text to the PDF
if (lang === 'fr') {
    doc.font('Helvetica-Bold').fontSize(12).text('Madame, Monsieur,\n\n', { align: 'justify' }).font('Helvetica');

    doc.fontSize(12).text("Je m'appelle Abderrahmen Sfayhi, étudiant en ingénierie informatique à Esprit Ecole Supérieure Privée d'Ingénierie et de Technologies (Esprit). Passionné par le développement web et fort d'une solide formation académique, je suis actuellement à la recherche d'un stage dans le domaine du développement web full stack au sein de votre entreprise.\n\n"
        , { align: 'justify' });

    doc.fontSize(12).text("Votre réputation en tant qu'entreprise innovante dans le secteur du web m'inspire grandement, et c'est avec un vif intérêt que je vous adresse ma candidature. Mon parcours académique m'a permis d'acquérir des compétences approfondies en programmation, en utilisant des technologies telles que: HTML, CSS, JavaScript, React, Angular, Next.js, Node.js, Spring Boot, Docker.\n\n"
        , { align: 'justify' });

    doc.fontSize(12).text("Au cours de mes études, j'ai eu l'opportunité de travailler sur plusieurs projets pratiques, démontrant ainsi ma capacité à concevoir et à développer des applications web fonctionnelles et esthétiques. Mon expérience pratique, combinée à ma passion pour la résolution de problèmes complexes, me positionne comme un candidat idéal pour contribuer efficacement à vos projets de développement web.\n\n"
        , { align: 'justify' });

    doc.fontSize(12).text("Ce qui distingue votre entreprise, à mes yeux, c'est son engagement envers l'innovation et la qualité. Je suis convaincu que rejoindre votre équipe me permettra d'approfondir mes connaissances, d'affiner mes compétences et de contribuer de manière significative à la réalisation de projets stimulants.\n\n"
        , { align: 'justify' });

    doc.fontSize(12).text("En tant que personne proactive et orientée vers les résultats, je suis prêt à m'investir pleinement dans toutes les tâches qui me seront confiées. Mon adaptabilité, ma créativité et ma volonté d'apprendre constamment font de moi un collaborateur potentiel dynamique au sein de votre équipe.\n\n"
        , { align: 'justify' });

    doc.fontSize(12).text(`Je serais honoré de discuter plus en détail de la manière dont mes compétences et mon enthousiasme peuvent bénéficier à ${companyName}. Je me tiens à votre disposition pour un entretien à votre convenance.\n\n`
        , { align: 'justify' });

    doc.fontSize(12).text("Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées\n\n", { align: 'justify' });

    doc.fontSize(12).text("Cordialement.", { align: 'justify', });
} else {
    doc.font('Helvetica-Bold').fontSize(12).text('Dear Sir/Madam,\n\n', { align: 'justify' }).font('Helvetica');
    const firstParagraph = "My name is Abderrahmen Sfayhi, a student in computer engineering at Esprit Ecole Supérieure Privée d'Ingénierie et de Technologies (Esprit). Passionate about web development and armed with a solid academic background, I am currently seeking an internship in the field of full-stack web development within your company.";
    doc.fontSize(12).text(`${firstParagraph}\n\n`, { align: 'justify' });

    const secondParagraph = "Your reputation as an innovative company in the web sector greatly inspires me, and it is with keen interest that I submit my application to you. My academic journey has allowed me to acquire in-depth programming skills, utilizing technologies such as HTML, CSS, JavaScript, React, Angular, Next.js, Node.js, Spring Boot, Docker.";
    doc.fontSize(12).text(`${secondParagraph}\n\n`, { align: 'justify' });

    const thirdParagraph = "During my studies, I have had the opportunity to work on several practical projects, demonstrating my ability to design and develop functional and aesthetic web applications. My practical experience, coupled with my passion for solving complex problems, positions me as an ideal candidate to contribute effectively to your web development projects.";
    doc.fontSize(12).text(`${thirdParagraph}\n\n`, { align: 'justify' });

    const fourthParagraph = "What distinguishes your company, in my eyes, is its commitment to innovation and quality.I am confident that joining your team will allow me to deepen my knowledge, refine my skills, and contribute significantly to the realization of stimulating projects";
    doc.fontSize(12).text(`${fourthParagraph}\n\n`, { align: 'justify' });

    const fivethParagraph = "As a proactive and results-oriented individual, I am ready to fully invest myself in any tasks entrusted to me. My adaptability, creativity, and constant eagerness to learn make me a dynamic potential collaborator within your team.";
    doc.fontSize(12).text(`${fivethParagraph}\n\n`, { align: 'justify' });

    const sixthParagraph = `I would be honored to discuss in more detail how my skills and enthusiasm can benefit ${companyName}. I am available for an interview at your convenience.`;
    doc.fontSize(12).text(`${sixthParagraph}\n\n`, { align: 'justify' });

    const seventhParagraph = "Please accept, Sir/Madam, the expression of my distinguished greetings.";
    doc.fontSize(12).text(`${seventhParagraph}\n\n`, { align: 'justify' });

    const eigth = "Sincerely,";
    doc.fontSize(12).text(`${eigth}\n\n`, { align: 'justify' });

    const nineth = "Abderrahmen Sfayhi.";
    doc.fontSize(12).text(`${nineth}\n\n`, { align: 'justify' });

}

// ... add the rest of the text

// Finalize the PDF
doc.end();

// Log a message when the PDF is generated successfully
writeStream.on('finish', () => {
    console.log('PDF generated successfully');
});

// Handle errors during PDF generation
doc.on('error', (err) => {
    console.error('Error during PDF generation:', err);
});
