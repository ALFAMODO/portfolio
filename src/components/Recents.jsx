"use client"

import { ArrowRight, Star, Camera, Zap, Play, Target, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const LatestProjectHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/5 via-transparent to-transparent opacity-30"></div>
        <div 
          className="absolute inset-0 bg-gradient-conic from-gray-900/10 via-transparent to-gray-900/5 opacity-20 transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gray-200 rounded-lg rotate-45 animate-float opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-gray-400 rotate-12 animate-spin-slow"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className={`text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Latest Project Badge */}
            <div className="flex items-center gap-4 mb-8 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-900/20 rounded-full blur-md animate-pulse"></div>
                <div className="relative w-12 h-12 bg-gradient-to-r from-gray-900 to-gray-700 rounded-full flex items-center justify-center border-2 border-gray-300">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-700 text-sm font-medium tracking-wide uppercase">Latest Project</span>
                <div className="flex items-center gap-1 bg-gray-900 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-200">
                  <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                  <span className="text-sm font-semibold text-white">Featured</span>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="mb-8 overflow-hidden">
              <h1 className={`text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-none transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default">ALPHAMODE</span>
                <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-default bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent ml-4">
                  FITNESS
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <div className="mb-8 overflow-hidden">
              <h2 className={`text-3xl lg:text-4xl font-light text-gray-800 mb-6 leading-tight transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                AI-Powered Fitness
                <br />
                <span className="text-gray-600 italic">Revolution</span>
              </h2>
            </div>
            
            {/* Description */}
            <p className={`text-lg text-gray-600 mb-12 leading-relaxed max-w-xl font-light tracking-wide transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Revolutionary AI-powered fitness companion that transforms how you track workouts, 
              monitor nutrition, and achieve peak performance through intelligent photo analysis.
            </p>
            
            {/* Technology Stack */}
            <div className={`mb-8 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'AI/ML', 'Computer Vision', 'Firebase', 'Node.js'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <Link href={'/project/alphamode-fitness'}>
                <button 
                  className="group bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-6 rounded-2xl transition-all duration-500 flex items-center gap-4 text-base shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/30 hover:scale-105 border-2 border-transparent hover:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>View Project Details</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              
              <button 
                className="group border-2 border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-900 font-semibold px-8 py-6 rounded-2xl transition-all duration-500 flex items-center gap-3 hover:border-gray-400 hover:scale-105"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                View on GitHub
              </button>
            </div>

            {/* Project Stats */}
            <div className={`flex items-center gap-8 text-gray-600 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5.0★</div>
                <div className="text-sm">App Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm">Downloads</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm">AI Accuracy</div>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className={`flex justify-center lg:justify-end relative transition-all duration-1200 delay-600 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
            <div className="relative z-20 group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gray-400/20 rounded-[50px] blur-3xl group-hover:bg-gray-500/30 transition-all duration-1000 animate-pulse-slow"></div>
              
              {/* Phone container */}
              <div 
                className="relative w-[300px] h-[600px] bg-gradient-to-b from-gray-100 to-white rounded-[50px] p-3 shadow-2xl shadow-gray-900/20 border border-gray-200 hover:scale-105 transition-all duration-700 hover:rotate-1"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${mousePosition.y * 0.1}deg)`,
                }}
              >
                <div className="w-full h-full bg-white rounded-[42px] overflow-hidden relative border border-gray-200">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-4 bg-gray-50/80 backdrop-blur-sm border-b border-gray-100">
                    <span className="text-gray-900 font-medium text-sm">9:41</span>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <div 
                            key={i} 
                            className={`w-1 h-1 rounded-full transition-all duration-500 ${i <= 3 ? 'bg-gray-900 animate-pulse' : 'bg-gray-300'}`}
                            style={{ animationDelay: `${i * 100}ms` }}
                          ></div>
                        ))}
                      </div>
                      <div className="w-6 h-3 border border-gray-700 rounded-sm">
                        <div className="w-4 h-2 bg-gray-900 rounded-sm ml-0.5 mt-0.5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between px-6 py-6 bg-gray-50/50 backdrop-blur-sm border-b border-gray-200">
                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-180 hover:text-gray-900 transition-colors duration-300" />
                    <span className="text-gray-900 font-semibold text-lg tracking-wide">ALPHAMODE</span>
                    <Target className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors duration-300 hover:rotate-90" />
                  </div>
                  
                  {/* Camera View */}
                  <div className="mx-4 h-[380px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl relative overflow-hidden mt-4 border border-gray-200">
                    {/* Scanning animation overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent animate-scan"></div>
                    
                    {/* Scanner Frame */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-56 h-40 border-2 border-gray-900/80 rounded-2xl relative animate-pulse-border">
                        {/* Corner indicators */}
                        {[
                          { pos: '-top-3 -left-3', border: 'border-l-4 border-t-4' },
                          { pos: '-top-3 -right-3', border: 'border-r-4 border-t-4' },
                          { pos: '-bottom-3 -left-3', border: 'border-l-4 border-b-4' },
                          { pos: '-bottom-3 -right-3', border: 'border-r-4 border-b-4' },
                        ].map((corner, i) => (
                          <div 
                            key={i}
                            className={`absolute ${corner.pos} w-6 h-6 ${corner.border} border-gray-900 animate-pulse`}
                            style={{ animationDelay: `${i * 200}ms` }}
                          ></div>
                        ))}
                        
                        {/* Center target */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-gray-900 rounded-full animate-ping"></div>
                          <div className="absolute w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* AI Processing indicator */}
                    <div className="absolute top-4 left-4 bg-gray-900/10 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-300">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-900 text-xs font-medium">AI SCANNING</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between px-8 py-8">
                    <div className="w-12 h-12 bg-gray-100 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-110">
                      <Zap className="w-6 h-6 text-gray-700 animate-pulse" />
                    </div>
                    
                    {/* Capture button */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gray-900/30 rounded-full blur-md animate-pulse"></div>
                      <div className="relative w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-gray-200">
                        <Camera className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 bg-gray-100 backdrop-blur-sm rounded-full border border-gray-200 hover:bg-gray-200 transition-all duration-300 hover:scale-110"></div>
                  </div>
                  
                  {/* Scan indicator */}
                  <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gray-900 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3 border border-gray-300 shadow-2xl animate-float">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-semibold tracking-wide">SCAN WORKOUT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(17, 24, 39, 0.8); }
          50% { border-color: rgba(17, 24, 39, 1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        .animate-pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .grid {
            gap: 2rem;
          }
          
          h1 {
            font-size: 2.5rem;
          }
          
          h2 {
            font-size: 1.75rem;
          }
          
          .phone-container {
            width: 250px;
            height: 500px;
          }
        }
      `}</style>
    </section>
  );
};

export default LatestProjectHero;