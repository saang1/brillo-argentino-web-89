
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, User } from 'lucide-react';
import { cursosData } from '@/data/cursosData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  
  const course = cursosData.find(c => c.id === courseId);

  // Scroll to top when component mounts or courseId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen bg-neutral-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Curso no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Principiante':
        return 'bg-accent-yellow text-neutral-black';
      case 'Intermedio':
        return 'bg-support-brown text-white';
      case 'Avanzado':
        return 'bg-primary-red text-white';
      default:
        return 'bg-support-gray text-white';
    }
  };

  const handleBackToCourses = () => {
    navigate('/#cursos');
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const coursesSection = document.getElementById('cursos');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-neutral-black">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-support-brown/20 to-primary-red/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleBackToCourses}
              className="flex items-center gap-2 text-accent-yellow hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver a Cursos
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="bg-secondary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.modality}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  {course.title}
                </h1>
                
                <p className="text-xl text-support-gray mb-8">
                  {course.fullDescription.split('\n').map((line, i) => (
                  <p key={i} className="mb-4">{line}</p>
                  ))}

                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 text-accent-yellow">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-yellow">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Grupos reducidos</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent-yellow">
                    <Award className="h-5 w-5" />
                    <span className="font-semibold">Certificado incluido</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* <div className="text-3xl font-bold text-primary-red">
                    {course.price}
                  </div> */}
                  <a
                    href={`https://wa.me/5491169122284?text=Hola%2C%20quiero%20inscribirme%20al%20curso%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Inscribirse Ahora
                  </a>
                </div>
              </div>
              
              <div className="relative flex justify-center">
                {course.video ? (
                  <div className="relative w-full max-w-md mx-auto">
                    <video
                      src={course.video}
                      controls
                      autoPlay
                      className="w-full aspect-[9/16] object-cover rounded-2xl shadow-2xl"
                      preload="metadata"
                    >
                      Tu navegador no soporta videos HTML5.
                    </video>
                    <div className="absolute inset-0 bg-black/10 rounded-2xl pointer-events-none"></div>
                  </div>
                ) : (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Curriculum */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen className="h-8 w-8 text-accent-yellow" />
                    Temario del Curso
                  </h2>
                  <div className="space-y-3">
                    {course.curriculum.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-support-brown/20 rounded-lg border border-accent-yellow/20">
                        <CheckCircle className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    ¿Por qué elegir este curso?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-support-brown/20 to-primary-red/20 rounded-xl border border-accent-yellow/30">
                        <Award className="h-12 w-12 text-accent-yellow mx-auto mb-4" />
                        <p className="text-white font-semibold">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Instructor */}
                <div className="bg-support-brown/20 p-6 rounded-2xl border border-accent-yellow/30">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-accent-yellow" />
                    Instructor
                  </h3>
                  <p className="text-support-gray">{course.instructor}</p>
                </div>

                {/* Requirements */}
                <div className="bg-support-brown/20 p-6 rounded-2xl border border-accent-yellow/30">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Requisitos
                  </h3>
                  <ul className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-support-gray">
                        <CheckCircle className="h-4 w-4 text-accent-yellow mt-1 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certification */}
                <div className="bg-gradient-to-br from-accent-yellow/20 to-support-brown/20 p-6 rounded-2xl border border-accent-yellow/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent-yellow" />
                    Certificación
                  </h3>
                  <p className="text-support-gray mb-4">{course.certification}</p>
                  <p className="text-sm text-accent-yellow">
                    Certificado oficial reconocido en la industria del detailing
                  </p>
                </div>

                {/* CTA */}
                <div className="bg-primary-red/20 p-6 rounded-2xl border border-primary-red/50 text-center">
                  <h3 className="text-xl font-bold text-white mb-4">
                    ¿Listo para comenzar?
                  </h3>
                  <p className="text-support-gray mb-6">
                    Inscríbete ahora y da el primer paso hacia tu especialización profesional
                  </p>
                  <a
                    href={`https://wa.me/5491169122284?text=Hola%2C%20quiero%20inscribirme%20al%20curso%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full block text-center"
                  >
                    Inscribirse por WhatsApp
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CourseDetail;
