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
        write_me: "Escríbeme y trabajemos juntos."
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
        write_me: "Write me and let's work together."
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
