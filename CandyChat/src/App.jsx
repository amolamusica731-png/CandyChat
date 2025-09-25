import React, { useState } from 'react';
import { Bot, Zap, Shield, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Candy Chat
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Servicios
              </a>
              <a href="#beneficios" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Beneficios
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Contacto
              </a>
            </nav>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Comenzar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Automatización con IA
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              para tu negocio
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Candy Chat ofrece soluciones de automatización inteligente para empresas de todos los tamaños. 
            Optimiza tus procesos, mejora la atención al cliente y aumenta tu productividad con nuestra tecnología de vanguardia.
          </p>
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Comenzar
            </button>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones personalizadas para automatizar y optimizar tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Chatbots Inteligentes",
                description: "Asistentes virtuales 24/7 que resuelven dudas y gestionan consultas de tus clientes."
              },
              {
                icon: <Bot className="w-8 h-8" />,
                title: "Automatización de Procesos",
                description: "Flujos de trabajo automatizados que eliminan tareas repetitivas y aumentan la eficiencia."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Análisis Predictivo",
                description: "Insights avanzados para tomar decisiones estratégicas basadas en datos en tiempo real."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Beneficios para tu Empresa</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cómo Candy Chat puede transformar tu negocio
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                "Reducción de costos operativos hasta en 40%",
                "Mejora del 95% en la satisfacción del cliente",
                "Implementación rápida en menos de 2 semanas",
                "Soporte técnico especializado 24/7"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos listos para ayudarte a transformar tu negocio con IA
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Candy Chat</span>
          </div>
          <p className="text-gray-400 text-center mb-8">
            Automatización con IA para empresas de todos los tamaños
          </p>
          
          {/* Política de Privacidad Desplegable */}
          <div className="mb-8">
            <button
              onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
              className="flex items-center justify-center mx-auto text-gray-300 hover:text-white transition-colors"
            >
              <span className="mr-2">Política de Privacidad</span>
              {isPrivacyOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            {isPrivacyOpen && (
              <div className="mt-4 bg-gray-800 rounded-lg p-6 max-w-4xl mx-auto text-gray-300 text-sm leading-relaxed">
                <h3 className="text-lg font-bold text-white mb-4 text-center">Política de Privacidad – Candy Chat</h3>
                <p className="mb-4"><strong>Última actualización: [24/9/2025]</strong></p>
                
                <p className="mb-4">En Candy Chat utilizamos inteligencia artificial para ayudar a empresas (pequeñas y grandes) a automatizar sus procesos. Esta política explica qué datos recopilamos, por qué los usamos y cómo los protegemos.</p>
                
                <h4 className="font-semibold text-white mb-2">¿Qué información recopilamos?</h4>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Tu nombre, correo electrónico y teléfono (si nos lo das).</li>
                  <li>Datos de tu empresa (como nombre y carga).</li>
                  <li>Información técnica: qué páginas visitas en nuestro sitio, desde qué dispositivo, etc.</li>
                  <li>Si usas nuestros servicios, también puedes haber mensajes o datos que tú o tus clientes envíen a nuestros chatbots o herramientas de IA.</li>
                </ul>
                
                <h4 className="font-semibold text-white mb-2">¿Para qué usamos tus datos?</h4>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Para darte acceso a nuestros servicios.</li>
                  <li>Para responderte, darte soporte o enviarte actualizaciones (solo si nos das permiso).</li>
                  <li>Para mejorar nuestros productos y hacerlos más útiles.</li>
                  <li>Para cumplir con la ley.</li>
                </ul>
                
                <h4 className="font-semibold text-white mb-2">¿Compartimos tus datos?</h4>
                <p className="mb-2">No vendemos tu información. Solo los compartimos si es necesario:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Con proveedores de confianza que nos ayudan a operar (como servicios de hosting o pagos).</li>
                  <li>Si la ley nos lo exige.</li>
                </ul>
                <p className="mb-4">Nunca compartimos con terceros para fines publicitarios sin tu permiso.</p>
                
                <h4 className="font-semibold text-white mb-2">¿Cómo protegemos tus datos?</h4>
                <p className="mb-4">Usamos medidas de seguridad técnicas (como cifrado y contraseñas) para proteger tu información. Aunque no podemos garantizar un 100% de seguridad en internet, hacemos todo lo posible por mantener tus datos a salvo.</p>
                
                <h4 className="font-semibold text-white mb-2">¿Tus derechos?</h4>
                <p className="mb-2">Tienes derecho a:</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Saber qué datos tenemos de ti.</li>
                  <li>Corregirlos o borrarlos.</li>
                  <li>Decimos que ya no queremos que los usemos.</li>
                  <li>Llevarte tus datos en un formato utilizable.</li>
                </ul>
                <p className="mb-4">Para ejercer estos derechos, escribinos a:</p>
                
                <h4 className="font-semibold text-white mb-2">¿Cuánto tiempo guardamos tus datos?</h4>
                <p className="mb-4">Solo el tiempo necesario para darte el servicio o cumplir con obligaciones legales. Si ya no usás Candy Chat, podemos borrar tus datos cuando nos lo pidas.</p>
                
                <h4 className="font-semibold text-white mb-2">¿Pueden usarlos menores?</h4>
                <p className="mb-4">No. Nuestros servicios son solo para empresas y personas mayores de 18 años.</p>
                
                <h4 className="font-semibold text-white mb-2">Cambios</h4>
                <p className="mb-4">Podemos actualizar esta política. Si lo hacemos, lo publicaremos aquí con la nueva fecha.</p>
                
                <h4 className="font-semibold text-white mb-2">¿Preguntas?</h4>
                <p className="mb-4">Escríbenos a:</p>
                
                <p className="text-center font-semibold">Gracias por confiar en Candy Chat</p>
              </div>
            )}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-white transition-colors">Contacto</a>
              <a href="#" className="hover:text-white transition-colors">Soporte</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>
            <p className="text-gray-500 text-sm text-center mt-6">
              © 2024 Candy Chat. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}