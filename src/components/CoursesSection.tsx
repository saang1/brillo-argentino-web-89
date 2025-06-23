/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Users, Award } from 'lucide-react';
import { cursosData } from '@/data/cursosData';
import { useInView } from '@/hooks/useInView';

const CoursesSection = () => {
  const navigate = useNavigate();
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  const navigateToCourse = (courseId: string) => {
    navigate(`/cursos/${courseId}`);
  };

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

  return (
    <section id="cursos" className="py-24 bg-neutral-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Nuestros <span className="text-gradient">Cursos</span>
          </h2>
          <p className="text-xl text-support-gray max-w-3xl mx-auto">
            Capacítate con los mejores profesionales del detailing. Cursos presenciales 
            con certificación oficial y práctica en vehículos reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cursosData.map((course, index) => {
            const [cardRef, cardInView] = useInView({ threshold: 0.15 });
            
            return (
              <div
                key={course.id}
                ref={cardRef}
                className={`
                  group cursor-pointer
                  transition-all duration-700
                  ${cardInView ? `animate-fade-in-up delay-${index * 100}` : 'opacity-0 translate-y-8'}
                `}
                onClick={() => navigateToCourse(course.id)}
              >
                <div className="bg-support-brown/20 rounded-2xl overflow-hidden hover-lift shadow-lg border border-accent-yellow/30 backdrop-blur-sm h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {course.modality}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-yellow transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-support-gray mb-4 line-clamp-2">
                      {course.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-accent-yellow">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent-yellow">
                        <Users className="h-4 w-4" />
                        <span>Grupos reducidos</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent-yellow">
                        <Award className="h-4 w-4" />
                        <span>Certificado</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary-red">
                        {course.price}
                      </div>
                      <button 
                        className="bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToCourse(course.id);
                        }}
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5491169122284?text=Hola%2C%20quiero%20consultar%20por%20los%20cursos%20de%20detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Consultar por Cursos
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
