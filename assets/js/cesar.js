/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});
// download CV
function descargarCV() {
    const enlace = document.createElement('a');
    enlace.href = 'assets/files/CV-CESAR-AYALA.pdf';
    enlace.download = 'CV-CESAR-AYALA.pdf';
    enlace.click();
  }

// Translation system
const translations = {
    es: {
        translate: "Traducir",
        hello: "Hola, Mi nombre es",
        software_engineer: "Ingeniero en Software",
        data_science: "Mastría en Ciencia de Datos e Inteligencia del Negocio",
        print_cv: "Imprimir Hoja de Vida",
        home: "Inicio",
        about: "Acerca de",
        resume: "Hoja de Vida",
        developer: "Desarollador | Ingeniero en Software",
        info: "Información",
        services: "Servicios",
        contact: "Contacto",
        about_me: "Sobre mi",
        personal_info: "Información Personal",
        birth_date: "Fecha de nacimiento",
        email: "Email",
        mobile: "Celular",
        address: "Dirección",
        my_specialties: "Mis Especialidades",
        web_development: "Desarrollo de Aplicaciones Web",
        web_development_desc: "Experto en la creación de aplicaciones web dinámicas y responsivas utilizando tecnologías modernas como HTML5, CSS3, JavaScript y PHP. Experiencia en la integración de métodos de pago seguros y sistemas de seguimiento académico.",
        quality_assurance: "Aseguramiento de la Calidad del Software",
        quality_assurance_desc: "Capacidad comprobada para garantizar la calidad del software mediante el diseño y ejecución de estrategias de prueba. Experiencia en herramientas de automatización como Cypress para optimizar los procesos de control de calidad.",
        programming_languages: "Lenguajes de Programación y Desarrollo Backend",
        programming_languages_desc: "Dominio de lenguajes como C#, Python y PHP. Capacidad para desarrollar sistemas backend escalables y scripts aplicables en contextos académicos y comerciales.",
        system_design: "Análisis de Requisitos y Diseño de Sistemas",
        system_design_desc: "Sólida experiencia en la recopilación de requisitos, identificación de necesidades del cliente y traducción de estas en soluciones técnicas efectivas, especialmente en el ámbito educativo.",
        academic_systems: "Sistemas Académicos y Herramientas de Seguimiento Estudiantil",
        academic_systems_desc: "Experiencia práctica en el diseño e implementación de plataformas para la evaluación del desempeño, monitoreo estudiantil y gestión académica.",
        continuous_learning: "Aprendizaje Continuo y Certificaciones",
        continuous_learning_desc: "Enfoque constante en la actualización profesional mediante cursos y certificaciones en plataformas como Udemy y Harvard (CS50). Comprometido con las mejores prácticas y tendencias del desarrollo de software.",
        my_resume: "Mi Hoja de Vida",
        work_experience: "Experiencia Laboral",
        education: "Educación",
        skills: "Habilidades",
        languages: "Idiomas",
        spanish: "Español",
        english: "Inglés",
        hours_worked: "Horas Trabajadas",
        finished_projects: "Proyectos Acabados",
        satisfied_clients: "Clientes Satisfechos",
        love: "Amor",
        my_services: "Mis Servicios",
        custom_web_development: "Desarrollo de Aplicaciones Web Personalizadas",
        custom_web_development_desc: "Creación de plataformas a medida para empresas e instituciones, adaptadas a necesidades específicas como gestión académica, seguimiento de usuarios, o sistemas administrativos.",
        automation_qa: "Automatización de Pruebas y Control de Calidad (QA)",
        automation_qa_desc: "Implementación de pruebas automatizadas con herramientas como Cypress para asegurar que las aplicaciones funcionen correctamente antes de su despliegue.",
        maintenance_optimization: "Mantenimiento y Optimización de Sistemas Existentes",
        maintenance_optimization_desc: "Diagnóstico, mejora y actualización de aplicaciones web para aumentar su rendimiento, seguridad y escalabilidad.",
        requirements_analysis: "Análisis y Levantamiento de Requisitos de Software",
        requirements_analysis_desc: "Identificación de necesidades del cliente y traducción en especificaciones técnicas claras para el desarrollo de soluciones efectivas.",
        payment_integration: "Integración de Sistemas de Pago y Seguimiento Académico",
        payment_integration_desc: "Desarrollo de módulos para pagos en línea, control de asistencia, evaluación de desempeño y seguimiento de estudiantes en instituciones educativas.",
        training: "Capacitación en Herramientas y Lenguajes de Programación",
        training_desc: "Talleres o asesorías personalizadas sobre tecnologías como HTML5, CSS3, JavaScript, Python, C#, y bases de datos, orientados a estudiantes o equipos técnicos.",
        looking_for_someone: "¿Buscas a alguien que convierta ideas en soluciones reales?",
        write_me: "Escríbeme y trabajemos juntos.",
        about_me_paragraph1: "Soy Ingeniero en Software graduado de la Escuela Superior Politécnica de Chimborazo, con experiencia en el desarrollo de aplicaciones web, automatización de procesos y control de calidad. He participado en diversos proyectos para instituciones educativas como la Universidad Nacional de Chimborazo, la Escuela de Oxford y la Escuela de Lingüística Britania, enfocándome en la implementación de sistemas de seguimiento estudiantil y de evaluación del desempeño. En CITYTECH, estuve a cargo del aseguramiento de calidad, donde desarrollé automatizaciones utilizando Cypress y contribuí a la actualización de manuales y procedimientos.",
        about_me_paragraph2: "Actualmente curso una Maestría en Ciencia de Datos e Inteligencia de Negocios en la Universidad de las Américas (UDLA), lo que me permite fortalecer mis competencias en el análisis avanzado de información, la visualización de datos y la toma de decisiones estratégicas basadas en evidencia. Esta formación complementa mi experiencia en ingeniería de software, potenciando mi capacidad para diseñar soluciones que integren desarrollo tecnológico con análisis inteligente de datos, generando un mayor impacto en la optimización de procesos y la creación de valor para las organizaciones.",
        about_me_paragraph3: "Poseo dominio del inglés a nivel B2 y me he capacitado constantemente en tecnologías como HTML5, CSS3, JavaScript, PHP, C# y Python, incluyendo certificaciones internacionales como el curso CS50 de Harvard. Me apasiona construir soluciones que mejoren procesos y aporten valor real a las organizaciones, ahora con un enfoque más sólido en la analítica y la inteligencia de negocio.",
        // Experience translations
        current_position: "Ingeniero de Software",
        current_company: "Fundación Hogar del Ecuador",
        current_description: "Me encuentro desarrollando dos aplicaciones estratégicas para la Fundación Hogar del Ecuador: una aplicación médica y una aplicación contable, orientadas a optimizar la gestión clínica y administrativa de la institución. Estos proyectos integran módulos para la atención de pacientes, control de inventarios médicos, facturación, contabilidad y reportes gerenciales, con el objetivo de centralizar procesos y mejorar la trazabilidad de la información.",
        iso_9001: "Gestión de calidad en los procesos de desarrollo y mantenimiento del software.",
        iso_27001: "Seguridad de la información para proteger datos clínicos y financieros sensibles.",
        iso_25010: "Modelo de calidad de software, asegurando atributos como usabilidad, confiabilidad y eficiencia.",
        iso_12207: "Procesos de ciclo de vida del software, desde la concepción hasta el mantenimiento.",
        current_additional: "Además, se han considerado principios de arquitectura modular, escalabilidad y cumplimiento normativo, asegurando que las aplicaciones puedan evolucionar junto con las necesidades de la institución y cumplan con estándares internacionales.",
        qa_position: "Jefe de Control de Calidad",
        qa_company: "CITYTECH",
        qa_description: "En esta posición estuve a cargo de asegurar que todos los procesos productivos cumplieran con los estándares de calidad establecidos por la empresa. Desarrollé e implementé automatizaciones con Cypress para pruebas funcionales, lo que permitió optimizar tiempos de revisión y minimizar errores manuales. Además, contribuí activamente en la creación y actualización de manuales de procedimientos y normas de calidad, asegurando la consistencia en la producción y facilitando la capacitación de nuevos colaboradores.",
        web_dev_position: "Desarrollador de Aplicación Web",
        britania_company: "Escuela de Lingüística Britania",
        britania_description: "Me encargué del análisis y levantamiento de requerimientos para el desarrollo de una aplicación web personalizada para la gestión académica y el seguimiento del rendimiento de los estudiantes. Participé desde la fase de diseño hasta la implementación del sistema, integrando funciones que permiten a los docentes monitorear el progreso académico, registrar incidencias y generar reportes automatizados. El sistema se adaptó a las necesidades específicas de la institución.",
        tracking_position: "Desarrollador de Sistema de Seguimiento",
        unach_company: "Universidad Nacional de Chimborazo, Riobamba",
        unach_description: "Desarrollé e implementé un sistema de gestión del desempeño orientado a evaluar y recompensar a profesores y personal administrativo en función de sus logros y contribuciones institucionales. Este sistema permite establecer objetivos, registrar avances y generar reportes de cumplimiento, facilitando la toma de decisiones respecto a incentivos y reconocimientos institucionales. Además, trabajé en asegurar la usabilidad del sistema para todos los perfiles de usuario.",
        oxford_position: "Desarrollador Web",
        oxford_company: "Escuela de Oxford, Riobamba",
        oxford_description: "Lideré el desarrollo de una aplicación web orientada a estudiantes, que incluye funcionalidades como sistema de pagos en línea, seguimiento académico y acceso a recursos educativos. El proyecto incluyó diseño UI/UX adaptado a dispositivos móviles, implementación de bases de datos y pruebas funcionales. Este sistema ayudó a la institución a modernizar su gestión académica y mejorar la experiencia digital de sus estudiantes.",
        // Education translations
        fourth_level: "Cuarto Nivel:",
        masters_degree: "Maestria en Ciencias De datos",
        udla_status: "Universidad de las Americas (cursando)",
        third_level: "Tercer Nivel:",
        software_engineer_degree: "Ingeniero en Software",
        espol: "Escuela Superior Politécnica de Chimborazo.",
        high_school: "Colegio:",
        bachelor: "Bachiller",
        fatima_school: "Escuela Nuestra Señora de Fátima.",
        english_level: "Inglés:",
        b2_level: "B2",
        usfq: "Universidad San Francisco de Quito."
    },
    en: {
        translate: "Translate",
        hello: "Hello, My name is",
        software_engineer: "Software Engineer",
        data_science: "Master's in Data Science and Business Intelligence",
        print_cv: "Print Resume",
        home: "Home",
        about: "About",
        resume: "Resume",
        developer: "Developer | Software Engineer",
        info: "Information",
        services: "Services",
        contact: "Contact",
        about_me: "About me",
        personal_info: "Personal Information",
        birth_date: "Date of birth",
        email: "Email",
        mobile: "Mobile",
        address: "Address",
        my_specialties: "My Specialties",
        web_development: "Web Application Development",
        web_development_desc: "Expert in creating dynamic and responsive web applications using modern technologies such as HTML5, CSS3, JavaScript and PHP. Experience in integrating secure payment methods and academic tracking systems.",
        quality_assurance: "Software Quality Assurance",
        quality_assurance_desc: "Proven ability to ensure software quality through the design and execution of testing strategies. Experience with automation tools like Cypress to optimize quality control processes.",
        programming_languages: "Programming Languages and Backend Development",
        programming_languages_desc: "Mastery of languages like C#, Python and PHP. Ability to develop scalable backend systems and scripts applicable in academic and commercial contexts.",
        system_design: "Requirements Analysis and System Design",
        system_design_desc: "Solid experience in requirements gathering, customer needs identification and translation into effective technical solutions, especially in the educational field.",
        academic_systems: "Academic Systems and Student Tracking Tools",
        academic_systems_desc: "Practical experience in designing and implementing platforms for performance evaluation, student monitoring and academic management.",
        continuous_learning: "Continuous Learning and Certifications",
        continuous_learning_desc: "Constant focus on professional updating through courses and certifications on platforms like Udemy and Harvard (CS50). Committed to best practices and software development trends.",
        my_resume: "My Resume",
        work_experience: "Work Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        spanish: "Spanish",
        english: "English",
        hours_worked: "Hours Worked",
        finished_projects: "Finished Projects",
        satisfied_clients: "Satisfied Clients",
        love: "Love",
        my_services: "My Services",
        custom_web_development: "Custom Web Application Development",
        custom_web_development_desc: "Creation of tailored platforms for companies and institutions, adapted to specific needs such as academic management, user tracking, or administrative systems.",
        automation_qa: "Test Automation and Quality Control (QA)",
        automation_qa_desc: "Implementation of automated tests with tools like Cypress to ensure applications work correctly before deployment.",
        maintenance_optimization: "Maintenance and Optimization of Existing Systems",
        maintenance_optimization_desc: "Diagnosis, improvement and updating of web applications to increase their performance, security and scalability.",
        requirements_analysis: "Software Requirements Analysis and Gathering",
        requirements_analysis_desc: "Identification of customer needs and translation into clear technical specifications for the development of effective solutions.",
        payment_integration: "Payment Systems Integration and Academic Tracking",
        payment_integration_desc: "Development of modules for online payments, attendance control, performance evaluation and student tracking in educational institutions.",
        training: "Training in Tools and Programming Languages",
        training_desc: "Personalized workshops or consultations on technologies such as HTML5, CSS3, JavaScript, Python, C#, and databases, aimed at students or technical teams.",
        looking_for_someone: "Looking for someone who turns ideas into real solutions?",
        write_me: "Write me and let's work together.",
        about_me_paragraph1: "I am a Software Engineer graduated from the Escuela Superior Politécnica de Chimborazo, with experience in web application development, process automation and quality control. I have participated in various projects for educational institutions such as the Universidad Nacional de Chimborazo, Oxford School and Britania Linguistics School, focusing on the implementation of student tracking and performance evaluation systems. At CITYTECH, I was in charge of quality assurance, where I developed automations using Cypress and contributed to the updating of manuals and procedures.",
        about_me_paragraph2: "I am currently pursuing a Master's degree in Data Science and Business Intelligence at Universidad de las Américas (UDLA), which allows me to strengthen my competencies in advanced information analysis, data visualization and evidence-based strategic decision making. This training complements my software engineering experience, enhancing my ability to design solutions that integrate technological development with intelligent data analysis, generating greater impact in process optimization and value creation for organizations.",
        about_me_paragraph3: "I have B2 level English proficiency and have been constantly training in technologies such as HTML5, CSS3, JavaScript, PHP, C# and Python, including international certifications such as Harvard's CS50 course. I am passionate about building solutions that improve processes and bring real value to organizations, now with a stronger focus on analytics and business intelligence.",
        // Experience translations
        current_position: "Software Engineer",
        current_company: "Fundación Hogar del Ecuador",
        current_description: "I am currently developing two strategic applications for Fundación Hogar del Ecuador: a medical application and an accounting application, aimed at optimizing the clinical and administrative management of the institution. These projects integrate modules for patient care, medical inventory control, billing, accounting and management reports, with the objective of centralizing processes and improving information traceability.",
        iso_9001: "Quality management in software development and maintenance processes.",
        iso_27001: "Information security to protect sensitive clinical and financial data.",
        iso_25010: "Software quality model, ensuring attributes such as usability, reliability and efficiency.",
        iso_12207: "Software lifecycle processes, from conception to maintenance.",
        current_additional: "In addition, principles of modular architecture, scalability and regulatory compliance have been considered, ensuring that applications can evolve along with institutional needs and meet international standards.",
        qa_position: "Quality Control Manager",
        qa_company: "CITYTECH",
        qa_description: "In this position I was in charge of ensuring that all production processes met the quality standards established by the company. I developed and implemented Cypress automations for functional testing, which allowed optimizing review times and minimizing manual errors. Additionally, I actively contributed to the creation and updating of procedure manuals and quality standards, ensuring consistency in production and facilitating the training of new collaborators.",
        web_dev_position: "Web Application Developer",
        britania_company: "Britania Linguistics School",
        britania_description: "I was responsible for analyzing and gathering requirements for the development of a customized web application for academic management and student performance tracking. I participated from the design phase to system implementation, integrating functions that allow teachers to monitor academic progress, record incidents and generate automated reports. The system was adapted to the specific needs of the institution.",
        tracking_position: "Tracking System Developer",
        unach_company: "Universidad Nacional de Chimborazo, Riobamba",
        unach_description: "I developed and implemented a performance management system aimed at evaluating and rewarding teachers and administrative staff based on their achievements and institutional contributions. This system allows establishing objectives, recording progress and generating compliance reports, facilitating decision-making regarding institutional incentives and recognition. Additionally, I worked to ensure system usability for all user profiles.",
        oxford_position: "Web Developer",
        oxford_company: "Oxford School, Riobamba",
        oxford_description: "I led the development of a student-oriented web application that includes functionalities such as online payment system, academic tracking and access to educational resources. The project included UI/UX design adapted to mobile devices, database implementation and functional testing. This system helped the institution modernize its academic management and improve the digital experience of its students.",
        // Education translations
        fourth_level: "Fourth Level:",
        masters_degree: "Master's in Data Sciences",
        udla_status: "Universidad de las Américas (in progress)",
        third_level: "Third Level:",
        software_engineer_degree: "Software Engineer",
        espol: "Escuela Superior Politécnica de Chimborazo.",
        high_school: "High School:",
        bachelor: "Bachelor",
        fatima_school: "Nuestra Señora de Fátima School.",
        english_level: "English:",
        b2_level: "B2",
        usfq: "Universidad San Francisco de Quito."
    }
};

let currentLanguage = 'es';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    translatePage();
}

function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update button text
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        const translateText = translateBtn.querySelector('span');
        if (translateText) {
            translateText.textContent = translations[currentLanguage].translate;
        }
    }
    
    // Update document language
    document.documentElement.lang = currentLanguage;
}

// Initialize translation system
document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translateBtn');
    if (translateBtn) {
        translateBtn.addEventListener('click', toggleLanguage);
    }
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});


// google maps
function initMap() {
// Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.674, lng: -73.945},
        zoom: 12,
        scrollwheel:  false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
}
